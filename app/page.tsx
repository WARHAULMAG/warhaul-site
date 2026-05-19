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
    <main className="min-h-screen bg-black text-white">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <img
            src="/images/Warhaul-BLK.png"
            alt="Warhaul"
            className="h-16 md:h-20 invert"
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

      {/* STATS */}
      <section className="border-y border-white/10 bg-white text-black">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-5 text-center md:grid-cols-4 md:px-8">
          {[
            ["24/7", "Open Everyday"],
            ["2220 Midland", "Scarborough"],
            ["Photo + Audio", "Studio Rentals"],
            ["Events + Radio", "Creative Platform"],
          ].map(([big, small]) => (
            <div key={big} className="py-5">
              <p className="text-2xl font-black uppercase tracking-[-0.04em] md:text-4xl">
                {big}
              </p>

              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-black/55">
                {small}
              </p>
            </div>
          ))}
        </div>
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
              "Late night sessions, overnight builds, and early morning shoots. Built for creatives that move differently.",
            ],
            [
              "Flexible Space",
              "Photo shoots, music videos, DJ sets, rehearsals, interviews, podcasts, workshops, and events.",
            ],
            [
              "Cost Comparable",
              "Premium amenities without inflated downtown pricing.",
            ],
            [
              "Creative Community",
              "Warhaul connects artists, DJs, photographers, videographers, brands, and creatives through events and collaborations.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 md:p-10"
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
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-black/45">
            Services
          </p>

          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
            Creative Services
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              [
                "Photography",
                "Portraits, campaigns, product shoots, editorials, studio shoots, and event coverage.",
              ],
              [
                "Videography",
                "Music videos, social content, recap videos, interviews, commercials, and branded visuals.",
              ],
              [
                "Audio Production",
                "Recording, vocal production, mixing, mastering, and engineer-supported sessions.",
              ],
              [
                "DJing",
                "Live DJ sets, radio-style performances, private events, and filmed mixes.",
              ],
              [
                "Events",
                "Event planning, launch parties, activations, listening sessions, and creative experiences.",
              ],
              [
                "Branding + Marketing Consulting",
                "Brand strategy, rollout planning, audience growth, social media, campaign direction, and promotional strategy.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-black/10 bg-black/[0.03] p-8"
              >
                <h3 className="text-3xl font-black uppercase">{title}</h3>

                <p className="mt-5 text-lg leading-8 text-black/60">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-black px-7 py-4 text-sm uppercase tracking-[0.16em] text-white transition hover:bg-black/80"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* INSIDE WARHAUL */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-10 flex items-end justify-between gap-5">
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
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-black"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={nextImage}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-black"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
          <img
            src={studioImages[activeImage]}
            alt="Warhaul studio"
            className="h-[520px] w-full object-cover"
          />

          <button
            onClick={prevImage}
            className="absolute left-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 backdrop-blur transition hover:bg-white hover:text-black"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 backdrop-blur transition hover:bg-white hover:text-black"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* STUDIO */}
      <section id="studio" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">
              Book Warhaul
            </p>

            <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
              Studio Rentals
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
            <Camera className="mb-8 h-8 w-8" />

            <h3 className="text-3xl font-black uppercase">
              Photo Studio
            </h3>

            <p className="mt-4 text-white/60">
              Cyclorama wall, open layout, lighting gear,
              dressing area, parking, and room to build the set.
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
              $20/hr minimum. Add an engineer for $60/hr.
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
              A home base for East End DJs to practice, film sets, and create content.
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
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
                <h3 className="text-3xl font-black uppercase tracking-[-0.04em] md:text-5xl">
                  {event}
                </h3>

                <span className="text-3xl transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="mt-8 flex gap-5 overflow-x-auto pb-6">
                {studioImages.map((src, index) => (
                  <img
                    key={`${event}-${src}-${index}`}
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

      {/* AUDIO PLACEMENTS */}
      <section className="bg-white px-5 py-24 text-black md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-black/45">
            Audio Placements
          </p>

          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
            Trusted By
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Selected audio placements, collaborations, and commercial work.
            Visual placements and additional credits coming soon.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-5">
            {[
              [
                "Concrete Boys",
                "/images/concrete boys.jpeg",
                "#",
              ],
              [
                "Nike Toronto",
                "/images/nike toronto.png",
                "https://www.instagram.com/p/CUNgT8fgPAo/",
              ],
              [
                "Nike ACG",
                "/images/nike acg.svg",
                "https://www.instagram.com/p/CTxIpz7gkHN/",
              ],
              [
                "MLSE",
                "/images/mlse.jpg",
                "https://www.instagram.com/tv/COjFjZJNML2/",
              ],
              [
                "Toronto Raptors",
                "/images/raptors.png",
                "https://www.instagram.com/tv/CWObkA9t3Wo/",
              ],
            ].map(([name, image, link]) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[2rem] border border-black/10 bg-black/[0.03] p-6 transition hover:bg-black hover:text-white"
              >
                <div className="flex h-36 items-center justify-center overflow-hidden rounded-2xl bg-black p-5">
                  <img
                    src={image}
                    alt={name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <h3 className="mt-6 text-xl font-black uppercase">
                  {name}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.18em] opacity-60">
                  Audio Placement
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* RADIO */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 md:p-12">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">
            Warhaul Radio
          </p>

          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
            WARHAUL RADIO
          </h2>

          <a
            href="https://www.youtube.com/@WarhaulStudio"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex rounded-full bg-white px-7 py-4 text-black transition hover:bg-white/85"
          >
            Watch Episodes
          </a>
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
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 transition hover:bg-white hover:text-black"
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
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 transition hover:bg-white hover:text-black"
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
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 transition hover:bg-white hover:text-black"
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