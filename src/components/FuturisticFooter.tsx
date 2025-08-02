import { motion } from 'framer-motion'
import { Instagram, Linkedin, Github } from 'lucide-react'

const socialLinks = [
  { name: 'Instagram', icon: <Instagram />, href: '#', color: '#E4405F' },
  { name: 'LinkedIn', icon: <Linkedin />, href: '#', color: '#0077B5' },
  { name: 'X', icon: <span className="font-bold">𝕏</span>, href: '#', color: '#000000' },
  { name: 'GitHub', icon: <Github />, href: '#', color: '#333333' }
]

const footerLinks = [
  { name: 'About Us', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Contact', href: '#' }
]

export default function FuturisticFooter() {
  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* 3D Glassmorphic Panel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative bg-neural-dark/40 backdrop-blur-xl border-t border-neural-red/20"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.8) 0%, 
              rgba(20, 0, 0, 0.6) 50%, 
              rgba(0, 0, 0, 0.8) 100%
            )
          `
        }}
      >
        {/* Neural Grid Background */}
        <div className="absolute inset-0 neural-grid-bg opacity-10" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neural-red/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left: Brand & Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-orbitron font-bold text-white mb-2">
                  Memo<span className="text-neural-red">Mate</span>
                </h3>
                <p className="text-gray-300 font-rajdhani leading-relaxed">
                  The future of productivity is here. AI-powered, secure, and designed for the modern professional.
                </p>
              </div>

              {/* Security Badge */}
              <motion.div
                className="inline-flex items-center space-x-3 bg-neural-dark/60 border border-neural-red/30 rounded-lg px-4 py-3 neural-glow"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255, 0, 0, 0.2)',
                    '0 0 30px rgba(255, 0, 0, 0.4)',
                    '0 0 20px rgba(255, 0, 0, 0.2)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="text-neural-red text-2xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  🛡️
                </motion.div>
                <div>
                  <div className="text-neural-red font-orbitron font-bold text-sm">
                    Enterprise Security
                  </div>
                  <div className="text-gray-400 text-xs font-rajdhani">
                    AES-256 | GDPR | SOC2 | Privacy-First AI
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Center: Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-orbitron font-bold text-neural-red">
                Quick Links
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                {footerLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-neural-red font-rajdhani transition-all duration-300 hover:translate-x-2"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h5 className="text-neural-red font-orbitron font-bold text-sm mb-3">
                  Stay Updated
                </h5>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-neural-dark/60 border border-neural-red/30 rounded-lg px-3 py-2 text-white placeholder-gray-400 font-rajdhani text-sm focus:outline-none focus:border-neural-red/60"
                  />
                  <motion.button
                    className="bg-neural-red hover:bg-neural-red/80 text-black font-orbitron font-bold px-4 py-2 rounded-lg text-sm transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right: Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-orbitron font-bold text-neural-red">
                Connect With Us
              </h4>

              {/* 3D Floating Social Icons */}
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {/* 3D Cube Container */}
                    <div className="relative bg-neural-dark/60 backdrop-blur-sm border border-neural-red/20 rounded-xl p-4 transition-all duration-300 group-hover:border-neural-red/50 group-hover:neural-glow floating-cube">
                      <div className="flex items-center space-x-3">
                        <div className="text-neural-red text-xl group-hover:scale-110 transition-transform duration-300">
                          {social.icon}
                        </div>
                        <div>
                          <div className="text-white font-orbitron font-bold text-sm">
                            {social.name}
                          </div>
                          <div className="text-gray-400 text-xs font-rajdhani">
                            Follow us
                          </div>
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-neural-red/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          boxShadow: [
                            '0 0 0px rgba(255, 0, 0, 0)',
                            '0 0 20px rgba(255, 0, 0, 0.3)',
                            '0 0 0px rgba(255, 0, 0, 0)'
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                <h5 className="text-neural-red font-orbitron font-bold text-sm">
                  Get in Touch
                </h5>
                <div className="space-y-2 text-gray-300 font-rajdhani text-sm">
                  <div>📧 hello@memomate.ai</div>
                  <div>🌍 Global Support 24/7</div>
                  <div>💬 Live Chat Available</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border-t border-neural-red/20 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
          >
            <div className="text-gray-400 font-rajdhani text-sm">
              © 2025 MemoMate AI. All rights reserved. Built for the future.
            </div>
            
            <div className="flex items-center space-x-4 text-gray-400 font-rajdhani text-sm">
              <span>Powered by</span>
              <div className="flex items-center space-x-2">
                <span className="text-neural-red">🤖</span>
                <span>Advanced AI</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Glow Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neural-red/50 to-transparent" />
      </motion.div>
    </footer>
  )
}