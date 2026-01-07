import { motion } from 'framer-motion'

const PartnerLogos = () => {
  const partners = [
    {
      name: 'Caleyx',
      logo: (
        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight" style={{ fontFamily: 'sans-serif' }}>
          caleyx
        </span>
      ),
    },
    {
      name: 'Directly',
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide">directly</span>
        </div>
      ),
    },
    {
      name: 'HG',
      logo: (
        <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter italic" style={{ fontFamily: 'serif' }}>
          HG
        </span>
      ),
    },
    {
      name: 'MOS',
      logo: (
        <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-widest uppercase">MOS</span>
      ),
    },
    {
      name: 'Motif Digital',
      logo: (
        <div className="flex flex-col items-center leading-tight">
          <span className="text-xl sm:text-2xl lg:text-3xl font-bold">Motif</span>
          <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">DIGITAL</span>
        </div>
      ),
    },
    {
      name: 'Pupil',
      logo: (
        <span className="text-2xl sm:text-3xl lg:text-4xl font-black px-3 py-1.5 tracking-normal">PUPIL</span>
      ),
    },
    {
      name: 'Ritma',
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M3 12h4l3-8 4 16 3-8h4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">Ritma</span>
        </div>
      ),
    },
    {
      name: 'Boston Globe',
      logo: (
        <span className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-normal" style={{ fontFamily: 'serif' }}>
          Boston Globe Media
        </span>
      ),
    },
    {
      name: 'Rarible',
      logo: (
        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight lowercase">Rarible</span>
      ),
    },
  ]

  // Duplicate for seamless infinite scroll
  const partnersRow = [...partners, ...partners]

  // Create two rows with different logo arrangements
  const row1Partners = partnersRow
  const row2Partners = [...partners.slice(3), ...partners.slice(0, 3), ...partners.slice(3), ...partners.slice(0, 3)]

  const LogoRow = ({ partners: rowPartners, direction = 'left' }: { partners: typeof partnersRow, direction?: 'left' | 'right' }) => (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-10 sm:gap-14 lg:gap-16 items-center"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 40,
            ease: 'linear',
          },
        }}
        style={{
          width: '200%',
        }}
      >
        {rowPartners.map((partner, index) => {
          const uniqueKey = `${partner.name}-${index}-${direction}`
          
          return (
            <div
              key={uniqueKey}
              className="flex-shrink-0 flex items-center justify-center min-w-[140px] sm:min-w-[170px] lg:min-w-[200px] h-16 sm:h-20 lg:h-24"
            >
              <div className="relative z-10 flex items-center justify-center w-full h-full px-4 text-black">
                {partner.logo}
              </div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )

  return (
    <section className="relative py-6 sm:py-8 overflow-hidden bg-white border-y border-gray-100">
      {/* Gradient fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-white via-white to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-white via-white to-transparent z-20 pointer-events-none" />

      {/* Row 1 - Moving Left */}
      <div className="relative mb-3 sm:mb-4">
        <LogoRow partners={row1Partners} direction="left" />
      </div>

      {/* Row 2 - Moving Right */}
      <div className="relative">
        <LogoRow partners={row2Partners} direction="right" />
      </div>

      {/* Optional: Subtle label */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 sm:-translate-y-8 z-10">
        <span className="text-[10px] sm:text-xs font-medium text-gray-400 tracking-widest uppercase opacity-60">
          Trusted by Industry Leaders
        </span>
      </div>
    </section>
  )
}

export default PartnerLogos
