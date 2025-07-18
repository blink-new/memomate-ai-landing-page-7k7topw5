import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface CodeLine {
  id: number
  text: string
  type: 'code' | 'comment' | 'log' | 'api'
  highlight?: boolean
}

const codeSequence = [
  { text: "const agent = new MemoMateAgent();", type: 'code' as const },
  { text: "// Initializing AI productivity assistant", type: 'comment' as const },
  { text: "agent.autoSync('whatsapp', 'gmail', 'calendar');", type: 'code' as const, highlight: true },
  { text: "agent.extractTasks().notifyUser();", type: 'code' as const },
  { text: "", type: 'code' as const },
  { text: "POST /api/whatsapp/sync", type: 'api' as const },
  { text: "POST /api/calendar/create-task", type: 'api' as const },
  { text: "POST /api/gmail/auto-reply", type: 'api' as const },
  { text: "", type: 'code' as const },
  { text: "✓ Task extracted: Team Meeting at 4PM", type: 'log' as const },
  { text: "✓ Auto-reply sent to John via Gmail", type: 'log' as const },
  { text: "✓ Reminder set in Google Calendar", type: 'log' as const },
]

const integrationApps = [
  { name: 'WhatsApp', color: '#25D366' },
  { name: 'Gmail', color: '#EA4335' },
  { name: 'Zoom', color: '#2D8CFF' },
  { name: 'Notion', color: '#000000' },
  { name: 'Slack', color: '#4A154B' },
]

export default function CodeInterface3D() {
  const [displayedLines, setDisplayedLines] = useState<CodeLine[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [typingText, setTypingText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [hoveredApp, setHoveredApp] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (currentLineIndex >= codeSequence.length) {
      // Reset after completing sequence
      setTimeout(() => {
        setDisplayedLines([])
        setCurrentLineIndex(0)
        setTypingText('')
      }, 3000)
      return
    }

    const currentLine = codeSequence[currentLineIndex]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex <= currentLine.text.length) {
        setTypingText(currentLine.text.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        
        // Add completed line to display
        setDisplayedLines(prev => [...prev, {
          id: currentLineIndex,
          text: currentLine.text,
          type: currentLine.type,
          highlight: currentLine.highlight
        }])
        
        setTypingText('')
        
        // Move to next line after a brief pause
        setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1)
        }, currentLine.type === 'log' ? 800 : 400)
      }
    }, currentLine.type === 'comment' ? 30 : 50)

    return () => clearInterval(typeInterval)
  }, [currentLineIndex])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2
    })
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[400px] lg:min-h-[500px] py-4" onMouseMove={handleMouseMove}>
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-neural-red/20 to-transparent"
            style={{
              left: `${(i * 7)}%`,
              height: '100%'
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neural-red/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Container with Code Interface and Apps */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 w-full">
        {/* Desktop Left Side - Integration Apps */}
        <div className="hidden lg:flex flex-col gap-4 flex-shrink-0">
          {integrationApps.slice(0, 3).map((app, i) => (
            <motion.div
              key={app.name}
              className="cursor-pointer relative"
              initial={{ opacity: 0, scale: 0, x: -50 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: 0,
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 1, 
                delay: 2 + (i * 0.2),
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              onHoverStart={() => setHoveredApp(app.name)}
              onHoverEnd={() => setHoveredApp(null)}
            >
              <div className="bg-neural-dark/80 backdrop-blur-sm border border-neural-red/30 rounded-lg p-3 min-w-[60px] text-center hover:border-neural-red/60 transition-all duration-300">
                <div 
                  className="w-5 h-5 rounded mx-auto mb-2"
                  style={{ backgroundColor: app.name === 'Notion' ? '#ffffff' : app.color }}
                />
                <div className="text-neural-red font-rajdhani text-xs font-medium">
                  {app.name}
                </div>
              </div>

              {/* Connection Line to Code Interface */}
              {hoveredApp === app.name && (
                <motion.div
                  className="absolute top-1/2 right-0 w-6 h-px bg-gradient-to-r from-neural-red to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Center - Main 3D Code Interface */}
        <motion.div
          className="relative bg-black/80 backdrop-blur-sm border border-neural-red/30 rounded-xl p-4 lg:p-6 w-full max-w-md lg:max-w-lg h-80 lg:h-96 overflow-hidden flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotateX: 0,
            rotateY: mousePosition.x * 0.005,
            rotateZ: mousePosition.y * 0.002
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            transformStyle: 'preserve-3d',
            boxShadow: '0 0 50px rgba(255, 0, 0, 0.3), inset 0 0 50px rgba(255, 0, 0, 0.1)'
          }}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-neural-red/20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-neural-red rounded-full neural-pulse" />
              <div className="w-3 h-3 bg-neural-red/50 rounded-full" />
              <div className="w-3 h-3 bg-neural-red/30 rounded-full" />
            </div>
            <div className="text-neural-red font-orbitron text-sm font-bold">
              MemoMate AI Terminal
            </div>
            <div className="text-neural-red/60 font-rajdhani text-xs">
              v2.1.0
            </div>
          </div>

          {/* Code Display Area */}
          <div className="font-mono text-xs lg:text-sm h-64 lg:h-80 overflow-hidden">
            {/* Line Numbers */}
            <div className="absolute left-4 lg:left-6 top-12 lg:top-16 text-neural-red/40 text-xs space-y-1">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="h-4 lg:h-5 flex items-center">
                  {String(i + 1).padStart(2, '0')}
                </div>
              ))}
            </div>

            {/* Code Content */}
            <div className="ml-8 lg:ml-12 space-y-1">
              {displayedLines.map((line) => (
                <motion.div
                  key={line.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`h-4 lg:h-5 flex items-center text-xs lg:text-sm ${
                    line.type === 'comment' ? 'text-gray-500' :
                    line.type === 'log' ? 'text-green-400' :
                    line.type === 'api' ? 'text-yellow-400' :
                    'text-white'
                  } ${line.highlight ? 'bg-neural-red/10 px-1 lg:px-2 rounded' : ''}`}
                >
                  {line.type === 'code' && line.highlight && (
                    <motion.div
                      className="absolute left-0 w-1 h-5 bg-neural-red"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className="whitespace-pre">{line.text}</span>
                  {line.highlight && hoveredApp && (
                    <motion.div
                      className="ml-2 text-neural-red text-xs"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      → {hoveredApp}
                    </motion.div>
                  )}
                </motion.div>
              ))}
              
              {/* Current typing line */}
              {typingText && (
                <div className={`h-4 lg:h-5 flex items-center text-xs lg:text-sm ${
                  codeSequence[currentLineIndex]?.type === 'comment' ? 'text-gray-500' :
                  codeSequence[currentLineIndex]?.type === 'log' ? 'text-green-400' :
                  codeSequence[currentLineIndex]?.type === 'api' ? 'text-yellow-400' :
                  'text-white'
                }`}>
                  <span className="whitespace-pre truncate">{typingText}</span>
                  {showCursor && (
                    <motion.span
                      className="ml-1 w-1 lg:w-2 h-3 lg:h-4 bg-neural-red flex-shrink-0"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Holographic Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-neural-red/5 via-transparent to-neural-red/5 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-neural-red/5 via-transparent to-neural-red/5 pointer-events-none" />
        </motion.div>

        {/* Desktop Right Side - Integration Apps */}
        <div className="hidden lg:flex flex-col gap-4 flex-shrink-0">
          {integrationApps.slice(3).map((app, i) => (
            <motion.div
              key={app.name}
              className="cursor-pointer relative"
              initial={{ opacity: 0, scale: 0, x: 50 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: 0,
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 1, 
                delay: 2.6 + (i * 0.2),
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              onHoverStart={() => setHoveredApp(app.name)}
              onHoverEnd={() => setHoveredApp(null)}
            >
              <div className="bg-neural-dark/80 backdrop-blur-sm border border-neural-red/30 rounded-lg p-3 min-w-[60px] text-center hover:border-neural-red/60 transition-all duration-300">
                <div 
                  className="w-5 h-5 rounded mx-auto mb-2"
                  style={{ backgroundColor: app.name === 'Notion' ? '#ffffff' : app.color }}
                />
                <div className="text-neural-red font-rajdhani text-xs font-medium">
                  {app.name}
                </div>
              </div>

              {/* Connection Line to Code Interface */}
              {hoveredApp === app.name && (
                <motion.div
                  className="absolute top-1/2 left-0 w-6 h-px bg-gradient-to-l from-neural-red to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile - Integration Apps Row */}
      <div className="lg:hidden mt-6 flex flex-wrap gap-2 justify-center max-w-xs mx-auto">
        {integrationApps.map((app, i) => (
          <motion.div
            key={app.name}
            className="cursor-pointer"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0
            }}
            transition={{ 
              duration: 0.6, 
              delay: 2 + (i * 0.1)
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            onHoverStart={() => setHoveredApp(app.name)}
            onHoverEnd={() => setHoveredApp(null)}
          >
            <div className="bg-neural-dark/80 backdrop-blur-sm border border-neural-red/30 rounded-lg p-2 min-w-[40px] text-center hover:border-neural-red/60 transition-all duration-300">
              <div 
                className="w-3 h-3 rounded mx-auto mb-1"
                style={{ backgroundColor: app.name === 'Notion' ? '#ffffff' : app.color }}
              />
              <div className="text-neural-red font-rajdhani text-xs font-medium truncate">
                {app.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pulsing Energy Waves */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 border border-neural-red/20 rounded-full"
            style={{
              width: 200 + (i * 100),
              height: 200 + (i * 100),
              marginLeft: -(100 + (i * 50)),
              marginTop: -(100 + (i * 50))
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  )
}