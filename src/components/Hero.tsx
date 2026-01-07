import { motion } from 'framer-motion'
import { fadeInUp, slideInRight, staggerContainer, textReveal } from '../utils/animations'

const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ scrollMarginTop: '80px' }}>
      {/* Subtle background - reduced visibility */}
      <div className="absolute inset-0 gradient-animated opacity-20 -z-20" />
      <div className="absolute inset-0 bg-white/90 -z-10" />
      
      {/* Minimal grid pattern - much more subtle */}
      <div className="absolute inset-0 opacity-[0.008] -z-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }} />
      
      {/* Minimal floating elements - very subtle */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="absolute top-20 right-10 w-72 h-72 bg-primary-200 rounded-full opacity-6 blur-3xl -z-10"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          transition: {
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          },
        }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary-300 rounded-full opacity-5 blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Natural flow layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Content with maximum space */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            {/* Simplified badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-block mb-4 sm:mb-5 px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-100"
            >
              AI-Powered Ad Management
            </motion.div>
            
            {/* ICONIC HEADLINE - with signature accent */}
            <motion.h1
              variants={staggerContainer}
              className="text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-black text-gray-900 mb-6 sm:mb-7 leading-[0.88] tracking-[-0.02em]"
            >
              <motion.span 
                variants={textReveal} 
                className="block mb-2 sm:mb-3"
              >
                Let AI manage
              </motion.span>
              <motion.span
                variants={textReveal}
                className="block relative inline-block"
              >
                <span 
                  className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'rgb(37, 99, 235)', // Fallback color if gradient doesn't work
                  }}
                >
                  your ads
                  {/* Signature accent - very subtle, slow underline glow */}
                  <motion.span
                    animate={{
                      opacity: [0.15, 0.35, 0.15],
                      scaleX: [0.98, 1.02, 0.98],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent rounded-full blur-[2px]"
                  />
                </span>
              </motion.span>
            </motion.h1>
            
            {/* Refined description with maximum space */}
            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Automatically optimize Google, Meta, and TikTok ad campaigns. 
              Save hours every week while improving ROAS by up to <span className="font-semibold text-primary-600">63%</span>.
            </motion.p>

            {/* CTA Form - Primary CTA feels inevitable */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8"
            >
              <motion.input
                whileFocus={{ scale: 1.005 }}
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 placeholder-gray-400 bg-white text-base font-medium shadow-sm"
              />
              <motion.button
                whileHover={{ 
                  scale: 1.01,
                  boxShadow: '0 4px 20px rgba(14, 165, 233, 0.25)',
                }}
                whileTap={{ scale: 0.99 }}
                className="px-10 py-4 bg-primary-600 text-white rounded-lg font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap"
              >
                Get Started
              </motion.button>
            </motion.div>

            {/* Secondary CTA - stays quiet */}
            <motion.div variants={fadeInUp} className="mb-8">
              <motion.a
                href="#how-it-works"
                whileHover={{ x: 2 }}
                className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 font-normal text-sm transition-colors"
              >
                <span>See How It Works</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Simplified trust indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500"
            >
              {[
                { icon: '✓', text: 'No credit card required' },
                { icon: '⚡', text: 'Setup in 5 minutes' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-green-500">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Dashboard in natural flow */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="relative opacity-90"
          >
            {/* Simplified Dashboard Card - lower contrast, subtle */}
            <motion.div
              className="relative bg-white/95 rounded-2xl p-8 border border-gray-100 shadow-lg"
            >
              {/* Minimal glow - even more subtle */}
              <div className="absolute -inset-0.5 bg-primary-50 rounded-2xl opacity-10 blur-sm -z-10" />
              
              {/* Platform Logos - simpler, lower contrast */}
              <div className="flex items-center justify-center gap-3 mb-8">
                {['Google Ads', 'Meta Ads', 'TikTok Ads'].map((platform) => (
                  <div
                    key={platform}
                    className="px-4 py-2 bg-gray-50/80 rounded-lg border border-gray-100"
                  >
                    <span className="text-xs font-medium text-gray-600">{platform}</span>
                  </div>
                ))}
              </div>

              {/* Stats Preview - cleaner, lower contrast */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '3.2x', label: 'Average ROAS', bgClass: 'from-primary-50/60 to-primary-100/60', textClass: 'text-primary-600' },
                  { value: '+63%', label: 'ROAS Improvement', bgClass: 'from-green-50/60 to-green-100/60', textClass: 'text-green-600' },
                  { value: '24/7', label: 'Automated', bgClass: 'from-blue-50/60 to-blue-100/60', textClass: 'text-blue-600' },
                  { value: '$500M+', label: 'Ad Spend Managed', bgClass: 'from-purple-50/60 to-purple-100/60', textClass: 'text-purple-600' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className={`bg-gradient-to-br ${stat.bgClass} rounded-xl p-5 border border-gray-100`}
                  >
                    <div className={`text-3xl font-bold ${stat.textClass} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Minimal live indicator - subtle proof */}
              <div className="mt-6 pt-6 border-t border-gray-50">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">Live Performance</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-xs text-gray-400">Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
