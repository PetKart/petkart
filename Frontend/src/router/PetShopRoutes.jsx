import React from "react";
import { Routes, Route } from "react-router-dom";
import PetshopDashboard from "../pages/PetShop/PetshopDashboard";
import PetshopIncome from "../pages/PetShop/PetshopIncome";
import PetshopArticles from "../pages/PetShop/PetshopArticles";
import PetshopAddOffers from "../pages/PetShop/PetshopAddoffers";
import PetshopOrders from "../pages/PetShop/PetshopOrders";
import PetshopAddPets from "../pages/PetShop/PetshopAddPets";
import PetshopHome from "../pages/PetShop/PetshopHome";

const PetShopRoutes = () => (
  <Routes>
    <Route path="dashboard" element={<PetshopDashboard />} />
    <Route path="/home" element={<PetshopHome />} />
    <Route path="/pets" element={<PetshopAddPets />} />
    <Route path="/offers" element={<PetshopAddOffers />} />
    <Route path="/orders" element={<PetshopOrders />} />
    <Route path="/income" element={<PetshopIncome />} />
    <Route path="/articles" element={<PetshopArticles />} />
  </Routes>
);

export default PetShopRoutes;
