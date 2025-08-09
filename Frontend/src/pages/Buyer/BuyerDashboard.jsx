import React from 'react';
import { Package, FileText, ShoppingCart } from 'lucide-react';

const Dashboard = () => {
  // Sample data
  const pets = [
    {
      id: 1,
      name: 'Maxwell',
      age: '3 years old',
      type: 'German Shepherd',
      location: 'Thiruvananthapuram',
      price: 'LKR 50000',
      image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Maxwell',
      age: '3 years old',
      type: 'German Shepherd',
      location: 'Thiruvananthapuram',
      price: 'LKR 50000',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'Maxwell',
      age: '3 years old',
      type: 'German Shepherd',
      location: 'Thiruvananthapuram',
      price: 'LKR 50000',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=150&h=150&fit=crop'
    },
    {
      id: 4,
      name: 'Maxwell',
      age: '3 years old',
      type: 'German Shepherd',
      location: 'Thiruvananthapuram',
      price: 'LKR 50000',
      image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=150&h=150&fit=crop'
    },
    {
      id: 5,
      name: 'Maxwell',
      age: '3 years old',
      type: 'German Shepherd',
      location: 'Thiruvananthapuram',
      price: 'LKR 40000',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=150&h=150&fit=crop'
    },
    {
      id: 6,
      name: 'Maxwell',
      age: '3 years old',
      type: 'German Shepherd',
      location: 'Thiruvananthapuram',
      price: 'LKR 50000',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=150&h=150&fit=crop'
    },
    {
      id: 7,
      name: 'Maxwell',
      age: '3 years old',
      type: 'German Shepherd',
      location: 'Thiruvananthapuram',
      price: 'LKR 50000',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=150&h=150&fit=crop'
    }
  ];

  const articles = [
    {
      id: 1,
      type: 'Type',
      title: 'In this awe inspiring exploration, we set out to uncover the beauty and allure of our linguistic landscape. We come to understand that this landscape and evoke a sense of wonder and admiration.',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=200&h=150&fit=crop'
    },
    {
      id: 2,
      type: 'Type',
      title: 'In this awe inspiring exploration, we set out to uncover the beauty and allure of our linguistic landscape. We come to understand that this landscape and evoke a sense of wonder and admiration.',
      image: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=200&h=150&fit=crop'
    },
    {
      id: 3,
      type: 'Type',
      title: 'In this awe inspiring exploration, we set out to uncover the beauty and allure of our linguistic landscape. We come to understand that this landscape and evoke a sense of wonder and admiration.',
      image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=200&h=150&fit=crop'
    }
  ];

  const stats = [
    { icon: Package, label: 'Total Order', value: '450', color: 'bg-purple-100 text-purple-600' },
    { icon: Package, label: 'Total Pets', value: '4500', color: 'bg-blue-100 text-blue-600' },
    { icon: FileText, label: 'Total Article', value: '40', color: 'bg-orange-100 text-orange-600' },
    { icon: ShoppingCart, label: 'Pending Order', value: '45', color: 'bg-purple-100 text-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {pets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded mb-3 inline-block">
                  Dog
                </div>
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-32 object-cover rounded-lg mb-3 bg-green-200"
                />
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Name:</span> <span className="font-medium">{pet.name}</span></p>
                  <p><span className="text-gray-500">Age:</span> <span className="font-medium">{pet.age}</span></p>
                  <p><span className="text-gray-500">Type:</span> <span className="font-medium">{pet.type}</span></p>
                  <p><span className="text-gray-500">Location:</span> <span className="font-medium">{pet.location}</span></p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm">{pet.price}</span>
                  <div className="flex space-x-2">
                    <button className="text-purple-600 text-sm hover:underline">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Articles Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Latest Article</h2>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-2">
              <span>See more</span>
              <span>→</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4">
                  <div className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded mb-3 inline-block">
                    {article.type}
                  </div>
                  <img
                    src={article.image}
                    alt="Article"
                    className="w-full h-32 object-cover rounded-lg mb-3 bg-blue-200"
                  />
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.title}
                  </p>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm">
                    View Article
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* See More Button for Articles */}
          <div className="flex justify-end mt-6">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg text-sm flex items-center space-x-2">
              <span>See more</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;