import Image from "next/image";

export function SeasonalBanner() {
  return (
    <article className="seasonal-banner" id="seasonal">
      <div className="seasonal-banner__badge" aria-label="Пропозиція діє лише до 31 травня">
        <span>лише</span>
        <strong>до 31.05</strong>
      </div>
      <div className="seasonal-banner__content">
        <p className="section-label section-label--light">СЕЗОННА ПРОПОЗИЦІЯ</p>
        <h2>Полуничний лате</h2>
        <p>Ніжний смак полуниці, еспресо та вершків у гармонійному поєднанні.</p>
        <a className="button seasonal-banner__button" href="#menu">
          Спробувати новинку
        </a>
      </div>
      <div className="seasonal-banner__image">
        <Image
          src="/images/menu/strawberry-latte.jpg"
          alt="Полуничний лате з еспресо та вершками"
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
    </article>
  );
}
