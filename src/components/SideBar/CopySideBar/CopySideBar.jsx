import React, { useEffect, useState } from "react";
import SideBarWrapper from "../SidebarComponents/SideBarWrapper";
import { RiCloseFill, RiFacebookCircleFill } from "react-icons/ri";
import ShareLink from "../SidebarComponents/ShareLink";
import QrCode from "../SidebarComponents/QrCode";
import useStore from "../../../lib/ZustStore";
import { toast } from "sonner";
import { useLocalStorage } from "react-use";
import { FaDownload } from "react-icons/fa";
import { BsBoxArrowInUpRight } from "react-icons/bs";

function CopySideBar() {
  const {
    publishStatus,
    setPublishStatus,
    pageInfo,
    editLink,
    setPageInfo,
    updatePageInfo,
    setPageInfoToDB,
  } = useStore((state) => state);
  const [copyValue] = useState(pageInfo.link);
  // const [close, setClose] = useState(false);
  const [privateTo, setPrivateTo] = useState(false);
  const [expiry, setExpiry] = useState("1");
  const [numberAccess, setNumberAccess] = useState(1);
  const [localValue, setLocalValue] = useLocalStorage("dopasteEdit", []);
  const [settings, setSettings] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${process.env.VITE_APP_VIEW}${pageInfo.link}`
    );
    toast("Link Copied");
  };

  const PublishPage = () => {
    if (pageInfo.link) {
      setPageInfoToDB(setLocalValue);
    }
  };

  const downloadQR = () => {
    const qrCodeURL = document
      .getElementById("qrCodeEl")
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  };

  const handleExpiryDurationChange = (e) => {
    const selectedWeeks = parseInt(e.target.value);
    let expiryDate;
    let currentDate = new Date();

    if (selectedWeeks === 0) {
      let oneYearLater = new Date(currentDate);
      oneYearLater.setFullYear(currentDate.getFullYear() + 1);
      expiryDate = oneYearLater.toISOString().slice(0, 10);
    } else {
      let filterDate = new Date(
        currentDate.setDate(currentDate.getDate() + selectedWeeks * 7)
      );
      expiryDate = filterDate.toISOString().slice(0, 10);
    }
    setPageInfo("expiry", expiryDate);
  };

  return (
    <SideBarWrapper
      className={`${
        publishStatus ? "translate-x-0" : "translate-x-full"
      } right-0 transition-all z-50 `}
    >
      <span
        onClick={() => setPublishStatus(false)}
        className="absolute z-10 md:top-3 top-12  bg-primary right-1 hover:opacity-70  border-secondary border  rounded-full rounded-br-full cursor-pointer "
      >
        <RiCloseFill className="text-2xl text-secondary" />
      </span>

      <div className="w-full mt-20 md:mt-8 relative h-fit px-2  py-2 rounded-full border text-sm border-secondary   bg-white">
        <input
          type="text"
          className="w-full  rounded-full outline-none pl-2  pr-10"
          placeholder="Copy Url"
          value={`${process.env.VITE_APP_VIEW}${pageInfo.link}`}
          readOnly
        />
        {editLink && (
          <button
            onClick={handleCopy}
            className="bg-secondary active:scale-90 transition-all text-primary px-5 py-1  absolute top-1/2 -translate-y-1/2 right-1 rounded-full "
          >
            Copy
          </button>
        )}
      </div>

      <div>
        <h4 className=" text-base font-semibold">Share</h4>
        <ShareLink />
      </div>

      <div>
        <div className="border relative border-solid border-accent rounded-md px-2 py-2 transition-all">
          <QrCode linkValue={copyValue} />
          <div className="absolute inset-0 bg-primary/80 grid place-content-center opacity-0 hover:opacity-100">
            <FaDownload
              onClick={downloadQR}
              className="text-5xl text-slate-900 hover:text-secondary cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* <hr className="border  border-accent w-full" />

      <div className="flex gap-4 mt-2 items-center">
        <input
          type="checkbox"
          name=""
          id="private"
          onChange={(e) =>
            setPageInfo("visibility", e.target.checked ? true : false)
          }
          className="bg-secondary h-[18px] w-[18px] aspect-auto cursor-pointer"
        />
        <label
          htmlFor="private"
          className="select-none text-lg font-semibold cursor-pointer"
        >
          Private
        </label>
      </div> */}
      <span
        className="text-sm font-semibold hover:underline cursor-pointer "
        onClick={() => setSettings(!settings)}
      >
        {settings ? "Hide" : "More"} settings
      </span>

      <section>
        <hr className="border border-accent w-full" />

        {settings && (
          <div className="mt-2 flex  gap-4">
            <span className="space-y-1">
              <p className=" select-none text-sm font-semibold">
                Expiry Duration
              </p>
              <select
                name="duration"
                className=" bg-secondary px-10 flex justify-between py-1 text-primary outline-none rounded-md"
                id="dur"
                onChange={handleExpiryDurationChange}
              >
                {[0, 1, 2, 3, 4, 5].map((item, i) => (
                  <option
                    key={i}
                    value={item}
                    selected={pageInfo.expiry === item}
                  >
                    {item === 0 ? "never" : item} {item === 0 ? "" : "weeks"}
                  </option>
                ))}
              </select>
            </span>
            <span className="flex gap-2 px-2 rounded-md border border-accent mt-2 items-center bg-primary text-sm">
              <input
                type="checkbox"
                name=""
                id="onceRead"
                onChange={(e) =>
                  setPageInfo("onceRead", e.target.checked ? true : false)
                }
                className="bg-secondary h-[18px] w-[18px] aspect-auto cursor-pointer"
              />
              <label
                htmlFor="onceRead"
                className="select-none text-nowrap  font-semibold cursor-pointer"
              >
                Delete after read
              </label>
            </span>
          </div>
        )}
      </section>
      {editLink ? (
        <button
          onClick={() => updatePageInfo(editLink, localValue)}
          className=" bg-secondary w-2/3  outline-accent hover:outline text-primary px-4 p-2 rounded-full"
        >
          Update
        </button>
      ) : (
        <button
          onClick={PublishPage}
          className=" bg-secondary w-2/3 outline-accent hover:outline text-primary px-4 p-2 rounded-full"
        >
          Publish Now
        </button>
      )}

      {editLink && (
        <a
          href={`${process.env.VITE_APP_VIEW}${pageInfo.link}`}
          target="_blank"
          className="font-semibold hover:underline flex gap-1 items-center"
        >
          Visit Page
          <BsBoxArrowInUpRight />
        </a>
      )}
      {/* <hr className="border-[1.2px] border-solid border-accent w-full" /> */}
    </SideBarWrapper>
  );
}

export default CopySideBar;
