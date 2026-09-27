import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const BADGE_TEXT = "SCOUT MEDIA · BRANDS · CREATORS · CULTURE · ";
const LINES = ["Connecting Brands,", "Creators & Culture."];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const line = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-24 pt-20 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3 text-xs tracking-[0.25em] text-neutral-500 dark:text-neutral-400"
        >
          <span className="h-px w-6 bg-neutral-400 dark:bg-neutral-600" />
          MEDIA AGENCY
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display max-w-4xl text-[13vw] font-bold leading-[0.95] tracking-tight text-black dark:text-white sm:text-6xl md:text-7xl"
        >
          {LINES.map((l, i) => (
            <motion.span key={i} variants={line} className="block overflow-hidden">
              {l.includes("&") ? (
                <>
                  {l.split("&")[0]}
                  <span className="font-serif italic">&amp;</span>
                  {l.split("&")[1]}
                </>
              ) : (
                l
              )}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 max-w-md text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400"
        >
          Scout Media helps brands grow through influencer marketing, celebrity
          partnerships, and high-quality video production.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
        >
          Let's Work Together
          <ArrowUpRight size={16} />
        </motion.a>
      </div>

      {/* rotating seal badge */}
      <div className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 md:block">
        <div className="relative h-40 w-40 animate-[spin_18s_linear_infinite]">
          <svg viewBox="0 0 200 200" className="h-full w-full">
            <defs>
              <path id="badgeCircle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text fill="currentColor" className="fill-neutral-400 dark:fill-neutral-600" fontSize="11" letterSpacing="2">
              <textPath href="#badgeCircle">{BADGE_TEXT.repeat(2)}</textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black text-black dark:border-white dark:text-white">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
