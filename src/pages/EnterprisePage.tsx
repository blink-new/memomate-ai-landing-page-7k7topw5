import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Shield, Users, Settings, BarChart3, Lock, 
  Zap, Globe, HeadphonesIcon, CheckCircle, 
  Building, Crown, Star, ArrowRight
} from 'lucide-react'
import SimpleParticleField from '../components/SimpleParticleField'
import FloatingNavigation from '../components/FloatingNavigation'
import FuturisticFooter from '../components/FuturisticFooter'
import { Button } from '../components/ui/button'

const enterpriseFeatures = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Advanced Team Management',
    description: 'Unlimited team members with granular role-based permissions and access controls',
    details: ['Custom user roles', 'Department hierarchies', 'Activity monitoring', 'Bulk user management']
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Enterprise Security',
    description: 'Military-grade security with compliance certifications and audit trails',
    details: ['SOC2 Type II', 'GDPR compliance', 'HIPAA ready', 'Audit logging']
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Custom Integrations',
    description: 'Build custom integrations with your existing enterprise systems and workflows',
    details: ['REST API access', 'Webhook support', 'Custom connectors', 'Legacy system integration']
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Advanced Analytics',
    description: 'Comprehensive insights and reporting for enterprise-level decision making',
    details: ['Custom dashboards', 'Usage analytics', 'Performance metrics', 'Export capabilities']
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'Data Governance',
    description: 'Complete control over your data with on-premise deployment options',
    details: ['On-premise hosting', 'Data residency', 'Backup controls', 'Retention policies']
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: 'Dedicated Support',
    description: '24/7 dedicated support with SLA guarantees and account management',
    details: ['Dedicated account manager', '99.9% uptime SLA', 'Priority support', 'Training sessions']
  }
]

const complianceLogos = [
  { name: 'SOC2', icon: '🛡️' },
  { name: 'GDPR', icon: '🇪🇺' },
  { name: 'HIPAA', icon: '🏥' },
  { name: 'ISO27001', icon: '📋' },
  { name: 'PCI DSS', icon: '💳' },
  { name: 'FedRAMP', icon: '🏛️' }
]

function FeatureCard({ feature, index }: { feature: typeof enterpriseFeatures[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      whileHover={{ scale: 1.02, z: 10 }}
    >
      <div className="bg-neural-dark/60 backdrop-blur-sm border border-neural-red/20 rounded-xl p-6 h-full transition-all duration-300 group-hover:border-neural-red/50 group-hover:neural-glow">
        <div className="flex items-start space-x-4 mb-4">
          <div className="text-neural-red group-hover:scale-110 transition-transform duration-300">
            {feature.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-white font-orbitron font-bold text-lg mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300 font-rajdhani leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>

        {/* Expandable Details */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="border-t border-neural-red/20 pt-4 mt-4">
            <div className="grid grid-cols-2 gap-2">
              {feature.details.map((detail, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-neural-red flex-shrink-0" />
                  <span className="text-gray-400 text-sm font-rajdhani">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-neural-red/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          animate={isExpanded ? {
            boxShadow: [
              '0 0 20px rgba(255, 0, 0, 0.1)',
              '0 0 30px rgba(255, 0, 0, 0.2)',
              '0 0 20px rgba(255, 0, 0, 0.1)'
            ]
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  )
}

export default function EnterprisePage() {
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
                    Enterprise-Grade
                    <br />
                    <span className="text-neural-red">AI Productivity</span>
                  </h1>
                  <p className="text-xl text-gray-300 font-rajdhani leading-relaxed">
                    Scale MemoMate across your entire organization with advanced security, 
                    compliance, and management features designed for enterprise needs.
                  </p>
                </div>

                <div className="flex space-x-6">
                  <Button className="bg-neural-red hover:bg-neural-red/80 text-black font-orbitron font-bold px-8 py-4 text-lg neural-glow transition-all duration-300 hover:scale-105">
                    Request Demo
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-neural-red text-neural-red hover:bg-neural-red/10 font-orbitron font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                  >
                    Contact Sales
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center space-x-8 text-gray-400 text-sm font-rajdhani">
                  <div className="flex items-center space-x-2">
                    <Building className="w-4 h-4 text-neural-red" />
                    <span>Fortune 500 Ready</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-neural-red" />
                    <span>SOC2 Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-neural-red" />
                    <span>Global Deployment</span>
                  </div>
                </div>
              </motion.div>

              {/* Right: 3D Enterprise Dashboard */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <div className="relative">
                  <motion.div
                    className="bg-neural-dark/60 backdrop-blur-sm border border-neural-red/30 rounded-2xl p-8 neural-glow"
                    animate={{ 
                      rotateY: [0, 3, 0, -3, 0],
                      rotateX: [0, 1, 0, -1, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-neural-red/20">
                      <div className="flex items-center space-x-3">
                        <Crown className="w-6 h-6 text-neural-red" />
                        <h3 className="text-neural-red font-orbitron font-bold text-lg">Enterprise Dashboard</h3>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full neural-pulse" />
                        <div className="w-3 h-3 bg-neural-red rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      </div>
                    </div>

                    {/* Team Overview */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        { label: 'Active Users', value: '2,847', trend: '+12%' },
                        { label: 'Departments', value: '24', trend: '+3' },
                        { label: 'Integrations', value: '156', trend: '+8' },
                        { label: 'Uptime', value: '99.9%', trend: 'SLA' }
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          className="bg-neural-red/10 border border-neural-red/20 rounded-lg p-3"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                        >
                          <div className="text-neural-red font-orbitron font-bold text-lg">{stat.value}</div>
                          <div className="text-gray-300 text-xs font-rajdhani">{stat.label}</div>
                          <div className="text-green-400 text-xs font-rajdhani">{stat.trend}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Security Status */}
                    <div className="bg-neural-darker/60 rounded-lg p-4">
                      <h4 className="text-neural-red font-orbitron font-bold text-sm mb-3">Security Status</h4>
                      <div className="space-y-2">
                        {['Multi-factor Authentication', 'Data Encryption', 'Audit Logging', 'Compliance Monitoring'].map((item, i) => (
                          <div key={item} className="flex items-center justify-between">
                            <span className="text-gray-300 text-xs font-rajdhani">{item}</span>
                            <motion.div
                              className="w-2 h-2 bg-green-400 rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-8 -right-8 bg-neural-dark/80 backdrop-blur-sm border border-neural-red/30 rounded-lg p-3"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="text-neural-red font-orbitron text-xs">Global Scale</div>
                    <div className="text-white text-sm">🌍 50+ Countries</div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -left-8 bg-neural-dark/80 backdrop-blur-sm border border-neural-red/30 rounded-lg p-3"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="text-neural-red font-orbitron text-xs">24/7 Support</div>
                    <div className="text-white text-sm">🎧 Dedicated Team</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enterprise Features Grid */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-orbitron font-bold text-white mb-4">
                Enterprise <span className="text-neural-red">Features</span>
              </h2>
              <p className="text-xl text-gray-300 font-rajdhani max-w-2xl mx-auto">
                Advanced capabilities designed for large-scale deployments and enterprise requirements
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Security */}
        <section className="relative py-20">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
                Compliance & <span className="text-neural-red">Security</span>
              </h2>
              <p className="text-gray-300 font-rajdhani max-w-2xl mx-auto">
                Meet the highest standards of security and compliance for enterprise environments
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {complianceLogos.map((compliance, index) => (
                <motion.div
                  key={compliance.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-neural-dark/60 backdrop-blur-sm border border-neural-red/20 rounded-xl p-6 text-center hover:border-neural-red/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-4xl mb-3">{compliance.icon}</div>
                  <div className="text-neural-red font-orbitron font-bold text-sm">
                    {compliance.name}
                  </div>
                  <div className="text-gray-400 text-xs font-rajdhani mt-1">
                    Certified
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment Options */}
        <section className="relative py-20">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
                Deployment <span className="text-neural-red">Options</span>
              </h2>
              <p className="text-gray-300 font-rajdhani">
                Choose the deployment model that fits your organization's needs
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Cloud Hosted',
                  description: 'Fully managed cloud deployment with automatic updates and scaling',
                  features: ['Automatic updates', 'Global CDN', 'Auto-scaling', '99.9% uptime SLA'],
                  icon: '☁️'
                },
                {
                  title: 'On-Premise',
                  description: 'Deploy within your own infrastructure for maximum control and security',
                  features: ['Full data control', 'Custom security', 'Air-gapped option', 'Local compliance'],
                  icon: '🏢'
                },
                {
                  title: 'Hybrid',
                  description: 'Combine cloud flexibility with on-premise security for sensitive data',
                  features: ['Best of both worlds', 'Selective data placement', 'Flexible scaling', 'Gradual migration'],
                  icon: '🔄'
                }
              ].map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-neural-dark/60 backdrop-blur-sm border border-neural-red/20 rounded-xl p-8 hover:border-neural-red/50 transition-all duration-300 hover:neural-glow"
                >
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{option.icon}</div>
                    <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                      {option.title}
                    </h3>
                    <p className="text-gray-300 font-rajdhani">
                      {option.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {option.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-neural-red flex-shrink-0" />
                        <span className="text-gray-300 font-rajdhani text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Success Stories */}
        <section className="relative py-20">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
                Success <span className="text-neural-red">Stories</span>
              </h2>
              <p className="text-gray-300 font-rajdhani">
                See how enterprises are transforming their productivity with MemoMate
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  company: 'TechCorp Global',
                  industry: 'Technology',
                  size: '10,000+ employees',
                  result: '40% increase in team productivity',
                  quote: 'MemoMate transformed how our distributed teams collaborate across time zones.',
                  avatar: '🏢'
                },
                {
                  company: 'HealthSystem Inc',
                  industry: 'Healthcare',
                  size: '5,000+ employees',
                  result: '60% reduction in administrative tasks',
                  quote: 'The HIPAA compliance and security features gave us confidence to deploy enterprise-wide.',
                  avatar: '🏥'
                }
              ].map((story, index) => (
                <motion.div
                  key={story.company}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-neural-dark/60 backdrop-blur-sm border border-neural-red/20 rounded-xl p-8 hover:border-neural-red/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="text-4xl">{story.avatar}</div>
                    <div>
                      <h3 className="text-white font-orbitron font-bold text-lg">{story.company}</h3>
                      <p className="text-neural-red font-rajdhani text-sm">{story.industry} • {story.size}</p>
                    </div>
                  </div>

                  <blockquote className="text-gray-300 font-rajdhani text-lg italic mb-6 leading-relaxed">
                    "{story.quote}"
                  </blockquote>

                  <div className="bg-neural-red/10 border border-neural-red/20 rounded-lg p-4">
                    <div className="text-neural-red font-orbitron font-bold text-xl">{story.result}</div>
                    <div className="text-gray-400 text-sm font-rajdhani">Key Achievement</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20">
          <div className="max-w-4xl mx-auto text-center px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-orbitron font-bold text-white">
                Ready to Scale with <span className="text-neural-red">Enterprise AI</span>?
              </h2>
              
              <p className="text-xl text-gray-300 font-rajdhani max-w-2xl mx-auto">
                Join leading enterprises who trust MemoMate for their AI productivity needs
              </p>

              <div className="flex justify-center space-x-6">
                <Button className="bg-neural-red hover:bg-neural-red/80 text-black font-orbitron font-bold px-8 py-4 text-lg neural-glow transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <span>Request Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-neural-red text-neural-red hover:bg-neural-red/10 font-orbitron font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                >
                  Download Whitepaper
                </Button>
              </div>

              <div className="flex justify-center items-center space-x-8 text-gray-400 text-sm font-rajdhani">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-neural-red" />
                  <span>Custom deployment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-neural-red" />
                  <span>Enterprise security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <HeadphonesIcon className="w-4 h-4 text-neural-red" />
                  <span>Dedicated support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FuturisticFooter />
    </div>
  )
}