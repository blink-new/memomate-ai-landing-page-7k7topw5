import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Plus, 
  Share2, 
  UserPlus, 
  Crown, 
  CheckCircle,
  Clock,
  AlertCircle,
  Search,
  Filter,
  MoreVertical,
  MessageSquare,
  Calendar
} from 'lucide-react';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

interface TeamMember {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'owner' | 'admin' | 'member';
  status: 'online' | 'offline' | 'busy';
  tasksAssigned: number;
  tasksCompleted: number;
  joinedDate: string;
}

interface SharedTask {
  id: string;
  title: string;
  description: string;
  assignedTo: string[];
  createdBy: string;
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  progress: number;
  comments: number;
}

interface TaskSharingProps {
  user: User;
}

const TaskSharing: React.FC<TaskSharingProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<'team' | 'tasks'>('team');
  const [searchQuery, setSearchQuery] = useState('');
  const [showInviteModal, setShowInviteModal] = useState(false);

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@company.com',
      avatar: '/api/placeholder/40/40',
      role: 'admin',
      status: 'online',
      tasksAssigned: 8,
      tasksCompleted: 6,
      joinedDate: '2024-01-15'
    },
    {
      id: '2',
      name: 'Mike Chen',
      email: 'mike@company.com',
      avatar: '/api/placeholder/40/40',
      role: 'member',
      status: 'busy',
      tasksAssigned: 5,
      tasksCompleted: 4,
      joinedDate: '2024-01-10'
    },
    {
      id: '3',
      name: 'Emily Davis',
      email: 'emily@company.com',
      avatar: '/api/placeholder/40/40',
      role: 'member',
      status: 'offline',
      tasksAssigned: 3,
      tasksCompleted: 3,
      joinedDate: '2024-01-08'
    }
  ];

  const sharedTasks: SharedTask[] = [
    {
      id: '1',
      title: 'Design System Update',
      description: 'Update the design system components for the new brand guidelines',
      assignedTo: ['1', '2'],
      createdBy: user.firstName,
      status: 'in-progress',
      priority: 'high',
      dueDate: '2024-01-25',
      progress: 65,
      comments: 3
    },
    {
      id: '2',
      title: 'API Documentation',
      description: 'Complete the API documentation for the new endpoints',
      assignedTo: ['2'],
      createdBy: user.firstName,
      status: 'pending',
      priority: 'medium',
      dueDate: '2024-01-28',
      progress: 20,
      comments: 1
    },
    {
      id: '3',
      title: 'User Testing Session',
      description: 'Conduct user testing for the new dashboard interface',
      assignedTo: ['1', '3'],
      createdBy: user.firstName,
      status: 'completed',
      priority: 'high',
      dueDate: '2024-01-20',
      progress: 100,
      comments: 5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'busy': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-500';
      case 'pending': return 'bg-yellow-500';
      case 'in-progress': return 'bg-blue-500';
      case 'completed': return 'bg-green-500';
      case 'overdue': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'low': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'owner': return <Crown className="w-4 h-4 text-yellow-400" />;
      case 'admin': return <Users className="w-4 h-4 text-red-400" />;
      default: return null;
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
            Task Sharing
          </h1>
          <p className="text-red-400 font-rajdhani text-lg">
            Collaborate with your team and manage shared tasks
          </p>
        </div>

        <motion.button
          onClick={() => setShowInviteModal(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-500 rounded-xl text-white font-rajdhani font-bold transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            boxShadow: '0 0 30px rgba(255, 0, 0, 0.3)'
          }}
        >
          <UserPlus className="w-5 h-5" />
          <span>Invite Member</span>
        </motion.button>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        className="flex items-center space-x-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {[
          { id: 'team', label: 'Team Members', count: teamMembers.length },
          { id: 'tasks', label: 'Shared Tasks', count: sharedTasks.length }
        ].map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-rajdhani font-bold transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-red-600 text-white'
                : 'bg-black/30 border border-red-500/30 text-red-400 hover:border-red-500/50'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{tab.label}</span>
            <span className={`px-2 py-1 rounded-full text-xs ${
              activeTab === tab.id ? 'bg-white/20' : 'bg-red-500/20'
            }`}>
              {tab.count}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        className="flex items-center space-x-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-400" />
          <input
            type="text"
            placeholder={`Search ${activeTab === 'team' ? 'team members' : 'tasks'}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-black/30 border border-red-500/30 rounded-xl text-white placeholder-red-400/60 font-rajdhani focus:outline-none focus:border-red-500 transition-all duration-300"
          />
        </div>
        
        <motion.button
          className="w-12 h-12 bg-black/30 border border-red-500/30 rounded-xl flex items-center justify-center text-red-400 hover:border-red-500/50 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Filter className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'team' ? (
          <motion.div
            key="team"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-black/30 border border-red-500/20 rounded-xl p-6 backdrop-blur-xl relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(255, 0, 0, 0.4)',
                  boxShadow: '0 0 30px rgba(255, 0, 0, 0.2)'
                }}
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent" />
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center text-white font-orbitron font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(member.status)} rounded-full border-2 border-black`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-orbitron font-bold text-white">{member.name}</h3>
                        {getRoleIcon(member.role)}
                      </div>
                      <p className="text-red-400 font-rajdhani text-sm">{member.email}</p>
                    </div>
                    
                    <motion.button
                      className="w-8 h-8 bg-black/30 border border-red-500/30 rounded-lg flex items-center justify-center text-red-400 hover:border-red-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MoreVertical className="w-4 h-4" />
                    </motion.button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-2xl font-orbitron font-bold text-white">{member.tasksAssigned}</p>
                      <p className="text-red-400 font-rajdhani text-xs">Assigned</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-orbitron font-bold text-green-400">{member.tasksCompleted}</p>
                      <p className="text-red-400 font-rajdhani text-xs">Completed</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-rajdhani font-bold ${
                      member.role === 'owner' ? 'bg-yellow-500/20 text-yellow-400' :
                      member.role === 'admin' ? 'bg-red-500/20 text-red-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {member.role.toUpperCase()}
                    </span>
                    
                    <div className="flex items-center space-x-2">
                      <motion.button
                        className="w-8 h-8 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-600/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MessageSquare className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        className="w-8 h-8 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-600/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Share2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="tasks"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {sharedTasks.map((task, index) => (
              <motion.div
                key={task.id}
                className="bg-black/30 border border-red-500/20 rounded-xl p-6 backdrop-blur-xl relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  borderColor: 'rgba(255, 0, 0, 0.4)',
                  boxShadow: '0 0 30px rgba(255, 0, 0, 0.2)'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-orbitron font-bold text-white">{task.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-rajdhani font-bold ${getPriorityColor(task.priority)}`}>
                        {task.priority.toUpperCase()}
                      </span>
                      <div className={`w-3 h-3 ${getStatusColor(task.status)} rounded-full`} />
                    </div>
                    <p className="text-red-400 font-rajdhani mb-4">{task.description}</p>
                  </div>
                  
                  <motion.button
                    className="w-8 h-8 bg-black/30 border border-red-500/30 rounded-lg flex items-center justify-center text-red-400 hover:border-red-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MoreVertical className="w-4 h-4" />
                  </motion.button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-red-400 font-rajdhani text-sm mb-1">Assigned To</p>
                    <div className="flex items-center space-x-2">
                      {task.assignedTo.map((memberId) => {
                        const member = teamMembers.find(m => m.id === memberId);
                        return member ? (
                          <div key={memberId} className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center text-white font-rajdhani text-xs">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-red-400 font-rajdhani text-sm mb-1">Due Date</p>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-red-400" />
                      <span className="text-white font-rajdhani">{task.dueDate}</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-red-400 font-rajdhani text-sm mb-1">Progress</p>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 h-2 bg-black/50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${task.progress}%` }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                        />
                      </div>
                      <span className="text-white font-rajdhani text-sm">{task.progress}%</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-red-400 font-rajdhani text-sm">
                      Created by {task.createdBy}
                    </span>
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="w-4 h-4 text-red-400" />
                      <span className="text-white font-rajdhani text-sm">{task.comments}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {task.status === 'completed' ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : task.status === 'overdue' ? (
                      <AlertCircle className="w-5 h-5 text-red-400" />
                    ) : (
                      <Clock className="w-5 h-5 text-yellow-400" />
                    )}
                    <span className={`font-rajdhani text-sm capitalize ${
                      task.status === 'completed' ? 'text-green-400' :
                      task.status === 'overdue' ? 'text-red-400' :
                      'text-yellow-400'
                    }`}>
                      {task.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Task/Member Button */}
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
      </motion.button>

      {/* Invite Modal */}
      <AnimatePresence>
        {showInviteModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowInviteModal(false)}
          >
            <motion.div
              className="bg-black/90 border border-red-500/30 rounded-xl p-8 max-w-md w-full mx-4"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: '0 0 50px rgba(255, 0, 0, 0.3)'
              }}
            >
              <h3 className="text-2xl font-orbitron font-bold text-white mb-6">Invite Team Member</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-red-400 font-rajdhani text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="colleague@company.com"
                    className="w-full px-4 py-3 bg-black/30 border border-red-500/30 rounded-lg text-white placeholder-red-400/60 font-rajdhani focus:outline-none focus:border-red-500"
                  />
                </div>
                
                <div>
                  <label className="block text-red-400 font-rajdhani text-sm mb-2">Role</label>
                  <select className="w-full px-4 py-3 bg-black/30 border border-red-500/30 rounded-lg text-white font-rajdhani focus:outline-none focus:border-red-500">
                    <option value="member">Member</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-8">
                <motion.button
                  onClick={() => setShowInviteModal(false)}
                  className="flex-1 px-6 py-3 bg-black/30 border border-red-500/30 rounded-lg text-red-400 font-rajdhani font-bold hover:border-red-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-500 rounded-lg text-white font-rajdhani font-bold transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Invite
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TaskSharing;