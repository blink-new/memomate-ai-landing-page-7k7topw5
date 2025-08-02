import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Mic, 
  MicOff, 
  Bot, 
  User, 
  Zap,
  MessageSquare,
  Volume2,
  VolumeX
} from 'lucide-react';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface AIChatProps {
  user: User;
}

const AIChat: React.FC<AIChatProps> = ({ user }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: `Hello ${user.firstName}! I'm MemoBot, your AI productivity assistant. I can help you manage tasks, schedule meetings, translate messages, and sync across all your apps. What would you like to do today?`,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isAITyping, setIsAITyping] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('remind') || lowerInput.includes('reminder')) {
      return "I'll set up a reminder for you! What would you like to be reminded about and when?";
    } else if (lowerInput.includes('schedule') || lowerInput.includes('meeting')) {
      return "I can help you schedule a meeting. I'll check your calendar and suggest available times. Which app would you like me to use - Zoom, Google Meet, or Teams?";
    } else if (lowerInput.includes('translate')) {
      return "I can translate messages across all your apps. What language would you like me to translate to/from?";
    } else if (lowerInput.includes('task') || lowerInput.includes('todo')) {
      return "I'll help you manage your tasks! I can create, update, or sync tasks across WhatsApp, Notion, Gmail, and other apps. What task would you like to add?";
    } else if (lowerInput.includes('sync')) {
      return "I'm constantly syncing your data across all platforms. Currently monitoring: WhatsApp (3 new), Gmail (2 pending), Zoom (1 upcoming), Notion (5 updates). Everything is up to date!";
    } else {
      return "I understand! I'm analyzing your request and will help you optimize your productivity. I can assist with task management, scheduling, translations, and app synchronization. What specific action would you like me to take?";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsAITyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsAITyping(false);
    }, 1500);
  };

  const handleVoiceToggle = () => {
    setIsRecording(!isRecording);
    // Voice recording logic would go here
  };

  const quickCommands = [
    { label: '/remind me', description: 'Set a reminder' },
    { label: '/schedule call', description: 'Schedule a meeting' },
    { label: '/translate', description: 'Translate text' },
    { label: '/sync apps', description: 'Sync all platforms' },
  ];

  return (
    <div className="min-h-screen flex flex-col p-4 lg:p-8 pt-20 lg:pt-8">
      {/* Header */}
      <motion.div
        className="flex items-center justify-between mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-4">
          <motion.div
            className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center relative overflow-hidden"
            animate={{
              boxShadow: [
                '0 0 20px rgba(255, 0, 0, 0.5)',
                '0 0 40px rgba(255, 0, 0, 0.8)',
                '0 0 20px rgba(255, 0, 0, 0.5)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Bot className="w-6 h-6 text-white" />
            
            {/* AI pulse */}
            <motion.div
              className="absolute inset-0 bg-red-500"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <div>
            <h1 className="text-2xl font-orbitron font-bold text-white">MemoBot AI</h1>
            <p className="text-red-400 font-rajdhani">Your Productivity Assistant</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <motion.button
            onClick={() => setVoiceEnabled(!voiceEnabled)}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              voiceEnabled 
                ? 'bg-red-600 text-white' 
                : 'bg-black/30 border border-red-500/30 text-red-400'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {voiceEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </motion.button>
        </div>
      </motion.div>

      {/* Quick Commands */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="text-red-400 font-rajdhani text-sm mb-3">Quick Commands:</p>
        <div className="flex flex-wrap gap-2">
          {quickCommands.map((command, index) => (
            <motion.button
              key={command.label}
              onClick={() => setInputValue(command.label)}
              className="px-3 py-2 bg-black/30 border border-red-500/20 rounded-lg text-red-400 font-rajdhani text-sm hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {command.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Messages Container */}
      <motion.div
        className="flex-1 bg-black/20 border border-red-500/20 rounded-xl p-4 lg:p-6 backdrop-blur-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          boxShadow: '0 0 30px rgba(255, 0, 0, 0.1)'
        }}
      >
        <div className="h-full overflow-y-auto space-y-4 pr-2">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <div className={`flex items-start space-x-3 max-w-[80%] ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  {/* Avatar */}
                  <motion.div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' 
                        ? 'bg-gradient-to-br from-blue-600 to-blue-800' 
                        : 'bg-red-600'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {message.type === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </motion.div>

                  {/* Message Bubble */}
                  <motion.div
                    className={`px-4 py-3 rounded-xl relative ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-black/40 border border-red-500/20 text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    style={{
                      boxShadow: message.type === 'ai' 
                        ? '0 0 20px rgba(255, 0, 0, 0.1)' 
                        : '0 0 20px rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    <p className="font-rajdhani">{message.content}</p>
                    <p className={`text-xs mt-2 ${
                      message.type === 'user' ? 'text-blue-200' : 'text-red-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>

                    {/* Message glow effect for AI */}
                    {message.type === 'ai' && (
                      <motion.div
                        className="absolute inset-0 bg-red-500/10 rounded-xl"
                        animate={{
                          opacity: [0, 0.3, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* AI Typing Indicator */}
          <AnimatePresence>
            {isAITyping && (
              <motion.div
                className="flex justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-black/40 border border-red-500/20 px-4 py-3 rounded-xl">
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-red-400 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={messagesEndRef} />
        </div>
      </motion.div>

      {/* Input Area */}
      <motion.div
        className="mt-6 flex items-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {/* Voice Button */}
        <motion.button
          onClick={handleVoiceToggle}
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isRecording 
              ? 'bg-red-600 text-white' 
              : 'bg-black/30 border border-red-500/30 text-red-400 hover:border-red-500/50'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            boxShadow: isRecording ? '0 0 30px rgba(255, 0, 0, 0.5)' : 'none'
          }}
        >
          {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        </motion.button>

        {/* Input Field */}
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask MemoBot anything... (try /remind me or /schedule call)"
            className="w-full px-4 py-3 bg-black/30 border border-red-500/30 rounded-xl text-white placeholder-red-400/60 font-rajdhani focus:outline-none focus:border-red-500 focus:bg-black/50 transition-all duration-300"
            style={{
              boxShadow: '0 0 20px rgba(255, 0, 0, 0.1)'
            }}
          />
          
          {/* Input glow effect */}
          <motion.div
            className="absolute inset-0 border border-red-500/50 rounded-xl opacity-0 pointer-events-none"
            whileFocus={{ opacity: 1 }}
            style={{
              boxShadow: '0 0 30px rgba(255, 0, 0, 0.3)'
            }}
          />
        </div>

        {/* Send Button */}
        <motion.button
          onClick={handleSendMessage}
          disabled={!inputValue.trim()}
          className="w-12 h-12 bg-red-600 hover:bg-red-500 disabled:bg-red-600/50 disabled:cursor-not-allowed rounded-xl flex items-center justify-center text-white transition-all duration-300"
          whileHover={{ scale: inputValue.trim() ? 1.1 : 1 }}
          whileTap={{ scale: inputValue.trim() ? 0.95 : 1 }}
          style={{
            boxShadow: inputValue.trim() ? '0 0 30px rgba(255, 0, 0, 0.5)' : 'none'
          }}
        >
          <Send className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AIChat;