"use client"
import './globals.css';
// import MenuContextProvider from '@/context/MenuContext';
import React from 'react';


export const metadata = {
  title: 'Care Timer',
  description:
    '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <React.Fragment>
          {/* <MenuContextProvider> */}
            <body>{children}</body>
            {/* <MainLayout>{children}</MainLayout> */}
          {/* </MenuContextProvider> */}
        </React.Fragment>
      </body>
    </html>
  );
}
