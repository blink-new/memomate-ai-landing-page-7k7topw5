import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Video, 
  MessageSquare,
  Mail,
  FileText,
  Plus,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  time: string;
  date: string;
  app: 'WhatsApp' | 'Gmail' | 'Zoom' | 'Notion' | 'Calendar';
  type: 'message' | 'meeting' | 'task' | 'reminder';
  priority: 'high' | 'medium' | 'low';
  completed?: boolean;
  participants?: string[];
}

interface TimelineProps {
  user: User;
}

const Timeline: React.FC<TimelineProps> = ({ user }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'day' | 'week' | 'month'>('day');

  const events: TimelineEvent[] = [
    {
      id: '1',
      title: 'Team Standup',
      description: 'Daily team sync meeting',
      time: '09:00 AM',
      date: '2024-01-20',
      app: 'Zoom',
      type: 'meeting',
      priority: 'high',
      participants: ['John', 'Sarah', 'Mike']
    },
    {
      id: '2',
      title: 'Reply to client proposal',
      description: 'Review and respond to project proposal from ABC Corp',
      time: '10:30 AM',
      date: '2024-01-20',
      app: 'Gmail',
      type: 'task',
      priority: 'high',
      completed: false
    },
    {
      id: '3',
      title: 'Update project documentation',
      description: 'Add new features to project wiki',
      time: '02:00 PM',
      date: '2024-01-20',
      app: 'Notion',
      type: 'task',
      priority: 'medium',
      completed: true
    },
    {
      id: '4',
      title: 'WhatsApp group discussion',
      description: 'Marketing team planning session',
      time: '03:30 PM',
      date: '2024-01-20',
      app: 'WhatsApp',
      type: 'message',
      priority: 'low'
    },
    {
      id: '5',
      title: 'Client presentation',
      description: 'Present Q1 results to stakeholders',
      time: '04:00 PM',
      date: '2024-01-20',
      app: 'Zoom',
      type: 'meeting',
      priority: 'high',
      participants: ['Client Team', 'CEO', 'Product Manager']
    }
  ];

  const getAppIcon = (app: string) => {
    switch (app) {
      case 'WhatsApp': return <MessageSquare className="w-4 h-4" />;
      case 'Gmail': return <Mail className="w-4 h-4" />;
      case 'Zoom': return <Video className="w-4 h-4" />;
      case 'Notion': return <FileText className="w-4 h-4" />;
      case 'Calendar': return <Calendar className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getAppColor = (app: string) => {
    switch (app) {
      case 'WhatsApp': return 'from-green-600 to-green-800';
      case 'Gmail': return 'from-red-600 to-red-800';
      case 'Zoom': return 'from-blue-600 to-blue-800';
      case 'Notion': return 'from-gray-600 to-gray-800';
      case 'Calendar': return 'from-purple-600 to-purple-800';
      default: return 'from-red-600 to-red-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

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
            Timeline View
          </h1>
          <p className="text-red-400 font-rajdhani text-lg">
            {selectedDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-2">
          {['day', 'week', 'month'].map((mode) => (
            <motion.button
              key={mode}
              onClick={() => setViewMode(mode as any)}
              className={`px-4 py-2 rounded-lg font-rajdhani font-bold text-sm transition-all duration-300 ${
                viewMode === mode
                  ? 'bg-red-600 text-white'
                  : 'bg-black/30 border border-red-500/30 text-red-400 hover:border-red-500/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {mode.toUpperCase()}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Date Navigation */}
      <motion.div
        className="flex items-center justify-between mb-6 bg-black/20 border border-red-500/20 rounded-xl p-4 backdrop-blur-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.button
          className="w-10 h-10 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-600/30 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const newDate = new Date(selectedDate);
            newDate.setDate(newDate.getDate() - 1);
            setSelectedDate(newDate);
          }}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        <div className="text-center">
          <motion.h2
            className="text-xl font-orbitron font-bold text-white"
            key={selectedDate.toDateString()}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {selectedDate.toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric',
              year: 'numeric'
            })}
          </motion.h2>
          <p className="text-red-400 font-rajdhani text-sm">
            {events.length} events scheduled
          </p>
        </div>

        <motion.button
          className="w-10 h-10 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-600/30 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const newDate = new Date(selectedDate);
            newDate.setDate(newDate.getDate() + 1);
            setSelectedDate(newDate);
          }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Timeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Time Slots */}
        <motion.div
          className="lg:col-span-2 space-y-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-lg font-orbitron font-bold text-white mb-4">Time Slots</h3>
          {timeSlots.map((time, index) => (
            <motion.div
              key={time}
              className="flex items-center space-x-3 p-3 bg-black/20 border border-red-500/10 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
            >
              <Clock className="w-4 h-4 text-red-400" />
              <span className="font-rajdhani text-white">{time}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Events Timeline */}
        <motion.div
          className="lg:col-span-10"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/50 via-red-500/30 to-transparent" />

            {/* Events */}
            <div className="space-y-6">
              <AnimatePresence>
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="relative flex items-start space-x-6"
                    initial={{ opacity: 0, x: 20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.9 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Timeline Node */}
                    <motion.div
                      className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center border-2 border-red-500/50"
                      style={{
                        background: `linear-gradient(135deg, ${getAppColor(event.app).split(' ')[1]} 0%, ${getAppColor(event.app).split(' ')[3]} 100%)`
                      }}
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(255, 0, 0, 0.3)',
                          '0 0 40px rgba(255, 0, 0, 0.6)',
                          '0 0 20px rgba(255, 0, 0, 0.3)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {getAppIcon(event.app)}
                      
                      {/* Priority indicator */}
                      <div className={`absolute -top-1 -right-1 w-3 h-3 ${getPriorityColor(event.priority)} rounded-full border border-black`} />
                    </motion.div>

                    {/* Event Card */}
                    <motion.div
                      className="flex-1 bg-black/30 border border-red-500/20 rounded-xl p-6 backdrop-blur-xl relative overflow-hidden"
                      whileHover={{
                        borderColor: 'rgba(255, 0, 0, 0.4)',
                        boxShadow: '0 0 30px rgba(255, 0, 0, 0.2)'
                      }}
                    >
                      {/* Background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${getAppColor(event.app)} opacity-5`} />
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-orbitron font-bold text-white mb-1">
                              {event.title}
                            </h3>
                            <p className="text-red-400 font-rajdhani text-sm">
                              {event.description}
                            </p>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <span className="text-white font-rajdhani font-bold">
                              {event.time}
                            </span>
                            {event.completed && (
                              <motion.div
                                className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 500 }}
                              >
                                <motion.div
                                  className="w-2 h-2 bg-white rounded-full"
                                  animate={{
                                    scale: [1, 1.2, 1]
                                  }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                              </motion.div>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getAppColor(event.app)}`} />
                              <span className="text-red-400 font-rajdhani text-sm">{event.app}</span>
                            </div>
                            
                            {event.participants && (
                              <div className="flex items-center space-x-2">
                                <Users className="w-4 h-4 text-red-400" />
                                <span className="text-white font-rajdhani text-sm">
                                  {event.participants.length} participants
                                </span>
                              </div>
                            )}
                          </div>

                          <motion.button
                            className="px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-lg text-red-400 font-rajdhani text-sm hover:bg-red-600/30 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Details
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add Event Button */}
      <motion.button
        className="fixed bottom-24 lg:bottom-8 right-6 w-14 h-14 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center shadow-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
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
    </div>
  );
};

export default Timeline;