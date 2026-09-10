import { Mail, MapPin, Phone, Instagram } from "lucide-react";

function Contact() {
  return (
    <div className="bg-white text-slate-900">

      {/* Hero */}
      <section className="bg-slate-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Contact MHB
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Let's Talk About Your
            <span className="block text-blue-400">
              Next Journey.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Have a question or need transportation for your next journey?
            Get in touch with Mastauna Highway Bus.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-3">

            {/* Phone */}
            <a
              href="tel:+916284602841"
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Phone size={22} />
              </div>

              <p className="mt-6 text-sm font-medium text-slate-500">
                Call Us
              </p>

              <h2 className="mt-2 text-xl font-bold text-slate-950">
                +91 6284602841
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Contact us for enquiries
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:rajapple6284@gmail.com"
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Mail size={22} />
              </div>

              <p className="mt-6 text-sm font-medium text-slate-500">
                Email Us
              </p>

              <h2 className="mt-2 break-all text-lg font-bold text-slate-950">
                rajapple6284@gmail.com
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Send us an email
              </p>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/abc_edutech/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Instagram size={22} />
              </div>

              <p className="mt-6 text-sm font-medium text-slate-500">
                Instagram
              </p>

              <h2 className="mt-2 text-xl font-bold text-slate-950">
                @abc_edutech
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Follow us on Instagram
              </p>
            </a>

          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Get In Touch
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">
                We're here to help with your journey.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                Whether you are planning a group trip, educational tour,
                corporate travel or any other transportation requirement,
                feel free to contact MHB.
              </p>

              <div className="mt-8 space-y-5">

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-950">
                      Location
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Mastauna, Punjab, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Phone size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-950">
                      Phone
                    </h3>

                    <a
                      href="tel:+916284602841"
                      className="mt-1 block text-sm text-blue-600 hover:text-blue-700"
                    >
                      +91 6284602841
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Mail size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-950">
                      Email
                    </h3>

                    <a
                      href="mailto:rajapple6284@gmail.com"
                      className="mt-1 block break-all text-sm text-blue-600 hover:text-blue-700"
                    >
                      rajapple6284@gmail.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right */}
            <div className="rounded-3xl bg-slate-950 p-8 sm:p-10">

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                MHB
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white">
                Ready for your next journey?
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Contact us directly and discuss your transportation
                requirements with Mastauna Highway Bus.
              </p>

              <div className="mt-8 space-y-4">

                <a
                  href="tel:+916284602841"
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-5 py-4 text-white transition hover:bg-blue-600"
                >
                  <Phone size={20} />
                  <span>+91 6284602841</span>
                </a>

                <a
                  href="mailto:rajapple6284@gmail.com"
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-5 py-4 text-white transition hover:bg-blue-600"
                >
                  <Mail size={20} />
                  <span className="break-all">
                    rajapple6284@gmail.com
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/abc_edutech/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-5 py-4 text-white transition hover:bg-blue-600"
                >
                  <Instagram size={20} />
                  <span>@abc_edutech</span>
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">

          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
            Have a journey in mind?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Get in touch with MHB today and let's make your journey
            comfortable and convenient.
          </p>

          <a
            href="tel:+916284602841"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            <Phone size={18} />
            Call MHB
          </a>

        </div>
      </section>

    </div>
  );
}

export default Contact;