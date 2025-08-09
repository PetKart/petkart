import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import { useTheme } from "../context/useTheme";

export default function Layout({
  children,
  admin = false,
  petshop = false,
  seller = false,
  buyer = false,
}) {
  const { darkMode } = useTheme();

  return (
    <div className={`flex h-screen ${
      darkMode 
        ? 'bg-gray-900 dark' 
        : 'bg-gray-50'
    }`}>
      {/* Render Sidebar for all roles */}
      <Sidebar admin={admin} petshop={petshop} seller={seller} buyer={buyer} />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Render Navbar for all roles */}
        <Navbar admin={admin} petshop={petshop} seller={seller} buyer={buyer} />
        <main className={`flex-1 overflow-y-auto p-6 ${
          darkMode 
            ? 'bg-gray-900 text-white' 
            : 'bg-gray-50 text-gray-900'
        }`}>
          <div className={darkMode ? 'dark' : ''}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
