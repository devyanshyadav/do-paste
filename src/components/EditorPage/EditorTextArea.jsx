import React, { useEffect, useState } from "react";
import useStore from "../../lib/ZustStore";

const EditorTextArea = () => {
  const { pageInfo, setPageInfo } = useStore((state) => state);
  const [initialContent, setInitialContent] = useState(pageInfo.content);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    setInitialContent(pageInfo.content);
  }, [pageInfo.title]);

  const handleInput = (e) => {
    const text = e.target.innerText;
    const words = text.split(/\s+/).filter((word) => word !== ""); // Split text into words using regex and filter out empty words
    setWordCount(words.length);
    setPageInfo("content", e.target.innerHTML);
  };

  return (
    <>
      <div
        contentEditable={true}
        className="px-3 py-2 list-inside w-full h-full bg-white rounded-lg border border-accent outline-accent overflow-y-scroll"
        onInput={handleInput}
        dangerouslySetInnerHTML={{ __html: initialContent }}
      />
      <p className="absolute top-0 bg-secondary select-none right-0 rounded-bl-lg opacity-70 text-primary text-xs md:text-sm px-2">
        Total Words: {wordCount}
      </p>
    </>
  );
};

export default EditorTextArea;
