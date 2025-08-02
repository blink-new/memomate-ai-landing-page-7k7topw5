import { motion } from 'framer-motion'
import { Button } from './ui/button'
import CodeInterface3D from './CodeInterface3D'

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
      {/* Neural Grid Background */}
      <div className="absolute inset-0 neural-grid-bg opacity-20 -z-10" />
      
      {/* Container with proper responsive layout */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-0">
          {/* Left Side - Content & Information */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-1 text-center lg:text-left z-10">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-orbitron font-bold text-white leading-tight">
                Your{' '}
                <span className="glitch-text neural-text-glow" data-text="Intelligent">
                  Intelligent
                </span>
                <br />
                <span className="text-neural-red">Productivity</span>{' '}
                <span className="text-white">OS</span>
              </h1>
              
              <p className="text-base lg:text-lg text-gray-300 font-rajdhani max-w-xl leading-relaxed mx-auto lg:mx-0">
                Powered by AI. Synced to your life. From chats to calendar — all in one 
                futuristic interface that adapts to your workflow.
              </p>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0">
                {[
                  { icon: '🔗', title: 'Cross-Platform Sync', desc: 'WhatsApp, Gmail, Zoom, Notion' },
                  { icon: '🧠', title: 'AI Task Extraction', desc: 'Smart automation & insights' },
                  { icon: '🌍', title: 'Multilingual Support', desc: 'Real-time translation' },
                  { icon: '🔒', title: 'AES-256 Security', desc: 'Enterprise-grade encryption' }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="bg-neural-dark/40 backdrop-blur-sm border border-neural-red/20 rounded-lg p-3 hover:border-neural-red/40 transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 + (i * 0.1) }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-lg flex-shrink-0">{feature.icon}</div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-neural-red font-orbitron font-bold text-xs lg:text-sm truncate">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 font-rajdhani text-xs mt-1 line-clamp-2">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
            >
              <Button 
                className="bg-neural-red hover:bg-neural-red/80 text-black font-orbitron font-bold px-6 py-3 text-base neural-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Get Started Free
              </Button>
              
              <Button 
                variant="outline"
                className="border-neural-red text-neural-red hover:bg-neural-red/10 font-orbitron font-bold px-6 py-3 text-base transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-6 text-center justify-center lg:justify-start pt-6"
            >
              {[
                { value: '10+', label: 'Integrations' },
                { value: '99.9%', label: 'Uptime' },
                { value: '24/7', label: 'AI Support' }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="space-y-1 flex-1 sm:flex-none"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-xl lg:text-2xl font-orbitron font-bold text-neural-red neural-glow">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-rajdhani">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="pt-6"
            >
              <div className="text-neural-red/60 font-rajdhani text-sm mb-3 text-center lg:text-left">
                Powered by Advanced AI Technology
              </div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {['OpenAI', 'LangChain', 'Firebase', 'MongoDB', 'Zapier'].map((tech, i) => (
                  <motion.div
                    key={tech}
                    className="bg-neural-red/10 border border-neural-red/20 rounded-full px-3 py-1 text-neural-red font-rajdhani text-xs"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.8 + (i * 0.1) }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 0, 0, 0.2)' }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - 3D Code Interface Centerpiece */}
          <div className="flex justify-center order-2 lg:order-2 relative">
            <div className="w-full max-w-2xl relative z-10">
              <CodeInterface3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}