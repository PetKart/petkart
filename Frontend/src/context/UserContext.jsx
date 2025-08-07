import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Default user is ADMIN for demo; you can set this dynamically
  // To test SELLER or BUYER, change role to "SELLER" or "BUYER" and username accordingly
  const [user, setUser] = useState({
    role: "ADMIN", // or "PET_SHOP", "SELLER", "BUYER"
    username: "Theekshan", // or "Dasun", "John", "Jane"
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
