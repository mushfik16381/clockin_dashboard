"use client";

import { MenuContext } from "@/context/MenuContext";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import UserAreaSelectBox from "./UserAreaSelectBox";
import Image from 'next/image'

const MainHeader = () => {
   const { toggle } = useContext(MenuContext);
   return (
      <div className="bg-gray-100 shadow-lg fixed top-0 left-0 w-full  px-4 flex justify-between items-center">
         <div className="text-2xl font-serif font-extrabold pl-6">
            ClockIn
         </div>
         <div className="flex items-center">
            <UserAreaSelectBox />
            <div>
            <div class="border-l border-secondary pl-3 ml-3 space-x-1">
               <button class="relative p-2 text-secondary  hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                  <span class="sr-only">Notifications</span>
                  <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-700 rounded-full"></span>
                  <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-700 rounded-full animate-ping"></span>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
               </button>
               <button class="relative p-2 text-secondary hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                  <span class="sr-only">Log out</span>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
               </button>
            </div>
         </div>
         </div>
         
      </div >
   );
};

export default MainHeader;
