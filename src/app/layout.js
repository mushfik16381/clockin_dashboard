
import './globals.css';

import React, { lazy } from 'react';
// import Loading from '../components/loading/Loading';
import MenuContextProvider from '../context/MenuContext';
// const MenuContextProvider = lazy(() => import('../context/MenuContext'));

export const metadata = {
  title: 'Care Timer',
  description: 'care time',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <React.Fragment>
          <MenuContextProvider>
        
            <body>{children}</body>
          </MenuContextProvider>
        </React.Fragment>
      </body>
    </html>
  );
}
