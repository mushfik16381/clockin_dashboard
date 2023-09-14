import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { MenuContext } from '@/context/MenuContext';

import logo from '../../../assets/logo.jpeg'
import { AiFillHome, AiOutlineClose, AiFillSchedule } from 'react-icons/ai';
import { FaUser, FaUsers } from 'react-icons/fa';
import { FaBuildingUser} from 'react-icons/fa6';
import { BiSolidPhoneCall, BiChevronDown } from "react-icons/bi";
import { MdMiscellaneousServices, MdReport } from "react-icons/md";
import Image from 'next/image';

const MainSidebar = () => {
  const { open, toggle } = useContext(MenuContext);

  const closeSideBarHandler = () => {
    toggle();
  };
  const [company, setCompany] = useState(true);
  const [team, setTeam] = useState(true);
  // const [service, setService] = useState(true);

  const toggleCompany = () => {
    setCompany(!company);
  };
  const toggleTeam = () => {
    setTeam(!team);
  };
  return (
    <aside
      className={`bg-[#11212E]  left-4 lg:sticky lg:block lg:left-0 overflow-hidden transition-all duration-200 ${open ? 'w-full p-8 block fixed' : 'w-0 hidden'
        } lg:w-80 lg:p-4 max-lg:z-20 shadow-xl`}
    >
      <div>
        <Image src={logo} className="w-[140px]">

        </Image>
      </div>
      <ul>
        <li className='flex justify-end items-center lg:hidden'>
          <AiOutlineClose
            onClick={closeSideBarHandler}
            className='text-red-500 hover:text-red-800 cursor-pointer'
          />
        </li>

        <li className='flex justify-start items-center text-lg my-4 mt-12 text-white   rounded-xl p-2'>
          <AiFillHome className='mr-2' />
          <Link href='/' onClick={closeSideBarHandler}>
            Home
          </Link>
        </li>
        <li className='flex justify-start items-center text-lg my-4 text-white   rounded-xl p-2'>
          <ul className="">
            <li>
              <button className={`block  hasSubMenu ${company ? '' : 'active'}`} onClick={toggleCompany}>
              <span className='flex justify-start items-center'><FaBuildingUser className='mr-2 ' />Company <BiChevronDown className='ml-4 mt-1' /></span>{' '}
              </button>
              <ul className={` text-sm subMenu ${company ? 'hidden' : ''}`}>
              <li>
                  <Link href="/company/addCompany" className="block text-lg pl-8 font-base pt-4 pb-2 ml-3">
                    Add Company
                  </Link>
                </li>
                <li>
                  <Link href="/company/allCompany" className="block text-lg pl-8 font-base  w-full  py-2 ml-3">
                    All Company
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className='flex justify-start items-center text-lg my-4 text-white   rounded-xl p-2'>
            
          <ul className="">
            <li>
              <button className={`block hasSubMenu ${team ? '' : 'active'}`} onClick={toggleTeam}>
               <span className='flex justify-start items-center'><FaUsers className='mr-2 ' /> Team Member <BiChevronDown className='ml-4 mt-1' /></span>{' '}
              </button>
              <ul className={` text-sm subMenu ${team ? 'hidden' : ''}`}>
                <li>
                  <Link href="/company/addCompany" className="block text-lg pl-8 font-base pt-4 pb-2 ml-3">
                    Add Team Member
                  </Link>
                </li>
                <li>
                  <Link href="/company/allCompany" className="block text-lg pl-8 font-base  w-full  py-2 ml-3">
                    All Team Member
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className='flex justify-start items-center text-lg my-4 text-white   rounded-xl p-2'>
          <FaUser className='mr-2  ' />
          <Link href='/services' onClick={closeSideBarHandler}>
            Service User
          </Link>
        </li>
        <li className='flex justify-start items-center text-lg my-4 text-white   rounded-xl p-2'>
          <AiFillSchedule className='mr-2' />
          <Link href='/schedule' onClick={closeSideBarHandler}>
            Schedule
          </Link>
        </li>
        <li className='flex justify-start items-center text-lg my-4 text-white   rounded-xl p-2'>
          <MdReport className='mr-2 ' />
          <Link href='/tasklist' onClick={closeSideBarHandler}>
            Report
          </Link>
        </li>
        <li className='flex justify-start items-center text-lg my-4 text-white   rounded-xl p-2'>
          <BiSolidPhoneCall className='mr-2' />
          <Link href='/comment' onClick={closeSideBarHandler}>
          Call Summery
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default MainSidebar;
