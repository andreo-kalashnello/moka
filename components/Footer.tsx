import Image from "next/image";
import { Camera, Mail, MapPin, Phone, Play, Send, ThumbsUp } from "lucide-react";

const socialItems = [
  { label: "Instagram", href: "#", icon: Camera },
  { label: "Facebook", href: "#", icon: ThumbsUp },
  { label: "Telegram", href: "#", icon: Send },
  { label: "YouTube", href: "#", icon: Play },
] as const;

const footerNav = [
  { label: "Меню", href: "#menu" },
  { label: "Про нас", href: "#about" },
  { label: "Послуги", href: "#services" },
  { label: "Бронювання", href: "#booking" },
  { label: "Контакти", href: "#contacts" },
] as const;

export function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#home" aria-label="MOKA — на головну">
              MOKA
            </a>
            <p className="footer__tagline">Кава • Їжа • Люди</p>
            <p>Затишне міське кафе, де кожен момент стає особливим.</p>
            <div className="footer__socials">
              {socialItems.map(({ label, href, icon: Icon }) => (
                <a aria-label={label} href={href} key={label}>
                  <Icon aria-hidden="true" size={19} strokeWidth={1.7} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2>Навігація</h2>
            <ul className="footer__links">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Контакти</h2>
            <ul className="footer__contacts">
              <li>
                <Phone aria-hidden="true" size={19} />
                <a href="tel:+380971234567">+38 (097) 123 45 67</a>
              </li>
              <li>
                <Mail aria-hidden="true" size={19} />
                <a href="mailto:hello@moka.cafe">hello@moka.cafe</a>
              </li>
              <li>
                <MapPin aria-hidden="true" size={19} />
                <span>вул. Велика Васильківська, 23<br />Київ, Україна</span>
              </li>
            </ul>
          </div>
          <div className="footer__hours">
            <div>
              <h2>Години роботи</h2>
              <p>Щодня<br />08:00 – 22:00</p>
            </div>
            <div className="footer__image">
              <Image src="/images/footer/interior.jpg" alt="Інтер’єр кафе MOKA" fill sizes="200px" />
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2024 MOKA. Усі права захищені.</p>
          <a href="#">Політика конфіденційності</a>
        </div>
      </div>
    </footer>
  );
}
