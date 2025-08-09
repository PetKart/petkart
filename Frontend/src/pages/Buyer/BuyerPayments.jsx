import React, { useState } from 'react';
import { Calendar, CreditCard, DollarSign, TrendingUp, Download, Eye } from 'lucide-react';

const PaymentsPage = () => {
  const [activeTab, setActiveTab] = useState('All Payments');

  // Sample payments data
  const payments = [
    {
      id: 'PAY-001',
      orderId: 'ORD-001',
      date: '2025-08-08',
      customerName: 'John Doe',
      petName: 'Maxwell',
      petType: 'German Shepherd',
      amount: 'LKR 50000',
      status: 'Completed',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN123456789',
      image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=150&h=150&fit=crop'
    },
    {
      id: 'PAY-002',
      date: '2025-08-07',
      orderId: 'ORD-002',
      customerName: 'Sarah Wilson',
      petName: 'Luna',
      petType: 'Persian Cat',
      amount: 'LKR 25000',
      status: 'Completed',
      paymentMethod: 'Bank Transfer',
      transactionId: 'TXN123456790',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&h=150&fit=crop'
    },
    {
      id: 'PAY-003',
      date: '2025-08-06',
      orderId: 'ORD-003',
      customerName: 'Mike Johnson',
      petName: 'Buddy',
      petType: 'Golden Retriever',
      amount: 'LKR 45000',
      status: 'Pending',
      paymentMethod: 'Cash',
      transactionId: 'TXN123456791',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=150&h=150&fit=crop'
    },
    {
      id: 'PAY-004',
      date: '2025-08-05',
      orderId: 'ORD-004',
      customerName: 'Emily Davis',
      petName: 'Nemo',
      petType: 'Clownfish',
      amount: 'LKR 1500',
      status: 'Failed',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN123456792',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=150&h=150&fit=crop'
    },
    {
      id: 'PAY-005',
      date: '2025-08-04',
      orderId: 'ORD-005',
      customerName: 'David Brown',
      petName: 'Rocky',
      petType: 'Labrador',
      amount: 'LKR 40000',
      status: 'Completed',
      paymentMethod: 'Digital Wallet',
      transactionId: 'TXN123456793',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=150&h=150&fit=crop'
    },
    {
      id: 'PAY-006',
      date: '2025-08-03',
      orderId: 'ORD-006',
      customerName: 'Lisa Garcia',
      petName: 'Milo',
      petType: 'British Shorthair',
      amount: 'LKR 30000',
      status: 'Completed',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN123456794',
      image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=150&h=150&fit=crop'
    }
  ];

  const stats = [
    { label: 'Total Spent', value: 'LKR 191,500', color: 'text-purple-600', icon: DollarSign },
    { label: 'Successful Payments', value: '4', color: 'text-green-600', icon: CreditCard },
    { label: 'Pending Payments', value: '1', color: 'text-orange-600', icon: Calendar },
    { label: 'Failed Payments', value: '1', color: 'text-red-600', icon: TrendingUp }
  ];

  const tabs = ['All Payments', 'Completed', 'Pending', 'Failed'];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-600';
      case 'Pending':
        return 'bg-orange-100 text-orange-600';
      case 'Failed':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getPaymentMethodColor = (method) => {
    switch (method) {
      case 'Credit Card':
        return 'bg-blue-100 text-blue-600';
      case 'Bank Transfer':
        return 'bg-purple-100 text-purple-600';
      case 'Cash':
        return 'bg-green-100 text-green-600';
      case 'Digital Wallet':
        return 'bg-indigo-100 text-indigo-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const filteredPayments = activeTab === 'All Payments' 
    ? payments 
    : payments.filter(payment => payment.status === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-purple-600">My Payments</h1>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-2 hover:bg-purple-700">
            <Download size={16} />
            <span>Download Receipts</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-100`}>
                  <stat.icon size={24} className={stat.color} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Status Tabs */}
        <div className="flex space-x-6 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? 'text-purple-600 border-purple-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Payments List */}
        <div className="space-y-4 mb-8">
          {filteredPayments.map((payment) => (
            <div key={payment.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={payment.image}
                    alt={payment.petName}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-bold text-gray-800">Payment #{payment.id}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(payment.status)}`}>
                        {payment.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs ${getPaymentMethodColor(payment.paymentMethod)}`}>
                        {payment.paymentMethod}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Order:</span> {payment.orderId} | 
                      <span className="font-medium"> Pet:</span> {payment.petName} ({payment.petType})
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Payment Method:</span> {payment.paymentMethod}
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{payment.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CreditCard size={14} />
                        <span>TXN: {payment.transactionId}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-purple-600 mb-3">{payment.amount}</p>
                  <div className="flex space-x-2">
                    <button className="bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700 flex items-center space-x-1">
                      <Eye size={14} />
                      <span>View</span>
                    </button>
                    <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-sm hover:bg-gray-200 flex items-center space-x-1">
                      <Download size={14} />
                      <span>Receipt</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-end">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg text-sm flex items-center space-x-2 hover:bg-purple-700 transition-colors">
            <span>See more</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;