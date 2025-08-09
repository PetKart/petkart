import React, { useState } from 'react';

const PetshopHome = () => {
  const [activeTab, setActiveTab] = useState('All');

  // Sample pets data
  const pets = [
    // Dogs (8 cards)
    {
      id: 1,
      name: 'Maxwell',
      age: '3 years old',
      type: 'German Shepherd',
      location: 'Thiruvananthapuram',
      price: 'LKR 50000',
      category: 'Dog',
      image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Buddy',
      age: '2 years old',
      type: 'Golden Retriever',
      location: 'Colombo',
      price: 'LKR 45000',
      category: 'Dog',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'Rocky',
      age: '4 years old',
      type: 'Labrador',
      location: 'Kandy',
      price: 'LKR 40000',
      category: 'Dog',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=150&h=150&fit=crop'
    },
    {
      id: 4,
      name: 'Charlie',
      age: '1 year old',
      type: 'Beagle',
      location: 'Galle',
      price: 'LKR 35000',
      category: 'Dog',
      image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=150&h=150&fit=crop'
    },
    {
      id: 5,
      name: 'Duke',
      age: '2 years old',
      type: 'Rottweiler',
      location: 'Negombo',
      price: 'LKR 55000',
      category: 'Dog',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=150&h=150&fit=crop'
    },
    {
      id: 6,
      name: 'Rex',
      age: '3 years old',
      type: 'Husky',
      location: 'Matara',
      price: 'LKR 60000',
      category: 'Dog',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=150&h=150&fit=crop'
    },
    {
      id: 7,
      name: 'Bruno',
      age: '1 year old',
      type: 'Bulldog',
      location: 'Jaffna',
      price: 'LKR 48000',
      category: 'Dog',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=150&h=150&fit=crop'
    },
    {
      id: 8,
      name: 'Zeus',
      age: '4 years old',
      type: 'German Shepherd',
      location: 'Anuradhapura',
      price: 'LKR 52000',
      category: 'Dog',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=150&h=150&fit=crop'
    },
    
    // Cats (8 cards)
    {
      id: 9,
      name: 'Luna',
      age: '2 years old',
      type: 'Persian Cat',
      location: 'Thiruvananthapuram',
      price: 'LKR 25000',
      category: 'Cat',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&h=150&fit=crop'
    },
    {
      id: 10,
      name: 'Milo',
      age: '1 year old',
      type: 'British Shorthair',
      location: 'Colombo',
      price: 'LKR 30000',
      category: 'Cat',
      image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=150&h=150&fit=crop'
    },
    {
      id: 11,
      name: 'Bella',
      age: '3 years old',
      type: 'Siamese Cat',
      location: 'Kandy',
      price: 'LKR 28000',
      category: 'Cat',
      image: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=150&h=150&fit=crop'
    },
    {
      id: 12,
      name: 'Shadow',
      age: '2 years old',
      type: 'Maine Coon',
      location: 'Galle',
      price: 'LKR 35000',
      category: 'Cat',
      image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=150&h=150&fit=crop'
    },
    {
      id: 13,
      name: 'Oliver',
      age: '1 year old',
      type: 'Ragdoll',
      location: 'Negombo',
      price: 'LKR 32000',
      category: 'Cat',
      image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=150&h=150&fit=crop'
    },
    {
      id: 14,
      name: 'Smokey',
      age: '2 years old',
      type: 'Russian Blue',
      location: 'Matara',
      price: 'LKR 27000',
      category: 'Cat',
      image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=150&h=150&fit=crop'
    },
    {
      id: 15,
      name: 'Princess',
      age: '3 years old',
      type: 'Persian Cat',
      location: 'Jaffna',
      price: 'LKR 29000',
      category: 'Cat',
      image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=150&h=150&fit=crop'
    },
    {
      id: 16,
      name: 'Tiger',
      age: '1 year old',
      type: 'Bengal Cat',
      location: 'Anuradhapura',
      price: 'LKR 38000',
      category: 'Cat',
      image: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=150&h=150&fit=crop'
    },
    
    // Fish (8 cards)
    {
      id: 17,
      name: 'Nemo',
      age: '6 months old',
      type: 'Clownfish',
      location: 'Thiruvananthapuram',
      price: 'LKR 1500',
      category: 'Fish',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=150&h=150&fit=crop'
    },
    {
      id: 18,
      name: 'Goldie',
      age: '1 year old',
      type: 'Goldfish',
      location: 'Colombo',
      price: 'LKR 800',
      category: 'Fish',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop'
    },
    {
      id: 19,
      name: 'Betta',
      age: '8 months old',
      type: 'Betta Fish',
      location: 'Kandy',
      price: 'LKR 1200',
      category: 'Fish',
      image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=150&h=150&fit=crop'
    },
    {
      id: 20,
      name: 'Angel',
      age: '1 year old',
      type: 'Angelfish',
      location: 'Galle',
      price: 'LKR 2000',
      category: 'Fish',
      image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=150&h=150&fit=crop'
    },
    {
      id: 21,
      name: 'Coral',
      age: '10 months old',
      type: 'Parrotfish',
      location: 'Negombo',
      price: 'LKR 2500',
      category: 'Fish',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=150&h=150&fit=crop'
    },
    {
      id: 22,
      name: 'Dory',
      age: '7 months old',
      type: 'Blue Tang',
      location: 'Matara',
      price: 'LKR 3000',
      category: 'Fish',
      image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=150&h=150&fit=crop'
    },
    {
      id: 23,
      name: 'Flash',
      age: '1 year old',
      type: 'Guppy',
      location: 'Jaffna',
      price: 'LKR 500',
      category: 'Fish',
      image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=150&h=150&fit=crop'
    },
    {
      id: 24,
      name: 'Sparkle',
      age: '9 months old',
      type: 'Tetra Fish',
      location: 'Anuradhapura',
      price: 'LKR 600',
      category: 'Fish',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=150&h=150&fit=crop'
    }
  ];

  const stats = [
    { label: 'Stock of Dogs', value: '40', color: 'text-purple-600' },
    { label: 'Stock of Cats', value: '50', color: 'text-purple-600' },
    { label: 'Stock of Fish', value: '90', color: 'text-purple-600' },
    { label: 'Stock of Birds', value: '90', color: 'text-purple-600' },
    { label: 'Stock of Other Varieties', value: '23', color: 'text-purple-600' }
  ];

  const tabs = ['All', 'Dog', 'Cat', 'Fish', 'Bird', 'Other'];

  const filteredPets = activeTab === 'All' ? pets : pets.filter(pet => pet.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        {/* <h1 className="text-2xl font-bold text-purple-600 mb-6">Pets Data</h1> */}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <p className="text-gray-500 text-sm mb-2">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex space-x-6 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? 'text-purple-600 border-purple-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Pets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded mb-3 inline-block">
                  {pet.category}
                </div>
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Name:</span> <span className="font-medium">{pet.name}</span></p>
                  <p><span className="text-gray-500">Age:</span> <span className="font-medium">{pet.age}</span></p>
                  <p><span className="text-gray-500">Type:</span> <span className="font-medium">{pet.type}</span></p>
                  <p><span className="text-gray-500">Location:</span> <span className="font-medium">{pet.location}</span></p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm">{pet.price}</span>
                  <button className="text-purple-600 text-sm hover:underline">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* See More Button */}
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

export default PetshopHome;