import React, { useState } from "react";
import Login from "../../components/Login";

const LandingPage = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleGetStartedClick = () => {
    setShowSignupModal(true);
  };

  return (
    <div className="min-h-screen">
      <Login
        showSignupModal={showSignupModal}
        setShowSignupModal={setShowSignupModal}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
        {/* Badge */}
        <div className="absolute top-8 left-8 z-20">
          <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full flex items-center space-x-2">
            <span className="text-sm">🐾</span>
            <span className="text-sm font-medium">
              Trusted Pet Care Since 2020
            </span>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-32 left-16 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-white rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Find Your Perfect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                  Furry Companion
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
                Discover joy and unconditional love with PetKart's carefully
                selected pets. From playful puppies to elegant cats and exotic
                fish, we help you find the perfect addition to your family.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-white text-purple-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Explore Our Pets
                </button>
                <button
                  onClick={handleGetStartedClick}
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>💎</span>
                  <span>Get Started</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-1">
                    500+
                  </div>
                  <div className="text-purple-200 text-sm">Happy Families</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-1">
                    50+
                  </div>
                  <div className="text-purple-200 text-sm">Pet Breeds</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-1">
                    24/7
                  </div>
                  <div className="text-purple-200 text-sm">
                    Pet Care Support
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Cute kitten"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>

                {/* Floating hearts */}
                <div className="absolute top-4 right-4 text-2xl animate-pulse">
                  💜
                </div>
                <div
                  className="absolute bottom-16 left-4 text-xl animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  💜
                </div>
                <div
                  className="absolute top-1/3 -right-2 text-lg animate-pulse"
                  style={{ animationDelay: "2s" }}
                >
                  💜
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Categories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Perfect
              <span className="text-purple-600"> Pet Companion</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From loyal dogs to independent cats and peaceful fish - find the
              pet that matches your lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Dogs Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Happy dogs"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">Dogs</h3>
                  <p className="text-sm opacity-90">Loyal & Loving</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover the joy of unconditional love with our carefully
                  selected dogs. From playful puppies to gentle giants.
                </p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105">
                  Browse Dogs
                </button>
              </div>
            </div>

            {/* Cats Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Beautiful cats"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">Cats</h3>
                  <p className="text-sm opacity-90">Independent & Graceful</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Find your perfect feline friend. Our cats bring elegance,
                  comfort, and companionship to your home.
                </p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105">
                  Browse Cats
                </button>
              </div>
            </div>

            {/* Fish Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Colorful fish"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">Fish</h3>
                  <p className="text-sm opacity-90">Peaceful & Beautiful</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Create a serene underwater world. Our fish collection brings
                  tranquility and beauty to any space.
                </p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105">
                  Browse Fish
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose
              <span className="text-purple-600"> PetKart?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Safe & Secure
              </h3>
              <p className="text-gray-600">
                All pets are verified and come from trusted sources
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Health Guaranteed
              </h3>
              <p className="text-gray-600">
                Health records and vaccination details available
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Get help whenever you need it from our support team
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Easy Process
              </h3>
              <p className="text-gray-600">
                Simple and quick pet adoption process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Pets Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Happy Pets
              <span className="text-purple-600"> Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the joy and happiness our pet marketplace has brought to
              thousands of families
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Happy dog"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Cute kitten"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Beautiful fish tank"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Playful puppy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Adorable cat"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1520637736862-4d197d17c12a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Tropical fish"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Happy pets background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">
                10K+
              </div>
              <div className="text-purple-100 text-lg">Happy Pets</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">
                5K+
              </div>
              <div className="text-purple-100 text-lg">Pet Parents</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">
                99%
              </div>
              <div className="text-purple-100 text-lg">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white">
                24/7
              </div>
              <div className="text-purple-100 text-lg">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Happy pets together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-800/90"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your New Best Friend?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of happy pet parents who found their perfect
            companion through PetKart
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetStartedClick}
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Started Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">
                PetKart
              </h3>
              <p className="text-gray-400 mb-4">
                Connecting pet lovers with their perfect companions. Your
                trusted marketplace for dogs, cats, and fish.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 cursor-pointer transition-colors">
                  <span>📘</span>
                </div>
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 cursor-pointer transition-colors">
                  <span>🐦</span>
                </div>
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 cursor-pointer transition-colors">
                  <span>📷</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Browse Pets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    List Your Pet
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Safety Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 PetKart. All rights reserved. Made with ❤️ for pet
              lovers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
