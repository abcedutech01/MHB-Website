import { ArrowRight, PhoneCall, MapPin, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-24">

      {/* Decorative Background Shapes */}
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-sky-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            {/* Small Label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                Mastauna Highway Bus
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">

              Moving You
              <br />

              <span className="text-blue-600">
                Towards Better Journeys.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              MHB provides dependable highway transportation with a focus on
              safety, comfort and reliable service. Wherever the road takes
              you, we're here to make the journey better.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/services"
                className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
              >
                Explore Our Services

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-md"
              >
                <PhoneCall size={17} />

                Contact Us
              </Link>

            </div>

            {/* Trust Points */}
            <div className="mt-10 flex flex-wrap gap-6 border-t border-slate-200 pt-7">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Safety First
                  </p>

                  <p className="text-xs text-slate-500">
                    Reliable travel
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Highway Service
                  </p>

                  <p className="text-xs text-slate-500">
                    Connecting destinations
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative">

            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-200 shadow-2xl shadow-slate-300/50">

              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1400&q=90"
                alt="Highway bus"
                className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[570px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

              {/* Image Label */}
              <div className="absolute bottom-6 left-6 right-6">

                <div className="rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-md">

                  <div className="flex items-center justify-between gap-4">

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        MHB
                      </p>

                      <p className="mt-1 font-bold text-slate-900">
                        Your Journey Starts Here
                      </p>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                      <ArrowRight size={20} />
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Floating Experience Card */}

          </div>

        </div>

      </div>

      {/* Bottom Wave */}
      <div className="relative h-12 overflow-hidden">
        <svg
          viewBox="0 0 1440 100"
          className="absolute bottom-0 h-auto w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,100 480,100 720,60 C960,20 1200,20 1440,60 L1440,100 L0,100 Z"
            fill="white"
          />
        </svg>
      </div>

    </section>
  );
}

export default Hero;