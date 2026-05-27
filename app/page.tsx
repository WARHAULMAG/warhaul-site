"use client";

import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveLogo((current) =>
        current === placementLogos.length - 1 ? 0 : current + 1
      );
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStudioImage((current) =>
        current === studioImages.length - 1 ? 0 : current + 1
      );
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const imageCount = eventAlbums[activeAlbum].images.length;

    if (imageCount === 0) return;

    const timer = window.setInterval(() => {
      setActiveEventImage((current) =>
        current === imageCount - 1 ? 0 : current + 1
      );
    }, 3500);

    return () => window.clearInterval(timer);
  }, [activeAlbum]);

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
      <header className="sticky top-0 z-50 border-b border-white/15 bg-black/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-3 md:px-8">
          <a href="#" className="flex items-center">
            <img
              src="/images/Warhaul-BLK.png"
              alt="Warhaul"
              className="h-14 invert md:h-16"
            />
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map(([link, label]) => (
              <a
                key={label}
                href={link}
                target={link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-[0.24em] text-white/60 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="mailto:contactwarhaul@gmail.com"
            className="border border-white bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:bg-black hover:text-white md:px-5 md:py-3"
          >
            Book Now
          </a>
        </div>
      </header>

      <section className="mx-auto grid min-h-[88vh] max-w-[1600px] items-end gap-8 border-b border-white/15 px-4 pb-8 pt-16 md:grid-cols-[1.15fr_.85fr] md:px-8 md:pb-10 md:pt-20">
        <div>
          <div id="placements" className="mb-10 max-w-xl border-y border-white/15 py-4">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/45">
                Trusted By
              </p>

              <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">
                Auto-Rotating
              </p>
            </div>

            <div className="relative flex h-20 items-center justify-center bg-white px-10">
              <img
                src={placementLogos[activeLogo]}
                alt="Warhaul placement logo"
                className="max-h-12 w-full object-contain grayscale"
              />

              <button
                onClick={prevLogo}
                className="absolute left-0 top-0 flex h-full w-8 items-center justify-center bg-black text-white hover:bg-white hover:text-black"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                onClick={nextLogo}
                className="absolute right-0 top-0 flex h-full w-8 items-center justify-center bg-black text-white hover:bg-white hover:text-black"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-3 flex justify-center gap-1.5">
              {placementLogos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveLogo(index)}
                  className={`h-1.5 transition ${
                    activeLogo === index ? "w-6 bg-white" : "w-1.5 bg-white/25"
                  }`}
                  aria-label={`View logo ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <p className="mb-5 text-[11px] uppercase tracking-[0.38em] text-white/55">
            Toronto Multimedia Production House
          </p>

          <h1 className="text-[24vw] font-black uppercase leading-[0.78] tracking-[-0.12em] md:text-[13vw]">
            WARHAUL
          </h1>

          <p className="mt-7 max-w-3xl border-t border-white/15 pt-5 text-base uppercase leading-7 tracking-[0.08em] text-white/70 md:text-xl md:leading-8">
            Multimedia Production House • Studios • Events • Culture
          </p>

          <div className="mt-8">
            <a
              href="mailto:contactwarhaul@gmail.com"
              className="inline-flex items-center border border-white bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:bg-black hover:text-white"
            >
              Work With Us <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="border border-white/15 bg-white/[0.03] p-2">
          <img
            src="/images/DSCF8075.JPEG"
            alt="Warhaul"
            className="aspect-[4/5] object-cover grayscale"
          />
        </div>
      </section>

      <section className="border-b border-white/15 bg-white text-black">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 border-x border-black/10 text-center md:grid-cols-4">
          {[
            ["Multimedia", "Production House"],
            ["Photo + Video", "Creative Production"],
            ["Audio + DJ", "Studio Services"],
            ["Events", "Culture Platform"],
          ].map(([big, small]) => (
            <div
              key={big}
              className="border-b border-r border-black/10 px-4 py-6 md:border-b-0"
            >
              <p className="text-xl font-black uppercase tracking-[-0.05em] md:text-4xl">
                {big}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-black/55">
                {small}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-[1600px] border-b border-white/15 px-4 py-16 md:px-8 md:py-20"
      >
        <div className="grid gap-8 md:grid-cols-[0.35fr_1fr]">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
            About Warhaul
          </p>

          <div>
            <h2 className="max-w-6xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
              Multimedia Production House
            </h2>

            <div className="mt-10 grid border-y border-white/15 md:grid-cols-[1.2fr_.8fr]">
              <div className="border-b border-white/15 p-6 md:border-b-0 md:border-r md:p-8">
                <p className="text-lg leading-8 text-white/68 md:text-2xl md:leading-10">
                  Warhaul is a multimedia creative platform aimed to cultivate
                  the underground by providing Toronto with community geared
                  events, creative spaces and multimedia projects.
                </p>
              </div>

              <div className="bg-white p-6 text-black md:p-8">
                <p className="text-[11px] uppercase tracking-[0.28em] text-black/45">
                  What We Do
                </p>

                <div className="mt-8 divide-y divide-black/15 text-2xl font-black uppercase leading-none tracking-[-0.04em]">
                  <p className="py-4">Events</p>
                  <p className="py-4">Creative Spaces</p>
                  <p className="py-4">Audio & Visual Production Services</p>
                  <p className="py-4">Consulting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-b border-black/10 bg-white px-4 py-16 text-black md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-8 md:grid-cols-[0.35fr_1fr]">
            <p className="text-[11px] uppercase tracking-[0.32em] text-black/45">
              Services
            </p>

            <div>
              <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
                Creative Services
              </h2>

              <div className="mt-10 border-t border-black">
                {services.map((service, index) => (
                  <div key={service.title} className="border-b border-black">
                    <button
                      onClick={() =>
                        setOpenService(openService === index ? null : index)
                      }
                      className="grid w-full grid-cols-[0.15fr_1fr_auto] items-center gap-4 py-6 text-left transition hover:bg-black hover:px-4 hover:text-white md:py-8"
                    >
                      <span className="text-xs font-black uppercase tracking-[0.24em]">
                        {service.number}
                      </span>

                      <span className="text-3xl font-black uppercase leading-none tracking-[-0.06em] md:text-6xl">
                        {service.title}
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center border border-current">
                        {openService === index ? (
                          <Minus className="h-5 w-5" />
                        ) : (
                          <Plus className="h-5 w-5" />
                        )}
                      </span>
                    </button>

                    {openService === index && (
                      <div className="grid gap-3 border-t border-black/10 bg-black px-5 py-6 text-white md:grid-cols-3 md:px-8">
                        {service.details.map((detail) => (
                          <p
                            key={detail}
                            className="border-b border-white/10 py-3 text-sm uppercase tracking-[0.12em] text-white/70"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="mailto:contactwarhaul@gmail.com"
                  className="inline-flex border border-black bg-black px-8 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] border-b border-white/15 px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.35fr_1fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
              Studio Gallery
            </p>

            <div className="mt-8 flex gap-3">
              <button
                onClick={prevStudioImage}
                className="flex h-12 w-12 items-center justify-center border border-white/20 hover:bg-white hover:text-black"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={nextStudioImage}
                className="flex h-12 w-12 items-center justify-center border border-white/20 hover:bg-white hover:text-black"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
              Inside Warhaul
            </h2>

            <div className="relative mt-10 border border-white/15 bg-black">
              <img
                src={studioImages[activeStudioImage]}
                alt="Warhaul studio"
                className="h-[420px] w-full object-contain bg-black md:h-[620px]"
              />

              <button
                onClick={prevStudioImage}
                className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/70 text-white hover:bg-white hover:text-black"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={nextStudioImage}
                className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/70 text-white hover:bg-white hover:text-black"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="studio"
        className="mx-auto max-w-[1600px] border-b border-white/15 px-4 py-16 md:px-8 md:py-20"
      >
        <div className="grid gap-8 md:grid-cols-[0.35fr_1fr]">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
            Book Warhaul
          </p>

          <div>
            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
              Studio Rentals
            </h2>

            <div className="mt-10 grid border-y border-white/15 md:grid-cols-2">
              <div className="border-b border-white/15 p-6 md:border-b-0 md:border-r md:p-8">
                <Camera className="mb-8 h-8 w-8" />

                <h3 className="text-3xl font-black uppercase tracking-[-0.05em] md:text-5xl">
                  Photo Studio
                </h3>

                <p className="mt-5 text-lg leading-8 text-white/60">
                  Cyclorama wall, open layout, lighting gear, dressing area,
                  parking, and room to build the set.
                </p>

                <a
                  href="mailto:contactwarhaul@gmail.com"
                  className="mt-8 inline-flex border border-white bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-black hover:bg-black hover:text-white"
                >
                  Book Studio
                </a>
              </div>

              <div className="bg-white p-6 text-black md:p-8">
                <Mic2 className="mb-8 h-8 w-8" />

                <h3 className="text-3xl font-black uppercase tracking-[-0.05em] md:text-5xl">
                  Audio + DJ Studio
                </h3>

                <p className="mt-5 text-lg leading-8 text-black/60">
                  Recording, vocal production, mixing, mastering, DJ practice,
                  filmed DJ sets, and content creation.
                </p>

                <a
                  href="mailto:contactwarhaul@gmail.com"
                  className="mt-8 inline-flex border border-black bg-black px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-white hover:bg-white hover:text-black"
                >
                  Book Audio / DJ
                </a>
              </div>
            </div>

            <button
              onClick={() => setShowAmenities((current) => !current)}
              className="mt-8 flex w-full items-center justify-between border border-white/15 px-6 py-6 text-left transition hover:bg-white hover:text-black"
            >
              <span className="text-2xl font-black uppercase tracking-[-0.04em]">
                Amenities & Gear
              </span>

              <span className="text-xs uppercase tracking-[0.22em] opacity-60">
                {showAmenities ? "Hide" : "View"}
              </span>
            </button>

            {showAmenities && (
              <div className="mt-5 grid border border-white/15 md:grid-cols-3">
                {amenities.map((group) => (
                  <div
                    key={group.title}
                    className="border-b border-white/15 p-6 md:border-b-0 md:border-r md:p-8"
                  >
                    <h3 className="text-3xl font-black uppercase tracking-[-0.05em]">
                      {group.title}
                    </h3>

                    <div className="mt-8 divide-y divide-white/10 text-lg text-white/65">
                      {group.items.map((item) => (
                        <p key={item} className="py-3">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section
        id="events"
        className="border-b border-black/10 bg-white px-4 py-16 text-black md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-8 md:grid-cols-[0.35fr_1fr]">
            <p className="text-[11px] uppercase tracking-[0.32em] text-black/45">
              Events
            </p>

            <div>
              <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
                Event Albums
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
                Warhaul events are built to connect with the community, create
                intentional cultural moments, and push Toronto’s creative scene
                forward.
              </p>

              <div className="mt-10 flex gap-2 overflow-x-auto border-y border-black py-4">
                {eventAlbums.map((album, index) => (
                  <button
                    key={album.name}
                    onClick={() => selectAlbum(index)}
                    className={`min-w-fit border border-black px-5 py-3 text-xs font-black uppercase tracking-[0.14em] transition ${
                      activeAlbum === index
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {album.name}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                {currentAlbum.images.length > 0 ? (
                  <>
                    <div className="relative border border-black bg-black">
                      <img
                        src={currentAlbum.images[activeEventImage]}
                        alt={`${currentAlbum.name} event ${
                          activeEventImage + 1
                        }`}
                        className="h-[520px] w-full object-contain bg-black md:h-[650px]"
                      />

                      <button
                        onClick={prevEventImage}
                        className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-black bg-white text-black hover:bg-black hover:text-white"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>

                      <button
                        onClick={nextEventImage}
                        className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-black bg-white text-black hover:bg-black hover:text-white"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>

                    <p className="mt-4 text-center text-[11px] uppercase tracking-[0.22em] text-black/45">
                      {currentAlbum.name} — {activeEventImage + 1} /{" "}
                      {currentAlbum.images.length}
                    </p>
                  </>
                ) : (
                  <div className="border border-black bg-black p-8 text-white md:p-12">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                      {currentAlbum.name}
                    </p>

                    <h3 className="mt-4 text-4xl font-black uppercase tracking-[-0.06em] md:text-6xl">
                      Album Coming Soon
                    </h3>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                      Photos for this event album will be added here soon.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] border-b border-white/15 px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.35fr_1fr]">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
            Warhaul Radio
          </p>

          <div className="border-y border-white/15 py-8">
            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
              Warhaul Radio
            </h2>

            <a
              href="https://www.youtube.com/@WarhaulStudio"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex border border-white bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:bg-black hover:text-white"
            >
              Watch Episodes
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-8 md:grid-cols-[0.35fr_1fr]">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
              Contact
            </p>

            <div className="border-t border-white/15">
              <a
                href="mailto:contactwarhaul@gmail.com"
                className="grid gap-4 border-b border-white/15 py-6 transition hover:bg-white hover:px-4 hover:text-black md:grid-cols-[0.2fr_1fr]"
              >
                <p className="text-[11px] uppercase tracking-[0.24em] opacity-60">
                  Email
                </p>

                <h3 className="whitespace-nowrap text-[clamp(18px,4vw,58px)] font-black uppercase leading-none tracking-[-0.06em]">
                  CONTACTWARHAUL@GMAIL.COM
                </h3>
              </a>

              <a
                href="tel:6477948882"
                className="grid gap-4 border-b border-white/15 py-6 transition hover:bg-white hover:px-4 hover:text-black md:grid-cols-[0.2fr_1fr]"
              >
                <p className="text-[11px] uppercase tracking-[0.24em] opacity-60">
                  Phone
                </p>

                <h3 className="whitespace-nowrap text-[clamp(24px,5vw,58px)] font-black uppercase leading-none tracking-[-0.06em]">
                  647-794-8882
                </h3>
              </a>

              <a
                href="https://www.instagram.com/warhaulstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="grid gap-4 border-b border-white/15 py-6 transition hover:bg-white hover:px-4 hover:text-black md:grid-cols-[0.2fr_1fr]"
              >
                <p className="text-[11px] uppercase tracking-[0.24em] opacity-60">
                  Instagram
                </p>

                <h3 className="whitespace-nowrap text-[clamp(22px,5vw,58px)] font-black uppercase leading-none tracking-[-0.06em]">
                  @WARHAULSTUDIO
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}