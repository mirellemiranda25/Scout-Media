import Reveal from "@/components/scout/Reveal";

const CLIENTS = [
  {
    name: "Ghar Soaps",
    logo: "/assets/ghar-soaps-logo.png",
    desc: "Handmade & organic personal care — rooted in Ayurveda, backed by science.",
  },
  // Add more { name, logo, desc } objects here as new client work comes in —
  // this row wraps automatically, no layout changes needed.
];

// Kept intentionally compact for now — this grows into a fuller case-study
// grid later as more client work is added.
export default function Clients() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-8 flex items-center gap-3 text-xs tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
            <span className="h-px w-6 bg-neutral-400 dark:bg-neutral-600" />
            OUR WORK
          </div>
        </Reveal>

        <div className="flex flex-wrap gap-4">
          {CLIENTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className="flex items-center gap-4 rounded-xl border border-black/10 px-5 py-4 dark:border-white/10">
                <img src={c.logo} alt={`${c.name} logo`} className="h-10 w-10 rounded-md object-contain" />
                <div>
                  <p className="font-display text-sm font-semibold text-black dark:text-white">{c.name}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{c.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
