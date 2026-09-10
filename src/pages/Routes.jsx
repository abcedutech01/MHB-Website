import {
  ArrowRight,
  BusFront,
  Clock3,
  MapPin,
  Navigation,
  Route as RouteIcon,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

function Routes() {
  const routes = [
    {
      id: 1,
      from: "Mastauna",
      to: "Destination One",
      via: "Via Highway Route",
      distance: "Highway Service",
      frequency: "Regular Service",
    },
    {
      id: 2,
      from: "Mastauna",
      to: "Destination Two",
      via: "Via Highway Route",
      distance: "Highway Service",
      frequency: "Regular Service",
    },
    {
      id: 3,
      from: "Mastauna",
      to: "Destination Three",
      via: "Via Highway Route",
      distance: "Highway Service",
      frequency: "Regular Service",
    },
    {
      id: 4,
      from: "Mastauna",
      to: "Destination Four",
      via: "Via Highway Route",
      distance: "Highway Service",
      frequency: "Regular Service",
    },
    {
      id: 5,
      from: "Mastauna",
      to: "Destination Five",
      via: "Via Highway Route",
      distance: "Highway Service",
      frequency: "Regular Service",
    },
    {
      id: 6,
      from: "Mastauna",
      to: "Destination Six",
      via: "Via Highway Route",
      distance: "Highway Service",
      frequency: "Regular Service",
    },
  ];

  const routeFeatures = [
    {
      icon: Navigation,
      title: "Strategic Routes",
      description:
        "Connecting important destinations through convenient highway transportation.",
    },
    {
      icon: Clock3,
      title: "Convenient Travel",
      description:
        "Designed around practical travel requirements and passenger convenience.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Journey",
      description:
        "A transportation experience focused on safety and dependability.",
    },
  ];

  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-slate-950 pt-32">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=2200&q=90')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/75" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />

        {/* Glow */}
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

          <div className="max-w-3xl">

            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">

              <span className="h-2 w-2 rounded-full bg-blue-400" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                MHB Network
              </span>

            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">

              Wherever You're
              <br />

              <span className="text-blue-400">
                Headed, We Connect.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore the destinations and highway routes served by Mastauna
              Highway Bus. Find a convenient way to reach where you need to go.
            </p>

          </div>

        </div>

        {/* Bottom Curve */}
        <div className="relative h-12 overflow-hidden">

          <svg
            viewBox="0 0 1440 100"
            className="absolute bottom-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C240,100 480,100 720,60 C960,20 1200,20 1440,60 L1440,100 L0,100 Z"
              fill="white"
            />
          </svg>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-end gap-8 lg:grid-cols-2">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our Routes
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Connecting destinations,
                <br />
                making travel easier.
              </h2>

            </div>

            <p className="max-w-xl text-base leading-8 text-slate-600 lg:justify-self-end">
              MHB's route network is designed to provide dependable highway
              transportation between important destinations. Explore our
              current routes below.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          ROUTE SEARCH / FILTER BAR
      ===================================================== */}
      <section className="pb-14">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <RouteIcon size={22} />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-950">
                    Explore MHB Routes
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Find your route and discover your destination.
                  </p>
                </div>

              </div>


              <div className="grid gap-3 sm:grid-cols-2 lg:w-[500px]">

                <div className="relative">

                  <MapPin
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    defaultValue=""
                    className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Starting Point
                    </option>

                    <option>Mastauna</option>
                    <option>Other Location</option>
                  </select>

                </div>


                <div className="relative">

                  <Navigation
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    defaultValue=""
                    className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Destination
                    </option>

                    <option>Destination One</option>
                    <option>Destination Two</option>
                    <option>Destination Three</option>
                  </select>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ROUTES GRID
      ===================================================== */}
      <section className="pb-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-8 flex items-end justify-between gap-6">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Featured Routes
              </p>

              <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
                Where MHB can take you
              </h2>
            </div>

            <div className="hidden items-center gap-2 text-sm font-medium text-slate-500 sm:flex">
              <BusFront size={17} />
              MHB Highway Network
            </div>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {routes.map((route) => (
              <article
                key={route.id}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
              >

                {/* Route Header */}
                <div className="relative overflow-hidden bg-slate-950 px-6 py-7">

                  {/* Decorative Road */}
                  <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">

                    <svg
                      viewBox="0 0 300 180"
                      className="h-full w-full"
                    >
                      <path
                        d="M300 10 C210 40 230 70 160 90 C90 110 110 145 0 170"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                      />
                    </svg>

                  </div>

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                        Route 0{route.id}
                      </span>

                      <BusFront
                        size={20}
                        className="text-blue-400"
                      />

                    </div>


                    {/* From → To */}
                    <div className="mt-8">

                      <div className="flex items-center gap-3">

                        <div className="h-3 w-3 rounded-full border-2 border-blue-400 bg-slate-950" />

                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-slate-500">
                            From
                          </p>

                          <p className="mt-0.5 text-lg font-bold text-white">
                            {route.from}
                          </p>
                        </div>

                      </div>


                      <div className="ml-1.5 h-7 border-l border-dashed border-slate-600" />


                      <div className="flex items-center gap-3">

                        <div className="h-3 w-3 rounded-full bg-blue-400" />

                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-slate-500">
                            To
                          </p>

                          <p className="mt-0.5 text-lg font-bold text-white">
                            {route.to}
                          </p>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>


                {/* Route Details */}
                <div className="p-6">

                  <div className="flex items-center gap-2 text-sm text-slate-600">

                    <MapPin
                      size={16}
                      className="text-blue-600"
                    />

                    <span>
                      {route.via}
                    </span>

                  </div>


                  <div className="mt-5 grid grid-cols-2 gap-3">

                    <div className="rounded-xl bg-slate-50 p-3">

                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Service
                      </p>

                      <p className="mt-1 text-xs font-semibold text-slate-700">
                        {route.distance}
                      </p>

                    </div>


                    <div className="rounded-xl bg-slate-50 p-3">

                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Frequency
                      </p>

                      <p className="mt-1 text-xs font-semibold text-slate-700">
                        {route.frequency}
                      </p>

                    </div>

                  </div>


                  <Link
                    to="/contact"
                    className="group/link mt-6 flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-blue-600"
                  >

                    <span>
                      Enquire About Route
                    </span>

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />

                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ROUTE FEATURES
      ===================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Travel With MHB
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              More than a route on a map.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              We focus on making the journey between destinations as dependable
              and comfortable as possible.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {routeFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-14 sm:px-10 lg:px-16 lg:py-16">

          {/* Glow */}
          <div className="absolute -right-20 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

            <div className="max-w-2xl">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Planning a Journey?
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Let MHB help you get there.
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Have questions about a route, destination or transportation
                requirement? Our team is ready to help.
              </p>

            </div>


            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >
              Contact MHB

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Routes;