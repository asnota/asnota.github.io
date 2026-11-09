# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Listeners: people who heard a release or performance and want more of Anna Shvets' music, news, and streaming links.
- Industry contacts: festival programmers, performers, conductors, and commissioners evaluating her work for collaboration.

## Product Purpose

The official website of Anna Shvets, classical composer and pianist. It exists for music visibility. A visit succeeds when the visitor listens to her music (Spotify, YouTube, Apple Music, Deezer) or reaches out about a contact or collaboration (email, LinkedIn).

## Positioning

Classical first. She is a composer and pianist with a full classical catalog: orchestral, choral a cappella, chamber instrumental, chamber vocal, organ, film, and arrangements. Her volumetric VR music (Omega, Shadows of the Rain, Galaxy of Suffering, Interlace) and her PhD in computational musicology are strands of that work, not the headline.

## Operating Context

- Static Astro 5 site with Tailwind 4 and MDX, deployed to GitHub Pages (asnota.github.io) via GitHub Actions.
- Content lives in the repo: blog posts as paired `src/posts/NN-intro.mdx` and `NN-post-NN.md` files, compositions in `src/data/compositions/compositions.json`, achievements in `src/data/achievements/achievements.json`, press in `src/pages/press.mdx`.
- Pages: home (latest news, compositions), blog, compositions with per-work pages, achievements, press.
- Light and dark color modes are supported.

## Capabilities and Constraints

- Embeds for YouTube and Spotify through astro-embed.
- Outbound links to Spotify, YouTube, Apple Music, Deezer, LinkedIn, and email.
- Press content includes Polish and Ukrainian sources. The site itself is in English.

## Brand Commitments

- Name: Anna Shvets. Site tagline in use: "Composer & Pianist".

## Evidence on Hand

- Composition catalog with descriptions: `src/data/compositions/compositions.json`.
- Achievements across education, concert halls, competitions, festivals, music and scientific publications, masterclasses: `src/data/achievements/achievements.json`.
- Press coverage (Musica magazine interview, AFXR articles, VRJAM award, Polish and Ukrainian press): `src/pages/press.mdx`, images in `src/images/press/`.
- Cover art: `src/images/omega_cover.jpg`, `src/images/shadows_cover.jpg`.
- No testimonials, quotes from collaborators, or professional portrait photography are in the repo. Do not fabricate them.

## Product Principles

1. The music comes first. Every page should make listening one step away.
2. Make collaboration easy. Contact paths are visible without hunting.
3. Lead with the classical identity. VR and research support it.
4. Let the real record speak. Catalog, achievements, and press are the proof, so present them accurately.
