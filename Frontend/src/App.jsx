import React from "react";
import "./index.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import AdminRoutes from "./router/AdminRoutes";
import PetShopRoutes from "./router/PetShopRoutes";
import Layout from "./layouts/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/admin/*"
              element={
                <Layout admin>
                  <AdminRoutes />
                </Layout>
              }
            />
            <Route
              path="/petshop/*"
              element={
                <Layout petshop>
                  <PetShopRoutes />
                </Layout>
              }
            />
          </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
