"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CiMenuFries } from "react-icons/ci";
import { RiArrowDropDownLine , RiSearch2Line} from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { BiHomeAlt, BiMessageSquareDetail } from "react-icons/bi";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { GiRecycle } from "react-icons/gi";
import { TfiWallet } from "react-icons/tfi";
import { MdOutlineAnalytics } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import {useState} from "react"

export function Burger() {
  const [isClicked, setIsClicked] = useState(false); 
  return (
    <div>
    <Sheet>
    <SheetTrigger><CiMenuFries className={``} onClick ={()=>setIsClicked(true)}/></SheetTrigger>
    <SheetContent setIsClicked = {setIsClicked}>
    <div className=" h-[90%] flex flex-col items-center mt-[2rem]">
      <div className="flex flex-col items-center gap-[1rem]">
      <div className="h-[4rem] w-[4rem] bg-black rounded-full text-white flex items-center justify-center text-[2rem] justify-self-center">
        <p>A</p>
      </div>
      <p>Momina K.</p>
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
                  <RiArrowDropDownLine className="text-gray-600 text-[2rem]" />
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

        <div className="bottom-nav flex flex-col gap-[1rem] h-full justify-end px-[.5rem]">
          <div className="nav-link flex items-center justify-items-center gap-[.6rem]">
            <div>
               <FiHelpCircle className="text-[1.2rem] text-gray-600" />
            </div>
            <p className="text-gray-600">Get Help</p>
          </div>
          <div className="nav-link flex items-center justify-items-center gap-[.5rem]">
            <CiSettings className="text-[1.5rem] text-gray-600" />
            <p className="text-gray-600">Settings</p>
          </div>
        </div>
      </div>
    </div>
    </SheetContent>
  </Sheet>
</div>
  )
}
