import React from 'react'
import Graph from "./graph";
import { RiArrowDropDownLine , RiSearch2Line} from "react-icons/ri";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
const LineGraph = () => {
  return (
    <div>
      <div className="graph w-full px-[1rem] flex flex-col  gap-[2rem] border boder-gray-200 rounded-[20px] py-[2rem] ">
        <div className="top-elements flex  w-full px-[1rem] items-center">
          <div className="card-title w-1/2 font-bold">
            <h1>Money Flow</h1>
          </div>
          <div className="card-info flex w-full justify-end gap-[1rem]">
            <div className="income flex items-center gap-[.3rem]">
              <FaLongArrowAltRight />
              <p>Income</p>
            </div>
            <div className="expenses flex items-center gap-[.3rem]">
              <FaLongArrowAltLeft />
              <p>Expenses</p>
            </div>
            <div  className="flex">
              <div className="date flex items-center bg-gray-200 py-[.3rem] px-[.5rem] w-full rounded-[7px] justify-end md:text-[.7rem] cursor-pointer">
                <p className="w-full flex justify-end ">Jan 10 - Jan 16</p>
                <RiArrowDropDownLine className="text-[.9rem]" />
              </div>
            </div>
          </div>
        </div>
        <div className="graph h-auto">
          <Graph />
        </div>

        {/* <Graph/> */}
      </div>
    </div>
  );
}

export default LineGraph;
