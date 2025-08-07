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
    <Route path="/seller" element={<SellerDashboard />} />
    <Route path="/seller/dashboard" element={<SellerDashboard/>}/>
    <Route path="/seller/pets" element={<SellerAddPets/>}  />
    <Route path="/seller/offers" element={<SellerAddOffers/>}  />
    <Route path="/seller/orders" element={<SellerOrders/>}  />
    <Route path="/seller/income" element={<SellerIncome/>}  />
    <Route path="/seller/articles" element={<SellerArticles/>}  />
  </Routes>
);

export default SellerRoutes;
