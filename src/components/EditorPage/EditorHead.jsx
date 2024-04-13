import React, { useEffect } from "react";
import { HiMiniUser } from "react-icons/hi2";
import { IoSend } from "react-icons/io5";
import useStore from "../../lib/ZustStore";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useLocalStorage } from "react-use";

const EditorHead = () => {
  const {
    setPageInfo,
    pageInfo,
    setPublishStatus,
    generateRandomUrl,
    editLink,
    RenderPageOnLink,
    updatePageInfo,
  } = useStore((state) => state);

  const handleInput = (e) => {
    setPageInfo(e.target.name, e.target.value);
  };
// To store Edit Info to Localstorage 

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const params = searchParams.get("");
  useEffect(() => {
    if (editLink) {
      navigate(`/edit?=${editLink}`);
    }
  }, [editLink]);

  useEffect(() => {
    RenderPageOnLink(params);
    useStore.setState({ editLink: params });
  }, [params]);

  // useEffect(() => {
  //   setLocalValue(pageInfo.editLink);
  // }, [pageInfo]);
  return (
    <header className="w-full rounded-xl bg-primary p-4 grid place-content-center grid-cols-3 gap-4">
      <span className="place-self-start p-1 px-2 rounded-full bg-white border border-secondary flex gap-1 overflow-hidden items-center">
        <HiMiniUser className="text-2xl" />
        <input
          type="text"
          name="author"
          defaultValue={pageInfo.author}
          onChange={handleInput}
          className="outline-none bg-transparent w-fit"
        />
      </span>
      <span className=" place-self-center p-1 px-2 rounded-full bg-white border border-secondary flex gap-1 overflow-hidden items-center">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          onChange={handleInput}
          defaultValue={pageInfo.title}
          className="outline-none bg-transparent w-fit"
        />
      </span>
      <span className="place-self-end">
        <button
          onClick={() => {
            setPublishStatus(true);
          }}
          className="hover:text-accent border border-secondary hover:border-accent p-[5px] px-4 rounded-full bg-secondary text-primary flex items-center justify-center gap-1 "
        >
          Proceed <IoSend className="text-lg" />
        </button>
      </span>
    </header>
  );
};

export default EditorHead;
