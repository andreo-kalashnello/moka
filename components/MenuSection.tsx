"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { menuCategories, menuItems, type MenuCategory } from "@/lib/data";
import { MenuCard } from "./MenuCard";
import { Reveal } from "./Reveal";
import { SeasonalBanner } from "./SeasonalBanner";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("Сніданки");

  return (
    <Reveal>
      <section className="menu-section site-container" id="menu" aria-labelledby="menu-title">
        <div className="menu-section__heading">
          <div className="menu-section__title-row">
            <div>
              <p className="section-label">МЕНЮ</p>
              <h2 id="menu-title">Наше меню</h2>
            </div>
            <a className="text-link" href="#menu-grid">
              Переглянути повне меню
              <ArrowRight aria-hidden="true" size={19} />
            </a>
          </div>
          <div className="menu-filters" role="tablist" aria-label="Категорії меню">
            {menuCategories.map((category) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={activeCategory === category ? "is-active" : undefined}
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="menu-grid" id="menu-grid">
          {menuItems.map((item) => (
            <MenuCard item={item} key={item.id} />
          ))}
        </div>
        <SeasonalBanner />
      </section>
    </Reveal>
  );
}
