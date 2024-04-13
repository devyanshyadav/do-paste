"use client";
import React from "react";
import { RiCircleFill, RiFontSansSerif, RiFontSize } from "react-icons/ri";
import { LuHighlighter } from "react-icons/lu";
import DevDropDown from "../../Common/DevDropDown";

export default function ClipFontFamily({ changeFontFamily, clipClass }) {
  const fonts = [
    {
      font: "Arial",
      family: "Arial, Helvetica, sans-serif",
    },
    {
      font: "Impact",
      family: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    },
    {
      font: "Courier New",
      family: "'Courier New', Courier, monospace",
    },
    {
      font: "Franklin Gothic Medium",
      family: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    },
    {
      font: "Gill Sans",
      family:
        "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    },
    {
      font: "Lucida Sans",
      family:
        "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
    },
    {
      font: "Segoe UI",
      family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    {
      font: "Times New Roman",
      family: "'Times New Roman', Times, serif",
    },
    {
      font: "Trebuchet MS",
      family:
        "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    },
    {
      font: "Cambria",
      family: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    },
    {
      font: "Verdana",
      family: "Verdana, Geneva, Tahoma, sans-serif",
    },
    {
      font: "Cambria",
      family: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    },
    {
      font: "cursive",
      family: "cursive",
    },
    {
      font: "fantasy",
      family: "fantasy",
    },
    {
      font: "monospace",
      family: "monospace",
    },
    {
      font: "sans-serif",
      family: "sans-serif",
    },
    {
      font: "serif",
      family: "serif",
    },
  ];

  return (
    <DevDropDown
      togButton={
        <button className={clipClass}>
          <RiFontSansSerif />
        </button>
      }
    >
      <div className="h-full flex text-secondary gap-1 w-60 text-sm flex-wrap bg-primary items-center justify-center  p-1 rounded-xl border border-accent ">
        {fonts.map((e, i) => (
          <button
            key={i}
            className="bg-white hover:bg-accent cursor-pointer p-1 rounded"
            style={{ fontFamily: e.family }}
            onClick={() => changeFontFamily(e.family)}
          >
            {e.font}
          </button>
        ))}
      </div>
    </DevDropDown>
  );
}
