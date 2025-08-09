import React, { useState } from 'react';
import { 
  Settings, 
  Save, 
  RefreshCw,
  Bell,
  Shield,
  Globe,
  Mail,
  Database,
  Server,
  Lock,
  Eye,
  EyeOff,
  AlertTriangle,
  CheckCircle,
  X,
  Upload,
  Download,
  Trash2,
  Edit3,
  Plus,
  Clock,
  Users,
  DollarSign,
  Package,
  Image
} from 'lucide-react';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [showPassword, setShowPassword] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);

  // System settings state
  const [settings, setSettings] = useState({
    // General Settings
    siteName: 'PetKart',
    siteDescription: 'Your trusted pet marketplace platform',
    contactEmail: 'admin@petkart.com',
    supportEmail: 'support@petkart.com',
    phoneNumber: '+94 11 234 5678',
    address: '123 Pet Street, Colombo, Sri Lanka',
    
    // Maintenance Settings
    maintenanceMessage: 'We are currently performing scheduled maintenance. Please check back soon!',
    maintenanceStartTime: '',
    maintenanceEndTime: '',
    allowAdminAccess: true,
    
    // Commission Settings
    defaultCommissionRate: 10,
    minimumCommissionAmount: 50,
    commissionCalculationType: 'percentage',
    
    // Security Settings
    sessionTimeout: 30,
    maxLoginAttempts: 5,
    passwordMinLength: 8,
    requireTwoFactor: false,
    
    // Email Settings
    smtpHost: 'smtp.gmail.com',
    smtpPort: 587,
    smtpUsername: 'noreply@petkart.com',
    smtpPassword: '',
    emailFromName: 'PetKart Team',
    
    // Notification Settings
    enableEmailNotifications: true,
    enableSMSNotifications: false,
    enablePushNotifications: true,
    notifyNewOrders: true,
    notifyNewUsers: true,
    notifyLowStock: true,
    
    // Upload Settings
    maxFileSize: 5, // MB
    allowedImageFormats: ['jpg', 'jpeg', 'png', 'webp'],
    maxImagesPerListing: 10,
    
    // Business Settings
    businessHours: {
      monday: { open: '09:00', close: '18:00', enabled: true },
      tuesday: { open: '09:00', close: '18:00', enabled: true },
      wednesday: { open: '09:00', close: '18:00', enabled: true },
      thursday: { open: '09:00', close: '18:00', enabled: true },
      friday: { open: '09:00', close: '18:00', enabled: true },
      saturday: { open: '10:00', close: '16:00', enabled: true },
      sunday: { open: '10:00', close: '16:00', enabled: false }
    }
  });

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'maintenance', label: 'Maintenance', icon: Server },
    { id: 'commission', label: 'Commission', icon: DollarSign },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'uploads', label: 'File Uploads', icon: Upload },
    { id: 'business', label: 'Business Hours', icon: Clock }
  ];

  const handleSave = async (tabId) => {
    setSaveStatus('saving');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaveStatus('success');
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleMaintenanceToggle = () => {
    if (!maintenanceMode) {
      setShowMaintenanceModal(true);
    } else {
      setMaintenanceMode(false);
      setSettings(prev => ({ ...prev, maintenanceMessage: '' }));
    }
  };

  const activateMaintenanceMode = () => {
    setMaintenanceMode(true);
    setShowMaintenanceModal(false);
    // Here you would typically make an API call to enable maintenance mode
  };

  const MaintenanceModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <AlertTriangle className="text-red-500 mr-2" size={24} />
            <h3 className="text-lg font-semibold text-gray-900">Enable Maintenance Mode</h3>
          </div>
          <button onClick={() => setShowMaintenanceModal(false)} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            This will temporarily disable access to the platform for all users except administrators. 
            Are you sure you want to proceed?
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Maintenance Message</label>
              <textarea
                value={settings.maintenanceMessage}
                onChange={(e) => setSettings(prev => ({ ...prev, maintenanceMessage: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                rows="3"
                placeholder="Enter maintenance message for users"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                <input
                  type="datetime-local"
                  value={settings.maintenanceStartTime}
                  onChange={(e) => setSettings(prev => ({ ...prev, maintenanceStartTime: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Time (Optional)</label>
                <input
                  type="datetime-local"
                  value={settings.maintenanceEndTime}
                  onChange={(e) => setSettings(prev => ({ ...prev, maintenanceEndTime: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="allowAdminAccess"
                checked={settings.allowAdminAccess}
                onChange={(e) => setSettings(prev => ({ ...prev, allowAdminAccess: e.target.checked }))}
                className="rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
              <label htmlFor="allowAdminAccess" className="ml-2 text-sm text-gray-700">
                Allow admin access during maintenance
              </label>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button
            onClick={activateMaintenanceMode}
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
          >
            <Server size={16} className="mr-2" />
            Enable Maintenance
          </button>
          <button
            onClick={() => setShowMaintenanceModal(false)}
            className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  const SaveButton = ({ tabId }) => (
    <button
      onClick={() => handleSave(tabId)}
      disabled={saveStatus === 'saving'}
      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center disabled:opacity-50"
    >
      {saveStatus === 'saving' ? (
        <>
          <RefreshCw size={16} className="mr-2 animate-spin" />
          Saving...
        </>
      ) : (
        <>
          <Save size={16} className="mr-2" />
          Save Changes
        </>
      )}
    </button>
  );

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
          <input
            type="text"
            value={settings.siteName}
            onChange={(e) => setSettings(prev => ({ ...prev, siteName: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
          <input
            type="email"
            value={settings.contactEmail}
            onChange={(e) => setSettings(prev => ({ ...prev, contactEmail: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
        <textarea
          value={settings.siteDescription}
          onChange={(e) => setSettings(prev => ({ ...prev, siteDescription: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="3"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Support Email</label>
          <input
            type="email"
            value={settings.supportEmail}
            onChange={(e) => setSettings(prev => ({ ...prev, supportEmail: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            value={settings.phoneNumber}
            onChange={(e) => setSettings(prev => ({ ...prev, phoneNumber: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
        <textarea
          value={settings.address}
          onChange={(e) => setSettings(prev => ({ ...prev, address: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="2"
        />
      </div>
    </div>
  );

  const renderMaintenanceSettings = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center">
          <AlertTriangle className="text-yellow-600 mr-2" size={20} />
          <div>
            <h4 className="text-sm font-medium text-yellow-800">System Maintenance</h4>
            <p className="text-sm text-yellow-700">
              Use maintenance mode to temporarily disable user access during system updates.
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
        <div>
          <h4 className="text-lg font-medium text-gray-900">Maintenance Mode</h4>
          <p className="text-sm text-gray-600">
            {maintenanceMode ? 'System is currently in maintenance mode' : 'System is operational'}
          </p>
        </div>
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full mr-3 ${maintenanceMode ? 'bg-red-500' : 'bg-green-500'}`}></div>
          <button
            onClick={handleMaintenanceToggle}
            className={`px-4 py-2 rounded-lg transition-colors ${
              maintenanceMode 
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-red-600 text-white hover:bg-red-700'
            }`}
          >
            {maintenanceMode ? 'Disable Maintenance' : 'Enable Maintenance'}
          </button>
        </div>
      </div>
      
      {maintenanceMode && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="text-sm font-medium text-red-800 mb-2">Current Maintenance Message</h4>
          <p className="text-sm text-red-700">{settings.maintenanceMessage}</p>
          {settings.maintenanceStartTime && (
            <p className="text-xs text-red-600 mt-2">
              Started: {new Date(settings.maintenanceStartTime).toLocaleString()}
            </p>
          )}
        </div>
      )}
    </div>
  );

  const renderCommissionSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Default Commission Rate (%)</label>
          <input
            type="number"
            value={settings.defaultCommissionRate}
            onChange={(e) => setSettings(prev => ({ ...prev, defaultCommissionRate: parseFloat(e.target.value) }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            min="0"
            max="100"
            step="0.1"
          />
          <p className="text-xs text-gray-500 mt-1">Platform commission percentage on sales</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Commission Amount (Rs.)</label>
          <input
            type="number"
            value={settings.minimumCommissionAmount}
            onChange={(e) => setSettings(prev => ({ ...prev, minimumCommissionAmount: parseFloat(e.target.value) }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            min="0"
          />
          <p className="text-xs text-gray-500 mt-1">Minimum commission amount per transaction</p>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Commission Calculation</label>
        <select
          value={settings.commissionCalculationType}
          onChange={(e) => setSettings(prev => ({ ...prev, commissionCalculationType: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="percentage">Percentage based</option>
          <option value="fixed">Fixed amount</option>
          <option value="tiered">Tiered structure</option>
        </select>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
          <input
            type="number"
            value={settings.sessionTimeout}
            onChange={(e) => setSettings(prev => ({ ...prev, sessionTimeout: parseInt(e.target.value) }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            min="5"
            max="480"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Max Login Attempts</label>
          <input
            type="number"
            value={settings.maxLoginAttempts}
            onChange={(e) => setSettings(prev => ({ ...prev, maxLoginAttempts: parseInt(e.target.value) }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            min="3"
            max="10"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Password Length</label>
          <input
            type="number"
            value={settings.passwordMinLength}
            onChange={(e) => setSettings(prev => ({ ...prev, passwordMinLength: parseInt(e.target.value) }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            min="6"
            max="20"
          />
        </div>
        <div className="flex items-center pt-6">
          <input
            type="checkbox"
            id="requireTwoFactor"
            checked={settings.requireTwoFactor}
            onChange={(e) => setSettings(prev => ({ ...prev, requireTwoFactor: e.target.checked }))}
            className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
          />
          <label htmlFor="requireTwoFactor" className="ml-2 text-sm text-gray-700">
            Require Two-Factor Authentication
          </label>
        </div>
      </div>
    </div>
  );

  const renderEmailSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Host</label>
          <input
            type="text"
            value={settings.smtpHost}
            onChange={(e) => setSettings(prev => ({ ...prev, smtpHost: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Port</label>
          <input
            type="number"
            value={settings.smtpPort}
            onChange={(e) => setSettings(prev => ({ ...prev, smtpPort: parseInt(e.target.value) }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Username</label>
          <input
            type="email"
            value={settings.smtpUsername}
            onChange={(e) => setSettings(prev => ({ ...prev, smtpUsername: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={settings.smtpPassword}
              onChange={(e) => setSettings(prev => ({ ...prev, smtpPassword: e.target.value }))}
              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email From Name</label>
        <input
          type="text"
          value={settings.emailFromName}
          onChange={(e) => setSettings(prev => ({ ...prev, emailFromName: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-gray-900">Notification Channels</h4>
        
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h5 className="font-medium text-gray-900">Email Notifications</h5>
            <p className="text-sm text-gray-600">Send notifications via email</p>
          </div>
          <input
            type="checkbox"
            checked={settings.enableEmailNotifications}
            onChange={(e) => setSettings(prev => ({ ...prev, enableEmailNotifications: e.target.checked }))}
            className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
          />
        </div>
        
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h5 className="font-medium text-gray-900">SMS Notifications</h5>
            <p className="text-sm text-gray-600">Send notifications via SMS</p>
          </div>
          <input
            type="checkbox"
            checked={settings.enableSMSNotifications}
            onChange={(e) => setSettings(prev => ({ ...prev, enableSMSNotifications: e.target.checked }))}
            className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
          />
        </div>
        
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h5 className="font-medium text-gray-900">Push Notifications</h5>
            <p className="text-sm text-gray-600">Send browser push notifications</p>
          </div>
          <input
            type="checkbox"
            checked={settings.enablePushNotifications}
            onChange={(e) => setSettings(prev => ({ ...prev, enablePushNotifications: e.target.checked }))}
            className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-gray-900">Notification Types</h4>
        
        <div className="space-y-3">
          {[
            { key: 'notifyNewOrders', label: 'New Orders', desc: 'Notify when new orders are placed' },
            { key: 'notifyNewUsers', label: 'New User Registrations', desc: 'Notify when new users register' },
            { key: 'notifyLowStock', label: 'Low Stock Alerts', desc: 'Notify when pet inventory is low' }
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h6 className="font-medium text-gray-900">{item.label}</h6>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
              <input
                type="checkbox"
                checked={settings[item.key]}
                onChange={(e) => setSettings(prev => ({ ...prev, [item.key]: e.target.checked }))}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderUploadSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Max File Size (MB)</label>
          <input
            type="number"
            value={settings.maxFileSize}
            onChange={(e) => setSettings(prev => ({ ...prev, maxFileSize: parseInt(e.target.value) }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            min="1"
            max="100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Max Images Per Listing</label>
          <input
            type="number"
            value={settings.maxImagesPerListing}
            onChange={(e) => setSettings(prev => ({ ...prev, maxImagesPerListing: parseInt(e.target.value) }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            min="1"
            max="20"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Allowed Image Formats</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp'].map((format) => (
            <div key={format} className="flex items-center">
              <input
                type="checkbox"
                id={format}
                checked={settings.allowedImageFormats.includes(format)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSettings(prev => ({ 
                      ...prev, 
                      allowedImageFormats: [...prev.allowedImageFormats, format]
                    }));
                  } else {
                    setSettings(prev => ({ 
                      ...prev, 
                      allowedImageFormats: prev.allowedImageFormats.filter(f => f !== format)
                    }));
                  }
                }}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor={format} className="ml-2 text-sm text-gray-700 uppercase">
                {format}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBusinessHours = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        {Object.entries(settings.businessHours).map(([day, hours]) => (
          <div key={day} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={hours.enabled}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  businessHours: {
                    ...prev.businessHours,
                    [day]: { ...hours, enabled: e.target.checked }
                  }
                }))}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="ml-3 font-medium text-gray-900 capitalize">{day}</span>
            </div>
            
            {hours.enabled && (
              <div className="flex items-center space-x-3">
                <input
                  type="time"
                  value={hours.open}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    businessHours: {
                      ...prev.businessHours,
                      [day]: { ...hours, open: e.target.value }
                    }
                  }))}
                  className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <span className="text-gray-500">to</span>
                <input
                  type="time"
                  value={hours.close}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    businessHours: {
                      ...prev.businessHours,
                      [day]: { ...hours, close: e.target.value }
                    }
                  }))}
                  className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            )}
            
            {!hours.enabled && (
              <span className="text-gray-500">Closed</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch(activeTab) {
      case 'general': return renderGeneralSettings();
      case 'maintenance': return renderMaintenanceSettings();
      case 'commission': return renderCommissionSettings();
      case 'security': return renderSecuritySettings();
      case 'email': return renderEmailSettings();
      case 'notifications': return renderNotificationSettings();
      case 'uploads': return renderUploadSettings();
      case 'business': return renderBusinessHours();
      default: return renderGeneralSettings();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
          <p className="text-gray-600">Configure platform settings and system preferences</p>
        </div>
        <div className="flex items-center space-x-3">
          {saveStatus === 'success' && (
            <div className="flex items-center text-green-600">
              <CheckCircle size={16} className="mr-1" />
              <span className="text-sm">Settings saved successfully</span>
            </div>
          )}
          <SaveButton tabId={activeTab} />
        </div>
      </div>

      {/* Settings Navigation */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600 bg-purple-50'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <IconComponent size={16} className="mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>

      {/* Maintenance Modal */}
      {showMaintenanceModal && <MaintenanceModal />}
    </div>
  );
};

export default AdminSettings;
