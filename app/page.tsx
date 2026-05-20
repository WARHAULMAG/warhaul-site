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

const eventImages = [
  "/events/DSCF3843.jpg",
  "/events/DSCF4086.jpg",
  "/events/DSCF3649.jpg",
  "/events/DSCF3836.jpg",
  "/events/IMG_2909.JPG",
  "/events/IMG_2908.JPG",
  "/events/DSCF3791.jpg",
  "/events/IMG_2913.JPG",
  "/events/DSCF3828.jpg",
  "/events/IMG_2911.JPG",
  "/events/DSCF3624.jpg",
  "/events/IMG_2914.JPG",
  "/events/DSCF3754.jpg",
  "/events/IMG_2915.JPG",
  "/events/DSCF3889.jpg",
  "/events/DSCF3645.jpg",
  "/events/DSCF3646.jpg",
  "/events/DSCF3694.jpg",
  "/events/DSCF3904.jpg",
  "/events/DSCF3859.jpg",
];

const placements = [
  ["Concrete Boys", "/images/concrete boys.jpeg", "Audio Placement", "#"],
  ["Nike Toronto", "/images/nike toronto.png", "Audio Placement", "https://www.instagram.com/p/CUNgT8fgPAo/"],
  ["Nike ACG", "/images/nike acg.svg", "Audio Placement", "https://www.instagram.com/p/CTxIpz7gkHN/"],
  ["MLSE", "/images/mlse.jpg", "Audio Placement", "https://www.instagram.com/tv/COjFjZJNML2/"],
  ["Toronto Raptors", "/images/raptors.png", "Audio Placement", "https://www.instagram.com/tv/CWObkA9t3Wo/"],
  ["Warner Music Canada", "/images/warner-new.png", "Visual + Sonic Placement", "https://open.spotify.com/album/2LkrL0QDmh272zbVFCvHNh?si=EgWHQIVeS66v-HP3ee_hog"],
  ["Universal Music Canada", "/images/universal-music.png", "Visual Placement", "#"],
  ["Empire", "/images/empire.png", "Visual Placement", "#"],
  ["Motown Records", "/images/motown.jpg", "Photography Placement", "#"],
  ["Def Jam Recordings", "/images/defjam.png", "Photography Placement", "#"],
  ["Rolling Stone", "/images/rollingstone.png", "Photography Placement", "#"],
  ["Nuit Blanche Toronto", "/images/nuitblanche.png", "Visual Placement", "#"],
  ["NXNE", "/images/nxne.png", "Photography Placement", "#"],
];

const creditSections = [
  {
    title: "Cinematography",
    items: [
      "Topman Meeko — Naturally (Official Music Video, 2025)",
      "Andye feat. Capella Grey — My Type (Official Music Video, Universal Music Canada, 2025)",
      "JRDN — Give Your All (Official Visualizer, 2025)",
      "Badaro — On My Own (Official Music Video, Empire Wana, 2025)",
      "Ramriddlz — Halle Baerry (Official Music Video, 2025)",
      "Sean Leon & Noor Khan — Post Script (Nuit Blanche, 2019)",
    ],
  },
  {
    title: "Fashion Styling",
    items: [
      "Malik — 360 (Official Music Video, 2025)",
      "Gminxr feat. Tegi Pannu & Zehr Vibe — Weekend (Official Music Video, Warner Music Canada, 2025)",
      "Gminxr feat. Tegi Pannu & Zehr Vibe — Lifestyle (Official Music Video, Warner Music Canada, 2025)",
      "Jon Vinyl feat. Jeremy Passion — Thinkin Bout You (Official Music Video, 2023)",
      "Govi — Some Days I Wait (Official Music Video, 2022)",
    ],
  },
  {
    title: "Photography",
    items: [
      "Esdeekid Rebel Tour (Press, Rolling Stone Canada, 2026)",
      "Fridayy — Without You (Press, Def Jam Records, 2024)",
      "The Hxliday (Motown Records, 2024)",
      "Zenesoul — DND (Cover Art, 2024)",
      "Jazz Cartier (NXNE Festival, 2018)",
    ],
  },
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
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <img src="/images/Warhaul-BLK.png" alt="Warhaul" className="h-16 md:h-20 invert" />

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

          <a href="mailto:contactwarhaul@gmail.com" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/85">
            Contact Us
          </a>
        </div>
      </header>

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

          <div className="mt-9">
            <a href="mailto:contactwarhaul@gmail.com" className="inline-flex items-center rounded-full bg-white px-7 py-4 text-black transition hover:bg-white/85">
              Contact Us <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <img src="/images/DSCF8075.JPEG" alt="Warhaul" className="aspect-[4/5] rounded-[2rem] object-cover" />
      </section>

      <section className="border-y border-white/10 bg-white text-black">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-5 text-center md:grid-cols-4 md:px-8">
          {[
            ["24/7", "Open Everyday"],
            ["2220 Midland", "Scarborough"],
            ["Photo + Audio", "Studio Rentals"],
            ["Events + Radio", "Creative Platform"],
          ].map(([big, small]) => (
            <div key={big} className="py-5">
              <p className="text-2xl font-black uppercase tracking-[-0.04em] md:text-4xl">{big}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-black/55">{small}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">About</p>
        <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
          Built For Creatives
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {[
            ["24/7 Access", "Late night sessions, overnight builds, and early morning shoots. Built for creatives that move differently."],
            ["Flexible Space", "Photo shoots, music videos, DJ sets, podcasts, workshops, and events."],
            ["Cost Comparable", "Premium amenities without inflated downtown pricing."],
            ["Creative Community", "Warhaul connects artists, DJs, photographers, videographers, brands, and creatives."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8">
              <h3 className="text-3xl font-black uppercase">{title}</h3>
              <p className="mt-5 text-lg leading-8 text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-white px-5 py-24 text-black md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.32em] text-black/45">Services</p>
              <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
                Creative Services
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-black/55">
              From concept to execution — Warhaul supports creators, brands, artists, and events with production, strategy, and content.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "Photography", "Portraits, campaigns, editorials, studio shoots, product content, and event coverage."],
              ["02", "Videography", "Music videos, commercials, social content, recaps, interviews, and branded visuals."],
              ["03", "Audio Production", "Recording, vocal production, mixing, mastering, and engineer-supported sessions."],
              ["04", "DJing", "Live DJ sets, filmed mixes, curated sound, private events, and radio-style performances."],
              ["05", "Events", "Event planning, launch parties, activations, listening sessions, and creative experiences."],
              ["06", "Branding + Marketing Consulting", "Brand strategy, rollout planning, audience growth, social media, campaign direction, and promotional strategy."],
            ].map(([number, title, text]) => (
              <div key={title} className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-black p-8 text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black">
                <div className="absolute right-6 top-6 text-6xl font-black tracking-[-0.08em] text-white/10 transition group-hover:text-black/10">
                  {number}
                </div>
                <p className="mb-12 text-xs uppercase tracking-[0.28em] text-white/45 transition group-hover:text-black/45">
                  Warhaul Service
                </p>
                <h3 className="relative text-3xl font-black uppercase leading-none tracking-[-0.04em]">{title}</h3>
                <p className="relative mt-6 text-lg leading-8 text-white/60 transition group-hover:text-black/60">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a href="mailto:contactwarhaul@gmail.com" className="inline-flex rounded-full bg-black px-8 py-4 text-sm uppercase tracking-[0.18em] text-white transition hover:bg-black/80">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">Studio Gallery</p>
            <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
              Inside Warhaul
            </h2>
          </div>

          <div className="flex gap-3">
            <button onClick={prevImage} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={nextImage} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
          <img src={studioImages[activeImage]} alt="Warhaul studio" className="h-[520px] w-full object-cover" />
          <button onClick={prevImage} className="absolute left-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 backdrop-blur hover:bg-white hover:text-black">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={nextImage} className="absolute right-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 backdrop-blur hover:bg-white hover:text-black">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </section>

      <section id="studio" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">Book Warhaul</p>
        <h2 className="mb-12 text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
          Studio Rentals
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
            <Camera className="mb-8 h-8 w-8" />
            <h3 className="text-3xl font-black uppercase">Photo Studio</h3>
            <p className="mt-4 text-white/60">Cyclorama wall, open layout, lighting gear, dressing area, parking, and room to build the set.</p>
            <a href="mailto:contactwarhaul@gmail.com" className="mt-8 inline-flex rounded-full bg-white px-6 py-4 text-sm uppercase tracking-[0.16em] text-black">Book Studio</a>
          </div>

          <div className="rounded-[2rem] bg-white p-7 text-black">
            <Mic2 className="mb-8 h-8 w-8" />
            <h3 className="text-3xl font-black uppercase">Audio Studio</h3>
            <p className="mt-4 text-black/60">Recording, vocal production, mixing, mastering, and engineer-supported sessions.</p>
            <a href="mailto:contactwarhaul@gmail.com" className="mt-8 inline-flex rounded-full bg-black px-6 py-4 text-sm uppercase tracking-[0.16em] text-white">Book Audio</a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
            <Headphones className="mb-8 h-8 w-8" />
            <h3 className="text-3xl font-black uppercase">DJ Space</h3>
            <p className="mt-4 text-white/60">A home base for East End DJs to practice, film sets, and create content.</p>
            <a href="mailto:contactwarhaul@gmail.com" className="mt-8 inline-flex rounded-full bg-white px-6 py-4 text-sm uppercase tracking-[0.16em] text-black">Book DJ Space</a>
          </div>
        </div>
      </section>

      <section id="equipment" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">Equipment</p>
        <h2 className="mb-14 text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
          Amenities & Gear
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Amenities", ["Wifi", "Dressing Room", "Chairs", "Tables", "Parking Spaces", "Washroom"]],
            ["Photo Equipment", ["2x Godox SL60W", "2x 33inch Octagon Softbox", "1x Lantern Softbox", "1x Snoot Kit with Gels", "Various Light Stands"]],
            ["Audio Equipment", ["2x KRKs", "Apollo Twin Interface", "TLM-103 Mic"]],
          ].map(([title, items]) => (
            <div key={title as string} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8">
              <h3 className="text-3xl font-black uppercase">{title as string}</h3>
              <div className="mt-8 grid gap-5 text-lg text-white/65">
                {(items as string[]).map((item) => <p key={item}>{item}</p>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="events" className="bg-white px-5 py-24 text-black md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-black/45">Events</p>
          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
            Warhaul Events
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            From Artscape to Grim, Warhaul events bring together music, fashion, DJs, cars, art, and Toronto’s creative community.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-[2rem] bg-black p-8 text-white">
              <h3 className="text-3xl font-black uppercase">Artscape</h3>
              <p className="mt-4 text-white/60">Creative showcases, DJ sets, fashion, vendors, and community moments.</p>
            </div>

            <div className="rounded-[2rem] bg-black p-8 text-white">
              <h3 className="text-3xl font-black uppercase">Grim</h3>
              <p className="mt-4 text-white/60">High-energy nightlife, curated sound, and underground culture.</p>
            </div>

            <div className="rounded-[2rem] bg-black p-8 text-white">
              <h3 className="text-3xl font-black uppercase">Look Ma, I'm Famous</h3>
              <p className="mt-4 text-white/60">Artist moments, community experiences, and creative activations.</p>
            </div>
          </div>

          <div className="mt-14 grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-4">
            {eventImages.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Warhaul event ${index + 1}`}
                className={`h-full w-full rounded-[2rem] object-cover ${
                  index === 0 || index === 7 || index === 12 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 text-black md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-black/45">Placements & Credits</p>
          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">Trusted By</h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Selected visual, sonic, photography, styling, cinematography, and audio placements.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-4">
            {placements.map(([name, image, type, link]) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[2rem] border border-black/10 bg-black/[0.03] p-6 transition hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                <div className="flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-black p-5">
                  <img src={image} alt={name} className="max-h-full max-w-full object-contain" />
                </div>
                <h3 className="mt-6 text-lg font-black uppercase leading-tight">{name}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] opacity-60">{type}</p>
              </a>
            ))}
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {creditSections.map((section) => (
              <div key={section.title} className="rounded-[2rem] border border-black/10 bg-black p-8 text-white">
                <h3 className="text-3xl font-black uppercase text-white">{section.title}</h3>
                <div className="mt-8 space-y-4 text-base leading-7 text-white/70">
                  {section.items.map((item) => <p key={item}>{item}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 md:p-12">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">Warhaul Radio</p>
          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">WARHAUL RADIO</h2>
          <a href="https://www.youtube.com/@WarhaulStudio" target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex rounded-full bg-white px-7 py-4 text-black transition hover:bg-white/85">
            Watch Episodes
          </a>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">Contact</p>
          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">Let’s Work</h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <a href="mailto:contactwarhaul@gmail.com" className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 hover:bg-white hover:text-black">
              <p className="text-xs uppercase tracking-[0.22em] opacity-60">Email</p>
              <h3 className="mt-5 text-2xl font-black">contactwarhaul@gmail.com</h3>
            </a>

            <a href="tel:6477948882" className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 hover:bg-white hover:text-black">
              <p className="text-xs uppercase tracking-[0.22em] opacity-60">Phone</p>
              <h3 className="mt-5 text-2xl font-black">647-794-8882</h3>
            </a>

            <a href="https://www.instagram.com/warhaulstudio" target="_blank" rel="noopener noreferrer" className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 hover:bg-white hover:text-black">
              <p className="text-xs uppercase tracking-[0.22em] opacity-60">Instagram</p>
              <h3 className="mt-5 text-2xl font-black">@WarhaulStudio</h3>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}