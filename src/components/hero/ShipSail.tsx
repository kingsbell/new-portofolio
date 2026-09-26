import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export interface ShipSailProps {
  className?: string;
  mode?: 'cruise' | 'static';
  speed?: number;
  initialDirection?: 'ltr' | 'rtl';
  scale?: number;
  interactive?: boolean;
  topPercent?: number; // Distance from top in percentage (e.g., 22% for horizon)
  onSailSwim?: (x: number, y: number) => void;
}



const SHIP_DIALOGUES = [
  '⛵ Berlayar santai di samudra kode berkualitas!',
  'Semua tes PASS! Angin buritan mendorong kita melaju kencang ~',
  'Awas karang regresi di sebelah kiri, kapten!',
  'Nakhoda QA siap menjaga kestabilan pelayaran rilis!',
  'Pelayaran aman, 0 bug kritis terdeteksi di radar!',
  'Menuju pulau rilis berikutnya dengan tenang ~',
  'Jangkar terangkat, siap mengarungi tantangan baru!'
];

export const ShipSail: React.FC<ShipSailProps> = ({
  className = '',
  mode = 'cruise',
  speed = 28,
  initialDirection = 'ltr',
  scale = 1,
  interactive = true,
  topPercent = 28,
  onSailSwim,
}) => {
  const [direction, setDirection] = useState<'ltr' | 'rtl'>(initialDirection);
  const [currentQuip, setCurrentQuip] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const x = useMotionValue(direction === 'ltr' ? -150 : 1500);

  const shipRef = useRef<HTMLDivElement | null>(null);
  const lastRippleTimeRef = useRef<number>(0);
  const quipTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Trigger random dialogue on click or tap
  const handleShipClick = () => {
    if (!interactive) return;
    const randomQuip = SHIP_DIALOGUES[Math.floor(Math.random() * SHIP_DIALOGUES.length)];
    setCurrentQuip(randomQuip);

    if (quipTimeoutRef.current) clearTimeout(quipTimeoutRef.current);
    quipTimeoutRef.current = setTimeout(() => {
      setCurrentQuip(null);
    }, 4000);
  };

  // Cruising loop if mode is 'cruise'
  useEffect(() => {
    if (mode !== 'cruise') return;

    let animId: number;
    let lastTime = performance.now();

    const sailLoop = (currentTime: number) => {
      const delta = Math.min(0.05, (currentTime - lastTime) / 1000);
      lastTime = currentTime;

      const currX = x.get();
      const currentSpeed = isHovered ? speed * 0.4 : speed;
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1400;

      // Trigger ocean surface ripple just like duck
      if (shipRef.current && onSailSwim) {
        const now = performance.now();
        if (now - lastRippleTimeRef.current > 420) {
          lastRippleTimeRef.current = now;
          const rect = shipRef.current.getBoundingClientRect();
          onSailSwim(rect.left + rect.width / 2, rect.top + rect.height * 0.85);
        }
      }

      if (direction === 'ltr') {
        const nextX = currX + currentSpeed * delta;
        if (nextX > screenWidth + 180) {
          x.set(-180);
          // 40% chance to flip direction on re-entry
          if (Math.random() > 0.6) {
            setDirection('rtl');
            x.set(screenWidth + 180);
          }
        } else {
          x.set(nextX);
        }
      } else {
        const nextX = currX - currentSpeed * delta;
        if (nextX < -180) {
          x.set(screenWidth + 180);
          if (Math.random() > 0.6) {
            setDirection('ltr');
            x.set(-180);
          }
        } else {
          x.set(nextX);
        }
      }

      animId = requestAnimationFrame(sailLoop);
    };

    animId = requestAnimationFrame(sailLoop);
    return () => {
      cancelAnimationFrame(animId);
      if (quipTimeoutRef.current) clearTimeout(quipTimeoutRef.current);
    };
  }, [direction, isHovered, mode, onSailSwim, speed, x]);

  return (
    <motion.div
      ref={shipRef}
      style={mode === 'cruise' ? { x, top: `${topPercent}%` } : undefined}
      className={`${mode === 'cruise' ? 'absolute z-10' : 'relative'} select-none ${className}`}
    >
      <motion.div
        onClick={handleShipClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative ${interactive ? 'cursor-pointer' : 'pointer-events-none'}`}
        style={{
          transform: `scale(${scale}) ${direction === 'rtl' ? 'scaleX(-1)' : 'scaleX(1)'}`,
          transformOrigin: 'bottom center'
        }}
      >
        {/* Bobbing & Rocking on Ocean Waves */}
        <motion.div
          animate={{
            y: [-3, 3, -3],
            rotate: [-2, 2.5, -2],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.8,
            ease: 'easeInOut',
          }}
          className="relative inline-block"
        >
          {/* Deep water contact shadow beneath hull (same as SwimmingDuck) */}
          <div className="absolute -bottom-2 left-2 right-2 h-3.5 bg-[#04101e]/60 rounded-full blur-[2px]" />

          {/* Concentric water ripple waves around the ship hull */}
          <motion.div
            animate={{
              scale: [0.95, 1.35, 1.55],
              opacity: [0.75, 0.35, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: 'easeOut',
            }}
            className="absolute -bottom-2.5 -left-3 -right-3 h-4 border-2 border-[#38bdf8]/60 rounded-full pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [0.85, 1.25, 1.45],
              opacity: [0.65, 0.25, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              delay: 1.1,
              ease: 'easeOut',
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-3.5 border border-[#bae6fd]/50 rounded-full pointer-events-none"
          />

          {/* Wake ripple line behind the ship */}
          <motion.div
            animate={{
              opacity: [0.4, 0.85, 0.4],
              scaleX: [0.9, 1.2, 0.9],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-1 -left-5 w-14 h-1.5 bg-[#bae6fd]/50 rounded-full blur-[1px]"
          />

          {/* Sailboat SVG Art */}
          <svg
            width="100"
            height="86"
            viewBox="0 0 100 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_4px_12px_rgba(2,132,199,0.25)] overflow-visible"
          >
            {/* Mast */}
            <line
              x1="48"
              y1="10"
              x2="48"
              y2="58"
              stroke="#78350F"
              strokeWidth="2.8"
              strokeLinecap="round"
            />

            {/* Boom (horizontal sail pole) */}
            <line
              x1="22"
              y1="56"
              x2="48"
              y2="56"
              stroke="#92400E"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Fluttering Pennant Flag at Top */}
            <motion.path
              animate={{
                d: [
                  'M48 10 L34 14 L48 18 Z',
                  'M48 10 L36 12 L48 18 Z',
                  'M48 10 L34 14 L48 18 Z'
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: 'easeInOut'
              }}
              fill="#EF4444"
              stroke="#DC2626"
              strokeWidth="0.8"
            />

            {/* Mainsail (Back) */}
            <motion.path
              animate={{
                d: [
                  'M46 14 C32 28, 26 44, 22 55 L46 54 Z',
                  'M46 14 C30 26, 24 42, 22 55 L46 54 Z',
                  'M46 14 C32 28, 26 44, 22 55 L46 54 Z'
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: 'easeInOut'
              }}
              fill="#FFFFFF"
              stroke="#E2E8F0"
              strokeWidth="1.5"
            />
            {/* Mainsail Shadow Line */}
            <path
              d="M44 18 C36 32, 32 44, 28 53"
              stroke="#CBD5E1"
              strokeWidth="1"
              strokeDasharray="2 3"
              fill="none"
            />

            {/* Jib Sail (Front) */}
            <motion.path
              animate={{
                d: [
                  'M50 18 C60 32, 68 44, 76 56 L50 56 Z',
                  'M50 18 C62 30, 70 42, 76 56 L50 56 Z',
                  'M50 18 C60 32, 68 44, 76 56 L50 56 Z'
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 3.4,
                ease: 'easeInOut'
              }}
              fill="#F8FAFC"
              stroke="#E2E8F0"
              strokeWidth="1.5"
            />

            {/* Cabin Deck Structure */}
            <rect
              x="36"
              y="52"
              width="24"
              height="7"
              rx="2"
              fill="#F1F5F9"
              stroke="#CBD5E1"
              strokeWidth="1"
            />
            {/* Porthole Windows */}
            <circle cx="42" cy="55.5" r="1.5" fill="#0284C7" />
            <circle cx="48" cy="55.5" r="1.5" fill="#0284C7" />
            <circle cx="54" cy="55.5" r="1.5" fill="#0284C7" />

            {/* Ship Hull (Boat Body) */}
            <path
              d="M14 58 C18 73, 30 76, 50 76 C70 76, 80 72, 86 58 Z"
              fill="#0F3B66"
              stroke="#07233F"
              strokeWidth="1.8"
            />

            {/* Upper Hull Accent Strip (Gold / Orange Wood Trim) */}
            <path
              d="M14 58 L86 58 L84 62 L16 62 Z"
              fill="#F59E0B"
              stroke="#D97706"
              strokeWidth="0.8"
            />

            {/* Crisp White Waterline Stripe */}
            <path
              d="M20 67 C30 71, 70 71, 80 67"
              stroke="#FFFFFF"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Dialogue Quip Speech Bubble */}
          {currentQuip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 6 }}
              className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-2xl bg-white/95 text-[#0369a1] text-xs font-bold shadow-xl border border-[#38bdf8] whitespace-nowrap backdrop-blur-md flex items-center gap-1.5 z-30 ${direction === 'rtl' ? '-scale-x-100' : 'scale-x-100'
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
