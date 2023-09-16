import MainLayout from '@/components/layout/MainLayout';
import './globals.css';
import MenuContextProvider from '@/context/MenuContext';

export const metadata = {
  title: 'Care Timer',
  description:
    '',
};

export default function RootLayout({ children }) {

  return (
    <html lang='en'>
      <body>
        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}
