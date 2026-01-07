import { motion, useInView } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { useRef, useState } from 'react'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Mini Visualization Components
  const PerformanceAuditsViz = () => (
    <div className="relative w-full h-32 bg-gray-900 rounded-xl p-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M0 0h1v1H0zm19 19v-1h1v1z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      {/* Pulsing radar sweep */}
      <div className="relative w-full h-full">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgb(34, 197, 94)" strokeWidth="1" opacity="0.3" />
          <motion.circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="rgb(34, 197, 94)"
            strokeWidth="2"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.line
            x1="50"
            y1="50"
            x2="50"
            y2="10"
            stroke="rgb(34, 197, 94)"
            strokeWidth="2"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ transformOrigin: '50px 50px' }}
          />
          {/* Data points */}
          {[
            { x: 30, y: 35 },
            { x: 65, y: 40 },
            { x: 40, y: 70 },
            { x: 70, y: 65 },
          ].map((point, i) => (
            <motion.circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="2"
              fill="rgb(34, 197, 94)"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  )

  const BudgetReallocationViz = () => (
    <div className="relative w-full h-32 bg-gray-900 rounded-xl p-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M0 0h1v1H0zm19 19v-1h1v1z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div className="relative w-full h-full flex items-end justify-center gap-2">
        {[
          { height: 40, color: 'rgb(239, 68, 68)', label: 'Low' },
          { height: 60, color: 'rgb(234, 179, 8)', label: 'Mid' },
          { height: 80, color: 'rgb(34, 197, 94)', label: 'High' },
        ].map((bar, i) => (
          <motion.div
            key={i}
            className="w-8 rounded-t"
            style={{ backgroundColor: bar.color }}
            initial={{ height: 20 }}
            animate={{
              height: [20, bar.height, 20],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}
        <motion.div
          className="absolute top-2 text-xs text-green-400 font-medium"
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          Optimizing...
        </motion.div>
      </div>
    </div>
  )

  const KeywordOptimizationViz = () => (
    <div className="relative w-full h-32 bg-gray-900 rounded-xl p-3 overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M0 0h1v1H0zm19 19v-1h1v1z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div className="relative h-full flex flex-col justify-center gap-2">
        {[
          { label: 'keyword-1', status: 'Active', width: 70, color: 'rgb(34, 197, 94)' },
          { label: 'keyword-2', status: 'Paused', width: 40, color: 'rgb(239, 68, 68)' },
          { label: 'keyword-3', status: 'Active', width: 85, color: 'rgb(34, 197, 94)' },
        ].map((item, i) => (
          <div key={i} className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-300 truncate">{item.label}</span>
              <span className="text-xs" style={{ color: item.color }}>{item.status}</span>
            </div>
            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: item.color }}
                initial={{ width: 0 }}
                animate={{ width: `${item.width}%` }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  ease: 'easeOut',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const SmartReportingViz = () => (
    <div className="relative w-full h-32 bg-gray-900 rounded-xl p-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M0 0h1v1H0zm19 19v-1h1v1z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
        {/* Grid */}
        {[0, 20, 40, 60].map((y) => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgb(75, 85, 99)" strokeWidth="0.5" opacity="0.3" />
        ))}
        {/* Animated line chart */}
        <motion.polyline
          points="0,50 15,45 30,35 45,30 60,25 75,20 90,15 100,10"
          fill="none"
          stroke="rgb(59, 130, 246)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'easeInOut',
          }}
        />
        {/* Data points */}
        {[
          { x: 15, y: 45 },
          { x: 30, y: 35 },
          { x: 45, y: 30 },
          { x: 60, y: 25 },
          { x: 75, y: 20 },
          { x: 90, y: 15 },
        ].map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="2"
            fill="rgb(59, 130, 246)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.5, 1],
              opacity: [0, 1, 1],
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.2 + 1,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}
      </svg>
    </div>
  )

  const AICreativeGenerationViz = () => (
    <div className="relative w-full h-32 bg-gray-900 rounded-xl p-3 overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M0 0h1v1H0zm19 19v-1h1v1z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div className="relative h-full grid grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded"
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </div>
  )

  const AIChatViz = () => (
    <div className="relative w-full h-32 bg-gray-900 rounded-xl p-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M0 0h1v1H0zm19 19v-1h1v1z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div className="relative h-full flex flex-col justify-end gap-2">
        {[
          { text: 'Why did ROAS drop?', delay: 0 },
          { text: 'Analyzing campaigns...', delay: 1 },
          { text: 'Found 3 issues.', delay: 2 },
        ].map((msg, i) => (
          <motion.div
            key={i}
            className="bg-blue-600/80 text-white text-xs px-3 py-2 rounded-lg rounded-bl-none max-w-[80%]"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [10, 0, 0, -10],
            }}
            transition={{
              duration: 4,
              delay: msg.delay,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            {msg.text}
            <motion.span
              className="inline-block ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            >
              _
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const features = [
    {
      title: '24/7 Performance Audits',
      description: 'AI continuously monitors your campaigns, identifying wasted spend, optimization opportunities, and performance issues.',
      size: 'large' as const,
      visualization: PerformanceAuditsViz,
    },
    {
      title: 'Automated Budget Reallocation',
      description: 'AI automatically shifts budget from underperforming campaigns to winners, maximizing your ROAS.',
      size: 'medium' as const,
      visualization: BudgetReallocationViz,
    },
    {
      title: 'Keyword Optimization',
      description: 'AI identifies and pauses low-performing keywords, adds negative keywords, and suggests new high-value terms.',
      size: 'medium' as const,
      visualization: KeywordOptimizationViz,
    },
    {
      title: 'Smart Reporting',
      description: 'Automated reports that build themselves. Get insights on performance, trends, and recommendations without manual work.',
      size: 'large' as const,
      visualization: SmartReportingViz,
    },
    {
      title: 'AI Creative Generation',
      description: 'Generate high-performing ad creatives automatically. Test multiple variations and let AI optimize for best results.',
      size: 'medium' as const,
      visualization: AICreativeGenerationViz,
    },
    {
      title: 'AI Chat for Ads',
      description: 'Ask questions in plain English: "Why did ROAS drop?" or "Which campaigns are wasting spend?" Get instant insights.',
      size: 'medium' as const,
      visualization: AIChatViz,
    },
  ]

  const getCardSize = (size: 'large' | 'medium') => {
    if (size === 'large') return 'md:col-span-2 md:row-span-2'
    return 'md:col-span-1 md:row-span-1'
  }

  const getAdjacentIndices = (index: number) => {
    const adjacent: number[] = []
    const cols = 3
    
    if (index % cols !== 0) adjacent.push(index - 1)
    if (index % cols !== cols - 1) adjacent.push(index + 1)
    if (index >= cols) adjacent.push(index - cols)
    if (index < features.length - cols) adjacent.push(index + cols)
    
    return adjacent
  }

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Animated mesh gradient background */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15), transparent 60%)',
            'radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.15), transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15), transparent 60%)',
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15), transparent 60%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Scale
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features that work together to optimize your ad performance automatically.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto"
        >
          {features.map((feature, index) => {
            const isHovered = hoveredIndex === index
            const adjacentIndices = getAdjacentIndices(index)
            const isAdjacent = hoveredIndex !== null && hoveredIndex !== index && adjacentIndices.includes(hoveredIndex)
            const Visualization = feature.visualization

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`${getCardSize(feature.size)} min-h-[280px] transform-gpu`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  scale: isHovered ? 1.03 : isAdjacent ? 0.98 : 1,
                }}
                style={{
                  transform: isHovered 
                    ? `perspective(1000px) rotateX(${index % 2 === 0 ? -2 : 2}deg) rotateY(${index % 2 === 0 ? 2 : -2}deg)` 
                    : 'perspective(1000px)',
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Glassmorphism Card */}
                <div className={`relative h-full bg-white/70 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border-2 transition-all duration-500 overflow-hidden group ${
                  isHovered
                    ? 'border-primary-400 shadow-2xl shadow-primary-200/30'
                    : 'border-gray-200/50 hover:border-primary-300 hover:shadow-xl'
                }`}>
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 rounded-2xl -z-10" />

                  {/* Hover glow */}
                  {isHovered && (
                    <motion.div
                      className="absolute -inset-1 bg-primary-400 rounded-2xl opacity-30 blur-2xl -z-20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Adjacent dim overlay */}
                  {isAdjacent && (
                    <div className="absolute inset-0 bg-black/5 rounded-2xl -z-5" />
                  )}

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Visualization */}
                    <div className="mb-6">
                      <Visualization />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base flex-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
