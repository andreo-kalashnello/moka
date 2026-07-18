"use client";

import { Menu, UserRound, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Головна", href: "#home" },
  { label: "Меню", href: "#menu" },
  { label: "Про нас", href: "#about" },
  { label: "Послуги", href: "#services" },
  { label: "Бронювання", href: "#booking" },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header className="mobile-header">
        <button
          type="button"
          className="icon-button"
          aria-label="Відкрити меню"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(true)}
        >
          <Menu aria-hidden="true" size={24} />
        </button>
        <a className="mobile-logo" href="#home" aria-label="MOKA — на головну">
          MOKA
        </a>
        <a className="profile-button" href="#booking" aria-label="Перейти до бронювання">
          <UserRound aria-hidden="true" size={22} />
        </a>
      </header>

      <header className="desktop-header">
        <div className="site-container desktop-header__inner">
          <a className="desktop-logo" href="#home" aria-label="MOKA — на головну">
            MOKA
          </a>
          <nav className="desktop-nav" aria-label="Головна навігація">
            {navItems.map((item, index) => (
              <a className={index === 0 ? "is-active" : undefined} href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="desktop-actions">
            <a className="header-phone" href="tel:+380671234567">
              Контакти +38 (067) 123 45 67
            </a>
            <a className="button button--compact" href="#booking">
              Забронювати
            </a>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="mobile-menu-backdrop" role="presentation" onMouseDown={() => setIsOpen(false)}>
          <nav
            id="mobile-menu"
            className="mobile-menu-panel"
            aria-label="Мобільна навігація"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mobile-menu-panel__top">
              <span className="mobile-logo">MOKA</span>
              <button
                ref={closeButtonRef}
                type="button"
                className="icon-button"
                aria-label="Закрити меню"
                onClick={() => setIsOpen(false)}
              >
                <X aria-hidden="true" size={24} />
              </button>
            </div>
            <div className="mobile-menu-links">
              {navItems.map((item) => (
                <a href={item.href} key={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mobile-menu-contacts">
              <a href="tel:+380671234567">+38 (067) 123 45 67</a>
              <a href="mailto:hello@moka.cafe">hello@moka.cafe</a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
