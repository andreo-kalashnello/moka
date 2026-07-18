# MOKA image and asset manifest

Source of truth: Stitch project `8206071057329136659`. Screen-generated asset filenames use the Stitch screen ID to avoid inventing names. `landing-01`…`landing-17` are the unique remote images embedded in the analyzed Animated Landing Page HTML, ordered by their first URL occurrence after sorting; their semantic role was mapped from the HTML element/section.

## Images embedded in the final animated/responsive landing HTML

| Local file | Section / role | Source in Stitch | Intended implementation path |
|---|---|---|---|
| `assets/landing-01.png` | Hero background | Animated screen HTML, `hero-section` background | `public/images/moka/hero.png` |
| `assets/landing-02.png` | Menu: avocado toast | Animated screen HTML, alt “Авокадо тост з яйцем пашот” | `public/images/moka/menu/avocado-toast.png` |
| `assets/landing-03.png` | Menu: classic croissant | Animated screen HTML, alt “Круасан класичний” | `public/images/moka/menu/croissant.png` |
| `assets/landing-04.png` | Review avatar: Oleksii | Animated screen HTML, alt “Олексій І.” | `public/images/moka/reviews/oleksii.png` |
| `assets/landing-05.png` | Review avatar: Anna | Animated screen HTML, alt “Анна К.” | `public/images/moka/reviews/anna.png` |
| `assets/landing-06.png` | About: café interior | Animated screen HTML, alt “Premium cafe interior” | `public/images/moka/about/interior.png` |
| `assets/landing-07.png` | Menu: cheesecake | Animated screen HTML, alt “Чізкейк Сан-Себастьян” | `public/images/moka/menu/cheesecake.png` |
| `assets/landing-08.png` | Menu: oatmeal with berries | Animated screen HTML, alt “Вівсяна каша з ягодами” | `public/images/moka/menu/oatmeal.png` |
| `assets/landing-09.png` | Menu: cappuccino | Animated screen HTML, alt “Капучино” | `public/images/moka/menu/cappuccino.png` |
| `assets/landing-10.png` | Footer interior thumbnail | Animated screen HTML, alt “Cafe Interior” | `public/images/moka/footer/interior.png` |
| `assets/landing-11.png` | Menu: strawberry latte | Animated screen HTML, alt “Полуничний лате” | `public/images/moka/menu/strawberry-latte.png` |
| `assets/landing-12.png` | Review avatar: Mariia | Animated screen HTML, alt “Марія П.” | `public/images/moka/reviews/mariia.png` |
| `assets/landing-13.png` | CTA dark café background | Animated screen HTML, CTA background | `public/images/moka/cta-background.png` |
| `assets/landing-14.png` | Services: breakfast plate | Animated screen HTML, alt “Breakfast plate with eggs” | `public/images/moka/services/breakfast.png` |
| `assets/landing-15.png` | Services: café interior | Animated screen HTML, alt “Cafe interior” | `public/images/moka/services/interior.png` |
| `assets/landing-16.png` | Services: takeaway coffee and croissant | Animated screen HTML, alt “Takeaway coffee cup and croissant” | `public/images/moka/services/takeaway.png` |
| `assets/landing-17.png` | Services: catering table | Animated screen HTML, alt “Catering table” | `public/images/moka/services/catering.png` |

Note: mapping uses the saved HTML semantics; Stitch URLs themselves have opaque IDs. The files were downloaded exactly as served and were not edited.

## Standalone image resources returned by Stitch

| Stitch ID / local file | Name or content | Section | Intended implementation path |
|---|---|---|---|
| `11302230650196094637.png` | `moka-for-intro.png` | Hero reference | `references/assets/11302230650196094637.png` |
| `15950510813944974662.png` | `header_intro_referense.png` | Hero reference | `references/assets/15950510813944974662.png` |
| `15950510813944974664.png` | `moka-for-infro.png` | Hero reference variant | `references/assets/15950510813944974664.png` |
| `6841439198783219803.png` | `menu.png` | Menu reference | `references/assets/6841439198783219803.png` |
| `9895739995500420185.png` | `menu.png` | Menu reference variant | `references/assets/9895739995500420185.png` |
| `14058139492593190282.png` | `services.png` | Services reference | `references/assets/14058139492593190282.png` |
| `1846312574852818650.png` | `about_and_reviews.png` | About/reviews reference | `references/assets/1846312574852818650.png` |
| `5187638102879416498.png` | `cta_footer.png` | CTA/footer reference | `references/assets/5187638102879416498.png` |
| `ad22dafb1e4b4e71ad1b19a6d76b113c.png` | Cappuccino editorial photo | Menu | `public/images/moka/menu/cappuccino-stitch.png` |
| `824921ab1d844a71851f2aab271fc186.png` | Butter croissant editorial photo | Menu | `public/images/moka/menu/croissant-stitch.png` |
| `5f3618d69f6b48488fcd920ef1554c51.png` | Avocado toast editorial photo | Menu | `public/images/moka/menu/avocado-toast-stitch.png` |
| `8c7bc943380446f2b079fd34c9bfbe6e.png` | Strawberry latte editorial photo | Menu | `public/images/moka/menu/strawberry-latte-stitch.png` |
| `0ad4304e98d74c2790466a8c1e1b9f69.png` | Basque cheesecake editorial photo | Menu | `public/images/moka/menu/cheesecake-stitch.png` |
| `9dcb9038530b4812a346ac03bec3d684.png` | Oatmeal and berries editorial photo | Menu | `public/images/moka/menu/oatmeal-stitch.png` |
| `2e031532eed747818489dfce9f91f511.png` | Dark café interior at night | CTA/background | `public/images/moka/cta-night-interior.png` |
| `f06cc628416c453d896c1c908a9358b1.png` | Apple touch icon | Brand/app | `public/apple-touch-icon.png` |
| `12b5604257d144c09f48943b7d53f28e.png` | Dark champagne-gold app icon | Brand/app | `public/icons/moka-app-dark.png` |
| `bcaedd879c9744fe9a451100077795d7.png` | Dark chocolate app icon variant | Brand/app | `public/icons/moka-app-dark-variant.png` |
| `eb4da412004b48d4a37e59e10280f92a.png` | Cream favicon concept | Brand/app | `public/icons/moka-favicon-source.png` |
| `f139262928c846a7aa15b40ca996885b.png` | App Store marketing screenshot 1 (UA) | Marketing | `public/marketing/app-store-01-ua.png` |
| `51a3eaaf706847faa0b7396ea07f24cb.png` | App Store marketing screenshot 2 (UA) | Marketing | `public/marketing/app-store-02-ua.png` |
| `4e58d6fdf46e42308216ad936431ceb4.png` | App Store marketing screenshot 3 (UA) | Marketing | `public/marketing/app-store-03-ua.png` |
| `5c9535bb308b4902ad8110d3ddb7d0e2.png` | App Store marketing screenshot 1 (EN) | Marketing | `public/marketing/app-store-01-en.png` |
| `08aa1ff4e6b643cb8be463d2e852296a.png` | App Store marketing screenshot 2 (EN) | Marketing | `public/marketing/app-store-02-en.png` |
| `8c97d590084649b4966790a6b49456a1.png` | App Store marketing screenshot 3 (EN) | Marketing | `public/marketing/app-store-03-en.png` |
| `f4dab04dda15408886ba860104f9d901.png` | Social media app card | Marketing | `public/marketing/social-app-card.png` |
| `daf803c97f3b407eac0038a8b8227409.png` | Wide web banner | Marketing | `public/marketing/web-banner.png` |
| `d4100fb2f5e647f4bdf6d35f2e6d6368.png` | Welcome email header | Marketing | `public/marketing/email-header.png` |
| `8068346396298292920.png` | Uploaded ChatGPT image | Unresolved from MCP title alone | `references/assets/8068346396298292920.png` |
| `7533554659163646645.png` | Generic `image.png` | Unresolved from MCP title alone | `references/assets/7533554659163646645.png` |
| `4869596086657743415.png` | Generic `image.png` | Unresolved from MCP title alone | `references/assets/4869596086657743415.png` |
| `918084609319993604.png` | Generic `image.png` | Unresolved from MCP title alone | `references/assets/918084609319993604.png` |
| `14438570382293950214.png` | Generic `image.png` | Unresolved from MCP title alone | `references/assets/14438570382293950214.png` |
| `183504025988232114.png` | Generic `image.png` | Unresolved from MCP title alone | `references/assets/183504025988232114.png` |
| `17613791628075546707.png` | Generic `image.png` | Unresolved from MCP title alone | `references/assets/17613791628075546707.png` |

## Non-image assets and unavailable items

- Design system: `assets/f3960b82fede4ac8be6df392321b719a`, version 1 (`Premium Café Collective`).
- Generated HTML is available locally for the seven principal screens in `references/source-html/`.
- The 390×884 `MOKA — Responsive Landing Page` screen exposes HTML but no screenshot URL.
- Several Stitch document resources (`*.md`, ASO metadata, web manifest, accessibility audit) expose HTML/download resources but are not image assets and were not copied into the image manifest.
- Stitch MCP does not provide original human-readable filenames, licenses, EXIF data, or stable semantic IDs for the 17 embedded opaque Google-hosted images.
