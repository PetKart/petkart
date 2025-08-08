import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/useTheme";
import { useUser } from "../../context/useUser";

const LOGO_SRC = "/assets/logo2.png"; // Change to your logo path

const Navbar = ({
  admin = false,
  petshop = false,
  seller = false,
  buyer = false,
}) => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const { logout } = useUser();

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      type: "message",
      content: "New message from Sarah",
      time: "5 min ago",
      read: false,
    },
    {
      id: 2,
      type: "order",
      content: "Your order #45678 has been shipped",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 3,
      type: "alert",
      content: "Password changed successfully",
      time: "Yesterday",
      read: true,
    },
    {
      id: 4,
      type: "system",
      content: "System maintenance scheduled",
      time: "3 days ago",
      read: true,
    },
  ];

  // Count unread notifications
  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  // State for current date
  const [currentDate, setCurrentDate] = useState(new Date());

  // Update date every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Format date: August 8, 2025
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Shorter date format for mobile: Aug 8, 2025
  const shortFormattedDate = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

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

  // Dropdown state and outside click handler
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
    }
    if (dropdownOpen || notificationOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen, notificationOpen]);

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
        {/* Current Date Display - Desktop */}
        <div
          className="hidden md:flex items-center text-sm font-medium"
          style={{ color: theme.icon }}
        >
          <svg
            className="mr-2"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={theme.icon}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          {formattedDate}
        </div>

        {/* Current Date Display - Mobile */}
        <div
          className="flex md:hidden items-center text-sm font-medium"
          style={{ color: theme.icon }}
        >
          <svg
            className="mr-1"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={theme.icon}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          {shortFormattedDate}
        </div>

        {/* Notification bell */}
        <div className="relative" ref={notificationRef}>
          <button
            className="focus:outline-none relative"
            onClick={() => setNotificationOpen(!notificationOpen)}
            aria-haspopup="true"
            aria-expanded={notificationOpen}
          >
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
            {unreadCount > 0 && (
              <span
                className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full"
                style={{ background: "#ef4444" }}
              >
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notification dropdown */}
          {notificationOpen && (
            <div
              className="absolute right-0 mt-2 w-80 rounded-lg shadow-lg z-50 bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
              style={{
                background: darkMode ? "#18181b" : "#fff",
                color: darkMode ? "#fff" : "#333",
                border: `1px solid ${theme.border}`,
                boxShadow: theme.shadow,
                animation: "fadeIn 0.2s ease-out forwards",
                transform: "translateY(0)",
                opacity: 1,
              }}
            >
              <div className="py-2">
                <div
                  className="px-4 py-2 border-b flex justify-between items-center"
                  style={{ borderColor: theme.border }}
                >
                  <h3 className="text-sm font-semibold">Notifications</h3>
                  <button
                    className="text-xs text-violet-600 dark:text-violet-400 hover:underline"
                    onClick={() => {
                      // Handle mark all as read functionality here
                      console.log("Mark all as read");
                    }}
                  >
                    Mark all as read
                  </button>
                </div>

                <div className="max-h-80 overflow-y-auto">
                  {notifications.length > 0 ? (
                    <div>
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="px-4 py-3 border-b hover:bg-gray-50 dark:hover:bg-gray-800 flex items-start transition cursor-pointer"
                          style={{
                            borderColor: theme.border,
                            background: notification.read
                              ? "transparent"
                              : darkMode
                              ? "rgba(124, 58, 237, 0.1)"
                              : "rgba(124, 58, 237, 0.05)",
                          }}
                          onClick={() => {
                            // Handle notification click
                            console.log(
                              `Clicked notification ${notification.id}`
                            );
                          }}
                        >
                          {/* Notification icon based on type */}
                          <div className="mr-3 mt-1">
                            {notification.type === "message" && (
                              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                                <svg
                                  width="16"
                                  height="16"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke={darkMode ? "#93c5fd" : "#3b82f6"}
                                  strokeWidth="2"
                                >
                                  <path
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            )}
                            {notification.type === "order" && (
                              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                                <svg
                                  width="16"
                                  height="16"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke={darkMode ? "#86efac" : "#22c55e"}
                                  strokeWidth="2"
                                >
                                  <path
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            )}
                            {notification.type === "alert" && (
                              <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
                                <svg
                                  width="16"
                                  height="16"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke={darkMode ? "#fcd34d" : "#f59e0b"}
                                  strokeWidth="2"
                                >
                                  <path
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            )}
                            {notification.type === "system" && (
                              <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                <svg
                                  width="16"
                                  height="16"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke={darkMode ? "#d1d5db" : "#6b7280"}
                                  strokeWidth="2"
                                >
                                  <path
                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            )}
                          </div>

                          {/* Notification content */}
                          <div className="flex-1">
                            <p className="text-sm">{notification.content}</p>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {notification.time}
                            </span>
                          </div>

                          {/* Unread indicator */}
                          {!notification.read && (
                            <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-6 text-center text-gray-500 dark:text-gray-400">
                      <p>No notifications</p>
                    </div>
                  )}
                </div>

                <div
                  className="px-4 py-2 border-t text-center"
                  style={{ borderColor: theme.border }}
                >
                  <button
                    className="text-sm text-violet-600 dark:text-violet-400 hover:underline"
                    onClick={() => {
                      // Handle view all functionality here
                      console.log("View all notifications");
                    }}
                  >
                    View all notifications
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modern Profile Avatar Button */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="focus:outline-none group transition"
            style={{
              border: `2px solid ${theme.border}`,
              borderRadius: "50%",
              padding: 0,
              background: "transparent",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: theme.shadow,
              transition: "box-shadow 0.2s",
            }}
            onClick={() => setDropdownOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            <span
              className="flex items-center justify-center text-lg font-bold group-hover:bg-violet-200 group-hover:text-violet-700 transition"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: darkMode ? "#fff" : "#ede9fe",
                color: theme.icon,
                transition: "background 0.2s, color 0.2s",
              }}
            >
              P
            </span>
          </button>
          {dropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-44 rounded-lg shadow-lg z-50 bg-white ring-1 ring-black ring-opacity-5"
              style={{
                background: darkMode ? "#18181b" : "#fff",
                color: darkMode ? "#fff" : "#333",
                border: `1px solid ${theme.border}`,
                boxShadow: theme.shadow,
                animation: "fadeIn 0.2s ease-out forwards",
                transform: "translateY(0)",
                opacity: 1,
              }}
            >
              <div className="py-2">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-violet-100 hover:text-violet-700 transition rounded-t-lg"
                  style={{
                    background: "none",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setDropdownOpen(false);
                    // Navigate to the appropriate profile page based on user role
                    if (admin) {
                      navigate("/admin/profile");
                    } else if (seller) {
                      navigate("/seller/profile");
                    } else if (buyer) {
                      navigate("/buyer/profile");
                    } else if (petshop) {
                      navigate("/petshop/profile");
                    }
                  }}
                >
                  My Profile
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-violet-100 hover:text-violet-700 transition rounded-b-lg"
                  style={{
                    background: "none",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setDropdownOpen(false);
                    // Call the logout function to clear user state
                    logout();
                    // Navigate to the landing page on logout
                    // Small timeout to ensure state is cleared before navigation
                    setTimeout(() => {
                      navigate("/");
                    }, 100);
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
