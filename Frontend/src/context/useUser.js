import { useContext } from "react";
import { UserContext } from "./UserContext";

// Main hook that returns all user context data
export const useUser = () => useContext(UserContext);

// Specialized hook that returns only admin status
export const useAdmin = () => {
  const { isAdmin } = useContext(UserContext);
  return { isAdmin };
};
