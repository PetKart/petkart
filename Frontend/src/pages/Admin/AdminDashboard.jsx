
import React, { useState } from 'react';
import { useTheme } from '../../context/useTheme';
import { 
  Users, 
  Package, 
  DollarSign, 
  ShoppingCart, 
  Store, 
  TrendingUp, 
  AlertTriangle,
  Eye,
  Filter,
  Calendar,
  BarChart3,
  UserCheck,
  Ban,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react';

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = useState('30days');
  const { darkMode } = useTheme();

  // Add console log to check if component is rendering
  console.log('AdminDashboard component is rendering');

  // System-wide statistics
  const systemStats = [
    {
      title: 'Total Users',
      value: '2,547',
      change: '+15%',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      subtext: 'Active users'
    },
    {
      title: 'Total Orders',
      value: '1,234',
      change: '+23%',
      icon: ShoppingCart,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      subtext: 'This month'
    },
    {
      title: 'Platform Revenue',
      value: 'Rs.2,34,567',
      change: '+18%',
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      subtext: 'Total earnings'
    },
    {
      title: 'Active Pet Shops',
      value: '89',
      change: '+8%',
      icon: Store,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      subtext: 'Verified shops'
    },
    {
      title: 'Pets Listed',
      value: '3,456',
      change: '+12%',
      icon: Package,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      subtext: 'Active listings'
    },
    {
      title: 'Pending Approvals',
      value: '45',
      change: '-5%',
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      subtext: 'Needs attention'
    }
  ];

  // Recent orders for admin oversight
  const recentOrders = [
    {
      id: 'ORD-1001',
      petName: 'Golden Retriever Puppy',
      buyer: 'John Smith',
      seller: 'Happy Pets Store',
      amount: 'Rs.25,000',
      date: '2025-08-09',
      status: 'completed',
      commission: 'Rs.2,500'
    },
    {
      id: 'ORD-1002',
      petName: 'Persian Cat',
      buyer: 'Emily Davis',
      seller: 'Cat Paradise',
      amount: 'Rs.15,000',
      date: '2025-08-09',
      status: 'pending',
      commission: 'Rs.1,500'
    },
    {
      id: 'ORD-1003',
      petName: 'German Shepherd',
      buyer: 'Michael Brown',
      seller: 'Dog World',
      amount: 'Rs.35,000',
      date: '2025-08-08',
      status: 'dispute',
      commission: 'Rs.3,500'
    },
    {
      id: 'ORD-1004',
      petName: 'Goldfish',
      buyer: 'Sarah Wilson',
      seller: 'Aqua Life',
      amount: 'Rs.500',
      date: '2025-08-08',
      status: 'completed',
      commission: 'Rs.50'
    }
  ];

  // User management data
  const userTypes = [
    { type: 'Buyers', count: 1547, percentage: 61, color: 'bg-blue-500' },
    { type: 'Sellers', count: 689, percentage: 27, color: 'bg-green-500' },
    { type: 'Pet Shops', count: 289, percentage: 11, color: 'bg-purple-500' },
    { type: 'Admins', count: 22, percentage: 1, color: 'bg-orange-500' }
  ];

  // Pet categories data
  const petCategories = [
    { category: 'Dogs', count: 1456, revenue: 'Rs.89,000', color: 'bg-amber-500' },
    { category: 'Cats', count: 987, revenue: 'Rs.67,000', color: 'bg-emerald-500' },
    { category: 'Birds', count: 543, revenue: 'Rs.34,000', color: 'bg-cyan-500' },
    { category: 'Fish', count: 321, revenue: 'Rs.12,000', color: 'bg-rose-500' },
    { category: 'Others', count: 149, revenue: 'Rs.8,000', color: 'bg-violet-500' }
  ];

  // Pending approvals
  const pendingApprovals = [
    { id: 'PET-001', name: 'Siberian Husky', seller: 'Arctic Pets', type: 'Pet Listing', priority: 'high' },
    { id: 'SHOP-002', name: 'Exotic Birds Center', seller: 'Bird Specialists', type: 'Shop Verification', priority: 'medium' },
    { id: 'PET-003', name: 'Maine Coon Cat', seller: 'Feline Friends', type: 'Pet Listing', priority: 'low' },
    { id: 'USER-004', name: 'Pet Lover 123', seller: 'Individual', type: 'Seller Verification', priority: 'high' }
  ];

  const getStatusBadge = (status) => {
    const badges = {
      completed: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      dispute: 'bg-red-100 text-red-800',
      processing: 'bg-blue-100 text-blue-800'
    };
    return badges[status] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityBadge = (priority) => {
    const badges = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800'
    };
    return badges[priority] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>System Administration</h1>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Monitor and manage the entire PetKart platform</p>
        </div>
        <div className="flex items-center space-x-4">
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value)}
            className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              darkMode 
                ? 'bg-gray-800 border-gray-600 text-white' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="90days">Last 90 days</option>
            <option value="1year">Last year</option>
          </select>
        </div>
      </div>

      {/* System Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {systemStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={`rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.bgColor} ${stat.color} p-3 rounded-full`}>
                  <Icon size={20} />
                </div>
                <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
              </div>
              <div>
                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stat.value}</p>
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.title}</p>
                <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{stat.subtext}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Management */}
        <div className={`lg:col-span-2 rounded-lg shadow-md p-6 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Recent Orders Management</h2>
            <div className="flex items-center space-x-2">
              <button className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center">
                <Filter size={16} className="mr-1" />
                Filter
              </button>
              <button className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center">
                <Eye size={16} className="mr-1" />
                View All
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Order ID</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Pet</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Buyer</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Seller</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Amount</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Commission</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Status</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className={`border-b hover:bg-opacity-50 ${
                    darkMode 
                      ? 'border-gray-600 hover:bg-gray-700' 
                      : 'border-gray-100 hover:bg-gray-50'
                  }`}>
                    <td className={`py-4 px-4 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{order.id}</td>
                    <td className={`py-4 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{order.petName}</td>
                    <td className={`py-4 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{order.buyer}</td>
                    <td className={`py-4 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{order.seller}</td>
                    <td className={`py-4 px-4 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{order.amount}</td>
                    <td className="py-4 px-4 font-medium text-green-600">{order.commission}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-700" title="View Details">
                          <Eye size={16} />
                        </button>
                        {order.status === 'dispute' && (
                          <button className="text-orange-600 hover:text-orange-700" title="Resolve Dispute">
                            <AlertTriangle size={16} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pending Approvals */}
        <div className={`rounded-lg shadow-md p-6 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Pending Approvals</h2>
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
              {pendingApprovals.length} pending
            </span>
          </div>
          <div className="space-y-4">
            {pendingApprovals.map((approval, index) => (
              <div key={index} className={`border rounded-lg p-4 ${
                darkMode 
                  ? 'border-gray-600 bg-gray-700' 
                  : 'border-gray-200 bg-white'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{approval.name}</span>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityBadge(approval.priority)}`}>
                    {approval.priority}
                  </span>
                </div>
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{approval.seller}</p>
                <p className={`text-xs mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{approval.type}</p>
                <div className="flex items-center space-x-2">
                  <button className="flex-1 bg-green-600 text-white text-xs py-2 px-3 rounded hover:bg-green-700 transition-colors">
                    <CheckCircle size={12} className="inline mr-1" />
                    Approve
                  </button>
                  <button className="flex-1 bg-red-600 text-white text-xs py-2 px-3 rounded hover:bg-red-700 transition-colors">
                    <XCircle size={12} className="inline mr-1" />
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Distribution */}
        <div className={`rounded-lg shadow-md p-6 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>User Distribution</h2>
          <div className="space-y-4">
            {userTypes.map((user, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{user.type}</span>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{user.count} users</span>
                </div>
                <div className={`w-full rounded-full h-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div
                    className={`${user.color} h-3 rounded-full transition-all duration-300`}
                    style={{ width: `${user.percentage}%` }}
                  ></div>
                </div>
                <div className="text-right mt-1">
                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{user.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
          <div className={`mt-6 pt-4 border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
            <div className="flex items-center justify-between">
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Total Platform Users</span>
              <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {userTypes.reduce((sum, user) => sum + user.count, 0).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Pet Categories Performance */}
        <div className={`rounded-lg shadow-md p-6 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Pet Categories Performance</h2>
          <div className="space-y-4">
            {petCategories.map((category, index) => (
              <div key={index} className={`flex items-center justify-between p-4 border rounded-lg ${
                darkMode 
                  ? 'border-gray-600 bg-gray-700' 
                  : 'border-gray-200 bg-white'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                  <div>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{category.category}</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{category.count} listings</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{category.revenue}</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Revenue</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className={`rounded-lg shadow-md p-6 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <h2 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quick Administrative Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className={`flex items-center justify-center p-4 border-2 border-dashed rounded-lg hover:border-purple-500 transition-colors group ${
            darkMode 
              ? 'border-gray-600 hover:bg-gray-700' 
              : 'border-gray-300 hover:bg-purple-50'
          }`}>
            <div className="text-center">
              <UserCheck className="mx-auto mb-2 text-gray-400 group-hover:text-purple-500" size={24} />
              <span className={`text-sm font-medium group-hover:text-purple-700 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Verify Users</span>
            </div>
          </button>
          <button className={`flex items-center justify-center p-4 border-2 border-dashed rounded-lg hover:border-purple-500 transition-colors group ${
            darkMode 
              ? 'border-gray-600 hover:bg-gray-700' 
              : 'border-gray-300 hover:bg-purple-50'
          }`}>
            <div className="text-center">
              <BarChart3 className="mx-auto mb-2 text-gray-400 group-hover:text-purple-500" size={24} />
              <span className={`text-sm font-medium group-hover:text-purple-700 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Generate Reports</span>
            </div>
          </button>
          <button className={`flex items-center justify-center p-4 border-2 border-dashed rounded-lg hover:border-purple-500 transition-colors group ${
            darkMode 
              ? 'border-gray-600 hover:bg-gray-700' 
              : 'border-gray-300 hover:bg-purple-50'
          }`}>
            <div className="text-center">
              <Ban className="mx-auto mb-2 text-gray-400 group-hover:text-purple-500" size={24} />
              <span className={`text-sm font-medium group-hover:text-purple-700 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Manage Suspensions</span>
            </div>
          </button>
          <button className={`flex items-center justify-center p-4 border-2 border-dashed rounded-lg hover:border-purple-500 transition-colors group ${
            darkMode 
              ? 'border-gray-600 hover:bg-gray-700' 
              : 'border-gray-300 hover:bg-purple-50'
          }`}>
            <div className="text-center">
              <AlertTriangle className="mx-auto mb-2 text-gray-400 group-hover:text-purple-500" size={24} />
              <span className={`text-sm font-medium group-hover:text-purple-700 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Handle Disputes</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
