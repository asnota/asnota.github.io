---
name: Anna Shvets
description: Composer & Pianist. A calm editorial site where the music is playable in the first viewport.
colors:
  paper: "#f5f4ef"
  ink: "#1b1a24"
  ink-soft: "#55525f"
  rule: "#dcd9d0"
  violet: "#5a3fd1"
  violet-ink: "#4a2fc0"
  night: "#17141f"
  night-soft: "#b9b4c9"
  night-link: "#cfc6ff"
  lavender: "#ece8f6"
typography:
  display:
    fontFamily: "Playfair Display Variable, Playfair Display, Georgia, serif"
    fontSize: "clamp(3.25rem, 7.5vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  feature:
    fontFamily: "Playfair Display Variable, Playfair Display, Georgia, serif"
    fontSize: "4.5rem"
    fontWeight: 400
    lineHeight: 1
  headline:
    fontFamily: "Playfair Display Variable, Playfair Display, Georgia, serif"
    fontSize: "3rem"
    fontWeight: 400
    lineHeight: 1.1
  title:
    fontFamily: "Playfair Display Variable, Playfair Display, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.375
  lead:
    fontFamily: "Hanken Grotesk Variable, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Hanken Grotesk Variable, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  small:
    fontFamily: "Hanken Grotesk Variable, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  label:
    fontFamily: "Hanken Grotesk Variable, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.14em"
  label-lg:
    fontFamily: "Hanken Grotesk Variable, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.18em"
rounded:
  media: "3px"
  pill: "9999px"
spacing:
  gutter: "24px"
  gutter-md: "48px"
  section: "80px"
  section-md: "112px"
  container: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.violet-ink}"
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-contact:
    backgroundColor: "{colors.violet}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-contact-hover:
    backgroundColor: "{colors.violet-ink}"
  button-on-night:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.night}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-on-night-hover:
    backgroundColor: "{colors.lavender}"
  button-outline-on-night:
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  text-link:
    textColor: "{colors.violet-ink}"
    typography: "{typography.small}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.small}"
---

# Design System: Anna Shvets

## Overview

**Creative North Star: "The Concert Programme"**

The front page reads like a well-set printed programme on warm paper: a large serif name, a quiet grotesk for everything that informs, thin rules that divide content the way a programme separates movements, and one violet ink for anything you can act on. It is calm and open. Sections breathe at 112px on desktop, and content sits in a 1240px container with two-column splits rather than the old narrow single column.

Depth comes from full-bleed colour bands, not from cards or surfaces. The page alternates paper, a night-navy band for the featured release and the contact close, and a pale lavender band for credentials. Imagery is square, almost unrounded (3px), and treated as an object on the page. The page has no motion.

This world ships in full on the front page (`../src/pages/index.astro`, `HomeLayout`). `HomeHeader` and `HomeFooter` are shared by every page: the other pages (`BaseLayout`) wrap their legacy content in this header and footer until they are redesigned. The front page has no dark mode.

**Temporary dark header.** On pages using `BaseLayout`, `HomeHeader` shows a dark mode toggle, and its dark state uses the legacy tokens (`--background`, `--foreground`, `--border`, `--primary`). This is a stopgap until this world gets its own dark palette. It is the only allowed exception to the legacy-token rule below and never applies on the front page.

**Key Characteristics:**
- Warm paper ground, near-black violet-tinted ink, one violet accent.
- Playfair Display at regular weight for names and headings, italic for names of people and works.
- Hanken Grotesk for body, metadata and controls.
- Pill-shaped buttons, 3px media corners, 1px rules.
- Full-bleed night and lavender bands for rhythm and emphasis.
- Underlined text links that thicken on hover.

## Colors

A warm-neutral paper palette with violet-tinted darks and a single saturated violet accent.

### Primary
- **Programme Violet** (violet): the action fill. Used for the header Contact pill and the focus ring. White text on it.
- **Deep Violet Ink** (violet-ink): violet as text and as the hover state. Used for text links on paper and lavender, the "Composer & Pianist" tagline, credential labels, heading-link hovers, and the hover fill of the primary and Contact pills.

### Secondary
- **Night** (night): the full-bleed band behind the featured release and the contact footer, and the letterbox behind the hero video. Paper text sits on it.
- **Night Lilac Link** (night-link): the link, focus and button colour on night. Used for the footer "Email Anna" pill (full width on mobile) and the focus outline inside night bands.

### Tertiary
- **Programme Lavender** (lavender): the full-bleed credentials band, the text-selection highlight, and the hover fill of the paper pill on night.

### Neutral
- **Warm Paper** (paper): the page ground, the sticky header (at 95% with a light backdrop blur) and text on night.
- **Ink** (ink): headings, body text on lavender, the primary pill fill, and the 1px rule above each news column.
- **Soft Ink** (ink-soft): secondary copy on paper: lead paragraphs, summaries, dates, captions, catalogue highlights.
- **Paper Rule** (rule): hairline dividers: under the header, under the hero, and between catalogue rows.
- **Night Soft** (night-soft): secondary copy on night (Omega description).

### Named Rules
**The One Ink Rule.** Violet is the only chromatic accent, and it means "you can act on this" or "this is the name of her role". Never add a second accent hue.

**The Band Rule.** Night and lavender are full-bleed section bands, never boxed panels inside a paper section. Night carries emphasis (the featured release, the contact close); lavender carries proof (credentials).

## Typography

**Display Font:** Playfair Display Variable (with Georgia, serif)
**Body Font:** Hanken Grotesk Variable (with system-ui, sans-serif)

**Character:** A high-contrast transitional serif at regular weight against a clean, slightly warm grotesk. The serif names things; the grotesk tells you about them.

### Hierarchy
- **Display** (400, clamp(3.25rem, 7.5vw, 6rem), 0.95, -0.02em): the artist name in the hero only, surname in italic.
- **Feature** (400, 3rem mobile to 4.5rem desktop, 1): the title of a featured release on a night band.
- **Headline** (400, 2.25rem mobile to 3rem desktop, 1.1): section headings; the footer heading runs to 3.25rem.
- **Title** (400, 1.5rem, 1.375): news headlines, catalogue genres, the mobile menu items, and the header wordmark.
- **Lead** (400, 1.125rem, 1.625): section intros and hero sentence, capped at 34 to 52ch.
- **Body** (400, 1rem, 1.625): summaries and credential text.
- **Small** (400, 0.875rem): dates, captions, text links, "Also on" line; nav links at 0.95rem.
- **Label Large** (600, 0.875rem, 0.18em tracking, uppercase, violet-ink): the role tagline under the name in the hero.
- **Label** (600, 0.75rem, 0.14em tracking, uppercase, violet-ink): the term in a definition list.

### Named Rules
**The Regular Weight Rule.** Playfair is always set at weight 400. Hierarchy comes from size and italic, never from bold serif.

**The Italic Name Rule.** Italic Playfair marks proper names: the surname in the hero and titles of works in running text ("*Redemption*, new release").

**The Label Below Rule.** Tracked caps label something already named or defined: the role under the name, the term in a definition list. They never sit above a heading as an eyebrow.

## Layout

A 1240px max-width container with 24px side gutters on mobile and 48px from the md breakpoint (768px). Sections pad 80px top and bottom on mobile and 112px on desktop; the hero is tighter on top (48px / 80px).

Desktop compositions are two-column splits: hero copy against the media (1fr to 1.1fr, 64px gap), featured release title and copy against the cover (equal columns), footer heading against the link grid. Lists use three columns (news, catalogue) or four (credentials, at lg 1024px; two at sm 640px). Everything collapses to one column on mobile, where secondary text links ("Full catalogue") become full-width outline pills.

The header is sticky, 64px tall on mobile and 80px on desktop, with the nav replaced by a "Menu" pill that opens a full-width stacked list.

## Elevation & Depth

Flat by default. Depth comes from tonal full-bleed bands (paper, night, lavender) and 1px rules. The single shadow in the system sits under the hero video as a soft drop that makes the media read as an object resting on paper.

### Shadow Vocabulary
- **Media Rest** (`box-shadow: 0 24px 48px -24px rgb(23 20 31 / 0.45)`): under a featured media object on paper. Not used on buttons, cards or text.

### Named Rules
**The Paper Not Cards Rule.** Content groups are separated by rules and whitespace, never wrapped in shadowed or filled cards.

## Shapes

Two shapes only: fully round pills for every button and the skip link, and nearly square media (3px radius) for video and cover art. Dividers are 1px lines: rule colour between rows and under bands, and full ink above each news column.

## Components

### Buttons
Quiet, rounded and confident; every action is a pill.
- **Shape:** fully round (9999px).
- **Primary:** ink fill, paper text, 12px by 24px, medium weight; optional 16px leading play icon (Tabler filled play, inline SVG). Hover shifts the fill to violet-ink.
- **Outline:** transparent, 1px ink border at 30%, ink text. Hover darkens the border to full ink.
- **Contact:** violet fill, white text, 10px by 20px at 0.95rem; hover to violet-ink. Reserved for the header contact action.
- **On night:** the lead action is a paper pill with night text (hover lavender); others are outlines in white at 35% (hover full white). On mobile the lead pill spans the full row.
- **Focus:** 2px violet outline with 3px offset on paper; night-link outline inside night bands.

### Text Links
- Underlined at 1px with a 0.3em offset; the underline thickens to 2px on hover. Violet-ink for navigation-style links ("All news", "Read the story"), ink for secondary ones ("Read more", streaming names), paper or night-link on night.

### Navigation
- Paper header at 95% opacity with backdrop blur and a rule underneath. Wordmark in Playfair at 1.5rem. Links in ink at 0.95rem, hover to violet-ink, 32px apart, ending in the Contact pill. On mobile, a "Menu" outline pill toggles a stacked list of Playfair 1.5rem items divided by rules, with a full-width Contact pill; Escape closes it.

### News Column
- A 1px ink rule on top, 20px above a Playfair title, a small soft-ink date, a soft-ink summary, and a foot row of text links pinned to the bottom.

### Catalogue Row
- A full-row link between rule-coloured hairlines: Playfair title (hover violet-ink) over a small soft-ink line of highlights joined by middle dots.

### Credential Item
- Definition list in a lavender band: violet-ink tracked-caps term over a body-size description in ink.

### Featured Media
- Square video poster or cover at 3px radius, max 520px in the hero with the Media Rest shadow, captioned in small soft-ink with the work title in italic Playfair and a violet-ink link aligned right.

## Do's and Don'ts

### Do:
- **Do** set every heading in Playfair Display at weight 400 and use italic for names of people and works.
- **Do** make every button a pill (9999px) and every image a 3px-radius rectangle.
- **Do** separate content with 1px rules (rule colour, or ink above a column) and 80px / 112px section padding.
- **Do** use full-bleed night bands for emphasis and lavender bands for proof, switching text to paper / night-soft / night-link on night.
- **Do** underline text links at 1px with a 0.3em offset, thickening to 2px on hover.

### Don't:
- **Don't** add entrance or scroll animations; the page is static.
- **Don't** introduce a second accent colour; violet and violet-ink are the only chromatic tokens on paper.
- **Don't** wrap content in filled or shadowed cards; the only shadow is Media Rest under featured media.
- **Don't** bold Playfair or use it for body copy.
- **Don't** place tracked-caps eyebrows or kickers above headings.
- **Don't** pull the legacy tokens (Montserrat, the `--primary` / `--accent` set, 0.5rem radius, card gradients, `.hr` gradient rule) into this world.
