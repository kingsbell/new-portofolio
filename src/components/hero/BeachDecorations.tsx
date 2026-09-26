import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Volleyball rally: ball arcs between the two players' hands, clearing the net.
const RALLY_DURATION = 2.8;
const HIT_LEFT = { x: 110, y: 42 };
const HIT_RIGHT = { x: 269, y: 36 };
const FEET_LEFT = { x: 104, y: 98 };
const FEET_RIGHT = { x: 274, y: 88 };
const ARC_HEIGHT = 30;
const STEPS = 12;

type Point = { x: number; y: number };

const leg = (from: Point, to: Point, groundFrom: Point, groundTo: Point) =>
  Array.from({ length: STEPS + 1 }, (_, i) => {
    const s = i / STEPS;
    const lift = 4 * s * (1 - s);
    return {
      x: from.x + (to.x - from.x) * s,
      y: from.y + (to.y - from.y) * s - ARC_HEIGHT * lift,
      gx: groundFrom.x + (groundTo.x - groundFrom.x) * s,
      gy: groundFrom.y + (groundTo.y - groundFrom.y) * s,
      shadow: 1 - 0.55 * lift,
    };
  });

const RALLY_PATH = [
  ...leg(HIT_LEFT, HIT_RIGHT, FEET_LEFT, FEET_RIGHT),
  ...leg(HIT_RIGHT, HIT_LEFT, FEET_RIGHT, FEET_LEFT).slice(1),
];
const RALLY_PEAK = RALLY_PATH[STEPS / 2];

const RALLY_TRANSITION = { duration: RALLY_DURATION, repeat: Infinity, ease: 'linear' } as const;

const armsUp = (f: number) => `M0 -32 L${f * 3} -40 L${f * 5} -48 M0 -32 L${f * 1} -40 L${f * 2} -48`;
const armsLow = (f: number) => `M0 -32 L${f * 5} -27 L${f * 9} -22 M0 -32 L${f * 4} -27 L${f * 8} -21`;

type PlayerProps = {
  feet: Point;
  facing: 1 | -1;
  scale?: number;
  skin: string;
  shirt: string;
  shorts: string;
  // Left player hits at the start/end of the loop, right player at the midpoint.
  hitsAtStart: boolean;
  reduce: boolean | null;
};

const Player: React.FC<PlayerProps> = ({ feet, facing, scale = 1, skin, shirt, shorts, hitsAtStart, reduce }) => {
  const up = armsUp(facing);
  const low = armsLow(facing);
  const arms = hitsAtStart ? [up, low, low, up] : [low, low, up, low, low];
  const jump = hitsAtStart ? [-4, 0, 0, -4] : [0, 0, -4, 0, 0];
  const times = hitsAtStart ? [0, 0.15, 0.85, 1] : [0, 0.35, 0.5, 0.65, 1];
  const transition = { duration: RALLY_DURATION, repeat: Infinity, ease: 'easeInOut', times } as const;

  return (
    <g transform={`translate(${feet.x}, ${feet.y}) scale(${scale})`}>
      <ellipse cx="0" cy="1" rx="9" ry="2.5" fill="#dfcaa8" />
      <motion.g animate={reduce ? undefined : { y: jump }} transition={transition}>
        <path d="M-2 -18 L-5 -9 L-4 0 M2 -18 L5 -9 L6 0" stroke={skin} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M0 -21 L0 -32" stroke={shirt} strokeWidth="9" strokeLinecap="round" />
        <rect x="-5" y="-22" width="10" height="6" rx="2" fill={shorts} />
        <circle cx={facing} cy="-41" r="5" fill={skin} />
        <path d={`M${facing - 5} -42 Q${facing} -49 ${facing + 5} -42`} stroke="#3B2A1E" strokeWidth="2.5" strokeLinecap="round" />
        <motion.path
          d={hitsAtStart ? up : low}
          animate={reduce ? undefined : { d: arms }}
          transition={transition}
          stroke={skin}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </g>
  );
};

export const BeachDecorations: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <div className="absolute inset-x-0 bottom-0 h-64 z-20 pointer-events-none overflow-hidden select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-1 sm:left-6 md:left-10 bottom-1 sm:bottom-3 pointer-events-auto cursor-pointer group scale-[0.62] sm:scale-[0.85] md:scale-100 origin-bottom-left"
      >
        <motion.div
          animate={{ rotate: [-1, 1.5, -1] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="relative"
        >
          <div className="absolute bottom-2 left-6 w-28 h-10 bg-[#ebdcae]/80 rounded-full blur-[3px] -rotate-6" />

          <svg width="140" height="160" viewBox="0 0 130 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
            <path
              d="M40 145 C45 110, 38 75, 65 35"
              stroke="#8C6239"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M40 145 C45 110, 38 75, 65 35"
              stroke="#A07449"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path d="M42 125 L47 127" stroke="#664626" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M43 105 L48 107" stroke="#664626" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M45 85 L51 88" stroke="#664626" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M52 65 L58 68" stroke="#664626" strokeWidth="2.5" strokeLinecap="round" />

            <circle cx="62" cy="38" r="4.5" fill="#5C3A21" />
            <circle cx="68" cy="39" r="4.5" fill="#4A2E1A" />
            <circle cx="65" cy="43" r="4.5" fill="#5C3A21" />

            <path
              d="M65 35 Q30 15 5 30 Q35 30 65 35Z"
              fill="#2E7D32"
              stroke="#1B5E20"
              strokeWidth="1.5"
            />
            <path
              d="M65 35 Q35 35 15 65 Q45 50 65 35Z"
              fill="#388E3C"
              stroke="#1B5E20"
              strokeWidth="1.5"
            />
            <path
              d="M65 35 Q60 5 75 2 Q75 20 65 35Z"
              fill="#43A047"
              stroke="#2E7D32"
              strokeWidth="1.5"
            />
            <path
              d="M65 35 Q95 10 125 25 Q95 28 65 35Z"
              fill="#2E7D32"
              stroke="#1B5E20"
              strokeWidth="1.5"
            />
            <path
              d="M65 35 Q100 40 115 65 Q90 50 65 35Z"
              fill="#388E3C"
              stroke="#1B5E20"
              strokeWidth="1.5"
            />
          </svg>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="flex absolute left-1/2 -translate-x-1/2 bottom-8 sm:bottom-14 md:bottom-20 pointer-events-auto flex-col items-center group cursor-pointer scale-[0.58] sm:scale-[0.78] md:scale-100 origin-bottom"
      >
        <div className="relative">
          <div className="absolute bottom-2 left-6 w-2 h-14 bg-[#ebdcae]/75 rounded-full blur-[3px]" />

          <svg width="380" height="125" viewBox="0 0 380 125" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
            {/* Sand court, seen from the side: net splits it into left and right halves */}
            <polygon
              points="110,44 350,44 290,114 30,114"
              fill="#f5ebb8"
              stroke="#e6d4a4"
              strokeWidth="1.5"
            />

            {/* Boundary lines */}
            <polygon
              points="118,49 338,49 284,109 44,109"
              fill="none"
              stroke="#0284C7"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Centre line under net */}
            <line x1="225" y1="49" x2="165" y2="109" stroke="#0284C7" strokeWidth="1.5" opacity="0.5" />

            {/* Post shadows */}
            <path d="M234 40 L250 43" stroke="#dfcaa8" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
            <path d="M156 118 L178 121" stroke="#dfcaa8" strokeWidth="4" strokeLinecap="round" opacity="0.8" />

            {/* Back post */}
            <line x1="234" y1="12" x2="234" y2="40" stroke="#8C6239" strokeWidth="4" strokeLinecap="round" />
            <circle cx="234" cy="11" r="2.5" fill="#F97316" />

            {/* Net mesh */}
            <polygon points="234,14 156,74 156,96 234,30" fill="#FFFFFF" opacity="0.2" />
            {Array.from({ length: 11 }, (_, i) => {
              const t = (i + 1) / 12;
              const x = 234 - 78 * t;
              return (
                <line
                  key={`v-${i}`}
                  x1={x}
                  y1={14 + 60 * t}
                  x2={x}
                  y2={30 + 66 * t}
                  stroke="#475569"
                  strokeWidth="0.8"
                  opacity="0.45"
                />
              );
            })}
            {[1 / 3, 2 / 3].map((s) => (
              <line
                key={`h-${s}`}
                x1="234"
                y1={14 + 16 * s}
                x2="156"
                y2={74 + 22 * s}
                stroke="#475569"
                strokeWidth="0.8"
                opacity="0.45"
              />
            ))}
            <line x1="234" y1="30" x2="156" y2="96" stroke="#E2E8F0" strokeWidth="1.8" />

            {/* Top tape */}
            <line x1="234" y1="14" x2="156" y2="74" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />

            {/* Front post */}
            <line x1="156" y1="70" x2="156" y2="118" stroke="#8C6239" strokeWidth="5" strokeLinecap="round" />
            <circle cx="156" cy="69" r="3" fill="#F97316" />

            {/* Ball shadow tracks the ball along the sand */}
            <motion.g
              initial={false}
              animate={
                reduce
                  ? { x: RALLY_PEAK.gx, y: RALLY_PEAK.gy }
                  : { x: RALLY_PATH.map((p) => p.gx), y: RALLY_PATH.map((p) => p.gy) }
              }
              transition={reduce ? { duration: 0 } : RALLY_TRANSITION}
            >
              <motion.ellipse
                cx="0"
                cy="0"
                rx="6"
                ry="2"
                fill="#dfcaa8"
                animate={reduce ? { scale: RALLY_PEAK.shadow } : { scale: RALLY_PATH.map((p) => p.shadow) }}
                transition={reduce ? { duration: 0 } : RALLY_TRANSITION}
              />
            </motion.g>

            <Player
              feet={FEET_LEFT}
              facing={1}
              skin="#C68B59"
              shirt="#F97316"
              shorts="#0369A1"
              hitsAtStart
              reduce={reduce}
            />
            <Player
              feet={FEET_RIGHT}
              facing={-1}
              scale={0.92}
              skin="#8D5A3B"
              shirt="#0284C7"
              shorts="#EA580C"
              hitsAtStart={false}
              reduce={reduce}
            />

            {/* Ball */}
            <motion.g
              initial={false}
              animate={
                reduce
                  ? { x: RALLY_PEAK.x, y: RALLY_PEAK.y }
                  : { x: RALLY_PATH.map((p) => p.x), y: RALLY_PATH.map((p) => p.y) }
              }
              transition={reduce ? { duration: 0 } : RALLY_TRANSITION}
            >
              <motion.g
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
              >
                <g transform="translate(-5.5, -5.5) scale(0.5)">
                  <circle cx="11" cy="11" r="10.5" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.2" />
                  <path d="M6 3 C8 7, 11 15, 6 20" stroke="#0284C7" strokeWidth="3" />
                  <path d="M16 3 C14 7, 11 15, 16 20" stroke="#F59E0B" strokeWidth="3" />
                </g>
              </motion.g>
            </motion.g>
          </svg>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute right-1 sm:right-6 md:right-12 bottom-1 sm:bottom-3 pointer-events-auto flex items-end gap-1.5 sm:gap-2.5 md:gap-3 scale-[0.62] sm:scale-[0.85] md:scale-100 origin-bottom-right"
      >
        <motion.div
          whileHover={{ rotate: -18, y: -4 }}
          className="cursor-pointer select-none"
        >
          <div className="w-6 h-2 bg-[#ebdcae]/80 rounded-full blur-[1px] translate-y-1" />
          <svg width="32" height="72" viewBox="0 0 32 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="-rotate-12 drop-shadow-md">
            <path
              d="M16 2 C26 18, 28 52, 22 70 C16 72, 16 72, 10 70 C4 52, 6 18, 16 2 Z"
              fill="#0284C7"
              stroke="#0369A1"
              strokeWidth="1.5"
            />
            <path
              d="M16 2 C18 18, 19 52, 16 70"
              stroke="#FFF9D4"
              strokeWidth="4"
            />
            <path
              d="M16 2 C18 18, 19 52, 16 70"
              stroke="#F97316"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          className="cursor-pointer select-none relative mb-1"
        >
          <div className="absolute -bottom-1 left-2 w-24 h-4 bg-[#ebdcae]/80 rounded-full blur-[2px]" />
          <svg width="95" height="42" viewBox="0 0 95 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
            <line x1="12" y1="28" x2="8" y2="40" stroke="#8C6239" strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="28" x2="48" y2="40" stroke="#8C6239" strokeWidth="3" strokeLinecap="round" />
            <line x1="82" y1="18" x2="86" y2="40" stroke="#8C6239" strokeWidth="3" strokeLinecap="round" />
            <path
              d="M6 28 L55 28 L86 12"
              stroke="#A07449"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <path
              d="M8 26 L54 26 L84 11"
              stroke="#38BDF8"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M18 26 L26 26 M36 26 L44 26 M62 22 L70 18"
              stroke="#FFFFFF"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <rect x="74" y="8" width="12" height="7" rx="3" fill="#F97316" stroke="#EA580C" strokeWidth="1" />
          </svg>
        </motion.div>

        <motion.div
          whileHover={{ rotate: 4, scale: 1.05 }}
          className="cursor-pointer select-none relative"
        >
          <div className="absolute -bottom-1 left-4 w-28 h-8 bg-[#ebdcae]/80 rounded-full blur-[3px]" />
          <svg width="105" height="115" viewBox="0 0 105 115" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
            <line x1="52" y1="35" x2="52" y2="112" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="52" y1="35" x2="52" y2="112" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
            <circle cx="52" cy="18" r="3" fill="#F97316" />

            <path d="M52 20 Q30 22 8 42 Q30 38 52 35 Z" fill="#F97316" stroke="#EA580C" strokeWidth="1.2" />
            <path d="M52 20 Q38 24 28 42 Q40 38 52 35 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
            <path d="M52 20 Q48 25 48 42 Q50 38 52 35 Z" fill="#F97316" stroke="#EA580C" strokeWidth="1.2" />
            <path d="M52 20 Q56 25 68 42 Q60 38 52 35 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" />
            <path d="M52 20 Q74 22 96 42 Q74 38 52 35 Z" fill="#F97316" stroke="#EA580C" strokeWidth="1.2" />

            <path
              d="M8 42 Q18 46 28 42 Q38 46 48 42 Q58 46 68 42 Q78 46 88 42 Q96 46 96 42"
              stroke="#FFF9D4"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};
