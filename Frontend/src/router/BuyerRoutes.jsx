import React from "react";
import { Routes, Route } from "react-router-dom";
import BuyerDashboard from "../pages/Buyer/BuyerDashboard";
import BuyerOrders from "../pages/Buyer/BuyerOrders";
import BuyerProfile from "../pages/Buyer/BuyerProfile";

const BuyerRoutes = () => (
  <Routes>
    <Route path="dashboard" element={<BuyerDashboard />} />
    <Route path="orders" element={<BuyerOrders />} />
    <Route path="profile" element={<BuyerProfile />} />
  </Routes>
);

export default BuyerRoutes;
