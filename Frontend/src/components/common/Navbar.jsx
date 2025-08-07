import React from "react";
import { useTheme } from "../../context/useTheme";

const LOGO_SRC = "/assets/logo2.png"; // Change to your logo path

const Navbar = ({
  admin = false,
  petshop = false,
  seller = false,
  buyer = false,
}) => {
  const { darkMode } = useTheme();
  // Color palette for light/dark mode
  const light = {
    bg: "#fff",
    icon: "#7c3aed",
    logoBg: "#fff",
    border: "#a78bfa",
    shadow: "0 2px 8px 0 rgba(124,58,237,0.10)",
  };
  const dark = {
    bg: "#7c3aed",
    icon: "#fff",
    logoBg: "#7c3aed",
    border: "#a78bfa",
    shadow: "0 2px 8px 0 rgba(0,0,0,0.15)",
  };
  const theme = darkMode ? dark : light;

  let headerLabel = "";
  if (admin) headerLabel = "Admin: Theekshan";
  else if (petshop) headerLabel = "Petshop: Dasun";
  else if (seller) headerLabel = "Seller: Ramesh";
  else if (buyer) headerLabel = "Buyer: Bimsara";

  return (
    <nav
      className="w-full flex items-center justify-between px-6 py-2"
      style={{
        background: theme.bg,
        minHeight: 60,
        transition: "background 0.3s",
      }}
    >
      {/* Logo and Role */}
      <div className="flex items-center space-x-4">
        <img
          src={LOGO_SRC}
          alt="Logo"
          className="h-10 w-10 rounded-full object-contain"
          style={{
            background: theme.logoBg,
            padding: 4,
            boxShadow: theme.shadow,
          }}
        />
        {headerLabel && (
          <span
            className="font-semibold text-base"
            style={{ color: theme.icon }}
          >
            {headerLabel}
          </span>
        )}
      </div>
      {/* Right icons */}
      <div className="flex items-center space-x-6">
        {/* Notification bell */}
        <button className="focus:outline-none">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path
              d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"
              stroke={theme.icon}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.73 21a2 2 0 01-3.46 0"
              stroke={theme.icon}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* Profile icon */}
        <button className="focus:outline-none">
          <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="7" r="4" stroke={theme.icon} strokeWidth="2" />
            <path
              d="M5.5 21a8.38 8.38 0 0113 0"
              stroke={theme.icon}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
