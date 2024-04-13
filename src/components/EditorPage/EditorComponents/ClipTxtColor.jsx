import React from "react";

import { RiCircleFill, RiFontSize } from "react-icons/ri";
import DevDropDown from "../../Common/DevDropDown";

export default function ClipTxtColor({ changeColor, clipClass }) {
  let color = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Purple",
    "Pink",
    "Brown",
    "Black",
    "White",
    "Gray",
    "Cyan",
  ];

  return (
    <DevDropDown
      togButton={
        <button className={clipClass}>
          <span>
            <RiFontSize />
            <span className="grid grid-cols-3 w-full h-1">
              <p className="bg-red-500"></p>
              <p className="bg-green-500"></p>
              <p className="bg-blue-500"></p>
            </span>
          </span>
        </button>
      }
    >
      <div className="h-full flex gap-1 w-32 flex-wrap bg-primary items-center justify-center  p-1 rounded-xl border border-accent ">
        {color.map((e, i) => (
          <button
            key={i}
            className="bg-white cursor-pointer p-1 rounded-md"
            onClick={() => changeColor(e)}
          >
            <RiCircleFill size={18} style={{ color: e }} className="border rounded-full"/>
          </button>
        ))}
      </div>
    </DevDropDown>
  );
}
