import {
  ArrowRight,
  Camera,
  Image as ImageIcon,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const galleryImages = [
  {
    id: 1,
    title: "MHB on the Highway",
    category: "Buses",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Journey in Motion",
    category: "Journeys",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Roadside Journey",
    category: "Journeys",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Destination Views",
    category: "Destinations",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Travel Together",
    category: "Journeys",
    image:
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Highway Experience",
    category: "Buses",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    title: "Exploring New Places",
    category: "Destinations",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    title: "The Road Ahead",
    category: "Buses",
    image:
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=1200&q=80",
  },
];

const categories = ["All", "Buses", "Journeys", "Destinations"];

function Gallery() {
  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=85"
            alt="Bus journey"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              <Camera size={16} />
              MHB Gallery
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Moments That
              <span className="block text-blue-400">
                Move With You.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore the world of MHB through buses, journeys, destinations
              and the moments that make every trip memorable.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our Journey
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Every journey has a story.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-600">
                From the first kilometre to the final destination, every
                journey creates memories. Take a look at some of the moments
                that represent the spirit of Mastauna Highway Bus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="px-6 pb-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                index === 0
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 translate-y-5 p-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
                    <ImageIcon size={14} />
                    {item.category}
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED MOMENT */}
      <section className="bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 lg:grid-cols-2">
          <div className="relative min-h-[350px]">
            <img
              src="https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=1400&q=85"
              alt="Road journey"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 to-slate-950/60" />

            <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              <MapPin size={16} />
              On the Road
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Travel With MHB
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              More than transportation.
              <span className="block text-blue-400">
                It's the journey.
              </span>
            </h2>

            <p className="mt-6 leading-7 text-slate-400">
              Whether it is a regular highway journey, a group trip or a
              special outing, MHB is focused on making the road part of the
              experience.
            </p>

            <Link
              to="/services"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
            >
              Explore Our Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-8">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <Camera size={26} />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Ready for your next journey?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Discover our transportation services and find the right travel
            solution for your next journey.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-blue-600"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Gallery;