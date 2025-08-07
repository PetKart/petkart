import React, { createContext, useState } from "react";

const SellerContext = createContext();

export const SellerProvider = ({ children }) => {
  const [isSeller, setIsSeller] = useState(false);
  return (
    <SellerContext.Provider value={{ isSeller, setIsSeller }}>
      {children}
    </SellerContext.Provider>
  );
};

export { AdminContext };
