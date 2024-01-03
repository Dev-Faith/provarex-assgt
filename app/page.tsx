"use client";
import Image from "next/image";
import React from "react";
import Chart from "@/components/chart";
import Navbar from "../components/Navbar/Navbar";
import ChartCard from "../components/ChartCard/ChartCard";
import SavingsCard from "../components/SavingsCard/SavingsCard";
import StatisticsCard from "../components/StatisticsCard/StatisticsCard";
import SideMenu from "@/components/SideMenu/SideMenu";

export default function Home() {
  return (
    <main className="flex gap-[2rem]  h-screen ">
      <div className="side-menu">
        <SideMenu />
      </div>
      <div className="main w-full">
        <div className="main-content">
          <div className="w-full Navbar ">
            <Navbar />
          </div>
          <div className="top-main">
            <ChartCard />
            <ChartCard />
            <ChartCard />
          </div>
          <div className="middle-main"></div>
          <div className="bottom-main">
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
