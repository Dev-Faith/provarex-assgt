import React from 'react'
import { RiArrowDropDownLine , RiSearch2Line} from "react-icons/ri";
import { BsBell } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="flex w-full px-[2rem] py-[2rem]">
      <div className="page-title">
        <h1 className="font-extrabold text-xl">Dashboard</h1>
      </div>
      <div className="nav-items flex gap-[1.5rem] justify-end w-full items-center">
        <div className="search-icon h-[2.5rem] w-[2.5rem] bg-gray-200 rounded-full flex justify-center items-center p-[.3rem]">
          <RiSearch2Line />
        </div>
        <div className="alarm-icon h-[2.5rem] w-[2.5rem] bg-gray-200 rounded-full flex justify-center items-center p-[.3rem]">
          <BsBell />
        </div>
        <div className="profile-image flex gap-[.5rem] items-center bg-gray-200 px-[.5rem] py-[.5rem] rounded-[30px]">
          <div className="h-[1.8rem] w-[1.8rem] bg-black rounded-full flex justify-center items-center p-[.3rem] text-white">
            <p>A</p>
          </div>
          <p>Momina K.</p>
          <RiArrowDropDownLine />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
