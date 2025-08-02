import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  Clock, 
  CheckCircle,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  Calendar,
  MessageSquare,
  Mail,
  Video
} from 'lucide-react';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

interface AnalyticsProps {
  user: User;
}

const Analytics: React.FC<AnalyticsProps> = ({ user }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'quarter'>('week');

  const productivityData = {
    score: 87,
    trend: '+12%',
    tasksCompleted: 45,
    totalTasks: 52,
    avgResponseTime: '2.3 hours',
    streakDays: 7
  };

  const appUsageData = [
    { app: 'WhatsApp', usage: 35, color: '#25D366', tasks: 12 },
    { app: 'Gmail', usage: 28, color: '#EA4335', tasks: 8 },
    { app: 'Zoom', usage: 20, color: '#2D8CFF', tasks: 5 },
    { app: 'Notion', usage: 17, color: '#000000', tasks: 7 }
  ];

  const weeklyData = [
    { day: 'Mon', completed: 8, total: 10 },
    { day: 'Tue', completed: 6, total: 8 },
    { day: 'Wed', completed: 9, total: 11 },
    { day: 'Thu', completed: 7, total: 9 },
    { day: 'Fri', completed: 10, total: 12 },
    { day: 'Sat', completed: 3, total: 4 },
    { day: 'Sun', completed: 2, total: 3 }
  ];

  const getAppIcon = (app: string) => {
    switch (app) {
      case 'WhatsApp': return <MessageSquare className="w-5 h-5" />;
      case 'Gmail': return <Mail className="w-5 h-5" />;
      case 'Zoom': return <Video className="w-5 h-5" />;
      case 'Notion': return <BarChart3 className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen p-4 lg:p-8 pt-20 lg:pt-8">
      {/* Header */}
      <motion.div
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h1 className="text-3xl lg:text-4xl font-orbitron font-bold text-white mb-2">
            Analytics Center
          </h1>
          <p className="text-red-400 font-rajdhani text-lg">
            Your productivity insights and performance metrics
          </p>
        </div>

        {/* Period Selector */}
        <div className="flex items-center space-x-2">
          {['week', 'month', 'quarter'].map((period) => (
            <motion.button
              key={period}
              onClick={() => setSelectedPeriod(period as any)}
              className={`px-4 py-2 rounded-lg font-rajdhani font-bold text-sm transition-all duration-300 ${
                selectedPeriod === period
                  ? 'bg-red-600 text-white'
                  : 'bg-black/30 border border-red-500/30 text-red-400 hover:border-red-500/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {period.toUpperCase()}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        {[
          { 
            label: 'Productivity Score', 
            value: `${productivityData.score}%`, 
            trend: productivityData.trend,
            icon: Target, 
            color: 'from-red-600 to-red-800' 
          },
          { 
            label: 'Tasks Completed', 
            value: productivityData.tasksCompleted, 
            trend: '+8 today',
            icon: CheckCircle, 
            color: 'from-green-600 to-green-800' 
          },
          { 
            label: 'Avg Response Time', 
            value: productivityData.avgResponseTime, 
            trend: '-30 min',
            icon: Clock, 
            color: 'from-blue-600 to-blue-800' 
          },
          { 
            label: 'Streak Days', 
            value: productivityData.streakDays, 
            trend: 'Personal best!',
            icon: Zap, 
            color: 'from-yellow-600 to-yellow-800' 
          },
        ].map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
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
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-10`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <Icon className="w-6 h-6 text-red-400" />
                  <motion.div
                    className="text-green-400 font-rajdhani text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {metric.trend}
                  </motion.div>
                </div>
                
                <motion.p
                  className="text-2xl lg:text-3xl font-orbitron font-bold text-white mb-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {metric.value}
                </motion.p>
                <p className="text-red-400 font-rajdhani text-sm">{metric.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
        {/* Productivity Score Circle */}
        <motion.div
          className="bg-black/30 border border-red-500/20 rounded-xl p-6 backdrop-blur-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            boxShadow: '0 0 30px rgba(255, 0, 0, 0.1)'
          }}
        >
          <h3 className="text-xl font-orbitron font-bold text-white mb-6">Productivity Score</h3>
          
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48">
              {/* Outer ring */}
              <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
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
                  animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - productivityData.score / 100) }}
                  transition={{ delay: 1, duration: 2, ease: "easeOut" }}
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(255, 0, 0, 0.5))'
                  }}
                />
              </svg>
              
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  className="text-4xl font-orbitron font-bold text-white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  {productivityData.score}%
                </motion.span>
                <span className="text-red-400 font-rajdhani text-sm">This Week</span>
              </div>
              
              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-red-500 rounded-full"
                  style={{
                    top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 30}%`,
                    left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 30}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* App Usage Distribution */}
        <motion.div
          className="bg-black/30 border border-red-500/20 rounded-xl p-6 backdrop-blur-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-xl font-orbitron font-bold text-white mb-6">App Usage</h3>
          
          <div className="space-y-4">
            {appUsageData.map((app, index) => (
              <motion.div
                key={app.app}
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: app.color }}>
                  {getAppIcon(app.app)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-rajdhani font-bold">{app.app}</span>
                    <span className="text-red-400 font-rajdhani text-sm">{app.usage}%</span>
                  </div>
                  
                  <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: app.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${app.usage}%` }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  
                  <p className="text-red-400 font-rajdhani text-xs mt-1">{app.tasks} tasks completed</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Weekly Performance Chart */}
      <motion.div
        className="bg-black/30 border border-red-500/20 rounded-xl p-6 backdrop-blur-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <h3 className="text-xl font-orbitron font-bold text-white mb-6">Weekly Performance</h3>
        
        <div className="flex items-end justify-between h-64 space-x-4">
          {weeklyData.map((day, index) => {
            const completionRate = (day.completed / day.total) * 100;
            return (
              <motion.div
                key={day.day}
                className="flex-1 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <div className="relative w-full h-48 bg-black/50 rounded-lg overflow-hidden">
                  {/* Background bar */}
                  <div className="absolute bottom-0 w-full bg-red-900/30 rounded-lg" style={{ height: '100%' }} />
                  
                  {/* Completed bar */}
                  <motion.div
                    className="absolute bottom-0 w-full bg-gradient-to-t from-red-600 to-red-400 rounded-lg"
                    initial={{ height: 0 }}
                    animate={{ height: `${completionRate}%` }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                    style={{
                      boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)'
                    }}
                  />
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute bottom-0 w-full bg-red-500/50 rounded-lg blur-sm"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: `${completionRate}%`, opacity: 0.6 }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                  />
                  
                  {/* Task count */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white font-rajdhani text-xs">
                    {day.completed}/{day.total}
                  </div>
                </div>
                
                <motion.p
                  className="text-red-400 font-rajdhani font-bold mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 + index * 0.1 }}
                >
                  {day.day}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Insights Panel */}
      <motion.div
        className="mt-8 bg-black/30 border border-red-500/20 rounded-xl p-6 backdrop-blur-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <h3 className="text-xl font-orbitron font-bold text-white mb-4">AI Insights</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {[
            {
              title: 'Peak Performance',
              insight: 'You\'re most productive on Fridays with 83% task completion rate.',
              icon: TrendingUp,
              color: 'text-green-400'
            },
            {
              title: 'App Optimization',
              insight: 'Consider consolidating WhatsApp tasks to improve focus time.',
              icon: Target,
              color: 'text-yellow-400'
            },
            {
              title: 'Streak Potential',
              insight: 'You\'re on track for a 10-day productivity streak!',
              icon: Zap,
              color: 'text-red-400'
            }
          ].map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={insight.title}
                className="bg-black/20 border border-red-500/10 rounded-lg p-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Icon className={`w-5 h-5 ${insight.color}`} />
                  <h4 className="font-orbitron font-bold text-white text-sm">{insight.title}</h4>
                </div>
                <p className="text-red-400 font-rajdhani text-sm">{insight.insight}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics;