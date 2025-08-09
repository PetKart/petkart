import React, { useState } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  Download,
  Filter,
  Eye,
  CreditCard,
  Wallet,
  PieChart,
  BarChart3,
  Users,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  FileText,
  Bell,
  AlertCircle,
  CheckCircle,
  Clock,
  Building
} from 'lucide-react';

const AdminRevenue = () => {
  const [timeRange, setTimeRange] = useState('30days');
  const [revenueType, setRevenueType] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Mock revenue data - replace with actual API data
  const revenueStats = {
    totalRevenue: 5782000,
    totalCommission: 578200,
    monthlyGrowth: 18.5,
    dailyAverage: 15674,
    pendingPayments: 45600,
    completedTransactions: 1247,
    refundedAmount: 12400,
    chargebacks: 2100
  };

  const monthlyRevenue = [
    { month: 'Jan 2025', revenue: 456000, commission: 45600, orders: 152 },
    { month: 'Feb 2025', revenue: 523000, commission: 52300, orders: 189 },
    { month: 'Mar 2025', revenue: 601000, commission: 60100, orders: 215 },
    { month: 'Apr 2025', revenue: 678000, commission: 67800, orders: 243 },
    { month: 'May 2025', revenue: 734000, commission: 73400, orders: 267 },
    { month: 'Jun 2025', revenue: 812000, commission: 81200, orders: 298 },
    { month: 'Jul 2025', revenue: 895000, commission: 89500, orders: 324 },
    { month: 'Aug 2025', revenue: 1083000, commission: 108300, orders: 387 }
  ];

  const revenueByCategory = [
    { category: 'Dogs', revenue: 2580000, commission: 258000, percentage: 44.6, growth: 15.2 },
    { category: 'Cats', revenue: 1890000, commission: 189000, percentage: 32.7, growth: 12.8 },
    { category: 'Birds', revenue: 890000, commission: 89000, percentage: 15.4, growth: 22.1 },
    { category: 'Fish', revenue: 245000, commission: 24500, percentage: 4.2, growth: 8.7 },
    { category: 'Others', revenue: 177000, commission: 17700, percentage: 3.1, growth: 5.3 }
  ];

  const recentTransactions = [
    {
      id: 'TXN-001',
      type: 'commission',
      amount: 3500,
      seller: 'Happy Pets Store',
      order: 'ORD-1001',
      date: '2025-08-09',
      status: 'completed',
      paymentMethod: 'bank_transfer'
    },
    {
      id: 'TXN-002',
      type: 'commission',
      amount: 1500,
      seller: 'Cat Paradise',
      order: 'ORD-1002',
      date: '2025-08-09',
      status: 'pending',
      paymentMethod: 'card'
    },
    {
      id: 'TXN-003',
      type: 'refund',
      amount: -3500,
      seller: 'Dog World',
      order: 'ORD-1003',
      date: '2025-08-08',
      status: 'completed',
      paymentMethod: 'card'
    },
    {
      id: 'TXN-004',
      type: 'commission',
      amount: 50,
      seller: 'Aqua Life',
      order: 'ORD-1004',
      date: '2025-08-08',
      status: 'completed',
      paymentMethod: 'cash'
    },
    {
      id: 'TXN-005',
      type: 'commission',
      amount: 4500,
      seller: 'Arctic Pets',
      order: 'ORD-1005',
      date: '2025-08-07',
      status: 'completed',
      paymentMethod: 'bank_transfer'
    }
  ];

  const paymentMethods = [
    { method: 'Credit/Debit Cards', amount: 3456000, percentage: 59.8, transactions: 745 },
    { method: 'Bank Transfer', amount: 1687000, percentage: 29.2, transactions: 312 },
    { method: 'Cash on Delivery', amount: 456000, percentage: 7.9, transactions: 156 },
    { method: 'Digital Wallets', amount: 183000, percentage: 3.1, transactions: 89 }
  ];

  const topPerformers = [
    { name: 'Happy Pets Store', type: 'Pet Shop', revenue: 567000, commission: 56700, orders: 145 },
    { name: 'Cat Paradise', type: 'Seller', revenue: 423000, commission: 42300, orders: 123 },
    { name: 'Dog World', type: 'Pet Shop', revenue: 389000, commission: 38900, orders: 98 },
    { name: 'Arctic Pets', type: 'Seller', revenue: 345000, commission: 34500, orders: 87 },
    { name: 'Aqua Life', type: 'Seller', revenue: 234000, commission: 23400, orders: 156 }
  ];

  const formatCurrency = (amount) => {
    return `Rs.${Math.abs(amount).toLocaleString()}`;
  };

  const getTransactionBadge = (status) => {
    const badges = {
      completed: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      failed: 'bg-red-100 text-red-800',
      refunded: 'bg-orange-100 text-orange-800'
    };
    return badges[status] || 'bg-gray-100 text-gray-800';
  };

  const getTransactionIcon = (type) => {
    switch(type) {
      case 'commission': return DollarSign;
      case 'refund': return ArrowDownRight;
      case 'chargeback': return AlertCircle;
      default: return DollarSign;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Revenue Management</h1>
          <p className="text-gray-600">Track platform revenue, commissions, and financial performance</p>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="90days">Last 90 days</option>
            <option value="1year">Last year</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Download size={16} className="mr-2" />
            Export Report
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
            <RefreshCw size={16} className="mr-2" />
            Refresh
          </button>
        </div>
      </div>

      {/* Key Revenue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-900">{formatCurrency(revenueStats.totalRevenue)}</p>
              <div className="flex items-center mt-2">
                <ArrowUpRight className="text-green-500 mr-1" size={16} />
                <span className="text-sm text-green-600">+{revenueStats.monthlyGrowth}%</span>
                <span className="text-sm text-gray-500 ml-2">this month</span>
              </div>
            </div>
            <div className="bg-green-100 text-green-600 p-3 rounded-full">
              <DollarSign size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Platform Commission</p>
              <p className="text-3xl font-bold text-purple-600">{formatCurrency(revenueStats.totalCommission)}</p>
              <div className="flex items-center mt-2">
                <ArrowUpRight className="text-green-500 mr-1" size={16} />
                <span className="text-sm text-green-600">+15.2%</span>
                <span className="text-sm text-gray-500 ml-2">this month</span>
              </div>
            </div>
            <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
              <TrendingUp size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Daily Average</p>
              <p className="text-3xl font-bold text-blue-600">{formatCurrency(revenueStats.dailyAverage)}</p>
              <div className="flex items-center mt-2">
                <ArrowUpRight className="text-green-500 mr-1" size={16} />
                <span className="text-sm text-green-600">+8.7%</span>
                <span className="text-sm text-gray-500 ml-2">vs yesterday</span>
              </div>
            </div>
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
              <Calendar size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Payments</p>
              <p className="text-3xl font-bold text-orange-600">{formatCurrency(revenueStats.pendingPayments)}</p>
              <div className="flex items-center mt-2">
                <Clock className="text-orange-500 mr-1" size={16} />
                <span className="text-sm text-orange-600">{revenueStats.completedTransactions} transactions</span>
              </div>
            </div>
            <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
              <Wallet size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Revenue Trend */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Monthly Revenue Trend</h2>
            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center">
              <BarChart3 size={16} className="mr-1" />
              View Details
            </button>
          </div>
          <div className="space-y-4">
            {monthlyRevenue.slice(-4).map((month, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{month.month}</p>
                  <p className="text-sm text-gray-500">{month.orders} orders</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{formatCurrency(month.revenue)}</p>
                  <p className="text-sm text-purple-600">Commission: {formatCurrency(month.commission)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue by Category */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Revenue by Category</h2>
            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center">
              <PieChart size={16} className="mr-1" />
              View Chart
            </button>
          </div>
          <div className="space-y-4">
            {revenueByCategory.map((category, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">{category.category}</span>
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-900">{formatCurrency(category.revenue)}</span>
                    <div className="flex items-center">
                      <ArrowUpRight className="text-green-500 mr-1" size={12} />
                      <span className="text-xs text-green-600">+{category.growth}%</span>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">{category.percentage}% of total</span>
                  <span className="text-xs text-gray-500">Commission: {formatCurrency(category.commission)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Methods and Top Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment Methods Breakdown */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Payment Methods</h2>
          <div className="space-y-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{method.method}</p>
                    <p className="text-sm text-gray-500">{method.transactions} transactions</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{formatCurrency(method.amount)}</p>
                  <p className="text-sm text-gray-500">{method.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Top Revenue Generators</h2>
            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center">
              <Users size={16} className="mr-1" />
              View All
            </button>
          </div>
          <div className="space-y-4">
            {topPerformers.map((performer, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <div className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
                    {performer.type === 'Pet Shop' ? <Building size={20} /> : <Users size={20} />}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{performer.name}</p>
                    <p className="text-sm text-gray-500">{performer.type} • {performer.orders} orders</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{formatCurrency(performer.revenue)}</p>
                  <p className="text-sm text-green-600">+{formatCurrency(performer.commission)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter size={16} className="mr-2" />
              Filters
            </button>
            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center">
              <Eye size={16} className="mr-1" />
              View All
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transaction Type</label>
                <select
                  value={revenueType}
                  onChange={(e) => setRevenueType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Types</option>
                  <option value="commission">Commission</option>
                  <option value="refund">Refunds</option>
                  <option value="chargeback">Chargebacks</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="7days">Last 7 days</option>
                  <option value="30days">Last 30 days</option>
                  <option value="90days">Last 90 days</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setRevenueType('all');
                    setTimeRange('30days');
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTransactions.map((transaction) => {
                const TransactionIcon = getTransactionIcon(transaction.type);
                return (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-full mr-3 ${
                          transaction.type === 'refund' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                        }`}>
                          <TransactionIcon size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{transaction.id}</p>
                          <p className="text-sm text-gray-500 capitalize">{transaction.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{transaction.seller}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{transaction.order}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`text-sm font-medium ${
                        transaction.amount < 0 ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {transaction.amount < 0 ? '-' : '+'}{formatCurrency(transaction.amount)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 capitalize">{transaction.paymentMethod.replace('_', ' ')}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getTransactionBadge(transaction.status)}`}>
                        {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{transaction.date}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-700" title="View Details">
                          <Eye size={16} />
                        </button>
                        <button className="text-green-600 hover:text-green-700" title="Generate Report">
                          <FileText size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Financial Alerts */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Financial Alerts</h2>
        <div className="space-y-3">
          <div className="flex items-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <AlertCircle className="text-yellow-600 mr-3" size={20} />
            <div>
              <p className="text-sm font-medium text-yellow-800">Pending Payments Alert</p>
              <p className="text-sm text-yellow-700">Rs.45,600 in pending payments requires attention</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle className="text-green-600 mr-3" size={20} />
            <div>
              <p className="text-sm font-medium text-green-800">Revenue Target Achieved</p>
              <p className="text-sm text-green-700">Monthly revenue target of Rs.1M exceeded by 8.3%</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <Bell className="text-blue-600 mr-3" size={20} />
            <div>
              <p className="text-sm font-medium text-blue-800">New Revenue Milestone</p>
              <p className="text-sm text-blue-700">Platform has reached Rs.5.7M total revenue milestone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRevenue;
