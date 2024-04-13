import React from "react";
import SideBarWrapper from "../SidebarComponents/SideBarWrapper";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import PasteCards from "../SidebarComponents/PasteCards";

function DashboardSideBar() {
    const [searchValue, setSearchValue] = useState("");
    const [close, setClose] = useState(false);


  return (
    <SideBarWrapper className={` transition-all duration-500 ${close ? "-right-[600px]" : "right-0"} `}>
      <div onClick={() => setClose(!close)} className="absolute z-10 top-10 left-0 bg-primary px-6 py-2 border-t-secondary border-r-secondary border-b-secondary border-2 border-l-transparent  rounded-tr-full rounded-br-full cursor-pointer ">
        <RiCloseFill className="text-2xl text-secondary" />
      </div>

      <div className="w-full mt-20 relative h-fit border-secondary px-2  py-2 rounded-full border-2 border-solid bg-white">
        <input
          type="text"
          className="w-full  rounded-full outline-none pl-2  pr-10"
          placeholder="Search by keywords"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={() => setSearchValue(searchValue)} className="bg-secondary text-primary px-5 py-1  absolute top-1/2 -translate-y-1/2 right-1 rounded-full ">
          Search
        </button>
      </div>

      <PasteCards searchvalue={searchValue}/>
    </SideBarWrapper>
  );
}

export default DashboardSideBar;
