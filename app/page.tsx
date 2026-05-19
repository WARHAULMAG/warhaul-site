"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Headphones,
  Mic2,
} from "lucide-react";

const nav = [
  ["#about", "about"],
  ["#services", "services"],
  ["#studio", "studio"],
  ["#equipment", "equipment"],
  ["#events", "events"],
  ["https://www.youtube.com/@WarhaulStudio", "youtube"],
  ["#contact", "contact"],
];

const studioImages = [
  "/images/DSCF1559-HDR.jpg",
  "/images/DSCF1563-HDR.jpg",
  "/images/DSCF1566-HDR.jpg",
  "/images/DSCF1569-HDR.jpg",
  "/images/DSCF1572-HDR.jpg",
  "/images/DSCF1575-HDR.jpg",
  "/images/DSCF1581-HDR.jpg",
  "/images/DSCF1584-HDR.jpg",
];

const eventSections = [
  "GRIM II FESTIVAL",
  "ARTSCAPE 001",
  "ARTSCAPE 002",
  "LOOK MA, I'M FAMOUS!",
];

export default function WarhaulHomepage() {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage((current) =>
      current === studioImages.length - 1 ? 0 : current + 1
    );
  };

  const prevImage = () => {
    setActiveImage((current) =>
      current === 0 ? studioImages.length - 1 : current - 1
    );
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <img
            src="/images/Warhaul-BLK.png"
            alt="Warhaul"
            className="h-14 md:h-20 invert"
          />

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map(([link, label]) => (
              <a
                key={label}
                href={link}
                target={link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.22em] text-white/60 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/85"
          >
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto grid min-h-[88vh] max-w-7xl items-end gap-10 px-5 pb-12 pt-20 md:grid-cols-[1.1fr_.9fr] md:px-8 md:pb-20">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/55">
            Scarborough / Toronto Creative Space
          </p>

          <h1 className="text-6xl font-black uppercase leading-[0.84] tracking-[-0.08em] md:text-8xl lg:text-[9.5rem]">
            WARHAUL
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
            PHOTO STUDIO • AUDIO STUDIO • EVENTS • CREATIVE SERVICES
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="flex items-center justify-center rounded-full bg-white px-7 py-4 text-black transition hover:bg-white/85"
            >
              Book Warhaul
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <img
          src="/images/DSCF8075.JPEG"
          alt="Warhaul"
          className="aspect-[4/5] rounded-[2rem] object-cover"
        />
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-14">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">
            About
          </p>

          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
            Built For Creatives
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {[
            [
              "24/7 Access",
              "Late night sessions, overnight builds, and early morning shoots.",
            ],
            [
              "Flexible Space",
              "Photo shoots, music videos, DJ sets, podcasts, workshops, and events.",
            ],
            [
              "Cost Comparable",
              "Premium amenities without inflated downtown pricing.",
            ],
            [
              "Creative Community",
              "Warhaul connects artists, DJs, photographers, videographers, and brands.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8"
            >
              <h3 className="text-3xl font-black uppercase">{title}</h3>

              <p className="mt-5 text-lg leading-8 text-white/60">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white px-5 py-24 text-black md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.32em] text-black/45">
                Services
              </p>

              <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
                Creative Services
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-black/55">
              From concept to execution — Warhaul supports creators,
              brands, artists, and events with production, strategy,
              and content.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "01",
                "Photography",
                "Portraits, campaigns, editorials, studio shoots, product content, and event coverage.",
              ],
              [
                "02",
                "Videography",
                "Music videos, commercials, social content, recaps, interviews, and branded visuals.",
              ],
              [
                "03",
                "Audio Production",
                "Recording, vocal production, mixing, mastering, and engineer-supported sessions.",
              ],
              [
                "04",
                "DJing",
                "Live DJ sets, filmed mixes, curated sound, private events, and radio-style performances.",
              ],
              [
                "05",
                "Events",
                "Event planning, launch parties, activations, listening sessions, and creative experiences.",
              ],
              [
                "06",
                "Branding + Marketing Consulting",
                "Brand strategy, rollout planning, audience growth, social media, campaign direction, and promotional strategy.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-black p-8 text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                <div className="absolute right-6 top-6 text-6xl font-black tracking-[-0.08em] text-white/10 transition group-hover:text-black/10">
                  {number}
                </div>

                <p className="mb-12 text-xs uppercase tracking-[0.28em] text-white/45 transition group-hover:text-black/45">
                  Warhaul Service
                </p>

                <h3 className="relative text-3xl font-black uppercase leading-none tracking-[-0.04em]">
                  {title}
                </h3>

                <p className="relative mt-6 text-lg leading-8 text-white/60 transition group-hover:text-black/60">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-black px-8 py-4 text-sm uppercase tracking-[0.18em] text-white transition hover:bg-black/80"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">
              Studio Gallery
            </p>

            <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
              Inside Warhaul
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prevImage}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={nextImage}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10">
          <img
            src={studioImages[activeImage]}
            alt="Warhaul studio"
            className="h-[520px] w-full object-cover"
          />
        </div>
      </section>

      {/* STUDIO */}
      <section id="studio" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-12">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">
            Book Warhaul
          </p>

          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
            Studio Rentals
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
            <Camera className="mb-8 h-8 w-8" />

            <h3 className="text-3xl font-black uppercase">
              Photo Studio
            </h3>

            <p className="mt-4 text-white/60">
              Cyclorama wall, lighting gear, dressing area,
              parking, and flexible open space.
            </p>

            <p className="mt-8 border-t border-white/10 pt-6 text-4xl font-black">
              $90 / 2hr
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-4 text-sm uppercase tracking-[0.16em] text-black transition hover:bg-white/85"
            >
              Book Studio
            </a>
          </div>

          <div className="rounded-[2rem] bg-white p-7 text-black">
            <Mic2 className="mb-8 h-8 w-8" />

            <h3 className="text-3xl font-black uppercase">
              Audio Studio
            </h3>

            <p className="mt-4 text-black/60">
              Recording, mixing, mastering, and engineer-supported sessions.
            </p>

            <p className="mt-8 border-t border-black/10 pt-6 text-4xl font-black">
              $20/hr
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-black px-6 py-4 text-sm uppercase tracking-[0.16em] text-white transition hover:bg-black/80"
            >
              Book Audio
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
            <Headphones className="mb-8 h-8 w-8" />

            <h3 className="text-3xl font-black uppercase">
              DJ Space
            </h3>

            <p className="mt-4 text-white/60">
              Practice, film DJ sets, and create content in a creative environment.
            </p>

            <p className="mt-8 border-t border-white/10 pt-6 text-4xl font-black">
              DJs
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-4 text-sm uppercase tracking-[0.16em] text-black transition hover:bg-white/85"
            >
              Book DJ Space
            </a>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">
          Events
        </p>

        <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
          Warhaul Events
        </h2>

        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {eventSections.map((event) => (
            <details key={event} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <h3 className="text-3xl font-black uppercase md:text-5xl">
                  {event}
                </h3>

                <span className="text-3xl transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="mt-8 flex gap-5 overflow-x-auto pb-6">
                {studioImages.map((src, index) => (
                  <img
                    key={`${event}-${index}`}
                    src={src}
                    alt={event}
                    className="h-[360px] min-w-[300px] rounded-[2rem] object-cover md:min-w-[480px]"
                  />
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CREDITS */}
      <section className="bg-white px-5 py-24 text-black md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-black/45">
            Credits + Placements
          </p>

          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
            Trusted By
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-black/60">
            Selected audio, visual, photography, cinematography,
            and styling placements across artists, brands,
            festivals, and commercial campaigns.
          </p>

          <div className="mt-16 grid gap-5 md:grid-cols-3 lg:grid-cols-6">
            {[
              [
                "Concrete Boys",
                "/images/concrete boys.jpeg",
                "Audio Placement",
                "#",
              ],
              [
                "Nike Toronto",
                "/images/nike toronto.png",
                "Audio Placement",
                "https://www.instagram.com/p/CUNgT8fgPAo/",
              ],
              [
                "Nike ACG",
                "/images/nike acg.svg",
                "Audio Placement",
                "https://www.instagram.com/p/CTxIpz7gkHN/",
              ],
              [
                "MLSE",
                "/images/mlse.jpg",
                "Audio Placement",
                "https://www.instagram.com/tv/COjFjZJNML2/",
              ],
              [
                "Toronto Raptors",
                "/images/raptors.png",
                "Audio Placement",
                "https://www.instagram.com/tv/CWObkA9t3Wo/",
              ],
              [
                "Warner Music Canada",
                "/images/warner-music-canada.webp",
                "Visual + Audio Placement",
                "https://open.spotify.com/album/2LkrL0QDmh272zbVFCvHNh?si=EgWHQIVeS66v-HP3ee_hog",
              ],
            ].map(([name, image, type, link]) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[2rem] border border-black/10 bg-black/[0.03] p-6 transition hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                <div className="flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-black p-5">
                  <img
                    src={image}
                    alt={name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <h3 className="mt-6 text-lg font-black uppercase leading-tight">
                  {name}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.18em] opacity-60">
                  {type}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/10 px-5 py-24 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">
            Contact
          </p>

          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
            Let’s Work
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <a
              href="mailto:contactwarhaul@gmail.com"
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 hover:bg-white hover:text-black"
            >
              <p className="text-xs uppercase tracking-[0.22em] opacity-60">
                Email
              </p>

              <h3 className="mt-5 text-2xl font-black">
                contactwarhaul@gmail.com
              </h3>
            </a>

            <a
              href="tel:6477948882"
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 hover:bg-white hover:text-black"
            >
              <p className="text-xs uppercase tracking-[0.22em] opacity-60">
                Phone
              </p>

              <h3 className="mt-5 text-2xl font-black">
                647-794-8882
              </h3>
            </a>

            <a
              href="https://www.instagram.com/warhaulstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 hover:bg-white hover:text-black"
            >
              <p className="text-xs uppercase tracking-[0.22em] opacity-60">
                Instagram
              </p>

              <h3 className="mt-5 text-2xl font-black">
                @WarhaulStudio
              </h3>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}