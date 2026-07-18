import { Clock3, MapPin, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const infoItems = [
  {
    title: "Години роботи",
    text: "Щодня 07:30 – 22:00",
    icon: Clock3,
  },
  {
    title: "Наша адреса",
    text: "вул. Велика Васильківська, 20\nКиїв, Україна",
    icon: MapPin,
  },
] as const;

export function InfoStrip() {
  return (
    <Reveal>
      <section className="info-strip" aria-label="Інформація про кафе">
        <div className="site-container info-strip__grid">
          {infoItems.map(({ title, text, icon: Icon }) => (
            <div className="info-item" key={title}>
              <span className="info-item__icon">
                <Icon aria-hidden="true" size={26} strokeWidth={1.6} />
              </span>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </div>
          ))}
          <div className="info-item">
            <span className="info-item__icon">
              <Star aria-hidden="true" size={26} strokeWidth={1.6} />
            </span>
            <div>
              <h2>Рейтинг гостей</h2>
              <div className="rating-row">
                <p>4.9 з 5 на Google</p>
                <span className="rating-stars" aria-label="Рейтинг 4.9 з 5">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star aria-hidden="true" fill="currentColor" key={star} size={13} strokeWidth={1.5} />
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
