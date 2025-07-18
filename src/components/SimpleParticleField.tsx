import { motion } from 'framer-motion'

export default function SimpleParticleField() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2
  }))

  return (
    <div className="particle-field">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-neural-red rounded-full opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4 + particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}
    </div>
  )
}