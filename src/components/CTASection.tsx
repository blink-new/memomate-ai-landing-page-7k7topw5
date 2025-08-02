import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { MessageSquare, Calendar, Zap, Globe, Shield, Users } from 'lucide-react'

const useCases = [
  { icon: <MessageSquare />, text: "Unified Chat Management", color: "#FF4444" },
  { icon: <Calendar />, text: "Smart Calendar Sync", color: "#FF6666" },
  { icon: <Zap />, text: "Instant Task Creation", color: "#FF8888" },
  { icon: <Globe />, text: "Multi-language Support", color: "#FFAAAA" },
  { icon: <Shield />, text: "Secure Data Encryption", color: "#FFCCCC" },
  { icon: <Users />, text: "Team Collaboration", color: "#FFEEEE" }
]

function FloatingCard({ useCase, index }: { useCase: typeof useCases[0], index: number }) {
  return (
    <motion.div
      className="absolute bg-neural-dark/60 backdrop-blur-sm border border-neural-red/20 rounded-lg p-3 flex items-center space-x-2"
      style={{
        left: `${20 + (index * 15)}%`,
        top: `${30 + (index % 2) * 40}%`,
      }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 2, 0, -2, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 4 + (index * 0.5),
        repeat: Infinity,
        delay: index * 0.8,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.1, zIndex: 10 }}
    >
      <div className="text-neural-red text-lg">
        {useCase.icon}
      </div>
      <div className="text-white font-rajdhani text-sm font-medium">
        {useCase.text}
      </div>
    </motion.div>
  )
}

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Use Case Cards */}
        {useCases.map((useCase, index) => (
          <FloatingCard key={index} useCase={useCase} index={index} />
        ))}

        {/* Background Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neural-red/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Neural Grid */}
        <div className="absolute inset-0 neural-grid-bg opacity-10" />
      </div>

      {/* Main CTA Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Main Headline */}
          <h2 className="text-6xl lg:text-7xl font-orbitron font-bold text-white leading-tight">
            Let <span className="text-neural-red neural-text-glow">MemoMate</span>
            <br />
            handle it for you
          </h2>

          {/* Subheading */}
          <p className="text-2xl text-gray-300 font-rajdhani max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals who've revolutionized their productivity with AI
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center space-x-12 my-12"
          >
            {[
              { value: '50K+', label: 'Active Users' },
              { value: '1M+', label: 'Tasks Automated' },
              { value: '99.9%', label: 'Uptime' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-orbitron font-bold text-neural-red neural-text-glow">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-rajdhani text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <Button 
              className="bg-neural-red hover:bg-neural-red/80 text-black font-orbitron font-bold px-12 py-6 text-2xl neural-glow transition-all duration-300 hover:scale-105 relative z-10"
            >
              Start Now Free
            </Button>

            {/* Floating 3D Effect */}
            <motion.div
              className="absolute inset-0 bg-neural-red/20 rounded-lg blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Orbital Rings */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute inset-0 border border-neural-red/20 rounded-lg"
                style={{
                  transform: `scale(${1 + ring * 0.2})`,
                }}
                animate={{
                  rotate: [0, 360],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4 + ring,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </motion.div>

          {/* Secondary Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center space-x-6 mt-8"
          >
            <Button 
              variant="outline"
              className="border-neural-red/50 text-neural-red hover:bg-neural-red/10 font-rajdhani font-medium px-6 py-3 transition-all duration-300 hover:scale-105"
            >
              Watch Demo
            </Button>
            
            <Button 
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 font-rajdhani font-medium px-6 py-3 transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center items-center space-x-8 mt-12 text-gray-400 text-sm font-rajdhani"
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-neural-red" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-neural-red" />
              <span>Instant Setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-neural-red" />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-neural-red/5 via-transparent to-transparent" />
    </section>
  )
}