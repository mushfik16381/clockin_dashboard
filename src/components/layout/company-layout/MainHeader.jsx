"use client";

// import { MenuContext } from "@/context/MenuContext";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import UserAreaSelectBox from "./UserAreaSelectBox";
import { BiLogInCircle } from "react-icons/bi";
import Link from "next/link";

const MainHeader = () => {
   // const { toggle } = useContext(MenuContext);
   return (
      <div className="bg-gray-100 shadow-lg z-50 fixed right-0 top-0 w-10/12  px-4 flex justify-end items-center">
         {/* <div>
            <Link >Login</Link>
         </div> */}
         <div className="flex items-center">
            <UserAreaSelectBox />
            <div>
            <div class="border-l border-secondary pl-3 ml-3 space-x-1 flex justify-between items-center">
               {/* <button class="relative p-2 text-secondary  hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                  <span class="sr-only">Notifications</span>
                  <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-700 rounded-full"></span>
                  <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-700 rounded-full animate-ping"></span>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
               </button> */}
               <Link className="text-xl px-2" href='/login'>
                  <BiLogInCircle/>
               </Link>
            </div>
         </div>
         </div>
         
      </div >
   );
};

export default MainHeader;
