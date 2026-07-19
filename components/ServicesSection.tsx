"use client";

import { services } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <Reveal>
      <section className="services-section" id="services" aria-labelledby="services-title">
        <h2 className="section-kicker" id="services-title">
          Формати для ваших особливих моментів
        </h2>
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      </section>
    </Reveal>
  );
}
