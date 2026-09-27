import Reveal from "@/components/scout/Reveal";

const FOUNDERS = [
  { name: "Mansi Miranda", num: "01" },
  { name: "Sanket Shinge", num: "02" },
  { name: "Raunak Sharma", num: "03" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
        <Reveal>
          <div className="mb-6 flex items-center gap-3 text-xs tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
            <span className="h-px w-6 bg-neutral-400 dark:bg-neutral-600" />
            ABOUT US
          </div>
          <h2 className="font-display max-w-md text-4xl font-bold leading-[1.05] text-black dark:text-white md:text-5xl">
            Stories worth <span className="font-serif italic">telling</span>, told well.
          </h2>
          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
            Scout Media is a media agency built on a simple belief — the right
            story, told by the right voice, moves people. We help brands grow
            through influencer marketing, celebrity partnerships, and
            high-quality video production.
          </p>
        </Reveal>

        <div className="flex flex-col">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.num} delay={i * 0.08}>
              <div className="flex items-center justify-between border-t border-black/10 py-6 first:border-t-0 dark:border-white/10 md:first:border-t">
                <div>
                  <p className="font-display text-xl font-semibold text-black dark:text-white">{f.name}</p>
                  <p className="mt-1 text-xs tracking-[0.2em] text-neutral-500 dark:text-neutral-400">CO-FOUNDER</p>
                </div>
                <span className="text-xs text-neutral-400 dark:text-neutral-600">{f.num}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
