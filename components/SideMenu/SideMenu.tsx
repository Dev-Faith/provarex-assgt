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
    <div className="flex flex-col gap-[1rem] p-[1rem] bg-gray-200 h-screen pt-[2rem]">
      <div className="logo flex items-center justify-center text-center">
        FINTECHI
      </div>
      <div className="divider h-[1px] w-[10rem] bg-gray-500 flex items-center justify-center"></div>
      <div className="main flex flex-col gap-[30rem] mt-[2rem]">
        <div className="menu flex flex-col gap-[1rem]">
          <div className="nav-link flex items-center justify-items-center gap-[.5rem] text-white bg-black py-[.5rem] px-[1rem] rounded-[.5rem]">
            <BiHomeAlt />
            <p>Dashboard</p>
          </div>
          <div className="nav-link flex items-center justify-items-center gap-[.5rem] px-[1rem]">
            <LiaFileInvoiceSolid className="text-gray-600" />
            <p className="text-gray-600">Invoice</p>
          </div>
          <div className="nav-link flex items-center justify-items-center gap-[.5rem] px-[1rem]">
            <BiMessageSquareDetail className="text-gray-600" />
            <div className="flex gap-[2rem] items-center">
              <p className="text-gray-600">Messages</p>
              <div className="message-count flex h-[18px] w-[18px] rounded-full bg-black text-[8px] text-white justify-center items-center text-center">
                11
              </div>
            </div>
          </div>
          <div className="nav-link flex items-center justify-items-center gap-[.5rem] px-[1rem]">
            <TfiWallet className="text-gray-600" />
            <p className="text-gray-600">My Wallets</p>
          </div>
          <div className="nav-link flex items-center justify-items-center gap-[.5rem] px-[1rem]">
            <GiRecycle className="text-gray-600" />
            <div className="flex gap-[2rem] items-center">
              <p className="text-gray-600">Activity</p>
              <RiArrowDropDownLine className="text-gray-600" />
            </div>
          </div>
          <div className="nav-link flex items-center justify-items-center gap-[.5rem] px-[1rem]">
            <MdOutlineAnalytics className="text-gray-600" />
            <p className="text-gray-600">Analytics</p>
          </div>
        </div>

        <div className="bottom-nav flex flex-col gap-[1rem]">
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
