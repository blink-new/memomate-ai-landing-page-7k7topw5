import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const appIntegrations = [
  { 
    name: 'WhatsApp', 
    icon: '💬', 
    color: '#25D366',
    description: 'Chat sync & automation'
  },
  { 
    name: 'Gmail', 
    icon: '📧', 
    color: '#EA4335',
    description: 'Email management & AI replies'
  },
  { 
    name: 'Google Calendar', 
    icon: '📅', 
    color: '#4285F4',
    description: 'Smart scheduling & reminders'
  },
  { 
    name: 'Notion', 
    icon: '📝', 
    color: '#000000',
    description: 'Knowledge base integration'
  },
  { 
    name: 'Zoom', 
    icon: '🎥', 
    color: '#2D8CFF',
    description: 'Meeting transcripts & summaries'
  },
  { 
    name: 'SMS', 
    icon: '💬', 
    color: '#34C759',
    description: 'Text message automation'
  },
  { 
    name: 'Slack', 
    icon: '💼', 
    color: '#4A154B',
    description: 'Team communication hub'
  }
]

const codeSnippets = [
  "const memomate = new MemoMateAgent();",
  "memomate.sync(['whatsapp', 'gmail', 'calendar']);",
  "// Analyzing WhatsApp conversation...",
  "// Task detected: 'Team meeting at 4PM'",
  "memomate.createCalendarEvent({",
  "  title: 'Team Meeting',",
  "  time: '4:00 PM',",
  "  participants: ['john@company.com']",
  "});",
  "// ✅ Event created in Google Calendar",
  "// ✅ Reminder sent via SMS",
  "// ✅ Slack notification posted"
]

export default function AITechSection() {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0)
  const [displayedCode, setDisplayedCode] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const typeCode = async () => {
      const currentCode = codeSnippets[currentCodeIndex]
      setDisplayedCode('')
      setIsTyping(true)
      
      for (let i = 0; i <= currentCode.length; i++) {
        setDisplayedCode(currentCode.slice(0, i))
        await new Promise(resolve => setTimeout(resolve, 50))
      }
      
      setIsTyping(false)
      
      setTimeout(() => {
        setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length)
      }, 2000)
    }

    typeCode()
  }, [currentCodeIndex])

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-orbitron font-bold text-white mb-4">
          Seamless <span className="text-neural-red">Integrations</span>
        </h2>
        <p className="text-xl text-gray-300 font-rajdhani max-w-2xl mx-auto">
          Connect all your favorite apps and platforms in one unified AI workspace
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Floating Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* 3D Code Panel */}
            <motion.div
              className="relative bg-neural-dark/60 backdrop-blur-sm border border-neural-red/30 rounded-xl p-6 neural-glow"
              animate={{ 
                rotateY: [0, 2, 0, -2, 0],
                rotateX: [0, 1, 0, -1, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Editor Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-neural-red/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-neural-red rounded-full neural-pulse" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="text-neural-red font-orbitron text-sm">MemoMate.AI</div>
              </div>

              {/* Code Content */}
              <div className="font-mono text-sm space-y-2 min-h-[200px]">
                <div className="text-gray-400">// AI Integration Engine</div>
                <div className="text-white">
                  <span className="text-neural-red">{displayedCode}</span>
                  {isTyping && (
                    <motion.span
                      className="text-neural-red"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      |
                    </motion.span>
                  )}
                </div>
                
                {/* Status Indicators */}
                <div className="mt-6 space-y-2">
                  <motion.div
                    className="flex items-center space-x-2 text-green-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-sm">AI Processing: Active</span>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center space-x-2 text-neural-red"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <div className="w-2 h-2 bg-neural-red rounded-full" />
                    <span className="text-sm">Cross-Platform: Syncing</span>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center space-x-2 text-blue-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-sm">Integrations: {appIntegrations.length} Connected</span>
                  </motion.div>
                </div>
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-neural-red rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Matrix-style Background */}
            <div className="absolute inset-0 -z-10">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-px bg-gradient-to-b from-neural-red/50 to-transparent"
                  style={{
                    left: `${i * 10}%`,
                    height: '100%',
                  }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: App Integration Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-orbitron font-bold text-white mb-8">
              Connected <span className="text-neural-red">Apps</span>
            </h3>

            {/* App Integration Grid */}
            <div className="grid grid-cols-2 gap-6">
              {appIntegrations.map((app, index) => (
                <motion.div
                  key={app.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="relative group cursor-pointer"
                >
                  {/* 3D App Panel */}
                  <div className="bg-neural-dark/40 backdrop-blur-sm border border-neural-red/20 rounded-xl p-4 transition-all duration-300 group-hover:border-neural-red/50 group-hover:neural-glow">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{app.icon}</div>
                      <div className="flex-1">
                        <div className="font-orbitron font-bold text-white text-sm">
                          {app.name}
                        </div>
                        <div className="text-xs text-gray-400 font-rajdhani">
                          {app.description}
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-green-400 rounded-full neural-pulse" />
                    </div>

                    {/* Connection Status */}
                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-xs text-neural-red font-rajdhani">
                        ✓ Connected
                      </div>
                      <div className="text-xs text-gray-400 font-rajdhani">
                        Real-time sync
                      </div>
                    </div>

                    {/* Pulse Animation */}
                    <motion.div
                      className="absolute inset-0 border border-neural-red/30 rounded-xl"
                      animate={{
                        scale: [1, 1.02, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </div>

                  {/* Connection Line to next app */}
                  {index < appIntegrations.length - 1 && index % 2 === 1 && (
                    <motion.div
                      className="absolute top-full left-1/2 w-px h-6 bg-gradient-to-b from-neural-red/50 to-transparent transform -translate-x-1/2"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Integration Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-neural-dark/30 backdrop-blur-sm border border-neural-red/20 rounded-xl p-6 mt-8"
            >
              <h4 className="font-orbitron font-bold text-neural-red mb-4">
                Integration Performance
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Sync Speed', value: '<2s', icon: '⚡' },
                  { label: 'Success Rate', value: '99.9%', icon: '🎯' },
                  { label: 'Data Security', value: 'AES-256', icon: '🔒' },
                  { label: 'Platforms', value: `${appIntegrations.length}+`, icon: '🔗' }
                ].map((stat, i) => (
                  <motion.div 
                    key={stat.label} 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + (i * 0.1) }}
                  >
                    <div className="text-lg">{stat.icon}</div>
                    <div className="text-neural-red font-orbitron font-bold text-lg">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm font-rajdhani">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Coming Soon Apps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <h5 className="text-neural-red font-orbitron font-bold text-sm mb-3">
                Coming Soon
              </h5>
              <div className="flex justify-center space-x-4 text-2xl opacity-50">
                <span>📊</span> {/* Excel */}
                <span>🎵</span> {/* Spotify */}
                <span>📱</span> {/* Instagram */}
                <span>💰</span> {/* PayPal */}
                <span>🛒</span> {/* Shopify */}
              </div>
              <p className="text-gray-400 text-xs font-rajdhani mt-2">
                More integrations added weekly
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 neural-grid-bg opacity-5" />
    </section>
  )
}