import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Clock, 
  Calendar, 
  Plus, 
  Mic, 
  Video, 
  FileText,
  Zap,
  TrendingUp,
  Users,
  MessageSquare
} from 'lucide-react';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

interface DashboardHomeProps {
  user: User;
}

const DashboardHome: React.FC<DashboardHomeProps> = ({ user }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [tasks] = useState([
    { id: 1, title: 'Reply to John on WhatsApp', app: 'WhatsApp', completed: false, priority: 'high' },
    { id: 2, title: 'Review proposal in Gmail', app: 'Gmail', completed: true, priority: 'medium' },
    { id: 3, title: 'Join team call at 3 PM', app: 'Zoom', completed: false, priority: 'high' },
    { id: 4, title: 'Update project in Notion', app: 'Notion', completed: false, priority: 'low' },
  ]);

  const [stats] = useState({
    tasksToday: 8,
    completed: 5,
    pending: 3,
    productivity: 87
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const quickActions = [
    { icon: Plus, label: 'Add Task', color: 'bg-red-600' },
    { icon: Video, label: 'Join Meeting', color: 'bg-blue-600' },
    { icon: Mic, label: 'Voice Note', color: 'bg-green-600' },
    { icon: FileText, label: 'New Document', color: 'bg-purple-600' },
  ];

  return (
    <div className="min-h-screen p-4 lg:p-8 pt-20 lg:pt-8">
      {/* Welcome Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-3xl lg:text-4xl font-orbitron font-bold text-white mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {getGreeting()}, {user.firstName} 👋
        </motion.h1>
        <motion.p
          className="text-red-400 font-rajdhani text-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {currentTime.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </motion.p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        {[
          { label: 'Tasks Today', value: stats.tasksToday, icon: Calendar, color: 'from-red-600 to-red-800' },
          { label: 'Completed', value: stats.completed, icon: CheckCircle, color: 'from-green-600 to-green-800' },
          { label: 'Pending', value: stats.pending, icon: Clock, color: 'from-yellow-600 to-yellow-800' },
          { label: 'Productivity', value: `${stats.productivity}%`, icon: TrendingUp, color: 'from-blue-600 to-blue-800' },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className="bg-black/30 border border-red-500/20 rounded-xl p-4 lg:p-6 backdrop-blur-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                borderColor: 'rgba(255, 0, 0, 0.4)',
                boxShadow: '0 0 30px rgba(255, 0, 0, 0.2)'
              }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <Icon className="w-6 h-6 text-red-400" />
                  <motion.div
                    className="w-2 h-2 bg-red-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                <motion.p
                  className="text-2xl lg:text-3xl font-orbitron font-bold text-white mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-red-400 font-rajdhani text-sm">{stat.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Today's Tasks */}
        <motion.div
          className="lg:col-span-2 bg-black/30 border border-red-500/20 rounded-xl p-6 backdrop-blur-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            boxShadow: '0 0 30px rgba(255, 0, 0, 0.1)'
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-orbitron font-bold text-white">Today's Tasks</h2>
            <motion.button
              className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-4 h-4" />
            </motion.button>
          </div>

          <div className="space-y-4">
            {tasks.map((task, index) => (
              <motion.div
                key={task.id}
                className="flex items-center space-x-4 p-4 bg-black/20 border border-red-500/10 rounded-lg hover:border-red-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.button
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    task.completed 
                      ? 'bg-green-600 border-green-600' 
                      : 'border-red-500/50 hover:border-red-500'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {task.completed && <CheckCircle className="w-3 h-3 text-white" />}
                </motion.button>

                <div className="flex-1">
                  <p className={`font-rajdhani ${task.completed ? 'text-gray-400 line-through' : 'text-white'}`}>
                    {task.title}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-red-400 text-xs font-rajdhani">{task.app}</span>
                    <div className={`w-2 h-2 rounded-full ${
                      task.priority === 'high' ? 'bg-red-500' :
                      task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`} />
                  </div>
                </div>

                <motion.button
                  className="text-red-400 hover:text-red-300 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions & Calendar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <motion.div
            className="bg-black/30 border border-red-500/20 rounded-xl p-6 backdrop-blur-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className="text-lg font-orbitron font-bold text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.button
                    key={action.label}
                    className={`${action.color} p-4 rounded-lg text-white flex flex-col items-center space-y-2 hover:opacity-80 transition-all duration-300`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      boxShadow: '0 0 20px rgba(255, 0, 0, 0.2)'
                    }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-rajdhani font-bold">{action.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Mini Calendar */}
          <motion.div
            className="bg-black/30 border border-red-500/20 rounded-xl p-6 backdrop-blur-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h3 className="text-lg font-orbitron font-bold text-white mb-4">Calendar</h3>
            <div className="text-center">
              <motion.div
                className="text-3xl font-orbitron font-bold text-red-400 mb-2"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {currentTime.getDate()}
              </motion.div>
              <p className="text-white font-rajdhani">
                {currentTime.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-red-400 font-rajdhani">Team Call</span>
                  <span className="text-white font-rajdhani">3:00 PM</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-red-400 font-rajdhani">Review Meeting</span>
                  <span className="text-white font-rajdhani">5:30 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Productivity Score */}
          <motion.div
            className="bg-black/30 border border-red-500/20 rounded-xl p-6 backdrop-blur-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <h3 className="text-lg font-orbitron font-bold text-white mb-4">Productivity</h3>
            <div className="relative w-24 h-24 mx-auto">
              {/* Circular progress */}
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="rgba(255, 0, 0, 0.2)"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#ff0000"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - stats.productivity / 100) }}
                  transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(255, 0, 0, 0.5))'
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-orbitron font-bold text-white">{stats.productivity}%</span>
              </div>
            </div>
            <p className="text-center text-red-400 font-rajdhani mt-2">Great work today!</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;