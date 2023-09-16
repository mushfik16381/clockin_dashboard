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

      <div className='w-2/12 h-screen fixed bg-secondary px-4 '><MainSidebar /></div>
      <div className='w-10/12 ml-auto'>
        <div className='w-full'><MainHeader /></div>
        <main className='mx-2 mb-12 mt-24'>{children}</main>
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
