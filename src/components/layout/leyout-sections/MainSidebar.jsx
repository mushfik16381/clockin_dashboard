import React, { useContext } from 'react';
import Link from 'next/link';
import { MenuContext } from '@/context/MenuContext';

import { AiFillHome, AiOutlineClose, AiFillSchedule } from 'react-icons/ai';
import { FaUser, FaComments, FaTasks} from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { RiAdminFill } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
import { GoTasklist } from "react-icons/go";

import { SiHelpscout, SiSinglestore } from 'react-icons/si';

const MainSidebar = () => {
  const { open, toggle } = useContext(MenuContext);

  const closeSideBarHandler = () => {
    toggle();
  };

  return (
    <aside
      className={`bg-[#464B71]  left-4 lg:sticky lg:block lg:left-0 overflow-hidden transition-all duration-200 ${open ? 'w-full p-8 block fixed' : 'w-0 hidden'
        } lg:w-80 lg:p-4 max-lg:z-20 shadow-xl`}
    >
      <ul>
        <li className='flex justify-end items-center lg:hidden'>
          <AiOutlineClose
            onClick={closeSideBarHandler}
            className='text-red-500 hover:text-red-800 cursor-pointer'
          />
        </li>

        <li className='flex justify-start items-center text-xl my-4 mt-12 text-white hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <AiFillHome className='mr-2' />
          <Link href='/' onClick={closeSideBarHandler}>
            Home
          </Link>
        </li>
        <li className='flex justify-start items-center text-xl my-4 text-white hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
        <FaUser className='mr-2'/>
          <div class="hs-dropdown relative flex">
            <button className='flex items-center justify-between ' id="hs-dropdown-with-icons" type="button" >
              User
              <svg class="hs-dropdown-open:rotate-180 ml-6 w-2.5 h-2.5 text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>

            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-with-icons">
              <div class="py-2 first:pt-0 last:pb-0">
                <Link class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  Newsletter
                </Link>
                <Link class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  Purchases
                </Link>
                <Link class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  Downloads
                </Link>
                <Link class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  Team Account
                </Link>
              </div>
            </div>
          </div>
        </li>
        <li className='flex justify-start items-center text-xl my-4 text-white hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <RiAdminFill className='mr-2' />
          <Link href='/admin' onClick={closeSideBarHandler}>
            Admin
          </Link>
        </li>
        <li className='flex justify-start items-center text-xl my-4 text-white hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <MdMiscellaneousServices className='mr-2 text-white ' />
          <Link href='/services' onClick={closeSideBarHandler}>
            Services
          </Link>
        </li>
        <li className='flex justify-start items-center text-xl my-4 text-white hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <FaTasks className='mr-2 text-white ' />
          <Link href='/tasklist' onClick={closeSideBarHandler}>
            Tasklist
          </Link>
        </li>
        <li className='flex justify-start items-center text-xl my-4 text-white hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <AiFillSchedule className='mr-2' />
          <Link href='/schedule' onClick={closeSideBarHandler}>
          Schedule
          </Link>
        </li>
        <li className='flex justify-start items-center text-xl my-4 text-white hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <FaComments className='mr-2' />
          <Link href='/comment' onClick={closeSideBarHandler}>
            Comments
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default MainSidebar;
