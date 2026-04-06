import { hero } from "@/data";

export function PaginationDots() {
  return (
    <div
      aria-label="Pagination"
      className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-2.5 md:flex">
      {hero.navLinks.map((item) => {
        const active = item.active;

        return (
          <a
            key={item.label}
            href={item.href}
            aria-label={`Go to ${item.label}`}
            className={
              active
                ? "block h-3.5 w-3.5 rounded-full bg-accent shadow-accent"
                : "block h-2.5 w-2.5 rounded-full bg-surface-3 transition duration-300 hover:bg-accent-dim"
            }>
            <span className="sr-only">{item.label}</span>
          </a>
        );
      })}
    </div>
  );
}
