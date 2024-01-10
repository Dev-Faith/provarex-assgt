import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import CircularProgressBar from "../circularBar/circular";
const StatisticsCard = () => {
  return (
    <div className="border border-gray-200 rounded-[1rem] min-w-[65%] md:w-full p-[1rem] flex flex-col justify-between py-[2rem] px-[1.5rem] min-h-[75%] lg:p-[4rem]">
      <div className="title flex items-center">
        <h1 className="text-[1.5rem] font-bold">Statistics</h1>
        <div className="this-month flex justify-end w-full items-center ">
          <div className="flex items-center bg-gray-200 px-[.5rem] py-[.3rem] rounded-[10px] cursor-pointer">
            <p> View all</p>
            <IoIosArrowForward className="text-[1rem]" />
          </div>
        </div>
      </div>
      <div>
        <div className="mini-card h-auto py-[2rem] px-[2rem] bg-gray-200 rounded-[2rem] flex justify-between min-w-[55%]">
          <CircularProgressBar value={88} max={100} />
          <div className="list-itemss w-full justify-end grid gap-[1rem]">
            <div className="list-items flex items-center justify-end gap-[1rem]">
              <div className="dot h-[.5rem] w-[.5rem] bg-black rounded-full"></div>
               <div className="left">
                <p className="amount font-bold ">$725.00</p>
              <p className="description text-gray-500">Receiving </p>
              </div>
            </div>
            <div className="list-items flex  items-center justify-end gap-[1rem] ">
              <div className="dot h-[.5rem] w-[.5rem] bg-black rounded-full"></div>
              <div className="left flex flex-col">
                <p className="amount font-bold ">$725.00</p>
              <p className="description text-gray-500">Receiving </p>
              </div>
            </div>
            <div className="list-items grid justify-end">
              <p className="amount font-bold">$725.00</p>
              <p className="description">Receiving </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsCard;
