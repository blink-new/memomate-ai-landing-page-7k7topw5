import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { 
  MessageCircle, 
  Calendar, 
  BarChart3, 
  Users, 
  Settings, 
  Plus,
  Mic,
  Bell,
  CheckCircle,
  Clock,
  Zap
} from 'lucide-react';
import AppNavigation from '../components/app/AppNavigation';
import AIChat from '../components/app/AIChat';
import Timeline from '../components/app/Timeline';
import Analytics from '../components/app/Analytics';
import TaskSharing from '../components/app/TaskSharing';
import AppSettings from '../components/app/AppSettings';
import DashboardHome from '../components/app/DashboardHome';
import ParticleField3D from '../components/app/ParticleField3D';

type AppView = 'dashboard' | 'chat' | 'timeline' | 'analytics' | 'sharing' | 'settings';

const AppDashboard: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('dashboard');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [user] = useState({
    firstName: 'Imran',
    lastName: 'Khan',
    email: 'imran@example.com',
    avatar: '/api/placeholder/40/40'
  });

  // Portal transition effect
  const handleViewChange = (newView: AppView) => {
    if (newView === currentView) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(newView);
      setIsTransitioning(false);
    }, 300);
  };

  // Initialize app with entrance animation
  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardHome user={user} />;
      case 'chat':
        return <AIChat user={user} />;
      case 'timeline':
        return <Timeline user={user} />;
      case 'analytics':
        return <Analytics user={user} />;
      case 'sharing':
        return <TaskSharing user={user} />;
      case 'settings':
        return <AppSettings user={user} />;
      default:
        return <DashboardHome user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <ParticleField3D />
        </Canvas>
      </div>

      {/* Portal Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Portal Ring */}
            <motion.div
              className="w-96 h-96 border-4 border-red-500 rounded-full relative"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              exit={{ scale: 0, rotate: 720 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{
                boxShadow: '0 0 100px rgba(255, 0, 0, 0.5), inset 0 0 100px rgba(255, 0, 0, 0.2)'
              }}
            >
              {/* Inner rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border border-red-500/50 rounded-full"
                  style={{
                    margin: `${20 + i * 15}px`,
                  }}
                  animate={{ rotate: -360 }}
                  transition={{ 
                    duration: 2 + i * 0.5, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
              ))}
              
              {/* Center glow */}
              <motion.div
                className="absolute inset-1/2 w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  boxShadow: '0 0 50px rgba(255, 0, 0, 0.8)'
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* App Navigation */}
      <AppNavigation 
        currentView={currentView} 
        onViewChange={handleViewChange}
        user={user}
      />

      {/* Main Content Area */}
      <main className="relative z-10 ml-0 lg:ml-20 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 1.05, rotateY: 10 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            className="w-full h-full"
          >
            {renderCurrentView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Quick Actions */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.button
          className="w-14 h-14 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            boxShadow: '0 0 30px rgba(255, 0, 0, 0.5)'
          }}
        >
          <Plus className="w-6 h-6 text-white" />
          
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 bg-red-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.button>
      </motion.div>

      {/* Notification Toast Area */}
      <div className="fixed top-20 right-6 z-40 space-y-2">
        {/* Example notification */}
        <motion.div
          className="bg-black/80 border border-red-500/30 rounded-lg p-4 backdrop-blur-xl max-w-sm"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            boxShadow: '0 0 20px rgba(255, 0, 0, 0.2)'
          }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <div>
              <p className="text-white text-sm font-rajdhani">
                AI synchronized 3 tasks from WhatsApp
              </p>
              <p className="text-red-400 text-xs">Just now</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Productivity Streak Bar */}
      <motion.div
        className="fixed top-6 right-6 z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-black/50 border border-red-500/30 rounded-lg px-4 py-2 backdrop-blur-xl">
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-red-400" />
            <span className="text-white text-sm font-rajdhani">7 day streak</span>
            <div className="w-16 h-1 bg-red-900 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-red-500"
                initial={{ width: 0 }}
                animate={{ width: '70%' }}
                transition={{ delay: 1, duration: 1 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppDashboard;