import React, { useEffect, useState } from "react";
import {
  RiAlignCenter,
  RiAlignLeft,
  RiAlignRight,
  RiBold,
  RiCodeFill,
  RiEmotionLine,
  RiFontSansSerif,
  RiItalic,
  RiLinkM,
  RiListOrdered2,
  RiStrikethrough,
  RiSubscript,
  RiSuperscript,
  RiUnderline,
} from "react-icons/ri";
import ClipTxtColor from "./ClipTxtColor";
import ClipFontSize from "./ClipFontSize";
import ClipEmoji from "./ClipEmoji";
import ClipTxtHighLight from "./ClipTxtHighLight";
import ClipFontFamily from "./ClipFontFamily";
import { IoImageOutline } from "react-icons/io5";

const ClipEditor = () => {
  const [txtToggle, setTxtToggle] = useState(true);
  const [selectedTxtNode, setSelectedTxtNode] = useState("");
  const clipClass =
    "hover:bg-accent aspect-square w-7 rounded-lg grid place-content-center";

  const makeBold = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("bold", false, null);
  };
  function makeItalic() {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("italic");
  }
  // Add the rest of the functions here

  const changeColor = (color) => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("foreColor", false, color);
  };

  const changeTxtToCode = () => {
    document.execCommand("styleWithCSS", false, null);
    if (selectedTxtNode) {
      document.execCommand(
        "insertHTML",
        false,
        `<code style="background-color:#E5E5E5;border-radius:4px; padding:1px 4px">${selectedTxtNode}</code>`
      );
    }
  };

  const insertImage = () => {
    const url = prompt("Enter the URL:");
    if (url) {
      document.execCommand("styleWithCSS", false, null);
      document.execCommand(
        "insertHTML",
        false,
        `<img style="border-radius:6px; margin:5px; height:200px;" src=${url} />`
      );
    }
  };
  const highlightText = (value) => {
    if (txtToggle) {
      document.execCommand("styleWithCSS", false, null);
      document.execCommand("hiliteColor", false, value);
      setTxtToggle((prev) => !prev);
    } else {
      document.execCommand("styleWithCSS", false, null);
      document.execCommand("hiliteColor", false, "transparent");
      setTxtToggle((prev) => !prev);
    }
  };

  const insertLink = () => {
    const url = prompt("Enter the URL:");
    if (url) {
      document.execCommand("styleWithCSS", false, null);
      document.execCommand("createLink", false, url);
      document.execCommand("underline");
    }
  };

  const alignLeft = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("justifyLeft");
  };

  const alignCenter = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("justifyCenter");
  };

  const alignRight = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("justifyRight");
  };

  const underlineText = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("underline");
  };

  const strikeThroughText = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("strikeThrough");
  };
  const subScriptTxt = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("subscript");
  };

  const NumberedList = () => {
    // Ensure the document is in a state where execCommand can be used
    document.execCommand("styleWithCSS", false, null);
    // Apply bullet points styling to the selected text
    document.execCommand("insertOrderedList");
  };

  const emojiTxt = (value) => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("insertText", false, value);
  };

  const changeFontFamily = (value) => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("fontName", false, value);
  };

  const superScriptTxt = () => {
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("superscript");
  };

  //   const insertUnorderedList = () => {
  //     document.execCommand("insertUnorderedList");
  //   };

  //   const insertOrderedList = () => {
  //     document.execCommand("insertOrderedList");

  const changeFontSize = (size, textType) => {
    let htmlToInsert = "";
    if (
      textType === "Heading 1" ||
      textType === "Heading 2" ||
      textType === "Heading 3" ||
      textType === "Heading 4" ||
      textType === "Heading 5"
    ) {
      const headingLevel = textType.split(" ")[1]; // Extract the heading level from the textType
      htmlToInsert = `<h${headingLevel} style="font-size: ${size}rem;">${selectedTxtNode}</h${headingLevel}>`;
    } else if (textType === "Paragraph") {
      htmlToInsert = `<p style="font-size: ${size}rem;">${selectedTxtNode}</p>`;
    }
    document.execCommand("styleWithCSS", false, null);
    document.execCommand("insertHTML", false, htmlToInsert);
    setSelectedTxtNode("");
  };

  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection();
      // const toolbar = document.querySelector(".editor-toolbar");

      if (selection.toString().length > 0) {
        const range = selection.getRangeAt(0);
        const selectedText = range.toString();
        setSelectedTxtNode(selectedText);
        // const editableElement = findClosestEditableElement(
        //   range.commonAncestorContainer
        // );

        // if (selectedText && editableElement) {
        //   const rect = range.getBoundingClientRect();
        //   toolbar.style.display = "flex";
        //   toolbar.style.transform = "scale(1)";
        //   toolbar.style.top = `${rect.bottom}px`;
        //   toolbar.style.left = `${rect.left}px`;
        // }
      }
    };

    const findClosestEditableElement = (element) => {
      if (
        element &&
        element.classList &&
        element.classList.contains("parentDiv")
      ) {
        return element;
      }
      if (element && element.parentElement) {
        return findClosestEditableElement(element.parentElement);
      }
      return null;
    };

    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  return (
    <div
      className="w-full  rounded-xl flex gap-1 flex-wrap"
      // style={{ display: "none" }}
    >
      <button onClick={makeBold} className={clipClass}>
        <RiBold />
      </button>
      <button onClick={makeItalic} className={clipClass}>
        <RiItalic />
      </button>

      <ClipTxtColor changeColor={changeColor} clipClass={clipClass} />
      <ClipTxtHighLight highlightText={highlightText} clipClass={clipClass} />
      <button onClick={insertLink} className={clipClass}>
        <RiLinkM />
      </button>
      <ClipFontSize changeFontSize={changeFontSize} clipClass={clipClass} />
      <button onClick={alignLeft} className={clipClass}>
        <RiAlignLeft />
      </button>
      <button onClick={alignCenter} className={clipClass}>
        <RiAlignCenter />
      </button>
      <button onClick={alignRight} className={clipClass}>
        <RiAlignRight />
      </button>
      <button onClick={underlineText} className={clipClass}>
        <RiUnderline />
      </button>
      <button onClick={strikeThroughText} className={clipClass}>
        <RiStrikethrough />
      </button>
      <button onClick={NumberedList} className={clipClass}>
        <RiListOrdered2 />
      </button>
      <ClipFontFamily
        changeFontFamily={changeFontFamily}
        clipClass={clipClass}
      />
      <button onClick={changeTxtToCode} className={clipClass}>
        <RiCodeFill />
      </button>
      <button onClick={subScriptTxt} className={clipClass}>
        <RiSubscript />
      </button>
      <button onClick={superScriptTxt} className={clipClass}>
        <RiSuperscript />
      </button>
      <button onClick={insertImage} className={clipClass}>
        <IoImageOutline />
      </button>

      <ClipEmoji emojiTxt={emojiTxt} clipClass={clipClass} />
      {/* <button onClick={insertUnorderedList}>Unordered List</button>
       <button onClick={insertOrderedList}>Ordered List</button> */}
    </div>
  );
};

export default ClipEditor;
