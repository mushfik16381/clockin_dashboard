
import './globals.css';

import React from 'react';
// import Loading from '../components/loading/Loading';


export const metadata = {
  title: 'Care Timer',
  description: 'care time',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
      {/* {!loading ? (
        <React.Fragment>
          <body>{children}</body>
        </React.Fragment>
      ) : (
        <Loading/>
      )} */}
        <React.Fragment>
          {/* <MenuContextProvider> */}
            <body>{children}</body>
          {/* </MenuContextProvider> */}
        </React.Fragment>
      </body>
    </html>
  );
}
