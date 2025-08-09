import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminUser from "../pages/Admin/AdminUser";
import AdminOrders from "../pages/Admin/AdminOrders";
import AdminPetCategories from "../pages/Admin/AdminPetCategories";
import AdminRevenue from "../pages/Admin/AdminRevenue";
import AdminSettings from "../pages/Admin/AdminSettings";
import AdminOffers from "../pages/Admin/AdminOffers";
import AdminReports from "../pages/Admin/AdminReports";

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
    <Route path="dashboard" element={<AdminDashboard />} />
    <Route path="users" element={<AdminUser />} />
    <Route path="orders" element={<AdminOrders />} />
    <Route path="categories" element={<AdminPetCategories />} />
    <Route path="revenue" element={<AdminRevenue />} />
    <Route path="offers" element={<AdminOffers />} />
    <Route path="reports" element={<AdminReports />} />
    <Route path="settings" element={<AdminSettings />} />
    {/* Add more admin routes here */}
  </Routes>
);

export default AdminRoutes;
