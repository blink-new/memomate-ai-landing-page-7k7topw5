import { motion } from 'framer-motion'
import { useState } from 'react'
import { Check, Zap, Crown, Building, Star } from 'lucide-react'
import SimpleParticleField from '../components/SimpleParticleField'
import FloatingNavigation from '../components/FloatingNavigation'
import FuturisticFooter from '../components/FuturisticFooter'
import { Button } from '../components/ui/button'

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'Forever',
    description: 'Perfect for individuals getting started with AI productivity',
    icon: <Zap className="w-8 h-8" />,
    color: '#666666',
    features: [
      'Basic AI Chat Assistant',
      'Up to 2 App Integrations',
      'Standard Task Management',
      'Email Support',
      '1GB Cloud Storage',
      'Basic Analytics'
    ],
    limitations: [
      'Limited to 100 AI queries/month',
      'Basic integrations only'
    ],
    cta: 'Get Started Free',
    popular: false
  },
  {
    name: 'Pro',
    price: '₹799',
    period: 'per month',
    description: 'Ideal for professionals and small teams',
    icon: <Crown className="w-8 h-8" />,
    color: '#ff0000',
    features: [
      'Unlimited AI Assistant',
      'All App Integrations',
      'Advanced Task Automation',
      'Priority Support',
      '100GB Cloud Storage',
      'Advanced Analytics',
      'Custom Workflows',
      'Multi-language Support',
      'API Access',
      'Team Collaboration (up to 5 users)'
    ],
    limitations: [],
    cta: 'Start Pro Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'Contact Sales',
    description: 'For large organizations with advanced needs',
    icon: <Building className="w-8 h-8" />,
    color: '#ffaa00',
    features: [
      'Everything in Pro',
      'Unlimited Team Members',
      'Advanced Role Management',
      'Custom Integrations',
      'Dedicated Account Manager',
      'SLA Guarantees',
      'Advanced Security Controls',
      'Custom AI Training',
      'On-premise Deployment',
      'White-label Options'
    ],
    limitations: [],
    cta: 'Contact Sales',
    popular: false
  }
]

function PricingCube({ plan, index }: { plan: typeof pricingPlans[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50, rotateY: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      whileHover={{ scale: 1.05, z: 50 }}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-neural-red text-black px-4 py-1 rounded-full text-sm font-orbitron font-bold z-10"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Most Popular
        </motion.div>
      )}

      {/* 3D Cube Container */}
      <div 
        className={`
          relative bg-neural-dark/60 backdrop-blur-sm border-2 rounded-2xl p-8 h-full
          transition-all duration-500 preserve-3d
          ${plan.popular ? 'border-neural-red/50 neural-glow' : 'border-neural-red/20'}
          ${isExpanded ? 'transform scale-105' : ''}
        `}
        style={{
          background: plan.popular 
            ? 'linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)'
            : 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 0, 0, 0.4) 100%)'
        }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-neural-red mb-4 flex justify-center">
            {plan.icon}
          </div>
          <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
            {plan.name}
          </h3>
          <p className="text-gray-300 font-rajdhani text-sm mb-6">
            {plan.description}
          </p>
          
          {/* Price */}
          <div className="mb-6">
            <div className="text-4xl font-orbitron font-bold text-neural-red">
              {plan.price}
            </div>
            <div className="text-gray-400 font-rajdhani text-sm">
              {plan.period}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <motion.div
              key={i}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Check className="w-4 h-4 text-neural-red flex-shrink-0" />
              <span className="text-gray-300 font-rajdhani text-sm">
                {feature}
              </span>
            </motion.div>
          ))}
          
          {/* Limitations */}
          {plan.limitations.map((limitation, i) => (
            <div key={i} className="flex items-center space-x-3 opacity-60">
              <div className="w-4 h-4 border border-gray-500 rounded-sm flex-shrink-0" />
              <span className="text-gray-400 font-rajdhani text-sm">
                {limitation}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button 
          className={`
            w-full font-orbitron font-bold py-3 transition-all duration-300
            ${plan.popular 
              ? 'bg-neural-red hover:bg-neural-red/80 text-black neural-glow' 
              : 'bg-neural-dark border border-neural-red/50 text-neural-red hover:bg-neural-red/10'
            }
          `}
        >
          {plan.cta}
        </Button>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-neural-red/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          animate={isExpanded ? {
            boxShadow: [
              '0 0 20px rgba(255, 0, 0, 0.2)',
              '0 0 40px rgba(255, 0, 0, 0.4)',
              '0 0 20px rgba(255, 0, 0, 0.2)'
            ]
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  )
}

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

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
                Choose Your <span className="text-neural-red">Plan</span>
              </h1>
              <p className="text-xl text-gray-300 font-rajdhani max-w-2xl mx-auto mb-12">
                Unlock the full potential of AI-powered productivity
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-16">
                <span className={`font-rajdhani ${!isAnnual ? 'text-neural-red' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <motion.button
                  className="relative w-16 h-8 bg-neural-dark border border-neural-red/30 rounded-full"
                  onClick={() => setIsAnnual(!isAnnual)}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute top-1 w-6 h-6 bg-neural-red rounded-full"
                    animate={{ x: isAnnual ? 32 : 4 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <span className={`font-rajdhani ${isAnnual ? 'text-neural-red' : 'text-gray-400'}`}>
                  Annual
                </span>
                {isAnnual && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-neural-red text-black px-2 py-1 rounded text-xs font-orbitron font-bold"
                  >
                    Save 20%
                  </motion.span>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3D Pricing Cubes */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingCube key={plan.name} plan={plan} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="relative py-20">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
                Feature <span className="text-neural-red">Comparison</span>
              </h2>
              <p className="text-gray-300 font-rajdhani">
                Compare all features across our plans
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-neural-dark/40 backdrop-blur-sm border border-neural-red/20 rounded-2xl p-8 overflow-x-auto"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neural-red/20">
                    <th className="text-left py-4 font-orbitron font-bold text-white">Feature</th>
                    <th className="text-center py-4 font-orbitron font-bold text-gray-400">Starter</th>
                    <th className="text-center py-4 font-orbitron font-bold text-neural-red">Pro</th>
                    <th className="text-center py-4 font-orbitron font-bold text-yellow-500">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="font-rajdhani">
                  {[
                    ['AI Assistant', 'Basic', 'Advanced', 'Custom'],
                    ['App Integrations', '2', 'Unlimited', 'Unlimited + Custom'],
                    ['Storage', '1GB', '100GB', 'Unlimited'],
                    ['Team Members', '1', '5', 'Unlimited'],
                    ['Support', 'Email', 'Priority', 'Dedicated Manager'],
                    ['API Access', '❌', '✅', '✅'],
                    ['Custom Workflows', '❌', '✅', '✅'],
                    ['Advanced Security', '❌', '❌', '✅'],
                    ['On-premise', '❌', '❌', '✅']
                  ].map((row, i) => (
                    <motion.tr
                      key={i}
                      className="border-b border-neural-red/10 hover:bg-neural-red/5 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <td className="py-4 text-gray-300">{row[0]}</td>
                      <td className="py-4 text-center text-gray-400">{row[1]}</td>
                      <td className="py-4 text-center text-neural-red">{row[2]}</td>
                      <td className="py-4 text-center text-yellow-500">{row[3]}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
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
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: 'Can I change my plan anytime?',
                  answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
                },
                {
                  question: 'Is there a free trial for Pro?',
                  answer: 'Yes, we offer a 14-day free trial for the Pro plan with full access to all features.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise customers.'
                },
                {
                  question: 'Is my data secure?',
                  answer: 'Absolutely. We use AES-256 encryption and are GDPR compliant with SOC2 certification.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-neural-dark/40 backdrop-blur-sm border border-neural-red/20 rounded-xl p-6"
                >
                  <h3 className="text-white font-orbitron font-bold mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 font-rajdhani leading-relaxed">
                    {faq.answer}
                  </p>
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
              <h2 className="text-4xl font-orbitron font-bold text-white">
                Ready to <span className="text-neural-red">Transform</span> Your Productivity?
              </h2>
              
              <div className="flex justify-center space-x-6">
                <Button className="bg-neural-red hover:bg-neural-red/80 text-black font-orbitron font-bold px-8 py-4 text-lg neural-glow transition-all duration-300 hover:scale-105">
                  Start Free Trial
                </Button>
                <Button 
                  variant="outline"
                  className="border-neural-red text-neural-red hover:bg-neural-red/10 font-orbitron font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                >
                  Contact Sales
                </Button>
              </div>

              <div className="flex justify-center items-center space-x-8 text-gray-400 text-sm font-rajdhani">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-neural-red" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-neural-red" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-neural-red" />
                  <span>Cancel anytime</span>
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