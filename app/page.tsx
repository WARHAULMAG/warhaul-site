"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Camera, Mic2, Plus, Minus } from "lucide-react";

const RED = "#EF3340";

const nav = [
  ["#services", "services"],
  ["#studio", "studio"],
  ["#events", "events"],
  ["#about", "about"],
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
  { name: "Grim 2", slug: "grim-2", images: [] as string[] },
  { name: "Artscape 1", slug: "artscape-1", images: [] as string[] },
  { name: "Artscape 2", slug: "artscape-2", images: artscape2Images },
  { name: "Redeployment", slug: "redeployment", images: [] as string[] },
  {
    name: "Look Ma! I'm Famous",
    slug: "look-ma-im-famous",
    images: [] as string[],
  },
  { name: "Rendezvous", slug: "rendezvous", images: [] as string[] },
  { name: "Maison 2", slug: "maison-2", images: [] as string[] },
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
  const [activeEventCard, setActiveEventCard] = useState(2);
  const [showAmenities, setShowAmenities] = useState(false);
  const [openService, setOpenService] = useState<number | null>(null);
  const [showHeroAbout, setShowHeroAbout] = useState(false);

  const currentEventCard = eventAlbums[activeEventCard];
  const marqueeLogos = [...placementLogos, ...placementLogos];

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

  const openEventAlbumPage = (album: (typeof eventAlbums)[number]) => {
    const newPage = window.open("", "_blank");

    if (!newPage) return;

    const imageGrid =
      album.images.length > 0
        ? album.images
            .map(
              (image, index) => `
                <div class="image-card">
                  <img src="${image}" alt="${album.name} ${index + 1}" />
                </div>
              `
            )
            .join("")
        : `
          <div class="empty-state">
            <p>PHOTOS COMING SOON</p>
            <h2>${album.name}</h2>
          </div>
        `;

    newPage.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${album.name} | Warhaul Events</title>
          <style>
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }

            body {
              background: ${RED};
              color: #fff;
              font-family: Arial, Helvetica, sans-serif;
            }

            header {
              position: sticky;
              top: 0;
              z-index: 20;
              display: flex;
              align-items: center;
              justify-content: space-between;
              border-bottom: 1px solid rgba(255, 255, 255, 0.35);
              background: ${RED};
              padding: 18px 28px;
            }

            .brand {
              font-size: 14px;
              font-weight: 900;
              letter-spacing: 0.28em;
              text-transform: uppercase;
            }

            .back {
              border: 1px solid #fff;
              background: #fff;
              color: ${RED};
              padding: 12px 16px;
              font-size: 11px;
              font-weight: 900;
              letter-spacing: 0.18em;
              text-decoration: none;
              text-transform: uppercase;
            }

            .back:hover {
              background: ${RED};
              color: #fff;
            }

            main {
              max-width: 1600px;
              margin: 0 auto;
              padding: 48px 24px 72px;
            }

            .label {
              margin-bottom: 24px;
              color: rgba(255, 255, 255, 0.72);
              font-size: 11px;
              letter-spacing: 0.32em;
              text-transform: uppercase;
            }

            h1 {
              max-width: 1200px;
              font-size: clamp(64px, 14vw, 190px);
              font-weight: 900;
              line-height: 0.78;
              letter-spacing: -0.12em;
              text-transform: uppercase;
            }

            .intro {
              margin-top: 28px;
              border-top: 1px solid rgba(255, 255, 255, 0.35);
              border-bottom: 1px solid rgba(255, 255, 255, 0.35);
              padding: 22px 0;
              color: rgba(255, 255, 255, 0.78);
              font-size: 14px;
              letter-spacing: 0.12em;
              line-height: 1.8;
              text-transform: uppercase;
            }

            .grid {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 18px;
              margin-top: 40px;
            }

            .image-card {
              border: 1px solid rgba(255, 255, 255, 0.35);
              background: ${RED};
            }

            .image-card img {
              display: block;
              width: 100%;
              height: 620px;
              object-fit: contain;
              background: ${RED};
            }

            .empty-state {
              margin-top: 40px;
              border: 1px solid rgba(255, 255, 255, 0.35);
              padding: 60px 28px;
            }

            .empty-state p {
              color: rgba(255, 255, 255, 0.72);
              font-size: 11px;
              letter-spacing: 0.32em;
              text-transform: uppercase;
            }

            .empty-state h2 {
              margin-top: 20px;
              font-size: clamp(42px, 9vw, 120px);
              font-weight: 900;
              line-height: 0.85;
              letter-spacing: -0.08em;
              text-transform: uppercase;
            }

            @media (max-width: 800px) {
              header {
                padding: 14px 18px;
              }

              main {
                padding: 36px 16px 56px;
              }

              .grid {
                grid-template-columns: 1fr;
              }

              .image-card img {
                height: 460px;
              }
            }
          </style>
        </head>

        <body>
          <header>
            <div class="brand">Warhaul</div>
            <a class="back" href="javascript:window.close()">Close</a>
          </header>

          <main>
            <p class="label">Warhaul Events</p>
            <h1>${album.name}</h1>
            <p class="intro">
              Event album — selected photos from ${album.name}.
            </p>

            <section class="grid">
              ${imageGrid}
            </section>
          </main>
        </body>
      </html>
    `);

    newPage.document.close();
  };

  return (
    <main className="min-h-screen bg-[#EF3340] text-white">
      <style jsx global>{`
        @keyframes logo-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .logo-marquee {
          animation: logo-marquee 26s linear infinite;
        }

        .logo-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-white/30 bg-[#EF3340]/95 backdrop-blur-xl">
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
                className="text-[11px] uppercase tracking-[0.24em] text-white/70 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="mailto:contactwarhaul@gmail.com"
            className="border border-white bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#EF3340] transition hover:bg-[#EF3340] hover:text-white md:px-5 md:py-3"
          >
            Book Now
          </a>
        </div>
      </header>

      <section
        id="placements"
        className="overflow-hidden border-b border-white/30 bg-[#EF3340] text-white"
      >
        <div className="mx-auto flex max-w-[1600px] items-center gap-8 px-4 py-5 md:px-8">
          <p className="shrink-0 text-[10px] font-black uppercase tracking-[0.32em] text-white/70">
            Trusted By
          </p>

          <div className="relative flex-1 overflow-hidden">
            <div className="logo-marquee flex w-max items-center gap-16">
              {marqueeLogos.map((logo, index) => (
                <div
                  key={`${logo}-${index}`}
                  className="flex h-20 w-44 shrink-0 items-center justify-center"
                >
                  <img
                    src={logo}
                    alt="Warhaul placement logo"
                    className="max-h-14 w-full object-contain grayscale contrast-125 mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
          </div>

          <p className="hidden shrink-0 text-right text-[10px] uppercase tracking-[0.24em] text-white/65 md:block">
            Selected Placements
          </p>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-[1600px] border-b border-white/30 px-4 pb-12 pt-12 md:px-8 md:pb-16 md:pt-16"
      >
        <div>
          <p className="mb-5 text-[11px] uppercase tracking-[0.38em] text-white/70">
            Toronto Multimedia Production House
          </p>

          <div className="grid items-start gap-8 md:grid-cols-[1fr_420px] lg:grid-cols-[1fr_500px]">
            <div>
              <h1 className="text-[24vw] font-black uppercase leading-[0.78] tracking-[-0.12em] md:text-[13vw]">
                WARHAUL
              </h1>
            </div>

            <div className="border-y border-white/30 md:mt-2">
              <button
                onClick={() => setShowHeroAbout((current) => !current)}
                className="flex w-full items-center justify-between gap-5 py-5 text-left transition hover:px-4 hover:bg-white hover:text-[#EF3340]"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.32em]">
                  About Warhaul
                </span>

                <span className="flex h-10 w-10 items-center justify-center border border-current">
                  {showHeroAbout ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </span>
              </button>

              {showHeroAbout && (
                <div className="border-t border-white/30 py-6">
                  <p className="text-lg leading-8 text-white/80">
                    Warhaul is a multimedia creative platform aimed to cultivate
                    the underground by providing Toronto with community geared
                    events, creative spaces and multimedia projects.
                  </p>

                  <div className="mt-8 divide-y divide-white/25 text-xl font-black uppercase leading-none tracking-[-0.04em]">
                    <p className="py-4">Events</p>
                    <p className="py-4">Creative Spaces</p>
                    <p className="py-4">
                      Audio & Visual Production Services
                    </p>
                    <p className="py-4">Consulting</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-7 grid border-y border-white/30 md:grid-cols-[1fr_auto]">
            <p className="py-5 text-base uppercase leading-7 tracking-[0.08em] text-white/80 md:text-xl md:leading-8">
              Multimedia Production House • Studios • Events • Culture
            </p>

            <div className="border-t border-white/30 py-5 md:border-l md:border-t-0 md:px-8">
              <a
                href="mailto:contactwarhaul@gmail.com"
                className="inline-flex items-center border border-white bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-[#EF3340] transition hover:bg-[#EF3340] hover:text-white"
              >
                Work With Us <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
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
                  className="grid w-full grid-cols-[0.15fr_1fr_auto] items-center gap-4 py-6 text-left transition hover:bg-[#EF3340] hover:px-4 hover:text-white md:py-8"
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
                  <div className="grid gap-3 border-t border-black/10 bg-[#EF3340] px-5 py-6 text-white md:grid-cols-3 md:px-8">
                    {service.details.map((detail) => (
                      <p
                        key={detail}
                        className="border-b border-white/20 py-3 text-sm uppercase tracking-[0.12em] text-white/80"
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
              className="inline-flex border border-[#EF3340] bg-[#EF3340] px-8 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#EF3340]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section
        id="studio"
        className="mx-auto max-w-[1600px] border-b border-white/30 bg-[#EF3340] px-4 py-16 text-white md:px-8 md:py-20"
      >
        <p className="mb-8 text-[11px] uppercase tracking-[0.32em] text-white/70">
          Book Warhaul
        </p>

        <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
          Studio Rentals
        </h2>

        <div className="mt-10 border-y border-white/30">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-white/30 p-6 md:border-b-0 md:border-r md:p-8">
              <Camera className="mb-8 h-8 w-8" />

              <h3 className="text-3xl font-black uppercase tracking-[-0.05em] md:text-5xl">
                Photo Studio
              </h3>

              <p className="mt-5 text-lg leading-8 text-white/75">
                Cyclorama wall, open layout, lighting gear, dressing area,
                parking, and room to build the set.
              </p>

              <a
                href="mailto:contactwarhaul@gmail.com"
                className="mt-8 inline-flex border border-white bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#EF3340] hover:bg-[#EF3340] hover:text-white"
              >
                Book Studio
              </a>
            </div>

            <div className="bg-[#EF3340]">
              <img
                src={studioImages[activeStudioImage]}
                alt="Warhaul photo studio"
                className="h-[420px] w-full object-contain bg-[#EF3340] md:h-full"
              />
            </div>
          </div>

          <div className="grid border-t border-white/30 md:grid-cols-2">
            <div className="min-h-[360px] border-b border-white/30 bg-[#EF3340] md:border-b-0 md:border-r">
              <div className="flex h-full min-h-[360px] items-center justify-center p-8 text-center">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
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
                className="mt-8 inline-flex border border-[#EF3340] bg-[#EF3340] px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-white hover:bg-white hover:text-[#EF3340]"
              >
                Book Audio / DJ
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowAmenities((current) => !current)}
          className="mt-8 flex w-full items-center justify-between border border-white/30 px-6 py-6 text-left transition hover:bg-white hover:text-[#EF3340]"
        >
          <span className="text-2xl font-black uppercase tracking-[-0.04em]">
            Amenities & Gear
          </span>

          <span className="text-xs uppercase tracking-[0.22em] opacity-70">
            {showAmenities ? "Hide" : "View"}
          </span>
        </button>

        {showAmenities && (
          <div className="mt-5 grid border border-white/30 md:grid-cols-3">
            {amenities.map((group) => (
              <div
                key={group.title}
                className="border-b border-white/30 p-6 md:border-b-0 md:border-r md:p-8"
              >
                <h3 className="text-3xl font-black uppercase tracking-[-0.05em]">
                  {group.title}
                </h3>

                <div className="mt-8 divide-y divide-white/20 text-lg text-white/75">
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

          <div className="mt-10 grid grid-cols-[auto_1fr_auto] items-center gap-3 border-y border-[#EF3340] py-6">
            <button
              onClick={previousEventCard}
              className="flex h-[420px] w-12 items-center justify-center border border-[#EF3340] bg-white text-[#EF3340] transition hover:bg-[#EF3340] hover:text-white md:h-[560px]"
              aria-label="Previous event"
            >
              <span className="-rotate-90 text-[10px] font-black uppercase tracking-[0.22em]">
                Previous
              </span>
            </button>

            <button
              onClick={() => openEventAlbumPage(currentEventCard)}
              className="group relative h-[420px] overflow-hidden border border-[#EF3340] bg-[#EF3340] text-left text-white md:h-[560px]"
            >
              {currentEventCard.images.length > 0 ? (
                <img
                  src={currentEventCard.images[0]}
                  alt={currentEventCard.name}
                  className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-55"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#EF3340]">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-white/55">
                    Images Coming Soon
                  </p>
                </div>
              )}

              <div className="absolute inset-0 flex items-center justify-center bg-[#EF3340]/25 p-6">
                <h3 className="text-center text-5xl font-black uppercase leading-[0.85] tracking-[-0.08em] md:text-8xl">
                  {currentEventCard.name}
                </h3>
              </div>

              <div className="absolute bottom-5 left-5 border border-white bg-white px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#EF3340]">
                Open Album
              </div>
            </button>

            <button
              onClick={nextEventCard}
              className="flex h-[420px] w-12 items-center justify-center border border-[#EF3340] bg-white text-[#EF3340] transition hover:bg-[#EF3340] hover:text-white md:h-[560px]"
              aria-label="Next event"
            >
              <span className="rotate-90 text-[10px] font-black uppercase tracking-[0.22em]">
                Next
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] border-b border-white/30 bg-[#EF3340] px-4 py-16 text-white md:px-8 md:py-20">
        <p className="mb-8 text-[11px] uppercase tracking-[0.32em] text-white/70">
          Warhaul Radio
        </p>

        <div className="border-y border-white/30 py-8">
          <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
            Warhaul Radio
          </h2>

          <a
            href="https://www.youtube.com/@WarhaulStudio"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex border border-white bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-[#EF3340] transition hover:bg-[#EF3340] hover:text-white"
          >
            Watch Episodes
          </a>
        </div>
      </section>

      <section id="contact" className="border-t border-white/30 bg-[#EF3340] text-white">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/70">
            Contact
          </p>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
            <a
              href="mailto:contactwarhaul@gmail.com"
              className="whitespace-nowrap text-[clamp(11px,2.6vw,15px)] font-black uppercase tracking-[0.02em] hover:opacity-70"
            >
              CONTACTWARHAUL@GMAIL.COM
            </a>

            <a
              href="tel:6477948882"
              className="whitespace-nowrap text-[clamp(11px,2.6vw,15px)] font-black uppercase tracking-[0.02em] hover:opacity-70"
            >
              647-794-8882
            </a>

            <a
              href="https://www.instagram.com/warhaulstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-[clamp(11px,2.6vw,15px)] font-black uppercase tracking-[0.02em] hover:opacity-70"
            >
              @WARHAULSTUDIO
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}