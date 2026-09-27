export default function Footer() {
  return (
    <footer className="border-t border-black/10 px-6 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-neutral-500 dark:text-neutral-400 md:flex-row">
        <span>© {new Date().getFullYear()} Scout Media. All rights reserved.</span>
        <span>Mumbai, India</span>
      </div>
    </footer>
  );
}
