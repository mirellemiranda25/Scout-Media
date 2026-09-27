import Reveal from "@/components/scout/Reveal";

const POINTS = [
  {
    num: "01",
    title: "Strong Creator & Celebrity Relationships",
    desc: "Direct, trusted connections with creators and celebrities — no middlemen, no delays.",
  },
  {
    num: "02",
    title: "Creative Campaign Thinking",
    desc: "Narratives built from cultural insight, not generic ad templates.",
  },
  {
    num: "03",
    title: "End-to-End Execution",
    desc: "From first idea to final delivery, everything handled under one roof.",
  },
  {
    num: "04",
    title: "Measurable Brand Impact",
    desc: "A focus on real engagement and brand impact — not vanity numbers.",
  },
];

// Swap for your own in-house camera / gear photo.
const RIG_IMAGE =
  "https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=2000&auto=format&fit=crop";

// This panel stays a fixed dark block in both themes — it's an intentional
// contrast accent, not something that flips with light/dark mode.
export default function WhyUs() {
  return (
    <section className="bg-[#0b0b0c] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-14 flex items-center gap-3 text-xs tracking-[0.25em] text-neutral-400">
            <span className="h-px w-6 bg-neutral-500" />
            WHY SCOUT MEDIA
          </div>
          <h2 className="font-display max-w-2xl text-4xl font-bold leading-[1.05] text-white md:text-5xl">
            Built on relationships, measured by results.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {POINTS.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <span className="text-xs text-neutral-500">{p.num}</span>
                <h3 className="font-display mt-3 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-neutral-400">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="relative mt-6 overflow-hidden rounded-2xl">
            <img
              src={RIG_IMAGE}
              alt="Camera rig used for Scout Media in-house production"
              className="h-64 w-full object-cover md:h-80"
            />
            <span className="absolute bottom-6 left-6 rounded-full bg-white/95 px-4 py-2 text-xs tracking-[0.2em] text-black">
              VIDEO PRODUCTION — IN-HOUSE
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
