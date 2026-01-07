import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { useRef, useState, useEffect } from 'react'

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState<number>(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center']
  })

  const steps = [
    {
      number: '01',
      title: 'Connect Your Accounts',
      description: 'Link your Google Ads, Meta, and TikTok accounts in minutes. Secure, read-only access.',
      side: 'left' as const,
      platforms: ['Google Ads', 'Meta', 'TikTok'],
    },
    {
      number: '02',
      title: 'AI Analyzes Performance',
      description: 'Our AI audits your campaigns 24/7, identifying wasted spend and optimization opportunities.',
      side: 'right' as const,
    },
    {
      number: '03',
      title: 'Get Actionable Suggestions',
      description: 'Receive specific recommendations: pause low performers, increase budgets, add negatives, and more.',
      side: 'left' as const,
    },
    {
      number: '04',
      title: 'Apply Changes Automatically',
      description: 'Review and approve suggestions with one click. AI handles the rest, or chat with AI for custom strategies.',
      side: 'right' as const,
    },
  ]

  // Track which step is in view
  useEffect(() => {
    if (!containerRef.current) return

    const stepElements = containerRef.current.querySelectorAll('[data-step]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0')
            setActiveStep(stepIndex)
          }
        })
      },
      { threshold: 0.6, rootMargin: '-100px' }
    )

    stepElements.forEach((el) => observer.observe(el))
    return () => {
      stepElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="how-it-works" 
      className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            Simple Process
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6">
            How It Works
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes. No complex setup, no manual work. Just connect and let AI do the rest.
          </motion.p>
        </motion.div>

        {/* Neural Path Scroll-Synced Layout */}
        <div ref={containerRef} className="relative min-h-[1200px] lg:min-h-[1600px]">
          {/* Central Neural Spine - Vertical line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 z-0">
            {/* Background line */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 opacity-30" />
            
            {/* Active progress line */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-500 via-primary-600 to-primary-500"
              style={{
                height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
              }}
              initial={{ height: '0%' }}
              animate={{ 
                height: `${(activeStep / (steps.length - 1)) * 100}%` 
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />

            {/* Glow effect */}
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-primary-400 opacity-40 blur-lg"
              style={{
                height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
              }}
              initial={{ height: '0%' }}
              animate={{ 
                height: `${(activeStep / (steps.length - 1)) * 100}%` 
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />

            {/* Connection nodes at each step */}
            {steps.map((_, index) => {
              const isActive = activeStep >= index
              const topPosition = `${(index / (steps.length - 1)) * 100}%`
              
              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-primary-500"
                  style={{ top: topPosition }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: isActive ? 1 : 0.6,
                    opacity: isActive ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary-500"
                    animate={{
                      scale: isActive ? [1, 1.5, 1] : 1,
                      opacity: isActive ? [0.6, 0, 0.6] : 0.3,
                    }}
                    transition={{
                      duration: 2,
                      repeat: isActive ? Infinity : 0,
                    }}
                  />
                </motion.div>
              )
            })}
          </div>

          {/* Steps alternating left/right */}
          <div className="space-y-32 lg:space-y-48 relative z-10">
            {steps.map((step, index) => {
              const isActive = activeStep === index
              const isHovered = hoveredStep === index
              const isStep01 = index === 0

              return (
                <motion.div
                  key={index}
                  data-step={index}
                  initial={{ opacity: 0, x: step.side === 'left' ? -80 : 80 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    x: 0,
                  }}
                  transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`relative ${
                    step.side === 'left' 
                      ? 'lg:pr-[55%] lg:text-right' 
                      : 'lg:pl-[55%] lg:text-left'
                  } text-center lg:text-left`}
                  style={{ 
                    minHeight: '300px',
                  }}
                >
                  {/* Gradient Card - matching reference */}
                  <motion.div
                    className={`relative bg-gradient-to-br from-primary-50 via-blue-50/50 to-white rounded-3xl p-8 sm:p-10 lg:p-12 border-2 transition-all duration-500 overflow-hidden group ${
                      isActive 
                        ? 'border-primary-400 shadow-2xl shadow-primary-200/30' 
                        : 'border-primary-200 hover:border-primary-300 hover:shadow-xl'
                    }`}
                    animate={{
                      scale: isHovered ? 1.02 : 1,
                      y: isHovered ? -6 : 0,
                    }}
                  >
                    {/* Connection line to spine */}
                    <div className={`hidden lg:block absolute top-1/2 ${
                      step.side === 'left' ? 'right-0' : 'left-0'
                    } w-[45%] h-0.5 z-0`}>
                      <motion.div
                        className={`h-full bg-gradient-to-r ${
                          step.side === 'left' 
                            ? 'from-transparent via-primary-300 to-primary-400' 
                            : 'from-primary-400 via-primary-300 to-transparent'
                        }`}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ 
                          scaleX: isActive ? 1 : 0.3,
                          opacity: isActive ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.6 }}
                        style={{ transformOrigin: step.side === 'left' ? 'right' : 'left' }}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Step badge */}
                      <motion.div
                        className={`inline-block px-5 py-2.5 rounded-lg text-sm font-bold mb-6 ${
                          isActive
                            ? 'bg-primary-700 text-white shadow-lg'
                            : 'bg-primary-100 text-primary-700'
                        } transition-all duration-300`}
                        animate={{
                          scale: isActive ? [1, 1.05, 1] : 1,
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: isActive ? Infinity : 0,
                          repeatDelay: 2,
                        }}
                      >
                        Step {step.number}
                      </motion.div>

                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 max-w-xl">
                        {step.description}
                      </p>

                      {/* Step 01: Rotating platform logos */}
                      {isStep01 && step.platforms && (
                        <div className="relative h-48 flex items-center justify-center">
                          {/* Chain link icon in center */}
                          <motion.div
                            className="absolute z-20 w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center"
                            animate={{
                              scale: isHovered ? [1, 1.15, 1] : 1,
                            }}
                            transition={{
                              duration: 2,
                              repeat: isHovered ? Infinity : 0,
                            }}
                          >
                            <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                          </motion.div>

                          {/* Rotating platform logos */}
                          {step.platforms.map((platform, platformIndex) => {
                            const baseAngle = (360 / step.platforms.length) * platformIndex
                            const radius = isHovered ? 100 : 80
                            
                            return (
                              <motion.div
                                key={platform}
                                className="absolute"
                                animate={{
                                  rotate: isHovered ? baseAngle + 360 : baseAngle,
                                  x: isHovered 
                                    ? `calc(cos(${baseAngle}deg) * ${radius}px)` 
                                    : `calc(cos(${baseAngle}deg) * ${radius * 0.75}px)`,
                                  y: isHovered 
                                    ? `calc(sin(${baseAngle}deg) * ${radius}px)` 
                                    : `calc(sin(${baseAngle}deg) * ${radius * 0.75}px)`,
                                  opacity: isHovered ? 1 : 0.8,
                                  scale: isHovered ? 1.1 : 1,
                                }}
                                transition={{
                                  duration: isHovered ? 8 : 0.6,
                                  ease: 'linear',
                                  repeat: isHovered ? Infinity : 0,
                                }}
                              >
                                <div className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm font-medium text-gray-700 whitespace-nowrap shadow-md">
                                  {platform}
                                </div>
                              </motion.div>
                            )
                          })}

                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
