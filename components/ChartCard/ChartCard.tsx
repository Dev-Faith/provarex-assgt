import React from "react";
import Chart from "../chart";

interface Card {
  title: string;
  amount: string;
  badge: Element;
}

const ChartCard = ({ title, amount, badge }: Card) => {
  return (
    <div className="px-[1rem] border boder-gray-200 overflow-visible  pt-[1rem] rounded-[20px]">
      <div className="encapsule flex items-center w-[15rem] px-[1.5rem] ">
        <div className="title-amount w-full">
          <p className="text-[.7rem] w-full text-gray-400">{title}</p>
          <h1 className="text-xl font-bold">{amount}</h1>
        </div>
        <div className="badge w-full flex justify-end text-[1rem]">
          <div className="badge-container h-[2rem] w-[2rem] bg-gray-200 flex justify-center items-center rounded-full">
            {badge}
          </div>
        </div>
      </div>
      <div className="chart w-[13rem] h-[7rem]">
        <Chart />
      </div>
    </div>
  );
};

export default ChartCard;
