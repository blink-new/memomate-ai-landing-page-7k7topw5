import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Feature {
  id: number
  title: string
  description: string
  icon: string
  animation: string
  apps?: string[]
  color: string
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Cross-App Chat Aggregation',
    description: 'Unify all your conversations from WhatsApp, Gmail, Zoom, and Slack into one intelligent interface.',
    icon: '💬',
    animation: 'chat-pulse',
    apps: ['WhatsApp', 'Gmail', 'Zoom', 'Slack'],
    color: '#ff0000'
  },
  {
    id: 2,
    title: 'AI-Based Task Extraction',
    description: 'Automatically extract actionable tasks from your messages and documents using advanced AI.',
    icon: '🧠',
    animation: 'brain-process',
    color: '#ff3333'
  },
  {
    id: 3,
    title: 'Unified Calendar & Reminders',
    description: 'Seamlessly sync your calendar events and reminders across all platforms in real-time.',
    icon: '📅',
    animation: 'calendar-sync',
    color: '#ff6666'
  },
  {
    id: 4,
    title: 'Multilingual Interface',
    description: 'Switch between languages instantly with real-time translation powered by AI.',
    icon: '🌍',
    animation: 'language-switch',
    color: '#ff9999'
  },
  {
    id: 5,
    title: 'Dual Storage Security',
    description: 'Enterprise-grade AES-256 encryption with both cloud and local storage options.',
    icon: '🔒',
    animation: 'security-lock',
    color: '#ffcccc'
  },
  {
    id: 6,
    title: '1-Click Task Sharing',
    description: 'Share tasks instantly with team members and manage permissions effortlessly.',
    icon: '🔗',
    animation: 'task-share',
    color: '#ff4444'
  }
]

export default function OrbitingFeatures() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2
    })
  }

  const getOrbitPosition = (index: number, total: number, radius: number = 250) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2
    // Responsive radius based on screen size
    const responsiveRadius = window.innerWidth < 640 ? radius * 0.6 : window.innerWidth < 1024 ? radius * 0.8 : radius
    return {
      x: Math.cos(angle) * responsiveRadius,
      y: Math.sin(angle) * responsiveRadius
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 lg:px-8 overflow-hidden max-w-7xl mx-auto">
      {/* Section Title */}
      <motion.div
        className="text-center z-20 mb-16 lg:mb-20"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-white mb-4">
          AI-Powered <span className="text-neural-red">Features</span>
        </h2>
        <p className="text-lg lg:text-xl text-gray-400 font-rajdhani max-w-2xl mx-auto">
          Experience the future of productivity with our intelligent feature matrix
        </p>
      </motion.div>

      {/* Central AI Core Sphere */}
      <div className="relative flex-1 flex items-center justify-center" onMouseMove={handleMouseMove}>
        <motion.div
          className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-radial from-neural-red/40 via-neural-red/20 to-transparent"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          style={{
            boxShadow: '0 0 100px rgba(255, 0, 0, 0.5), inset 0 0 50px rgba(255, 0, 0, 0.3)'
          }}
        >
          {/* Inner Core */}
          <motion.div
            className="absolute inset-4 rounded-full bg-neural-red/60 backdrop-blur-sm"
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Neural Circuits */}
          <svg className="absolute inset-0 w-full h-full">
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i / 8) * 2 * Math.PI
              const x1 = 64 + Math.cos(angle) * 20
              const y1 = 64 + Math.sin(angle) * 20
              const x2 = 64 + Math.cos(angle) * 50
              const y2 = 64 + Math.sin(angle) * 50
              
              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#ff0000"
                  strokeWidth="1"
                  opacity="0.6"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    strokeWidth: [1, 2, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              )
            })}
          </svg>

          {/* Core Label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-orbitron font-bold text-xs sm:text-sm">AI</span>
          </div>
        </motion.div>

        {/* Energy Pulses */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 border border-neural-red/30 rounded-full"
            style={{
              width: 200 + (i * 100),
              height: 200 + (i * 100),
              marginLeft: -(100 + (i * 50)),
              marginTop: -(100 + (i * 50))
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.1, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Orbiting Feature Tiles */}
        {features.map((feature, index) => {
          const position = getOrbitPosition(index, features.length)
          const isHovered = hoveredFeature === feature.id
          const isSelected = selectedFeature === feature.id

          return (
            <motion.div
              key={feature.id}
              className="absolute cursor-pointer"
              style={{
                left: `calc(50% + ${position.x}px)`,
                top: `calc(50% + ${position.y}px)`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 1, 
                delay: index * 0.2,
                y: { 
                  duration: 4 + (index * 0.5), 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 180,
                z: 50
              }}
              onHoverStart={() => setHoveredFeature(feature.id)}
              onHoverEnd={() => setHoveredFeature(null)}
              onClick={() => setSelectedFeature(isSelected ? null : feature.id)}
            >
              {/* Hexagonal Tile */}
              <div 
                className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-neural-dark/80 backdrop-blur-sm border-2 rounded-xl transition-all duration-500"
                style={{
                  borderColor: isHovered ? feature.color : '#ff0000',
                  boxShadow: isHovered ? `0 0 30px ${feature.color}` : '0 0 15px rgba(255, 0, 0, 0.3)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Front Face */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                  <span className="text-xl sm:text-2xl lg:text-3xl">{feature.icon}</span>
                </div>

                {/* Back Face (Animation) */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                  {feature.apps ? (
                    <div className="space-y-1">
                      {feature.apps.slice(0, 2).map((app, i) => (
                        <motion.div
                          key={app}
                          className="text-xs text-neural-red font-rajdhani"
                          animate={{
                            x: [0, 10, 0],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                        >
                          {app}
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <motion.div
                      className="text-neural-red text-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                  )}
                </div>

                {/* Connection Line to Core */}
                {isHovered && (
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-px bg-gradient-to-r from-neural-red to-transparent origin-left"
                    style={{
                      height: '2px',
                      width: Math.sqrt(position.x ** 2 + position.y ** 2),
                      transform: `translate(-50%, -50%) rotate(${Math.atan2(-position.y, -position.x) * 180 / Math.PI}deg)`,
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>

              {/* Feature Label */}
              <motion.div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 lg:mt-4 text-center max-w-24 sm:max-w-32"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isHovered ? 1 : 0.7, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-neural-red font-orbitron font-bold text-xs lg:text-sm text-center leading-tight">
                  {feature.title.split(' ').slice(0, 2).join(' ')}
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Feature Detail Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              className="bg-neural-dark/90 backdrop-blur-sm border border-neural-red/30 rounded-xl p-8 max-w-md mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const feature = features.find(f => f.id === selectedFeature)!
                return (
                  <>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-4xl">{feature.icon}</div>
                      <h3 className="text-2xl font-orbitron font-bold text-neural-red">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 font-rajdhani text-lg leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    {feature.apps && (
                      <div className="space-y-2">
                        <div className="text-neural-red font-orbitron font-bold text-sm">
                          Supported Platforms:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {feature.apps.map((app) => (
                            <div
                              key={app}
                              className="bg-neural-red/20 border border-neural-red/30 rounded-full px-3 py-1 text-neural-red font-rajdhani text-xs"
                            >
                              {app}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neural-red/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  )
}