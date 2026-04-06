import type { HeroSocialLink } from "@/types";

type SocialLinksProps = {
  links: HeroSocialLink[];
};

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map(({ label, href, monogram }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted transition duration-300 hover:scale-105 hover:border-accent hover:text-accent">
          <span className="grid size-7 place-items-center rounded-full border border-border bg-surface-2 text-[0.62rem] font-semibold tracking-[0.16em] text-white">
            {monogram}
          </span>
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}
