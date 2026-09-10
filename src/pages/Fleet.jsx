import {
  ArrowRight,
  Armchair,
  BusFront,
  Check,
  ChevronRight,
  Clock3,
  ShieldCheck,
  Snowflake,
  Users,
  Wifi,
} from "lucide-react";
import { Link } from "react-router-dom";

function Fleet() {
  const buses = [
    {
      id: 1,
      name: "MHB Coach",
      category: "Highway Coach",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1400&q=85",
      description:
        "Designed for comfortable and dependable highway travel with a passenger-focused experience.",
      features: ["Comfortable Seating", "Highway Travel", "Passenger Focus"],
    },
    {
      id: 2,
      name: "MHB Premium",
      category: "Premium Coach",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1400&q=85",
      description:
        "A refined travel option designed for passengers who value comfort and a pleasant journey.",
      features: ["Spacious Interior", "Comfort Focus", "Modern Experience"],
    },
    {
      id: 3,
      name: "MHB Group Coach",
      category: "Group Transportation",
      image:
        "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1400&q=85",
      description:
        "A practical transportation solution for organized group journeys and special travel requirements.",
      features: ["Group Travel", "Flexible Use", "Reliable Service"],
    },
  ];

  const facilities = [
    {
      icon: Armchair,
      title: "Comfortable Seating",
      description:
        "Designed to provide passengers with a comfortable experience throughout the journey.",
    },
    {
      icon: Snowflake,
      title: "Climate Comfort",
      description:
        "Suitable climate-control facilities depending on the selected MHB bus.",
    },
    {
      icon: ShieldCheck,
      title: "Safety Focus",
      description:
        "Passenger safety remains a central priority throughout the travel experience.",
    },
    {
      icon: Wifi,
      title: "Travel Facilities",
      description:
        "Selected buses may offer additional facilities depending on the vehicle and service.",
    },
  ];

  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-slate-950 pt-32">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2200&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/30" />

        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">

              <span className="h-2 w-2 rounded-full bg-blue-400" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                Our Fleet
              </span>

            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">

              Built for the
              <br />

              <span className="text-blue-400">
                Road Ahead.
              </span>

            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore the MHB fleet and discover transportation designed around
              comfort, reliability and the demands of highway travel.
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

          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                MHB Fleet
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                The right bus for
                <br />
                the right journey.
              </h2>

            </div>

            <p className="max-w-xl text-base leading-8 text-slate-600 lg:justify-self-end">
              Whether it's highway transportation, group travel or an
              organized journey, our fleet is intended to provide practical
              and comfortable transportation solutions.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FLEET CARDS
      ===================================================== */}
      <section className="pb-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-7 lg:grid-cols-3">

            {buses.map((bus) => (
              <article
                key={bus.id}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Image */}
                <div className="relative h-72 overflow-hidden">

                  <img
                    src={bus.image}
                    alt={bus.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Category */}
                  <div className="absolute left-5 top-5">

                    <span className="rounded-full border border-white/20 bg-slate-950/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                      {bus.category}
                    </span>

                  </div>

                  {/* Bus Icon */}
                  <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-lg">
                    <BusFront size={21} />
                  </div>

                </div>


                {/* Content */}
                <div className="p-7">

                  <h3 className="text-2xl font-black text-slate-950">
                    {bus.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {bus.description}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">

                    {bus.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                          <Check size={14} />
                        </div>

                        <span className="text-sm font-medium text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}

                  </div>

                  <Link
                    to="/contact"
                    className="group/link mt-7 flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-blue-600"
                  >
                    <span>
                      Enquire About This Bus
                    </span>

                    <ChevronRight
                      size={18}
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
          FACILITIES
      ===================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            {/* Content */}
            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Passenger Comfort
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Designed around
                <br />
                the passenger.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                A good journey depends on more than the road. We focus on the
                details that can make highway transportation more comfortable,
                convenient and dependable.
              </p>

              <div className="mt-8 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Users size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-950">
                    Passenger First
                  </p>

                  <p className="text-xs text-slate-500">
                    Comfort • Safety • Reliability
                  </p>
                </div>

              </div>

            </div>


            {/* Facilities */}
            <div className="grid gap-4 sm:grid-cols-2">

              {facilities.map((facility) => {
                const Icon = facility.icon;

                return (
                  <div
                    key={facility.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 font-bold text-slate-950">
                      {facility.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {facility.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FLEET EXPERIENCE
      ===================================================== */}
      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="overflow-hidden rounded-[2rem] bg-slate-950">

            <div className="grid lg:grid-cols-2">

              {/* Image */}
              <div className="relative min-h-[350px]">

                <img
                  src="https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1400&q=85"
                  alt="Highway travel"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-slate-950/40" />

              </div>


              {/* Content */}
              <div className="p-8 sm:p-10 lg:p-14">

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                  On The Road
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Every bus has one purpose:
                  <br />
                  a better journey.
                </h2>

                <p className="mt-5 leading-8 text-slate-400">
                  From everyday highway travel to organized group journeys,
                  MHB aims to provide transportation that passengers can rely
                  on.
                </p>

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className="text-blue-400" size={18} />
                    Passenger-focused transportation
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className="text-blue-400" size={18} />
                    Comfort-oriented travel experience
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className="text-blue-400" size={18} />
                    Reliable highway service
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-blue-600 px-6 py-14 sm:px-10 lg:px-16 lg:py-16">

          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border-[45px] border-white/10" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

            <div className="max-w-2xl">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
                Need a Bus?
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Let's find the right solution for your journey.
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                Contact MHB to discuss your transportation requirements and
                available fleet options.
              </p>

            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
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

export default Fleet;