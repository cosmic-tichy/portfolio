---
layout: page
title: Cosmic Itch
permalink: /
description: Live techno, custom instruments, and audio visual experiments.
nav: false
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Minimal white editorial theme; scoped to this page. */
body:has(.ci-portfolio) {
  --global-bg-color: #fff;
  --global-text-color: #111;
  --global-theme-color: #111;
  background: #fff !important;
  color: #111 !important;
  color-scheme: light;
}
body:has(.ci-portfolio) .post-header { display: none; }

.ci-portfolio {
  width: min(1040px, calc(100vw - 2rem));
  margin: 0 auto;
  padding: 2.5rem 0 6rem;
  color: #111;
  font: 400 15px/1.65 "Inter", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
.ci-portfolio *, .ci-portfolio *::before, .ci-portfolio *::after {
  box-sizing: border-box;
}
.ci-portfolio h1,
.ci-portfolio h2,
.ci-portfolio p,
.ci-portfolio figure { margin-top: 0; }
.ci-portfolio a { color: #111; }
.ci-portfolio a:focus-visible,
.ci-booking summary:focus-visible {
  outline: 2px solid #111;
  outline-offset: 3px;
}

/* Section rhythm */
.ci-section { margin-top: 5rem; }
.ci-section-head {
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr);
  gap: 1rem;
  align-items: baseline;
  margin-bottom: 1.1rem;
}
.ci-section-number {
  color: #9a9a9a;
  font-size: .7rem;
  font-weight: 400;
  letter-spacing: .1em;
}
.ci-section-title {
  margin: 0 !important;
  color: #777 !important;
  font-size: .84rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: .045em;
}

/* Masthead */
.ci-masthead { margin-bottom: 2.5rem; }
.ci-overline {
  margin: 0 0 .65rem;
  color: #777;
  font-size: .7rem;
  font-weight: 600;
  letter-spacing: .14em;
  text-transform: uppercase;
}

/* The short inscription now belongs to the title, not its own banner. */
.ci-title-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: clamp(1rem, 3vw, 2.5rem);
  margin: 0 0 1.1rem;
}
.ci-title {
  flex: 0 0 auto;
  margin: 0 !important;
  color: #111 !important;
  font-size: clamp(2.9rem, 6.6vw, 5.6rem);
  font-weight: 500;
  line-height: .98;
  letter-spacing: -.055em;
  text-transform: lowercase;
  white-space: nowrap;
}
.ci-title-sigil {
  display: block;
  flex: 0 1 300px;
  width: min(32%, 300px);
  max-width: 300px;
  height: auto;
  object-fit: contain;
  border: 0;
  background: transparent;
  box-shadow: none;
}

.ci-intro { display: flow-root; margin-top: 0; max-width: 960px; }
.ci-portrait {
  float: left;
  display: block;
  width: clamp(138px, 18vw, 190px);
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center 76%;
  margin: .1rem 1.2rem .65rem 0;
  border: 4px solid #b8b8b8;
}
.ci-bio p {
  max-width: 74ch;
  margin: 0 0 .7rem;
  color: #1c1c1c;
  font-size: .98rem;
  line-height: 1.62;
}
.ci-bio .ci-manifesto {
  margin-top: .8rem;
  color: #111;
  font-weight: 500;
}

/* The long inscription rests directly on the page, with no frame or rules. */
.ci-sigil-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto 0;
  padding: 0;
  border: 0;
  background: transparent;
  box-shadow: none;
}
.ci-sigil-banner img {
  display: block;
  width: min(100%, 850px);
  height: auto;
  border: 0;
  background: transparent;
  box-shadow: none;
}

/* Performance video */
.ci-video-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #f3f3f3;
  border: 1px solid #e2e2e2;
}
.ci-video-frame iframe {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}
/* Both performance sections sit within one light-grey field.
   Only the featured player takes the full width. */
.ci-performances-panel {
  margin-top: 2.25rem;
  padding: clamp(1.1rem, 3.4vw, 2.75rem);
  background: #eeeeee;
}
.ci-performances-panel .ci-section { margin-top: 0; }
.ci-performances-panel .ci-section-title { color: #666 !important; }
.ci-featured { margin-top: 0; }
.ci-performances-panel .ci-other {
  margin-top: 2.75rem;
  padding-top: 2.35rem;
  border-top: 1px solid #d5d5d5;
}
.ci-performances-panel .ci-video-frame { border: 0; }
.ci-performances-panel .ci-feature-footer a { font-size: .82rem; }
.ci-feature-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: .8rem;
}
.ci-feature-footer a,
.ci-press-download,
.ci-booking-list a {
  color: #111 !important;
  text-decoration: none;
  border-bottom: 1px solid #bcbcbc;
}
.ci-feature-footer a:hover,
.ci-press-download:hover,
.ci-booking-list a:hover { border-bottom-color: #111; }

.ci-video-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
}

/* Audio index: the same light-gray field, styled as a restrained list. */
.ci-audio {
  padding: clamp(1.25rem, 3.4vw, 2.75rem);
  background: #eeeeee;
}
.ci-audio .ci-section-title { color: #666 !important; }
.ci-audio-list { display: grid; border-top: 1px solid #d5d5d5; }
.ci-audio-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  padding: 1rem .2rem;
  border-bottom: 1px solid #d5d5d5;
  color: #111 !important;
  text-decoration: none !important;
}
.ci-audio-link:last-child { border-bottom: 0; }
.ci-audio-link:hover { background: #e5e5e5; }
.ci-audio-name { display: block; font-weight: 500; }
.ci-audio-platform {
  display: block;
  margin-top: .15rem;
  color: #777;
  font-size: .8rem;
}
.ci-audio-arrow { flex: none; color: #777; font-size: 1rem; }

/* Press materials share the quiet gray field of the videos.
   Photos are square editorial proofs; posters retain their portrait proportions. */
.ci-press {
  padding: clamp(1.25rem, 3.4vw, 2.75rem);
  background: #eeeeee;
}
.ci-press .ci-section-title { color: #666 !important; }
.ci-press-intro {
  max-width: 65ch;
  margin: 0 0 1.6rem 72px;
  color: #666;
  font-size: .92rem;
}
.ci-press-grid {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 1.4rem;
  width: 100%;
  margin: 0 auto;
}
.ci-press-item {
  flex: 0 1 248px;
  width: min(100%, 248px);
  min-width: 0;
  margin: 0;
}
.ci-press-preview {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #fff;
  border: 1px solid #d4d4d4;
}
.ci-press-preview img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.ci-press-item figcaption {
  display: flex;
  justify-content: center;
  padding-top: .65rem;
  color: #777;
  font-size: .8rem;
}

/* Posters: a separate, expandable gray archive with evenly spaced prints. */
.ci-poster-archive {
  margin-top: 3.75rem;
  padding: clamp(1.25rem, 3.4vw, 2.75rem);
  background: #eeeeee;
  border: 0;
}
.ci-poster-archive summary {
  display: grid;
  grid-template-columns: 56px 1fr auto;
  gap: 1rem;
  align-items: baseline;
  padding: 0;
  cursor: pointer;
  list-style: none;
}
.ci-poster-archive summary::-webkit-details-marker { display: none; }
.ci-poster-archive summary:focus-visible { outline: 2px solid #111; outline-offset: 3px; }
.ci-poster-archive .ci-section-title { color: #666 !important; }
.ci-poster-hint {
  color: #999;
  font-size: .75rem;
  letter-spacing: .02em;
}
.ci-poster-hint::after { content: ' +'; }
.ci-poster-archive[open] .ci-poster-hint::after { content: ' −'; }
.ci-poster-grid {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 1.25rem;
  width: 100%;
  margin: 1.6rem auto 0;
  padding: 0;
}
.ci-poster {
  display: block;
  flex: 0 1 196px;
  width: min(100%, 196px);
  min-width: 0;
  text-decoration: none !important;
}
.ci-poster img {
  display: block;
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: contain;
  background: #fff;
  border: 1px solid #d4d4d4;
}

/* Booking: a gray disclosure panel matching the other sections. */
.ci-booking {
  margin-top: 3.75rem;
  padding: clamp(1.25rem, 3.4vw, 2.75rem);
  background: #eeeeee;
  border: 0;
}
.ci-booking summary {
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr) auto;
  align-items: baseline;
  gap: 1rem;
  padding: 0;
  cursor: pointer;
  list-style: none;
}
.ci-booking summary::-webkit-details-marker { display: none; }
.ci-booking summary::after {
  content: '+';
  color: #777;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1;
}
.ci-booking[open] summary::after { content: '−'; }
.ci-booking summary:hover .ci-section-title { color: #222 !important; }
.ci-booking-content {
  max-width: 820px;
  padding: 1.6rem 0 0;
  color: #333;
}
.ci-booking-content p { margin: 0 0 1.2rem; }
.ci-booking-list { display: grid; margin: 0; }
.ci-booking-list > div {
  display: grid;
  grid-template-columns: minmax(150px, 190px) minmax(0, 1fr);
  gap: .5rem 1rem;
  padding: .75rem 0;
  border-top: 1px solid #d5d5d5;
}
.ci-booking-list dt { color: #666; font-size: .84rem; }
.ci-booking-list dd { margin: 0; }

/* Contact */
.ci-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 4rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e6e6e6;
}
.ci-footer-label {
  margin: 0 0 .8rem;
  color: #777;
  font-size: .72rem;
  font-weight: 400;
  letter-spacing: .12em;
  text-transform: uppercase;
}
.ci-socials { display: flex; flex-wrap: wrap; gap: .7rem 1.4rem; }
.ci-socials a { color: #444 !important; text-decoration: none; }
.ci-socials a:hover { color: #111 !important; text-decoration: underline; text-underline-offset: 3px; }
.ci-contact { display: flex; flex-direction: column; align-items: flex-start; gap: .45rem; }
.ci-contact-button {
  display: inline-block;
  padding: .55rem .9rem;
  border: 1px solid #d0d0d0;
  background: #fff;
  color: #111 !important;
  font-size: .92rem;
  font-weight: 500;
  text-decoration: none !important;
}
.ci-contact-button:hover { background: #f7f7f7; }
.ci-email { color: #666; font-size: .9rem; user-select: text; }

/* Responsive */
@media (max-width: 920px) {
  .ci-video-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 700px) {
  .ci-section-head { grid-template-columns: 1fr; gap: .35rem; }
  .ci-press-intro { margin-left: 0; }
  .ci-poster-archive summary,
  .ci-booking summary { grid-template-columns: 32px minmax(0, 1fr) auto; gap: .65rem; }
}
@media (max-width: 640px) {
  .ci-portfolio { width: calc(100vw - 1.5rem); padding-top: 2rem; }
  .ci-title-row { align-items: center; flex-direction: row; gap: .75rem; }
  .ci-title { font-size: clamp(2.1rem, 8vw, 3.4rem); white-space: nowrap; }
  .ci-title-sigil { flex: 0 1 125px; width: clamp(60px, 22vw, 125px); }
  .ci-portrait { float: none; width: min(170px, 48vw); margin: 0 0 1rem; }
  .ci-video-grid { grid-template-columns: 1fr; }
  .ci-performances-panel,
  .ci-audio,
  .ci-press,
  .ci-poster-archive,
  .ci-booking { padding: 1.2rem; }
  .ci-performances-panel .ci-other { margin-top: 2rem; padding-top: 1.75rem; }
  .ci-press-item { flex-basis: min(100%, 290px); width: min(100%, 290px); }
  .ci-poster { flex-basis: min(42%, 175px); }
  .ci-booking-list > div { grid-template-columns: 1fr; gap: .25rem; }
  .ci-footer { flex-direction: column; }
}
</style>

<main class="ci-portfolio">

  <header class="ci-masthead">
    <p class="ci-overline">Live techno — Washington DC</p>

    <!-- The short sigil and the all-lowercase name share the masthead. -->
    <div class="ci-title-row">
      <h1 class="ci-title">cosmic itch</h1>
      <img class="ci-title-sigil"
           src="{{ '/assets/img/sigil-banner-1.png' | relative_url }}"
           alt=""
           aria-hidden="true"
           loading="eager">
    </div>

    <div class="ci-intro">
      <img class="ci-portrait"
           src="{{ '/prof_pic2.png' | relative_url }}"
           alt="Cosmic Itch artist portrait"
           loading="eager">

      <div class="ci-bio">
       <p>
            Drawn to theatrical darkness, Cosmic Itch treats techno as arcane ritual. He asks you to abandon what you know and surrender to a world of forbidden sounds and symbols. Cosmic Itch seeks to liberate through utter alientation. To summon dance from worlds of horror.
            
          </p>
          <p>
            Cosmic Itch builds his sets on a mixture of drum machines, synths and custom built Max for Live instruments which he modulates live. He's a producer, guitarist, band member, and songwriter. The throughline of all his projects is drama and energy.
          </p>
        </div>
    </div>

    
  </header>

  <div class="ci-performances-panel" aria-label="Cosmic Itch live performances">
  <section class="ci-section ci-featured" aria-labelledby="ci-feature-title">
    <div class="ci-section-head">
      <div class="ci-section-number">01</div>
      <h2 id="ci-feature-title" class="ci-section-title">
        Featured Performance (The Curse 2026)
      </h2>
    </div>
    <div class="ci-video-frame">
      <iframe
        src="https://www.youtube-nocookie.com/embed/7u5X4sU6G-4"
        title="Cosmic Itch live at The Curse 2026"
        loading="eager"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </div>
    <div class="ci-feature-footer">
      <a href="https://www.youtube.com/watch?v=7u5X4sU6G-4"
         target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a>
    </div>
  </section>

  <section class="ci-section ci-other" aria-labelledby="ci-performances-title">
    <div class="ci-section-head">
      <div class="ci-section-number">02</div>
      <h2 id="ci-performances-title" class="ci-section-title">Other Performances</h2>
    </div>
    <div class="ci-video-grid">
      <div class="ci-video-frame">
        <iframe src="https://www.youtube-nocookie.com/embed/8wlKVlbAjvw"
          title="Cosmic Itch performance 2" loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div class="ci-video-frame">
        <iframe src="https://www.youtube-nocookie.com/embed/evsFMZ7wfB0"
          title="Cosmic Itch performance 3" loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div class="ci-video-frame">
        <iframe src="https://www.youtube-nocookie.com/embed/oJL-5jxMEn8"
          title="Cosmic Itch performance 4" loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  </section>
  </div>

  <section class="ci-section ci-audio" aria-labelledby="ci-audio-title">
    <div class="ci-section-head">
      <div class="ci-section-number">03</div>
      <h2 id="ci-audio-title" class="ci-section-title">Listen</h2>
    </div>
    <div class="ci-audio-list">
      <a class="ci-audio-link"
         href="https://on.soundcloud.com/Xz6CFB2pktYPDJ4P9x"
         target="_blank" rel="noopener noreferrer">
        <span>
          <span class="ci-audio-name">The Curse on SoundCloud</span>
          <span class="ci-audio-platform">Audio recording</span>
        </span>
        <span class="ci-audio-arrow" aria-hidden="true">↗</span>
      </a>
      <a class="ci-audio-link"
         href="https://soundcloud.com/cosmictichy/ye-olde-rave-the-sin-den?si=fe4108919b99412cabb343d185029342&amp;utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"
         target="_blank" rel="noopener noreferrer">
        <span>
          <span class="ci-audio-name">Ye Olde Rave on SoundCloud</span>
          <span class="ci-audio-platform">Audio recording</span>
        </span>
        <span class="ci-audio-arrow" aria-hidden="true">↗</span>
      </a>
      <a class="ci-audio-link"
         href="https://soundcloud.com/cosmictichy/the-ritual?si=d907e2342b0443b5ad616ece1f8aab5a&amp;utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"
         target="_blank" rel="noopener noreferrer">
        <span>
          <span class="ci-audio-name">The Ritual Demo on SoundCloud</span>
          <span class="ci-audio-platform">Audio recording</span>
        </span>
        <span class="ci-audio-arrow" aria-hidden="true">↗</span>
      </a>
    </div>
  </section>
<!-- Longer sigil: a borderless inscription between bio and footage. -->
    <div class="ci-sigil-banner" aria-hidden="true">
      <img src="{{ '/assets/img/sigil-banner-2.png' | relative_url }}"
           alt="" loading="lazy">
    </div>
  <section class="ci-section ci-press" aria-labelledby="ci-press-title">
    <div class="ci-section-head">
      <div class="ci-section-number">04</div>
      <h2 id="ci-press-title" class="ci-section-title">Press Photos</h2>
    </div>
    <p class="ci-press-intro">
      Photos for event listings and promotional artwork. Select any image to view it at full size, or download the original file.
    </p>
    <div class="ci-press-grid">
      <figure class="ci-press-item">
        <a class="ci-press-preview"
           href="{{ '/assets/img/000071040028.jpg' | relative_url }}"
           target="_blank" rel="noopener noreferrer"
           aria-label="View press photo 1 full size">
          <img src="{{ '/assets/img/000071040028.jpg' | relative_url }}"
               alt="Cosmic Itch press photo 1" loading="lazy">
        </a>
        <figcaption>
          <a class="ci-press-download" href="{{ '/assets/img/IMG_4386.jpg' | relative_url }}"
             download="Cosmic-Itch-Press-01.jpg">Download ↓</a>
        </figcaption>
      </figure>
      <figure class="ci-press-item">
        <a class="ci-press-preview"
           href="{{ '/assets/img/IMG_20251110_104503.jpg' | relative_url }}"
           target="_blank" rel="noopener noreferrer"
           aria-label="View press photo 2 full size">
          <img src="{{ '/assets/img/IMG_20251110_104503.jpg' | relative_url }}"
               alt="Cosmic Itch press photo 2" loading="lazy">
        </a>
        <figcaption>
          <a class="ci-press-download" href="{{ '/assets/img/IMG_20251110_104503.jpg' | relative_url }}"
             download="Cosmic-Itch-Press-02.jpg">Download ↓</a>
        </figcaption>
      </figure>
      <figure class="ci-press-item">
        <a class="ci-press-preview"
           href="{{ '/assets/img/pressPhoto1.jpg' | relative_url }}"
           target="_blank" rel="noopener noreferrer"
           aria-label="View press photo 3 full size">
          <img src="{{ '/assets/img/pressPhoto1.jpg' | relative_url }}"
               alt="Cosmic Itch press photo 3" loading="lazy">
        </a>
        <figcaption>
          <a class="ci-press-download" href="{{ '/assets/img/pressPhoto1.jpg' | relative_url }}"
             download="Cosmic-Itch-Press-03.jpg">Download ↓</a>
        </figcaption>
      </figure>
    </div>
  </section>

  <details class="ci-poster-archive">
    <summary aria-label="Show or hide performance posters">
      <span class="ci-section-number">05</span>
      <span class="ci-section-title">Performance Posters</span>
      <span class="ci-poster-hint">4 posters</span>
    </summary>
    <div class="ci-poster-grid">
      <a class="ci-poster" href="{{ '/assets/img/TheRitual_flyer.png' | relative_url }}"
         target="_blank" rel="noopener noreferrer" aria-label="View The Ritual poster">
        <img src="{{ '/assets/img/TheRitual_flyer.png' | relative_url }}"
             alt="The Ritual poster" loading="lazy">
      </a>
      <a class="ci-poster" href="{{ '/assets/img/SinDenHalloween-2.png' | relative_url }}"
         target="_blank" rel="noopener noreferrer" aria-label="View Death Machine poster">
        <img src="{{ '/assets/img/SinDenHalloween-2.png' | relative_url }}"
             alt="Death Machine poster" loading="lazy">
      </a>
      <a class="ci-poster" href="{{ '/assets/img/YeOldeRaveNoAddress.png' | relative_url }}"
         target="_blank" rel="noopener noreferrer" aria-label="View Ye Olde Rave poster">
        <img src="{{ '/assets/img/YeOldeRaveNoAddress.png' | relative_url }}"
             alt="Ye Olde Rave poster without address" loading="lazy">
      </a>
      <a class="ci-poster" href="{{ '/assets/img/TheCurse4.png' | relative_url }}"
         target="_blank" rel="noopener noreferrer" aria-label="View The Curse poster">
        <img src="{{ '/assets/img/TheCurse4.png' | relative_url }}"
             alt="The Curse poster" loading="lazy">
      </a>
    </div>
  </details>

  <details class="ci-booking">
    <summary>
      <span class="ci-section-number">06</span>
      <span class="ci-section-title">Booking Information</span>
    </summary>
    <div class="ci-booking-content">
      <p>Cosmic Itch performs original live techno using hardware instruments and custom Max for Live devices.</p>
      <dl class="ci-booking-list">
        <div>
          <dt>Performance format</dt>
          <dd>Live electronic music / hardware techno</dd>
        </div>
        <div>
          <dt>Set length &amp; availability</dt>
          <dd>Please inquire about event dates and performance duration.</dd>
        </div>
        <div>
          <dt>Technical requirements</dt>
          <dd>Stage setup and technical rider available on request.</dd>
        </div>
        <div>
          <dt>Inquiries</dt>
          <dd><a href="mailto:nickmowerymusic@gmail.com">nickmowerymusic@gmail.com</a></dd>
        </div>
      </dl>
    </div>
  </details>

  <footer class="ci-footer" aria-label="Social links and booking contact">
    <div>
      <p class="ci-footer-label">Elsewhere</p>
      <nav class="ci-socials" aria-label="Social links">
        <a href="https://nickmowery.bandcamp.com/album/all-the-ships-have-gone"
           target="_blank" rel="noopener noreferrer">Bandcamp</a>
        <a href="https://soundcloud.com/cosmictichy"
           target="_blank" rel="noopener noreferrer">SoundCloud</a>
        <a href="https://www.instagram.com/nick_mowery_/"
           target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
    </div>
    <div class="ci-contact">
      <a class="ci-contact-button" href="mailto:nickmowerymusic@gmail.com">Bookings &amp; Contact</a>
      <span class="ci-email">nickmowerymusic@gmail.com</span>
    </div>
  </footer>

</main>
