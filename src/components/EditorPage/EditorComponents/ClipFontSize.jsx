import React from "react";
import { RiCircleFill, RiFontSize2 } from "react-icons/ri";
import DevDropDown from "../../Common/DevDropDown";

export default function ClipFontSize({ changeFontSize, clipClass }) {
  const Font = [
    {
      txtType:"Paragraph",
      fontSize:1,
    },
    {
    txtType:"Heading 1",
    fontSize:2.5,
  },
  {
    txtType:"Heading 2",
    fontSize:2,
  },
  {
    txtType:"Heading 3",
    fontSize:1.75,
  },
  {
    txtType:"Heading 4",
    fontSize:1.5,
  },
  {
    txtType:"Heading 5",
    fontSize:1.25,
  },
];

  return (
    <DevDropDown
      togButton={
        <button className={clipClass}>
          <RiFontSize2 />
        </button>
      }
    >
      <div className="h-full grid grid-cols-1 gap-1 w-fit text-secondary flex-wrap bg-primary items-center justify-center  p-1 rounded-xl border border-accent ">
        {Font.map((e, i) => (
          <button
            key={i}
            className="bg-white hover:bg-accent rounded-md cursor-pointer"
            onClick={() => changeFontSize(e.fontSize, e.txtType)}
          >
            <span style={{ fontSize: `${e.fontSize}rem` }}>{e.txtType}</span>
          </button>
        ))}
      </div>
    </DevDropDown>
  );
}
