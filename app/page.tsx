"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Mic2,
  Plus,
  Minus,
} from "lucide-react";

const nav = [
  ["#about", "about"],
  ["#placements", "placements"],
  ["#services", "services"],
  ["#studio", "studio"],
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

const artscape2Images = [
  "/events/event-1.jpg",
  "/events/event-2.jpg",
  "/events/event-3.jpg",
  "/events/event-4.jpg",
  "/events/event-5.jpg",
  "/events/event-6.jpg",
  "/events/event-7.jpg",
  "/events/event-8.jpg",
  "/events/event-9.jpg",
  "/events/event-10.jpg",
  "/events/event-11.jpg",
  "/events/event-12.jpg",
  "/events/event-13.jpg",
  "/events/event-14.jpg",
  "/events/event-17.jpg",
  "/events/event-18.jpg",
  "/events/event-19.jpg",
  "/events/event-20.jpg",
  "/events/event-21.jpg",
  "/events/event-22.jpg",
];

const eventAlbums = [
  { name: "Grim 2", images: [] as string[] },
  { name: "Artscape 1", images: [] as string[] },
  { name: "Artscape 2", images: artscape2Images },
  { name: "Redeployment", images: [] as string[] },
  { name: "Look Ma! I'm Famous", images: [] as string[] },
  { name: "Rendezvous", images: [] as string[] },
  { name: "Maison 2", images: [] as string[] },
];

const placementLogos = [
  "/images/concrete boys.jpeg",
  "/images/nike toronto.png",
  "/images/nike acg.svg",
  "/images/mlse.jpg",
  "/images/warner-new.png",
  "/images/universal-music.png",
  "/images/empire.png",
  "/images/motown.jpg",
  "/images/defjam.png",
  "/images/rollingstone.png",
  "/images/nuitblanche.png",
  "/images/nxne.png",
];

const services = [
  {
    number: "01",
    title: "Photo + Video Production",
    details: [
      "Photography",
      "Videography",
      "Music Videos",
      "Campaign Visuals",
      "Event Recaps",
      "Product Content",
      "Portraits",
      "Social Clips",
      "Filmed DJ Sets",
    ],
  },
  {
    number: "02",
    title: "Audio Production + DJ Services",
    details: [
      "Recording",
      "Vocal Production",
      "Mixing",
      "Mastering",
      "DJ Set Recording",
      "Curated Mixes",
      "Warhaul Radio-Style Sets",
      "Sound Support",
    ],
  },
  {
    number: "03",
    title: "Events + Culture",
    details: [
      "Event Planning",
      "Launch Parties",
      "Activations",
      "Listening Sessions",
      "Creative Showcases",
      "DJ Bookings",
      "Artist Moments",
      "Community Experiences",
    ],
  },
  {
    number: "04",
    title: "Branding + Marketing Consulting",
    details: [
      "Brand Strategy",
      "Rollout Planning",
      "Campaign Direction",
      "Social Media Direction",
      "Audience Growth",
      "Content Planning",
      "Promotional Strategy",
    ],
  },
];

const amenities = [
  {
    title: "Amenities",
    items: ["Wifi", "Dressing Room", "Chairs", "Tables", "Parking", "Washroom"],
  },
  {
    title: "Photo Equipment",
    items: [
      "2x Godox SL60W",
      "2x 33inch Octagon Softbox",
      "1x Lantern Softbox",
      "1x Snoot Kit with Gels",
      "Various Light Stands",
    ],
  },
  {
    title: "Audio Equipment",
    items: ["2x KRKs", "Apollo Twin Interface", "TLM-103 Mic"],
  },
];

export default function WarhaulHomepage() {
  const [activeStudioImage, setActiveStudioImage] = useState(0);
  const [activeLogo, setActiveLogo] = useState(0);
  const [activeAlbum, setActiveAlbum] = useState(2);
  const [activeEventImage, setActiveEventImage] = useState(0);
  const [showAmenities, setShowAmenities] = useState(false);
  const [openService, setOpenService] = useState<number | null>(null);

  const currentAlbum = eventAlbums[activeAlbum];

  const nextStudioImage = () => {
    setActiveStudioImage((current) =>
      current === studioImages.length - 1 ? 0 : current + 1
    );
  };

  const prevStudioImage = () => {
    setActiveStudioImage((current) =>
      current === 0 ? studioImages.length - 1 : current - 1
    );
  };

  const nextLogo = () => {
    setActiveLogo((current) =>
      current === placementLogos.length - 1 ? 0 : current + 1
    );
  };

  const prevLogo = () => {
    setActiveLogo((current) =>
      current === 0 ? placementLogos.length - 1 : current - 1
    );
  };

  const selectAlbum = (index: number) => {
    setActiveAlbum(index);
    setActiveEventImage(0);
  };

  const nextEventImage = () => {
    if (currentAlbum.images.length === 0) return;

    setActiveEventImage((current) =>
      current === currentAlbum.images.length - 1 ? 0 : current + 1
    );
  };

  const prevEventImage = () => {
    if (currentAlbum.images.length === 0) return;

    setActiveEventImage((current) =>
      current === 0 ? currentAlbum.images.length - 1 : current - 1
    );
  };

  return (
    <main className="min-h-screen bg-black text-white">
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
            href="mailto:contactwarhaul@gmail.com"
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/85"
          >
            Book Now
          </a>
        </div>
      </header>

      <section className="mx-auto grid min-h-[88vh] max-w-7xl items-end gap-10 px-5 pb-12 pt-20 md:grid-cols-[1.1fr_.9fr] md:px-8 md:pb-20">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/55">
            Toronto Multimedia Production House
          </p>

          <h1 className="text-6xl font-black uppercase leading-[0.84] tracking-[-0.08em] md:text-8xl lg:text-[9.5rem]">
            WARHAUL
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
            MULTIMEDIA PRODUCTION HOUSE • STUDIOS • EVENTS • CULTURE
          </p>

          <div className="mt-9">
            <a
              href="mailto:contactwarhaul@gmail.com"
              className="inline-flex items-center rounded-full bg-white px-7 py-4 text-black transition hover:bg-white/85"
            >
              Work With Us <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <img
          src="/images/DSCF8075.JPEG"
          alt="Warhaul"
          className="aspect-[4/5] rounded-[2rem] object-cover"
        />
      </section>

      <section className="border-y border-white/10 bg-white text-black">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-5 text-center md:grid-cols-4 md:px-8">
          {[
            ["Multimedia", "Production House"],
            ["Photo + Video", "Creative Production"],
            ["Audio + DJ", "Studio Services"],
            ["Events", "Culture Platform"],
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

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">
          About Warhaul
        </p>

        <h2 className="max-w-5xl text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
          Multimedia Production House
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 md:p-10">
            <p className="text-lg leading-8 text-white/68 md:text-xl">
              Warhaul is a multimedia creative platform aimed to cultivate the
              underground by providing Toronto with community geared events,
              creative spaces and multimedia projects.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 text-black md:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-black/45">
              What We Do
            </p>

            <div className="mt-8 space-y-5 text-2xl font-black uppercase leading-none tracking-[-0.04em]">
              <p>Events</p>
              <p>Creative Spaces</p>
              <p>Audio & Visual Production Services</p>
              <p>Consulting</p>
            </div>
          </div>
        </div>
      </section>

      <section id="placements" className="bg-white px-5 py-20 text-black md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-black/45">
            Company Placements
          </p>

          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
            Trusted By
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Selected brands, platforms, labels, and cultural institutions connected
            through Warhaul’s visual, sonic, and creative production work.
          </p>

          <div className="mt-12">
            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-black p-8">
              <div className="flex min-h-[220px] items-center justify-center rounded-[1.5rem] bg-white p-10">
                <img
                  src={placementLogos[activeLogo]}
                  alt="Warhaul placement logo"
                  className="max-h-32 w-full object-contain"
                />
              </div>

              <button
                onClick={prevLogo}
                className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white hover:bg-white hover:text-black"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={nextLogo}
                className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white hover:bg-white hover:text-black"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              {placementLogos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveLogo(index)}
                  className={`h-2 rounded-full transition ${
                    activeLogo === index ? "w-8 bg-black" : "w-2 bg-black/25"
                  }`}
                  aria-label={`View logo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-5 py-20 text-black md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-black/45">
              Services
            </p>

            <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
              Creative Services
            </h2>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative min-w-[82%] overflow-hidden rounded-[2rem] border border-black/10 bg-black p-7 text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black md:min-w-0 md:p-8"
              >
                <div className="absolute right-6 top-6 text-6xl font-black tracking-[-0.08em] text-white/10 transition group-hover:text-black/10">
                  {service.number}
                </div>

                <p className="mb-12 text-xs uppercase tracking-[0.28em] text-white/45 transition group-hover:text-black/45">
                  Warhaul Service
                </p>

                <div className="relative flex items-start justify-between gap-5">
                  <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.04em]">
                    {service.title}
                  </h3>

                  <button
                    onClick={() =>
                      setOpenService(openService === index ? null : index)
                    }
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition group-hover:border-black/20 group-hover:text-black"
                    aria-label={`Open ${service.title} details`}
                  >
                    {openService === index ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </button>
                </div>

                {openService === index && (
                  <div className="relative mt-7 grid gap-3 text-base leading-7 text-white/65 transition group-hover:text-black/60">
                    {service.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="mailto:contactwarhaul@gmail.com"
              className="inline-flex rounded-full bg-black px-8 py-4 text-sm uppercase tracking-[0.18em] text-white transition hover:bg-black/80"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
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
              onClick={prevStudioImage}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={nextStudioImage}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black">
          <img
            src={studioImages[activeStudioImage]}
            alt="Warhaul studio"
            className="h-[420px] w-full object-contain bg-black md:h-[520px]"
          />

          <button
            onClick={prevStudioImage}
            className="absolute left-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 backdrop-blur hover:bg-white hover:text-black"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextStudioImage}
            className="absolute right-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 backdrop-blur hover:bg-white hover:text-black"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </section>

      <section id="studio" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">
          Book Warhaul
        </p>

        <h2 className="mb-12 text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
          Studio Rentals
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
            <Camera className="mb-8 h-8 w-8" />

            <h3 className="text-3xl font-black uppercase">Photo Studio</h3>

            <p className="mt-4 text-white/60">
              Cyclorama wall, open layout, lighting gear, dressing area, parking,
              and room to build the set.
            </p>

            <a
              href="mailto:contactwarhaul@gmail.com"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-4 text-sm uppercase tracking-[0.16em] text-black"
            >
              Book Studio
            </a>
          </div>

          <div className="rounded-[2rem] bg-white p-7 text-black">
            <Mic2 className="mb-8 h-8 w-8" />

            <h3 className="text-3xl font-black uppercase">Audio + DJ Studio</h3>

            <p className="mt-4 text-black/60">
              Recording, vocal production, mixing, mastering, DJ practice, filmed
              DJ sets, and content creation.
            </p>

            <a
              href="mailto:contactwarhaul@gmail.com"
              className="mt-8 inline-flex rounded-full bg-black px-6 py-4 text-sm uppercase tracking-[0.16em] text-white"
            >
              Book Audio / DJ
            </a>
          </div>
        </div>

        <button
          onClick={() => setShowAmenities((current) => !current)}
          className="mt-8 flex w-full items-center justify-between rounded-[2rem] border border-white/10 bg-white/[0.06] px-7 py-6 text-left transition hover:bg-white hover:text-black"
        >
          <span className="text-2xl font-black uppercase tracking-[-0.04em]">
            Amenities & Gear
          </span>

          <span className="text-sm uppercase tracking-[0.2em] opacity-60">
            {showAmenities ? "Hide" : "View"}
          </span>
        </button>

        {showAmenities && (
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {amenities.map((group) => (
              <div
                key={group.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8"
              >
                <h3 className="text-3xl font-black uppercase">{group.title}</h3>

                <div className="mt-8 grid gap-5 text-lg text-white/65">
                  {group.items.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section id="events" className="bg-white px-5 py-20 text-black md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-black/45">
            Events
          </p>

          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
            Event Albums
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Warhaul events are built to connect with the community, create
            intentional cultural moments, and push Toronto’s creative scene forward.
          </p>

          <div className="mt-10 flex gap-3 overflow-x-auto pb-4">
            {eventAlbums.map((album, index) => (
              <button
                key={album.name}
                onClick={() => selectAlbum(index)}
                className={`min-w-fit rounded-full px-5 py-3 text-sm font-black uppercase tracking-[0.14em] transition ${
                  activeAlbum === index
                    ? "bg-black text-white"
                    : "border border-black/10 bg-black/5 text-black hover:bg-black hover:text-white"
                }`}
              >
                {album.name}
              </button>
            ))}
          </div>

          <div className="mt-8">
            {currentAlbum.images.length > 0 ? (
              <>
                <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-black">
                  <img
                    src={currentAlbum.images[activeEventImage]}
                    alt={`${currentAlbum.name} event ${activeEventImage + 1}`}
                    className="h-[520px] w-full object-contain bg-black md:h-[620px]"
                  />

                  <button
                    onClick={prevEventImage}
                    className="absolute left-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-black backdrop-blur hover:bg-black hover:text-white"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <button
                    onClick={nextEventImage}
                    className="absolute right-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-black backdrop-blur hover:bg-black hover:text-white"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                <p className="mt-4 text-center text-xs uppercase tracking-[0.22em] text-black/45">
                  {currentAlbum.name} — {activeEventImage + 1} /{" "}
                  {currentAlbum.images.length}
                </p>
              </>
            ) : (
              <div className="rounded-[2rem] border border-black/10 bg-black p-10 text-white">
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                  {currentAlbum.name}
                </p>

                <h3 className="mt-4 text-4xl font-black uppercase tracking-[-0.05em]">
                  Album Coming Soon
                </h3>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                  Photos for this event album will be added here soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
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

      <section id="contact" className="border-t border-white/10 px-5 py-20 md:px-8 md:py-24">
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

              <h3 className="mt-5 text-2xl font-black uppercase">
                CONTACTWARHAUL@GMAIL.COM
              </h3>
            </a>

            <a
              href="tel:6477948882"
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 hover:bg-white hover:text-black"
            >
              <p className="text-xs uppercase tracking-[0.22em] opacity-60">
                Phone
              </p>

              <h3 className="mt-5 text-2xl font-black">647-794-8882</h3>
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

              <h3 className="mt-5 text-2xl font-black uppercase">
                @WARHAULSTUDIO
              </h3>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}