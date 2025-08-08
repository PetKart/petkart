import React, { useState } from "react";

const SellerProfile = () => {
  const [seller, setSeller] = useState({
    name: "John's Pet Store",
    email: "john@petstore.com",
    phone: "+1 (555) 123-4567",
    address: "123 Pet Lane, Animalville, CA 94123",
    bio: "We've been selling quality pet products for over 10 years. Specializing in organic pet food and eco-friendly toys.",
    website: "www.johnspetstore.com",
    joinedDate: "January 2020",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...seller });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSeller({ ...formData });
    setIsEditing(false);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Seller Profile</h1>

      <div className="bg-white p-6 rounded shadow">
        {!isEditing ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-4">
                  {seller.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{seller.name}</h2>
                  <p className="text-gray-500">
                    Member since {seller.joinedDate}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit Profile
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <p className="mb-2">
                  <span className="font-medium">Email:</span> {seller.email}
                </p>
                <p className="mb-2">
                  <span className="font-medium">Phone:</span> {seller.phone}
                </p>
                <p className="mb-2">
                  <span className="font-medium">Website:</span> {seller.website}
                </p>
                <p className="mb-2">
                  <span className="font-medium">Address:</span> {seller.address}
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">About</h3>
                <p className="text-gray-700">{seller.bio}</p>
              </div>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Store Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="website">
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="bio">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border rounded"
              ></textarea>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border border-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SellerProfile;
