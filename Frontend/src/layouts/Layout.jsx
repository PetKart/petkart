import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

export default function Layout({ children, admin = false, petshop = false }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Render Admin or Petshop Sidebar */}
      <Sidebar admin={admin} petshop={petshop} />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Render Admin or Petshop Navbar */}
        <Navbar admin={admin} petshop={petshop} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
