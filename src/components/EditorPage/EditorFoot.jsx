import React, { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { RiCloseCircleFill } from "react-icons/ri";
import { toast } from "sonner";
import useStore from "../../lib/ZustStore";
import { nanoid } from "nanoid";

function EditorFoot({ setKeyWordStatus }) {
  const { pageInfo, setPageInfo } = useStore((state) => state);
  const [keywords, setKeywords] = useState(pageInfo.keywords || []);

  const handleEnter = (e) => {
    if (e.key !== "Enter") return;
    const inputValue = e.target.value.trim();
    if (inputValue === "") return;

    // Check if keyword already exists
    if (
      keywords.find((keyword) => keyword.value === inputValue.toUpperCase())
    ) {
      toast.error("Keyword already exists");
      return;
    }

    // Check keyword length
    if (inputValue.length > 20) {
      toast.error("Keyword must be less than 20 characters");
      return;
    }

    setKeywords((prev) => [
      ...prev,
      { id: nanoid(), value: inputValue.toUpperCase() },
    ]);
    e.target.value = "";
  };

  const handleDelete = (id) => {
    setKeywords((prev) => prev.filter((keyword) => keyword.id !== id));
  };

  useEffect(() => {
    // Check maximum number of keywords
    if (keywords.length === 30) {
      toast.error("Maximum 30 keywords allowed");
      return;
    } else {
      // Extract only the keyword strings from the keywords array
      const keywordStrings = keywords.map((keyword) => keyword.value);
      // Update the page info with the extracted keyword strings
      setPageInfo("keywords", [...keywordStrings]);
    }
  }, [keywords]);

  useEffect(() => {
    const keywordStrings = pageInfo.keywords.map((keyword) => ({
      id: nanoid(),
      value: keyword,
    }));
    // Update the page info with the extracted keyword strings
    setKeywords(keywordStrings);
  }, []);

  return (
    <div className="w-full max-h-20 overflow-y-scroll  self-center bg-primary border relative border-accent flex items-start justify-start flex-wrap gap-2 p-4 rounded-xl">
      <IoIosCloseCircle
        onClick={() => setKeyWordStatus(false)}
        className="text-xl absolute top-0 right-0 hover:text-accent cursor-pointer"
      />
      {keywords.map((keyword) => (
        <span
          key={nanoid()}
          className="flex text-xs h-fit w-fit rounded-full gap-2 px-2 pr-0 border-solid border border-secondary items-center"
        >
          <span>{keyword.value}</span>
          <RiCloseCircleFill
            onClick={() => handleDelete(keyword.id)}
            className="text-xl hover:text-accent cursor-pointer text-secondary"
          />
        </span>
      ))}
      {keywords.length !== 30 && (
        <input
          type="text"
          onKeyDown={handleEnter}
          placeholder="Enter Keywords"
          className=" px-1 rounded-full flex-1 bg-transparent outline-none border-none"
        />
      )}
    </div>
  );
}

export default EditorFoot;
