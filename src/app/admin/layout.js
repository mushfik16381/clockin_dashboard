'use client';

import React, { useContext, useEffect } from 'react';
import MainHeader from '../../components/layout/admin-layout/MainHeader';

// import AdminSidebar from './admin-layout/AdminSidebar';
import AdminSidebar from '../../components/layout/admin-layout/AdminSidebar';
// import MobileButtonNavigation from './admin-layout/MobileButtonNavigation';

const MainLayout = ({ children }) => {
  // const { open } = useContext(MenuContext);
  useEffect(() => {
    import('preline')
  }, [])
  return (
    <div className='min-h-screen flex justify-between'>
      {/* {user?.role === "admin" ? (
        <>

          <div className='w-2/12 h-screen fixed bg-secondary px-4 '><MainSidebar /></div>
          <div className='w-10/12 ml-auto'>
            <div className='w-full'><MainHeader /></div>
            <main className='mx-2 mb-12 mt-24'>{children}</main>
          </div>
        </>
      )
        :
        (
          <>

            <div className='w-2/12 h-screen fixed bg-secondary px-4 '><MainSidebar /></div>
            <div className='w-10/12 ml-auto'>
              <div className='w-full'><MainHeader /></div>
              <main className='mx-2 mb-12 mt-24'>{children}</main>
            </div>
          </>
        )
      } */}


      <div className='w-1/5 h-screen fixed bg-secondary px-4 '><AdminSidebar /></div>
      <div className='w-4/5 ml-auto'>
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
