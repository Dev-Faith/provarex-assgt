"use client";
import Image from "next/image";
import React from "react";
import {useState, useEffect} from "react"
import Chart from "@/components/chart";
import Navbar from "../components/Navbar/Navbar";
import ChartCard from "../components/ChartCard/ChartCard";
import SavingsCard from "../components/SavingsCard/SavingsCard";
import StatisticsCard from "../components/StatisticsCard/StatisticsCard";
import SideMenu from "@/components/SideMenu/SideMenu";
import { CgProfile } from "react-icons/cg";
import { BiTask } from "react-icons/bi";
import { IoBriefcaseOutline } from "react-icons/io5";
import LineGraph from "@/components/LineGraph/LineGraph";
import MiniConst from "@/components/mini-cont/mini-cont";

export default function Home() {
 
  return (
      <div className="flex h-screen md:max-w-screen overflow-x-hidden md:overflow-y-hidden w-full gap-[2rem] items-center justify-center md:justify-start md:items-start">
        {/* <div className="side-menu "> */}
        {/* @ts-ignore */}
          <SideMenu/>
        {/* </div> */}
      <div className="main md:h-[85%] h-screen  flex items-center flex-col md:w-[83vw] w-full ">
        {/* @ts-ignore */}
            <Navbar />
          <div className="flex md:h-full flex-col md:flex-row md:items-start md:justify-center md:w-[100%] md:gap-[1rem] overfloy-y-auto md:overfloy-y-hidden w-full">
            <main className="main-content  md:max-h-[100%] md:overflow-y-auto flex flex-col gap-[2rem] md:h-full md:w-[70vw] p-[.5rem] w-full">
              <div className="top-main flex flex-col md:flex-row gap-[2rem] md:justify-start md:min-h-[35%] md:max-h-[35%] md:pb-[2rem] md:overflow-x-auto md:max-w-full w-full md:scroll-smooth p-[2rem] md:p-0 ">
                <ChartCard
                  title="Business Account"
                  amount="$34,198.00"
                  badge={<CgProfile />}
                />
                <ChartCard
                  title="Tax Reserve"
                  amount="$5,248.80"
                  badge={<BiTask />}
                />
                <ChartCard
                  title="Savings"
                  amount="$2,580.11"
                  badge={<IoBriefcaseOutline />}
                />
              </div>
              <div className="middle-main px-[2rem]">
                <LineGraph />
              </div>
              <div className="bottom-main flex md:min-h-[80%] flex-col md:flex-row max-w-[100%] gap-[2rem] items-center md:overflow-x-auto scroll-smooth justify-center md:justify-start px-[2rem]" >
                <SavingsCard />
                <StatisticsCard />
              </div>
            </main>
            <div className="mini-cont max-w-full md:flex justify-center min-h-[100%] max-h-[100%] pt-[11.5rem] py-[4rem] overflow-y-auto overflow-x-hidden flex-col gap-[2rem] items-center p-[4rem] scroll-smooth hidden">
                <MiniConst/>
            </div>
          </div>
        </div>
      </div>
  );
}
