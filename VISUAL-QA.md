# MOKA — Visual QA

Дата проверки: 2026-07-18.

Источник правды: Stitch project `8206071057329136659`, финальные экраны `MOKA — Responsive Landing Page` и `MOKA — Animated Landing Page`, а также `DESIGN.md`. Проверка выполнена в Chromium через Playwright на `http://localhost:3000`.

## Проверенные размеры

| Viewport | Высота страницы | Горизонтальный overflow | Изображения | Screenshot |
|---|---:|---|---|---|
| 1440×1000 | 4318px | нет (`1440 = 1440`) | загружены | `references/visual-qa/1440x1000-final.png` |
| 1280×900 | 4366px | нет (`1280 = 1280`) | загружены | `references/visual-qa/1280x900-final.png` |
| 1024×768 | 4633px | нет (`1024 = 1024`) | загружены | `references/visual-qa/1024x768-final.png` |
| 768×1024 | 6319px | нет (`768 = 768`) | загружены | `references/visual-qa/768x1024-final.png` |
| 390×844 | 7743px | нет (`390 = 390`) | загружены | `references/visual-qa/390x844-final.png` |

Дополнительно сохранён viewport-снимок открытого мобильного меню: `references/visual-qa/390x844-mobile-menu.png`.

## Сравнение со Stitch

- Полное desktop-сравнение: `references/visual-qa/comparison-full-final.jpg`.
- Hero и InfoStrip: `references/visual-qa/comparison-hero-final.jpg`.
- Меню и сезонный баннер: `references/visual-qa/comparison-menu-final.jpg`.
- На 1440/1280 проверены контейнеры, ритм секций, переносы заголовков, размеры CTA, пять menu-карточек, четыре service-карточки, About/Stats/Reviews, Booking CTA и полный footer.
- На 1024/768 проверены переходы сеток, desktop header с правилами `md`/`lg`, crop изображений и отступы секций.
- На 390 проверены мобильные header и bottom navigation, одно-колоночные карточки, горизонтальные chips, вертикальный seasonal banner, скрытый desktop footer и отсутствие бокового скролла.

Итоговая композиция и пропорции совпадают с финальным responsive Stitch-экраном. При ширине 1280 итоговая страница имеет практически тот же aspect ratio, что и Stitch export: около 3.41 против 3.44.

## Найденные проблемы и исправления

1. Favicon возвращал 404 и создавал ошибку в консоли. Добавлен постоянный `app/icon.png` из доступного Stitch-ассета.
2. В footer был указан `© 2026`, тогда как финальный Stitch-экран содержит `© 2024`. Текст приведён к источнику.
3. Off-screen reveal-секция могла остаться прозрачной при full-page capture или необычном сценарии прокрутки. Добавлены reduced-motion ветка и безопасный fallback, не меняющий штатную анимацию.
4. Next.js dev indicator попадал в первичные скриншоты. Индикатор отключён через `devIndicators: false`; в финальных снимках его нет.
5. Мобильное меню не удерживало клавиатурный focus и после перехода по ссылке могло оставлять focus на удалённом элементе. Добавлены focus trap и возврат focus на кнопку открытия.

После каждого исправления соответствующие desktop/mobile состояния были проверены повторно.

## Проверенные состояния

- `scroll-behavior: smooth` активен.
- Все пять reveal-блоков переходят в видимое состояние; при reduced motion отображаются сразу.
- Hover основной кнопки меняет фон и применяет `scale(1.035)`.
- `:focus-visible` даёт контур `3px solid` с `3px` offset.
- Hero/menu/service/about/booking изображения загружаются и сохраняют заданный `object-fit: cover` crop.
- Desktop/tablet/mobile сетки не выходят за viewport.

## Оставшиеся отличия и ограничения источника

- Stitch MCP вернул точный финальный desktop screenshot и responsive HTML, но не отдельные screenshot-файлы для каждого из пяти viewport. Поэтому tablet/mobile сравнение основано на фактических responsive-правилах того же Stitch-экрана и визуальной проверке, а не на автоматическом pixel-diff с отдельным эталонным PNG.
- Некоторые небольшие UI-иконки реализованы ближайшими эквивалентами Lucide, как разрешено требованиями. Геометрия может минимально отличаться от inline SVG из Stitch.
- Отдельных объективных P0/P1/P2 расхождений после финального прохода не осталось.

## Финальная техническая проверка

- ESLint: PASS (`npm run lint`).
- TypeScript: PASS (`npm run typecheck`).
- Production build: PASS (`npm run build`).
- Dev server: PASS, повторная загрузка `http://localhost:3000` после build успешна.
