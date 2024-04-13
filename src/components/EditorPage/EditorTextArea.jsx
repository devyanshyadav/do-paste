import React, { useEffect, useState } from "react";
import useStore from "../../lib/ZustStore";

const EditorTextArea = () => {
  const { pageInfo, setPageInfo } = useStore((state) => state);
  const [initialContent, setInitialContent] = useState(pageInfo.content);
  useEffect(() => {
    setInitialContent(pageInfo.content);
  }, [pageInfo.title]);

  const handleInput = (e) => {
    setPageInfo("content", e.target.innerHTML);
  };

  return (
    <div
      contentEditable={true}
      className="px-3 py-2 list-inside w-full h-full bg-white rounded-lg border border-accent outline-accent overflow-y-scroll"
      onInput={handleInput}
      dangerouslySetInnerHTML={{ __html: initialContent }}
    />
  );
};

export default EditorTextArea;
