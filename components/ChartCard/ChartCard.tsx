import React from "react";
import Chart from "../chart";

interface Card {
  title: string;
  amount: string;
  badge: React.JSX.Element;
}

const ChartCard = ({ title, amount, badge }: Card) => {
  return (
    <div className="px-[1rem] border boder-gray-200 pt-[1rem] rounded-[20px] w-2/5 flex flex-col justify-around h-auto">
      <div className="encapsule flex items-center w-full px-[1rem] ">
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
