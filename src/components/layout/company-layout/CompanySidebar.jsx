import React, { useContext, useState } from 'react';
import Link from 'next/link';
// import { MenuContext } from '@/context/MenuContext';

import logo from '../../../assets/logo.jpeg'
import { AiFillHome, AiOutlineClose, AiFillSchedule } from 'react-icons/ai';
import { FaUser, FaUsers } from 'react-icons/fa';
import { FaBuildingUser } from 'react-icons/fa6';
import { BiSolidPhoneCall, BiSolidArchiveIn } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineTable } from "react-icons/ai";
import { MdHelp, MdReport } from "react-icons/md";
import { VscTasklist } from "react-icons/vsc";

const MainSidebar = () => {
  // const { open, toggle } = useContext(MenuContext);

  return (
    <aside
      className={` left-4 h-fit bg-secondary lg:sticky lg:block lg:left-0 overflow-hidden transition-all duration-200 `}
    >
      {/* ${open ? 'w-full p-8 block fixed' : 'w-0 hidden'
        } lg:w-70 lg:p-6 max-lg:z-20 shadow-xl */}
      <div className="text-2xl text-white font-serif font-extrabold pl-6 pt-6">
            Care Timer
         </div>
      <ul className='hs-accordion-group'>
        <li className='flex justify-end items-center lg:hidden'>
          <AiOutlineClose

            className='text-red-500 hover:text-red-800 cursor-pointer'
          />
        </li>

        <li className='flex justify-start items-center text-lg  mt-12 text-white   rounded-xl px-2 pt-4'>
          <AiFillHome className='mr-2' />
          <Link href='/company' >
            Dashboard
          </Link>
        </li>
        <li class="hs-accordion" id="account-accordion">
          <Link class="hs-accordion-toggle flex items-center gap-x-2 pt-6 px-2 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-lg text-white rounded-md  hover:text-white" href="javascript:;">
            <FaUsers />
            Team Member

            <svg class="hs-accordion-active:block  hidden w-3 h-3 text-white " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>

            <svg class="hs-accordion-active:hidden  block w-3 h-3 text-white " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </Link>

          <div id="account-accordion-child" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
            <ul class="pt-2 pl-2">
              <li>
                <Link href="/company/worker/addWorker" className="block text-lg pl-6 font-base pt-4 pb-2 ml-2 text-white">
                <span className='flex items-center '>
                    <AiOutlinePlus/><span className='pl-2'>Add Team Member</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/company/worker/allWorker" className="block text-lg pl-6 font-base py-2 ml-2 text-white">
                <span className='flex items-center '>
                    <AiOutlineTable/><span className='pl-2'>All Team Member</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-lg pl-6 font-base py-2 ml-2 text-white">
                <span className='flex items-center '>
                    <BiSolidArchiveIn/><span className='pl-2'>Archive</span>
                  </span>
                </Link>
              </li>

            </ul>
          </div>
        </li>
        <li class="hs-accordion " id="account-accordion">
          <Link class="hs-accordion-toggle flex items-center gap-x-2 pt-6 px-2 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-lg text-white rounded-md  hover:text-white" href="javascript:;">
            <FaUser />
            Service User 

            <svg class="hs-accordion-active:block ml-6 hidden w-3 h-3 text-white " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>

            <svg class="hs-accordion-active:hidden ml-6 block w-3 h-3 text-white " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </Link>

          <div id="account-accordion-child" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
            <ul class="pt-2 pl-2">
              <li>
                <Link href="/company/customer/addCustomer" className="block text-lg pl-6 font-base pt-4 pb-2 ml-2 text-white">
                <span className='flex items-center '>
                    <AiOutlinePlus/><span className='pl-2'>Add Service User</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/company/customer/allCustomer" className="block text-lg pl-6 font-base  py-2 ml-2 text-white">
                <span className='flex items-center '>
                    <AiOutlineTable/><span className='pl-2'>All Service User</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-lg pl-6 font-base  py-2 ml-2 text-white">
                <span className='flex items-center '>
                    <BiSolidArchiveIn/><span className='pl-2'>Archive</span>
                  </span>
                </Link>
              </li>

            </ul>
          </div>
        </li>
        <li class="hs-accordion" id="account-accordion">
          <Link class="hs-accordion-toggle flex items-center gap-x-2 pt-6 px-2 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-lg text-white rounded-md  hover:text-white" href="javascript:;">
            <VscTasklist/>
            Tasklist

            <svg class="hs-accordion-active:block hidden w-3 h-3 text-white " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>

            <svg class="hs-accordion-active:hidden block w-3 h-3 text-white " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </Link>

          <div id="account-accordion-child" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
            <ul class="pt-2 pl-2">
              <li>
                <Link href="/company/tasklist/addTasklist" className="block text-lg pl-6 font-base pt-4 pb-2  text-white ">
                  <span className='flex items-center '>
                    <AiOutlinePlus/><span className='pl-2'>Add Tasklist</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/company/tasklist/allTasklist" className="block text-lg pl-6 font-base  py-2  text-white">
                <span className='flex items-center '>
                    <AiOutlineTable/><span className='pl-2'>All Tasklist</span>
                  </span>
                </Link>
              </li>

            </ul>
          </div>
        </li>
        <li className='flex justify-start items-center text-lg mt-6 text-white   rounded-xl px-2'>
          <MdReport className='mr-2 ' />
          <Link href='/company/report/allReport' >
            Report
          </Link>
        </li>
        <li className='flex justify-start items-center text-lg mt-6 text-white   rounded-xl px-2'>
          <AiFillSchedule className='mr-2  ' />
          <Link href='/company/schedule/addSchedule' >
          Schedule 
          </Link>
        </li>

        <li className='flex justify-start items-center text-lg mt-6 text-white   rounded-xl px-2'>
          <BiSolidPhoneCall className='mr-2' />
          <Link href='/company/callSummery' >
            Call Summery
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default MainSidebar;
