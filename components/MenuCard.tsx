import Image from "next/image";
import type { MenuItem } from "@/lib/data";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="menu-card">
      <div className="menu-card__image">
        <Image src={item.image} alt={item.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 20vw" />
      </div>
      <div className="menu-card__body">
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <strong>{item.price}</strong>
      </div>
    </article>
  );
}
