import Reveal from "@/components/scout/Reveal";

const SHOWREEL_IMAGE = "/assets/showreel.jpg";

export default function Showreel() {
  return (
    <section className="px-6 pb-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="overflow-hidden rounded-sm">
            <img
              src={SHOWREEL_IMAGE}
              alt="Behind the scenes on a Scout Media production"
              className="h-[380px] w-full object-cover grayscale md:h-[520px]"
            />
          </div>
        </Reveal>
        <div className="mt-6 flex flex-wrap justify-between gap-4 text-xs tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
          <span>INFLUENCER MARKETING</span>
          <span>CELEBRITY MARKETING</span>
          <span>VIDEO PRODUCTION</span>
        </div>
      </div>
    </section>
  );
}
