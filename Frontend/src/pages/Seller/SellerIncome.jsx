import React, { useState } from 'react';
import { DollarSign, TrendingUp, Calendar, FileText, Download } from 'lucide-react';
import toast from 'react-hot-toast';

const SellerIncome  = () => {
  const [reportForm, setReportForm] = useState({
    type: 'monthly',
    startDate: '',
    endDate: '',
    customDuration: ''
  });

  // Mock data for income
  const totalIncome = 15750;
  const monthlyIncomes = [
    { month: 'January', income: 4500, orders: 18 },
    { month: 'December', income: 3250, orders: 14 },
    { month: 'November', income: 2800, orders: 12 },
    { month: 'October', income: 3100, orders: 15 },
    { month: 'September', income: 2100, orders: 9 },
  ];

  const recentTransactions = [
    {
      id: 'TXN-001',
      date: '2024-01-15',
      amount: 850,
      pet: 'Golden Retriever',
      buyer: 'John Smith',
      type: 'sale'
    },
    {
      id: 'TXN-002',
      date: '2024-01-14',
      amount: 650,
      pet: 'Persian Cat',
      buyer: 'Emily Davis',
      type: 'sale'
    },
    {
      id: 'TXN-003',
      date: '2024-01-13',
      amount: 1200,
      pet: 'German Shepherd',
      buyer: 'Michael Brown',
      type: 'sale'
    },
    {
      id: 'TXN-004',
      date: '2024-01-12',
      amount: 750,
      pet: 'Maine Coon',
      buyer: 'Sarah Wilson',
      type: 'sale'
    },
  ];

  const handleReportRequest = (e) => {
    e.preventDefault();
    
    if (reportForm.type === 'custom' && (!reportForm.startDate || !reportForm.endDate)) {
      toast.error('Please select start and end dates for custom reports');
      return;
    }
    
    // Simulate report generation
    toast.success(`${reportForm.type.charAt(0).toUpperCase() + reportForm.type.slice(1)} report request submitted!`);
    
    // Reset form
    setReportForm({
      type: 'monthly',
      startDate: '',
      endDate: '',
      customDuration: ''
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - Income Overview */}
        <div className="lg:col-span-2 space-y-6">
          {/* Total Income Card */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg shadow-md p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Total Income</p>
                <p className="text-4xl font-bold">Rs.{totalIncome.toLocaleString()}</p>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <DollarSign size={32} />
              </div>
            </div>
          </div>

          {/* Monthly Breakdown */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Monthly Breakdown</h2>
            <div className="space-y-4">
              {monthlyIncomes.map((month, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{month.month}</h3>
                      <p className="text-sm text-gray-500">{month.orders} orders</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">${month.income.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">
                      Avg: ${Math.round(month.income / month.orders)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
              <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Pet</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Buyer</th>
                    <th className="text-right py-3 px-4 font-medium text-gray-700">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 text-sm text-gray-700">
                        {new Date(transaction.date).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-4 font-medium text-gray-900">{transaction.pet}</td>
                      <td className="py-4 px-4 text-gray-700">{transaction.buyer}</td>
                      <td className="py-4 px-4 text-right">
                        <span className="font-medium text-green-600">
                          +${transaction.amount}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Side - Request Report Form */}
        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
          <div className="flex items-center space-x-2 mb-6">
            <FileText className="text-purple-600" size={24} />
            <h2 className="text-lg font-semibold text-gray-900">Request Report</h2>
          </div>
          
          <form onSubmit={handleReportRequest} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Report Type
              </label>
              <select
                value={reportForm.type}
                onChange={(e) => setReportForm({...reportForm, type: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>

            {reportForm.type === 'custom' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={reportForm.startDate}
                    onChange={(e) => setReportForm({...reportForm, startDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={reportForm.endDate}
                    onChange={(e) => setReportForm({...reportForm, endDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </>
            )}

            {reportForm.type !== 'custom' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <input
                  type="text"
                  value={reportForm.customDuration}
                  onChange={(e) => setReportForm({...reportForm, customDuration: e.target.value})}
                  placeholder={`e.g., Last 30 days, Current ${reportForm.type}`}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Download size={20} />
              <span>Generate Report</span>
            </button>
          </form>

          {/* Quick Stats */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">This Month</span>
                <span className="font-medium text-gray-900">$4,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">This Week</span>
                <span className="font-medium text-gray-900">$1,650</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Today</span>
                <span className="font-medium text-gray-900">$850</span>
              </div>
              <div className="flex justify-between pt-2 border-t">
                <span className="text-sm text-gray-600">Avg per Sale</span>
                <span className="font-medium text-green-600">$742</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerIncome;