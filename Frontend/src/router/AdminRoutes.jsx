import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminUser from "../pages/Admin/AdminUser";

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
    <Route path="dashboard" element={<AdminDashboard />} />
    <Route path="users" element={<AdminUser />} />
    {/* Add more admin routes here */}
  </Routes>
);

export default AdminRoutes;
