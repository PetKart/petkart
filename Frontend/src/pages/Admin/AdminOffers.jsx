import React, { useState } from 'react';
import { 
  Tag, 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Edit3, 
  Trash2, 
  MoreVertical, 
  Calendar,
  DollarSign,
  Percent,
  Users,
  Package,
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Save,
  X,
  Copy,
  Share,
  BarChart3,
  Target,
  Gift,
  Zap
} from 'lucide-react';

const AdminOffers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [selectedOffers, setSelectedOffers] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingOffer, setEditingOffer] = useState(null);

  // Mock offers data - replace with actual API data
  const offers = [
    {
      id: 'OFF-001',
      title: 'Summer Pet Sale',
      description: 'Get 20% off on all dog breeds this summer',
      type: 'percentage',
      value: 20,
      code: 'SUMMER20',
      minAmount: 5000,
      maxDiscount: 10000,
      startDate: '2025-08-01',
      endDate: '2025-08-31',
      status: 'active',
      category: 'Dogs',
      usageLimit: 500,
      usedCount: 127,
      totalSavings: 245000,
      applicableUsers: 'all',
      featured: true,
      priority: 'high'
    },
    {
      id: 'OFF-002',
      title: 'New User Welcome',
      description: 'Welcome bonus for first-time buyers',
      type: 'fixed',
      value: 1000,
      code: 'WELCOME1000',
      minAmount: 2000,
      maxDiscount: 1000,
      startDate: '2025-07-01',
      endDate: '2025-12-31',
      status: 'active',
      category: 'All Categories',
      usageLimit: 1000,
      usedCount: 456,
      totalSavings: 456000,
      applicableUsers: 'new',
      featured: false,
      priority: 'medium'
    },
    {
      id: 'OFF-003',
      title: 'Cat Lovers Special',
      description: 'Exclusive discount for cat purchases',
      type: 'percentage',
      value: 15,
      code: 'CATLOVE15',
      minAmount: 3000,
      maxDiscount: 5000,
      startDate: '2025-08-15',
      endDate: '2025-09-15',
      status: 'scheduled',
      category: 'Cats',
      usageLimit: 200,
      usedCount: 0,
      totalSavings: 0,
      applicableUsers: 'all',
      featured: true,
      priority: 'high'
    },
    {
      id: 'OFF-004',
      title: 'Bird Week Bonanza',
      description: 'Special prices on exotic birds',
      type: 'percentage',
      value: 25,
      code: 'BIRDWEEK25',
      minAmount: 1500,
      maxDiscount: 7500,
      startDate: '2025-07-20',
      endDate: '2025-07-27',
      status: 'expired',
      category: 'Birds',
      usageLimit: 100,
      usedCount: 89,
      totalSavings: 178000,
      applicableUsers: 'all',
      featured: false,
      priority: 'low'
    },
    {
      id: 'OFF-005',
      title: 'Premium Member Exclusive',
      description: 'Special discount for premium members',
      type: 'percentage',
      value: 30,
      code: 'PREMIUM30',
      minAmount: 10000,
      maxDiscount: 15000,
      startDate: '2025-08-01',
      endDate: '2025-12-31',
      status: 'active',
      category: 'All Categories',
      usageLimit: 50,
      usedCount: 12,
      totalSavings: 89000,
      applicableUsers: 'premium',
      featured: true,
      priority: 'high'
    },
    {
      id: 'OFF-006',
      title: 'Flash Sale Friday',
      description: '24-hour flash sale on selected pets',
      type: 'fixed',
      value: 2500,
      code: 'FLASH2500',
      minAmount: 8000,
      maxDiscount: 2500,
      startDate: '2025-08-16',
      endDate: '2025-08-16',
      status: 'paused',
      category: 'All Categories',
      usageLimit: 150,
      usedCount: 67,
      totalSavings: 167500,
      applicableUsers: 'all',
      featured: false,
      priority: 'medium'
    }
  ];

  // Filter offers based on search and filters
  const filteredOffers = offers.filter(offer => {
    const matchesSearch = offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         offer.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         offer.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || offer.status === filterStatus;
    const matchesType = filterType === 'all' || offer.type === filterType;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  // Calculate offer statistics
  const offerStats = {
    total: offers.length,
    active: offers.filter(o => o.status === 'active').length,
    scheduled: offers.filter(o => o.status === 'scheduled').length,
    expired: offers.filter(o => o.status === 'expired').length,
    paused: offers.filter(o => o.status === 'paused').length,
    totalSavings: offers.reduce((sum, offer) => sum + offer.totalSavings, 0),
    totalUsage: offers.reduce((sum, offer) => sum + offer.usedCount, 0),
    averageDiscount: offers.reduce((sum, offer) => sum + offer.value, 0) / offers.length
  };

  const getStatusBadge = (status) => {
    const badges = {
      active: 'bg-green-100 text-green-800',
      scheduled: 'bg-blue-100 text-blue-800',
      expired: 'bg-gray-100 text-gray-800',
      paused: 'bg-yellow-100 text-yellow-800'
    };
    return badges[status] || 'bg-gray-100 text-gray-800';
  };

  const getTypeIcon = (type) => {
    return type === 'percentage' ? Percent : DollarSign;
  };

  const getPriorityBadge = (priority) => {
    const badges = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800'
    };
    return badges[priority] || 'bg-gray-100 text-gray-800';
  };

  const handleSelectOffer = (offerId) => {
    setSelectedOffers(prev => 
      prev.includes(offerId) 
        ? prev.filter(id => id !== offerId)
        : [...prev, offerId]
    );
  };

  const handleSelectAll = () => {
    setSelectedOffers(
      selectedOffers.length === filteredOffers.length 
        ? [] 
        : filteredOffers.map(offer => offer.id)
    );
  };

  const formatCurrency = (amount) => {
    return `Rs.${amount.toLocaleString()}`;
  };

  const CreateOfferModal = () => {
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      type: 'percentage',
      value: '',
      code: '',
      minAmount: '',
      maxDiscount: '',
      startDate: '',
      endDate: '',
      category: 'All Categories',
      usageLimit: '',
      applicableUsers: 'all',
      priority: 'medium'
    });

    const generateCode = () => {
      const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      setFormData(prev => ({ ...prev, code: randomCode }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log('Creating offer:', formData);
      setShowCreateModal(false);
      setFormData({
        title: '', description: '', type: 'percentage', value: '', code: '',
        minAmount: '', maxDiscount: '', startDate: '', endDate: '',
        category: 'All Categories', usageLimit: '', applicableUsers: 'all', priority: 'medium'
      });
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-4xl mx-4 max-h-screen overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Create New Offer</h3>
            <button onClick={() => setShowCreateModal(false)} className="text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Offer Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter offer title"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Offer Code</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={formData.code}
                    onChange={(e) => setFormData({...formData, code: e.target.value.toUpperCase()})}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="OFFER_CODE"
                    required
                  />
                  <button
                    type="button"
                    onClick={generateCode}
                    className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Generate
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="3"
                placeholder="Enter offer description"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Discount Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="percentage">Percentage (%)</option>
                  <option value="fixed">Fixed Amount (Rs.)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Discount Value {formData.type === 'percentage' ? '(%)' : '(Rs.)'}
                </label>
                <input
                  type="number"
                  value={formData.value}
                  onChange={(e) => setFormData({...formData, value: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder={formData.type === 'percentage' ? 'e.g., 20' : 'e.g., 1000'}
                  min="1"
                  max={formData.type === 'percentage' ? 100 : undefined}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Max Discount (Rs.)</label>
                <input
                  type="number"
                  value={formData.maxDiscount}
                  onChange={(e) => setFormData({...formData, maxDiscount: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="e.g., 5000"
                  min="1"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Amount (Rs.)</label>
                <input
                  type="number"
                  value={formData.minAmount}
                  onChange={(e) => setFormData({...formData, minAmount: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="e.g., 1000"
                  min="1"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Usage Limit</label>
                <input
                  type="number"
                  value={formData.usageLimit}
                  onChange={(e) => setFormData({...formData, usageLimit: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="e.g., 100"
                  min="1"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                <select
                  value={formData.priority}
                  onChange={(e) => setFormData({...formData, priority: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input
                  type="datetime-local"
                  value={formData.startDate}
                  onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                <input
                  type="datetime-local"
                  value={formData.endDate}
                  onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="All Categories">All Categories</option>
                  <option value="Dogs">Dogs</option>
                  <option value="Cats">Cats</option>
                  <option value="Birds">Birds</option>
                  <option value="Fish">Fish</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Applicable Users</label>
                <select
                  value={formData.applicableUsers}
                  onChange={(e) => setFormData({...formData, applicableUsers: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Users</option>
                  <option value="new">New Users Only</option>
                  <option value="premium">Premium Members</option>
                  <option value="returning">Returning Customers</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center justify-end space-x-3 pt-6">
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center"
              >
                <Save size={16} className="mr-2" />
                Create Offer
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
          <h1 className="text-2xl font-bold text-gray-900">Offers Management</h1>
          <p className="text-gray-600">Create and manage promotional offers and discounts</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <BarChart3 size={16} className="mr-2" />
            Analytics
          </button>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
          >
            <Plus size={16} className="mr-2" />
            Create Offer
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Offers</p>
              <p className="text-3xl font-bold text-gray-900">{offerStats.total}</p>
              <p className="text-xs text-gray-500 mt-1">{offerStats.active} active</p>
            </div>
            <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
              <Tag size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Savings</p>
              <p className="text-3xl font-bold text-green-600">{formatCurrency(offerStats.totalSavings)}</p>
              <p className="text-xs text-gray-500 mt-1">Customer savings</p>
            </div>
            <div className="bg-green-100 text-green-600 p-3 rounded-full">
              <DollarSign size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Usage</p>
              <p className="text-3xl font-bold text-blue-600">{offerStats.totalUsage}</p>
              <p className="text-xs text-gray-500 mt-1">Times used</p>
            </div>
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
              <Users size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Discount</p>
              <p className="text-3xl font-bold text-orange-600">{Math.round(offerStats.averageDiscount)}%</p>
              <p className="text-xs text-gray-500 mt-1">Average value</p>
            </div>
            <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
              <Percent size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Offer Status Overview */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Offer Status Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <CheckCircle className="mx-auto mb-2 text-green-600" size={24} />
            <p className="text-2xl font-bold text-green-600">{offerStats.active}</p>
            <p className="text-sm text-gray-600">Active</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <Clock className="mx-auto mb-2 text-blue-600" size={24} />
            <p className="text-2xl font-bold text-blue-600">{offerStats.scheduled}</p>
            <p className="text-sm text-gray-600">Scheduled</p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <AlertTriangle className="mx-auto mb-2 text-yellow-600" size={24} />
            <p className="text-2xl font-bold text-yellow-600">{offerStats.paused}</p>
            <p className="text-sm text-gray-600">Paused</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <XCircle className="mx-auto mb-2 text-gray-600" size={24} />
            <p className="text-2xl font-bold text-gray-600">{offerStats.expired}</p>
            <p className="text-sm text-gray-600">Expired</p>
          </div>
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
                placeholder="Search offers..."
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
          
          {selectedOffers.length > 0 && (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">{selectedOffers.length} selected</span>
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                Activate
              </button>
              <button className="bg-yellow-600 text-white px-3 py-1 rounded text-sm hover:bg-yellow-700">
                Pause
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="paused">Paused</option>
                  <option value="expired">Expired</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Types</option>
                  <option value="percentage">Percentage</option>
                  <option value="fixed">Fixed Amount</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setFilterStatus('all');
                    setFilterType('all');
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

      {/* Offers Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedOffers.length === filteredOffers.length && filteredOffers.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Offer Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Validity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOffers.map((offer) => {
                const TypeIcon = getTypeIcon(offer.type);
                return (
                  <tr key={offer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedOffers.includes(offer.id)}
                        onChange={() => handleSelectOffer(offer.id)}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                            <Tag className="text-purple-600" size={20} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">{offer.title}</div>
                            {offer.featured && (
                              <Star className="ml-2 text-yellow-500" size={16} />
                            )}
                          </div>
                          <div className="text-sm text-gray-500">{offer.code}</div>
                          <div className="text-xs text-gray-400 mt-1">{offer.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <TypeIcon className="text-gray-400 mr-2" size={16} />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {offer.type === 'percentage' ? `${offer.value}%` : formatCurrency(offer.value)}
                          </div>
                          <div className="text-xs text-gray-500">
                            Max: {formatCurrency(offer.maxDiscount)}
                          </div>
                          <div className="text-xs text-gray-500">
                            Min: {formatCurrency(offer.minAmount)}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{offer.usedCount} / {offer.usageLimit}</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: `${(offer.usedCount / offer.usageLimit) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {Math.round((offer.usedCount / offer.usageLimit) * 100)}% used
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 flex items-center">
                        <Calendar size={14} className="mr-1 text-gray-400" />
                        {offer.startDate}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Clock size={14} className="mr-1 text-gray-400" />
                        {offer.endDate}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-green-600">{formatCurrency(offer.totalSavings)}</div>
                      <div className="text-xs text-gray-500">Total savings</div>
                      <div className="flex items-center mt-1">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityBadge(offer.priority)}`}>
                          {offer.priority}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(offer.status)}`}>
                        {offer.status.charAt(0).toUpperCase() + offer.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-700" title="View Details">
                          <Eye size={16} />
                        </button>
                        <button className="text-green-600 hover:text-green-700" title="Edit Offer">
                          <Edit3 size={16} />
                        </button>
                        <button className="text-purple-600 hover:text-purple-700" title="Copy Code">
                          <Copy size={16} />
                        </button>
                        <button className="text-orange-600 hover:text-orange-700" title="Share Offer">
                          <Share size={16} />
                        </button>
                        <button className="text-gray-600 hover:text-gray-700" title="More Options">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {filteredOffers.length === 0 && (
          <div className="text-center py-12">
            <Tag className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No offers found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* Create Offer Modal */}
      {showCreateModal && <CreateOfferModal />}
    </div>
  );
};

export default AdminOffers;
