import { motion, useInView } from 'framer-motion'
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../utils/animations'
import { useRef, useEffect, useState } from 'react'

const ProductShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: '400px' })

  // Animated Status Component
  const AnimatedStatus = ({ delay = 0 }: { delay?: number }) => {
    const statuses = ['Paused', 'Active', 'Optimizing']
    const [currentStatus, setCurrentStatus] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentStatus((prev) => (prev + 1) % statuses.length)
      }, 3000 + delay * 500)
      return () => clearInterval(interval)
    }, [delay])

    return (
      <motion.span
        key={currentStatus}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 4 }}
        className={`text-xs font-medium ${
          currentStatus === 0 ? 'text-red-300' :
          currentStatus === 1 ? 'text-green-300' :
          'text-yellow-300'
        }`}
      >
        {statuses[currentStatus]}
      </motion.span>
    )
  }

  // Counting Number Component - counts up once when visible
  const CountingNumber = ({ target, duration = 2 }: { target: number, duration?: number }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      setCount(0) // Reset on mount
      let startTime: number
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * target))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      const rafId = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(rafId)
    }, [target, duration])

    return <span>{count}</span>
  }

  const features = [
    {
      title: 'Keyword Optimization',
      description: 'AI automatically identifies and pauses low-performing keywords, saving thousands in wasted spend.',
      visual: (
        <div className="relative h-80 bg-gradient-to-br from-gray-900 via-gray-850 to-gray-800 rounded-2xl p-6 overflow-hidden border border-gray-700/50 shadow-2xl">
          {/* Dashboard grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M0 0h1v1H0zm19 19v-1h1v1z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          
          {/* Header */}
          <div className="relative z-10 mb-6 pb-4 border-b border-gray-700/50">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-semibold text-sm">Keyword Status</h4>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-xs text-gray-400">Live</span>
              </motion.div>
            </div>
          </div>

          {/* Animated rows */}
          <div className="relative z-10 space-y-4">
            {[
              { keyword: 'buy cheap shoes', width: 28, color: 'red', delay: 0 },
              { keyword: 'discount running', width: 42, color: 'yellow', delay: 1 },
              { keyword: 'athletic footwear', width: 68, color: 'green', delay: 2 },
              { keyword: 'sports sneakers', width: 56, color: 'green', delay: 3 },
              { keyword: 'running gear', width: 75, color: 'green', delay: 4 },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-300 font-mono truncate max-w-[200px]">
                    {item.keyword}
                  </span>
                  <AnimatedStatus delay={item.delay} />
                </div>
                <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${
                      item.color === 'red' ? 'bg-red-500/80' :
                      item.color === 'yellow' ? 'bg-yellow-500/80' :
                      'bg-green-500/80'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: [`${item.width}%`, `${item.width + 5}%`, `${item.width}%`] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: item.delay * 0.5,
                    }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Spend: ${Math.floor(Math.random() * 500 + 100)}</span>
                  <span>ROAS: {item.color === 'green' ? '4.2x' : item.color === 'yellow' ? '2.1x' : '0.8x'}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer stats */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-900/50 backdrop-blur-sm border-t border-gray-700/50">
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="text-gray-400">Total Keywords: </span>
                <span className="text-white font-semibold">247</span>
              </div>
              <div>
                <span className="text-gray-400">Paused: </span>
                <motion.span
                  className="text-red-400 font-semibold"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CountingNumber target={27} />
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      ),
      stats: { value: '27', label: 'Keywords Paused', impact: '+$1.8k/mo' },
    },
    {
      title: 'Creative Analysis',
      description: 'AI analyzes your ad creatives and suggests improvements to boost CTR and conversions.',
      visual: (
        <div className="relative h-80 bg-gradient-to-br from-blue-900 via-blue-850 to-blue-800 rounded-2xl p-6 overflow-hidden border border-blue-700/50 shadow-2xl">
          {/* Dashboard grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M0 0h1v1H0zm19 19v-1h1v1z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          
          {/* Header */}
          <div className="relative z-10 mb-6 pb-4 border-b border-blue-700/50">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-semibold text-sm">Creative Performance</h4>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-xs text-gray-400">Analyzing</span>
              </motion.div>
            </div>
          </div>

          {/* Animated score cards */}
          <div className="relative z-10 grid grid-cols-2 gap-4 mb-6">
            {[
              { label: 'CTA Score', value: 46, color: 'blue', delay: 0 },
              { label: 'Visual Score', value: 87, color: 'blue', delay: 0.3 },
              { label: 'Copy Score', value: 68, color: 'blue', delay: 0.6 },
              { label: 'Overall', value: 23, color: 'green', delay: 0.9, isImprovement: true },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: card.delay }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`backdrop-blur-sm rounded-lg p-4 border ${
                  card.color === 'green' 
                    ? 'bg-green-500/20 border-green-400/30' 
                    : 'bg-white/10 border-white/20'
                } relative overflow-hidden`}
              >
                {/* Animated background pulse */}
                <motion.div
                  className={`absolute inset-0 ${
                    card.color === 'green' ? 'bg-green-500/10' : 'bg-blue-500/10'
                  }`}
                  animate={{
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: card.delay,
                  }}
                />
                
                <div className="relative z-10">
                  <div className={`text-xs mb-2 ${
                    card.color === 'green' ? 'text-green-200' : 'text-blue-200'
                  }`}>
                    {card.label}
                  </div>
                  <motion.div
                    className={`text-2xl font-bold ${
                      card.color === 'green' ? 'text-green-300' : 'text-white'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: card.delay + 0.2 }}
                  >
                    {card.isImprovement ? (
                      <motion.span
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: card.delay }}
                      >
                        ↑ {card.value}%
                      </motion.span>
                    ) : (
                      <motion.span
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, delay: card.delay }}
                      >
                        {card.value}%
                      </motion.span>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress indicator */}
          <div className="relative z-10 space-y-2">
            <div className="flex items-center justify-between text-xs text-blue-300">
              <span>Processing creatives...</span>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                3 of 12 analyzed
              </motion.span>
            </div>
            <div className="h-1.5 bg-blue-950 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: ['0%', '25%', '50%', '75%', '100%', '100%'] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </div>
        </div>
      ),
      stats: { value: '2.1x', label: 'CTR Improvement', impact: '+$2.5k/mo' },
    },
    {
      title: 'Budget Reallocation',
      description: 'Automatically shift budget from underperformers to winners, maximizing your ROAS.',
      visual: (
        <div className="relative h-80 bg-gradient-to-br from-purple-900 via-purple-850 to-purple-800 rounded-2xl p-6 overflow-hidden border border-purple-700/50 shadow-2xl">
          {/* Dashboard grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M0 0h1v1H0zm19 19v-1h1v1z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          
          {/* Header */}
          <div className="relative z-10 mb-6 pb-4 border-b border-purple-700/50">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-semibold text-sm">Budget Allocation</h4>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span className="text-xs text-gray-400">Optimizing</span>
              </motion.div>
            </div>
          </div>

          {/* Animated budget bars */}
          <div className="relative z-10 space-y-5">
            {[
              { platform: 'Meta Ads', width: 85, color: 'green', roas: 4.5, delay: 0 },
              { platform: 'Google Ads', width: 65, color: 'blue', roas: 3.2, delay: 0.5 },
              { platform: 'TikTok Ads', width: 45, color: 'pink', roas: 2.8, delay: 1 },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: item.delay }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-purple-200 font-medium">{item.platform}</span>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: item.delay }}
                      className={`w-1.5 h-1.5 rounded-full ${
                        item.color === 'green' ? 'bg-green-400' :
                        item.color === 'blue' ? 'bg-blue-400' :
                        'bg-pink-400'
                      }`}
                    />
                  </div>
                  <motion.span
                    className="text-sm font-bold text-white"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, delay: item.delay }}
                  >
                    {item.roas}x ROAS
                  </motion.span>
                </div>
                <div className="relative h-3 bg-purple-900/50 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${
                      item.color === 'green' ? 'bg-green-400' :
                      item.color === 'blue' ? 'bg-blue-400' :
                      'bg-pink-400'
                    }`}
                    initial={{ width: 0 }}
                    animate={{
                      width: [`${item.width - 5}%`, `${item.width}%`, `${item.width + 3}%`, `${item.width}%`],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: item.delay,
                    }}
                  />
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: item.delay,
                    }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <motion.span
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: item.delay }}
                  >
                    ${Math.floor(item.width * 10 + 200)}/day
                  </motion.span>
                  <motion.span
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: item.delay }}
                  >
                    {item.width > 70 ? '↑ Increased' : item.width > 50 ? '→ Maintained' : '↓ Reduced'}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer summary */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-purple-900/50 backdrop-blur-sm border-t border-purple-700/50">
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="text-gray-400">Total Budget: </span>
                <span className="text-white font-semibold">$12,500/day</span>
              </div>
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-green-400 font-semibold">+18% ROAS</span>
              </motion.div>
            </div>
          </div>
        </div>
      ),
      stats: { value: '+$3.7k', label: 'Monthly Impact', impact: 'Auto-optimized' },
    },
  ]

  return (
    <section className="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            See It In Action
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6">
            AI That Works While You Sleep
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how Ryze AI continuously optimizes your campaigns, identifies opportunities, and drives results—all automatically.
          </motion.p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <motion.div
                variants={fadeInUp}
                className={index % 2 === 1 ? 'lg:col-start-2' : ''}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl opacity-20 blur-2xl" />
                  {feature.visual}
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
              >
                <div className="inline-block mb-4 px-3 py-1 bg-primary-100 text-primary-700 rounded-lg text-xs font-bold">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-4xl font-extrabold text-primary-600 mb-1">
                      {feature.stats.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {feature.stats.label}
                    </div>
                  </div>
                  <div className="h-12 w-px bg-gray-300" />
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {feature.stats.impact}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Impact
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase

