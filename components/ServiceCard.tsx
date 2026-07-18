import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/lib/data";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="service-card">
      <div className="service-card__image">
        <Image src={service.image} alt={service.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw" />
      </div>
      <div className="service-card__content">
        <span className="service-card__icon">
          <Icon aria-hidden="true" size={23} strokeWidth={1.5} />
        </span>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <a href="#booking">
          Детальніше <ArrowRight aria-hidden="true" size={16} />
        </a>
      </div>
    </article>
  );
}
