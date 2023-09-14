import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { MenuContext } from '@/context/MenuContext';

import logo from '../../../assets/logo.jpeg'
import { AiFillHome, AiOutlineClose, AiFillSchedule } from 'react-icons/ai';
import { FaUser, FaUsers } from 'react-icons/fa';
import { FaBuildingUser } from 'react-icons/fa6';
import { BiSolidPhoneCall, BiChevronDown } from "react-icons/bi";
import { MdMiscellaneousServices, MdReport } from "react-icons/md";
import Image from 'next/image';

const MainSidebar = () => {
  const { open, toggle } = useContext(MenuContext);

  return (
    <aside
      className={` left-4 h-fit bg-secondary lg:sticky lg:block lg:left-0 overflow-hidden transition-all duration-200 `}
    >
      {/* ${open ? 'w-full p-8 block fixed' : 'w-0 hidden'
        } lg:w-70 lg:p-6 max-lg:z-20 shadow-xl */}
      <div>
        <Image src={logo} className="w-[140px] pt-6">

        </Image>
      </div>
      <ul className='hs-accordion-group'>
        <li className='flex justify-end items-center lg:hidden'>
          <AiOutlineClose

            className='text-red-500 hover:text-red-800 cursor-pointer'
          />
        </li>

        <li className='flex justify-start items-center text-lg my-4 mt-12 text-white   rounded-xl p-2'>
          <AiFillHome className='mr-2' />
          <Link href='/' >
            Home
          </Link>
        </li>
        <li class="hs-accordion " id="account-accordion">
          <Link class="hs-accordion-toggle flex items-center gap-x-2 py-2 px-2 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-lg text-white rounded-md  hover:text-white" href="javascript:;">
            <FaBuildingUser />
            Company

            <svg class="hs-accordion-active:block mx-auto hidden w-3 h-3 text-white " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>

            <svg class="hs-accordion-active:hidden mx-auto block w-3 h-3 text-white " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </Link>

          <div id="account-accordion-child" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
            <ul class="pt-2 pl-2">
              <li>
                <Link href="/company/addCompany" className="block text-lg pl-8 font-base pt-4 pb-2 ml-3 text-white">
                  Add Company
                </Link>
              </li>
              <li>
                <Link href="/company/allCompany" className="block text-lg pl-8 font-base  py-2 ml-3 text-white">
                  All Company
                </Link>
              </li>

            </ul>
          </div>
        </li>
        <li class="hs-accordion" id="account-accordion">
          <Link class="hs-accordion-toggle flex items-center gap-x-2 pt-5 px-2 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-lg text-white rounded-md  hover:text-white" href="javascript:;">
            <FaUsers />
            Team Member

            <svg class="hs-accordion-active:block mx-auto hidden w-3 h-3 text-white " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>

            <svg class="hs-accordion-active:hidden mx-auto block w-3 h-3 text-white " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </Link>

          <div id="account-accordion-child" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
            <ul class="pt-2 pl-2">
              <li>
                <Link href="/team/addTeam" className="block text-lg pl-8 font-base pt-4 pb-2 ml-3 text-white">
                  Add Team Member
                </Link>
              </li>
              <li>
                <Link href="/team/allTeam" className="block text-lg pl-8 font-base  py-2 ml-3 text-white">
                  All Team Member
                </Link>
              </li>

            </ul>
          </div>
        </li>
        <li className='flex justify-start items-center text-lg mt-5 mb-4 text-white   rounded-xl p-2'>
          <FaUser className='mr-2  ' />
          <Link href='/services' >
            Service User
          </Link>
        </li>
        <li className='flex justify-start items-center text-lg my-4 text-white   rounded-xl p-2'>
          <AiFillSchedule className='mr-2' />
          <Link href='/schedule' >
            Schedule
          </Link>
        </li>
        <li className='flex justify-start items-center text-lg my-4 text-white   rounded-xl p-2'>
          <MdReport className='mr-2 ' />
          <Link href='/report' >
            Report
          </Link>
        </li>
        <li className='flex justify-start items-center text-lg my-4 text-white   rounded-xl p-2'>
          <BiSolidPhoneCall className='mr-2' />
          <Link href='/callSummery' >
            Call Summery
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default MainSidebar;
