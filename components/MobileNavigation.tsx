import { CalendarDays, Coffee, UserRound, UtensilsCrossed } from "lucide-react";

const items = [
  { label: "Menu", href: "#menu", icon: UtensilsCrossed, active: true },
  { label: "Brew", href: "#seasonal", icon: Coffee, active: false },
  { label: "Reserve", href: "#booking", icon: CalendarDays, active: false },
  { label: "MOKA", href: "#about", icon: UserRound, active: false },
] as const;

export function MobileNavigation() {
  return (
    <nav className="mobile-bottom-nav" aria-label="Швидка мобільна навігація">
      {items.map(({ label, href, icon: Icon, active }) => (
        <a className={active ? "is-active" : undefined} href={href} key={href}>
          <Icon aria-hidden="true" size={22} strokeWidth={active ? 2.2 : 1.8} />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}
