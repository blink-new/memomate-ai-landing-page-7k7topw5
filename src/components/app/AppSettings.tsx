import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Database,
  Download,
  Trash2,
  LogOut,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Smartphone,
  Monitor,
  Cloud,
  HardDrive,
  Key,
  Eye,
  EyeOff
} from 'lucide-react';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

interface AppSettingsProps {
  user: User;
}

const AppSettings: React.FC<AppSettingsProps> = ({ user }) => {
  const [activeSection, setActiveSection] = useState('profile');
  const [settings, setSettings] = useState({
    theme: 'dark',
    language: 'en',
    notifications: {
      email: true,
      push: true,
      sound: true,
      desktop: true
    },
    privacy: {
      profileVisible: true,
      activityVisible: false,
      dataSharing: false
    },
    storage: {
      type: 'cloud',
      autoBackup: true,
      localEncryption: true
    },
    display: {
      deviceSync: true,
      compactMode: false,
      animations: true
    }
  });

  const settingSections = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'language', label: 'Language & Region', icon: Globe },
    { id: 'storage', label: 'Storage & Backup', icon: Database },
    { id: 'advanced', label: 'Advanced', icon: Settings }
  ];

  const updateSetting = (section: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [key]: value
      }
    }));
  };

  const renderProfileSection = () => (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black/20 border border-red-500/20 rounded-xl p-6">
        <h3 className="text-xl font-orbitron font-bold text-white mb-6">Profile Information</h3>
        
        <div className="flex items-center space-x-6 mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center text-white font-orbitron font-bold text-2xl">
              {user.firstName[0]}{user.lastName[0]}
            </div>
            <motion.button
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <User className="w-4 h-4" />
            </motion.button>
          </div>
          
          <div className="flex-1">
            <h4 className="text-2xl font-orbitron font-bold text-white">{user.firstName} {user.lastName}</h4>
            <p className="text-red-400 font-rajdhani">{user.email}</p>
            <p className="text-red-400/60 font-rajdhani text-sm">Member since January 2024</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="block text-red-400 font-rajdhani text-sm mb-2">First Name</label>
            <input
              type="text"
              value={user.firstName}
              className="w-full px-4 py-3 bg-black/30 border border-red-500/30 rounded-lg text-white font-rajdhani focus:outline-none focus:border-red-500"
            />
          </div>
          <div>
            <label className="block text-red-400 font-rajdhani text-sm mb-2">Last Name</label>
            <input
              type="text"
              value={user.lastName}
              className="w-full px-4 py-3 bg-black/30 border border-red-500/30 rounded-lg text-white font-rajdhani focus:outline-none focus:border-red-500"
            />
          </div>
          <div className="lg:col-span-2">
            <label className="block text-red-400 font-rajdhani text-sm mb-2">Email Address</label>
            <input
              type="email"
              value={user.email}
              className="w-full px-4 py-3 bg-black/30 border border-red-500/30 rounded-lg text-white font-rajdhani focus:outline-none focus:border-red-500"
            />
          </div>
        </div>

        <motion.button
          className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-500 rounded-lg text-white font-rajdhani font-bold transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Update Profile
        </motion.button>
      </div>
    </motion.div>
  );

  const renderNotificationsSection = () => (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black/20 border border-red-500/20 rounded-xl p-6">
        <h3 className="text-xl font-orbitron font-bold text-white mb-6">Notification Preferences</h3>
        
        <div className="space-y-4">
          {[
            { key: 'email', label: 'Email Notifications', description: 'Receive updates via email' },
            { key: 'push', label: 'Push Notifications', description: 'Browser and mobile notifications' },
            { key: 'sound', label: 'Sound Alerts', description: 'Audio notifications for important events' },
            { key: 'desktop', label: 'Desktop Notifications', description: 'System notifications on desktop' }
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 bg-black/20 border border-red-500/10 rounded-lg">
              <div>
                <h4 className="font-orbitron font-bold text-white">{item.label}</h4>
                <p className="text-red-400 font-rajdhani text-sm">{item.description}</p>
              </div>
              <motion.button
                onClick={() => updateSetting('notifications', item.key, !settings.notifications[item.key as keyof typeof settings.notifications])}
                className={`w-12 h-6 rounded-full transition-all duration-300 ${
                  settings.notifications[item.key as keyof typeof settings.notifications] ? 'bg-red-600' : 'bg-gray-600'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-5 h-5 bg-white rounded-full shadow-lg"
                  animate={{
                    x: settings.notifications[item.key as keyof typeof settings.notifications] ? 24 : 2
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderPrivacySection = () => (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black/20 border border-red-500/20 rounded-xl p-6">
        <h3 className="text-xl font-orbitron font-bold text-white mb-6">Privacy & Security</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4">Privacy Settings</h4>
            <div className="space-y-4">
              {[
                { key: 'profileVisible', label: 'Profile Visibility', description: 'Allow others to see your profile' },
                { key: 'activityVisible', label: 'Activity Status', description: 'Show when you\'re online or active' },
                { key: 'dataSharing', label: 'Data Sharing', description: 'Share anonymized usage data for improvements' }
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between p-4 bg-black/20 border border-red-500/10 rounded-lg">
                  <div>
                    <h5 className="font-rajdhani font-bold text-white">{item.label}</h5>
                    <p className="text-red-400 font-rajdhani text-sm">{item.description}</p>
                  </div>
                  <motion.button
                    onClick={() => updateSetting('privacy', item.key, !settings.privacy[item.key as keyof typeof settings.privacy])}
                    className={`w-12 h-6 rounded-full transition-all duration-300 ${
                      settings.privacy[item.key as keyof typeof settings.privacy] ? 'bg-red-600' : 'bg-gray-600'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="w-5 h-5 bg-white rounded-full shadow-lg"
                      animate={{
                        x: settings.privacy[item.key as keyof typeof settings.privacy] ? 24 : 2
                      }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </motion.button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-white mb-4">Security Actions</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <motion.button
                className="flex items-center space-x-3 p-4 bg-black/20 border border-red-500/10 rounded-lg text-white hover:border-red-500/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Key className="w-5 h-5 text-red-400" />
                <span className="font-rajdhani">Change Password</span>
              </motion.button>
              <motion.button
                className="flex items-center space-x-3 p-4 bg-black/20 border border-red-500/10 rounded-lg text-white hover:border-red-500/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Shield className="w-5 h-5 text-red-400" />
                <span className="font-rajdhani">Two-Factor Auth</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderAppearanceSection = () => (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black/20 border border-red-500/20 rounded-xl p-6">
        <h3 className="text-xl font-orbitron font-bold text-white mb-6">Appearance & Display</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4">Theme</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: 'dark', label: 'Dark Mode', icon: Moon },
                { id: 'light', label: 'Light Mode', icon: Sun }
              ].map((theme) => {
                const Icon = theme.icon;
                return (
                  <motion.button
                    key={theme.id}
                    onClick={() => updateSetting('theme', 'theme', theme.id)}
                    className={`flex items-center space-x-3 p-4 rounded-lg border transition-all duration-300 ${
                      settings.theme === theme.id
                        ? 'bg-red-600 border-red-500 text-white'
                        : 'bg-black/20 border-red-500/20 text-red-400 hover:border-red-500/40'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-rajdhani font-bold">{theme.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-white mb-4">Display Options</h4>
            <div className="space-y-4">
              {[
                { key: 'deviceSync', label: 'Device Sync', description: 'Sync theme across all devices', icon: Smartphone },
                { key: 'compactMode', label: 'Compact Mode', description: 'Reduce spacing for more content', icon: Monitor },
                { key: 'animations', label: 'Animations', description: 'Enable smooth transitions and effects', icon: Palette }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.key} className="flex items-center justify-between p-4 bg-black/20 border border-red-500/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5 text-red-400" />
                      <div>
                        <h5 className="font-rajdhani font-bold text-white">{item.label}</h5>
                        <p className="text-red-400 font-rajdhani text-sm">{item.description}</p>
                      </div>
                    </div>
                    <motion.button
                      onClick={() => updateSetting('display', item.key, !settings.display[item.key as keyof typeof settings.display])}
                      className={`w-12 h-6 rounded-full transition-all duration-300 ${
                        settings.display[item.key as keyof typeof settings.display] ? 'bg-red-600' : 'bg-gray-600'
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="w-5 h-5 bg-white rounded-full shadow-lg"
                        animate={{
                          x: settings.display[item.key as keyof typeof settings.display] ? 24 : 2
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    </motion.button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderStorageSection = () => (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black/20 border border-red-500/20 rounded-xl p-6">
        <h3 className="text-xl font-orbitron font-bold text-white mb-6">Storage & Backup</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4">Storage Type</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: 'cloud', label: 'Cloud Storage', description: 'Sync across devices', icon: Cloud },
                { id: 'local', label: 'Local Storage', description: 'Store on device only', icon: HardDrive }
              ].map((storage) => {
                const Icon = storage.icon;
                return (
                  <motion.button
                    key={storage.id}
                    onClick={() => updateSetting('storage', 'type', storage.id)}
                    className={`flex flex-col items-center space-y-2 p-4 rounded-lg border transition-all duration-300 ${
                      settings.storage.type === storage.id
                        ? 'bg-red-600 border-red-500 text-white'
                        : 'bg-black/20 border-red-500/20 text-red-400 hover:border-red-500/40'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-8 h-8" />
                    <div className="text-center">
                      <p className="font-rajdhani font-bold">{storage.label}</p>
                      <p className="text-xs opacity-80">{storage.description}</p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-white mb-4">Backup Options</h4>
            <div className="space-y-4">
              {[
                { key: 'autoBackup', label: 'Auto Backup', description: 'Automatically backup data daily' },
                { key: 'localEncryption', label: 'Local Encryption', description: 'Encrypt data with AES-256' }
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between p-4 bg-black/20 border border-red-500/10 rounded-lg">
                  <div>
                    <h5 className="font-rajdhani font-bold text-white">{item.label}</h5>
                    <p className="text-red-400 font-rajdhani text-sm">{item.description}</p>
                  </div>
                  <motion.button
                    onClick={() => updateSetting('storage', item.key, !settings.storage[item.key as keyof typeof settings.storage])}
                    className={`w-12 h-6 rounded-full transition-all duration-300 ${
                      settings.storage[item.key as keyof typeof settings.storage] ? 'bg-red-600' : 'bg-gray-600'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="w-5 h-5 bg-white rounded-full shadow-lg"
                      animate={{
                        x: settings.storage[item.key as keyof typeof settings.storage] ? 24 : 2
                      }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </motion.button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-white mb-4">Data Management</h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <motion.button
                className="flex items-center space-x-3 p-4 bg-black/20 border border-green-500/20 rounded-lg text-green-400 hover:border-green-500/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                <span className="font-rajdhani">Export Data</span>
              </motion.button>
              <motion.button
                className="flex items-center space-x-3 p-4 bg-black/20 border border-blue-500/20 rounded-lg text-blue-400 hover:border-blue-500/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Database className="w-5 h-5" />
                <span className="font-rajdhani">Backup Now</span>
              </motion.button>
              <motion.button
                className="flex items-center space-x-3 p-4 bg-black/20 border border-red-500/20 rounded-lg text-red-400 hover:border-red-500/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Trash2 className="w-5 h-5" />
                <span className="font-rajdhani">Clear Data</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderAdvancedSection = () => (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black/20 border border-red-500/20 rounded-xl p-6">
        <h3 className="text-xl font-orbitron font-bold text-white mb-6">Advanced Settings</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4">Account Actions</h4>
            <div className="space-y-4">
              <motion.button
                className="w-full flex items-center justify-between p-4 bg-black/20 border border-yellow-500/20 rounded-lg text-yellow-400 hover:border-yellow-500/40 transition-all duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center space-x-3">
                  <LogOut className="w-5 h-5" />
                  <div className="text-left">
                    <p className="font-rajdhani font-bold">Sign Out</p>
                    <p className="text-xs opacity-80">Sign out from this device</p>
                  </div>
                </div>
              </motion.button>
              
              <motion.button
                className="w-full flex items-center justify-between p-4 bg-black/20 border border-red-500/20 rounded-lg text-red-400 hover:border-red-500/40 transition-all duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center space-x-3">
                  <Trash2 className="w-5 h-5" />
                  <div className="text-left">
                    <p className="font-rajdhani font-bold">Delete Account</p>
                    <p className="text-xs opacity-80">Permanently delete your account and data</p>
                  </div>
                </div>
              </motion.button>
            </div>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-white mb-4">App Information</h4>
            <div className="bg-black/20 border border-red-500/10 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-red-400 font-rajdhani">Version</p>
                  <p className="text-white font-rajdhani font-bold">1.0.0</p>
                </div>
                <div>
                  <p className="text-red-400 font-rajdhani">Build</p>
                  <p className="text-white font-rajdhani font-bold">2024.01.20</p>
                </div>
                <div>
                  <p className="text-red-400 font-rajdhani">Platform</p>
                  <p className="text-white font-rajdhani font-bold">Web</p>
                </div>
                <div>
                  <p className="text-red-400 font-rajdhani">License</p>
                  <p className="text-white font-rajdhani font-bold">Pro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'profile': return renderProfileSection();
      case 'notifications': return renderNotificationsSection();
      case 'privacy': return renderPrivacySection();
      case 'appearance': return renderAppearanceSection();
      case 'storage': return renderStorageSection();
      case 'advanced': return renderAdvancedSection();
      default: return renderProfileSection();
    }
  };

  return (
    <div className="min-h-screen p-4 lg:p-8 pt-20 lg:pt-8">
      {/* Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl lg:text-4xl font-orbitron font-bold text-white mb-2">
          Settings
        </h1>
        <p className="text-red-400 font-rajdhani text-lg">
          Customize your MemoMate experience
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
        {/* Settings Navigation */}
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="bg-black/20 border border-red-500/20 rounded-xl p-4 backdrop-blur-xl">
            <div className="space-y-2">
              {settingSections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-red-600 text-white'
                        : 'text-red-400 hover:bg-red-600/20'
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-rajdhani font-bold text-sm">{section.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Settings Content */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {renderSection()}
        </motion.div>
      </div>
    </div>
  );
};

export default AppSettings;