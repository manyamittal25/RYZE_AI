import { motion, useInView } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { useRef, useState } from 'react'

const WallOfLove = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: '400px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [likedCards, setLikedCards] = useState<Set<number>>(new Set())

  // Testimonials with images
  const testimonials = [
    {
      type: 'testimonial',
      quote: "We were drowning with 7 people. Got back so many hours each week from reporting. Finally have bandwidth to focus on actual strategy.",
      author: "Roger Dunn",
      role: "Global Performance Lead",
      company: "Rivert",
      image: "/images/customer1.jpg",
      rating: 5,
    },
    {
      type: 'testimonial',
      quote: "Ryze's AI-driven ads outperform human optimization by a huge margin. +63% better ROAS after switching to AI agents.",
      author: "Mathilde Biggs",
      role: "CEO",
      company: "MotifDigital",
      image: "/images/customer2.jpg",
      rating: 5,
    },
    {
      type: 'testimonial',
      quote: "Broke down performance by asset—thumbnails, headlines, everything. Suggested swaps based on real data. Our CTR basically doubled.",
      author: "Daniel Amezquita",
      role: "Global Ads Strategy",
      company: "Glava",
      image: "/images/customer3.jpg",
      rating: 5,
    },
  ]

  // Additional content cards for bento grid
  const metricCards = [
    {
      type: 'metric',
      value: '+63%',
      label: 'Average ROAS Improvement',
      icon: '📈',
    },
    {
      type: 'metric',
      value: '24/7',
      label: 'Automated Optimization',
      icon: '🤖',
    },
  ]

  const platformCards = [
    {
      type: 'platform',
      platform: 'Trustpilot',
      rating: 4.8,
      reviews: '2,400+',
      color: 'from-green-500 to-green-600',
    },
    {
      type: 'platform',
      platform: 'G2',
      rating: 4.9,
      reviews: '1,800+',
      color: 'from-blue-500 to-blue-600',
    },
  ]

  // Combine all cards in a bento layout
  const allCards = [
    testimonials[0], // Large testimonial
    metricCards[0],  // Metric
    testimonials[1], // Medium testimonial
    platformCards[0], // Platform badge
    metricCards[1],  // Metric
    testimonials[2], // Large testimonial
    platformCards[1], // Platform badge
  ]

  const handleLike = (index: number) => {
    setLikedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const getCardSize = (index: number, card: any) => {
    if (card.type === 'testimonial') {
      // Testimonials alternate between large and medium
      if (index === 0 || index === 5) return 'md:col-span-2 md:row-span-2'
      return 'md:col-span-1 md:row-span-2'
    }
    if (card.type === 'metric') return 'md:col-span-1 md:row-span-1'
    if (card.type === 'platform') return 'md:col-span-1 md:row-span-1'
    return 'md:col-span-1 md:row-span-1'
  }

  const getAdjacentIndices = (index: number) => {
    const adjacent: number[] = []
    const cols = 3 // 3 columns in md breakpoint
    
    // Left
    if (index % cols !== 0) adjacent.push(index - 1)
    // Right
    if (index % cols !== cols - 1) adjacent.push(index + 1)
    // Top
    if (index >= cols) adjacent.push(index - cols)
    // Bottom
    if (index < allCards.length - cols) adjacent.push(index + cols)
    
    return adjacent
  }

  return (
    <section 
      id="wall-of-love" 
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Animated mesh gradient background */}
      <motion.div
        className="absolute inset-0 opacity-[0.06]"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15), transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.15), transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15), transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15), transparent 50%)',
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
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div 
            variants={fadeInUp} 
            className="inline-block mb-5 px-5 py-2.5 bg-white/80 backdrop-blur-md text-primary-700 rounded-full text-sm font-semibold border border-primary-100/50 shadow-sm"
          >
            Wall of Love
          </motion.div>
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 tracking-tight"
          >
            Loved by Teams Worldwide
          </motion.h2>
          <motion.p 
            variants={fadeInUp} 
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Real stories from real customers using Ryze AI to transform their ad campaigns
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
          {allCards.map((card, index) => {
            const isHovered = hoveredIndex === index
            const adjacentIndices = getAdjacentIndices(index)
            const isAdjacent = hoveredIndex !== null && adjacentIndices.includes(hoveredIndex)
            const isLiked = likedCards.has(index)

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`${getCardSize(index, card)} min-h-[200px]`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  scale: isHovered ? 1.02 : isAdjacent ? 0.998 : 1,
                  y: isHovered ? -4 : isAdjacent ? 2 : 0,
                  transition: {
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
              >
                {/* Testimonial Card */}
                {card.type === 'testimonial' && 'quote' in card && (
                  <div className="relative h-full bg-white/70 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group">
                    {/* Glassmorphism overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 rounded-2xl -z-10" />
                    
                    {/* Like button */}
                    <button
                      onClick={() => handleLike(index)}
                      className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white transition-all duration-300 group/like"
                      aria-label="Like testimonial"
                    >
                      <motion.svg
                        className="w-5 h-5"
                        fill={isLiked ? '#EF4444' : 'none'}
                        stroke={isLiked ? '#EF4444' : '#6B7280'}
                        viewBox="0 0 24 24"
                        initial={false}
                        animate={{
                          scale: isLiked ? [1, 1.3, 1] : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </motion.svg>
                    </button>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Quote */}
                      <div className="mb-6 flex-1">
                        <svg 
                          className="w-8 h-8 text-primary-300/60 mb-4" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
                          {card.quote}
                        </p>
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-4 pt-6 border-t border-gray-200/50">
                        <img
                          src={card.image}
                          alt={card.author}
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-2 ring-white shadow-md"
                          onError={(e) => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(card.author)}&size=128&background=random&color=fff&bold=true`
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-gray-900 text-sm sm:text-base truncate">
                            {card.author}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 truncate">
                            {card.role}
                          </div>
                          <div className="text-xs text-primary-600 font-semibold truncate">
                            {card.company}
                          </div>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(card.rating)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Metric Card */}
                {card.type === 'metric' && 'value' in card && (
                  <div className="relative h-full bg-gradient-to-br from-primary-500/10 to-primary-600/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-primary-200/30 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-white/30 rounded-2xl -z-10" />
                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                      <div className="text-4xl mb-2">{card.icon}</div>
                      <div className="text-4xl sm:text-5xl font-bold text-primary-700 mb-2">
                        {card.value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {card.label}
                      </div>
                    </div>
                  </div>
                )}

                {/* Platform Card */}
                {card.type === 'platform' && 'platform' in card && (
                  <div className="relative h-full bg-white/70 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 rounded-2xl -z-10" />
                    <div className="relative z-10 h-full flex flex-col justify-center">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${card.color} text-white text-sm font-semibold mb-4 w-fit`}>
                        <span>{card.platform}</span>
                      </div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <div className="text-3xl font-bold text-gray-900">
                          {card.rating}
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {card.reviews} reviews
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Footer */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Join thousands of teams already using Ryze AI
          </p>
          <motion.a
            href="#book-demo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Free Trial
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default WallOfLove
