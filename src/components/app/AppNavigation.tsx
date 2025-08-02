import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  MessageCircle, 
  Calendar, 
  BarChart3, 
  Users, 
  Settings,
  Menu,
  X,
  LogOut
} from 'lucide-react';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

interface AppNavigationProps {
  currentView: string;
  onViewChange: (view: any) => void;
  user: User;
}

const AppNavigation: React.FC<AppNavigationProps> = ({ currentView, onViewChange, user }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'chat', icon: MessageCircle, label: 'AI Chat' },
    { id: 'timeline', icon: Calendar, label: 'Timeline' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'sharing', icon: Users, label: 'Sharing' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const handleNavClick = (viewId: string) => {
    onViewChange(viewId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav
        className="hidden lg:flex fixed left-0 top-0 h-full w-20 bg-black/50 border-r border-red-500/20 backdrop-blur-xl z-30 flex-col items-center py-6"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-8 relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          style={{
            boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)'
          }}
        >
          <span className="text-black font-orbitron font-bold text-lg">M</span>
          
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 bg-red-500"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Navigation Items */}
        <div className="flex flex-col space-y-4 flex-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group
                  ${isActive 
                    ? 'bg-red-600 text-black' 
                    : 'bg-black/30 text-red-400 hover:bg-red-600/20 hover:text-red-300'
                  }
                `}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: isActive 
                    ? '0 0 20px rgba(255, 0, 0, 0.5)' 
                    : '0 0 10px rgba(255, 0, 0, 0.1)'
                }}
              >
                <Icon className="w-5 h-5" />
                
                {/* Tooltip */}
                <motion.div
                  className="absolute left-16 bg-black/90 border border-red-500/30 rounded-lg px-3 py-2 text-sm font-rajdhani text-white whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    boxShadow: '0 0 15px rgba(255, 0, 0, 0.2)'
                  }}
                >
                  {item.label}
                  <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-black border-l border-b border-red-500/30 rotate-45" />
                </motion.div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-red-500 rounded-l-full"
                    layoutId="activeIndicator"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* User Avatar */}
        <motion.div
          className="mt-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white font-orbitron font-bold relative overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.1 }}
            style={{
              boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)'
            }}
          >
            {user.firstName[0]}{user.lastName[0]}
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-red-500"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.2, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <motion.header
          className="fixed top-0 left-0 right-0 h-16 bg-black/50 border-b border-red-500/20 backdrop-blur-xl z-40 flex items-center justify-between px-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-black font-orbitron font-bold text-sm">M</span>
            </div>
            <span className="text-white font-orbitron font-bold">
              Memo<span className="text-red-400">Mate</span>
            </span>
          </div>

          {/* Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </motion.header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-6">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = currentView === item.id;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`
                        flex items-center space-x-4 px-8 py-4 rounded-xl transition-all duration-300
                        ${isActive 
                          ? 'bg-red-600 text-black' 
                          : 'bg-black/30 text-red-400 border border-red-500/30'
                        }
                      `}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        boxShadow: isActive 
                          ? '0 0 30px rgba(255, 0, 0, 0.5)' 
                          : '0 0 15px rgba(255, 0, 0, 0.2)'
                      }}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="font-orbitron font-bold text-lg">{item.label}</span>
                    </motion.button>
                  );
                })}

                {/* User Info */}
                <motion.div
                  className="mt-8 flex items-center space-x-4 px-8 py-4 bg-black/30 border border-red-500/30 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white font-orbitron font-bold">
                    {user.firstName[0]}{user.lastName[0]}
                  </div>
                  <div>
                    <p className="text-white font-orbitron font-bold">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-red-400 text-sm font-rajdhani">{user.email}</p>
                  </div>
                </motion.div>

                {/* Logout Button */}
                <motion.button
                  className="flex items-center space-x-2 px-6 py-3 bg-red-600/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-600/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-rajdhani">Logout</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Bottom Navigation */}
        <motion.nav
          className="fixed bottom-0 left-0 right-0 h-16 bg-black/50 border-t border-red-500/20 backdrop-blur-xl z-30 flex items-center justify-around px-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {navItems.slice(0, 5).map((item, index) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  relative flex flex-col items-center justify-center w-12 h-12 rounded-lg transition-all duration-300
                  ${isActive 
                    ? 'text-red-400' 
                    : 'text-gray-500 hover:text-red-400'
                  }
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"
                    layoutId="mobileActiveIndicator"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      boxShadow: '0 0 10px rgba(255, 0, 0, 0.8)'
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.nav>
      </div>
    </>
  );
};

export default AppNavigation;