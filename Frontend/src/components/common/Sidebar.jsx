import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { useUser } from "../../context/useUser";
import {
  Home,
  Package,
  Settings,
  Users,
  UserCheck,
  Grid3X3,
  DollarSign,
  Tag,
  BarChart3,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import { useTheme } from "../../context/useTheme";

// For your project logo, adjust the src path to match your assets location.
const LOGO_SRC = "/assets/logo2.png";

const sidebarLinks = {
  ADMIN: [
    { name: "Dashboard", path: "/admin/dashboard", icon: Home },
    { name: "Users", path: "/admin/users", icon: Users },
    { name: "Orders", path: "/admin/orders", icon: Package },
    { name: "Categories", path: "/admin/categories", icon: Grid3X3 },
    { name: "Revenue", path: "/admin/revenue", icon: DollarSign },
    { name: "Offers", path: "/admin/offers", icon: Tag },
    { name: "Reports", path: "/admin/reports", icon: BarChart3 },
    { name: "Settings", path: "/admin/settings", icon: Settings },
  ],
  PET_SHOP: [
    { name: "Dashboard", path: "/petshop/dashboard", icon: Home },
    { name: "Home", path: "/petshop/home", icon: Home },
    { name: "Add Pets", path: "/petshop/pets", icon: Package },
    { name: "Add Offers", path: "/petshop/offers", icon: Package },
    { name: "Orders", path: "/petshop/orders", icon: Users },
    { name: "Income", path: "/petshop/income", icon: UserCheck },
    { name: "Articles", path: "/petshop/articles", icon: Settings }
  ],
  SELLER: [
    { name: "Dashboard", path: "/seller/dashboard", icon: Home },
    { name: "Add Pets", path: "/seller/pets", icon: Package },
    { name: "Add Offers", path: "/seller/offers", icon: Package },
    { name: "Orders", path: "/seller/orders", icon: Users },
    { name: "Income", path: "/seller/income", icon: UserCheck },
    { name: "Articles", path: "/seller/articles", icon: Settings },
  ],
  BUYER: [
    { name: "Dashboard", path: "/buyer/dashboard", icon: Home },
    { name: "Pets", path: "/buyer/pets", icon: Package },
    { name: "Orders", path: "/buyer/orders", icon: Users },
    { name: "Payments", path: "/buyer/payment", icon: UserCheck },
    { name: "Articles", path: "/buyer/articles", icon: Settings },
  ],
};

function Sidebar({
  admin = false,
  petshop = false,
  seller = false,
  buyer = false,
}) {
  const { user } = useUser();
  const location = useLocation();
  const { darkMode } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);

  let linksToShow = [];
  let headerLabel = "";

  if (admin) {
    linksToShow = sidebarLinks.ADMIN;
    headerLabel = "Admin Panel";
  } else if (petshop) {
    linksToShow = sidebarLinks.PET_SHOP;
    headerLabel = "Pet Shop";
  } else if (seller) {
    linksToShow = sidebarLinks.SELLER;
    headerLabel = "Seller Panel";
  } else if (buyer) {
    linksToShow = sidebarLinks.BUYER;
    headerLabel = "Buyer Panel";
  } else if (user?.role) {
    linksToShow = sidebarLinks[user.role];
    headerLabel =
      user.role === "ADMIN"
        ? "Admin Panel"
        : user.role === "PET_SHOP"
        ? "Pet Shop"
        : user.role === "SELLER"
        ? "Seller Panel"
        : "Buyer Panel";
  }

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-72"
      } transition-all duration-300 ease-in-out h-screen bg-gradient-to-b ${
        darkMode
          ? "from-gray-900 via-gray-800 to-gray-900"
          : "from-white via-gray-50 to-white"
      } shadow-2xl border-r ${
        darkMode ? "border-gray-700" : "border-gray-200"
      } flex flex-col relative overflow-visible`}
    >
      {/* Collapse Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`absolute top-20 ${
          isCollapsed ? "right-2" : "right-4"
        } w-8 h-8 rounded-full bg-purple-600 text-white shadow-xl border-2 border-white flex items-center justify-center hover:bg-purple-700 hover:scale-110 transition-all duration-300 z-10 group`}
        title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Header Section */}
      <div className={`flex-shrink-0 ${isCollapsed ? "px-4" : "px-6"} py-6`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <img
                  src={LOGO_SRC}
                  alt="PetKart"
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <span
                  className={`font-bold text-white text-lg ${
                    isCollapsed ? "block" : "hidden"
                  }`}
                >
                  P
                </span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            {!isCollapsed && (
              <div>
                <h3
                  className={`text-xl font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  } tracking-wide`}
                >
                  PETKART
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } font-medium`}
                >
                  {headerLabel}
                </p>
              </div>
            )}
          </div>
        </div>{" "}
        {/* Search Bar */}
        {!isCollapsed && (
          <div className="relative mb-6">
            <Search
              size={18}
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <input
              type="text"
              placeholder="Search menu..."
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                darkMode
                  ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  : "bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-500"
              } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
            />
          </div>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className={`flex-1 ${isCollapsed ? "px-2" : "px-6"} py-2`}>
        <div className="space-y-2">
          {linksToShow?.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`group relative flex items-center ${
                  isCollapsed ? "justify-center px-3" : "px-4"
                } py-3 rounded-xl font-medium transition-all duration-200 ${
                  isActive
                    ? `${
                        darkMode
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                          : "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                      }`
                    : `${
                        darkMode
                          ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`
                } transform hover:scale-105 hover:translate-x-1`}
                title={isCollapsed ? link.name : ""}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></div>
                )}

                <Icon
                  size={20}
                  className={`${isCollapsed ? "" : "mr-3"} transition-colors ${
                    isActive ? "text-white" : ""
                  }`}
                />

                {!isCollapsed && <span className="flex-1">{link.name}</span>}

                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {link.name}
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* User Profile & Logout */}
      <div className={`flex-shrink-0 ${isCollapsed ? "px-2" : "px-6"} pb-6`}>
        <button
          className={`w-full flex items-center ${
            isCollapsed ? "justify-center px-3" : "px-4"
          } py-3 rounded-xl font-medium transition-all duration-200 ${
            darkMode
              ? "text-red-400 hover:bg-red-900/20 hover:text-red-300"
              : "text-red-600 hover:bg-red-50 hover:text-red-700"
          } transform hover:scale-105`}
          title={isCollapsed ? "Logout" : ""}
        >
          <LogOut size={20} className={isCollapsed ? "" : "mr-3"} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
// ...existing code...
{
  /* Terms Agreement */
}
{
  /* 
<div className="form-agreement">
  <label className="checkbox-label">
    <input type="checkbox" required />
    <span className="checkmark"></span>✅ I agree to the{" "}
    <a href="#">Terms of Service</a> and{" "}
    <a href="#">Privacy Policy</a>
  </label>
</div>
*/
}
// ...existing code...
