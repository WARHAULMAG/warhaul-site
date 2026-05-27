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
  const [activeEventCard, setActiveEventCard] = useState(2);
  const [activeAlbum, setActiveAlbum] = useState<number | null>(null);
  const [activeEventImage, setActiveEventImage] = useState(0);
  const [showAmenities, setShowAmenities] = useState(false);
  const [openService, setOpenService] = useState<number | null>(null);

  const currentEventCard = eventAlbums[activeEventCard];
  const currentAlbum = activeAlbum !== null ? eventAlbums[activeAlbum] : null;

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

  const previousEventCard = () => {
    setActiveEventCard((current) =>
      current === 0 ? eventAlbums.length - 1 : current - 1
    );
  };

  const nextEventCard = () => {
    setActiveEventCard((current) =>
      current === eventAlbums.length - 1 ? 0 : current + 1
    );
  };

  const openEventAlbum = (index: number) => {
    setActiveAlbum(index);
    setActiveEventImage(0);
  };

  const previousEventImage = () => {
    if (!currentAlbum || currentAlbum.images.length === 0) return;

    setActiveEventImage((current) =>
      current === 0 ? currentAlbum.images.length - 1 : current - 1
    );
  };

  const nextEventImage = () => {
    if (!currentAlbum || currentAlbum.images.length === 0) return;

    setActiveEventImage((current) =>
      current === currentAlbum.images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/15 bg-black/90 backdrop-blur-xl">
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

      <section
        id="placements"
        className="border-b border-black bg-white text-black"
      >
        <div className="mx-auto grid max-w-[1600px] items-center gap-4 px-4 py-5 md:grid-cols-[0.2fr_1fr_0.25fr] md:px-8">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.32em] text-black/45 md:text-left">
            Trusted By
          </p>

          <div className="flex h-20 w-full items-center justify-center md:h-24">
            <img
              src={placementLogos[activeLogo]}
              alt="Warhaul placement logo"
              className="max-h-14 w-full object-contain grayscale md:max-h-16"
            />
          </div>

          <p className="hidden text-right text-[10px] uppercase tracking-[0.24em] text-black/40 md:block">
            Selected Placements
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] border-b border-white/15 px-4 pb-12 pt-12 md:px-8 md:pb-16 md:pt-16">
        <div className="max-w-[1280px]">
          <p className="mb-5 text-[11px] uppercase tracking-[0.38em] text-white/55">
            Toronto Multimedia Production House
          </p>

          <h1 className="text-[24vw] font-black uppercase leading-[0.78] tracking-[-0.12em] md:text-[13vw]">
            WARHAUL
          </h1>

          <div className="mt-7 grid border-y border-white/15 md:grid-cols-[1fr_auto]">
            <p className="py-5 text-base uppercase leading-7 tracking-[0.08em] text-white/70 md:text-xl md:leading-8">
              Multimedia Production House • Studios • Events • Culture
            </p>

            <div className="border-t border-white/15 py-5 md:border-l md:border-t-0 md:px-8">
              <a
                href="mailto:contactwarhaul@gmail.com"
                className="inline-flex items-center border border-white bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:bg-black hover:text-white"
              >
                Work With Us <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
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
        <p className="mb-8 text-[11px] uppercase tracking-[0.32em] text-white/45">
          About Warhaul
        </p>

        <h2 className="max-w-6xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
          Multimedia Production House
        </h2>

        <div className="mt-10 grid border-y border-white/15 md:grid-cols-[1.2fr_.8fr]">
          <div className="border-b border-white/15 p-6 md:border-b-0 md:border-r md:p-8">
            <p className="text-lg leading-8 text-white/68 md:text-2xl md:leading-10">
              Warhaul is a multimedia creative platform aimed to cultivate the
              underground by providing Toronto with community geared events,
              creative spaces and multimedia projects.
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
      </section>

      <section
        id="services"
        className="border-b border-black/10 bg-white px-4 py-16 text-black md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-8 text-[11px] uppercase tracking-[0.32em] text-black/45">
            Services
          </p>

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
      </section>

      <section
        id="studio"
        className="mx-auto max-w-[1600px] border-b border-white/15 px-4 py-16 md:px-8 md:py-20"
      >
        <p className="mb-8 text-[11px] uppercase tracking-[0.32em] text-white/45">
          Book Warhaul
        </p>

        <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
          Studio Rentals
        </h2>

        <div className="mt-10 border-y border-white/15">
          <div className="grid md:grid-cols-2">
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

            <div className="bg-black">
              <img
                src={studioImages[activeStudioImage]}
                alt="Warhaul photo studio"
                className="h-[420px] w-full object-contain bg-black md:h-full"
              />
            </div>
          </div>

          <div className="grid border-t border-white/15 md:grid-cols-2">
            <div className="min-h-[360px] border-b border-white/15 bg-black md:border-b-0 md:border-r">
              <div className="flex h-full min-h-[360px] items-center justify-center p-8 text-center">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/25">
                  Audio / DJ visuals coming soon
                </p>
              </div>
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
      </section>

      <section
        id="events"
        className="border-b border-black/10 bg-white px-4 py-16 text-black md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-8 text-[11px] uppercase tracking-[0.32em] text-black/45">
            Events
          </p>

          <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
            Events
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Warhaul events are built to connect with the community, create
            intentional cultural moments, and push Toronto’s creative scene
            forward.
          </p>

          <div className="mt-10 grid grid-cols-[auto_1fr_auto] items-center gap-3 border-y border-black py-6">
            <button
              onClick={previousEventCard}
              className="flex h-12 w-12 items-center justify-center border border-black bg-white text-black transition hover:bg-black hover:text-white"
              aria-label="Previous event"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={() => openEventAlbum(activeEventCard)}
              className="group relative h-[420px] overflow-hidden border border-black bg-black text-left text-white md:h-[560px]"
            >
              {currentEventCard.images.length > 0 ? (
                <img
                  src={currentEventCard.images[0]}
                  alt={currentEventCard.name}
                  className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-55"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-black">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-white/30">
                    Images Coming Soon
                  </p>
                </div>
              )}

              <div className="absolute inset-0 flex items-center justify-center bg-black/25 p-6">
                <h3 className="text-center text-5xl font-black uppercase leading-[0.85] tracking-[-0.08em] md:text-8xl">
                  {currentEventCard.name}
                </h3>
              </div>

              <div className="absolute bottom-5 left-5 border border-white bg-white px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-black">
                Open Album
              </div>
            </button>

            <button
              onClick={nextEventCard}
              className="flex h-12 w-12 items-center justify-center border border-black bg-white text-black transition hover:bg-black hover:text-white"
              aria-label="Next event"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {currentAlbum && (
            <div className="mt-10">
              <div className="mb-5 flex items-center justify-between gap-5 border-b border-black pb-4">
                <h3 className="text-3xl font-black uppercase tracking-[-0.05em] md:text-5xl">
                  {currentAlbum.name}
                </h3>

                <p className="text-[10px] uppercase tracking-[0.24em] text-black/45">
                  Album
                </p>
              </div>

              {currentAlbum.images.length > 0 ? (
                <>
                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
                    <button
                      onClick={previousEventImage}
                      className="flex h-12 w-12 items-center justify-center border border-black bg-white text-black transition hover:bg-black hover:text-white"
                      aria-label="Previous album image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <div className="relative border-y border-black bg-black">
                      <img
                        src={currentAlbum.images[activeEventImage]}
                        alt={`${currentAlbum.name} event ${
                          activeEventImage + 1
                        }`}
                        className="h-[520px] w-full object-contain bg-black md:h-[650px]"
                      />
                    </div>

                    <button
                      onClick={nextEventImage}
                      className="flex h-12 w-12 items-center justify-center border border-black bg-white text-black transition hover:bg-black hover:text-white"
                      aria-label="Next album image"
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
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] border-b border-white/15 px-4 py-16 md:px-8 md:py-20">
        <p className="mb-8 text-[11px] uppercase tracking-[0.32em] text-white/45">
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
      </section>

      <section id="contact" className="border-t border-white/15 bg-white text-black">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="text-[11px] uppercase tracking-[0.32em] text-black/45">
            Contact
          </p>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
            <a
              href="mailto:contactwarhaul@gmail.com"
              className="whitespace-nowrap text-[clamp(11px,2.6vw,15px)] font-black uppercase tracking-[0.02em] hover:opacity-60"
            >
              CONTACTWARHAUL@GMAIL.COM
            </a>

            <a
              href="tel:6477948882"
              className="whitespace-nowrap text-[clamp(11px,2.6vw,15px)] font-black uppercase tracking-[0.02em] hover:opacity-60"
            >
              647-794-8882
            </a>

            <a
              href="https://www.instagram.com/warhaulstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-[clamp(11px,2.6vw,15px)] font-black uppercase tracking-[0.02em] hover:opacity-60"
            >
              @WARHAULSTUDIO
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}