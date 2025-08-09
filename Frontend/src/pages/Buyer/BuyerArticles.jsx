import React, { useState } from 'react';

const ArticlesPage = () => {
  const [activeTab, setActiveTab] = useState('Popular Article');

  // Sample articles data
  const articles = [
    // Popular Articles (8 cards)
    {
      id: 1,
      type: 'Type',
      title: 'Discover the beauty and allure of mountains, ancient giants that evoke wonder.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      category: 'Popular'
    },
    {
      id: 2,
      type: 'Type',
      title: 'Explore majestic landscapes that tower over horizons with breathtaking views.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      category: 'Popular'
    },
    {
      id: 3,
      type: 'Type',
      title: 'Journey through scenic mountain ranges and their natural magnificence.',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=200&fit=crop',
      category: 'Popular'
    },
    {
      id: 4,
      type: 'Type',
      title: 'Experience the awe-inspiring power of nature in mountainous terrains.',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=200&fit=crop',
      category: 'Popular'
    },
    {
      id: 5,
      type: 'Type',
      title: 'Uncover hidden gems in alpine landscapes and pristine wilderness.',
      image: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=300&h=200&fit=crop',
      category: 'Popular'
    },
    {
      id: 6,
      type: 'Type',
      title: 'Marvel at snow-capped peaks that reach toward endless skies.',
      image: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=300&h=200&fit=crop',
      category: 'Popular'
    },
    {
      id: 7,
      type: 'Type',
      title: 'Witness the grandeur of mountain vistas and their timeless beauty.',
      image: 'https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?w=300&h=200&fit=crop',
      category: 'Popular'
    },
    {
      id: 8,
      type: 'Type',
      title: 'Embrace the serenity found in high-altitude landscapes and valleys.',
      image: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=300&h=200&fit=crop',
      category: 'Popular'
    },
    
    // Latest Articles (8 cards)
    {
      id: 9,
      type: 'Type',
      title: 'Latest discoveries in mountain exploration and adventure trails.',
      image: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=300&h=200&fit=crop',
      category: 'Latest'
    },
    {
      id: 10,
      type: 'Type',
      title: 'New insights into alpine ecosystems and their natural wonders.',
      image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=300&h=200&fit=crop',
      category: 'Latest'
    },
    {
      id: 11,
      type: 'Type',
      title: 'Recent findings about mountain wildlife and conservation efforts.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop',
      category: 'Latest'
    },
    {
      id: 12,
      type: 'Type',
      title: 'Modern techniques for mountain photography and scenic captures.',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop',
      category: 'Latest'
    },
    {
      id: 13,
      type: 'Type',
      title: 'Updated guides for safe mountain hiking and outdoor adventures.',
      image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=300&h=200&fit=crop',
      category: 'Latest'
    },
    {
      id: 14,
      type: 'Type',
      title: 'Fresh perspectives on mountain climbing and expedition planning.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      category: 'Latest'
    },
    {
      id: 15,
      type: 'Type',
      title: 'Current trends in mountain tourism and sustainable travel.',
      image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=300&h=200&fit=crop',
      category: 'Latest'
    },
    {
      id: 16,
      type: 'Type',
      title: 'Breaking news about geological discoveries in mountain regions.',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=200&fit=crop',
      category: 'Latest'
    }
  ];

  const tabs = ['Popular Article', 'Latest Article'];

  const filteredArticles = articles.filter(article => {
    if (activeTab === 'Popular Article') return article.category === 'Popular';
    if (activeTab === 'Latest Article') return article.category === 'Latest';
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        {/* Tab Navigation */}
        <div className="flex justify-end space-x-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-purple-600 border border-purple-600 hover:bg-purple-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded mb-3 inline-block">
                  {article.type}
                </div>
                <img
                  src={article.image}
                  alt="Article"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {article.title}
                </p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm w-full hover:bg-purple-700 transition-colors">
                  View Article
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;