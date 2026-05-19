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

    <div className="mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-6">
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
        [
          "Warner Music Canada",
          "/images/warner music canada.png",
          "#",
        ],
      ].map(([name, image, link]) => (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-[2rem] border border-black/10 bg-black/[0.03] p-6 transition hover:bg-black hover:text-white"
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
            Audio Placement
          </p>
        </a>
      ))}
    </div>
  </div>
</section>