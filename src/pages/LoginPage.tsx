import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Eye, EyeOff, ArrowLeft, Mail, Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Form Field Component
interface FormFieldProps {
  icon: React.ReactNode;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  delay: number;
}

const FormField: React.FC<FormFieldProps> = ({ icon, type, name, placeholder, value, onChange, delay }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400">
        {icon}
      </div>
      <motion.input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-12 pr-4 py-4 bg-black/30 border border-red-500/30 rounded-lg text-white placeholder-red-400/60 font-rajdhani focus:outline-none focus:border-red-500 focus:bg-black/50 transition-all duration-300"
        whileFocus={{
          borderColor: 'rgba(255, 0, 0, 0.8)',
          boxShadow: '0 0 20px rgba(255, 0, 0, 0.2)'
        }}
      />
    </motion.div>
  );
};

// Timeline Background Component
const TimelineBackground: React.FC = () => {
  const apps = [
    { name: 'WhatsApp', task: 'Reply to John', color: '#25D366' },
    { name: 'Gmail', task: 'Review proposal', color: '#EA4335' },
    { name: 'Zoom', task: 'Join call at 3 PM', color: '#2D8CFF' },
    { name: 'Notion', task: 'Update project', color: '#000000' },
    { name: 'SMS', task: 'Send reminder', color: '#007AFF' }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/2 left-0 w-full h-2 transform -translate-y-1/2"
        style={{ perspective: '1000px' }}
      >
        {/* Timeline Line */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent transform -translate-y-1/2"
          animate={{
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Timeline Nodes */}
        {apps.map((app, index) => (
          <motion.div
            key={app.name}
            className="absolute top-1/2 transform -translate-y-1/2"
            style={{
              left: `${20 + index * 15}%`,
              transformStyle: 'preserve-3d'
            }}
            animate={{
              rotateY: [0, 360],
              z: [0, 50, 0]
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: index * 0.5
            }}
          >
            {/* Node */}
            <motion.div
              className="w-4 h-4 bg-red-500 rounded-full relative"
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: [
                  '0 0 10px rgba(255, 0, 0, 0.5)',
                  '0 0 30px rgba(255, 0, 0, 0.8)',
                  '0 0 10px rgba(255, 0, 0, 0.5)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.3
              }}
            />

            {/* Task Preview */}
            <motion.div
              className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black/80 border border-red-500/30 rounded-lg p-2 min-w-32 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-red-400 text-xs font-rajdhani font-bold">{app.name}</div>
              <div className="text-white text-xs font-rajdhani">{app.task}</div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Neural Waves Component
const NeuralWaves: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
          style={{
            top: `${20 + i * 15}%`,
            left: 0
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.8
          }}
        />
      ))}
    </div>
  );
};

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect for login panel
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
    
    // Simulate successful login and redirect to app
    setTimeout(() => {
      navigate('/app');
    }, 1000);
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Google login attempt');
    
    // Simulate successful Google login and redirect to app
    setTimeout(() => {
      navigate('/app');
    }, 1000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-red-900/5" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Futuristic Timeline Background */}
      <TimelineBackground />

      {/* Neural Wave Particles */}
      <NeuralWaves />

      {/* Back Button */}
      <motion.button
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 z-50 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-red-500/30 bg-black/50 backdrop-blur-sm"
          whileHover={{
            borderColor: 'rgba(255, 0, 0, 0.8)',
            boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)'
          }}
        >
          <motion.div
            animate={{ rotate: 0 }}
            whileHover={{ rotate: -180 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowLeft className="w-5 h-5 text-red-400" />
          </motion.div>
          <span className="text-red-400 font-rajdhani">Back</span>
        </motion.div>
      </motion.button>

      {/* Main Login Panel */}
      <div className="flex items-center justify-center min-h-screen p-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ 
            duration: 1, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2 
          }}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d'
          }}
          className="w-full max-w-md"
        >
          {/* Holographic Panel */}
          <motion.div
            className="relative p-8 rounded-2xl border border-red-500/30 bg-black/20 backdrop-blur-xl"
            style={{
              boxShadow: `
                0 0 50px rgba(255, 0, 0, 0.1),
                inset 0 0 50px rgba(255, 0, 0, 0.05),
                0 25px 50px rgba(0, 0, 0, 0.5)
              `
            }}
            whileHover={{
              borderColor: 'rgba(255, 0, 0, 0.5)',
              boxShadow: `
                0 0 80px rgba(255, 0, 0, 0.2),
                inset 0 0 80px rgba(255, 0, 0, 0.1),
                0 25px 50px rgba(0, 0, 0, 0.7)
              `
            }}
          >
            {/* Glowing Corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500" />

            {/* Header */}
            <div className="text-center mb-8">
              <motion.h1
                className="text-3xl font-orbitron font-bold text-white mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Access MemoMate
              </motion.h1>
              <motion.p
                className="text-red-400 font-rajdhani"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Enter the AI Productivity Matrix
              </motion.p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name */}
              <FormField
                icon={<User className="w-5 h-5" />}
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                delay={0.8}
              />

              {/* Last Name */}
              <FormField
                icon={<User className="w-5 h-5" />}
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                delay={0.9}
              />

              {/* Email */}
              <FormField
                icon={<Mail className="w-5 h-5" />}
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                delay={1.0}
              />

              {/* Password */}
              <div className="relative">
                <FormField
                  icon={<Lock className="w-5 h-5" />}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  delay={1.1}
                />
                <motion.button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-400 hover:text-red-300 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </motion.button>
              </div>

              {/* Sign In Button */}
              <motion.button
                type="submit"
                className="w-full py-4 px-6 bg-red-600 hover:bg-red-500 text-white font-orbitron font-bold rounded-lg transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 30px rgba(255, 0, 0, 0.5)'
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Initialize Access</span>
              </motion.button>

              {/* Separator */}
              <motion.div
                className="flex items-center my-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
                <span className="px-4 text-red-400 font-rajdhani text-sm">OR</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
              </motion.div>

              {/* Google Login Button */}
              <motion.button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full py-4 px-6 border border-red-500/50 hover:border-red-500 text-white font-rajdhani rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 relative overflow-hidden"
                whileHover={{ 
                  borderColor: 'rgba(255, 0, 0, 0.8)',
                  boxShadow: '0 0 20px rgba(255, 0, 0, 0.2)'
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="white" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="white" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="white" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="white" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Continue with Google</span>
                <motion.div
                  className="absolute inset-0 bg-red-500/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileTap={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;