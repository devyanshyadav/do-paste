import React from "react";
import EditorTextArea from "./EditorTextArea";
import ClipEditor from "./EditorComponents/ClipEditor";

const EditorBody = () => {
  return (
    <section className="flex-1 max-h-[78%] bg-primary rounded-xl p-3 shadow-md flex flex-col gap-1 ">
      <ClipEditor />

      <EditorTextArea />
    </section>
  );
};

export default EditorBody;
