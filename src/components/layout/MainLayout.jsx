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
    <div className='min-h-screen flex'>
    <MainSidebar  />
      <div className={`${open ? 'max-lg:blur-xl pointer-events-none' : ''} w-full`}>
        <MainHeader />
          <main className='mx-12 my-12'>{children}</main>
      </div>
      {/* <MobileButtonNavigation /> */}
    </div>
  );
};

export default MainLayout;
