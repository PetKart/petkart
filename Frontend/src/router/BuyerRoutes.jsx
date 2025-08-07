import React from "react";
import { Routes, Route } from "react-router-dom";
import BuyerDashboard from "../pages/Buyer/BuyerDashboard";
import BuyerOrders from "../pages/Buyer/BuyerOrders";
import BuyerProfile from "../pages/Buyer/BuyerProfile";

const BuyerRoutes = () => (
  <Routes>
    <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
    <Route path="/buyer/orders" element={<BuyerOrders />} />
    <Route path="/buyer/profile" element={<BuyerProfile />} />
  </Routes>
);

export default BuyerRoutes;
