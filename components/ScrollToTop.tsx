"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 560);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const visibleHomeLink = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".desktop-logo, .mobile-logo[href]"),
    ).find((link) => link.getClientRects().length > 0);

    visibleHomeLink?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top${isVisible ? " is-visible" : ""}`}
      aria-label="Повернутися нагору"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToTop}
    >
      <ArrowUp aria-hidden="true" size={22} />
    </button>
  );
}
