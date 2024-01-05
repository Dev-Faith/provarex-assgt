import React from "react";
import { BiHomeAlt, BiMessageSquareDetail } from "react-icons/bi";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { GiRecycle } from "react-icons/gi";
import { TfiWallet } from "react-icons/tfi";
import { MdOutlineAnalytics } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiHelpCircle } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";

const SideMenu = () => {
  return (
    <div className="flex flex-col gap-[1rem] p-[1rem] bg-gray-200 h-screen pt-[2rem] w-[18rem]">
      <div className="logo flex items-center justify-start text-center gap-[1rem]">
        <div className="logo h-[2rem] w-[2rem] rounded-full bg-black"></div>
        <h1 className="font-extrabold">FINTECHI</h1>
      </div>
      <div className="divider-container w-full flex justify-center">
        <div className="divider h-[1px] w-[15rem] bg-gray-400 flex items-center justify-center"></div>
      </div>
      <div className="main flex flex-col  mt-[2rem] h-full">
        <div className="menu flex flex-col gap-[1rem]">
          <div className="nav-link flex items-center justify-items-center gap-[.5rem] text-white bg-black py-[.5rem] px-[1rem] rounded-[.5rem] cursor-pointer">
            <BiHomeAlt />
            <p>Dashboard</p>
          </div>
          <div className="h-[2rem]">
            <div className="nav-link flex items-center justify-items-center gap-[.5rem] px-[1rem] w-full hover:border border-gray-500 rounded-[.5rem] py-[.5rem] cursor-pointer">
              <LiaFileInvoiceSolid className="text-gray-600" />
              <p className="text-gray-600">Invoice</p>
            </div>
          </div>
          <div className="h-[2rem]">
            <div className="nav-link flex items-center justify-items-center gap-[.5rem] px-[1rem] w-full hover:border border-gray-500 rounded-[.5rem] py-[.5rem] cursor-pointer">
              <BiMessageSquareDetail className="text-gray-600" />
              <div className="flex gap-[2rem] items-center  w-full">
                <p className="text-gray-600">Messages</p>
                <div className="flex justify-end w-full">
                  <div className="message-count flex h-[18px] w-[18px] rounded-full bg-black text-[8px] text-white justify-center items-center text-center">
                    11
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[2rem]">
            <div className="nav-link flex items-center justify-items-center gap-[.5rem] px-[1rem] hover:border border-gray-500 rounded-[.5rem] py-[.5rem] cursor-pointer">
              <TfiWallet className="text-gray-600" />
              <p className="text-gray-600">My Wallets</p>
            </div>
          </div>
          <div className="h-[2rem]">
            <div className="nav-link flex items-center justify-items-center gap-[.5rem] px-[1rem] hover:border border-gray-500 rounded-[.5rem] py-[.5rem] cursor-pointer">
              <GiRecycle className="text-gray-600" />
              <div className="flex gap-[2rem] items-center w-full">
                <p className="text-gray-600">Activity</p>
                <div className="icon w-full flex justify-end">
                  <RiArrowDropDownLine className="text-gray-600" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[2rem]">
            <div className="nav-link flex items-center justify-items-center gap-[.5rem] px-[1rem] hover:border border-gray-500 rounded-[.5rem] py-[.5rem] cursor-pointer">
              <MdOutlineAnalytics className="text-gray-600" />
              <p className="text-gray-600">Analytics</p>
            </div>
          </div>
        </div>

        <div className="bottom-nav flex flex-col gap-[1rem] h-full justify-end">
          <div className="nav-link flex items-center justify-items-center gap-[.5rem]">
            <FiHelpCircle className="text-[1.3rem] text-gray-600" />
            <p className="text-gray-600">Get Help</p>
          </div>
          <div className="nav-link flex items-center justify-items-center gap-[.5rem]">
            <CiSettings className="text-[1.5rem] text-gray-600" />
            <p className="text-gray-600">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
