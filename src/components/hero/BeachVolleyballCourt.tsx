import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export interface BeachVolleyballCourtProps {
  className?: string;
  interactive?: boolean;
}

const VOLLEYBALL_DIALOGUES = [
  '🏐 SMASH! Bug langsung terhempas ke luar garis!',
  'Nice spike! Semua skenario testing lulus tanpa celah ~',
  'Servis ace! Kualitas kode selalu jadi nomor satu!',
  'Ayo oper bolanya, amankan rilis tanpa regresi!',
  'Blokade rapat! 100% bug dicegat di net pengujian!'
];

export const BeachVolleyballCourt: React.FC<BeachVolleyballCourtProps> = ({
  className = '',
  interactive = true,
}) => {
  const [currentQuip, setCurrentQuip] = useState<string | null>(null);
  const quipTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePlayerClick = () => {
    if (!interactive) return;
    const random = VOLLEYBALL_DIALOGUES[Math.floor(Math.random() * VOLLEYBALL_DIALOGUES.length)];
    setCurrentQuip(random);

    if (quipTimeoutRef.current) clearTimeout(quipTimeoutRef.current);
    quipTimeoutRef.current = setTimeout(() => {
      setCurrentQuip(null);
    }, 3800);
  };

  return (
    <div className={`relative flex items-end justify-center select-none pointer-events-auto ${className}`}>
      <div className="relative w-[380px] sm:w-[420px] h-[155px]">
        {/* ============================================================ */}
        {/* 1. SOFT NATURAL SAND COURT BASE & BOUNDARY LINES */}
        {/* ============================================================ */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 420 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 overflow-visible pointer-events-none"
        >
          {/* Natural Sand Mound Shadow */}
          <ellipse cx="210" cy="138" rx="195" ry="14" fill="#ebdcae" opacity="0.8" />
          <ellipse cx="210" cy="136" rx="180" ry="11" fill="#f6e8ba" opacity="0.6" />

          {/* Court Ribbon Boundary Lines on the Sand */}
          <polygon
            points="24,96 396,96 368,142 52,142"
            fill="none"
            stroke="#0284c7"
            strokeWidth="2.2"
            strokeLinejoin="round"
            opacity="0.85"
          />
          {/* Center Court Marking Line */}
          <line
            x1="210"
            y1="96"
            x2="210"
            y2="142"
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            opacity="0.6"
          />

          {/* Corner Stakes in the Sand */}
          <circle cx="24" cy="96" r="3" fill="#f59e0b" stroke="#0f172a" strokeWidth="0.8" />
          <circle cx="396" cy="96" r="3" fill="#f59e0b" stroke="#0f172a" strokeWidth="0.8" />
          <circle cx="368" cy="142" r="3" fill="#f59e0b" stroke="#0f172a" strokeWidth="0.8" />
          <circle cx="52" cy="142" r="3" fill="#f59e0b" stroke="#0f172a" strokeWidth="0.8" />

          {/* ============================================================ */}
          {/* 2. AUTHENTIC VOLLEYBALL NET (CLEAR HORIZONTAL MESH) */}
          {/* ============================================================ */}
          {/* Left Pole Sand Stake & Tension Cable */}
          <line x1="42" y1="36" x2="22" y2="135" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 2" />
          <circle cx="22" cy="135" r="2.5" fill="#f59e0b" stroke="#0f172a" strokeWidth="0.8" />

          {/* Left Pole */}
          <rect x="39" y="24" width="6" height="110" rx="3" fill="#854d0e" stroke="#0f172a" strokeWidth="1.5" />
          <circle cx="42" cy="27" r="3.5" fill="#ca8a04" stroke="#0f172a" strokeWidth="1" />

          {/* Right Pole Sand Stake & Tension Cable */}
          <line x1="228" y1="36" x2="246" y2="135" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 2" />
          <circle cx="246" cy="135" r="2.5" fill="#f59e0b" stroke="#0f172a" strokeWidth="0.8" />

          {/* Right Pole (Middle of Court separating teams) */}
          <rect x="225" y="24" width="6" height="110" rx="3" fill="#854d0e" stroke="#0f172a" strokeWidth="1.5" />
          <circle cx="228" cy="27" r="3.5" fill="#ca8a04" stroke="#0f172a" strokeWidth="1" />

          {/* Net Mesh Background Sheet */}
          <rect x="44" y="44" width="182" height="42" fill="#ffffff" fillOpacity="0.22" />

          {/* Net Grid Mesh Lines (Horizontal) */}
          <line x1="44" y1="52" x2="226" y2="52" stroke="#64748b" strokeWidth="0.9" opacity="0.65" />
          <line x1="44" y1="60" x2="226" y2="60" stroke="#64748b" strokeWidth="0.9" opacity="0.65" />
          <line x1="44" y1="68" x2="226" y2="68" stroke="#64748b" strokeWidth="0.9" opacity="0.65" />
          <line x1="44" y1="76" x2="226" y2="76" stroke="#64748b" strokeWidth="0.9" opacity="0.65" />

          {/* Net Grid Mesh Lines (Vertical) */}
          {[56, 68, 80, 92, 104, 116, 128, 140, 152, 164, 176, 188, 200, 212].map((xPos) => (
            <line key={xPos} x1={xPos} y1="44" x2={xPos} y2="86" stroke="#64748b" strokeWidth="0.9" opacity="0.65" />
          ))}

          {/* Net Top Heavy Canvas White Band */}
          <rect x="42" y="40" width="186" height="5" rx="1" fill="#ffffff" stroke="#0f172a" strokeWidth="1" />
          {/* Top Yellow Ribbon Stripe */}
          <line x1="43" y1="42.5" x2="227" y2="42.5" stroke="#f59e0b" strokeWidth="1.2" />

          {/* Net Bottom Canvas White Band */}
          <rect x="42" y="85" width="186" height="4" rx="1" fill="#ffffff" stroke="#0f172a" strokeWidth="1" />

          {/* Red and White Volleyball Net Antennas */}
          {/* Left Antenna */}
          <g transform="translate(60, 18)">
            <rect x="0" y="0" width="2.5" height="24" rx="1" fill="#ef4444" />
            <rect x="0" y="5" width="2.5" height="5" fill="#ffffff" />
            <rect x="0" y="15" width="2.5" height="5" fill="#ffffff" />
          </g>
          {/* Right Antenna */}
          <g transform="translate(210, 18)">
            <rect x="0" y="0" width="2.5" height="24" rx="1" fill="#ef4444" />
            <rect x="0" y="5" width="2.5" height="5" fill="#ffffff" />
            <rect x="0" y="15" width="2.5" height="5" fill="#ffffff" />
          </g>
        </svg>

        {/* ============================================================ */}
        {/* 3. VOLLEYBALL PLAYER ON THE RIGHT SIDE JUMPING & SPIKING */}
        {/* ============================================================ */}
        <div
          onClick={handlePlayerClick}
          className="absolute right-4 sm:right-10 bottom-4 z-20 cursor-pointer group pointer-events-auto"
        >
          {/* Dynamic Sand Shadow beneath player */}
          <motion.div
            animate={{
              scaleX: [1, 0.45, 1],
              opacity: [0.65, 0.2, 0.65],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-1 left-2 right-2 h-2.5 bg-[#c4ad82]/90 rounded-full blur-[1.5px] pointer-events-none"
          />

          {/* Jumping Player Container */}
          <motion.div
            animate={{
              y: [0, -28, -32, -4, 0],
              rotate: [0, -3, 2, 0, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              times: [0, 0.42, 0.52, 0.85, 1],
              ease: 'easeInOut',
            }}
            className="relative"
          >
            {/* The Volleyball hovering & getting spiked over the net */}
            <motion.div
              animate={{
                y: [-6, -42, -48, -12, -6],
                x: [-4, -22, -26, -10, -4],
                rotate: [0, -180, -360, -420, 0],
                scale: [0.95, 1.15, 1.2, 1, 0.95],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                times: [0, 0.42, 0.52, 0.85, 1],
                ease: 'easeInOut',
              }}
              className="absolute -top-6 -left-3 w-6 h-6 z-30 pointer-events-none drop-shadow-md"
            >
              <svg viewBox="0 0 28 28" fill="none" className="w-full h-full">
                <circle cx="14" cy="14" r="13" fill="#ffffff" stroke="#0f172a" strokeWidth="1.8" />
                <path d="M2 14 C6 8, 13 5, 18 3" stroke="#0284c7" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M14 27 C10 22, 12 13, 25 11" stroke="#f59e0b" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M20 25 C23 20, 25 13, 25 7" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
                <path d="M5 20 C9 23, 16 25, 21 21" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* Polished Chibi/Anime Athlete Figure */}
            <svg
              width="68"
              height="80"
              viewBox="0 0 68 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-sm overflow-visible"
            >
              {/* Left Spiking Arm (Swinging toward the net on left) */}
              <motion.path
                animate={{
                  d: [
                    'M28 26 L16 16 L4 18',
                    'M28 24 L14 10 L-2 4',
                    'M28 24 L14 10 L-2 4',
                    'M28 26 L18 20 L8 24',
                    'M28 26 L16 16 L4 18',
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  times: [0, 0.42, 0.52, 0.85, 1],
                  ease: 'easeInOut',
                }}
                stroke="#f97316"
                strokeWidth="4.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="2" cy="7" r="3" fill="#fdba74" stroke="#ea580c" strokeWidth="1" />

              {/* Right Balance Arm */}
              <path d="M42 26 L52 20 L58 24" stroke="#f97316" strokeWidth="4.2" strokeLinecap="round" />
              <circle cx="58" cy="24" r="2.8" fill="#fdba74" stroke="#ea580c" strokeWidth="1" />

              {/* Left Leg (Bending in Jump) */}
              <motion.path
                animate={{
                  d: [
                    'M28 46 L24 58 L22 72',
                    'M28 46 L20 54 L16 66',
                    'M28 46 L20 54 L16 66',
                    'M28 46 L22 62 L20 74',
                    'M28 46 L24 58 L22 72',
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  times: [0, 0.42, 0.52, 0.85, 1],
                  ease: 'easeInOut',
                }}
                stroke="#f97316"
                strokeWidth="4.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Left Shoe */}
              <rect x="18" y="70" width="8" height="4.5" rx="2" fill="#0284c7" stroke="#0f172a" strokeWidth="0.8" />

              {/* Right Leg (Kicked Back in Jump) */}
              <motion.path
                animate={{
                  d: [
                    'M38 46 L44 58 L46 72',
                    'M38 46 L48 54 L52 64',
                    'M38 46 L48 54 L52 64',
                    'M38 46 L46 62 L48 74',
                    'M38 46 L44 58 L46 72',
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  times: [0, 0.42, 0.52, 0.85, 1],
                  ease: 'easeInOut',
                }}
                stroke="#f97316"
                strokeWidth="4.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Right Shoe */}
              <rect x="44" y="70" width="8" height="4.5" rx="2" fill="#f59e0b" stroke="#0f172a" strokeWidth="0.8" />

              {/* Boardshorts */}
              <path
                d="M24 38 L42 38 L44 50 L34 49 L32 47 L30 49 L22 50 Z"
                fill="#0284c7"
                stroke="#0f172a"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              {/* Shorts Yellow Trim */}
              <path d="M23 45 L43 45" stroke="#fde047" strokeWidth="2" />

              {/* Athletic Jersey Tank Top */}
              <path
                d="M25 24 L41 24 L42 40 L24 40 Z"
                fill="#ef4444"
                stroke="#0f172a"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              {/* QA Number on Jersey */}
              <text x="27.5" y="34.5" fill="#ffffff" fontSize="8.5" fontWeight="900" fontFamily="sans-serif">
                QA
              </text>

              {/* Head & Neck */}
              <circle cx="33" cy="14" r="8" fill="#fdba74" stroke="#ea580c" strokeWidth="1.2" />

              {/* Sunglasses */}
              <rect x="25" y="12" width="10" height="4.5" rx="1.5" fill="#0f172a" />
              <line x1="23" y1="13.5" x2="25" y2="13.5" stroke="#0f172a" strokeWidth="1" />

              {/* Sporty Cap / Beach Hair */}
              <path
                d="M25 13 C25 6, 39 4, 41 10 L47 11"
                fill="#0284c7"
                stroke="#0f172a"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>

            {/* Dialogue Bubble */}
            {currentQuip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 4 }}
                className="absolute -top-12 -left-12 px-3 py-1.5 rounded-2xl bg-white text-[#0f172a] text-[11px] font-black shadow-xl border-2 border-[#0f172a] whitespace-nowrap z-30"
              >
                <span>{currentQuip}</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
