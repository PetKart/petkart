import { Link, useLocation } from "react-router-dom";
import React from "react";
import { useUser } from "../../context/useUser";
import { Home, Package, Settings, Users, UserCheck } from "lucide-react";
import { useTheme } from "../../context/useTheme";

// Custom Accent Green
const ACCENT_COLOR = "#104137";

// For your project logo, adjust the src path to match your assets location.
// Example: "/assets/logo.png"
const LOGO_SRC = "/assets/logo2.png";

const sidebarLinks = {
  ADMIN: [{ name: "Dashboard", path: "/admin/dashboard", icon: Home }],
  PET_SHOP: [{ name: "Dashboard", path: "/petshop/dashboard", icon: Home }],
  SELLER: [
    { name: "Dashboard", path: "/seller/dashboard", icon: Home },
    { name: "Orders", path: "/seller/orders", icon: Package },
    { name: "Profile", path: "/seller/profile", icon: UserCheck },
  ],
  BUYER: [{ name: "Dashboard", path: "/buyer/dashboard", icon: Home }],
};

function Sidebar({
  admin = false,
  petshop = false,
  seller = false,
  buyer = false,
}) {
  const { user } = useUser();
  const location = useLocation();
  const { darkMode, toggleTheme } = useTheme();
  let linksToShow = [];
  let headerLabel = "";
  if (admin) {
    linksToShow = sidebarLinks.ADMIN;
    headerLabel = "Admin: Theekshan";
  } else if (petshop) {
    linksToShow = sidebarLinks.PET_SHOP;
    headerLabel = "Petshop: Dasun";
  } else if (seller) {
    linksToShow = sidebarLinks.SELLER;
    headerLabel = "Seller: Ramesh";
  } else if (buyer) {
    linksToShow = sidebarLinks.BUYER;
    headerLabel = "Buyer: Bimsara";
  } else if (user?.role) {
    linksToShow = sidebarLinks[user.role];
    headerLabel =
      user.role === "ADMIN"
        ? "Admin: Theekshan"
        : user.role === "PET_SHOP"
        ? "Petshop: Dasun"
        : user.role === "SELLER"
        ? "Seller: Ramesh"
        : user.role === "BUYER"
        ? "Buyer: Bimsara"
        : "";
  }

  // Color palette for light/dark mode
  const light = {
    bg: "#fff",
    text: "#5b21b6",
    border: "#a78bfa",
    active: "#7c3aed",
    icon: "#7c3aed",
    shadow: "0 2px 8px 0 rgba(124,58,237,0.15)",
    logoutBg: "#fff",
    logoutText: "#7c3aed",
  };
  const dark = {
    bg: "#7c3aed",
    text: "#fff",
    border: "#a78bfa",
    active: "#5b21b6",
    icon: "#fff",
    shadow: "0 2px 8px 0 rgba(0,0,0,0.15)",
    logoutBg: "#7c3aed",
    logoutText: "#fff",
  };
  const theme = darkMode ? dark : light;

  return (
    <div
      className="w-64 h-screen flex flex-col justify-between"
      style={{
        background: theme.bg,
        color: theme.text,
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <div>
        {/* Header */}
        <div
          className="p-6 border-b flex items-center justify-between"
          style={{ borderColor: theme.border }}
        >
          <div className="flex items-center space-x-3">
            <div
              className="bg-white rounded-lg flex items-center justify-center w-12 h-12 shadow"
              style={{ boxShadow: theme.shadow }}
            >
              <img
                src={LOGO_SRC}
                alt="PureLeaf Logo"
                className="w-9 h-9 object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold" style={{ color: theme.text }}>
                PETKART
              </h3>
              <p
                className="text-sm"
                style={{ color: theme.text, opacity: 0.7 }}
              >
                {headerLabel}
              </p>
            </div>
          </div>
          {/* Dark/Light mode toggle */}
          <button
            aria-label="Toggle dark mode"
            className="ml-2 p-2 rounded-full border"
            style={{
              borderColor: theme.border,
              color: theme.text,
              background: "transparent",
            }}
            onClick={toggleTheme}
          >
            {darkMode ? (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                  stroke={theme.text}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  stroke={theme.text}
                  strokeWidth="2"
                />
                <path
                  d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                  stroke={theme.text}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mt-6 px-4">
          {linksToShow?.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-4 font-medium transition-all duration-200"
                style={{
                  background: isActive ? theme.active : theme.bg,
                  color: isActive
                    ? darkMode
                      ? dark.text
                      : light.bg
                    : theme.text,
                  border: `2px solid ${theme.border}`,
                  boxShadow: isActive
                    ? theme.shadow
                    : "0 1px 4px 0 rgba(124,58,237,0.08)",
                  fontWeight: 500,
                }}
              >
                <Icon className="w-5 h-5" style={{ color: theme.icon }} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      {/* Logout Button */}
      <div className="p-6">
        <button
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium border transition-all duration-200"
          style={{
            background: theme.logoutBg,
            color: theme.logoutText,
            border: `2px solid ${theme.border}`,
            boxShadow: "0 1px 4px 0 rgba(124,58,237,0.08)",
            fontWeight: 500,
          }}
        >
          <Home className="w-5 h-5 mr-2" style={{ color: theme.logoutText }} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
