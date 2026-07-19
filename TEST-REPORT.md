# MOKA — Functional Test Report

Дата: 2026-07-19. Среда: Chromium / Playwright, локальный сайт `http://localhost:3000`. Внешние сайты, `tel:` и `mailto:` не открывались; данные форм не отправлялись по сети.

## Результат

Все запрошенные функциональные проверки пройдены.

| Проверка | Результат | Детали |
|---|---|---|
| Desktop navigation | PASS | `#home`, `#menu`, `#about`, `#services`, `#booking` существуют; переход к меню меняет hash на `#menu`, активный header-пункт — «Меню». |
| Плавная навигация | PASS | Вычислено `scroll-behavior: smooth`; после перехода header получает scrolled-state и progress. |
| Booking modal | PASS | Открывается из desktop-header, hero, Booking CTA и mobile profile; два поля — имя и телефон. |
| Booking validation | PASS | `abcdefg` отклоняется с сообщением «Введіть щонайменше 7 цифр номера телефону»; корректный тестовый номер показывает локальный success-state. |
| Modal keyboard | PASS | Начальный focus на имени, `Escape` закрывает окно, focus возвращается на trigger; success-state фокусирует «Готово». |
| Service order modal | PASS | Каждая «Замовити» открывает тот же доступный диалог; для второй карточки заголовок — `Замовити «Кейтеринг»`. |
| Menu filters | PASS | «Основне» выводит только `Тост MOKA з авокадо`, счётчик `Показано 1 з 1`. |
| Load more | PASS | «Завантажити ще» меняет 5/10 на 10/10; затем показывает «Усе меню завантажено» и сохраняет keyboard focus. |
| Reviews slider | PASS (targeted) | Пять отзывов и пять dots; на desktop одновременно выводятся три карточки, на tablet — две, на mobile — одна. После одного шага видимая тройка сменилась с первой на отзывы 2–4. |
| Mobile menu | PASS | Открывается/закрывается кнопкой, `Escape` и выбором ссылки; фон `inert`, body scroll заблокирован. |
| Mobile focus trap | PASS | `Shift+Tab` с close переходит на email, следующий `Tab` возвращает close; после закрытия focus возвращается на trigger. |
| Viewport rotation | PASS | Открытый drawer при 768→1024 закрывается, снимает `inert`/scroll-lock и фокусирует видимый desktop-logo. |
| Scroll to top | PASS | После нажатия `scrollY=0`, кнопка скрывается, focus переводится на видимый logo. |
| Телефон и email | PASS | Проверены корректные `tel:` и `mailto:hello@moka.cafe`; переходы не выполнялись. |
| Horizontal overflow | PASS | На 1440, 1280, 1024, 768 и 390 `scrollWidth === clientWidth`. |
| Images/fonts | PASS | Шрифты `loaded`; все отображаемые изображения завершили загрузку с ненулевым размером. |
| Console | PASS | Финальная чистая сессия: 0 errors, 0 warnings; только React DevTools info и HMR log. |
| Network | PASS | Нестатических запросов нет; 76 document/font/CSS/JS/image запросов вернули только 200 или ожидаемый 304. |

## Что исправлено во время прохода

- Устранено скрытое переполнение About на обязательной ширине 1280px.
- Добавлена строгая проверка количества цифр телефона без ошибочного HTML pattern.
- Исправлено сохранение focus после финальной догрузки меню и нажатия scroll-to-top.
- Drawer перенесён в portal, фон корректно исключён из accessibility tree и добавлено закрытие при смене breakpoint.
- К активным header-ссылкам добавлен `aria-current="location"`.
- Autoplay слайдера получил видимое управление и безопасное поведение live-region.

## Примечания

- После перехода на трёхкарточную карусель выполнена короткая целевая Playwright-проверка шага слайдера и мобильных состояний на 430×932; полный повтор пяти viewport не запускался.
- Отправка формы намеренно реализована как локальный success-state: backend/API в задаче не указан, поэтому ни один контакт не покидает браузер.
- Footer social icons и privacy link сохраняют `href="#"` из исходного дизайна. Внешние адреса не придумывались и не открывались.
- Статические ответы `304 Not Modified` при повторной загрузке являются корректным использованием browser cache.

## Финальные команды

- `npm run lint` — PASS.
- `npm run typecheck` — PASS.
- `npm run build` — PASS; страница статически prerendered.
- `http://localhost:3000` после build — доступен, title и основной document загружаются.
