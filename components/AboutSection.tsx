import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Stats } from "./Stats";

export function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-section__image">
        <Image src="/images/about/interior.png" alt="Теплий інтер’єр міського кафе MOKA" fill sizes="(max-width: 1023px) 100vw, 480px" />
      </div>
      <div className="about-section__content">
        <p className="section-label">ПРО НАС</p>
        <h2 id="about-title">Історія про любов до деталей та справжнього смаку.</h2>
        <div className="about-section__details">
          <div>
            <p>
              MOKA — це міський кафе простір, створений для тих, хто цінує якість, атмосферу та
              щирість у кожній деталі. Ми працюємо з локальними фермерами, обсмажуємо каву на
              власному обладнанні та готуємо з любов&apos;ю щодня.
            </p>
            <a className="text-link" href="#services">
              Більше про нас <ArrowRight aria-hidden="true" size={17} />
            </a>
          </div>
          <Stats />
        </div>
      </div>
    </section>
  );
}
