"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/lib/data";
import { useRequestModal } from "./RequestModalProvider";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  const { openService } = useRequestModal();

  return (
    <article className="service-card">
      <div className="service-card__image">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1280px) 50vw, 25vw"
        />
      </div>
      <div className="service-card__content">
        <span className="service-card__icon">
          <Icon aria-hidden="true" size={23} strokeWidth={1.5} />
        </span>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <button type="button" onClick={() => openService(service.title)}>
          Замовити <ArrowRight aria-hidden="true" size={16} />
        </button>
      </div>
    </article>
  );
}
