import React, { useState } from 'react';
import { Check, X, Eye, Clock, CheckCircle, Calendar, User, Package } from 'lucide-react';
import toast from 'react-hot-toast';

const SellerOrders = () => {

  const [activeTab, setActiveTab] = useState('requested');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [orders, setOrders] = useState([
    {
      id: 'ORD-001',
      petName: 'Golden Retriever Puppy',
      buyerName: 'John Smith',
      buyerEmail: 'john.smith@email.com',
      orderDate: '2024-01-15',
      amount: '$850',
      status: 'requested',
      petType: 'Dog',
      notes: 'Looking for a family-friendly pet'
    },
    {
      id: 'ORD-002',
      petName: 'Persian Cat',
      buyerName: 'Emily Davis',
      buyerEmail: 'emily.davis@email.com',
      orderDate: '2024-01-14',
      amount: '$650',
      status: 'pending',
      petType: 'Cat'
    },
    {
      id: 'ORD-003',
      petName: 'German Shepherd',
      buyerName: 'Michael Brown',
      buyerEmail: 'michael.brown@email.com',
      orderDate: '2024-01-13',
      amount: '$1,200',
      status: 'completed',
      petType: 'Dog'
    },
    {
      id: 'ORD-004',
      petName: 'Maine Coon',
      buyerName: 'Sarah Wilson',
      buyerEmail: 'sarah.wilson@email.com',
      orderDate: '2024-01-12',
      amount: '$750',
      status: 'requested',
      petType: 'Cat',
      notes: 'Interested in adult cats'
    }
  ]);

  const acceptOrder = (orderId) => {
    setOrders(orders.map(order => 
      order.id === orderId 
        ? { ...order, status: 'pending' }
        : order
    ));
    toast.success('Order accepted and moved to pending!');
  };

  const deleteOrder = (orderId) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      setOrders(orders.filter(order => order.id !== orderId));
      toast.success('Order deleted successfully!');
    }
  };

  const completeOrder = (orderId) => {
    setOrders(orders.map(order => 
      order.id === orderId 
        ? { ...order, status: 'completed'}
        : order
    ));
    toast.success('Order marked as completed!');
  };

  const getFilteredOrders = () => {
    return orders.filter(order => order.status === activeTab);
  };

  const getTabCount = (status) => {
    return orders.filter(order => order.status === status).length;
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'requested':
        return <Clock className="text-yellow-600" size={20} />;
      case 'pending':
        return <Package className="text-blue-600" size={20} />;
      case 'completed':
        return <CheckCircle className="text-green-600" size={20} />;
      default:
        return <Clock className="text-gray-600" size={20} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Requested Orders</p>
              <p className="text-3xl font-bold text-yellow-600">{getTabCount('requested')}</p>
            </div>
            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
              <Clock size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Orders</p>
              <p className="text-3xl font-bold text-blue-600">{getTabCount('pending')}</p>
            </div>
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
              <Package size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed Orders</p>
              <p className="text-3xl font-bold text-green-600">{getTabCount('completed')}</p>
            </div>
            <div className="bg-green-100 text-green-600 p-3 rounded-full">
              <CheckCircle size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { key: 'requested', label: 'Requested', count: getTabCount('requested') },
              { key: 'pending', label: 'Pending', count: getTabCount('pending') },
              { key: 'completed', label: 'Completed', count: getTabCount('completed') }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors duration-200 ${
                  activeTab === tab.key
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <span>{tab.label}</span>
                {tab.count > 0 && (
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    activeTab === tab.key
                      ? 'bg-purple-100 text-purple-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 font-medium text-gray-700">Order ID</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700">Pet</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700">Buyer</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700">Date</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700">Amount</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {getFilteredOrders().map((order) => (
                <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(order.status)}
                      <span className="font-medium text-gray-900">{order.id}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900">{order.petName}</p>
                      <p className="text-sm text-gray-500">{order.petType}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900">{order.buyerName}</p>
                      <p className="text-sm text-gray-500">{order.buyerEmail}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      {new Date(order.orderDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="py-4 px-6 font-medium text-gray-900">{order.amount}</td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        title="View Details"
                      >
                        <Eye size={16} />
                      </button>
                      
                      {order.status === 'requested' && (
                        <>
                          <button
                            onClick={() => acceptOrder(order.id)}
                            className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors duration-200"
                            title="Accept Order"
                          >
                            <Check size={16} />
                          </button>
                          <button
                            onClick={() => deleteOrder(order.id)}
                            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-200"
                            title="Delete Order"
                          >
                            <X size={16} />
                          </button>
                        </>
                      )}
                      
                      {order.status === 'pending' && (
                        <button
                          onClick={() => completeOrder(order.id)}
                          className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors duration-200"
                        >
                          Mark Complete
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {getFilteredOrders().length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-300 mb-4">
                {getStatusIcon(activeTab)}
              </div>
              <p className="text-gray-500">No {activeTab} orders found.</p>
              <p className="text-sm text-gray-400">
                {activeTab === 'requested' && 'New order requests will appear here.'}
                {activeTab === 'pending' && 'Accepted orders will be shown here.'}
                {activeTab === 'completed' && 'Completed orders will be displayed here.'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Order Details</h2>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(selectedOrder.status)}
                  <span className="font-medium">{selectedOrder.id}</span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    selectedOrder.status === 'requested' ? 'bg-yellow-100 text-yellow-800' :
                    selectedOrder.status === 'pending' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                  </span>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium text-gray-900 mb-2">Pet Information</h3>
                  <p className="text-gray-700">{selectedOrder.petName}</p>
                  <p className="text-sm text-gray-500">{selectedOrder.petType}</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">{selectedOrder.amount}</p>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium text-gray-900 mb-2">Buyer Information</h3>
                  <div className="flex items-center space-x-2 mb-1">
                    <User size={16} className="text-gray-400" />
                    <p className="text-gray-700">{selectedOrder.buyerName}</p>
                  </div>
                  <p className="text-sm text-gray-500 ml-6">{selectedOrder.buyerEmail}</p>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium text-gray-900 mb-2">Order Date</h3>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-gray-400" />
                    <p className="text-gray-700">{new Date(selectedOrder.orderDate).toLocaleDateString()}</p>
                  </div>
                </div>
                
                {selectedOrder.notes && (
                  <div className="border-t pt-4">
                    <h3 className="font-medium text-gray-900 mb-2">Notes</h3>
                    <p className="text-gray-700 text-sm">{selectedOrder.notes}</p>
                  </div>
                )}
              </div>
              
              <div className="flex space-x-3 mt-6">
                {selectedOrder.status === 'requested' && (
                  <>
                    <button
                      onClick={() => {
                        acceptOrder(selectedOrder.id);
                        setSelectedOrder(null);
                      }}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <Check size={16} />
                      <span>Accept</span>
                    </button>
                    <button
                      onClick={() => {
                        deleteOrder(selectedOrder.id);
                        setSelectedOrder(null);
                      }}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <X size={16} />
                      <span>Delete</span>
                    </button>
                  </>
                )}
                
                {selectedOrder.status === 'pending' && (
                  <button
                    onClick={() => {
                      completeOrder(selectedOrder.id);
                      setSelectedOrder(null);
                    }}
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <CheckCircle size={16} />
                    <span>Mark as Complete</span>
                  </button>
                )}
                
                {selectedOrder.status === 'completed' && (
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerOrders;