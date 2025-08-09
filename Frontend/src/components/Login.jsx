import React, { useState } from "react";
import { login, signup } from "../api/auth";

const Navbar = ({ showSignupModal = false, setShowSignupModal = () => {} }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [getStartedForm, setGetStartedForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    postalCode: "",
    isSeller: false,
    isBuyer: false,
    isPetShop: false,
    isBoth: false,
    shopName: "",
    shopLicense: "",
    shopDescription: "",
    yearsInBusiness: "",
    specialties: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  const closeGetStartedModal = () => {
    setShowSignupModal(false);
    setGetStartedForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      address: "",
      city: "",
      postalCode: "",
      // User Role Options
      isSeller: false,
      isBuyer: false,
      isPetShop: false,
      isBoth: false,
      // Pet Shop Details
      shopName: "",
      shopLicense: "",
      shopDescription: "",
      yearsInBusiness: "",
      specialties: "",
    });
  };

  const handleGetStartedSubmit = async (e) => {
    e.preventDefault();
    setSignupError("");
    try {
      const res = await signup(getStartedForm);
      if (res.id) {
        alert("Signup successful! Please login.");
        closeGetStartedModal();
        setShowLoginModal(true);
      } else {
        setSignupError(res);
      }
    } catch (err) {
      setSignupError("Signup failed. Please try again.");
    }
  };

  const handleGetStartedInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setGetStartedForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLoginInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await login(loginForm);
      if (res.id) {
        // TODO: Set user context or redirect
        closeLoginModal();
      } else {
        setLoginError(res);
      }
    } catch (err) {
      setLoginError("Login failed. Please try again.");
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 px-6 shadow-lg relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-purple-600 text-xl">🐾</span>
            </div>
            <h1 className="text-2xl font-bold">PetKart</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="hover:text-purple-200 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-purple-200 transition-colors font-medium"
            >
              Pets
            </a>
            <a
              href="#"
              className="hover:text-purple-200 transition-colors font-medium"
            >
              About Us
            </a>
            <a
              href="#"
              className="hover:text-purple-200 transition-colors font-medium"
            >
              Contact
            </a>
            <button
              onClick={openLoginModal}
              className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-50 transition-colors"
            >
              Login
            </button>
          </div>

          <button className="md:hidden">
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={closeLoginModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Login to PetKart</h2>
              <button className="close-button" onClick={closeLoginModal}>
                ✕
              </button>
            </div>
            <form className="login-form" onSubmit={handleLoginSubmit}>
              {loginError && (
                <div
                  className="error-message"
                  style={{ color: "red", marginBottom: "8px" }}
                >
                  {loginError}
                </div>
              )}
              <div className="form-group">
                <label htmlFor="email">📧 Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={loginForm.email}
                  onChange={handleLoginInputChange}
                  required
                  placeholder="Enter your email address"
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">🔒 Password *</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginForm.password}
                  onChange={handleLoginInputChange}
                  required
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  minLength="6"
                />
              </div>
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={loginForm.rememberMe}
                    onChange={handleLoginInputChange}
                  />
                  <span className="checkmark"></span>
                  Remember me on this device
                </label>
              </div>
              <button type="submit" className="login-button">
                🚀 Login to PetKart
              </button>
              <div className="form-divider">
                <span>or continue with</span>
              </div>
              <button type="button" className="social-login-btn google">
                <span>🔍</span> Continue with Google
              </button>
              <button type="button" className="social-login-btn facebook">
                <span>📘</span> Continue with Facebook
              </button>
              <p className="signup-text">
                Don't have an account?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    closeLoginModal();
                    setShowSignupModal(true);
                  }}
                >
                  Create new account
                </a>
              </p>
              <p className="forgot-password">
                <a href="#">🔐 Forgot your password?</a>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Get Started Modal */}
      {showSignupModal && (
        <div className="modal-overlay" onClick={closeGetStartedModal}>
          <div
            className="modal-content get-started-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>🐾 Get Started with PetKart</h2>
              <button className="close-button" onClick={closeGetStartedModal}>
                ✕
              </button>
            </div>
            <form
              className="get-started-form"
              onSubmit={handleGetStartedSubmit}
            >
              {signupError && (
                <div
                  className="error-message"
                  style={{ color: "red", marginBottom: "8px" }}
                >
                  {signupError}
                </div>
              )}
              {/* Personal Information Section */}
              <div className="form-section">
                <h3 className="section-title">👤 Personal Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={getStartedForm.firstName}
                      onChange={handleGetStartedInputChange}
                      required
                      placeholder="Enter your first name"
                      autoComplete="given-name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={getStartedForm.lastName}
                      onChange={handleGetStartedInputChange}
                      required
                      placeholder="Enter your last name"
                      autoComplete="family-name"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="getStartedEmail">📧 Email Address *</label>
                    <input
                      type="email"
                      id="getStartedEmail"
                      name="email"
                      value={getStartedForm.email}
                      onChange={handleGetStartedInputChange}
                      required
                      placeholder="Enter your email address"
                      autoComplete="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">📱 Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={getStartedForm.phone}
                      onChange={handleGetStartedInputChange}
                      required
                      placeholder="+94 123 456 789"
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="dateOfBirth">🎂 Date of Birth</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={getStartedForm.dateOfBirth}
                    onChange={handleGetStartedInputChange}
                    autoComplete="bday"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="signupPassword">🔒 Password *</label>
                  <input
                    type="password"
                    id="signupPassword"
                    name="password"
                    value={getStartedForm.password}
                    onChange={handleGetStartedInputChange}
                    required
                    placeholder="Create a password"
                    autoComplete="new-password"
                    minLength="6"
                  />
                </div>
              </div>

              {/* User Role Section */}
              <div className="form-section">
                <h3 className="section-title">👥 User Role</h3>
                <p className="role-instruction">
                  Please select your role in PetKart (select at least one):
                </p>
                <div className="user-roles-container">
                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="isBuyer"
                        checked={getStartedForm.isBuyer}
                        onChange={(e) => {
                          handleGetStartedInputChange(e);
                          // If Both is selected, update isSeller accordingly
                          if (getStartedForm.isBoth && !e.target.checked) {
                            setGetStartedForm((prev) => ({
                              ...prev,
                              isBoth: false,
                            }));
                          }
                        }}
                      />
                      <span className="checkmark"></span>
                      🛒 Buyer (I want to purchase pets)
                    </label>
                  </div>

                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="isSeller"
                        checked={getStartedForm.isSeller}
                        onChange={(e) => {
                          handleGetStartedInputChange(e);
                          // If Both is selected, update isBuyer accordingly
                          if (getStartedForm.isBoth && !e.target.checked) {
                            setGetStartedForm((prev) => ({
                              ...prev,
                              isBoth: false,
                            }));
                          }
                        }}
                      />
                      <span className="checkmark"></span>
                      💰 Seller (I want to sell pets)
                    </label>
                  </div>

                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="isPetShop"
                        checked={getStartedForm.isPetShop}
                        onChange={handleGetStartedInputChange}
                      />
                      <span className="checkmark"></span>
                      🏪 Pet Shop (I represent a pet shop)
                    </label>
                  </div>

                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="isBoth"
                        checked={getStartedForm.isBoth}
                        onChange={(e) => {
                          handleGetStartedInputChange(e);
                          // When Both is selected, automatically select Buyer and Seller
                          if (e.target.checked) {
                            setGetStartedForm((prev) => ({
                              ...prev,
                              isBuyer: true,
                              isSeller: true,
                            }));
                          }
                        }}
                      />
                      <span className="checkmark"></span>
                      🔄 Both (I want to buy and sell pets)
                    </label>
                  </div>
                </div>

                {/* Conditional sections based on user role */}
                <div className="role-conditional-sections">
                  {/* Address Information - when Buyer, Seller, or Both */}
                  {(getStartedForm.isBuyer ||
                    getStartedForm.isSeller ||
                    getStartedForm.isBoth) && (
                    <div className="conditional-section">
                      <h4 className="subsection-title">
                        � Address Information
                      </h4>
                      <div className="form-group">
                        <label htmlFor="address">Street Address</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={getStartedForm.address}
                          onChange={handleGetStartedInputChange}
                          placeholder="Enter your street address"
                          autoComplete="street-address"
                        />
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="city">City *</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={getStartedForm.city}
                            onChange={handleGetStartedInputChange}
                            required
                            placeholder="Enter your city"
                            autoComplete="address-level2"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="postalCode">Postal Code</label>
                          <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={getStartedForm.postalCode}
                            onChange={handleGetStartedInputChange}
                            placeholder="Enter postal code"
                            autoComplete="postal-code"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Pet Shop Details - when isPetShop is true */}
                  {getStartedForm.isPetShop && (
                    <div className="conditional-section pet-shop-details">
                      <h4 className="subsection-title">🏪 Pet Shop Details</h4>
                      <div className="form-group">
                        <label htmlFor="shopName">Shop Name *</label>
                        <input
                          type="text"
                          id="shopName"
                          name="shopName"
                          value={getStartedForm.shopName}
                          onChange={handleGetStartedInputChange}
                          required={getStartedForm.isPetShop}
                          placeholder="Enter your shop name"
                        />
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="shopLicense">License Number *</label>
                          <input
                            type="text"
                            id="shopLicense"
                            name="shopLicense"
                            value={getStartedForm.shopLicense}
                            onChange={handleGetStartedInputChange}
                            required={getStartedForm.isPetShop}
                            placeholder="Enter your shop license number"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="yearsInBusiness">
                            Years in Business
                          </label>
                          <input
                            type="number"
                            id="yearsInBusiness"
                            name="yearsInBusiness"
                            value={getStartedForm.yearsInBusiness}
                            onChange={handleGetStartedInputChange}
                            placeholder="How many years in business?"
                            min="0"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="specialties">Shop Specialties</label>
                        <input
                          type="text"
                          id="specialties"
                          name="specialties"
                          value={getStartedForm.specialties}
                          onChange={handleGetStartedInputChange}
                          placeholder="What types of pets or services do you specialize in?"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="shopDescription">
                          Shop Description
                        </label>
                        <textarea
                          id="shopDescription"
                          name="shopDescription"
                          value={getStartedForm.shopDescription}
                          onChange={handleGetStartedInputChange}
                          rows="3"
                          placeholder="Tell us about your shop..."
                        ></textarea>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <button type="submit" className="get-started-button">
                Signup
              </button>

              <p className="login-text">
                Already have an account?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    closeGetStartedModal();
                    setShowLoginModal(true);
                  }}
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        :root {
          --primary-purple: #6a0dad;
          --secondary-purple: #ab47bc;
          --light-purple: #e1bee7;
          --white: #ffffff;
          --dark-gray: #333333;
        }

        /* Login Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }

        .modal-content {
          background-color: var(--white);
          border-radius: 15px;
          padding: 2rem;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          animation: modalSlideIn 0.3s ease-out;
          max-height: 85vh;
          overflow-y: hidden;
          display: flex;
          flex-direction: column;
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.2rem;
          padding-bottom: 0.8rem;
          border-bottom: 2px solid var(--light-purple);
          flex-shrink: 0;
        }

        .modal-header h2 {
          color: var(--primary-purple);
          font-size: 1.4rem;
          font-weight: 700;
        }

        .close-button {
          background: none;
          border: none;
          font-size: 1.2rem;
          color: var(--dark-gray);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.3s;
        }

        .close-button:hover {
          background-color: var(--light-purple);
          color: var(--primary-purple);
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          flex: 1;
          overflow-y: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .login-form::-webkit-scrollbar {
          display: none;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-weight: 600;
          color: var(--primary-purple);
          font-size: 0.9rem;
          margin-bottom: 0.3rem;
          text-shadow: 0 1px 2px rgba(106, 13, 173, 0.1);
        }

        .form-group input {
          padding: 0.7rem;
          border: 2px solid var(--light-purple);
          border-radius: 8px;
          font-size: 0.95rem;
          transition: all 0.3s;
          background-color: #fafafa;
          color: var(--dark-gray);
          box-shadow: 0 2px 4px rgba(106, 13, 173, 0.05);
        }

        .form-group input:focus {
          outline: none;
          border-color: var(--primary-purple);
          box-shadow: 0 0 0 3px rgba(106, 13, 173, 0.15);
          background-color: var(--white);
          transform: translateY(-1px);
        }

        .login-button {
          background: linear-gradient(
            135deg,
            var(--primary-purple) 0%,
            var(--secondary-purple) 100%
          );
          color: var(--white);
          border: none;
          padding: 0.9rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(106, 13, 173, 0.3);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .login-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(106, 13, 173, 0.4);
          background: linear-gradient(135deg, #7b1fa2 0%, #ab47bc 100%);
        }

        .social-login-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.7rem;
          border: 2px solid rgba(106, 13, 173, 0.2);
          border-radius: 8px;
          background: linear-gradient(135deg, #fafafa 0%, var(--white) 100%);
          color: var(--dark-gray);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 2px 6px rgba(106, 13, 173, 0.1);
        }

        .social-login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(106, 13, 173, 0.2);
          border-color: var(--primary-purple);
        }

        .checkbox-group {
          flex-direction: row !important;
          align-items: center;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          cursor: pointer;
          font-size: 0.95rem;
          position: relative;
        }

        .checkbox-label input[type="checkbox"] {
          display: none;
        }

        .checkmark {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(106, 13, 173, 0.3);
          border-radius: 4px;
          background: linear-gradient(135deg, #fafafa 0%, var(--white) 100%);
          transition: all 0.3s;
          box-shadow: 0 2px 4px rgba(106, 13, 173, 0.1);
          flex-shrink: 0;
          position: relative;
        }

        .checkbox-label input:checked + .checkmark {
          background: linear-gradient(
            135deg,
            var(--primary-purple) 0%,
            var(--secondary-purple) 100%
          );
          border-color: var(--primary-purple);
          box-shadow: 0 2px 8px rgba(106, 13, 173, 0.3);
          transform: scale(1.05);
        }

        .checkbox-label input:checked + .checkmark::after {
          content: "✓";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 12px;
          font-weight: bold;
        }

        .form-divider {
          position: relative;
          text-align: center;
          margin: 1rem 0;
        }

        .form-divider::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--light-purple);
        }

        .form-divider span {
          background: var(--white);
          padding: 0 1rem;
          color: var(--dark-gray);
          font-size: 0.9rem;
        }

        .signup-text,
        .forgot-password {
          text-align: center;
          font-size: 0.9rem;
          color: var(--dark-gray);
        }

        .signup-text a,
        .forgot-password a {
          color: var(--primary-purple);
          text-decoration: none;
          font-weight: 600;
        }

        .signup-text a:hover,
        .forgot-password a:hover {
          text-decoration: underline;
        }

        /* Get Started Modal Styles */
        .get-started-modal {
          max-width: 700px;
          padding: 2.5rem;
          max-height: 90vh;
          overflow-y: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .get-started-modal::-webkit-scrollbar {
          display: none;
        }

        .get-started-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          flex: 1;
          overflow-y: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .get-started-form::-webkit-scrollbar {
          display: none;
        }

        .form-section {
          margin-bottom: 2rem;
          padding: 1.5rem;
          border: 1px solid rgba(106, 13, 173, 0.2);
          border-radius: 12px;
          background: linear-gradient(
            135deg,
            rgba(106, 13, 173, 0.03) 0%,
            rgba(255, 255, 255, 0.95) 100%
          );
          box-shadow: 0 4px 12px rgba(106, 13, 173, 0.08);
          transition: all 0.3s ease;
        }

        .form-section:hover {
          border-color: rgba(106, 13, 173, 0.3);
          box-shadow: 0 6px 16px rgba(106, 13, 173, 0.12);
          transform: translateY(-2px);
        }

        .form-section .section-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--primary-purple);
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid rgba(106, 13, 173, 0.2);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-shadow: 0 1px 3px rgba(106, 13, 173, 0.1);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }

        .get-started-form .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .get-started-form .form-group label {
          font-weight: 600;
          color: var(--primary-purple);
          font-size: 0.9rem;
          margin-bottom: 0.3rem;
          text-shadow: 0 1px 2px rgba(106, 13, 173, 0.1);
        }

        .get-started-form .form-group input,
        .get-started-form .form-group select,
        .get-started-form .form-group textarea {
          padding: 0.7rem;
          border: 2px solid var(--light-purple);
          border-radius: 8px;
          font-size: 0.95rem;
          transition: all 0.3s;
          background-color: #fafafa;
          color: var(--dark-gray);
          box-shadow: 0 2px 4px rgba(106, 13, 173, 0.05);
        }

        .get-started-form .form-group input:focus,
        .get-started-form .form-group select:focus,
        .get-started-form .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-purple);
          box-shadow: 0 0 0 3px rgba(106, 13, 173, 0.15);
          background-color: var(--white);
          transform: translateY(-1px);
        }

        .get-started-form .form-group textarea {
          resize: vertical;
          min-height: 100px;
          font-family: inherit;
        }

        .get-started-button {
          background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
          color: var(--white);
          border: none;
          padding: 1rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .get-started-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
          background: linear-gradient(135deg, #2e7d32 0%, #26a69a 100%);
        }

        .form-agreement {
          margin: 0.8rem 0;
        }

        .form-agreement .checkbox-label {
          font-size: 0.85rem;
          line-height: 1.3;
        }

        .form-agreement a {
          color: var(--primary-purple);
          text-decoration: none;
        }

        .form-agreement a:hover {
          text-decoration: underline;
        }

        .login-text {
          text-align: center;
          font-size: 0.9rem;
          color: var(--dark-gray);
        }

        .login-text a {
          color: var(--primary-purple);
          text-decoration: none;
          font-weight: 600;
        }

        .login-text a:hover {
          text-decoration: underline;
        }

        /* User Role Styles */
        .role-instruction {
          margin-bottom: 1rem;
          font-size: 0.95rem;
          color: var(--dark-gray);
        }

        .user-roles-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 640px) {
          .user-roles-container {
            grid-template-columns: 1fr;
          }
        }

        .role-conditional-sections {
          margin-top: 1.5rem;
        }

        .conditional-section {
          margin-top: 1.5rem;
          padding: 1.2rem;
          border: 1px dashed rgba(106, 13, 173, 0.3);
          border-radius: 8px;
          background-color: rgba(106, 13, 173, 0.05);
          animation: fadeIn 0.3s ease-in;
        }

        .conditional-section + .conditional-section {
          margin-top: 1rem;
        }

        .pet-shop-details {
          border-color: rgba(40, 167, 69, 0.4);
          background-color: rgba(40, 167, 69, 0.05);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .subsection-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--primary-purple);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `}</style>
    </>
  );
};

export default Navbar;
