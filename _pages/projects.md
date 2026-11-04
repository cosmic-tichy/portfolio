---
layout: page
title: Cosmic Itch
permalink: /
description: Live techno, custom instruments, and audio visual experiments.
nav: false
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed:wght@500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

/* Cosmic Itch — clean occult editorial */
body:has(.ci-portfolio) {
  --global-bg-color: #0e0b09;
  --global-text-color: #e7dbc8;
  --global-theme-color: #d76c61;
  background: #0e0b09;
  color: #e7dbc8;
}
body:has(.ci-portfolio) .post-header { display: none; }

.ci-portfolio {
  --ci-bg: #0e0b09;
  --ci-paper: #e7dbc8;
  --ci-body: #c9bba8;
  --ci-muted: #a99b8a;
  --ci-red: #d76c61;
  --ci-line: #44342e;
  --ci-feature: #181210;

  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: min(1070px, calc(100vw - 2.5rem));
  margin: 0;
  padding: clamp(2.5rem, 5vw, 4.5rem) 0 5rem;
  box-sizing: border-box;
  background: var(--ci-bg);
  color: var(--ci-paper);
  font: 400 18px/1.7 'DM Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}
.ci-portfolio * { box-sizing: border-box; }
.ci-portfolio h1,
.ci-portfolio h2,
.ci-portfolio p,
.ci-portfolio figure { margin-top: 0; }
.ci-portfolio a { color: var(--ci-paper); }
.ci-portfolio a:focus-visible {
  outline: 2px solid var(--ci-red);
  outline-offset: 4px;
}

/* One repeating ornament, never a decorative frame. */
.ci-divider {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin: 1.6rem 0 2.5rem;
  color: var(--ci-red);
}
.ci-divider::before,
.ci-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--ci-line);
}
.ci-divider span {
  font: 400 1.15rem/1 Georgia, serif;
  flex: none;
}

/* Masthead & bio */
.ci-masthead { margin-bottom: clamp(4rem, 7vw, 6rem); }
.ci-overline {
  margin: 0 0 .8rem;
  color: var(--ci-muted);
  font-size: .72rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: .14em;
  text-transform: uppercase;
}
.ci-title {
  margin: 0 !important;
  color: var(--ci-paper) !important;
  font: 700 clamp(3.35rem, 8.2vw, 6.65rem)/.96 'Saira Semi Condensed', sans-serif;
  letter-spacing: -.025em;
  text-transform: uppercase;
}
.ci-title-accent { color: var(--ci-red); }
.ci-intro {
  display: flow-root;
  max-width: 910px;
}
.ci-portrait {
  float: left;
  display: block;
  width: clamp(142px, 20vw, 205px);
  aspect-ratio: 1/1;
  height: auto;
  object-fit: cover;
  object-position: center 76%;
  margin: .3rem 1.75rem 1rem 0;
  border: 6px solid #534037;
  filter: saturate(.78) contrast(1.04);
}
.ci-bio p {
  margin: 0 0 1rem;
  max-width: 67ch;
  color: #e0d5c6;
  font-size: 1.03rem;
  font-weight: 400;
  line-height: 1.73;
}
.ci-bio .ci-manifesto {
  margin-top: 1.5rem;
  color: var(--ci-paper);
  font: 500 clamp(1.08rem, 1.9vw, 1.28rem)/1.55 'DM Sans', sans-serif;
  letter-spacing: -.01em;
}

/* Sections */
.ci-section { margin-bottom: clamp(4.25rem, 7vw, 6rem); }
.ci-section-title {
  margin: 0 !important;
  color: var(--ci-paper) !important;
  font: 600 clamp(1.65rem, 3.2vw, 2.35rem)/1.18 'Saira Semi Condensed', sans-serif;
  letter-spacing: -.028em;
}
.ci-feature-year {
  color: var(--ci-body);
  font-size: .72em;
  white-space: nowrap;
}
.ci-video-frame {
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;
  overflow: hidden;
  background: #080606;
}
.ci-video-frame iframe {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

/* Featured: scale and whitespace make it the focus, not ornament. */
.ci-featured {
  padding: clamp(1rem, 3vw, 2.25rem);
  background: var(--ci-feature);
  border-top: 2px solid #965047;
}
.ci-featured-heading { margin-bottom: 1.35rem; }
.ci-featured .ci-video-frame { border: 1px solid #3c2d28; }
.ci-feature-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.15rem;
}
.ci-feature-footer a {
  color: var(--ci-red) !important;
  font-size: .9rem;
  text-decoration: none;
  border-bottom: 1px solid transparent;
}
.ci-feature-footer a:hover { border-bottom-color: var(--ci-red); }

/* Supporting performances get no titles or card decoration. */
.ci-video-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.35rem;
}
.ci-video-grid .ci-video-frame { border: 1px solid var(--ci-line); }
.ci-video-grid .ci-video-frame:hover { border-color: #856055; }

/* Posters: same visual rhythm, all artwork visible, no cropping. */
.ci-poster-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.15rem;
}
.ci-poster {
  display: block;
  min-width: 0;
  text-decoration: none !important;
}
.ci-poster img {
  display: block;
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: contain;
  background: #17110e;
  border: 1px solid var(--ci-line);
  transition: border-color .2s ease;
}
.ci-poster:hover img { border-color: #856055; }


/* Press photographs: unadorned editorial proofs with direct downloads. */
.ci-press-intro {
  max-width: 65ch;
  margin: 0 0 1.5rem;
  color: var(--ci-body);
  font-size: .94rem;
}
.ci-press-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.35rem;
}
.ci-press-item { min-width: 0; margin: 0; }
.ci-press-preview {
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 4 / 5;
  background: #17110e;
  border: 1px solid var(--ci-line);
  overflow: hidden;
}
.ci-press-preview:hover { border-color: #856055; }
.ci-press-preview img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.ci-press-item figcaption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: .4rem 1rem;
  padding-top: .65rem;
  color: var(--ci-muted);
  font-size: .8rem;
}
.ci-press-download {
  color: var(--ci-red) !important;
  text-decoration: none;
  border-bottom: 1px solid transparent;
}
.ci-press-download:hover { border-bottom-color: currentColor; }

/* Audio and booking: compact secondary information. */
.ci-audio-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.2rem 1.35rem;
  border: 1px solid var(--ci-line);
  background: var(--ci-feature);
  color: var(--ci-paper) !important;
  text-decoration: none !important;
}
.ci-audio-link:hover { border-color: #856055; }
.ci-audio-name { display: block; font-weight: 600; }
.ci-audio-platform {
  display: block;
  color: var(--ci-muted);
  font-size: .8rem;
  margin-top: .15rem;
}
.ci-audio-arrow { flex: none; color: var(--ci-red); font-size: 1.35rem; }

.ci-booking {
  margin-bottom: clamp(4.25rem, 7vw, 6rem);
  border-top: 1px solid var(--ci-line);
  border-bottom: 1px solid var(--ci-line);
}
.ci-booking summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 1.25rem .2rem;
  cursor: pointer;
  list-style: none;
  color: var(--ci-paper);
  font: 600 clamp(1.35rem, 2.5vw, 1.8rem)/1.2 'Saira Semi Condensed', sans-serif;
}
.ci-booking summary::-webkit-details-marker { display: none; }
.ci-booking summary::after {
  content: '+';
  color: var(--ci-red);
  font: 400 1.7rem/1 'DM Sans', sans-serif;
}
.ci-booking[open] summary::after { content: '−'; }
.ci-booking summary:focus-visible {
  outline: 2px solid var(--ci-red);
  outline-offset: 4px;
}
.ci-booking-content {
  max-width: 790px;
  padding: 0 .2rem 1.8rem;
  color: var(--ci-body);
}
.ci-booking-content p { margin: 0 0 1.3rem; }
.ci-booking-list {
  display: grid;
  gap: 0;
  margin: 0;
}
.ci-booking-list > div {
  display: grid;
  grid-template-columns: minmax(130px, 180px) minmax(0, 1fr);
  gap: .5rem 1rem;
  padding: .8rem 0;
  border-top: 1px solid var(--ci-line);
}
.ci-booking-list dt {
  color: var(--ci-muted);
  font-size: .82rem;
}
.ci-booking-list dd { margin: 0; }
.ci-booking-list a { color: var(--ci-red) !important; }

/* Contact */
.ci-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2.5rem;
  padding-top: 2.25rem;
  border-top: 1px solid var(--ci-line);
}
.ci-footer-label {
  margin-bottom: 1rem;
  color: var(--ci-muted);
  font-size: .75rem;
  letter-spacing: .12em;
  text-transform: uppercase;
}
.ci-socials { display: flex; flex-wrap: wrap; gap: .8rem 1.65rem; }
.ci-socials a { color: var(--ci-body) !important; text-decoration: none; }
.ci-socials a:hover { color: var(--ci-paper) !important; text-decoration: underline; text-underline-offset: 4px; }
.ci-contact { display: flex; flex-direction: column; align-items: flex-start; gap: .65rem; }
.ci-contact-button {
  display: inline-block;
  padding: .65rem 1.25rem;
  background: #ad5048;
  color: #fff8f0 !important;
  font-weight: 600;
  font-size: .92rem;
  text-decoration: none !important;
}
.ci-contact-button:hover { background: #c35c52; }
.ci-email { color: var(--ci-body); font-size: .9rem; user-select: text; }

@media (max-width: 920px) {
  .ci-video-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .ci-poster-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .ci-press-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
  .ci-portfolio { width: calc(100vw - 2rem); padding-top: 2.5rem; }
  .ci-title { font-size: clamp(3.7rem, 15vw, 5.8rem); }
  .ci-masthead { margin-bottom: 3.5rem; }
  .ci-portrait { width: 128px; margin-right: 1.1rem; margin-bottom: .6rem; border-width: 5px; }
  .ci-video-grid { grid-template-columns: 1fr; gap: 1.4rem; }
  .ci-press-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .ci-feature-year { display: block; margin-top: .1rem; }
  .ci-footer { flex-direction: column; }
}
@media (max-width: 360px) {
  .ci-portrait { width: 105px; }
  .ci-poster-grid { gap: .7rem; }
  .ci-press-grid { grid-template-columns: 1fr; }
  .ci-booking-list > div { grid-template-columns: 1fr; gap: .2rem; }
}
@media (prefers-reduced-motion: reduce) {
  .ci-poster img { transition: none; }
}
</style>

<main class="ci-portfolio">

  <header class="ci-masthead">
    <p class="ci-overline">Live techno - Washington DC</p>
    <h1 class="ci-title"><span>Cosmic</span> <span class="ci-title-accent">Itch</span></h1>
    <div class="ci-divider" aria-hidden="true"><span>ᛉ</span></div>

    <div class="ci-intro">
      <img class="ci-portrait"
           src="{{ '/prof_pic2.png' | relative_url }}"
           alt="Cosmic Itch artist portrait"
           loading="eager">

      <div class="ci-bio">
        <p>
          Cosmic Itch spends months developing a sonic world for each set,
          usually as an excuse to buy too many books and
          disappear into some arcane subject.
        </p>
        <p>
          Lately, he's gravitated toward a more punishing aesthetic, with
          distortion and formant filters conjuring scenes of primordial steel, vast
          emptiness and ancient curses. Along with his various drum machines and synths, he builds his own instruments in
          Max for Live, designed for manipulation on stage. 
          He's interested in how techno can alienate listeners while simultaneously bringing them together in dance. 
          He wants to tell stories and build worlds with sound.
        </p>
        <p class="ci-manifesto">
          Worlds that suggest horror but demand dance.
        </p>
      </div>
    </div>
  </header>

  <section class="ci-section ci-featured" aria-labelledby="ci-feature-title">
    <div class="ci-featured-heading">
      <h2 id="ci-feature-title" class="ci-section-title">
        Featured Performance <span class="ci-feature-year">(The Curse 2026)</span>
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
    <div class="ci-divider" aria-hidden="true"><span>ᛉ</span></div>
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

  <!-- LISTENING LINK -->
  <section class="ci-section ci-audio" aria-labelledby="ci-audio-title">
    <h2 id="ci-audio-title" class="ci-section-title">Listen</h2>
    <div class="ci-divider" aria-hidden="true"><span>ᛉ</span></div>
    <a class="ci-audio-link"
       href="https://on.soundcloud.com/Xz6CFB2pktYPDJ4P9x"
       target="_blank" rel="noopener noreferrer">
      <span>
        <span class="ci-audio-name">The Curse on Soundcloud</span>
        <span class="ci-audio-platform">Audio recording</span>
      </span>
      <span class="ci-audio-arrow" aria-hidden="true">↗</span>
    </a>
    <a class="ci-audio-link"
       href=" https://soundcloud.com/cosmictichy/ye-olde-rave-the-sin-den?si=fe4108919b99412cabb343d185029342&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
       target="_blank" rel="noopener noreferrer">
      <span>
        <span class="ci-audio-name">Ye Olde Rave on Soundcloud</span>
        <span class="ci-audio-platform">Audio recording</span>
      </span>
      <span class="ci-audio-arrow" aria-hidden="true">↗</span>
    </a>
<a class="ci-audio-link"
       href=" https://soundcloud.com/cosmictichy/the-ritual?si=d907e2342b0443b5ad616ece1f8aab5a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
       target="_blank" rel="noopener noreferrer">
      <span>
        <span class="ci-audio-name">The Ritual Demo on Soundcloud</span>
        <span class="ci-audio-platform">Audio recording</span>
      </span>
      <span class="ci-audio-arrow" aria-hidden="true">↗</span>
    </a>
    
  </section>

  <!-- PRESS PHOTOS: File paths point to images already in assets/img/. -->
  <section class="ci-section ci-press" aria-labelledby="ci-press-title">
    <h2 id="ci-press-title" class="ci-section-title">Press Photos</h2>
    <div class="ci-divider" aria-hidden="true"><span>ᛉ</span></div>
    <p class="ci-press-intro">Photos for event listings and promotional artwork. Select any image to view it at full size, or download the original file.</p>

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

  <section class="ci-section ci-posters" aria-labelledby="ci-posters-title">
    <h2 id="ci-posters-title" class="ci-section-title">Performance Posters</h2>
    <div class="ci-divider" aria-hidden="true"><span>ᛉ</span></div>
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
  </section>

  <!-- Native HTML disclosure. No JavaScript or additional page required. -->
  <details class="ci-booking">
    <summary>Booking Information</summary>
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
      <!-- Optional: Add your confirmed home city, available set lengths,
           and actual technical requirements here. -->
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
