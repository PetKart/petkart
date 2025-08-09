import React, { useState } from 'react';
import { useTheme } from '../../context/useTheme';
import { getThemeClasses, getCardClasses, getInputClasses } from '../../utils/themeUtils';
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter, 
  MoreVertical, 
  Eye, 
  Edit3, 
  Ban, 
  CheckCircle, 
  XCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Download,
  Upload,
  UserCheck,
  AlertTriangle,
  Shield,
  Store,
  ShoppingBag,
  Star
} from 'lucide-react';

const AdminUser = () => {
  const { darkMode } = useTheme();
  const theme = getThemeClasses(darkMode);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Mock user data - replace with actual API data
  const users = [
    {
      id: 'USR-001',
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+94 77 123 4567',
      role: 'buyer',
      status: 'active',
      joinDate: '2024-01-15',
      location: 'Colombo, Sri Lanka',
      orders: 12,
      spent: 'Rs.45,000',
      rating: 4.8,
      verified: true,
      lastActive: '2 hours ago'
    },
    {
      id: 'USR-002',
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      phone: '+94 76 987 6543',
      role: 'seller',
      status: 'active',
      joinDate: '2023-12-08',
      location: 'Kandy, Sri Lanka',
      orders: 89,
      earned: 'Rs.2,34,000',
      rating: 4.9,
      verified: true,
      lastActive: '1 day ago'
    },
    {
      id: 'USR-003',
      name: 'Michael Brown',
      email: 'michael.brown@email.com',
      phone: '+94 75 456 7890',
      role: 'petshop',
      status: 'pending',
      joinDate: '2025-08-05',
      location: 'Galle, Sri Lanka',
      orders: 0,
      earned: 'Rs.0',
      rating: 0,
      verified: false,
      lastActive: '5 hours ago'
    },
    {
      id: 'USR-004',
      name: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      phone: '+94 78 234 5678',
      role: 'buyer',
      status: 'suspended',
      joinDate: '2024-03-22',
      location: 'Negombo, Sri Lanka',
      orders: 3,
      spent: 'Rs.8,500',
      rating: 3.2,
      verified: true,
      lastActive: '1 week ago'
    },
    {
      id: 'USR-005',
      name: 'David Kumar',
      email: 'david.kumar@email.com',
      phone: '+94 77 345 6789',
      role: 'seller',
      status: 'active',
      joinDate: '2024-02-10',
      location: 'Matara, Sri Lanka',
      orders: 45,
      earned: 'Rs.1,12,000',
      rating: 4.6,
      verified: true,
      lastActive: 'Online now'
    },
    {
      id: 'USR-006',
      name: 'Lisa Perera',
      email: 'lisa.perera@email.com',
      phone: '+94 76 567 8901',
      role: 'petshop',
      status: 'active',
      joinDate: '2023-11-18',
      location: 'Kurunegala, Sri Lanka',
      orders: 156,
      earned: 'Rs.4,67,000',
      rating: 4.7,
      verified: true,
      lastActive: '30 minutes ago'
    }
  ];

  // Filter users based on search and filters
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  // User statistics
  const userStats = {
    total: users.length,
    active: users.filter(u => u.status === 'active').length,
    pending: users.filter(u => u.status === 'pending').length,
    suspended: users.filter(u => u.status === 'suspended').length,
    buyers: users.filter(u => u.role === 'buyer').length,
    sellers: users.filter(u => u.role === 'seller').length,
    petshops: users.filter(u => u.role === 'petshop').length
  };

  const getRoleIcon = (role) => {
    switch(role) {
      case 'buyer': return ShoppingBag;
      case 'seller': return Users;
      case 'petshop': return Store;
      default: return Users;
    }
  };

  const getRoleBadge = (role) => {
    const badges = {
      buyer: 'bg-blue-100 text-blue-800',
      seller: 'bg-green-100 text-green-800',
      petshop: 'bg-purple-100 text-purple-800',
      admin: 'bg-orange-100 text-orange-800'
    };
    return badges[role] || 'bg-gray-100 text-gray-800';
  };

  const getStatusBadge = (status) => {
    const badges = {
      active: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      suspended: 'bg-red-100 text-red-800',
      inactive: 'bg-gray-100 text-gray-800'
    };
    return badges[status] || 'bg-gray-100 text-gray-800';
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSelectAll = () => {
    setSelectedUsers(
      selectedUsers.length === filteredUsers.length 
        ? [] 
        : filteredUsers.map(user => user.id)
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>User Management</h1>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Manage all platform users, roles, and permissions</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Download size={16} className="mr-2" />
            Export
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
            <UserPlus size={16} className="mr-2" />
            Add User
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className={getCardClasses(darkMode)}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${theme.secondaryText}`}>Total Users</p>
              <p className={`text-3xl font-bold ${theme.primaryText}`}>{userStats.total}</p>
            </div>
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
              <Users size={24} />
            </div>
          </div>
        </div>
        <div className={getCardClasses(darkMode)}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${theme.secondaryText}`}>Active Users</p>
              <p className="text-3xl font-bold text-green-600">{userStats.active}</p>
            </div>
            <div className="bg-green-100 text-green-600 p-3 rounded-full">
              <CheckCircle size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-3xl font-bold text-yellow-600">{userStats.pending}</p>
            </div>
            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
              <AlertTriangle size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Suspended</p>
              <p className="text-3xl font-bold text-red-600">{userStats.suspended}</p>
            </div>
            <div className="bg-red-100 text-red-600 p-3 rounded-full">
              <Ban size={24} />
            </div>
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
                placeholder="Search users..."
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
          
          {selectedUsers.length > 0 && (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">{selectedUsers.length} selected</span>
              <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                Approve
              </button>
              <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                Suspend
              </button>
            </div>
          )}
        </div>

        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Roles</option>
                  <option value="buyer">Buyers</option>
                  <option value="seller">Sellers</option>
                  <option value="petshop">Pet Shops</option>
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
                  <option value="pending">Pending</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setFilterRole('all');
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

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => {
                const RoleIcon = getRoleIcon(user.role);
                return (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleSelectUser(user.id)}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-700">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            {user.verified && (
                              <CheckCircle className="ml-2 text-green-500" size={16} />
                            )}
                          </div>
                          <div className="text-sm text-gray-500">{user.id}</div>
                          <div className="text-xs text-gray-400 flex items-center mt-1">
                            <MapPin size={12} className="mr-1" />
                            {user.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 flex items-center">
                        <Mail size={14} className="mr-2 text-gray-400" />
                        {user.email}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <Phone size={14} className="mr-2 text-gray-400" />
                        {user.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleBadge(user.role)}`}>
                        <RoleIcon size={12} className="mr-1" />
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(user.status)}`}>
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 flex items-center">
                        <Calendar size={14} className="mr-2 text-gray-400" />
                        {user.joinDate}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Last: {user.lastActive}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{user.orders} orders</div>
                      <div className="text-sm text-gray-500">
                        {user.spent || user.earned}
                      </div>
                      {user.rating > 0 && (
                        <div className="flex items-center mt-1">
                          <Star size={12} className="text-yellow-400 mr-1" />
                          <span className="text-xs text-gray-600">{user.rating}</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-700" title="View Details">
                          <Eye size={16} />
                        </button>
                        <button className="text-green-600 hover:text-green-700" title="Edit User">
                          <Edit3 size={16} />
                        </button>
                        {user.status === 'active' ? (
                          <button className="text-red-600 hover:text-red-700" title="Suspend User">
                            <Ban size={16} />
                          </button>
                        ) : (
                          <button className="text-green-600 hover:text-green-700" title="Activate User">
                            <CheckCircle size={16} />
                          </button>
                        )}
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
        
        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <Users className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No users found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredUsers.length > 0 && (
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
                Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredUsers.length}</span> of{' '}
                <span className="font-medium">{filteredUsers.length}</span> results
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

export default AdminUser;
