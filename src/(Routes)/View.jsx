import React, { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaCopy,
  FaExternalLinkAlt,
  FaEye,
  FaFilePdf,
} from "react-icons/fa";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoMdShare } from "react-icons/io";
import { IoKey } from "react-icons/io5";
import { RiSearch2Fill } from "react-icons/ri";
import useStore from "../lib/ZustStore";
import { useParams } from "react-router-dom";
import { GrLike, GrDislike } from "react-icons/gr";
import html2canvas from "html2canvas";
import { BiSolidFileImage } from "react-icons/bi";
import DevDropDown from "../components/Common/DevDropDown";
import ShareLink from "../components/SideBar/SidebarComponents/ShareLink";
import { toast } from "sonner";

const View = () => {
  const {
    getPageBasedOnLink,
    pageInfo,
    totalPageViews,
    totalDislikes,
    totalLikes,
  } = useStore((state) => state);
  const [editStatus, setEditStatus] = useState(false);
  const [likes, setLikes] = useState(false);
  const [dislikes, setDislikes] = useState(false);

  const { "*": pathname } = useParams();
  useEffect(() => {
    getPageBasedOnLink(pathname);
  }, []);

  useEffect(() => {
    const getdoPasteVerify = localStorage.getItem("dopasteEdit");
    if (getdoPasteVerify) {
      const res = JSON.parse(getdoPasteVerify).filter(
        (item) => item === pageInfo.$id
      );
      if (res.length > 0) {
        console.log("first", res);
        setEditStatus(true);
      }
    }
  }, [pageInfo]);
  useEffect(() => {
    if (pageInfo) {
      totalPageViews();
      console.log(pageInfo.visibility);
    }
  }, [pageInfo]);

  useEffect(() => {
    if (pageInfo) {
      if (likes) {
        totalLikes();
      } else {
        totalDislikes();
      }
    }
  }, [likes, dislikes]);


  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${process.env.VITE_APP_VIEW}${pageInfo.link}`
    );
    toast("Link Copied");
  };

  const generatePDF = () => {
    const elementToPrint = document.getElementById('pageContent');
    if (!elementToPrint) {
      console.error('Element not found!');
      return;
    }
    const printWindow = window.open('', '_blank');
    printWindow.document.write(elementToPrint.innerHTML);
    printWindow.document.close();
    printWindow.print();
  }

  return (
    pageInfo &&
    pageInfo.title && (
      <main className="h-screen w-full max-w-6xl mx-auto bg-primary p-1 md:px-5 pb-0 flex gap-3 pr-0 shadow-lg md:flex-row flex-col">
        <section className="h-fit md:h-full md:w-[70%] bg-primary flex flex-col gap-2">
          <h1 className="text-center text-3xl font-semibold">
            {pageInfo.title}
          </h1>
          <div
            id="pageContent"
            className="w-full min-h-[100px]  md:flex-1 p-2 rounded-xl md:rounded-t-xl border border-accent bg-white overflow-y-scroll"
            dangerouslySetInnerHTML={{ __html: pageInfo.content }}
          />
        </section>
        <section className="h-full space-y-4 flex-1 relative">
          <span className=" text-2xl flex justify-end w-full p-2 md:pr-7 items-center gap-3 ">
            {editStatus && (
              <a
                href={`${process.env.VITE_APP_VIEW}edit?=${pageInfo.$id}`}
                target="_blank"
              >
                <button className="bg-secondary  text-primary px-4 p-1 rounded-full text-sm border-2 hover:border-accent">
                  Edit Page
                </button>
              </a>
            )}
            <DevDropDown
              togButton={
                <IoMdShare className="hover:cursor-pointer hover:text-accent" />
              }
            >
              <div className="bg-primary rounded-xl p-1 border border-accent">
                <span className="text-sm text-secondary flex items-center gap-1 py-1 justify-center">
                  {process.env.VITE_APP_VIEW}${pageInfo.link}
                  <FaCopy
                    onClick={handleCopy}
                    className="text-xl cursor-pointer hover:text-accent"
                  />
                </span>
                <ShareLink />
              </div>
            </DevDropDown>
          </span>
          {/* <div className="w-full rounded-l-full bg-white p-3 flex items-center gap-2 border border-r-0 border-accent">
            <RiSearch2Fill className="text-2xl" />
            <input
              type="text"
              name="search"
              placeholder="search"
              className="outline-none"
            />
          </div> */}
          <div className="w-full rounded-full bg-white p-3 flex items-center gap-2 border border-accent">
            <HiMiniUserCircle className="text-2xl" />
            <span>{pageInfo.author}</span>
          </div>
          <div className="w-full rounded-full bg-white p-3 flex items-center gap-2 border border-accent">
            <FaCalendarAlt className="text-2xl" />
            <span>
              {(() => {
                const date = new Date(pageInfo.$updatedAt);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              })()}
            </span>
          </div>
          {pageInfo.keywords.length > 0 && (
            <div className="w-full flex-col rounded-xl bg-white p-3 gap-4 border border-accent">
              <span className="flex items-center gap-2">
                <IoKey className="text-2xl" />
                <p>Keywords</p>
              </span>
              <div className="w-full p-1 flex gap-2 max-h-40 overflow-y-scroll">
                {pageInfo.keywords.map((keyword, i) => (
                  <span
                    key={i}
                    className="flex text-xs px-2 h-fit w-fit rounded-full gap-2  border-solid border border-secondary items-center"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="w-full rounded-full divide-x-2 divide-accent bg-white p-1 grid grid-cols-2 gap-2 border  border-accent">
            <div className="w-full flex divide-x-2  gap-4 rounded-full justify-around p-2 px-3 border border-accent">
              <div className="flex items-center gap-2">
                <GrLike
                  onClick={() => {
                    setLikes(true);
                    setDislikes(false);
                  }}
                  className="text-xl cursor-pointer transition-colors hover:text-green-500"
                />
                <span className="text-xl">{pageInfo.likes}</span>
              </div>
              <div className="flex items-center  gap-2 pl-2">
                <GrDislike
                  onClick={() => {
                    setLikes(false);
                    setDislikes(true);
                  }}
                  className="text-xl transition-colors cursor-pointer  hover:text-red-500"
                />
                <span className="text-xl  ">{pageInfo.dislikes}</span>
              </div>
            </div>
            <div className="px-3 flex  items-center justify-center gap-2 place-content-center ">
              <FaEye className="text-xl " />
              <p className="font-semibold">{pageInfo.viewCount}</p>
            </div>
          </div>
          <button
            onClick={generatePDF}
            className="flex shadow-md items-center gap-2 active:border-secondary hover:bg-accent font-semibold w-1/2  bg-white p-2 px-4 rounded-full border border-accent mx-auto md:mx-0"
          >
            <BiSolidFileImage className="text-2xl" />
            Save as PDF
            {/* do not remove this update in the future */}
            {/* {pageInfo && pageInfo.title && <PDFGenerator pageInfo={pageInfo} />} */}
          </button>
          <a
            href="/"
            target="_blank"
            className="absolute bottom-5 hover:underline left-2 flex items-center gap-2"
          >
            Published By do-paste
            <FaExternalLinkAlt className="text-xl" />
          </a>
        </section>
      </main>
    )
  );
};

export default View;
