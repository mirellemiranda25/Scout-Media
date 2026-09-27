const ITEMS = ["CINEMATIC VIDEO PRODUCTION", "CREATOR COLLABORATIONS"];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-black/10 py-8 dark:border-white/10">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-6 whitespace-nowrap">
        {[...row, ...row].map((text, i) => (
          <span key={i} className="flex items-center gap-6">
            <span className="font-display text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
              {text}
            </span>
            <span className="text-black dark:text-white">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
