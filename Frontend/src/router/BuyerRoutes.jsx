import React from "react";
import { Routes, Route } from "react-router-dom";
import BuyerDashboard from "../pages/Buyer/BuyerDashboard";
import BuyerPets from "../pages/Buyer/BuyerPets";
import BuyerIncome from "../pages/Buyer/BuyerIncome";
import BuyerArticles from "../pages/Buyer/BuyerArticles";
import BuyerOrders from "../pages/Buyer/BuyerOrders";

const BuyerRoutes = () => (
  <Routes>
    <Route path="/" element={<BuyerDashboard />} />
    <Route path="/dashboard" element={<BuyerDashboard/>}/>
    <Route path="/pets" element={<BuyerPets/>}  />
    <Route path="/orders" element={<BuyerOrders/>}  />
    <Route path="/income" element={<BuyerIncome/>}  />
    <Route path="/articles" element={<BuyerArticles/>}  />
  </Routes>
);

export default BuyerRoutes;
