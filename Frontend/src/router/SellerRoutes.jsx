import React from "react";
import { Routes, Route } from "react-router-dom";
import SellerDashboard from "../pages/Seller/SellerDashboard";
import SellerOrders from "../pages/Seller/SellerOrders";
import SellerProfile from "../pages/Seller/SellerProfile";

const SellerRoutes = () => (
  <Routes>
    <Route path="dashboard" element={<SellerDashboard />} />
    <Route path="orders" element={<SellerOrders />} />
    <Route path="profile" element={<SellerProfile />} />
  </Routes>
);

export default SellerRoutes;
