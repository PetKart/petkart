import React, { useState } from 'react';

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState('Pending Orders');

  // Sample orders data
  const orders = [
    {
      id: 1,
      name: 'Maxwell',
      age: '3 years old',
      type: 'German Shepherd',
      location: 'Thiruvananthapuram',
      price: 'LKR 50000',
      status: 'Pending',
      category: 'Dog',
      image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Maxwell',
      age: '3 years old',
      type: 'German Shepherd',
      location: 'Thiruvananthapuram',
      price: 'LKR 50000',
      status: 'Pending',
      category: 'Dog',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'Maxwell',
      age: '3 years old',
      type: 'German Shepherd',
      location: 'Thiruvananthapuram',
      price: 'LKR 40000',
      status: 'Pending',
      category: 'Dog',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=150&h=150&fit=crop'
    },
    {
      id: 4,
      name: 'Maxwell',
      age: '3 years old',
      type: 'German Shepherd',
      location: 'Thiruvananthapuram',
      price: 'LKR 50000',
      status: 'Pending',
      category: 'Dog',
      image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=150&h=150&fit=crop'
    },
    {
      id: 5,
      name: 'Maxwell',
      age: '3 years old',
      type: 'German Shepherd',
      location: 'Thiruvananthapuram',
      price: 'LKR 50000',
      status: 'Complete',
      category: 'Dog',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=150&h=150&fit=crop'
    },
    {
      id: 6,
      name: 'Maxwell',
      age: '3 years old',
      type: 'German Shepherd',
      location: 'Thiruvananthapuram',
      price: 'LKR 50000',
      status: 'Complete',
      category: 'Dog',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=150&h=150&fit=crop'
    },
    {
      id: 7,
      name: 'Maxwell',
      age: '3 years old',
      type: 'German Shepherd',
      location: 'Thiruvananthapuram',
      price: 'LKR 50000',
      status: 'Complete',
      category: 'Dog',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=150&h=150&fit=crop'
    },
    {
      id: 8,
      name: 'Maxwell',
      age: '3 years old',
      type: 'German Shepherd',
      location: 'Thiruvananthapuram',
      price: 'LKR 50000',
      status: 'Complete',
      category: 'Dog',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=150&h=150&fit=crop'
    }
  ];

  const tabs = [
    { name: 'Pending Orders', count: 4 },
    { name: 'Completed Orders', count: 4 }
  ];

  const filteredOrders = orders.filter(order => {
    if (activeTab === 'Pending Orders') return order.status === 'Pending';
    if (activeTab === 'Completed Orders') return order.status === 'Complete';
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-purple-600 mb-6">Orders</h1>

        {/* Tab Navigation */}
        <div className="flex space-x-8 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.name
                  ? 'text-purple-600 border-purple-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Orders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded mb-3 inline-block">
                  {order.category}
                </div>
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Name:</span> <span className="font-medium">{order.name}</span></p>
                  <p><span className="text-gray-500">Age:</span> <span className="font-medium">{order.age}</span></p>
                  <p><span className="text-gray-500">Type:</span> <span className="font-medium">{order.type}</span></p>
                  <p><span className="text-gray-500">Location:</span> <span className="font-medium">{order.location}</span></p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm">{order.price}</span>
                  <span className={`px-3 py-1 rounded text-sm ${
                    order.status === 'Pending' 
                      ? 'bg-orange-100 text-orange-600' 
                      : 'bg-green-100 text-green-600'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-6">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg text-sm flex items-center space-x-2 hover:bg-purple-700 transition-colors">
            <span>See more</span>
            <span>→</span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;