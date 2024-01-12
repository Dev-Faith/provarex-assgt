"use client"
import React from 'react'
import {useState, useEffect} from "react"
import { RiArrowDropDownLine , RiSearch2Line} from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import profile from "./profile.jpg"
import Image from "next/image"
import { CiMenuFries } from "react-icons/ci";
import {Burger} from "@/components/SideMenu/burgerMenu"
import {Card} from "@/components/SideMenu/Card"
const Navbar =()=> {



  return (
    <div className="flex w-full md:px-[4rem] px-[2rem] py-[2rem]  md:pl-[4rem] items-center bg-white">
      <div className="page-title w-full flex justify-center md:justify-start flex-col md:flex-row gap-[.5rem]">
        <h1 className="font-extrabold text-[2rem] ">Dashboard</h1>
        <div className="md:hidden flex items-center  text-[2rem] w-full gap-[.5rem]">
          <Card/> 
        <p className="text-[1.3rem]">Card</p>
        </div>
      </div>
      <div className="nav-items md:flex gap-[1.5rem] justify-end w-full items-center ">
        <div className="search-icon h-[2.5rem] w-[2.5rem] bg-gray-200 rounded-full md:flex justify-center items-center p-[.3rem] hidden">
          <RiSearch2Line />
        </div>
        <div className="alarm-icon h-[2.5rem] w-[2.5rem] bg-gray-200 rounded-full md:flex justify-center items-center p-[.3rem] hidden">
          <BsBell />
        </div>
        <div className="md:hidden flex justify-end items-center text-[2rem]"><Burger/></div>
        <div className="profile-image md:flex gap-[.5rem] items-center bg-gray-200 px-[.5rem] py-[.5rem] rounded-[30px] hidden">
          <div className="h-[1.8rem] w-[1.8rem] rounded-full flex justify-center items-center p-[.3rem] overflow-hidden text-white bg-black">
            <p>A</p>
          </div>
          <p>Momina K.</p>
          <RiArrowDropDownLine />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
