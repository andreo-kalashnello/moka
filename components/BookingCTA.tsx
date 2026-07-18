import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Reveal } from "./Reveal";

export function BookingCTA() {
  return (
    <Reveal>
      <section className="booking-cta" id="booking" aria-labelledby="booking-title">
        <Image
          src="/images/cta/background.jpg"
          alt="Затишний інтер’єр кафе MOKA ввечері"
          fill
          sizes="100vw"
          className="booking-cta__image"
        />
        <div className="booking-cta__overlay" />
        <div className="booking-cta__content">
          <span className="booking-cta__icon">
            <CalendarDays aria-hidden="true" size={29} strokeWidth={1.4} />
          </span>
          <h2 id="booking-title">Ваш улюблений столик вже чекає</h2>
          <p>Забронюйте столик онлайн за кілька кліків та насолоджуйтеся моментом у MOKA.</p>
          <a className="button button--pill" href="tel:+380971234567">
            Забронювати столик
          </a>
        </div>
      </section>
    </Reveal>
  );
}
