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


export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);

const handleScroll = () => {
  const offset = window.scrollY;
  setHasScrolled(offset > 50); // Adjust the number based on when you want the effect to trigger
};

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
      <main className="flex gap-[4rem]  h-screen ">
        <div className="side-menu ">
          <SideMenu />
        </div>
        <div className="main w-full">
          <div className="w-full Navbar">
            <Navbar hasScrolled={hasScrolled} setHasScrolled={setHasScrolled} />
          </div>
          <div className="main-content w-3/5 max-h-[88%] overflow-y-auto p-4 flex flex-col gap-[2rem] h-full">
            <div className="top-main flex gap-[2rem] min-h-[35%] max-h-[35%] pb-[2rem] overflow-y-auto max-w-full ">
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
            <div className="bottom-main flex gap-[2rem] min-h-[50%] max-h-[50%] pb-[2rem]  max-w-full">
              <SavingsCard />
              <StatisticsCard />
            </div>
          </div>
          <div className="mini-content">
            <div className="wallet"></div>
          </div>
        </div>
      </main>
  );
}
