import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

const Bubble = ({ size, x, y, delay, duration, color }) => {
  return (
    <motion.div
      initial={{ x, y, opacity: 0 }}
      animate={{
        y: [y, y - 120, y],
        x: [x, x + 40, x - 30, x],
        opacity: [0.05, 0.6, 0.35, 0.5],
      }}
      transition={{
        duration,
        delay,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
      style={{
        width: size,
        height: size,
        left: 0,
        top: 0,
        background: color,
        filter: 'blur(6px)',
      }}
      className="absolute rounded-full pointer-events-none"
    />
  )
}

const BackgroundBubbles = () => {
  const bubbles = useMemo(() => {
    // deterministic set of bubbles for consistent layout
    return [
      { size: 320, x: 80, y: 220, delay: 0.2, duration: 16, color: 'rgba(59,130,246,0.28)' },
      { size: 380, x: 340, y: 460, delay: 1.1, duration: 18, color: 'rgba(16,185,129,0.24)' },
      { size: 240, x: 680, y: 140, delay: 0.6, duration: 14, color: 'rgba(99,102,241,0.26)' },
      { size: 320, x: 980, y: 380, delay: 0.9, duration: 20, color: 'rgba(14,165,233,0.24)' },
      { size: 360, x: 1160, y: 120, delay: 0.5, duration: 22, color: 'rgba(2,132,199,0.22)' },
      { size: 260, x: 220, y: 680, delay: 0.3, duration: 19, color: 'rgba(20,184,166,0.24)' },
    ]
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1c2d] via-[#0e1a29] to-[#0b1320]" />
      {/* subtle vignette */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(80% 60% at 50% 40%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.0) 60%)'
      }} />
      {/* bubbles layer */}
      <div className="absolute inset-0 opacity-100">
        {bubbles.map((b, i) => (
          <Bubble key={i} {...b} />
        ))}
      </div>
    </div>
  )
}

export default BackgroundBubbles


