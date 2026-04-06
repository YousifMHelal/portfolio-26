import { hero } from "@/data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-7xl items-center overflow-x-auto px-6 py-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max items-center gap-2 sm:gap-3">
          {hero.navLinks.map((item) => {
            const active = item.active;

            return (
              <a
                key={item.label}
                href={item.href}
                className={
                  active
                    ? "rounded-full border border-border bg-surface px-3 py-2 text-[11px] font-medium uppercase tracking-[1.8px] text-white transition duration-300 sm:px-4 sm:text-[13px] sm:tracking-[2px]"
                    : "rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[1.8px] text-white transition duration-300 hover:text-accent sm:px-4 sm:text-[13px] sm:tracking-[2px]"
                }>
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
