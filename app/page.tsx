"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Headphones,
  Mic2,
  MessageCircle,
} from "lucide-react";

const PHOTO_STUDIO_BOOKING_LINK =
  "https://WARHAUL.as.me/?appointmentType=category:Cyclorama%2FPhoto%20Studio";
const AUDIO_NO_ENGINEER_BOOKING_LINK =
  "https://WARHAUL.as.me/?appointmentType=category:Audio%2FDJ%20Studio%20-%20No%20Engineer";
const AUDIO_WITH_ENGINEER_BOOKING_LINK =
  "https://WARHAUL.as.me/?appointmentType=category:Audio%2FDJ%20Studio%20-%20With%20Engineer";
const CHATBOT_LINK = "https://warhaul.zapier.app/";

const generalBookingOptions = [
  {
    label: "Photo Studio",
    text: "Cyclorama / Photo Studio",
    href: PHOTO_STUDIO_BOOKING_LINK,
  },
  {
    label: "Audio / DJ - No Engineer",
    text: "Book audio or DJ studio only",
    href: AUDIO_NO_ENGINEER_BOOKING_LINK,
  },
  {
    label: "Audio / DJ - With Engineer",
    text: "Book audio studio with an engineer",
    href: AUDIO_WITH_ENGINEER_BOOKING_LINK,
  },
];

const audioBookingOptions = [
  {
    label: "No Engineer",
    text: "Book audio or DJ studio only",
    href: AUDIO_NO_ENGINEER_BOOKING_LINK,
  },
  {
    label: "With Engineer",
    text: "Book audio studio with an engineer",
    href: AUDIO_WITH_ENGINEER_BOOKING_LINK,
  },
];

const nav = [
  ["#about", "about"],
  ["#credits", "credits"],
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

const placementCredits = [
  {
    label: "Raptors “TRACY”",
    href: "https://www.instagram.com/tv/COjFjZJNML2/",
  },
  {
    label: "Nike Toronto",
    href: "https://www.instagram.com/p/CUNgT8fgPAo/",
  },
  {
    label: "Raptors “FAMILY”",
    href: "https://www.instagram.com/tv/CWObkA9t3Wo/",
  },
  {
    label: "Nike ACG",
    href: "https://www.instagram.com/p/CTxIpz7gkHN/",
  },
  {
    label: "Nike Play New",
    href: "https://www.instagram.com/tv/CUaUazxg81K/",
  },
  {
    label: "Ryan Yapsam",
    href: "https://www.instagram.com/reel/DHOWgbAOWbi/?igsh=MWdmZ3VyMTBrYWVhcg==",
  },
  {
    label: "JRDN",
    href: "https://www.instagram.com/reel/DLsBHytM5Ay/?igsh=dnFqcHBwZGZqMWx2",
  },
  {
    label: "Rolling Stone",
    href: "https://www.instagram.com/reel/DUOYgp7D77a/",
  },
  {
    label: "Billboard UK",
    href: "https://www.instagram.com/p/DUi-UnikxgM/",
  },
];

const services = [
  {
    number: "01",
    title: "Photo + Video Production",
    text:
      "Photography, videography, music videos, campaign visuals, event recaps, product content, portraits, social clips, and filmed DJ sets.",
  },
  {
    number: "02",
    title: "Audio Production + DJ Services",
    text:
      "Recording, vocal production, mixing, mastering, DJ set recording, curated mixes, Warhaul Radio-style sets, and sound support.",
  },
  {
    number: "03",
    title: "Events + Culture",
    text:
      "Event planning, launch parties, activations, listening sessions, creative showcases, DJ bookings, artist moments, and community experiences.",
  },
  {
    number: "04",
    title: "Branding + Marketing Consulting",
    text:
      "Brand strategy, rollout planning, campaign direction, social media direction, audience growth, content planning, and promotional strategy.",
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
  const [bookingMenuOpen, setBookingMenuOpen] = useState<
    "general" | "audio" | null
  >(null);

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

          <button
            onClick={() => setBookingMenuOpen("general")}
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/85"
          >
            Book Now
          </button>
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

      <section
        id="about"
        className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/45">
          About Warhaul
        </p>

        <h2 className="max-w-5xl text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
          A Multimedia Production House Built For Culture
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 md:p-10">
            <p className="text-lg leading-8 text-white/68 md:text-xl">
              Warhaul is a Toronto-based multimedia production company creating
              work across music, film, photography, audio, events, and cultural
              programming. We build spaces, visuals, sounds, and experiences for
              artists, brands, and communities that move culture forward.
            </p>

            <p className="mt-6 text-lg leading-8 text-white/60">
              Our vision is to become a home for the next generation of creative
              talent — a place where ideas are produced, documented, amplified,
              and shared with purpose.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 text-black md:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-black/45">
              What We Do
            </p>

            <div className="mt-8 space-y-5 text-2xl font-black uppercase leading-none tracking-[-0.04em]">
              <p>Production</p>
              <p>Creative Direction</p>
              <p>Studio Rentals</p>
              <p>Audio</p>
              <p>Events</p>
              <p>Culture</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="placements"
        className="bg-white px-5 py-20 text-black md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-black/45">
            Company Placements
          </p>

          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
            Trusted By
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Selected brands, platforms, labels, and cultural institutions
            connected through Warhaul’s visual, sonic, and creative production
            work.
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

      <section
        id="credits"
        className="bg-white px-5 py-20 text-black md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-black/45">
            Placements / Credits
          </p>

          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
            Credits
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Selected Warhaul placements, creative credits, and cultural work.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {placementCredits.map((credit) => (
              <a
                key={credit.label}
                href={credit.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[2rem] border border-black/10 bg-black/[0.03] p-6 transition hover:bg-black hover:text-white"
              >
                <p className="text-xs uppercase tracking-[0.22em] opacity-50">
                  View Credit
                </p>

                <h3 className="mt-5 text-2xl font-black uppercase">
                  {credit.label}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-white px-5 py-20 text-black md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.32em] text-black/45">
                Services
              </p>

              <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
                Creative Services
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-black/55">
              Full-service creative production for artists, brands, events, and
              cultural projects.
            </p>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 lg:grid-cols-4">
            {services.map((service) => (
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

                <h3 className="relative text-3xl font-black uppercase leading-none tracking-[-0.04em]">
                  {service.title}
                </h3>

                <p className="relative mt-6 text-lg leading-8 text-white/60 transition group-hover:text-black/60">
                  {service.text}
                </p>
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

      <section
        id="studio"
        className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24"
      >
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
              Cyclorama wall, open layout, lighting gear, dressing area,
              parking, and room to build the set.
            </p>

            <a
              href={PHOTO_STUDIO_BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-4 text-sm uppercase tracking-[0.16em] text-black"
            >
              Book Studio
            </a>
          </div>

          <div className="rounded-[2rem] bg-white p-7 text-black">
            <Mic2 className="mb-8 h-8 w-8" />

            <h3 className="text-3xl font-black uppercase">
              Audio + DJ Studio
            </h3>

            <p className="mt-4 text-black/60">
              Recording, vocal production, mixing, mastering, DJ practice,
              filmed DJ sets, and content creation.
            </p>

            <button
              onClick={() => setBookingMenuOpen("audio")}
              className="mt-8 inline-flex rounded-full bg-black px-6 py-4 text-sm uppercase tracking-[0.16em] text-white"
            >
              Book Audio / DJ
            </button>
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
                <h3 className="text-3xl font-black uppercase">
                  {group.title}
                </h3>

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

      <section
        id="events"
        className="bg-white px-5 py-20 text-black md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-black/45">
            Events
          </p>

          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
            Event Albums
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Warhaul events are built to connect with the community, create
            intentional cultural moments, and push Toronto’s creative scene
            forward.
          </p>

          <div className="mt-10 rounded-[2rem] bg-black p-8 text-white md:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">
              Upcoming Event
            </p>

            <h3 className="mt-4 text-4xl font-black uppercase tracking-[-0.05em] md:text-6xl">
              Warhaul Radio Live
            </h3>

            <p className="mt-5 text-lg uppercase leading-8 text-white/60">
              July 2026 • Toronto
            </p>

            <a
              href="mailto:contactwarhaul@gmail.com?subject=Warhaul%20Radio%20Live%20Inquiry"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-4 text-sm uppercase tracking-[0.16em] text-black transition hover:bg-white/85"
            >
              Event Inquiries
            </a>
          </div>

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

      <section
        id="contact"
        className="border-t border-white/10 px-5 py-20 md:px-8 md:py-24"
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

              <h3 className="mt-5 text-2xl font-black">@WarhaulStudio</h3>
            </a>
          </div>
        </div>
      </section>

      {bookingMenuOpen && (
        <div
          onClick={() => setBookingMenuOpen(null)}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/70 px-5 backdrop-blur"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-xl rounded-[2rem] bg-white p-6 text-black shadow-2xl md:p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-black/45">
                  Book Warhaul
                </p>

                <h3 className="mt-3 text-4xl font-black uppercase tracking-[-0.06em]">
                  {bookingMenuOpen === "audio"
                    ? "Choose Audio Booking"
                    : "Choose Booking"}
                </h3>
              </div>

              <button
                onClick={() => setBookingMenuOpen(null)}
                className="rounded-full border border-black/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-black/60 hover:bg-black hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="mt-8 grid gap-3">
              {(bookingMenuOpen === "audio"
                ? audioBookingOptions
                : generalBookingOptions
              ).map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-black/10 bg-black/[0.03] p-5 transition hover:bg-black hover:text-white"
                >
                  <p className="text-lg font-black uppercase tracking-[-0.03em]">
                    {option.label}
                  </p>

                  <p className="mt-2 text-sm leading-6 opacity-60">
                    {option.text}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <a
        href={CHATBOT_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[9999] flex items-center gap-2 rounded-full bg-white px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-black shadow-2xl transition hover:bg-white/85"
      >
        <MessageCircle className="h-5 w-5" />
        Chat With Ghillie
      </a>
    </main>
  );
}