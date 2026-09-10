import {
  ArrowRight,
  Award,
  BusFront,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Safety First",
      description:
        "Safety remains at the heart of every journey. We believe every passenger deserves a secure and dependable travel experience.",
    },
    {
      icon: HeartHandshake,
      title: "Customer Focus",
      description:
        "We value our passengers and strive to provide courteous service and a comfortable experience from departure to destination.",
    },
    {
      icon: Award,
      title: "Quality Service",
      description:
        "We continuously focus on maintaining high standards of service, comfort and reliability across our operations.",
    },
    {
      icon: Users,
      title: "People & Community",
      description:
        "We aim to connect people and places while contributing positively to the communities and destinations we serve.",
    },
  ];

  const highlights = [
    "Reliable highway transportation",
    "Comfort-focused travel experience",
    "Professional and responsible service",
    "Passenger-first approach",
    "Commitment to safety",
    "Convenient transportation solutions",
  ];

  return (
    <main className="bg-white">

      {/* =====================================================
          ABOUT HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-slate-950 pt-32">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2200&q=90')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/70" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/30" />

        {/* Decorative Glow */}
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

          <div className="max-w-3xl">

            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-400" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                About MHB
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              More Than
              <br />

              <span className="text-blue-400">
                Just a Bus Journey.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Mastauna Highway Bus is committed to making highway travel
              safer, more comfortable and more dependable for every passenger.
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
      <section className="py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Image */}
            <div className="relative">

              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1400&q=85"
                  alt="MHB highway bus"
                  className="h-[450px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[550px]"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 right-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-2xl sm:right-8">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <BusFront size={23} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      MHB
                    </p>

                    <p className="font-bold text-slate-900">
                      Moving People Forward
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* Content */}
            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Who We Are
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Connecting people,
                <br />
                one journey at a time.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">

                <p>
                  Mastauna Highway Bus, popularly known as MHB, is focused on
                  providing dependable highway transportation for passengers,
                  groups, institutions and organizations.
                </p>

                <p>
                  We understand that travelling is more than simply reaching
                  a destination. It is about feeling comfortable, staying safe
                  and knowing that your journey is in reliable hands.
                </p>

                <p>
                  Our approach is simple: put passengers first, maintain high
                  service standards and continuously work towards creating a
                  better travel experience.
                </p>

              </div>

              {/* Highlights */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-blue-600"
                    />

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION & VISION
      ===================================================== */}
      <section className="bg-slate-50 py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Direction
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Driven by purpose
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Everything we do is guided by our commitment to passengers,
              service quality and responsible transportation.
            </p>

          </div>


          <div className="mt-12 grid gap-6 lg:grid-cols-2">

            {/* Mission */}
            <div className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Target size={27} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-950">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To provide safe, dependable and comfortable highway
                transportation while delivering a service experience that
                passengers can trust.
              </p>

            </div>


            {/* Vision */}
            <div className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Award size={27} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-950">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To build a trusted transportation brand known for quality,
                reliability, passenger care and a consistently better journey
                experience.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CORE VALUES
      ===================================================== */}
      <section className="py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div className="max-w-2xl">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our Values
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                What guides MHB
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              The principles behind every service we provide and every
              passenger experience we create.
            </p>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-950">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          STATISTICS
      ===================================================== */}
      <section className="bg-blue-600 py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <p className="text-4xl font-black text-white">
                01
              </p>

              <p className="mt-2 text-sm font-medium text-blue-100">
                Passenger First
              </p>
            </div>

            <div>
              <p className="text-4xl font-black text-white">
                24/7
              </p>

              <p className="mt-2 text-sm font-medium text-blue-100">
                Journey Commitment
              </p>
            </div>

            <div>
              <p className="text-4xl font-black text-white">
                100%
              </p>

              <p className="mt-2 text-sm font-medium text-blue-100">
                Focus on Safety
              </p>
            </div>

            <div>
              <p className="text-4xl font-black text-white">
                MHB
              </p>

              <p className="mt-2 text-sm font-medium text-blue-100">
                Mastauna Highway Bus
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            The MHB Experience
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Let's make your next journey better.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Discover MHB and experience a transportation service built around
            safety, comfort and reliability.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              to="/services"
              className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              Explore Services

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Contact MHB
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;