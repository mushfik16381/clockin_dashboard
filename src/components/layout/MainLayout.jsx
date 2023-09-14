'use client';

import React, { useContext, useEffect } from 'react';
import MainHeader from './leyout-sections/MainHeader';

import { MenuContext } from '@/context/MenuContext';
import MainSidebar from './leyout-sections/MainSidebar';
import MobileButtonNavigation from './leyout-sections/MobileButtonNavigation';

const MainLayout = ({ children }) => {
  const { open } = useContext(MenuContext);
  useEffect(() => {
    import('preline')
  }, [])
  return (
    <div className='min-h-screen flex justify-between'>

      <div className='w-3/12 h-screen fixed bg-secondary px-4 '><MainSidebar /></div>
      <div className='w-9/12 ml-auto'>
        <MainHeader />
        <main className='mx-12 mb-12 mt-36 '>{children}</main>
      </div>
      {/* <div className={`${open ? 'max-lg:blur-xl pointer-events-none' : ''} w-full`}>
        <MainHeader />
          <main className='mx-12 my-12'>{children}</main>
      </div> */}
      {/* <MobileButtonNavigation /> */}
    </div>
  );
};

export default MainLayout;
