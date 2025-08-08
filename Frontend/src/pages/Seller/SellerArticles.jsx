import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Calendar, Image as ImageIcon } from 'lucide-react';
import toast from 'react-hot-toast';

const SellerArticles = () => {
  const [showModal, setShowModal] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [viewingArticle, setViewingArticle] = useState(null);

  const [articles, setArticles] = useState([
    {
      id: '1',
      name: 'Complete Guide to Dog Training',
      content: 'Dog training is essential for building a strong relationship with your pet. Start with basic commands like sit, stay, and come. Consistency is key to successful training. Always use positive reinforcement and reward good behavior with treats and praise.',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      publishDate: '2024-01-10',
      status: 'published',
      views: 245
    },
    {
      id: '2',
      name: 'Cat Care Essentials',
      content: 'Caring for cats requires understanding their unique needs. Provide a clean litter box, fresh water, and high-quality food. Regular grooming and veterinary checkups are important for maintaining your cat\'s health and happiness.',
      image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      publishDate: '2024-01-08',
      status: 'published',
      views: 189
    },
    {
      id: '3',
      name: 'Choosing the Right Pet for Your Family',
      content: 'Selecting a pet is a big decision that affects the whole family. Consider factors like living space, time availability, budget, and family members\' preferences. Different pets have different needs and requirements.',
      publishDate: '2024-01-05',
      status: 'draft',
      views: 0
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    content: '',
    image: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.content) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (editingArticle) {
      setArticles(articles.map(article => 
        article.id === editingArticle.id 
          ? { 
              ...editingArticle,
              ...formData,
              publishDate: editingArticle.status === 'draft' ? new Date().toISOString().split('T')[0] : editingArticle.publishDate,
              status: 'published'
            }
          : article
      ));
      toast.success('Article updated successfully!');
    } else {
      const newArticle = {
        ...formData,
        id: Date.now().toString(),
        publishDate: new Date().toISOString().split('T')[0],
        status: 'published',
        views: 0
      };
      setArticles([newArticle, ...articles]);
      toast.success('Article published successfully!');
    }

    setFormData({
      name: '',
      content: '',
      image: ''
    });
    setEditingArticle(null);
    setShowModal(false);
  };

  const handleEdit = (article) => {
    setFormData({
      name: article.name,
      content: article.content,
      image: article.image || ''
    });
    setEditingArticle(article);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      setArticles(articles.filter(article => article.id !== id));
      toast.success('Article deleted successfully!');
    }
  };

  const handleView = (article) => {
    // Simulate view increment
    setArticles(articles.map(a => 
      a.id === article.id ? { ...a, views: a.views + 1 } : a
    ));
    setViewingArticle(article);
  };

  const publishedArticles = articles.filter(a => a.status === 'published');
  const draftArticles = articles.filter(a => a.status === 'draft');
  const totalViews = articles.reduce((sum, article) => sum + article.views, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-end">
        <button
          onClick={() => {
            setFormData({
              name: '',
              content: '',
              image: ''
            });
            setEditingArticle(null);
            setShowModal(true);
          }}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200"
        >
          <Plus size={20} />
          <span>Add Article</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Articles</p>
              <p className="text-3xl font-bold text-gray-900">{articles.length}</p>
            </div>
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
              <ImageIcon size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Published</p>
              <p className="text-3xl font-bold text-green-600">{publishedArticles.length}</p>
            </div>
            <div className="bg-green-100 text-green-600 p-3 rounded-full">
              <Eye size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Drafts</p>
              <p className="text-3xl font-bold text-yellow-600">{draftArticles.length}</p>
            </div>
            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
              <Edit size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Views</p>
              <p className="text-3xl font-bold text-purple-600">{totalViews}</p>
            </div>
            <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
              <Eye size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
            {article.image ? (
              <img
                src={article.image}
                alt={article.name}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <ImageIcon size={48} className="text-gray-400" />
              </div>
            )}
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                  article.status === 'published' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {article.status}
                </span>
                {article.status === 'published' && (
                  <div className="flex items-center text-sm text-gray-500">
                    <Eye size={14} className="mr-1" />
                    {article.views}
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {article.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {article.content}
              </p>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar size={14} className="mr-1" />
                <span>Published: {new Date(article.publishDate).toLocaleDateString()}</span>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => handleView(article)}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg text-sm transition-colors duration-200 flex items-center justify-center space-x-1"
                >
                  <Eye size={16} />
                  <span>View</span>
                </button>
                <button
                  onClick={() => handleEdit(article)}
                  className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => handleDelete(article.id)}
                  className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-200"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {articles.length === 0 && (
        <div className="text-center py-12">
          <ImageIcon size={64} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg">No articles yet</p>
          <p className="text-gray-400">Create your first article to get started</p>
        </div>
      )}

      {/* Add/Edit Article Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 transition-opacity duration-300 ease-in-out">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {editingArticle ? 'Edit Article' : 'Add New Article'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="e.g., Complete Guide to Dog Training"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Featured Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="https://example.com/image.jpg"
                  />
                  {formData.image && (
                    <div className="mt-2">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-full h-32 object-cover rounded-lg"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content *
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    rows={8}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Write your article content here..."
                    required
                  />
                </div>
                
                <div className="flex justify-end space-x-4 mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setEditingArticle(null);
                    }}
                    className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
                  >
                    {editingArticle ? 'Update' : 'Publish'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* View Article Modal */}
      {viewingArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    viewingArticle.status === 'published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {viewingArticle.status}
                  </span>
                  {viewingArticle.status === 'published' && (
                    <div className="flex items-center text-sm text-gray-500">
                      <Eye size={14} className="mr-1" />
                      {viewingArticle.views} views
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setViewingArticle(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {viewingArticle.name}
              </h1>
              
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <Calendar size={16} className="mr-2" />
                <span>Published on {new Date(viewingArticle.publishDate).toLocaleDateString()}</span>
              </div>
              
              {viewingArticle.image && (
                <img
                  src={viewingArticle.image}
                  alt={viewingArticle.name}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              )}
              
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {viewingArticle.content}
                </p>
              </div>
              
              <div className="flex justify-end space-x-4 mt-6 pt-6 border-t">
                <button
                  onClick={() => {
                    setViewingArticle(null);
                    handleEdit(viewingArticle);
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center space-x-2"
                >
                  <Edit size={16} />
                  <span>Edit Article</span>
                </button>
                <button
                  onClick={() => setViewingArticle(null)}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerArticles;