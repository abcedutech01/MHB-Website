import {
  ArrowRight,
  BusFront,
  Building2,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  MapPinned,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      number: "01",
      icon: BusFront,
      title: "Highway Bus Transportation",
      description:
        "Reliable transportation for passengers travelling between cities and destinations. Our focus is to make every highway journey comfortable, convenient and dependable.",
      features: [
        "Comfortable highway travel",
        "Reliable transportation",
        "Passenger-focused service",
      ],
    },
    {
      number: "02",
      icon: Users,
      title: "Group Transportation",
      description:
        "Planning a journey for a group? MHB provides practical transportation solutions for families, groups, organizations and other travel requirements.",
      features: [
        "Suitable for groups",
        "Convenient travel planning",
        "Flexible transportation solutions",
      ],
    },
    {
      number: "03",
      icon: GraduationCap,
      title: "Educational Trips",
      description:
        "Transportation support for schools, colleges, coaching centres and educational organizations travelling for tours, visits and educational programs.",
      features: [
        "Educational tours",
        "Student group transportation",
        "Organized travel support",
      ],
    },
    {
      number: "04",
      icon: Building2,
      title: "Corporate & Institutional Travel",
      description:
        "Professional transportation services for companies, institutions and organizations that need dependable group travel solutions.",
      features: [
        "Corporate transportation",
        "Institutional travel",
        "Professional service",
      ],
    },
    {
      number: "05",
      icon: CalendarDays,
      title: "Event Transportation",
      description:
        "Make transportation easier for special occasions, functions, events and organized gatherings with dependable group travel solutions.",
      features: [
        "Event transportation",
        "Group movement",
        "Convenient travel arrangements",
      ],
    },
    {
      number: "06",
      icon: MapPinned,
      title: "Customized Travel Solutions",
      description:
        "Have a specific transportation requirement? Talk to our team and explore a solution designed around your journey, group and destination.",
      features: [
        "Customized requirements",
        "Flexible planning",
        "Journey-focused solutions",
      ],
    },
  ];

  const benefits = [
    {
      title: "Safety Focused",
      description:
        "Passenger safety is an essential part of the MHB travel experience.",
    },
    {
      title: "Comfortable Travel",
      description:
        "We aim to make highway travel convenient and comfortable for passengers.",
    },
    {
      title: "Reliable Service",
      description:
        "Dependable transportation solutions for individual and group journeys.",
    },
    {
      title: "Customer First",
      description:
        "We believe good transportation begins with understanding passenger needs.",
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
              "url('https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=2200&q=90')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/70" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />

        {/* Glow */}
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-400" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                What We Offer
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Transportation
              <br />

              <span className="text-blue-400">
                Built Around You.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              From everyday highway travel to group journeys and organized
              trips, MHB provides transportation solutions designed around
              safety, comfort and reliability.
            </p>

          </div>

        </div>

        {/* Bottom curve */}
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
          INTRO
      ===================================================== */}
      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-end">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our Services
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                More ways to move.
                <br />
                Better ways to travel.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">
              Every journey has different requirements. That's why MHB offers
              a range of transportation services for passengers, groups,
              educational organizations, institutions and special events.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES GRID
      ===================================================== */}
      <section className="pb-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl hover:shadow-slate-200/70"
                >

                  {/* Number */}
                  <div className="absolute right-6 top-6 text-5xl font-black text-slate-100 transition duration-300 group-hover:text-blue-50">
                    {service.number}
                  </div>

                  {/* Icon */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  {/* Content */}
                  <div className="relative mt-7">

                    <h3 className="text-xl font-bold text-slate-950">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>

                  </div>

                  {/* Features */}
                  <div className="relative mt-6 space-y-3 border-t border-slate-100 pt-5">

                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2
                          size={17}
                          className="shrink-0 text-blue-600"
                        />

                        <span className="text-sm font-medium text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}

                  </div>

                  {/* Bottom Arrow */}
                  <div className="mt-7 flex items-center justify-between">

                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      MHB Service
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY OUR SERVICES
      ===================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left */}
            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                The MHB Difference
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Service that goes beyond transportation.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                We believe transportation is not only about getting from one
                place to another. It's about creating a journey that passengers
                can feel confident about.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Talk to MHB

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>


            {/* Right Benefits */}
            <div className="grid gap-4 sm:grid-cols-2">

              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex items-center gap-3">

                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600">
                      0{index + 1}
                    </span>

                    <h3 className="font-bold text-slate-950">
                      {benefit.title}
                    </h3>

                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {benefit.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Simple & Convenient
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Your journey starts with a conversation.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Tell us what you need and our team can help you explore the right
              transportation solution.
            </p>

          </div>


          <div className="relative mt-14 grid gap-10 md:grid-cols-3">

            {/* Connecting Line */}
            <div className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-px bg-slate-200 md:block" />

            <div className="relative text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/20">
                01
              </div>

              <h3 className="mt-5 font-bold text-slate-950">
                Tell Us Your Requirement
              </h3>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-600">
                Share your destination, group size and transportation needs.
              </p>

            </div>


            <div className="relative text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/20">
                02
              </div>

              <h3 className="mt-5 font-bold text-slate-950">
                Plan Your Journey
              </h3>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-600">
                We'll help you understand the available transportation options.
              </p>

            </div>


            <div className="relative text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/20">
                03
              </div>

              <h3 className="mt-5 font-bold text-slate-950">
                Travel with MHB
              </h3>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-600">
                Enjoy a journey designed around safety, comfort and reliability.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-blue-600 px-6 py-14 sm:px-10 lg:px-16 lg:py-16">

          {/* Decorative Circles */}
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[50px] border-white/10" />

          <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full border-[40px] border-white/5" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

            <div className="max-w-2xl">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
                Need Transportation?
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Let's plan your journey with MHB.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-blue-100">
                Get in touch with our team to discuss your transportation
                requirements.
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

export default Services;