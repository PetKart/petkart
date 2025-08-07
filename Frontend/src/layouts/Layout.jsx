import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

export default function Layout({
  children,
  admin = false,
  petshop = false,
  seller = false,
  buyer = false,
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Render Sidebar for all roles */}
      <Sidebar admin={admin} petshop={petshop} seller={seller} buyer={buyer} />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Render Navbar for all roles */}
        <Navbar admin={admin} petshop={petshop} seller={seller} buyer={buyer} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
