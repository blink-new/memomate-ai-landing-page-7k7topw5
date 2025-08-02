import { motion } from 'framer-motion'
import { useState } from 'react'
import { MessageSquare, Heart, Star, Users, Zap } from 'lucide-react'
import SimpleParticleField from '../components/SimpleParticleField'
import FloatingNavigation from '../components/FloatingNavigation'
import FuturisticFooter from '../components/FuturisticFooter'

const communityMembers = [
  { id: 1, name: 'Sarah Chen', role: 'Product Manager', avatar: '👩‍💼', testimonial: 'MemoMate transformed how our team collaborates. The AI integration is seamless!', rating: 5 },
  { id: 2, name: 'Marcus Rodriguez', role: 'Developer', avatar: '👨‍💻', testimonial: 'Finally, an AI assistant that actually understands context. Game changer!', rating: 5 },
  { id: 3, name: 'Emily Watson', role: 'Designer', avatar: '👩‍🎨', testimonial: 'The multilingual support helped us expand globally. Incredible technology.', rating: 5 },
  { id: 4, name: 'David Kim', role: 'Entrepreneur', avatar: '👨‍💼', testimonial: 'Saved me 10+ hours per week. The ROI is incredible for any business.', rating: 5 },
  { id: 5, name: 'Lisa Thompson', role: 'Consultant', avatar: '👩‍💼', testimonial: 'Security and privacy features give me confidence to use it with clients.', rating: 5 },
  { id: 6, name: 'Alex Johnson', role: 'Freelancer', avatar: '👨‍💻', testimonial: 'Managing multiple clients became effortless with MemoMate AI.', rating: 5 }
]

const liveQuestions = [
  { id: 1, question: 'How does MemoMate handle data privacy?', author: 'TechUser123', time: '2 min ago', answers: 3 },
  { id: 2, question: 'Can I integrate with Slack and Microsoft Teams?', author: 'ProductivityPro', time: '5 min ago', answers: 7 },
  { id: 3, question: 'What languages are supported for translation?', author: 'GlobalManager', time: '8 min ago', answers: 12 },
  { id: 4, question: 'Is there an API for custom integrations?', author: 'DevExpert', time: '12 min ago', answers: 5 }
]

function UserAvatar({ member, index }: { member: typeof communityMembers[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const angle = (index * 2 * Math.PI) / communityMembers.length
  const radius = 200
  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: [0, 360]
      }}
      transition={{ 
        opacity: { duration: 0.8, delay: index * 0.2 },
        scale: { duration: 0.8, delay: index * 0.2 },
        rotate: { duration: 20, repeat: Infinity, ease: "linear" }
      }}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: 1.2, zIndex: 10 }}
    >
      {/* User Node */}
      <div className="relative w-16 h-16 bg-neural-dark/80 backdrop-blur-sm border-2 border-neural-red/30 rounded-full flex items-center justify-center neural-glow">
        <span className="text-2xl">{member.avatar}</span>
        
        {/* Pulse Ring */}
        <motion.div
          className="absolute inset-0 border-2 border-neural-red/50 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3,
          }}
        />
      </div>

      {/* Expanded Testimonial Card */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 bg-neural-dark/90 backdrop-blur-sm border border-neural-red/30 rounded-xl p-6 neural-glow z-20"
        >
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-3xl">{member.avatar}</span>
            <div>
              <h3 className="text-white font-orbitron font-bold">{member.name}</h3>
              <p className="text-neural-red text-sm font-rajdhani">{member.role}</p>
            </div>
          </div>
          
          <p className="text-gray-300 font-rajdhani mb-4 leading-relaxed">
            "{member.testimonial}"
          </p>
          
          <div className="flex items-center space-x-1">
            {[...Array(member.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-neural-red fill-current" />
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Particle Field Background */}
      <SimpleParticleField />
      
      {/* Floating Navigation Cubes */}
      <FloatingNavigation />
      
      {/* Main Content */}
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="max-w-4xl mx-auto text-center px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-6xl font-orbitron font-bold text-white mb-6">
                Join the <span className="text-neural-red">Community</span>
              </h1>
              <p className="text-xl text-gray-300 font-rajdhani max-w-2xl mx-auto">
                Connect with thousands of professionals revolutionizing productivity with AI
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3D Interactive User Galaxy */}
        <section className="relative py-20">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
                Community <span className="text-neural-red">Galaxy</span>
              </h2>
              <p className="text-gray-300 font-rajdhani">
                Click on any member to see their experience with MemoMate
              </p>
            </motion.div>

            {/* Central Hub */}
            <div className="relative h-[600px] flex items-center justify-center">
              <motion.div
                className="w-32 h-32 bg-neural-red/20 border-2 border-neural-red rounded-full flex items-center justify-center neural-pulse"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="text-center">
                  <Users className="w-8 h-8 text-neural-red mx-auto mb-2" />
                  <div className="text-neural-red font-orbitron font-bold text-sm">
                    50K+
                  </div>
                  <div className="text-gray-300 text-xs font-rajdhani">
                    Members
                  </div>
                </div>
              </motion.div>

              {/* Orbiting User Avatars */}
              {communityMembers.map((member, index) => (
                <UserAvatar key={member.id} member={member} index={index} />
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {communityMembers.map((_, index) => {
                  const angle = (index * 2 * Math.PI) / communityMembers.length
                  const radius = 200
                  const x1 = 50
                  const y1 = 50
                  const x2 = 50 + (Math.cos(angle) * radius / 6)
                  const y2 = 50 + (Math.sin(angle) * radius / 6)
                  
                  return (
                    <motion.line
                      key={index}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="url(#communityGradient)"
                      strokeWidth="1"
                      opacity="0.3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1 + (index * 0.1) }}
                    />
                  )
                })}
                <defs>
                  <linearGradient id="communityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff0000" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ff0000" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>

        {/* Live Q&A Feed */}
        <section className="relative py-20">
          <div className="max-w-4xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
                Live <span className="text-neural-red">Q&A</span>
              </h2>
              <p className="text-gray-300 font-rajdhani">
                Real-time community discussions powered by AI suggestions
              </p>
            </motion.div>

            <div className="space-y-6">
              {liveQuestions.map((question, index) => (
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-neural-dark/60 backdrop-blur-sm border border-neural-red/20 rounded-xl p-6 hover:border-neural-red/40 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="w-5 h-5 text-neural-red" />
                      <span className="text-neural-red font-orbitron font-bold text-sm">
                        {question.author}
                      </span>
                      <span className="text-gray-400 text-sm font-rajdhani">
                        {question.time}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-gray-400 group-hover:text-neural-red transition-colors" />
                      <span className="text-gray-400 text-sm">{question.answers}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-white font-rajdhani text-lg mb-3 group-hover:text-neural-red transition-colors">
                    {question.question}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm">
                    <button className="text-neural-red hover:text-neural-red/80 font-rajdhani font-medium transition-colors">
                      Answer
                    </button>
                    <button className="text-gray-400 hover:text-white font-rajdhani transition-colors">
                      Follow
                    </button>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Zap className="w-3 h-3" />
                      <span className="text-xs">AI Suggested</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Ask Question Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-12"
            >
              <button className="bg-neural-red hover:bg-neural-red/80 text-black font-orbitron font-bold px-8 py-4 rounded-xl neural-glow transition-all duration-300 hover:scale-105">
                Ask a Question
              </button>
            </motion.div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="relative py-20">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: '50K+', label: 'Active Members', icon: '👥' },
                { value: '1M+', label: 'Questions Answered', icon: '💬' },
                { value: '99%', label: 'Satisfaction Rate', icon: '⭐' },
                { value: '24/7', label: 'Community Support', icon: '🚀' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-neural-dark/40 backdrop-blur-sm border border-neural-red/20 rounded-xl p-6 neural-glow"
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-orbitron font-bold text-neural-red mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-rajdhani">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FuturisticFooter />
    </div>
  )
}