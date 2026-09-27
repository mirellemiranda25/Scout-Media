import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { dark, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-sm transition-colors dark:border-white/10 dark:bg-black/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#home" className="flex items-center gap-2.5 text-black dark:text-white">
          <img src="/assets/scout-media-icon.png" alt="Scout Media" className="h-8 w-8 rounded-md" />
          <span className="font-display text-[15px] font-semibold tracking-[0.28em]">
            SCOUT MEDIA
          </span>
        </a>

        <nav className="hidden items-center gap-9 text-sm text-neutral-600 dark:text-neutral-400 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-black dark:hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-neutral-700 transition hover:border-black/30 dark:border-white/20 dark:text-neutral-300 dark:hover:border-white/40"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href="#contact"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}
