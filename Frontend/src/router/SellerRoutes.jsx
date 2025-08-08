import React from "react";
import { Routes, Route } from "react-router-dom";
import SellerDashboard from "../pages/Seller/SellerDashboard";
import SellerAddPets from "../pages/Seller/SellerAddPets";
import SellerAddOffers from "../pages/Seller/SellerAddOffers";
import SellerOrders from "../pages/Seller/SellerOrders";
import SellerIncome from "../pages/Seller/SellerIncome";
import SellerArticles from "../pages/Seller/SellerArticles";

const SellerRoutes = () => (
  <Routes>

    <Route path="/" element={<SellerDashboard />} />
    <Route path="/dashboard" element={<SellerDashboard/>}/>
    <Route path="/pets" element={<SellerAddPets/>}  />
    <Route path="/offers" element={<SellerAddOffers/>}  />
    <Route path="/orders" element={<SellerOrders/>}  />
    <Route path="/income" element={<SellerIncome/>}  />
    <Route path="/articles" element={<SellerArticles/>}  />
  </Routes>
);

export default SellerRoutes;
