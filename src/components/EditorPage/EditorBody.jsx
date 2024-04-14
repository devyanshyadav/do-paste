import React from "react";
import EditorTextArea from "./EditorTextArea";
import ClipEditor from "./EditorComponents/ClipEditor";

const EditorBody = () => {
  return (
    <section className=" z-10 h-[85%] md:h-[78%] bg-primary rounded-xl p-3 shadow-md flex flex-col gap-1 border border-accent ">
      <ClipEditor />

      <EditorTextArea />
    </section>
  );
};

export default EditorBody;
