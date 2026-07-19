"use client";

import { Menu, UserRound, X } from "lucide-react";
import { type CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRequestModal } from "./RequestModalProvider";

const navItems = [
  { label: "Головна", href: "#home", id: "home" },
  { label: "Меню", href: "#menu", id: "menu" },
  { label: "Про нас", href: "#about", id: "about" },
  { label: "Послуги", href: "#services", id: "services" },
  { label: "Бронювання", href: "#booking", id: "booking" },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { openBooking } = useRequestModal();

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateHeader = () => {
      frame = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(window.scrollY > 24);
      setScrollProgress(maxScroll > 0 ? Math.min(100, (window.scrollY / maxScroll) * 100) : 0);
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateHeader);
    };

    updateHeader();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      { rootMargin: "-18% 0px -62%", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const appShell = document.querySelector<HTMLElement>(".app-shell");
    const previousInert = appShell?.inert ?? false;
    const previousAriaHidden = appShell?.getAttribute("aria-hidden") ?? null;

    document.body.style.overflow = "hidden";
    if (appShell) {
      appShell.inert = true;
      appShell.setAttribute("aria-hidden", "true");
    }
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = menuPanelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      if (appShell) {
        appShell.inert = previousInert;
        if (previousAriaHidden === null) appShell.removeAttribute("aria-hidden");
        else appShell.setAttribute("aria-hidden", previousAriaHidden);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const desktopViewport = window.matchMedia("(min-width: 1024px)");
    const handleViewportChange = (event: MediaQueryListEvent | MediaQueryList) => {
      if (!event.matches) return;

      setIsOpen(false);
      window.requestAnimationFrame(() => {
        document.querySelector<HTMLAnchorElement>(".desktop-logo")?.focus({ preventScroll: true });
      });
    };

    desktopViewport.addEventListener("change", handleViewportChange);
    if (desktopViewport.matches) handleViewportChange(desktopViewport);

    return () => desktopViewport.removeEventListener("change", handleViewportChange);
  }, [isOpen]);

  const headerStyle = {
    "--scroll-progress": `${scrollProgress}%`,
  } as CSSProperties;
  const headerClassName = `header-animated${isScrolled ? " is-scrolled" : ""}`;

  return (
    <>
      <header className={`mobile-header ${headerClassName}`} style={headerStyle}>
        <button
          ref={menuButtonRef}
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
        <button className="profile-button" type="button" aria-label="Відкрити бронювання" onClick={openBooking}>
          <UserRound aria-hidden="true" size={22} />
        </button>
      </header>

      <header className={`desktop-header ${headerClassName}`} style={headerStyle}>
        <div className="site-container desktop-header__inner">
          <a className="desktop-logo" href="#home" aria-label="MOKA — на головну">
            MOKA
          </a>
          <nav className="desktop-nav" aria-label="Головна навігація">
            {navItems.map((item) => (
              <a
                className={activeSection === item.id ? "is-active" : undefined}
                href={item.href}
                aria-current={activeSection === item.id ? "location" : undefined}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="desktop-actions">
            <a className="header-phone" href="tel:+380671234567">
              Контакти +38 (067) 123 45 67
            </a>
            <button className="button button--compact" type="button" onClick={openBooking}>
              Забронювати
            </button>
          </div>
        </div>
      </header>

      {isOpen &&
        createPortal(
        <div className="mobile-menu-backdrop" role="presentation" onMouseDown={closeMenu}>
          <div
            ref={menuPanelRef}
            id="mobile-menu"
            className="mobile-menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Мобільне меню"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mobile-menu-panel__top">
              <span className="mobile-logo">MOKA</span>
              <button
                ref={closeButtonRef}
                type="button"
                className="icon-button"
                aria-label="Закрити меню"
                onClick={closeMenu}
              >
                <X aria-hidden="true" size={24} />
              </button>
            </div>
            <nav className="mobile-menu-links" aria-label="Мобільна навігація">
              {navItems.map((item) => (
                <a
                  className={activeSection === item.id ? "is-active" : undefined}
                  href={item.href}
                  aria-current={activeSection === item.id ? "location" : undefined}
                  key={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mobile-menu-contacts">
              <a href="tel:+380671234567">+38 (067) 123 45 67</a>
              <a href="mailto:hello@moka.cafe">hello@moka.cafe</a>
            </div>
          </div>
        </div>,
          document.body,
        )}
    </>
  );
}
