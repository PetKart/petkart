import React, { createContext, useState } from "react";

// Create a single context
const UserContext = createContext();

// Single provider component
export const UserProvider = ({ children }) => {
  // Default user is ADMIN for demo; you can set this dynamically
  // To test SELLER or BUYER, change role to "SELLER" or "BUYER" and username accordingly
  const [user, setUser] = useState({
    role: "ADMIN", // or "PET_SHOP", "SELLER", "BUYER"
    username: "Theekshan", // or "Dasun", "John", "Jane"
  });

  // Helper function to check role (can be used for any role check)
  const checkRole = (roleToCheck) => user.role === roleToCheck;

  // Logout function to clear the user state
  const logout = () => {
    setUser(null);
    // In a real app, you would also clear any tokens from localStorage/sessionStorage
    // localStorage.removeItem('token');
  };

  // User context with all necessary functions
  const userContextValue = {
    user,
    setUser,
    isAdmin: checkRole("ADMIN"),
    isSeller: checkRole("SELLER"),
    isBuyer: checkRole("BUYER"),
    isPetShop: checkRole("PET_SHOP"),
    checkRole, // General purpose function for any role check
    logout, // Logout function to clear user state
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Export context
export { UserContext };
