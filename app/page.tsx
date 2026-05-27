"use client";

import React, { useEffect, useState } from "react";
import { Camera, Mic2, Plus, Minus, Menu, X } from "lucide-react";

const RED = "#EF3340";
const EMAIL = "contactwarhaul@gmail.com";

const mailTo = (subject: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

const nav = [
  ["#media", "PRESS"],
  ["#services", "SERVICE"],
  ["#studio", "STUDIO"],
  ["#events", "EVENT"],
  ["#contact", "CONTACT"],
];

const heroPhrases = [
  "MULTIMEDIA PRODUCTION HOUSE",
  "CREATIVE SPACES",
  "LIVE EVENTS",
  "AUDIO + VIDEO PRODUCTION",
  "BRAND + MARKETING CONSULTING",
];

const magazineImage = "/images/andy-warhol.jpg";

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
  { name: "GRIM 2", slug: "grim-2", images: [] as string[] },
  { name: "ARTSCAPE 1", slug: "artscape-1", images: [] as string[] },
  { name: "ARTSCAPE 2", slug: "artscape-2", images: artscape2Images },
  { name: "REDEPLOYMENT", slug: "redeployment", images: [] as string[] },
  {
    name: "LOOK MA! I'M FAMOUS",
    slug: "look-ma-im-famous",
    images: [] as string[],
  },
  { name: "RENDEZVOUS", slug: "rendezvous", images: [] as string[] },
  { name: "MAISON 2", slug: "maison-2", images: [] as string[] },
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
    title: "PHOTO + VIDEO PRODUCTION",
    details: [
      "PHOTOGRAPHY",
      "VIDEOGRAPHY",
      "MUSIC VIDEOS",
      "CAMPAIGN VISUALS",
      "EVENT RECAPS",
      "PRODUCT CONTENT",
      "PORTRAITS",
      "SOCIAL CLIPS",
      "FILMED DJ SETS",
    ],
  },
  {
    number: "02",
    title: "AUDIO PRODUCTION + DJ SERVICES",
    details: [
      "RECORDING",
      "VOCAL PRODUCTION",
      "MIXING",
      "MASTERING",
      "DJ SET RECORDING",
      "CURATED MIXES",
      "WARHAUL RADIO-STYLE SETS",
      "SOUND SUPPORT",
    ],
  },
  {
    number: "03",
    title: "EVENT",
    details: [
      "EVENT PLANNING",
      "LAUNCH PARTIES",
      "ACTIVATIONS",
      "LISTENING SESSIONS",
      "CREATIVE SHOWCASES",
      "DJ BOOKINGS",
      "ARTIST MOMENTS",
      "COMMUNITY EXPERIENCES",
    ],
  },
  {
    number: "04",
    title: "BRANDING + MARKETING",
    details: [
      "BRAND STRATEGY",
      "ROLLOUT PLANNING",
      "CAMPAIGN DIRECTION",
      "SOCIAL MEDIA DIRECTION",
      "AUDIENCE GROWTH",
      "CONTENT PLANNING",
      "PROMOTIONAL STRATEGY",
    ],
  },
];

const amenities = [
  {
    title: "AMENITIES",
    items: ["WIFI", "DRESSING ROOM", "CHAIRS", "TABLES", "PARKING", "WASHROOM"],
  },
  {
    title: "PHOTO EQUIPMENT",
    items: [
      "2X GODOX SL60W",
      "2X 33INCH OCTAGON SOFTBOX",
      "1X LANTERN SOFTBOX",
      "1X SNOOT KIT WITH GELS",
      "VARIOUS LIGHT STANDS",
    ],
  },
  {
    title: "AUDIO EQUIPMENT",
    items: ["2X KRKS", "APOLLO TWIN INTERFACE", "TLM-103 MIC"],
  },
];

export default function WarhaulHomepage() {
  const [activeStudioImage, setActiveStudioImage] = useState(0);
  const [activeEventCard, setActiveEventCard] = useState(2);
  const [activeHeroPhrase, setActiveHeroPhrase] = useState(0);
  const [showAmenities, setShowAmenities] = useState(false);
  const [openService, setOpenService] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroPhrase((current) =>
        current === heroPhrases.length - 1 ? 0 : current + 1
      );
    }, 1800);

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
          <title>${album.name} | WARHAUL EVENTS</title>
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
              text-transform: uppercase;
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
            }

            h1 {
              max-width: 1200px;
              font-size: clamp(42px, 10vw, 190px);
              font-weight: 900;
              line-height: 0.78;
              letter-spacing: -0.1em;
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
            }

            .grid {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 18px;
              margin-top: 40px;
            }

            .image-card {
              border: 1px solid rgba(255, 255, 255, 0.35);
            }

            .image-card img {
              display: block;
              width: 100%;
              height: 620px;
              object-fit: contain;
              background: rgba(255, 255, 255, 0.1);
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
            }

            .empty-state h2 {
              margin-top: 20px;
              font-size: clamp(32px, 7vw, 120px);
              font-weight: 900;
              line-height: 0.85;
              letter-spacing: -0.06em;
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
            <div class="brand">WARHAUL</div>
            <a class="back" href="javascript:window.close()">CLOSE</a>
          </header>

          <main>
            <p class="label">WARHAUL EVENTS</p>
            <h1>${album.name}</h1>
            <p class="intro">
              EVENT ALBUM — SELECTED PHOTOS FROM ${album.name}.
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
    <main className="min-h-screen bg-[#EF3340] text-white uppercase">
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
          animation: logo-marquee 52s linear infinite;
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
              alt="WARHAUL"
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

          <div className="hidden md:block">
            <a
              href={mailTo("Studio Booking")}
              className="border border-white bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#EF3340] transition hover:bg-[#EF3340] hover:text-white md:px-5 md:py-3"
            >
              BOOK STUDIO
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center border border-white text-white md:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/30 bg-[#EF3340]/95 px-4 py-4 md:hidden">
            <div className="grid gap-2">
              {nav.map(([link, label]) => (
                <a
                  key={label}
                  href={link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border border-white/30 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.24em] text-white"
                >
                  {label}
                </a>
              ))}

              <a
                href={mailTo("Studio Booking")}
                className="border border-white bg-white px-4 py-3 text-center text-xs font-black uppercase tracking-[0.18em] text-[#EF3340]"
              >
                BOOK STUDIO
              </a>
            </div>
          </div>
        )}
      </header>

      <section
        id="placements"
        className="overflow-hidden border-b border-white/30 bg-[#EF3340] text-white"
      >
        <div className="mx-auto flex max-w-[1600px] items-center gap-8 px-4 py-5 md:px-8">
          <p className="shrink-0 text-[10px] font-black uppercase tracking-[0.32em] text-white/70">
            TRUSTED BY
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
                    alt="WARHAUL PLACEMENT LOGO"
                    className="max-h-14 w-full object-contain grayscale contrast-125 opacity-75"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] border-b border-white/30 bg-[#EF3340] px-4 pb-12 pt-14 md:px-8 md:pb-16 md:pt-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-center text-[20vw] font-black uppercase leading-[0.78] tracking-[-0.12em] md:text-[13vw]">
            WARHAUL
          </h1>

          <div className="mt-7 flex min-h-[72px] w-full max-w-4xl items-center justify-center border-y border-white/30 px-4 py-5">
            <p
              key={activeHeroPhrase}
              className="text-center text-base font-black uppercase leading-7 tracking-[0.16em] text-white/90 transition-opacity md:text-xl md:leading-8"
            >
              {heroPhrases[activeHeroPhrase]}
            </p>
          </div>
        </div>
      </section>

      <section
        id="media"
        className="mx-auto max-w-[1600px] border-b border-white/30 bg-[#EF3340] px-4 py-16 text-white md:px-8 md:py-20"
      >
        <p className="mb-8 text-[11px] uppercase tracking-[0.32em] text-white/70">
          PRESS
        </p>

        <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
          RADIO + MAGAZINE
        </h2>

        <div className="mt-10 border-y border-white/30">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-white/30 p-6 md:border-b-0 md:border-r md:p-8">
              <Mic2 className="mb-8 h-8 w-8" />

              <h3 className="text-3xl font-black uppercase tracking-[-0.05em] md:text-5xl">
                WARHAUL RADIO
              </h3>

              <p className="mt-5 text-lg uppercase leading-8 text-white/75">
                DJ MIXES, LIVE EVENT RECORDINGS, EXCLUSIVE SETS, INTERVIEWS,
                PODCAST CLIPS, AND SONIC DOCUMENTATION FROM TORONTO’S CREATIVE
                UNDERGROUND.
              </p>

              <a
                href={mailTo("WARHAUL RADIO INQUIRY")}
                className="mt-8 inline-flex border border-white bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#EF3340] hover:bg-[#EF3340] hover:text-white"
              >
                RADIO INQUIRIES
              </a>
            </div>

            <div className="border-b border-white/30 bg-[#EF3340] p-4 md:min-h-[360px] md:border-b-0 md:p-0">
              <div className="mx-auto aspect-video w-full max-w-[420px] overflow-hidden border border-white/30 md:h-full md:min-h-[360px] md:max-w-none md:border-l md:border-y-0 md:border-r-0">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/PcCkx5QIt6U?autoplay=1&mute=1&loop=1&playlist=PcCkx5QIt6U&controls=1&playsinline=1&rel=0"
                  title="WARHAUL RADIO"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="grid border-t border-white/30 md:grid-cols-2">
            <div
              className="relative min-h-[360px] border-b border-white/30 bg-cover bg-center md:min-h-[520px] md:border-b-0 md:border-r"
              style={{ backgroundImage: `url("${magazineImage}")` }}
            >
              <div className="absolute inset-0 bg-[#EF3340]/35 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/75">
                  MAGAZINE VISUALS COMING SOON
                </p>
              </div>
            </div>

            <div className="bg-[#EF3340] p-6 text-white md:p-8">
              <Camera className="mb-8 h-8 w-8" />

              <h3 className="text-3xl font-black uppercase tracking-[-0.05em] md:text-5xl">
                WARHAUL MAGAZINE
              </h3>

              <p className="mt-5 text-lg font-black uppercase leading-8 tracking-normal text-white/75">
                COMING SOON
              </p>
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
            SERVICE
          </p>

          <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
            CREATIVE
          </h2>

          <div className="mt-10 border-t border-black">
            {services.map((service, index) => (
              <div key={service.title} className="border-b border-black">
                <button
                  onClick={() =>
                    setOpenService(openService === index ? null : index)
                  }
                  className="grid w-full grid-cols-[0.15fr_1fr_auto] items-center gap-4 py-6 text-left uppercase transition hover:bg-[#EF3340] hover:px-4 hover:text-white md:py-8"
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
              href={mailTo("CREATIVE SERVICES INQUIRY")}
              className="inline-flex border border-[#EF3340] bg-[#EF3340] px-8 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#EF3340]"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>

      <section
        id="studio"
        className="mx-auto max-w-[1600px] border-b border-white/30 bg-[#EF3340] px-4 py-16 text-white md:px-8 md:py-20"
      >
        <p className="mb-8 text-[11px] uppercase tracking-[0.32em] text-white/70">
          BOOK WARHAUL
        </p>

        <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
          STUDIO
        </h2>

        <div className="mt-10 border-y border-white/30">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-white/30 p-6 md:border-b-0 md:border-r md:p-8">
              <Camera className="mb-8 h-8 w-8" />

              <h3 className="text-3xl font-black uppercase tracking-[-0.05em] md:text-5xl">
                FILM STUDIO
              </h3>

              <p className="mt-5 text-lg uppercase leading-8 text-white/75">
                CYCLORAMA WALL, OPEN LAYOUT, LIGHTING GEAR, DRESSING AREA,
                PARKING, AND ROOM TO BUILD THE SET.
              </p>

              <a
                href={mailTo("FILM STUDIO BOOKING INQUIRY")}
                className="mt-8 inline-flex border border-white bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#EF3340] hover:bg-[#EF3340] hover:text-white"
              >
                BOOK STUDIO
              </a>
            </div>

            <div>
              <img
                src={studioImages[activeStudioImage]}
                alt="WARHAUL FILM STUDIO"
                className="h-[420px] w-full object-contain md:h-full"
              />
            </div>
          </div>

          <div className="grid border-t border-white/30 md:grid-cols-2">
            <div className="min-h-[360px] border-b border-white/30 md:border-b-0 md:border-r">
              <div className="flex h-full min-h-[360px] items-center justify-center p-8 text-center">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
                  AUDIO / DJ VISUALS COMING SOON
                </p>
              </div>
            </div>

            <div className="bg-white p-6 text-black md:p-8">
              <Mic2 className="mb-8 h-8 w-8" />

              <h3 className="text-3xl font-black uppercase tracking-[-0.05em] md:text-5xl">
                AUDIO + DJ STUDIO
              </h3>

              <p className="mt-5 text-lg uppercase leading-8 text-black/60">
                RECORDING, VOCAL PRODUCTION, MIXING, MASTERING, DJ PRACTICE,
                FILMED DJ SETS, AND CONTENT CREATION.
              </p>

              <a
                href={mailTo("AUDIO + DJ STUDIO BOOKING INQUIRY")}
                className="mt-8 inline-flex border border-[#EF3340] bg-[#EF3340] px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-white hover:bg-white hover:text-[#EF3340]"
              >
                BOOK AUDIO / DJ
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowAmenities((current) => !current)}
          className="mt-8 flex w-full items-center justify-between border border-white/30 px-6 py-6 text-left uppercase transition hover:bg-white hover:text-[#EF3340]"
        >
          <span className="text-2xl font-black uppercase tracking-[-0.04em]">
            AMENITIES & GEAR
          </span>

          <span className="text-xs uppercase tracking-[0.22em] opacity-70">
            {showAmenities ? "HIDE" : "VIEW"}
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

                <div className="mt-8 divide-y divide-white/20 text-lg uppercase text-white/75">
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
        className="relative min-h-[760px] overflow-hidden border-b border-black/10 bg-black px-4 py-16 text-white md:px-8 md:py-20"
      >
        {currentEventCard.images.length > 0 ? (
          <img
            src={currentEventCard.images[0]}
            alt={currentEventCard.name}
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-[#EF3340]" />
        )}

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto flex min-h-[640px] max-w-[1600px] flex-col justify-between">
          <div>
            <p className="mb-8 text-[11px] uppercase tracking-[0.32em] text-white/70">
              EVENT
            </p>

            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
              EVENT
            </h2>

            <p className="mt-6 max-w-3xl text-lg uppercase leading-8 text-white/75">
              WARHAUL EVENTS ARE BUILT TO CONNECT WITH THE COMMUNITY, CREATE
              INTENTIONAL CULTURAL MOMENTS, AND PUSH TORONTO’S CREATIVE SCENE
              FORWARD.
            </p>
          </div>

          <div className="grid grid-cols-[auto_1fr_auto] items-stretch gap-3 border-y border-white/50 py-6">
            <button
              onClick={previousEventCard}
              className="flex min-h-[420px] w-12 items-center justify-center border border-white bg-white/90 text-[#EF3340] transition hover:bg-[#EF3340] hover:text-white md:min-h-[560px]"
              aria-label="PREVIOUS EVENT"
            >
              <span className="-rotate-90 text-[10px] font-black uppercase tracking-[0.22em]">
                PREVIOUS
              </span>
            </button>

            <button
              onClick={() => openEventAlbumPage(currentEventCard)}
              className="group relative min-h-[420px] overflow-hidden border border-white/60 text-left text-white md:min-h-[560px]"
            >
              <div className="absolute inset-0 flex items-center justify-center p-3 md:p-6">
                <h3 className="max-w-full text-center text-[clamp(0.95rem,6vw,2rem)] font-black uppercase leading-[0.95] tracking-[-0.04em] md:text-8xl md:tracking-[-0.08em]">
                  {currentEventCard.name}
                </h3>
              </div>

              <div className="absolute bottom-5 left-5 border border-white bg-white px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#EF3340]">
                OPEN ALBUM
              </div>
            </button>

            <button
              onClick={nextEventCard}
              className="flex min-h-[420px] w-12 items-center justify-center border border-white bg-white/90 text-[#EF3340] transition hover:bg-[#EF3340] hover:text-white md:min-h-[560px]"
              aria-label="NEXT EVENT"
            >
              <span className="rotate-90 text-[10px] font-black uppercase tracking-[0.22em]">
                NEXT
              </span>
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/30 bg-[#EF3340] text-white">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-center gap-3 px-4 py-6 text-center md:px-8">
          <p className="text-[9px] uppercase tracking-[0.32em] text-white/70">
            CONTACT
          </p>

          <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-6">
            <a
              href={mailTo("GENERAL QUESTIONS")}
              className="whitespace-nowrap border border-white bg-white px-3 py-2.5 text-[clamp(9px,2vw,12px)] font-black uppercase tracking-[0.02em] text-[#EF3340] hover:bg-[#EF3340] hover:text-white"
            >
              QUESTIONS?
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="whitespace-nowrap text-[clamp(9px,2vw,12px)] font-black uppercase tracking-[0.02em] hover:opacity-70"
            >
              CONTACTWARHAUL@GMAIL.COM
            </a>

            <a
              href="tel:6477948882"
              className="whitespace-nowrap text-[clamp(9px,2vw,12px)] font-black uppercase tracking-[0.02em] hover:opacity-70"
            >
              647-794-8882
            </a>

            <a
              href="https://www.instagram.com/warhaulstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-[clamp(9px,2vw,12px)] font-black uppercase tracking-[0.02em] hover:opacity-70"
            >
              @WARHAULSTUDIO
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}