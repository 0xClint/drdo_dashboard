import React, { createContext, useContext, useState } from "react";
const StateContext = createContext();
const initialState = {
  // chat: false,
  // cart: false,
  // userProfile: false,
  // notification: false,
};

export const ContextProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(true);
  const [isNavbar, setIsNavbar] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  //   const setMode = (e) => {
  return (
    <StateContext.Provider
      value={{
        isSidebar,
        setIsSidebar,
        isNavbar,
        setIsNavbar,
        isAdmin,
        setIsAdmin,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
