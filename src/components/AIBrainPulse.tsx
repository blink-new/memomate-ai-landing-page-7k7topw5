import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface NeuralNode {
  id: number
  y: number
  active: boolean
  pulse: boolean
}

const aiThoughts = [
  'Analyzing...',
  'Syncing Tasks...',
  'Optimizing Schedule...',
  'Processing WhatsApp...',
  'Updating Gmail...',
  'Connecting Zoom...',
  'Syncing Notion...',
  'Learning Patterns...',
  'Enhancing Productivity...',
  'Neural Processing...'
]

export default function AIBrainPulse() {
  const [nodes, setNodes] = useState<NeuralNode[]>([])
  const [currentThought, setCurrentThought] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Initialize neural nodes
    const initialNodes: NeuralNode[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      y: (i * 40) + 50,
      active: Math.random() > 0.5,
      pulse: false
    }))
    setNodes(initialNodes)

    // Animate nodes periodically
    const nodeInterval = setInterval(() => {
      setNodes(prev => prev.map(node => ({
        ...node,
        active: Math.random() > 0.3,
        pulse: Math.random() > 0.7
      })))
    }, 1500)

    // Cycle through AI thoughts
    const thoughtInterval = setInterval(() => {
      setCurrentThought(prev => (prev + 1) % aiThoughts.length)
    }, 2000)

    return () => {
      clearInterval(nodeInterval)
      clearInterval(thoughtInterval)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Main Neural Strip */}
      <motion.div
        className="relative w-4 h-[800px] bg-gradient-to-b from-neural-red/20 via-neural-red/40 to-neural-red/20 rounded-full"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        onMouseMove={handleMouseMove}
      >
        {/* Neural Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className={`
              absolute w-3 h-3 rounded-full left-1/2 transform -translate-x-1/2
              transition-all duration-500
              ${node.active ? 'bg-neural-red neural-glow' : 'bg-neural-red/30'}
              ${node.pulse ? 'neural-pulse' : ''}
            `}
            style={{ top: node.y }}
            animate={{
              scale: node.active ? [1, 1.5, 1] : 1,
              x: Math.sin((mousePosition.y + node.y) * 0.01) * 10
            }}
            transition={{ duration: 0.5 }}
          />
        ))}

        {/* Data Flow Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-transparent via-neural-red to-transparent"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 900, opacity: [0, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "linear"
              }}
              style={{ left: '50%', transform: 'translateX(-50%)' }}
            />
          ))}
        </div>

        {/* Connection Lines to Floating Tiles */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {nodes.filter(node => node.active).slice(0, 3).map((node, i) => (
            <motion.line
              key={node.id}
              x1="50%"
              y1={node.y}
              x2={200 + (i * 150)}
              y2={node.y + (i * 50)}
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              opacity="0.6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: i * 0.2 }}
            />
          ))}
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff0000" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ff0000" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* AI Thought Display */}
      <motion.div
        className="absolute -right-64 top-1/2 transform -translate-y-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="bg-neural-dark/80 backdrop-blur-sm border border-neural-red/30 rounded-lg p-4 min-w-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentThought}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-neural-red font-orbitron text-sm font-medium"
            >
              {aiThoughts[currentThought]}
            </motion.div>
          </AnimatePresence>
          
          {/* Typing indicator */}
          <div className="flex space-x-1 mt-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-neural-red rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating App Integration Tiles */}
      <div className="absolute inset-0 pointer-events-none">
        {['WhatsApp', 'Gmail', 'Zoom', 'Notion', 'Slack'].map((app, i) => (
          <motion.div
            key={app}
            className="absolute bg-neural-dark/60 backdrop-blur-sm border border-neural-red/20 rounded-lg p-3 pointer-events-auto cursor-pointer hover:border-neural-red/50 transition-all duration-300"
            style={{
              left: 300 + (i * 120),
              top: 200 + (Math.sin(i) * 100),
            }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 1, 
              delay: 1.5 + (i * 0.2),
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <div className="text-neural-red font-rajdhani font-medium text-sm">
              {app}
            </div>
            <div className="w-8 h-8 bg-neural-red/20 rounded mt-1" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}