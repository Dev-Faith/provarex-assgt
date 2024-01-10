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
import useMediaQueries from "@/lib/mediaquery"

export default function Home() {
 
  return (
      <div className="flex h-screen max-w-screen overflow-x-hidden overflow-y-hidden w-full gap-[2rem]">
        {/* <div className="side-menu "> */}
          <SideMenu />
        {/* </div> */}
      <div className="main h-[85%]  flex items-center flex-col w-[83vw]">
        {/* @ts-ignore */}
            <Navbar />
          <div className="flex h-full  items-start justify-center w-[100%] gap-[1rem]">
            <main className="main-content  max-h-[100%] overflow-y-auto flex flex-col gap-[2rem] h-full w-[70vw] px-[1rem] ">
              <div className="top-main flex gap-[2rem] min-h-[35%] max-h-[35%] pb-[2rem] overflow-x-auto max-w-full ">
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
              <div className="middle-main">
                <LineGraph />
              </div>
              <div className="bottom-main flex min-h-[80%]  max-w-[100%] gap-[2rem] items-center overflow-x-auto">
                <SavingsCard />
                <StatisticsCard />
              </div>
            </main>
                <div className="mini-cont max-w-full flex justify-center min-h-[100%] max-h-[100%] pt-[14rem] py-[4rem] overflow-y-auto overflow-x-hidden flex-col gap-[2rem] items-center p-[4rem]">
                    <MiniConst/>
                </div>
          </div>
        </div>
      </div>
  );
}
