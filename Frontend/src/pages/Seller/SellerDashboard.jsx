import React from 'react';
import { TrendingUp, Package, DollarSign, FileText, Eye, Calendar } from 'lucide-react';

const SellerDashboard = () => {
  const stats = [
    {
      title: 'Total Orders',
      value: '124',
      change: '+12%',
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Total Pets',
      value: '89',
      change: '+5%',
      icon: Package,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Total Income',
      value: '$12,450',
      change: '+18%',
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Total Articles',
      value: '23',
      change: '+3%',
      icon: FileText,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  const recentTransactions = [
    {
      id: 'ORD-001',
      petName: 'Golden Retriever Puppy',
      buyer: 'John Smith',
      amount: '$850',
      date: '2024-01-15',
      status: 'Completed'
    },
    {
      id: 'ORD-002',
      petName: 'Persian Cat',
      buyer: 'Emily Davis',
      amount: '$650',
      date: '2024-01-14',
      status: 'Pending'
    },
    {
      id: 'ORD-003',
      petName: 'German Shepherd',
      buyer: 'Michael Brown',
      amount: '$1,200',
      date: '2024-01-13',
      status: 'Completed'
    },
    {
      id: 'ORD-004',
      petName: 'Maine Coon',
      buyer: 'Sarah Wilson',
      amount: '$750',
      date: '2024-01-12',
      status: 'Requested'
    },
  ];

  const petTypes = [
    { type: 'Dogs', count: 45, percentage: 51 },
    { type: 'Cats', count: 28, percentage: 31 },
    { type: 'Birds', count: 12, percentage: 13 },
    { type: 'Others', count: 4, percentage: 5 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your store.</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar size={16} />
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1 flex items-center">
                    <TrendingUp size={12} className="mr-1" />
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`${stat.bgColor} ${stat.color} p-3 rounded-full`}>
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center">
              <Eye size={16} className="mr-1" />
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Order ID</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Pet</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Buyer</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium text-gray-900">{transaction.id}</td>
                    <td className="py-4 px-4 text-gray-700">{transaction.petName}</td>
                    <td className="py-4 px-4 text-gray-700">{transaction.buyer}</td>
                    <td className="py-4 px-4 font-medium text-gray-900">{transaction.amount}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        transaction.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pet Types Distribution */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Pet Types</h2>
          <div className="space-y-4">
            {petTypes.map((pet, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">{pet.type}</span>
                  <span className="text-sm text-gray-500">{pet.count} pets</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${pet.percentage}%` }}
                  ></div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500">{pet.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;