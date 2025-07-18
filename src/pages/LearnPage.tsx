import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  BookOpen, Video, FileText, HelpCircle, Search, 
  Play, Download, ExternalLink, MessageCircle, 
  Lightbulb, Zap, Users, Star, Filter
} from 'lucide-react'
import SimpleParticleField from '../components/SimpleParticleField'
import FloatingNavigation from '../components/FloatingNavigation'
import FuturisticFooter from '../components/FuturisticFooter'
import { Button } from '../components/ui/button'

const categories = [
  { id: 'all', name: 'All', icon: <BookOpen className="w-4 h-4" />, count: 47 },
  { id: 'productivity', name: 'Productivity', icon: <Zap className="w-4 h-4" />, count: 12 },
  { id: 'tech', name: 'Tech', icon: <FileText className="w-4 h-4" />, count: 8 },
  { id: 'ai', name: 'AI', icon: <Lightbulb className="w-4 h-4" />, count: 15 },
  { id: 'tutorials', name: 'Tutorials', icon: <Video className="w-4 h-4" />, count: 12 }
]

const learningResources = [
  {
    id: 1,
    type: 'video',
    title: 'Getting Started with MemoMate AI',
    description: 'Complete walkthrough of setting up your first AI productivity workspace',
    duration: '12 min',
    category: 'tutorials',
    difficulty: 'Beginner',
    rating: 4.9,
    views: '15.2K',
    thumbnail: '🎥',
    tags: ['setup', 'basics', 'onboarding']
  },
  {
    id: 2,
    type: 'article',
    title: 'Advanced Integration Strategies',
    description: 'Learn how to connect multiple platforms for maximum productivity gains',
    readTime: '8 min read',
    category: 'productivity',
    difficulty: 'Advanced',
    rating: 4.8,
    views: '8.7K',
    thumbnail: '📚',
    tags: ['integrations', 'workflow', 'automation']
  },
  {
    id: 3,
    type: 'video',
    title: 'AI-Powered Task Management',
    description: 'Discover how AI can automatically organize and prioritize your tasks',
    duration: '18 min',
    category: 'ai',
    difficulty: 'Intermediate',
    rating: 4.9,
    views: '22.1K',
    thumbnail: '🤖',
    tags: ['ai', 'tasks', 'automation']
  },
  {
    id: 4,
    type: 'guide',
    title: 'Security Best Practices',
    description: 'Essential security configurations for enterprise deployments',
    readTime: '15 min read',
    category: 'tech',
    difficulty: 'Advanced',
    rating: 4.7,
    views: '5.3K',
    thumbnail: '🔒',
    tags: ['security', 'enterprise', 'compliance']
  },
  {
    id: 5,
    type: 'video',
    title: 'Team Collaboration Features',
    description: 'Maximize team productivity with advanced collaboration tools',
    duration: '14 min',
    category: 'productivity',
    difficulty: 'Intermediate',
    rating: 4.8,
    views: '11.9K',
    thumbnail: '👥',
    tags: ['teams', 'collaboration', 'sharing']
  },
  {
    id: 6,
    type: 'article',
    title: 'API Integration Guide',
    description: 'Build custom integrations using the MemoMate API',
    readTime: '25 min read',
    category: 'tech',
    difficulty: 'Advanced',
    rating: 4.6,
    views: '3.8K',
    thumbnail: '⚡',
    tags: ['api', 'development', 'custom']
  }
]

const faqs = [
  {
    question: 'How do I get started with MemoMate?',
    answer: 'Simply sign up for a free account and follow our onboarding tutorial. You can connect your first app integration in under 5 minutes.',
    category: 'Getting Started'
  },
  {
    question: 'Which apps can I integrate with MemoMate?',
    answer: 'MemoMate supports 50+ integrations including WhatsApp, Gmail, Slack, Notion, Google Calendar, Zoom, and many more. New integrations are added weekly.',
    category: 'Integrations'
  },
  {
    question: 'Is my data secure with MemoMate?',
    answer: 'Yes, we use AES-256 encryption, are SOC2 certified, and GDPR compliant. Your data is never sold or shared with third parties.',
    category: 'Security'
  },
  {
    question: 'Can I use MemoMate offline?',
    answer: 'MemoMate works best with an internet connection, but basic features like note-taking and task management work offline with sync when reconnected.',
    category: 'Technical'
  }
]

function ResourceCard({ resource, index }: { resource: typeof learningResources[0], index: number }) {
  const getTypeIcon = () => {
    switch (resource.type) {
      case 'video': return <Play className="w-4 h-4" />
      case 'article': return <FileText className="w-4 h-4" />
      case 'guide': return <BookOpen className="w-4 h-4" />
      default: return <FileText className="w-4 h-4" />
    }
  }

  const getDifficultyColor = () => {
    switch (resource.difficulty) {
      case 'Beginner': return 'text-green-400'
      case 'Intermediate': return 'text-yellow-400'
      case 'Advanced': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-neural-dark/60 backdrop-blur-sm border border-neural-red/20 rounded-xl p-6 hover:border-neural-red/50 transition-all duration-300 cursor-pointer group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">{resource.thumbnail}</div>
          <div className="flex items-center space-x-2 text-neural-red">
            {getTypeIcon()}
            <span className="text-xs font-orbitron font-bold uppercase">{resource.type}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-gray-300 text-sm font-rajdhani">{resource.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <h3 className="text-white font-orbitron font-bold text-lg mb-2 group-hover:text-neural-red transition-colors">
          {resource.title}
        </h3>
        <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">
          {resource.description}
        </p>
      </div>

      {/* Meta Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-sm font-rajdhani">
          <span className="text-gray-400">
            {resource.duration || resource.readTime}
          </span>
          <span className={`${getDifficultyColor()}`}>
            {resource.difficulty}
          </span>
          <span className="text-gray-400">
            {resource.views} views
          </span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {resource.tags.map((tag, i) => (
          <span 
            key={i}
            className="bg-neural-red/10 text-neural-red px-2 py-1 rounded text-xs font-rajdhani"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <Button 
          size="sm"
          className="bg-neural-red/20 hover:bg-neural-red/30 text-neural-red border border-neural-red/30 font-rajdhani"
        >
          {resource.type === 'video' ? 'Watch' : 'Read'}
        </Button>
        <div className="flex items-center space-x-2">
          <button className="text-gray-400 hover:text-neural-red transition-colors">
            <Download className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-neural-red transition-colors">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function LearnPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredResources = learningResources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="space-y-8"
              >
                <div>
                  <h1 className="text-6xl font-orbitron font-bold text-white mb-6 leading-tight">
                    Learn & Master
                    <br />
                    <span className="text-neural-red">MemoMate AI</span>
                  </h1>
                  <p className="text-xl text-gray-300 font-rajdhani leading-relaxed">
                    Comprehensive resources, tutorials, and guides to help you maximize 
                    your productivity with AI-powered tools and integrations.
                  </p>
                </div>

                <div className="flex space-x-6">
                  <Button className="bg-neural-red hover:bg-neural-red/80 text-black font-orbitron font-bold px-8 py-4 text-lg neural-glow transition-all duration-300 hover:scale-105">
                    Start Learning
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-neural-red text-neural-red hover:bg-neural-red/10 font-orbitron font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                  >
                    Browse All
                  </Button>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-8 text-gray-400 text-sm font-rajdhani">
                  <div className="flex items-center space-x-2">
                    <Video className="w-4 h-4 text-neural-red" />
                    <span>50+ Video Tutorials</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-neural-red" />
                    <span>100+ Articles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-neural-red" />
                    <span>Active Community</span>
                  </div>
                </div>
              </motion.div>

              {/* Right: 3D Learning Interface */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                {/* 3D Floating Shelves */}
                <div className="relative h-96">
                  {[0, 1, 2].map((shelf, i) => (
                    <motion.div
                      key={shelf}
                      className="absolute w-full bg-neural-dark/60 backdrop-blur-sm border border-neural-red/30 rounded-xl p-4"
                      style={{ 
                        top: `${i * 120}px`,
                        transform: `perspective(1000px) rotateX(${5 - i * 2}deg) rotateY(${i * 3}deg)`
                      }}
                      animate={{ 
                        y: [0, -10, 0],
                        rotateY: [i * 3, i * 3 + 2, i * 3]
                      }}
                      transition={{ 
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">
                          {i === 0 ? '📚' : i === 1 ? '🎥' : '💡'}
                        </div>
                        <div>
                          <div className="text-neural-red font-orbitron font-bold text-sm">
                            {i === 0 ? 'Documentation' : i === 1 ? 'Video Tutorials' : 'AI Tips'}
                          </div>
                          <div className="text-gray-300 text-xs font-rajdhani">
                            {i === 0 ? '25 Guides' : i === 1 ? '30 Videos' : '50 Tips'}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Floating AI Assistant */}
                <motion.div
                  className="absolute bottom-0 right-0 bg-neural-dark/80 backdrop-blur-sm border border-neural-red/30 rounded-full w-16 h-16 flex items-center justify-center neural-pulse cursor-pointer"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <MessageCircle className="w-6 h-6 text-neural-red" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="relative py-10">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tutorials, guides, and documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-neural-dark/60 backdrop-blur-sm border border-neural-red/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 font-rajdhani focus:outline-none focus:border-neural-red/60 transition-colors"
                />
              </div>

              {/* Category Filters */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <div className="flex space-x-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`
                        flex items-center space-x-2 px-4 py-2 rounded-lg font-rajdhani font-medium text-sm transition-all duration-300
                        ${activeCategory === category.id 
                          ? 'bg-neural-red text-black' 
                          : 'bg-neural-dark/60 text-gray-300 hover:bg-neural-red/20 hover:text-neural-red'
                        }
                      `}
                    >
                      {category.icon}
                      <span>{category.name}</span>
                      <span className="text-xs opacity-60">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Resources Grid */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
                Learning <span className="text-neural-red">Resources</span>
              </h2>
              <p className="text-gray-300 font-rajdhani">
                {filteredResources.length} resources found
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20">
          <div className="max-w-4xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
                Frequently Asked <span className="text-neural-red">Questions</span>
              </h2>
              <p className="text-gray-300 font-rajdhani">
                Quick answers to common questions about MemoMate
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-neural-dark/60 backdrop-blur-sm border border-neural-red/20 rounded-xl p-6 hover:border-neural-red/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="w-6 h-6 text-neural-red flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-white font-orbitron font-bold text-lg mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-300 font-rajdhani leading-relaxed mb-3">
                        {faq.answer}
                      </p>
                      <span className="inline-block bg-neural-red/10 text-neural-red px-3 py-1 rounded-full text-xs font-rajdhani">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 font-rajdhani mb-6">
                Can't find what you're looking for?
              </p>
              <Button className="bg-neural-red hover:bg-neural-red/80 text-black font-orbitron font-bold px-8 py-3 neural-glow transition-all duration-300 hover:scale-105">
                Contact Support
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Community Section */}
        <section className="relative py-20">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
                Join the <span className="text-neural-red">Community</span>
              </h2>
              <p className="text-gray-300 font-rajdhani">
                Connect with other MemoMate users and get help from experts
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Discord Community',
                  description: 'Join our active Discord server for real-time help and discussions',
                  icon: '💬',
                  members: '15K+',
                  action: 'Join Discord'
                },
                {
                  title: 'GitHub Repository',
                  description: 'Contribute to open-source projects and report issues',
                  icon: '🔧',
                  members: '2.3K',
                  action: 'View GitHub'
                },
                {
                  title: 'Expert Office Hours',
                  description: 'Weekly live sessions with MemoMate experts and power users',
                  icon: '🎓',
                  members: 'Weekly',
                  action: 'Register Now'
                }
              ].map((community, index) => (
                <motion.div
                  key={community.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-neural-dark/60 backdrop-blur-sm border border-neural-red/20 rounded-xl p-8 text-center hover:border-neural-red/50 transition-all duration-300 hover:neural-glow"
                >
                  <div className="text-5xl mb-4">{community.icon}</div>
                  <h3 className="text-white font-orbitron font-bold text-xl mb-3">
                    {community.title}
                  </h3>
                  <p className="text-gray-300 font-rajdhani mb-4 leading-relaxed">
                    {community.description}
                  </p>
                  <div className="text-neural-red font-orbitron font-bold text-lg mb-6">
                    {community.members} Members
                  </div>
                  <Button 
                    variant="outline"
                    className="border-neural-red text-neural-red hover:bg-neural-red/10 font-rajdhani font-medium w-full"
                  >
                    {community.action}
                  </Button>
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