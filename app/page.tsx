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
    <main className="flex gap-[10rem]  h-screen">
      <div className="side-menu">
        <SideMenu />
      </div>
      <div className="main">
        <div className="main-content">
          <Navbar />
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
