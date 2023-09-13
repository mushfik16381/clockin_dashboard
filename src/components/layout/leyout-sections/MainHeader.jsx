"use client";

import { MenuContext } from "@/context/MenuContext";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import UserAreaSelectBox from "./UserAreaSelectBox";
import Image from 'next/image'
import logo from '../../../assets/logo.jpeg'

const MainHeader = () => {
   const { toggle } = useContext(MenuContext);

   return (
      <div className="bg-[#9D78DA] sticky w-full shadow-3xl px-4  border-b-2 border-[#9D78DA]">
         <div className="container mx-auto flex justify-between items-center  h-[62px]">
            <div onClick={toggle} className="lg:hidden text-white ">
               <FaBars className="cursor-pointer w-8 h-8" />
            </div>
            <div>
               <Image src={logo} className="w-[140px]">

               </Image>
            </div>
            <div>
               <UserAreaSelectBox />
            </div>
         </div>
         
      </div>
   );
};

export default MainHeader;
