import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Default user is ADMIN for demo; you can set this dynamically
  const [user, setUser] = useState({
    role: "ADMIN", // or "PET_SHOP"
    username: "Theekshan", // or "Dasun"
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
