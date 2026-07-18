# MOKA — Functional Test Report

Дата: 2026-07-18. Среда: Chromium / Playwright, локальный сайт `http://localhost:3000`. Формы не отправлялись, внешние сайты и схемы `tel:`/`mailto:` не открывались.

## Результат

Все запрошенные функциональные проверки пройдены.

| Проверка | Результат | Детали |
|---|---|---|
| Desktop navigation | PASS | `#home`, `#menu`, `#about`, `#services`, `#booking` открываются; target располагается с отступом 88px под header. |
| Плавная навигация | PASS | У корневого элемента вычислено `scroll-behavior: smooth`. |
| «Переглянути меню» | PASS | Переходит к `#menu`; desktop target top 88px. |
| CTA бронирования | PASS | Header, hero, navigation, четыре service CTA и footer-ссылка проверены; внутренние CTA приводят к `#booking`. |
| Booking CTA с телефоном | PASS | Адрес проверен как `tel:+380971234567`; переход не выполнялся по ограничению теста. |
| Mobile menu | PASS | Открывается кнопкой, закрывается кнопкой/`Escape`/выбором ссылки; блокирует прокрутку страницы. |
| Mobile keyboard focus | PASS | При открытии focus на close; `Shift+Tab`/`Tab` замыкают focus между первым и последним элементом; после закрытия focus возвращается на «Відкрити меню». |
| Mobile menu navigation | PASS | Ссылка «Меню» закрывает panel и приводит к `#menu`; target top 64px. |
| Телефоны | PASS | Найдены и проверены три `tel:`-ссылки: header, Booking CTA, footer. |
| Email | PASS | `mailto:hello@moka.cafe` присутствует в footer и mobile menu. |
| Keyboard navigation | PASS | Первый `Tab` фокусирует logo, `Enter` активирует `#home`; интерактивные элементы доступны с клавиатуры. |
| Focus state | PASS | Вычислен видимый outline: `3px solid rgb(207, 200, 147)`, offset `3px`. |
| Hover state | PASS | Основной CTA меняет фон на `rgb(100, 96, 52)` и получает transform `scale(1.035)`. |
| Internal targets | PASS | 37 ссылок проверены, 33 внутренние; отсутствующих ID-целей нет. |
| Console | PASS | В чистой сессии: 0 errors, 0 warnings. |
| Network | PASS | В чистой загрузке неуспешных запросов нет; все изображения завершили загрузку с ненулевым natural size. |
| Horizontal overflow | PASS | На всех пяти viewport `scrollWidth === clientWidth`. |

## Найдено и исправлено во время теста

- Исправлен favicon 404.
- Добавлен безопасный fallback reveal-анимаций.
- Добавлены клавиатурный focus trap и надёжный возврат focus в мобильном меню.
- Исправлен текст года в footer по Stitch.

## Примечания

- В накопленной dev-сессии при принудительной смене viewport браузер отменил два старых responsive-запроса hero (`net::ERR_ABORTED`). Это ожидаемая отмена при выборе нового `srcset`, а не ошибка сервера. Отдельная чистая загрузка выполнена без failed requests.
- Footer social icons и privacy link сохраняют `href="#"` из исходного дизайна. Внешние адреса не придумывались и во время теста не открывались.

## Финальные команды

- `npm run lint` — PASS.
- `npm run typecheck` — PASS.
- `npm run build` — PASS.
- `http://localhost:3000` после build — доступен, title и основной document загружаются.
