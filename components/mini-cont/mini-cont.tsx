import React from "react";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import { MdOutlineAddCard } from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";
import { BsUiChecksGrid } from "react-icons/bs";
import { FaStripeS, FaFacebookF, FaRegEye } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import { SiUplabs } from "react-icons/si";
import Image from "next/image";
import chip from "./microchip.jpeg"
import { RiVisaLine } from "react-icons/ri";
const MiniConst = () => {
    return (
        <div className="  border-2 rounded-[1.5rem] p-[2rem] flex flex-col gap-[2rem] h-auto justify-center  items-center">
            <div className="title flex w-full items-center justify-between ">
                <div className="wallet">
                    <p className="font-bold text-[1.5rem]">Wallet</p>
                </div>
                <div className="icon text-gray-500">
                    < TfiLayoutMenuSeparated/>
                </div>
            </div>
            <div className="virtual-card w-full bg-black max-h-[13rem] min-h-[13rem] rounded-[1rem]  shadow-pronounced-elevation p-[1rem] flex flex-col justify-between">
                <div className="top-items flex items-center justify-between">
                    <div className="chip-image"><Image src={chip} height="40" width="80" alt="chip"/></div>
                    <div className="Card-name-logo">
                        <p className="text-white mr-[1rem]">Overpay</p>
                    </div>
                </div>
                <div>
                <div className="Balance&icon text-gray-400 flex items-center gap-[.5rem] mx-[1rem]">
                    <p>Balance</p>
                    <FaRegEye className="cursor-pointer"/>
                </div>
                <div className="balance&Visa text-white flex items-center justify-between mx-[1rem]">
                    <p className="text-[1.5rem]">$34,198.00</p>
                    < RiVisaLine className="text-[4rem]"/>
                </div>
                </div>
            </div> 
            <div className="Slider flex items-center gap-[.5rem] w-full justify-center">
                    <div className="w-[1.5rem] h-[.3rem] rounded-full bg-black"></div>
                    <div className="w-[1.5rem] h-[.3rem] rounded-full bg-gray-200"></div>
             </div>      
            <div className="items-below-slider flex justify-between">
                <div className="item flex flex-col gap-[1rem] w-[5rem] items-center cursor-pointer">
                    <div className="logo text-[1.5rem] border-2 rounded-[.5rem]  w-[3rem] h-[3rem] flex justify-center items-center"><MdOutlineAddCard/></div>
                    <p className="text-gray-500 text-[1rem]">Send</p>
                </div>
                <div className="item flex flex-col gap-[1rem] w-[5rem] items-center cursor-pointer">
                    <div className="logo text-[1.5rem] border-2 rounded-[.5rem]  w-[3rem] h-[3rem] flex justify-center items-center"><MdOutlineAddCard/></div>
                    <p className="text-gray-500 text-[1rem]">Receive </p>
                </div>
                <div className="item flex flex-col gap-[1rem] w-[5rem] items-center cursor-pointer">
                    <div className="logo text-[1.5rem] border-2 rounded-[.5rem]  w-[3rem] h-[3rem] flex justify-center items-center"><TbFileInvoice/></div>
                    <p className="text-gray-500 text-[1rem]">Invoicing</p>
                </div>
                <div className="item flex flex-col gap-[1rem] w-[5rem] items-center cursor-pointer">
                    <div className="logo text-[1.5rem] border-2 rounded-[.5rem] w-[3rem] h-[3rem] flex justify-center items-center"><BsUiChecksGrid/></div>
                    <p className="text-gray-500 text-[1rem]">More</p>
                </div>
            </div>
            <div className="divider h-[.2rem] w-full bg-gray-200"></div>
            <div className="Activity-title flex justify-between items-center w-full">
                <p className="font-bold">Recent Activity</p>
                <p className="text-gray-500 cursor-pointer" >View all</p>
            </div>
            <div className="activities grid gap-[2rem]">
                <div className="activity flex justify-between cursor-pointer">
                    <div className="logo&Title flex items-center gap-[2rem]">
                        <div className="logo"><FaStripeS className="text-violet-700"/></div>
                        <div className="title&title-desc">
                            <p className="font-bold">Stripe</p>
                            <p className="text-gray-500 text-[.8rem]">Deposit</p>
                        </div>
                    </div>
                    <div className="amount-date text-end">
                        <p className="amount font-bold"> +$658.10</p>
                        <p className="date text-gray-500 text-[.8rem]"> Today at 10:45am</p>
                    </div>
                </div>
                <div className="activity flex justify-between cursor-pointer">
                    <div className="logo&Title flex items-center gap-[2rem]">
                        <div className="logo"><FaFacebookF className="text-[1.5rem]"/></div>
                        <div className="title&title-desc">
                            <p className="font-bold">Facebook charge</p>
                            <p className="text-gray-500 text-[.8rem]">Advertisement</p>
                        </div>
                    </div>
                    <div className="amount-date text-end">
                        <p className="amount font-bold"> -$425.00</p>
                        <p className="date text-gray-500 text-[.8rem]"> Today at 8:30am</p>
                    </div>
                </div>
                <div className="activity flex justify-between cursor-pointer">
                    <div className="logo&Title flex items-center gap-[2rem]">
                        <div className="logo"><SiUpwork className="text-green-700 text-[1.5rem]"/></div>
                        <div className="title&title-desc">
                            <p className="font-bold">Upwork</p>
                            <p className="text-gray-500 text-[.8rem]">Business</p>
                        </div>
                    </div>
                    <div className="amount-date text-end">
                        <p className="amount font-bold"> +$1,935.00</p>
                        <p className="date text-gray-500 text-[.8rem]"> Today at 7:35am</p>
                    </div>
                </div>
                <div className="activity flex justify-between cursor-pointer">
                    <div className="logo&Title flex items-center gap-[2rem]">
                        <div className="logo"><SiUplabs className="text-[1.5rem]" /></div>
                        <div className="title&title-desc">
                            <p className="font-bold">Uplabs.com</p>
                            <p className="text-gray-500 text-[.8rem]">Payment</p>
                        </div>
                    </div>
                    <div className="amount-date text-end">
                        <p className="amount font-bold"> +$547.00</p>
                        <p className="date text-gray-500 text-[.8rem]"> Today at 7:00am</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MiniConst;