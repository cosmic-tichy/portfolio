---
layout: page
title: Cosmic Itch
permalink: /cosmicitch/
description: Live techno, custom instruments, and audio-visual experiments.
nav: true
nav_order: 3
---

<style>
.ci-portfolio {
  background: #101115;
  color: #f1f1f1;
  padding: clamp(1.25rem, 4vw, 3rem);
  border-radius: 12px;
}

.ci-portfolio h2 {
  color: #f1f1f1;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 1.2rem;
}

.ci-intro {
  max-width: 680px;
  margin-bottom: 3rem;
}

.ci-intro p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #a8aab1;
}

.ci-label {
  font-size: .7rem;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: #91939c;
  margin-bottom: .8rem;
}

.ci-section {
  margin-bottom: 3.5rem;
}

.ci-featured iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
  display: block;
  border-radius: 6px;
}

.ci-video-title {
  margin-top: .8rem;
  font-size: 1rem;
  font-weight: 600;
}

.ci-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, 260px), 1fr)
  );
  gap: 1.5rem;
}

.ci-card {
  display: block;
  text-decoration: none !important;
  color: #f1f1f1 !important;
}

.ci-thumb {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 6px;
  background: #222;
}

.ci-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .3s ease, opacity .3s ease;
}

.ci-card:hover img {
  transform: scale(1.035);
  opacity: .8;
}

.ci-play {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.65);
  color: white;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  font-size: 1.1rem;
}

.ci-card-title {
  font-size: .95rem;
  font-weight: 600;
  margin-top: .7rem;
}

.ci-card-subtitle {
  font-size: .8rem;
  color: #91939c;
  margin-top: .2rem;
}

.ci-more {
  border-top: 1px solid #33363d;
  padding-top: 1.25rem;
}

.ci-more summary {
  cursor: pointer;
  color: #c2c4cb;
  font-size: .95rem;
  padding: .5rem 0;
}

.ci-more .ci-grid {
  margin-top: 1.5rem;
}

.ci-footer {
  border-top: 1px solid #33363d;
  padding-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.ci-footer a {
  color: #f1f1f1 !important;
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>

<div class="ci-portfolio">

  <header class="ci-intro">
    <div class="ci-label">
      Live Electronic Performance
    </div>
    <p>
      Cosmic Itch creates dark, high-energy live techno
      using Elektron machines, custom Ableton instruments,
      Max for Live, and unconventional sample collections.
    </p>
  </header>

  <!-- FEATURED VIDEO -->
  <section class="ci-section ci-featured">
    <div class="ci-label">Featured Performance</div>

    <iframe
      src="https://www.youtube-nocookie.com/embed/WDB72F_d7NQ"
      title="Death Machine Live Performance"
      allow="accelerometer; autoplay; clipboard-write;
             encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>

    <div class="ci-video-title">
      Death Machine — Live Performance
    </div>

  </section>

  <!-- SELECTED PERFORMANCES -->
  <section class="ci-section">
    <h2>Selected Performances</h2>

    <div class="ci-grid">

      <a class="ci-card"
         href="https://www.youtube.com/watch?v=oJL-5jxMEn8"
         target="_blank" rel="noopener noreferrer">
        <div class="ci-thumb">
          <img loading="lazy"
               src="https://img.youtube.com/vi/oJL-5jxMEn8/hqdefault.jpg"
               alt="Ye Olde Rave performance">
          <span class="ci-play" aria-hidden="true">▶</span>
        </div>
        <div class="ci-card-title">Ye Olde Rave</div>
        <div class="ci-card-subtitle">Live performance</div>
      </a>

      <a class="ci-card"
         href="https://www.youtube.com/watch?v=LHg1E55Mty4"
         target="_blank" rel="noopener noreferrer">
        <div class="ci-thumb">
          <img loading="lazy"
               src="https://img.youtube.com/vi/LHg1E55Mty4/hqdefault.jpg"
               alt="Ye Olde Rave excerpt">
          <span class="ci-play" aria-hidden="true">▶</span>
        </div>
        <div class="ci-card-title">Ye Olde Rave — Excerpt</div>
        <div class="ci-card-subtitle">Live performance</div>
      </a>

    </div>

  </section>

  <!-- MORE PROJECTS -->
  <details class="ci-section ci-more">
    <summary>More projects & experiments</summary>

    <div class="ci-grid">

      <a class="ci-card"
         href="https://www.youtube.com/watch?v=DsCdGpUMhS0"
         target="_blank" rel="noopener noreferrer">
        <div class="ci-thumb">
          <img loading="lazy"
               src="https://img.youtube.com/vi/DsCdGpUMhS0/hqdefault.jpg"
               alt="Max MSP experiment">
          <span class="ci-play" aria-hidden="true">▶</span>
        </div>
        <div class="ci-card-title">Max/MSP — 01</div>
      </a>

      <a class="ci-card"
         href="https://www.youtube.com/watch?v=UNA45Q-5Y7o"
         target="_blank" rel="noopener noreferrer">
        <div class="ci-thumb">
          <img loading="lazy"
               src="https://img.youtube.com/vi/UNA45Q-5Y7o/hqdefault.jpg"
               alt="Max MSP experiment">
          <span class="ci-play" aria-hidden="true">▶</span>
        </div>
        <div class="ci-card-title">Max/MSP — 02</div>
      </a>

      <a class="ci-card"
         href="https://www.youtube.com/watch?v=niWL0ScXeq4"
         target="_blank" rel="noopener noreferrer">
        <div class="ci-thumb">
          <img loading="lazy"
               src="https://img.youtube.com/vi/niWL0ScXeq4/hqdefault.jpg"
               alt="Experimental project">
          <span class="ci-play" aria-hidden="true">▶</span>
        </div>
        <div class="ci-card-title">Other Project — 01</div>
      </a>

      <a class="ci-card"
         href="https://www.youtube.com/watch?v=B7ZDi5gw2b4"
         target="_blank" rel="noopener noreferrer">
        <div class="ci-thumb">
          <img loading="lazy"
               src="https://img.youtube.com/vi/B7ZDi5gw2b4/hqdefault.jpg"
               alt="Experimental project">
          <span class="ci-play" aria-hidden="true">▶</span>
        </div>
        <div class="ci-card-title">Other Project — 02</div>
      </a>

      <a class="ci-card"
         href="https://www.youtube.com/watch?v=rlGRmKGwnJw"
         target="_blank" rel="noopener noreferrer">
        <div class="ci-thumb">
          <img loading="lazy"
               src="https://img.youtube.com/vi/rlGRmKGwnJw/hqdefault.jpg"
               alt="Experimental project">
          <span class="ci-play" aria-hidden="true">▶</span>
        </div>
        <div class="ci-card-title">Other Project — 03</div>
      </a>

    </div>

  </details>

  <!-- CONTACT -->
  <footer class="ci-footer">
    <a href="{{ '/contact/' | relative_url }}">Contact</a>
    <a href="https://soundcloud.com/cosmictichy"
       target="_blank" rel="noopener noreferrer">SoundCloud</a>
  </footer>

</div>
