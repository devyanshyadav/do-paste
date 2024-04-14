import React, { useState } from "react";
import EditorTextArea from "./EditorTextArea";
import ClipEditor from "./EditorComponents/ClipEditor";
import { RiFullscreenExitFill, RiFullscreenFill } from "react-icons/ri";

const EditorBody = () => {
  const [togScreen, setTogScreen] = useState(false);
  return (
    <section
      className={` z-10 ${
        togScreen ? "fixed inset-0" : "h-[85%] relative md:h-[78%] rounded-xl"
      } overflow-hidden  bg-primary  p-3 shadow-md flex flex-col gap-1 border border-accent`}
    >
      <ClipEditor />

      <EditorTextArea />
      <span
        onClick={() => setTogScreen(!togScreen)}
        className="absolute bottom-0 cursor-pointer hover:text-accent right-0 text-2xl text-primary rounded-tl-xl p-1 bg-secondary"
      >
        {togScreen ? <RiFullscreenExitFill /> : <RiFullscreenFill />}
      </span>
    </section>
  );
};

export default EditorBody;
