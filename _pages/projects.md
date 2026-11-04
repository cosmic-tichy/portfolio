---
layout: page
title: Cosmic Itch
permalink: /
description: Live techno, custom instruments, and audio-visual experiments.
nav: false
---

<style>
  .ci-portfolio {
    background: #101115;
    color: #f1f1f1;
    padding: clamp(1.25rem, 4vw, 3rem);
    border-radius: 12px;
  }

  .ci-intro {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin-bottom: 2rem;
  }

  .ci-press-photo {
    display: block;
    width: 96px;
    height: auto;
    flex: 0 0 96px;
    border-radius: 6px;
  }

  .ci-intro p {
    margin: 0;
    color: #c2c4cb;
    font-size: 1.05rem;
    line-height: 1.7;
  }

  .ci-video-grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 0.6rem;
  }

  .ci-video {
    min-width: 0;
  }

  .ci-video-featured {
    grid-column: span 6;
  }

  .ci-video-secondary {
    grid-column: span 4;
  }

  .ci-video-standard {
    grid-column: span 2;
  }

  .ci-video h2 {
    margin: 0 0 0.65rem;
    color: #f1f1f1;
    font-size: 1.15rem;
    font-weight: 600;
  }

  .ci-video-frame {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 6px;
    background: #222;
  }

  .ci-video-frame iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .ci-footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem 1.5rem;
    margin-top: 2rem;
    padding-top: 1.25rem;
    border-top: 1px solid #33363d;
  }

  .ci-footer a {
    color: #f1f1f1;
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .ci-footer .ci-contact-button {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background: #f1f1f1;
    color: #101115;
    font-weight: 600;
    text-decoration: none;
  }

  @media (max-width: 576px) {
    .ci-video-grid {
      grid-template-columns: 1fr;
    }

    .ci-video-featured,
    .ci-video-secondary,
    .ci-video-standard {
      grid-column: 1;
    }
  }
</style>

<div class="ci-portfolio">
  <header class="ci-intro">
    <img
      class="ci-press-photo"
      src="{{ '/prof_pic2.png' | relative_url }}"
      alt="Press photo of Nick Mowery"
      loading="eager"
    >
    <p>
      Cosmic Itch creates dark, high-energy live techno using Elektron machines,
      custom Ableton instruments, Max for Live, and unconventional sample
      collections.
    </p>
  </header>

  <section class="ci-video-grid" aria-label="Cosmic Itch videos">
    <article class="ci-video ci-video-featured">
      <h2>Featured Performance</h2>
      <div class="ci-video-frame">
        <iframe
          src="https://www.youtube-nocookie.com/embed/7u5X4sU6G-4"
          title="Cosmic Itch featured video"
          loading="eager"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </article>

    <article class="ci-video ci-video-secondary">
      <div class="ci-video-frame">
        <iframe
          src="https://www.youtube-nocookie.com/embed/8wlKVlbAjvw"
          title="Cosmic Itch video 2"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </article>

    <article class="ci-video ci-video-standard">
      <div class="ci-video-frame">
        <iframe
          src="https://www.youtube-nocookie.com/embed/evsFMZ7wfB0"
          title="Cosmic Itch video 3"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </article>

    <article class="ci-video ci-video-standard">
      <div class="ci-video-frame">
        <iframe
          src="https://www.youtube-nocookie.com/embed/oJL-5jxMEn8"
          title="Cosmic Itch video 4"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </article>

  </section>

  <footer class="ci-footer" aria-label="Social links and contact">
    <a
      href="https://nickmowery.bandcamp.com/album/all-the-ships-have-gone"
      target="_blank"
      rel="noopener noreferrer"
      >Bandcamp</a
    >
    <a href="https://soundcloud.com/cosmictichy" target="_blank" rel="noopener noreferrer">SoundCloud</a>
    <a
      href="https://open.spotify.com/artist/yourartistid"
      target="_blank"
      rel="noopener noreferrer"
      >Spotify</a
    >
    <a href="https://www.instagram.com/nick_mowery_/" target="_blank" rel="noopener noreferrer">Instagram</a>
    <a class="ci-contact-button" href="mailto:nickmowerymusic@gmail.com">Contact Me</a>
  </footer>
</div>
