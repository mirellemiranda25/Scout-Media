import { motion } from "framer-motion";
import { Users, Sparkles, Video } from "lucide-react";
import Reveal from "@/components/scout/Reveal";

const SERVICES = [
  {
    num: "01",
    icon: Users,
    title: "Influencer Marketing",
    desc: "End-to-end influencer campaigns, creator collaborations, campaign strategy, and execution.",
    items: ["Creator Sourcing & Vetting", "Campaign Strategy", "Collaboration Management", "Performance Tracking"],
  },
  {
    num: "02",
    icon: Sparkles,
    title: "Celebrity Marketing",
    desc: "Connecting brands with relevant celebrities and public figures for impactful campaigns and partnerships.",
    items: ["Celebrity Endorsements", "Public Figure Partnerships", "Event Appearances", "Campaign Management"],
  },
  {
    num: "03",
    icon: Video,
    title: "Video Production",
    desc: "Creative video production for advertisements, social media, brand campaigns, and digital content.",
    items: ["Concept & Scriptwriting", "Ad Films & Commercials", "Social & Digital Content", "Store Shoots", "Event Shoots", "Post-Production"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-neutral-50 px-6 py-24 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3 text-xs tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                <span className="h-px w-6 bg-neutral-400 dark:bg-neutral-600" />
                SERVICES
              </div>
              <h2 className="font-display text-4xl font-bold text-black dark:text-white md:text-5xl">
                What we do <span className="font-serif italic">best</span>.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
              Three disciplines, one goal — work that makes people stop, watch,
              and remember your brand.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map(({ num, icon: Icon, title, desc, items }, i) => (
            <Reveal key={num} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="h-full rounded-2xl border border-black/10 bg-white p-8 transition-colors dark:border-white/10 dark:bg-black"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 dark:border-white/20">
                    <Icon size={18} className="text-black dark:text-white" />
                  </div>
                  <span className="text-xs text-neutral-400 dark:text-neutral-600">{num}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-black dark:text-white">{title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-neutral-500 dark:text-neutral-400">{desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-[13px] text-neutral-600 dark:text-neutral-400">
                      <span className="text-neutral-400 dark:text-neutral-600">+</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
