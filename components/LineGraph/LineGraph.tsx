import React from 'react'
import Graph from "./graph";
import { RiArrowDropDownLine , RiSearch2Line} from "react-icons/ri";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
const LineGraph = () => {
  return (
    <div>
      <div className="graph w-full px-[1rem] flex flex-col gap-[2rem] border boder-gray-200 rounded-[20px] py-[2rem] ">
        <div className="top-elements flex  w-full px-[2rem]">
          <div className="card-title w-full font-bold">
            <h1>Money Flow</h1>
          </div>
          <div className="card-info flex w-full justify-end gap-[1rem] ">
            <div className="income flex items-center gap-[.3rem]">
              <FaLongArrowAltRight />
              <p>Income</p>
            </div>
            <div className="expenses flex items-center gap-[.3rem]">
              <FaLongArrowAltLeft />
              <p>Expenses</p>
            </div>
            <div className="date flex items-center bg-gray-200 py-[.3rem] px-[.5rem] w-full rounded-[7px]">
              <p className="w-full">Jan 10 - Jan 16</p>
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
        <div className="graph h-[28rem]">
          <Graph />
        </div>

        {/* <Graph/> */}
      </div>
    </div>
  );
}

export default LineGraph;
