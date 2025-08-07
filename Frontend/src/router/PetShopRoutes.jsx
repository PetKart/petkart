import React from "react";
import { Routes, Route } from "react-router-dom";
import PetshopDashboard from "../pages/PetShop/PetShopDashboard";

const PetShopRoutes = () => (
  <Routes>
    <Route path="dashboard" element={<PetshopDashboard />} />
    {/* Add more petshop routes here */}
  </Routes>
);

export default PetShopRoutes;
