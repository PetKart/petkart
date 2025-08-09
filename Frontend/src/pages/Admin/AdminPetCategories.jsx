import React, { useState } from 'react';
import { 
  Package, 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Edit3, 
  Trash2, 
  MoreVertical, 
  Star,
  TrendingUp,
  DollarSign,
  Users,
  Image,
  Save,
  X,
  Upload,
  Download,
  AlertTriangle,
  CheckCircle,
  Heart,
  Award
} from 'lucide-react';

const AdminPetCategories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // Mock pet categories data - replace with actual API data
  const petCategories = [
    {
      id: 'CAT-001',
      name: 'Dogs',
      description: 'Domestic dogs of all breeds and sizes',
      parentCategory: null,
      subcategories: ['Golden Retriever', 'German Shepherd', 'Labrador', 'Bulldog', 'Poodle'],
      totalPets: 1456,
      activePets: 1234,
      totalSales: 2580000,
      averagePrice: 28500,
      popularBreeds: ['Golden Retriever', 'German Shepherd', 'Labrador'],
      status: 'active',
      image: '/api/placeholder/80/80',
      createdDate: '2024-01-15',
      lastUpdated: '2025-08-01',
      trending: true,
      featured: true
    },
    {
      id: 'CAT-002',
      name: 'Cats',
      description: 'Domestic cats including various breeds',
      parentCategory: null,
      subcategories: ['Persian', 'Maine Coon', 'Siamese', 'British Shorthair', 'Ragdoll'],
      totalPets: 987,
      activePets: 876,
      totalSales: 1890000,
      averagePrice: 22300,
      popularBreeds: ['Persian', 'Maine Coon', 'Siamese'],
      status: 'active',
      image: '/api/placeholder/80/80',
      createdDate: '2024-01-15',
      lastUpdated: '2025-07-28',
      trending: false,
      featured: true
    },
    {
      id: 'CAT-003',
      name: 'Birds',
      description: 'Domestic birds and exotic species',
      parentCategory: null,
      subcategories: ['Parrots', 'Canaries', 'Budgerigars', 'Cockatoos', 'Lovebirds'],
      totalPets: 543,
      activePets: 498,
      totalSales: 890000,
      averagePrice: 15600,
      popularBreeds: ['Parrots', 'Canaries', 'Budgerigars'],
      status: 'active',
      image: '/api/placeholder/80/80',
      createdDate: '2024-02-10',
      lastUpdated: '2025-08-05',
      trending: true,
      featured: false
    },
    {
      id: 'CAT-004',
      name: 'Fish',
      description: 'Aquarium fish and marine life',
      parentCategory: null,
      subcategories: ['Goldfish', 'Betta', 'Angelfish', 'Guppies', 'Neon Tetras'],
      totalPets: 321,
      activePets: 289,
      totalSales: 245000,
      averagePrice: 3200,
      popularBreeds: ['Goldfish', 'Betta', 'Angelfish'],
      status: 'active',
      image: '/api/placeholder/80/80',
      createdDate: '2024-03-05',
      lastUpdated: '2025-08-03',
      trending: false,
      featured: false
    },
    {
      id: 'CAT-005',
      name: 'Rabbits',
      description: 'Domestic rabbits and bunnies',
      parentCategory: null,
      subcategories: ['Holland Lop', 'Netherland Dwarf', 'Lionhead', 'Mini Rex'],
      totalPets: 149,
      activePets: 132,
      totalSales: 178000,
      averagePrice: 8900,
      popularBreeds: ['Holland Lop', 'Netherland Dwarf'],
      status: 'active',
      image: '/api/placeholder/80/80',
      createdDate: '2024-04-12',
      lastUpdated: '2025-07-20',
      trending: false,
      featured: false
    },
    {
      id: 'CAT-006',
      name: 'Hamsters',
      description: 'Small domestic rodents',
      parentCategory: null,
      subcategories: ['Syrian Hamster', 'Dwarf Hamster', 'Roborovski'],
      totalPets: 78,
      activePets: 65,
      totalSales: 89000,
      averagePrice: 2500,
      popularBreeds: ['Syrian Hamster', 'Dwarf Hamster'],
      status: 'draft',
      image: '/api/placeholder/80/80',
      createdDate: '2025-06-15',
      lastUpdated: '2025-08-08',
      trending: false,
      featured: false
    }
  ];

  // Filter categories based on search and filters
  const filteredCategories = petCategories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.subcategories.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = filterCategory === 'all' || 
                           (filterCategory === 'main' && !category.parentCategory) ||
                           (filterCategory === 'sub' && category.parentCategory);
    
    const matchesStatus = filterStatus === 'all' || category.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Calculate category statistics
  const categoryStats = {
    total: petCategories.length,
    active: petCategories.filter(c => c.status === 'active').length,
    draft: petCategories.filter(c => c.status === 'draft').length,
    trending: petCategories.filter(c => c.trending).length,
    totalPets: petCategories.reduce((sum, cat) => sum + cat.totalPets, 0),
    totalRevenue: petCategories.reduce((sum, cat) => sum + cat.totalSales, 0),
    averagePrice: petCategories.reduce((sum, cat) => sum + cat.averagePrice, 0) / petCategories.length
  };

  const getStatusBadge = (status) => {
    const badges = {
      active: 'bg-green-100 text-green-800',
      draft: 'bg-yellow-100 text-yellow-800',
      inactive: 'bg-red-100 text-red-800'
    };
    return badges[status] || 'bg-gray-100 text-gray-800';
  };

  const handleSelectCategory = (categoryId) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleSelectAll = () => {
    setSelectedCategories(
      selectedCategories.length === filteredCategories.length 
        ? [] 
        : filteredCategories.map(category => category.id)
    );
  };

  const formatCurrency = (amount) => {
    return `Rs.${amount.toLocaleString()}`;
  };

  const AddCategoryModal = () => {
    const [formData, setFormData] = useState({
      name: '',
      description: '',
      parentCategory: '',
      status: 'active'
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log('Adding category:', formData);
      setShowAddModal(false);
      setFormData({ name: '', description: '', parentCategory: '', status: 'active' });
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Add New Category</h3>
            <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter category name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="3"
                placeholder="Enter category description"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Parent Category</label>
              <select
                value={formData.parentCategory}
                onChange={(e) => setFormData({...formData, parentCategory: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">None (Main Category)</option>
                {petCategories.filter(c => !c.parentCategory).map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
              >
                <Save size={16} className="mr-2" />
                Save Category
              </button>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pet Categories Management</h1>
          <p className="text-gray-600">Manage pet categories, breeds, and classifications</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Download size={16} className="mr-2" />
            Export
          </button>
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
          >
            <Plus size={16} className="mr-2" />
            Add Category
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Categories</p>
              <p className="text-3xl font-bold text-gray-900">{categoryStats.total}</p>
              <p className="text-xs text-gray-500 mt-1">{categoryStats.active} active</p>
            </div>
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
              <Package size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Pets</p>
              <p className="text-3xl font-bold text-green-600">{categoryStats.totalPets.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-1">All categories</p>
            </div>
            <div className="bg-green-100 text-green-600 p-3 rounded-full">
              <Heart size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-3xl font-bold text-purple-600">{formatCurrency(categoryStats.totalRevenue)}</p>
              <p className="text-xs text-gray-500 mt-1">All time sales</p>
            </div>
            <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
              <DollarSign size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Trending</p>
              <p className="text-3xl font-bold text-orange-600">{categoryStats.trending}</p>
              <p className="text-xs text-gray-500 mt-1">Hot categories</p>
            </div>
            <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
              <TrendingUp size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Category Performance Overview */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Category Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {petCategories.filter(c => c.status === 'active').slice(0, 3).map((category, index) => (
            <div key={category.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900">{category.name}</h3>
                {category.trending && (
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full flex items-center">
                    <TrendingUp size={12} className="mr-1" />
                    Trending
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Pets:</span>
                  <span className="font-medium">{category.totalPets}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Revenue:</span>
                  <span className="font-medium text-green-600">{formatCurrency(category.totalSales)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avg Price:</span>
                  <span className="font-medium">{formatCurrency(category.averagePrice)}</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500">Popular Breeds:</p>
                <p className="text-sm font-medium text-gray-700">{category.popularBreeds.slice(0, 2).join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-80"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter size={16} className="mr-2" />
              Filters
            </button>
          </div>
          
          {selectedCategories.length > 0 && (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">{selectedCategories.length} selected</span>
              <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                Activate
              </button>
              <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                Delete
              </button>
            </div>
          )}
        </div>

        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category Type</label>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Categories</option>
                  <option value="main">Main Categories</option>
                  <option value="sub">Subcategories</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="draft">Draft</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setFilterCategory('all');
                    setFilterStatus('all');
                    setSearchTerm('');
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Categories Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedCategories.length === filteredCategories.length && filteredCategories.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Breeds</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inventory</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCategories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => handleSelectCategory(category.id)}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12">
                        <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center">
                          <Package className="text-gray-500" size={20} />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">{category.name}</div>
                          {category.featured && (
                            <Award className="ml-2 text-yellow-500" size={16} />
                          )}
                          {category.trending && (
                            <TrendingUp className="ml-1 text-red-500" size={16} />
                          )}
                        </div>
                        <div className="text-sm text-gray-500">{category.description}</div>
                        <div className="text-xs text-gray-400">{category.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{category.subcategories.length} breeds</div>
                    <div className="text-xs text-gray-500">
                      {category.subcategories.slice(0, 2).join(', ')}
                      {category.subcategories.length > 2 && ` +${category.subcategories.length - 2} more`}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{category.totalPets} pets</div>
                    <div className="text-sm text-green-600">{category.activePets} active</div>
                    <div className="text-xs text-gray-500">{category.totalPets - category.activePets} inactive</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{formatCurrency(category.totalSales)}</div>
                    <div className="text-sm text-gray-500">Avg: {formatCurrency(category.averagePrice)}</div>
                    <div className="flex items-center mt-1">
                      <Star size={12} className="text-yellow-400 mr-1" />
                      <span className="text-xs text-gray-600">Top seller</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(category.status)}`}>
                      {category.status.charAt(0).toUpperCase() + category.status.slice(1)}
                    </span>
                    <div className="text-xs text-gray-500 mt-1">
                      Updated: {category.lastUpdated}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-700" title="View Details">
                        <Eye size={16} />
                      </button>
                      <button 
                        className="text-green-600 hover:text-green-700" 
                        title="Edit Category"
                        onClick={() => setEditingItem(category)}
                      >
                        <Edit3 size={16} />
                      </button>
                      <button className="text-red-600 hover:text-red-700" title="Delete Category">
                        <Trash2 size={16} />
                      </button>
                      <button className="text-gray-600 hover:text-gray-700" title="More Options">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <Package className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No categories found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredCategories.length > 0 && (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 rounded-lg shadow-md">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredCategories.length}</span> of{' '}
                <span className="font-medium">{filteredCategories.length}</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Previous
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  1
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Add Category Modal */}
      {showAddModal && <AddCategoryModal />}
    </div>
  );
};

export default AdminPetCategories;
