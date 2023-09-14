"use client";

import { MenuContext } from "@/context/MenuContext";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import UserAreaSelectBox from "./UserAreaSelectBox";
import Image from 'next/image'

const MainHeader = () => {
   const { toggle } = useContext(MenuContext);

   return (
      <div className="bg-[#F98708] sticky w-full shadow-3xl px-4 ">
         <div className="container mx-auto flex justify-end items-center  h-[62px]">
            <div onClick={toggle} className="lg:hidden text-white ">
               <FaBars className="cursor-pointer w-8 h-8" />
            </div>
            <div>
               <UserAreaSelectBox />
            </div>
         </div>
         
      </div>
   );
};

export default MainHeader;
