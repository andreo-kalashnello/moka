"use client";

import { Check, ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import { menuCategories, menuItems, type MenuCategory } from "@/lib/data";
import { MenuCard } from "./MenuCard";
import { Reveal } from "./Reveal";
import { SeasonalBanner } from "./SeasonalBanner";

const ALL_CATEGORIES = "Усі" as const;
const PAGE_SIZE = 5;
type MenuFilter = MenuCategory | typeof ALL_CATEGORIES;

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuFilter>(ALL_CATEGORIES);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredItems = useMemo(
    () =>
      activeCategory === ALL_CATEGORIES
        ? menuItems
        : menuItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );
  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMoreItems = visibleCount < filteredItems.length;
  const hasLoadMoreControl = filteredItems.length > PAGE_SIZE;

  const selectCategory = (category: MenuFilter) => {
    setActiveCategory(category);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <Reveal>
      <section className="menu-section site-container" id="menu" aria-labelledby="menu-title">
        <div className="menu-section__heading">
          <div className="menu-section__title-row">
            <div>
              <p className="section-label">МЕНЮ</p>
              <h2 id="menu-title">Наше меню</h2>
            </div>
            <p className="menu-results" aria-live="polite">
              Показано {visibleItems.length} з {filteredItems.length}
            </p>
          </div>
          <div className="menu-filters" role="group" aria-label="Фільтр категорій меню">
            {[ALL_CATEGORIES, ...menuCategories].map((category) => (
              <button
                type="button"
                aria-pressed={activeCategory === category}
                aria-controls="menu-grid"
                className={activeCategory === category ? "is-active" : undefined}
                key={category}
                onClick={() => selectCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="menu-grid" id="menu-grid">
          {visibleItems.map((item) => (
            <MenuCard item={item} key={`${activeCategory}-${item.id}`} />
          ))}
        </div>
        {hasLoadMoreControl && (
          <button
            className="button button--outline-dark load-more-button"
            type="button"
            aria-controls="menu-grid"
            aria-disabled={!hasMoreItems}
            onClick={() => setVisibleCount((count) => Math.min(count + PAGE_SIZE, filteredItems.length))}
          >
            {hasMoreItems ? "Завантажити ще" : "Усе меню завантажено"}
            {hasMoreItems ? (
              <ChevronDown aria-hidden="true" size={18} />
            ) : (
              <Check aria-hidden="true" size={18} />
            )}
          </button>
        )}
        <SeasonalBanner />
      </section>
    </Reveal>
  );
}
