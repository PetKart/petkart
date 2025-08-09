import React, { useState } from 'react';
import { Plus, Edit, Trash2, Calendar, Image as ImageIcon } from 'lucide-react';
import toast from 'react-hot-toast';

const PetshopAddOffers = () => {
  const [offers, setOffers] = useState([
    {
      id: '1',
      title: '20% Off on All Dog Breeds',
      publishDate: '2024-01-15',
      body: 'Get 20% discount on all dog breeds this month. Perfect time to bring home your furry friend!',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      status: 'active'
    },
    {
      id: '2',
      title: 'Free Pet Accessories',
      publishDate: '2024-01-10',
      body: 'Buy any cat and get free accessories including food bowl, toys, and bed.',
      image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      status: 'active'
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    publishDate: '',
    body: '',
    image: ''
  });

  const [editingOffer, setEditingOffer] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.publishDate || !formData.body) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (editingOffer) {
      setOffers(offers.map(offer =>
        offer.id === editingOffer.id
          ? { ...formData, id: editingOffer.id, status: editingOffer.status }
          : offer
      ));
      toast.success('Offer updated successfully!');
      setEditingOffer(null);
    } else {
      const newOffer = {
        ...formData,
        id: Date.now().toString(),
        status: 'active'
      };
      setOffers([...offers, newOffer]);
      toast.success('Offer created successfully!');
    }

    setFormData({
      title: '',
      publishDate: '',
      body: '',
      image: ''
    });
  };

  const handleEdit = (offer) => {
    setFormData({
      title: offer.title,
      publishDate: offer.publishDate,
      body: offer.body,
      image: offer.image || ''
    });
    setEditingOffer(offer);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this offer?')) {
      setOffers(offers.filter(offer => offer.id !== id));
      toast.success('Offer deleted successfully!');
    }
  };

  const toggleStatus = (id) => {
    setOffers(offers.map(offer =>
      offer.id === id
        ? { ...offer, status: offer.status === 'active' ? 'inactive' : 'active' }
        : offer
    ));
    toast.success('Offer status updated!');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Add/Edit Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            {editingOffer ? 'Edit Offer' : 'Create New Offer'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Offer Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="e.g., 20% Off on All Dogs"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Publish Date *
              </label>
              <input
                type="date"
                value={formData.publishDate}
                onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
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
                Offer Description *
              </label>
              <textarea
                value={formData.body}
                onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Describe the offer details, terms, and conditions..."
                required
              />
            </div>

            <div className="flex space-x-4">
              {editingOffer && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingOffer(null);
                    setFormData({
                      title: '',
                      publishDate: '',
                      body: '',
                      image: ''
                    });
                  }}
                  className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors duration-200"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Plus size={20} />
                <span>{editingOffer ? 'Update Offer' : 'Create Offer'}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right Column - Offers List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Active Offers</h2>
            <span className="text-sm text-gray-500">{offers.length} total offers</span>
          </div>

          <div className="space-y-4">
            {offers.map((offer) => (
              <div key={offer.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-medium text-gray-900">{offer.title}</h3>
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        offer.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {offer.status}
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar size={16} className="mr-1" />
                      <span>Published: {new Date(offer.publishDate).toLocaleDateString()}</span>
                    </div>

                    <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                      {offer.body}
                    </p>

                    {offer.image && (
                      <div className="mb-3">
                        <img
                          src={offer.image}
                          alt={offer.title}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(offer)}
                        className="flex items-center space-x-1 px-3 py-1 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                      >
                        <Edit size={14} />
                        <span className="text-sm">Edit</span>
                      </button>

                      <button
                        onClick={() => toggleStatus(offer.id)}
                        className={`px-3 py-1 text-sm rounded-lg transition-colors duration-200 ${
                          offer.status === 'active'
                            ? 'text-orange-600 hover:bg-orange-50'
                            : 'text-green-600 hover:bg-green-50'
                        }`}
                      >
                        {offer.status === 'active' ? 'Deactivate' : 'Activate'}
                      </button>

                      <button
                        onClick={() => handleDelete(offer.id)}
                        className="flex items-center space-x-1 px-3 py-1 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      >
                        <Trash2 size={14} />
                        <span className="text-sm">Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {offers.length === 0 && (
              <div className="text-center py-8">
                <ImageIcon size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">No offers created yet.</p>
                <p className="text-sm text-gray-400">Create your first offer using the form on the left.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetshopAddOffers;
