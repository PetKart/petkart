import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Calendar,
  Filter,
  RefreshCw,
  FileText,
  PieChart,
  Users,
  ShoppingCart,
  DollarSign,
  Package,
  Star,
  Eye,
  Target,
  Clock,
  ArrowUp,
  ArrowDown,
  Activity,
  Zap,
  Globe,
  MapPin,
  Phone,
  Mail,
  Share,
  Printer,
  Search,
  ChevronDown,
  AlertCircle,
  CheckCircle,
  XCircle,
  Percent,
  Tag,
  Settings,
  MoreVertical
} from 'lucide-react';

const AdminReports = () => {
  const [selectedDateRange, setSelectedDateRange] = useState('last30days');
  const [selectedReportType, setSelectedReportType] = useState('overview');
  const [showFilters, setShowFilters] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Mock data for different report types
  const reportData = {
    overview: {
      totalRevenue: 2500000,
      totalOrders: 1234,
      totalUsers: 5678,
      totalPets: 890,
      revenueGrowth: 15.5,
      orderGrowth: 12.3,
      userGrowth: 8.7,
      petGrowth: 22.1
    },
    sales: {
      daily: [
        { date: '2025-08-01', revenue: 45000, orders: 23 },
        { date: '2025-08-02', revenue: 52000, orders: 28 },
        { date: '2025-08-03', revenue: 38000, orders: 19 },
        { date: '2025-08-04', revenue: 67000, orders: 34 },
        { date: '2025-08-05', revenue: 71000, orders: 42 },
        { date: '2025-08-06', revenue: 59000, orders: 31 },
        { date: '2025-08-07', revenue: 83000, orders: 47 },
        { date: '2025-08-08', revenue: 76000, orders: 39 },
        { date: '2025-08-09', revenue: 91000, orders: 51 }
      ],
      topCategories: [
        { category: 'Dogs', revenue: 890000, percentage: 35.6 },
        { category: 'Cats', revenue: 675000, percentage: 27.0 },
        { category: 'Birds', revenue: 425000, percentage: 17.0 },
        { category: 'Fish', revenue: 310000, percentage: 12.4 },
        { category: 'Others', revenue: 200000, percentage: 8.0 }
      ]
    },
    users: {
      newUsers: [
        { date: '2025-08-01', count: 12 },
        { date: '2025-08-02', count: 18 },
        { date: '2025-08-03', count: 9 },
        { date: '2025-08-04', count: 25 },
        { date: '2025-08-05', count: 31 },
        { date: '2025-08-06', count: 22 },
        { date: '2025-08-07', count: 35 },
        { date: '2025-08-08', count: 28 },
        { date: '2025-08-09', count: 41 }
      ],
      userTypes: [
        { type: 'Buyers', count: 3456, percentage: 60.9 },
        { type: 'Sellers', count: 1234, percentage: 21.7 },
        { type: 'Pet Shops', count: 456, percentage: 8.0 },
        { type: 'Inactive', count: 532, percentage: 9.4 }
      ],
      topLocations: [
        { city: 'Colombo', users: 1234, percentage: 21.7 },
        { city: 'Kandy', users: 876, percentage: 15.4 },
        { city: 'Galle', users: 654, percentage: 11.5 },
        { city: 'Jaffna', users: 543, percentage: 9.6 },
        { city: 'Negombo', users: 432, percentage: 7.6 }
      ]
    },
    inventory: {
      totalPets: 890,
      availablePets: 678,
      soldPets: 212,
      lowStock: 15,
      categoryDistribution: [
        { category: 'Dogs', count: 345, percentage: 38.8 },
        { category: 'Cats', count: 267, percentage: 30.0 },
        { category: 'Birds', count: 156, percentage: 17.5 },
        { category: 'Fish', count: 89, percentage: 10.0 },
        { category: 'Others', count: 33, percentage: 3.7 }
      ]
    },
    financial: {
      commission: {
        total: 125000,
        lastMonth: 98000,
        growth: 27.6
      },
      paymentMethods: [
        { method: 'Card Payment', amount: 1875000, percentage: 75.0 },
        { method: 'Bank Transfer', amount: 375000, percentage: 15.0 },
        { method: 'Mobile Payment', amount: 250000, percentage: 10.0 }
      ],
      refunds: {
        total: 45000,
        count: 23,
        percentage: 1.8
      }
    }
  };

  const reportTypes = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'sales', name: 'Sales Report', icon: TrendingUp },
    { id: 'users', name: 'User Analytics', icon: Users },
    { id: 'inventory', name: 'Inventory Report', icon: Package },
    { id: 'financial', name: 'Financial Report', icon: DollarSign },
    { id: 'offers', name: 'Offers Performance', icon: Tag },
    { id: 'seller', name: 'Seller Performance', icon: Star },
    { id: 'traffic', name: 'Traffic Analytics', icon: Activity }
  ];

  const dateRanges = [
    { value: 'today', label: 'Today' },
    { value: 'yesterday', label: 'Yesterday' },
    { value: 'last7days', label: 'Last 7 Days' },
    { value: 'last30days', label: 'Last 30 Days' },
    { value: 'last3months', label: 'Last 3 Months' },
    { value: 'last6months', label: 'Last 6 Months' },
    { value: 'lastyear', label: 'Last Year' },
    { value: 'custom', label: 'Custom Range' }
  ];

  const handleGenerateReport = async (format) => {
    setIsGenerating(true);
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false);
      console.log(`Generating ${format} report for ${selectedReportType}`);
    }, 2000);
  };

  const formatCurrency = (amount) => {
    return `Rs.${amount.toLocaleString()}`;
  };

  const getGrowthColor = (growth) => {
    return growth >= 0 ? 'text-green-600' : 'text-red-600';
  };

  const getGrowthIcon = (growth) => {
    return growth >= 0 ? ArrowUp : ArrowDown;
  };

  const OverviewReport = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-900">{formatCurrency(reportData.overview.totalRevenue)}</p>
              <div className="flex items-center mt-2">
                <ArrowUp className={`${getGrowthColor(reportData.overview.revenueGrowth)} mr-1`} size={16} />
                <span className={`text-sm ${getGrowthColor(reportData.overview.revenueGrowth)}`}>
                  {reportData.overview.revenueGrowth}%
                </span>
                <span className="text-sm text-gray-500 ml-1">vs last period</span>
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
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-3xl font-bold text-gray-900">{reportData.overview.totalOrders.toLocaleString()}</p>
              <div className="flex items-center mt-2">
                <ArrowUp className={`${getGrowthColor(reportData.overview.orderGrowth)} mr-1`} size={16} />
                <span className={`text-sm ${getGrowthColor(reportData.overview.orderGrowth)}`}>
                  {reportData.overview.orderGrowth}%
                </span>
                <span className="text-sm text-gray-500 ml-1">vs last period</span>
              </div>
            </div>
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
              <ShoppingCart size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-3xl font-bold text-gray-900">{reportData.overview.totalUsers.toLocaleString()}</p>
              <div className="flex items-center mt-2">
                <ArrowUp className={`${getGrowthColor(reportData.overview.userGrowth)} mr-1`} size={16} />
                <span className={`text-sm ${getGrowthColor(reportData.overview.userGrowth)}`}>
                  {reportData.overview.userGrowth}%
                </span>
                <span className="text-sm text-gray-500 ml-1">vs last period</span>
              </div>
            </div>
            <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
              <Users size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Pets</p>
              <p className="text-3xl font-bold text-gray-900">{reportData.overview.totalPets.toLocaleString()}</p>
              <div className="flex items-center mt-2">
                <ArrowUp className={`${getGrowthColor(reportData.overview.petGrowth)} mr-1`} size={16} />
                <span className={`text-sm ${getGrowthColor(reportData.overview.petGrowth)}`}>
                  {reportData.overview.petGrowth}%
                </span>
                <span className="text-sm text-gray-500 ml-1">vs last period</span>
              </div>
            </div>
            <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
              <Package size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Trend</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <BarChart3 className="mx-auto mb-2 text-gray-400" size={48} />
              <p className="text-gray-500">Sales chart visualization would go here</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <TrendingUp className="mx-auto mb-2 text-gray-400" size={48} />
              <p className="text-gray-500">User growth chart would go here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SalesReport = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Sales */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Sales Performance</h3>
          <div className="space-y-3">
            {reportData.sales.daily.slice(-5).map((day, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{day.date}</p>
                  <p className="text-sm text-gray-500">{day.orders} orders</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">{formatCurrency(day.revenue)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Categories */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Categories</h3>
          <div className="space-y-4">
            {reportData.sales.topCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="font-medium text-gray-900">{category.category}</span>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{formatCurrency(category.revenue)}</p>
                  <p className="text-sm text-gray-500">{category.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const UserAnalytics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Types */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Distribution</h3>
          <div className="space-y-3">
            {reportData.users.userTypes.map((type, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-700">{type.type}</span>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{type.count.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">{type.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Locations */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Locations</h3>
          <div className="space-y-3">
            {reportData.users.topLocations.map((location, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <MapPin className="text-gray-400 mr-2" size={16} />
                  <span className="text-gray-700">{location.city}</span>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{location.users.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">{location.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New User Registrations */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Registrations</h3>
          <div className="space-y-3">
            {reportData.users.newUsers.slice(-5).map((day, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm text-gray-600">{day.date}</span>
                <span className="font-bold text-blue-600">{day.count} users</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const FinancialReport = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Commission Overview */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Commission Overview</h3>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">{formatCurrency(reportData.financial.commission.total)}</p>
            <p className="text-sm text-gray-500 mt-1">Total Commission</p>
            <div className="flex items-center justify-center mt-3">
              <ArrowUp className="text-green-600 mr-1" size={16} />
              <span className="text-sm text-green-600">{reportData.financial.commission.growth}% growth</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
          <div className="space-y-3">
            {reportData.financial.paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-700">{method.method}</span>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{formatCurrency(method.amount)}</p>
                  <p className="text-sm text-gray-500">{method.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Refunds */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Refunds & Returns</h3>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600">{formatCurrency(reportData.financial.refunds.total)}</p>
            <p className="text-sm text-gray-500 mt-1">{reportData.financial.refunds.count} refunds</p>
            <p className="text-xs text-gray-400 mt-2">{reportData.financial.refunds.percentage}% of total sales</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReportContent = () => {
    switch (selectedReportType) {
      case 'overview':
        return <OverviewReport />;
      case 'sales':
        return <SalesReport />;
      case 'users':
        return <UserAnalytics />;
      case 'financial':
        return <FinancialReport />;
      default:
        return (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <FileText className="mx-auto mb-4 text-gray-400" size={64} />
            <h3 className="text-xl font-medium text-gray-900 mb-2">Report Coming Soon</h3>
            <p className="text-gray-500">This report type is currently under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Comprehensive business intelligence and reporting</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center"
          >
            <Filter size={16} className="mr-2" />
            Filters
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <RefreshCw size={16} className="mr-2" />
            Refresh
          </button>
        </div>
      </div>

      {/* Report Type Selection */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-wrap gap-3 mb-6">
          {reportTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedReportType(type.id)}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  selectedReportType === type.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <IconComponent size={16} className="mr-2" />
                {type.name}
              </button>
            );
          })}
        </div>

        {/* Date Range and Export Options */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
              <select
                value={selectedDateRange}
                onChange={(e) => setSelectedDateRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {dateRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
            
            {selectedDateRange === 'custom' && (
              <div className="flex items-center space-x-2">
                <input
                  type="date"
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <span className="text-gray-500">to</span>
                <input
                  type="date"
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleGenerateReport('pdf')}
              disabled={isGenerating}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center disabled:opacity-50"
            >
              <FileText size={16} className="mr-2" />
              {isGenerating ? 'Generating...' : 'PDF'}
            </button>
            <button
              onClick={() => handleGenerateReport('excel')}
              disabled={isGenerating}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center disabled:opacity-50"
            >
              <FileText size={16} className="mr-2" />
              {isGenerating ? 'Generating...' : 'Excel'}
            </button>
            <button
              onClick={() => handleGenerateReport('print')}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center"
            >
              <Printer size={16} className="mr-2" />
              Print
            </button>
          </div>
        </div>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="">All Categories</option>
                <option value="dogs">Dogs</option>
                <option value="cats">Cats</option>
                <option value="birds">Birds</option>
                <option value="fish">Fish</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">User Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="">All Users</option>
                <option value="buyers">Buyers</option>
                <option value="sellers">Sellers</option>
                <option value="petshops">Pet Shops</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="">All Locations</option>
                <option value="colombo">Colombo</option>
                <option value="kandy">Kandy</option>
                <option value="galle">Galle</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Report Content */}
      {renderReportContent()}

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
            <Calendar className="mx-auto mb-2 text-blue-600" size={24} />
            <p className="text-sm font-medium text-gray-900">Schedule Report</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
            <Mail className="mx-auto mb-2 text-green-600" size={24} />
            <p className="text-sm font-medium text-gray-900">Email Report</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
            <Share className="mx-auto mb-2 text-purple-600" size={24} />
            <p className="text-sm font-medium text-gray-900">Share Report</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
            <Settings className="mx-auto mb-2 text-gray-600" size={24} />
            <p className="text-sm font-medium text-gray-900">Report Settings</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminReports;
