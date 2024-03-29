import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbPigMoney } from "react-icons/tb";
import { Progress } from "@/components/ui/progress";
import { Progress1 } from "@/components/ui/progress1";



const SavingsCard = () => {
  return (
    <div className="savings border border-gray-200 rounded-[1rem] min-w-[65%] p-[1rem] flex flex-col md:min-h-[75%] md:justify-between gap-[2rem] md:gap-0 justify-start py-[2rem] px-[1.5rem] lg:p-[4rem]  md:mt-0  md:mt-0">
      <div className="savings-top flex items-center w-full">
        <h1 className="text-[1.5rem] font-bold">Saving</h1>
        <div className="this-month flex justify-end w-full items-center ">
          <div className="flex items-center bg-gray-200 px-[.5rem] py-[.3rem] rounded-[10px] cursor-pointer">
            <p> This month</p>
            <RiArrowDropDownLine className="text-[1.5rem]" />
          </div>
        </div>
      </div>
      <div className=" savings-mini-card-1 flex flex-col  border border-gray-200 px-[.8rem] py-[1rem] rounded-[.5rem] gap-[1rem] w-full">
        <div className=" flex w-full">
          <div className="flex gap-[1rem] items-center w-full">
            <div className="">
              <div className="mini-logo h-[2rem] w-[2rem] bg-gray-200 flex items-center justify-center rounded-full text-violet-800 bg-violet-200">
                <TbPigMoney />
              </div>
            </div>
            <div className="title-texts w-full ">
              <p>Mutual Funds</p>
              <p className="text-[.75rem] text-gray-400 text-nowrap">
                Monthly Income 75%
              </p>
            </div>
          </div>
          <div className="amount flex">
            <p className="flex justify-end w-full">$900.17</p>
          </div>
        </div>
        <div className="progress-bar">
          <Progress value={75} />
        </div>
      </div>

      <div className=" savings-mini-card-2 flex flex-col  border border-gray-200 px-[.8rem] py-[1rem] rounded-[.5rem] gap-[1rem]">
        <div className=" flex w-full">
          <div className="flex gap-[1rem] items-center w-full">
            <div className="">
              <div className="mini-logo h-[2rem] w-[2rem] bg-gray-200 flex items-center justify-center rounded-full text-green-800 bg-green-200">
                <TbPigMoney />
              </div>
            </div>
            <div className="title-texts w-full ">
              <p>Investment</p>
              <p className="text-[.75rem] text-gray-400 text-nowrap">
                Monthly expense 40%
              </p>
            </div>
          </div>
          <div className="amount flex">
            <p className="flex justify-end w-full">$745.76</p>
          </div>
        </div>
        <div className="progress-bar">
          <Progress1 value={40}  />
        </div>
      </div>
    </div>
  );
}

export default SavingsCard;
