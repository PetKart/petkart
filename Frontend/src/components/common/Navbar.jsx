import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/useTheme";
import { useUser } from "../../context/useUser";
import { 
  Bell, 
  User, 
  LogOut, 
  Settings, 
  Calendar,
  Search,
  MessageSquare,
  Shield,
  Sun,
  Moon,
  ChevronDown,
  Mail,
  Phone,
  Globe
} from "lucide-react";

const LOGO_SRC = "/assets/logo2.png";

const Navbar = ({
  admin = false,
  petshop = false,
  seller = false,
  buyer = false,
}) => {
  const { darkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { logout } = useUser();

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      type: "message",
      title: "New Message",
      content: "Sarah sent you a message about pet adoption",
      time: "5 min ago",
      read: false,
      icon: MessageSquare,
      color: "blue"
    },
    {
      id: 2,
      type: "order",
      title: "Order Update",
      content: "Your order #45678 has been shipped and is on the way",
      time: "2 hours ago",
      read: false,
      icon: Bell,
      color: "green"
    },
    {
      id: 3,
      type: "security",
      title: "Security Alert",
      content: "Password changed successfully from new device",
      time: "Yesterday",
      read: true,
      icon: Shield,
      color: "amber"
    },
    {
      id: 4,
      type: "system",
      title: "System Maintenance",
      content: "Scheduled maintenance on Sunday 2:00 AM - 4:00 AM",
      time: "3 days ago",
      read: true,
      icon: Settings,
      color: "gray"
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const [currentDate, setCurrentDate] = useState(new Date());
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationOpen(false);
      }
    }
    if (dropdownOpen || notificationOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen, notificationOpen]);

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  let userInfo = {
    name: "",
    role: "",
    initials: "",
    roleColor: ""
  };

  if (admin) {
    userInfo = { name: "Theekshana", role: "System Administrator", initials: "TK", roleColor: "bg-purple-600" };
  } else if (petshop) {
    userInfo = { name: "Dasun", role: "Pet Shop Manager", initials: "DS", roleColor: "bg-blue-600" };
  } else if (seller) {
    userInfo = { name: "Ramesh", role: "Pet Seller", initials: "RM", roleColor: "bg-green-600" };
  } else if (buyer) {
    userInfo = { name: "Bimsara", role: "Pet Buyer", initials: "BM", roleColor: "bg-orange-600" };
  }

  const getNotificationColor = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
      green: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
      amber: "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300",
      gray: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
    };
    return colors[color] || colors.gray;
  };

  return (
    <nav className={`w-full px-6 py-4 ${
      darkMode 
        ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-gray-700' 
        : 'bg-gradient-to-r from-white via-gray-50 to-white border-gray-200'
    } border-b shadow-lg backdrop-blur-lg transition-all duration-300`}>
      
      <div className="flex items-center justify-between">
        
        {/* Left Section - Search Bar */}
        <div className="flex items-center">
          {/* Search Bar */}
          <div className="flex relative">
            <div className={`relative transition-all duration-300 ${
              searchFocused ? 'w-80' : 'w-64'
            }`}>
              <Search 
                size={18} 
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                } transition-colors`} 
              />
              <input
                type="text"
                placeholder="Search pets, orders, users..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={`w-full pl-10 pr-4 py-2 rounded-xl border transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-700' 
                    : 'bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-500 focus:bg-white'
                } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm`}
              />
            </div>
          </div>
        </div>

        {/* Center Section - Date & Time */}
        <div className="hidden md:flex items-center space-x-4">
          <div className={`px-4 py-2 rounded-lg ${
            darkMode ? 'bg-gray-800' : 'bg-gray-100'
          } transition-colors`}>
            <div className="flex items-center space-x-2">
              <Calendar size={18} className={darkMode ? 'text-gray-300' : 'text-gray-600'} />
              <div className="text-center">
                <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {formattedTime}
                </p>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {formattedDate.split(',')[0]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Actions & Profile */}
        <div className="flex items-center space-x-4">
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl transition-all duration-200 ${
              darkMode 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            } hover:scale-110`}
            title="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setNotificationOpen(!notificationOpen)}
              className={`relative p-2 rounded-xl transition-all duration-200 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              } hover:scale-110`}
              title="Notifications"
            >
              <Bell size={20} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {notificationOpen && (
              <div className={`absolute right-0 mt-3 w-96 rounded-xl shadow-2xl z-50 ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } border backdrop-blur-lg transform transition-all duration-200 scale-100 opacity-100`}>
                
                {/* Header */}
                <div className={`px-6 py-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex items-center justify-between">
                    <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Notifications
                    </h3>
                    <button 
                      className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                      onClick={() => console.log('Mark all read')}
                    >
                      Mark all read
                    </button>
                  </div>
                </div>

                {/* Notifications List */}
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => {
                    const IconComponent = notification.icon;
                    return (
                      <div
                        key={notification.id}
                        className={`px-6 py-4 border-b transition-colors cursor-pointer ${
                          darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-50'
                        } ${!notification.read ? (darkMode ? 'bg-gray-750' : 'bg-purple-50') : ''}`}
                        onClick={() => console.log('Notification clicked', notification.id)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg ${getNotificationColor(notification.color)}`}>
                            <IconComponent size={16} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {notification.title}
                            </p>
                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} line-clamp-2`}>
                              {notification.content}
                            </p>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                              {notification.time}
                            </p>
                          </div>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className={`px-6 py-3 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <button 
                    className="w-full text-center text-purple-600 hover:text-purple-700 text-sm font-medium py-2"
                    onClick={() => console.log('View all notifications')}
                  >
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center space-x-3 px-3 py-2 rounded-xl transition-all duration-200 ${
                darkMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              } hover:scale-105 group`}
            >
              <div className={`w-10 h-10 ${userInfo.roleColor} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
                {userInfo.initials}
              </div>
              <div className="hidden lg:block text-left">
                <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {userInfo.name}
                </p>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Online
                </p>
              </div>
              <ChevronDown size={16} className={`transition-transform duration-200 ${
                dropdownOpen ? 'rotate-180' : ''
              }`} />
            </button>

            {/* Profile Dropdown */}
            {dropdownOpen && (
              <div className={`absolute right-0 mt-3 w-64 rounded-xl shadow-2xl z-50 ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } border backdrop-blur-lg transform transition-all duration-200 scale-100 opacity-100`}>
                
                {/* User Info */}
                <div className={`px-4 py-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${userInfo.roleColor} rounded-full flex items-center justify-center text-white font-bold`}>
                      {userInfo.initials}
                    </div>
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {userInfo.name}
                      </p>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {userInfo.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="py-2">
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate(`/${admin ? 'admin' : seller ? 'seller' : buyer ? 'buyer' : 'petshop'}/profile`);
                    }}
                    className={`w-full flex items-center px-4 py-3 text-left transition-colors ${
                      darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <User size={18} className="mr-3" />
                    My Profile
                  </button>
                  
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate(`/${admin ? 'admin' : seller ? 'seller' : buyer ? 'buyer' : 'petshop'}/settings`);
                    }}
                    className={`w-full flex items-center px-4 py-3 text-left transition-colors ${
                      darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Settings size={18} className="mr-3" />
                    Settings
                  </button>

                  <hr className={`my-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} />
                  
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      logout();
                      setTimeout(() => navigate("/"), 100);
                    }}
                    className="w-full flex items-center px-4 py-3 text-left transition-colors text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <LogOut size={18} className="mr-3" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
