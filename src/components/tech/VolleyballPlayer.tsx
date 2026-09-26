import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export interface VolleyballPlayerProps {
  className?: string;
  mode?: 'patrol' | 'station';
  speed?: number;
  scale?: number;
  interactive?: boolean;
}

const VOLLEYBALL_DIALOGUES = [
  '🏐 SMASH! Bug langsung kena smash keluar produksi!',
  'Nice receive! Semua skenario testing aman terkendali ~',
  'Spike tajam! Menjaga kualitas sistem selalu prima!',
  'Ayo oper bolanya, jangan biarkan regresi tembus ke release!',
  'Jump serve ace! 100% automated test coverage!'
];

export const VolleyballPlayer: React.FC<VolleyballPlayerProps> = ({
  className = '',
  mode = 'station',
  speed = 22,
  scale = 1,
  interactive = true,
}) => {
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('rtl');
  const [currentQuip, setCurrentQuip] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const x = useMotionValue(0);
  const quipTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePlayerClick = () => {
    if (!interactive) return;
    const randomQuip = VOLLEYBALL_DIALOGUES[Math.floor(Math.random() * VOLLEYBALL_DIALOGUES.length)];
    setCurrentQuip(randomQuip);

    if (quipTimeoutRef.current) clearTimeout(quipTimeoutRef.current);
    quipTimeoutRef.current = setTimeout(() => {
      setCurrentQuip(null);
    }, 4000);
  };

  // Movement loop for patrol mode
  useEffect(() => {
    if (mode !== 'patrol') return;

    let animId: number;
    let lastTime = performance.now();
    const patrolRange = 160; // Patrol 160px back and forth on the sand

    const moveLoop = (currentTime: number) => {
      const delta = Math.min(0.05, (currentTime - lastTime) / 1000);
      lastTime = currentTime;

      const currX = x.get();
      const currentSpeed = isHovered ? speed * 0.3 : speed;

      if (direction === 'rtl') {
        const nextX = currX - currentSpeed * delta;
        if (nextX < -patrolRange) {
          setDirection('ltr');
          x.set(-patrolRange);
        } else {
          x.set(nextX);
        }
      } else {
        const nextX = currX + currentSpeed * delta;
        if (nextX > 0) {
          setDirection('rtl');
          x.set(0);
        } else {
          x.set(nextX);
        }
      }

      animId = requestAnimationFrame(moveLoop);
    };

    animId = requestAnimationFrame(moveLoop);
    return () => {
      cancelAnimationFrame(animId);
      if (quipTimeoutRef.current) clearTimeout(quipTimeoutRef.current);
    };
  }, [direction, isHovered, mode, speed, x]);

  return (
    <motion.div
      style={mode === 'patrol' ? { x } : undefined}
      className={`relative select-none ${className}`}
    >
      <motion.div
        onClick={handlePlayerClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative ${interactive ? 'cursor-pointer' : 'pointer-events-none'}`}
        style={{
          transform: `scale(${scale}) ${direction === 'ltr' ? 'scaleX(-1)' : 'scaleX(1)'}`,
          transformOrigin: 'bottom center',
        }}
      >
        {/* Dynamic Sand Shadow beneath player */}
        <motion.div
          animate={{
            scaleX: [1, 0.65, 1],
            scaleY: [1, 0.7, 1],
            opacity: [0.65, 0.25, 0.65],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-2 left-3 right-3 h-3 bg-[#c4ad82]/80 rounded-full blur-[2px] pointer-events-none"
        />

        {/* Volleyball Player Character (Jumping & Spiking) */}
        <motion.div
          animate={{
            y: [0, -22, -26, -4, 0],
            rotate: [0, -3, 2, 0, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            times: [0, 0.45, 0.55, 0.85, 1],
            ease: 'easeInOut',
          }}
          className="relative inline-block"
        >
          {/* Animated Volleyball in Air */}
          <motion.div
            animate={{
              y: [-12, -42, -48, -14, -12],
              x: [6, 14, 18, 8, 6],
              rotate: [0, 180, 360, 420, 0],
              scale: [0.95, 1.1, 1.15, 1, 0.95],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              times: [0, 0.45, 0.55, 0.85, 1],
              ease: 'easeInOut',
            }}
            className="absolute -top-3 right-0 w-7 h-7 drop-shadow-md z-10 pointer-events-none"
          >
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Ball Circle */}
              <circle cx="16" cy="16" r="14" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
              {/* Blue and Yellow Volleyball Stripes */}
              <path d="M2 16 C6 10, 14 6, 20 4" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
              <path d="M16 30 C12 24, 14 14, 28 12" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
              <path d="M22 28 C26 22, 28 14, 28 8" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M6 22 C10 26, 18 28, 24 24" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Volleyball Player SVG Body */}
          <svg
            width="75"
            height="85"
            viewBox="0 0 75 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-md overflow-visible"
          >
            {/* Left Arm (Spiking upward/forward) */}
            <motion.path
              animate={{
                d: [
                  'M34 26 L46 14 L56 6',
                  'M34 26 L48 10 L60 2',
                  'M34 26 L48 10 L60 2',
                  'M34 26 L44 18 L52 14',
                  'M34 26 L46 14 L56 6',
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                times: [0, 0.45, 0.55, 0.85, 1],
                ease: 'easeInOut',
              }}
              stroke="#EA580C"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Spiking hand */}
            <circle cx="58" cy="4" r="3.5" fill="#FDBA74" stroke="#EA580C" strokeWidth="1.2" />

            {/* Right Arm (Balance) */}
            <path
              d="M22 28 L14 18 L6 20"
              stroke="#EA580C"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="6" cy="20" r="3" fill="#FDBA74" stroke="#EA580C" strokeWidth="1.2" />

            {/* Left Leg (Bent in jump) */}
            <motion.path
              animate={{
                d: [
                  'M34 50 L38 65 L44 80',
                  'M34 50 L42 62 L38 74',
                  'M34 50 L42 62 L38 74',
                  'M34 50 L36 68 L42 82',
                  'M34 50 L38 65 L44 80',
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                times: [0, 0.45, 0.55, 0.85, 1],
                ease: 'easeInOut',
              }}
              stroke="#EA580C"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Left athletic shoe */}
            <rect x="40" y="78" width="9" height="5" rx="2" fill="#0284C7" stroke="#0F172A" strokeWidth="1" />

            {/* Right Leg (Bent back) */}
            <motion.path
              animate={{
                d: [
                  'M24 50 L20 64 L16 78',
                  'M24 50 L16 58 L12 70',
                  'M24 50 L16 58 L12 70',
                  'M24 50 L18 66 L15 80',
                  'M24 50 L20 64 L16 78',
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                times: [0, 0.45, 0.55, 0.85, 1],
                ease: 'easeInOut',
              }}
              stroke="#EA580C"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Right athletic shoe */}
            <rect x="11" y="76" width="9" height="5" rx="2" fill="#F59E0B" stroke="#0F172A" strokeWidth="1" />

            {/* Beach Shorts */}
            <path
              d="M18 40 L40 40 L42 53 L32 52 L30 50 L28 52 L16 53 Z"
              fill="#0284C7"
              stroke="#0F172A"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Shorts yellow stripe */}
            <path d="M17 48 L41 48" stroke="#FDE047" strokeWidth="2.5" />

            {/* Torso / Jersey Tank Top */}
            <path
              d="M20 25 L38 25 L40 42 L18 42 Z"
              fill="#EF4444"
              stroke="#0F172A"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Jersey number '07' */}
            <text x="25" y="36" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">
              QA
            </text>

            {/* Head & Neck */}
            <circle cx="28" cy="14" r="8" fill="#FDBA74" stroke="#EA580C" strokeWidth="1.5" />

            {/* Cool Sunglasses */}
            <rect x="26" y="12" width="11" height="4.5" rx="1.5" fill="#0F172A" />
            <line x1="24" y1="13.5" x2="26" y2="13.5" stroke="#0F172A" strokeWidth="1" />

            {/* Cap / Beach Hair */}
            <path
              d="M20 14 C20 7, 34 5, 36 11 L42 12"
              fill="#0284C7"
              stroke="#0F172A"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>

          {/* Dialogue Speech Bubble */}
          {currentQuip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 6 }}
              className={`absolute -top-12 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-2xl bg-white text-[#0f172a] text-xs font-black shadow-xl border-2 border-[#0f172a] whitespace-nowrap backdrop-blur-md flex items-center gap-1.5 z-30 ${
                direction === 'ltr' ? '-scale-x-100' : 'scale-x-100'
              }`}
            >
              <span>{currentQuip}</span>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
