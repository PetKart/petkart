import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Package, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Search, 
  Filter, 
  Eye, 
  Edit3, 
  Download, 
  TrendingUp,
  DollarSign,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Star,
  Truck,
  CreditCard,
  MoreVertical,
  RefreshCw,
  FileText
} from 'lucide-react';

const AdminOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPayment, setFilterPayment] = useState('all');
  const [dateRange, setDateRange] = useState('all');
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Mock order data - replace with actual API data
  const orders = [
    {
      id: 'ORD-1001',
      petName: 'Golden Retriever Puppy',
      petImage: '/api/placeholder/60/60',
      petType: 'Dog',
      petBreed: 'Golden Retriever',
      buyer: {
        name: 'John Smith',
        email: 'john.smith@email.com',
        phone: '+94 77 123 4567',
        location: 'Colombo, Sri Lanka'
      },
      seller: {
        name: 'Happy Pets Store',
        email: 'contact@happypets.com',
        phone: '+94 76 987 6543',
        type: 'petshop'
      },
      amount: 25000,
      commission: 2500,
      paymentMethod: 'card',
      paymentStatus: 'completed',
      orderStatus: 'delivered',
      orderDate: '2025-08-05',
      deliveryDate: '2025-08-07',
      rating: 5,
      notes: 'Customer very satisfied with the puppy'
    },
    {
      id: 'ORD-1002',
      petName: 'Persian Cat',
      petImage: '/api/placeholder/60/60',
      petType: 'Cat',
      petBreed: 'Persian',
      buyer: {
        name: 'Emily Davis',
        email: 'emily.davis@email.com',
        phone: '+94 76 987 6543',
        location: 'Kandy, Sri Lanka'
      },
      seller: {
        name: 'Cat Paradise',
        email: 'info@catparadise.com',
        phone: '+94 75 456 7890',
        type: 'seller'
      },
      amount: 15000,
      commission: 1500,
      paymentMethod: 'bank_transfer',
      paymentStatus: 'pending',
      orderStatus: 'processing',
      orderDate: '2025-08-08',
      deliveryDate: null,
      rating: null,
      notes: 'Waiting for payment confirmation'
    },
    {
      id: 'ORD-1003',
      petName: 'German Shepherd',
      petImage: '/api/placeholder/60/60',
      petType: 'Dog',
      petBreed: 'German Shepherd',
      buyer: {
        name: 'Michael Brown',
        email: 'michael.brown@email.com',
        phone: '+94 75 456 7890',
        location: 'Galle, Sri Lanka'
      },
      seller: {
        name: 'Dog World',
        email: 'support@dogworld.com',
        phone: '+94 78 234 5678',
        type: 'petshop'
      },
      amount: 35000,
      commission: 3500,
      paymentMethod: 'card',
      paymentStatus: 'refunded',
      orderStatus: 'cancelled',
      orderDate: '2025-08-06',
      deliveryDate: null,
      rating: 1,
      notes: 'Pet had health issues, refund processed'
    },
    {
      id: 'ORD-1004',
      petName: 'Goldfish',
      petImage: '/api/placeholder/60/60',
      petType: 'Fish',
      petBreed: 'Goldfish',
      buyer: {
        name: 'Sarah Wilson',
        email: 'sarah.wilson@email.com',
        phone: '+94 78 234 5678',
        location: 'Negombo, Sri Lanka'
      },
      seller: {
        name: 'Aqua Life',
        email: 'hello@aqualife.com',
        phone: '+94 77 345 6789',
        type: 'seller'
      },
      amount: 500,
      commission: 50,
      paymentMethod: 'cash_on_delivery',
      paymentStatus: 'completed',
      orderStatus: 'delivered',
      orderDate: '2025-08-09',
      deliveryDate: '2025-08-09',
      rating: 4,
      notes: 'Quick delivery, healthy fish'
    },
    {
      id: 'ORD-1005',
      petName: 'Siberian Husky',
      petImage: '/api/placeholder/60/60',
      petType: 'Dog',
      petBreed: 'Siberian Husky',
      buyer: {
        name: 'David Kumar',
        email: 'david.kumar@email.com',
        phone: '+94 77 345 6789',
        location: 'Matara, Sri Lanka'
      },
      seller: {
        name: 'Arctic Pets',
        email: 'contact@arcticpets.com',
        phone: '+94 76 567 8901',
        type: 'seller'
      },
      amount: 45000,
      commission: 4500,
      paymentMethod: 'card',
      paymentStatus: 'completed',
      orderStatus: 'shipped',
      orderDate: '2025-08-07',
      deliveryDate: '2025-08-10',
      rating: null,
      notes: 'In transit to buyer'
    },
    {
      id: 'ORD-1006',
      petName: 'Maine Coon Cat',
      petImage: '/api/placeholder/60/60',
      petType: 'Cat',
      petBreed: 'Maine Coon',
      buyer: {
        name: 'Lisa Perera',
        email: 'lisa.perera@email.com',
        phone: '+94 76 567 8901',
        location: 'Kurunegala, Sri Lanka'
      },
      seller: {
        name: 'Feline Friends',
        email: 'info@felinefriends.com',
        phone: '+94 75 678 9012',
        type: 'petshop'
      },
      amount: 28000,
      commission: 2800,
      paymentMethod: 'card',
      paymentStatus: 'completed',
      orderStatus: 'confirmed',
      orderDate: '2025-08-09',
      deliveryDate: '2025-08-12',
      rating: null,
      notes: 'Order confirmed, preparing for shipment'
    }
  ];

  // Filter orders based on search and filters
  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.buyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.seller.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || order.orderStatus === filterStatus;
    const matchesPayment = filterPayment === 'all' || order.paymentStatus === filterPayment;
    
    return matchesSearch && matchesStatus && matchesPayment;
  });

  // Calculate order statistics
  const orderStats = {
    total: orders.length,
    pending: orders.filter(o => o.orderStatus === 'pending').length,
    processing: orders.filter(o => o.orderStatus === 'processing').length,
    shipped: orders.filter(o => o.orderStatus === 'shipped').length,
    delivered: orders.filter(o => o.orderStatus === 'delivered').length,
    cancelled: orders.filter(o => o.orderStatus === 'cancelled').length,
    totalRevenue: orders.reduce((sum, order) => sum + order.amount, 0),
    totalCommission: orders.reduce((sum, order) => sum + order.commission, 0),
    averageOrderValue: orders.length > 0 ? orders.reduce((sum, order) => sum + order.amount, 0) / orders.length : 0
  };

  const getStatusBadge = (status) => {
    const badges = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-blue-100 text-blue-800',
      processing: 'bg-purple-100 text-purple-800',
      shipped: 'bg-indigo-100 text-indigo-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return badges[status] || 'bg-gray-100 text-gray-800';
  };

  const getPaymentBadge = (status) => {
    const badges = {
      pending: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-green-100 text-green-800',
      failed: 'bg-red-100 text-red-800',
      refunded: 'bg-orange-100 text-orange-800'
    };
    return badges[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return Clock;
      case 'confirmed': return CheckCircle;
      case 'processing': return Package;
      case 'shipped': return Truck;
      case 'delivered': return CheckCircle;
      case 'cancelled': return XCircle;
      default: return Package;
    }
  };

  const handleSelectOrder = (orderId) => {
    setSelectedOrders(prev => 
      prev.includes(orderId) 
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const handleSelectAll = () => {
    setSelectedOrders(
      selectedOrders.length === filteredOrders.length 
        ? [] 
        : filteredOrders.map(order => order.id)
    );
  };

  const formatCurrency = (amount) => {
    return `Rs.${amount.toLocaleString()}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
          <p className="text-gray-600">Monitor and manage all platform orders</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Download size={16} className="mr-2" />
            Export Orders
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
            <RefreshCw size={16} className="mr-2" />
            Refresh
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-3xl font-bold text-gray-900">{orderStats.total}</p>
              <p className="text-xs text-gray-500 mt-1">All time</p>
            </div>
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
              <ShoppingCart size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-3xl font-bold text-green-600">{formatCurrency(orderStats.totalRevenue)}</p>
              <p className="text-xs text-gray-500 mt-1">Gross sales</p>
            </div>
            <div className="bg-green-100 text-green-600 p-3 rounded-full">
              <DollarSign size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Commission Earned</p>
              <p className="text-3xl font-bold text-purple-600">{formatCurrency(orderStats.totalCommission)}</p>
              <p className="text-xs text-gray-500 mt-1">Platform earnings</p>
            </div>
            <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
              <TrendingUp size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
              <p className="text-3xl font-bold text-orange-600">{formatCurrency(Math.round(orderStats.averageOrderValue))}</p>
              <p className="text-xs text-gray-500 mt-1">Per order</p>
            </div>
            <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
              <Package size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Order Status Overview */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Status Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <Clock className="mx-auto mb-2 text-yellow-600" size={24} />
            <p className="text-2xl font-bold text-yellow-600">{orderStats.processing}</p>
            <p className="text-sm text-gray-600">Processing</p>
          </div>
          <div className="text-center p-4 bg-indigo-50 rounded-lg">
            <Truck className="mx-auto mb-2 text-indigo-600" size={24} />
            <p className="text-2xl font-bold text-indigo-600">{orderStats.shipped}</p>
            <p className="text-sm text-gray-600">Shipped</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <CheckCircle className="mx-auto mb-2 text-green-600" size={24} />
            <p className="text-2xl font-bold text-green-600">{orderStats.delivered}</p>
            <p className="text-sm text-gray-600">Delivered</p>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <XCircle className="mx-auto mb-2 text-red-600" size={24} />
            <p className="text-2xl font-bold text-red-600">{orderStats.cancelled}</p>
            <p className="text-sm text-gray-600">Cancelled</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <AlertTriangle className="mx-auto mb-2 text-blue-600" size={24} />
            <p className="text-2xl font-bold text-blue-600">3</p>
            <p className="text-sm text-gray-600">Disputes</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <RefreshCw className="mx-auto mb-2 text-purple-600" size={24} />
            <p className="text-2xl font-bold text-purple-600">2</p>
            <p className="text-sm text-gray-600">Returns</p>
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
                placeholder="Search orders..."
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
          
          {selectedOrders.length > 0 && (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">{selectedOrders.length} selected</span>
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                Update Status
              </button>
              <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                Export Selected
              </button>
            </div>
          )}
        </div>

        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Order Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Status</label>
                <select
                  value={filterPayment}
                  onChange={(e) => setFilterPayment(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Payments</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="failed">Failed</option>
                  <option value="refunded">Refunded</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="quarter">This Quarter</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setFilterStatus('all');
                    setFilterPayment('all');
                    setDateRange('all');
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

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedOrders.length === filteredOrders.length && filteredOrders.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => {
                const StatusIcon = getStatusIcon(order.orderStatus);
                return (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedOrders.includes(order.id)}
                        onChange={() => handleSelectOrder(order.id)}
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
                          <div className="text-sm font-medium text-gray-900">{order.petName}</div>
                          <div className="text-sm text-gray-500">{order.id}</div>
                          <div className="text-xs text-gray-400 flex items-center mt-1">
                            <Calendar size={12} className="mr-1" />
                            {order.orderDate}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{order.buyer.name}</div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Mail size={12} className="mr-1" />
                        {order.buyer.email}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <MapPin size={12} className="mr-1" />
                        {order.buyer.location}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{order.seller.name}</div>
                      <div className="text-sm text-gray-500">{order.seller.type}</div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Phone size={12} className="mr-1" />
                        {order.seller.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{formatCurrency(order.amount)}</div>
                      <div className="text-sm text-green-600">Commission: {formatCurrency(order.commission)}</div>
                      <div className="text-xs text-gray-500">{order.paymentMethod.replace('_', ' ')}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPaymentBadge(order.paymentStatus)}`}>
                        {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(order.orderStatus)}`}>
                        <StatusIcon size={12} className="mr-1" />
                        {order.orderStatus.charAt(0).toUpperCase() + order.orderStatus.slice(1)}
                      </span>
                      {order.rating && (
                        <div className="flex items-center mt-1">
                          <Star size={12} className="text-yellow-400 mr-1" />
                          <span className="text-xs text-gray-600">{order.rating}/5</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-700" title="View Details">
                          <Eye size={16} />
                        </button>
                        <button className="text-green-600 hover:text-green-700" title="Edit Order">
                          <Edit3 size={16} />
                        </button>
                        <button className="text-purple-600 hover:text-purple-700" title="Generate Invoice">
                          <FileText size={16} />
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
        
        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No orders found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredOrders.length > 0 && (
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
                Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredOrders.length}</span> of{' '}
                <span className="font-medium">{filteredOrders.length}</span> results
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
    </div>
  );
};

export default AdminOrders;
