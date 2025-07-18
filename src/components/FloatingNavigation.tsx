import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function FloatingNavigation() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'COMM', path: '/community' },
    { label: 'PRICE', path: '/pricing' },
    { label: 'ENTER', path: '/enterprise' },
    { label: 'LEARN', path: '/learn' },
  ]

  const handleNavClick = (path: string) => {
    navigate(path)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-neural-dark/95 backdrop-blur-xl border-b border-neural-red/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-neural-red rounded-lg flex items-center justify-center neural-pulse">
              <span className="text-black font-orbitron font-bold text-sm">M</span>
            </div>
            <span className="text-white font-orbitron font-bold text-xl">
              Memo<span className="text-neural-red">Mate</span>
            </span>
          </motion.div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className={`
                  relative px-3 lg:px-4 py-2 font-orbitron font-bold text-xs lg:text-sm transition-all duration-300
                  ${location.pathname === item.path 
                    ? 'text-neural-red neural-text-glow' 
                    : 'text-white hover:text-neural-red'
                  }
                `}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                
                {/* Active indicator */}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-neural-red"
                    layoutId="activeTab"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-neural-red/10 rounded-lg opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neural-red p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <motion.div
                  className="w-full h-0.5 bg-neural-red"
                  animate={isMobileMenuOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="w-full h-0.5 bg-neural-red"
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="w-full h-0.5 bg-neural-red"
                  animate={isMobileMenuOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>

          {/* Login Button */}
          <motion.button
            className="hidden md:block bg-neural-red hover:bg-neural-red/80 text-black font-orbitron font-bold px-4 lg:px-6 py-2 text-xs lg:text-sm rounded-lg transition-all duration-300 neural-glow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/login')}
          >
            LOGIN
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-neural-red/20 bg-neural-dark/95 backdrop-blur-xl"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavClick(item.path)}
                    className={`
                      block w-full text-left px-3 py-2 font-orbitron font-bold text-sm transition-all duration-300 rounded-lg
                      ${location.pathname === item.path 
                        ? 'text-neural-red bg-neural-red/10 neural-text-glow' 
                        : 'text-white hover:text-neural-red hover:bg-neural-red/5'
                      }
                    `}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                {/* Mobile Login Button */}
                <motion.button
                  className="w-full bg-neural-red hover:bg-neural-red/80 text-black font-orbitron font-bold px-4 py-3 text-sm rounded-lg transition-all duration-300 neural-glow mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    navigate('/login')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  LOGIN
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}