# MOKA — Design System

Source: Stitch project `8206071057329136659` (`Moka Café Landing Page`). Extracted on 2026-07-18 from `get_project`, `list_screens`, `list_design_systems`, and downloaded screen HTML/screenshots. Values marked as observed come from the final responsive/animated HTML; values marked as system come from Stitch Design System asset `f3960b82fede4ac8be6df392321b719a` v1.

## Visual direction

Premium warm café: editorial food/interior photography, light cream content surfaces, deep espresso hero/CTA regions, muted olive actions, serif display type paired with geometric sans-serif UI type. Depth comes mainly from tonal layers, image scrims and restrained glass effects rather than heavy shadows.

## Color tokens

| Token | Value | Intended use |
|---|---:|---|
| `background`, `surface`, `surface-dim` | `#1a110d` | Dark base / espresso regions |
| `surface-container-lowest` | `#150c08` | Deepest layer and dark gradient endpoint |
| `surface-container-low` | `#231915` | Low dark layer |
| `surface-container` | `#271d19` | Card/surface layer |
| `surface-container-high` | `#322823` | Raised dark layer |
| `surface-container-highest`, `surface-variant` | `#3e322d` | Highest dark surface |
| `surface-bright` | `#423732` | Brightest dark surface |
| `on-surface`, `on-background` | `#f2dfd7` | Cream text on dark |
| `on-surface-variant` | `#cbc6b8` | Muted text on dark |
| `primary`, `primary-fixed-dim`, `surface-tint` | `#cfc893` | Light olive highlight |
| `primary-container` | `#726d40` | Main CTA olive |
| `on-primary-container` | `#f7f0b8` | CTA text |
| `inverse-primary` | `#646034` | CTA hover/darker olive |
| `secondary` | `#c9c6be` | Secondary foreground |
| `secondary-container` | `#4a4943` | Secondary dark container |
| `tertiary` | `#dcc1b6` | Warm blush foreground |
| `tertiary-container` | `#7d675e` | Warm brown container |
| `outline` | `#949183` | Strong outline |
| `outline-variant` | `#49473c` | Subtle dark outline |
| `error` / `error-container` | `#ffb4ab` / `#93000a` | Error states |
| `surface-light` (observed) | `#fdf9f5` | Main light page background |
| `warm-white` (observed) | `#f8f5ef` | Alternate light section |
| `card-bg` (observed) | `#fcf9f6` | Light cards |
| `card-border` (observed) | `#eaddd5` | Light card borders |
| `text-dark` (observed) | `#291e19` | Primary text on light |
| `text-muted` (observed) | `#5c483d` | Secondary text on light |
| `accent-brown` (observed) | `#7b533e` | Brown labels/links |

Scrims observed: hero dark gradient from `rgba(21,12,8,.95)` through `.6` to transparent on desktop; vertical `.95` to `.4` on mobile. CTA background uses a 60% black overlay. Design guidance allows 40–60% overlays with `backdrop-filter: blur(20px)`.

## Typography

- Display/headings: **Playfair Display**, weights 600–700.
- Body, labels, UI: **Montserrat**, weights 400–600.
- Additional fonts are loaded in generated HTML (`Inter`, `Manrope`) but are not part of the core Stitch design system and should not be treated as primary tokens.

| Token | Size | Weight | Line height | Tracking |
|---|---:|---:|---:|---:|
| `headline-xl` (system) | 64px | 700 | 1.1 | -0.02em |
| `headline-xl` (animated HTML desktop) | 82px | 700 | .95 | -0.02em |
| `headline-lg` | 48px | 600 | 1.2 | normal |
| `headline-md` | 32px | 600 | 1.3 | normal |
| `headline-lg-mobile` | 36px | 600 | 1.2 | normal |
| `body-lg` | 18px | 400 | 1.6 | normal |
| `body-md` | 16px | 400 | 1.6 | normal |
| `label-lg` | 14px | 600 | 1.2 | .1em |
| `label-sm` | 12px | 500 | 1.2 | .05em |

Labels are generally uppercase. The 82px desktop hero size is an observed screen-level override, not a global replacement for the 64px system token.

## Layout and spacing

- Base spacing unit: `8px`.
- Design-system container: `1280px`; final responsive/animated HTML uses `1312px` for its main container and up to `1440px` for the services section.
- Horizontal margins: mobile `20px`, tablet commonly `32px`, desktop `64px`.
- Grid guidance: 12 columns desktop, 6 tablet, 2 mobile.
- Section rhythm: typically `80–120px` desktop; observed responsive sections use `48px` mobile and `64–80px` from tablet upward.
- Gutter token: `24px`.
- Hero: `85vh` mobile, `600px` tablet, `720px` large desktop; background focus shifts from centered mobile to about 68% horizontally on desktop.
- Menu: horizontal-scroll filters on small screens; cards reflow from two columns through three to five columns in the responsive HTML.
- Navigation: fixed translucent top bar plus fixed bottom navigation on mobile; full horizontal navigation from `md` upward. Some desktop links are shown only at `lg`.
- Footer: desktop/tablet footer is hidden on mobile and replaced by bottom navigation.

Breakpoints evidenced by generated HTML/CSS: `768px` and `1024px`, plus Tailwind `sm`, `md`, `lg`, `xl` responsive variants. Stitch contains dedicated 780px-wide mobile comps, a 390×884 mobile viewport artifact without a screenshot, and 2560px-wide desktop exports. No standalone tablet screenshot was returned.

## Shape

System radii:

- `sm`: 4px
- `DEFAULT`: 8px
- `md`: 12px
- `lg`: 16px
- `xl`: 24px
- `full`: 9999px

Observed animated HTML locally remaps utility names to 4px default, 8px `lg`, 12px `xl`, and 16px `card`; therefore implementation should follow the visual slot, not assume Tailwind's default name mapping. Buttons commonly use 8px or pill radii; cards use 12–16px; large design-system imagery may use 24px.

## Borders, elevation and effects

- Borders: mostly 1px, using `card-border`, `outline-variant`, cream, or olive at low opacity.
- Shadows: restrained Tailwind `shadow-sm` on cards/images and `shadow-md` on hover. Stitch did not expose numeric shadow values because generated screens rely on Tailwind CDN defaults.
- Glass: translucent dark/light navigation layers with `backdrop-blur-xl`/`2xl`; system guidance specifies approximately 20px blur.
- Images: `object-cover`, editorial crops, warm color grading; hover zoom typically 1.05–1.10 over 700ms.

## Motion

Confirmed in `MOKA — Animated Landing Page` HTML:

- Hero `fadeInUp`: 1s ease-out, 20px vertical offset, delays at 0.2s and 0.4s.
- Scroll reveal: opacity 0 → 1 and translateY 30px → 0 over 0.8s ease-out; driven by `IntersectionObserver` at threshold 0.15.
- Hero parallax: background Y position follows scroll at 0.4×.
- Hover motion: CTA scale 1.05, cards translateY -4px, image zoom 1.05–1.10, some icons rotate/translate.
- Reduced-motion handling exists for hero/reveal/parallax via `prefers-reduced-motion`; hover transitions remain.

Important evidence limit: many `.reveal` elements already include `active` in the delivered HTML, so their observer-triggered reveal may not visibly replay. The Stitch screenshot of the animated screen captured the hero copy before it appeared, showing a possible blank-first-frame/static-capture issue.

## Responsive behavior

### Desktop

- Full desktop header; 64px outer margins; hero uses horizontal dark scrim and right-biased image crop.
- Menu cards appear in a five-card row; services and editorial sections use multi-column compositions.
- Full footer with 12-column layout is visible.

### Tablet

- Inferred from actual `md`/`lg` rules in the same HTML, not from a dedicated screenshot.
- Desktop-style header begins at 768px, while some nav/contact items wait until 1024px.
- Horizontal padding is 32px; content commonly uses 2–3 columns; hero height 600px.
- Card gradient remains horizontal but its solid portion increases to 60% below 1024px.

### Mobile

- Dedicated mobile top app bar and four-item bottom navigation.
- Hero becomes vertical, moves below the 64px fixed header, uses a vertical scrim, and stacks CTAs full-width.
- Layouts collapse to one/two columns; filter chips scroll horizontally; footer is suppressed.
- Dark and light-palette full-page mobile references exist at 780×12458. A 390×884 responsive artifact has HTML only and no downloadable screenshot.

## Components

- Primary button: olive fill (`#726d40`), cream text, 8px/pill radius, 40–52px height, darker olive hover and small scale-up.
- Secondary button: cream/olive 1px outline, transparent fill, inverse fill on hover.
- Cards: light cream surface, 1px warm border, 12–16px radius, subtle hover lift/shadow.
- Filter chips: horizontally scrollable on mobile, pill shape; active chip uses olive fill.
- Form fields (system guidance): transparent background, 1px cream outline, olive focus border.
- Navigation: uppercase Montserrat labels, active olive color/bottom rule; mobile nav uses icon + small label.

## Image direction

Editorial café imagery uses warm daylight or moody espresso lighting, beige marble, ceramic tableware, wood textures and muted cream/brown grading. The exact locally available sources and intended destinations are catalogued in `references/assets-manifest.md`.

## Accessibility notes and limits

- Useful evidence: semantic headings/sections, image alt text, labelled pagination dots, visible responsive reflow, and reduced-motion checks in the animated screen.
- Risks visible in source: animated hero content starts at opacity 0; small 10–12px supporting copy appears in places; several controls are static `<button>` elements with no confirmed behavior; generated pages use CDN dependencies.
- Screenshots alone do not prove keyboard order, focus visibility, screen-reader output, final contrast ratios, touch-target compliance, or zoom resilience. These require implementation-level testing later.
