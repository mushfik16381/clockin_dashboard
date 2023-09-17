"use client";
import { createContext, useState } from "react";
import { useRouter } from "next/router";

export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
   const [open, setOpen] = useState(false);

   const toggle = () => {
      console.log({ open });
      setOpen((prev) => !prev);
   };

   const [authState, setAuthState] = React.useState({
      token: "",
     });
   
 
   const setUserAuthInfo = ({ data }) => {
    const token = localStorage.setItem("token", data.data);
 
    setAuthState({
     token,
     
    });
  };
 
  // checks if the user is authenticated or not
  const isUserAuthenticated = () => {
   if (!authState.token) {
     return false;
   }
  };
  const info = {
   open, 
   toggle,
   authState,
   setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
   isUserAuthenticated,

}
   return (
      <MenuContext.Provider value={info}>
         {children}
      </MenuContext.Provider>);
};

export default {MenuContextProvider};
