import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold">
                M
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  MHB
                </h2>

                <p className="text-xs text-slate-400">
                  Mastauna Highway Bus
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Safe, reliable and comfortable transportation for your
              everyday journeys, group trips and special travel needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/routes"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Routes
                </Link>
              </li>

              <li>
                <Link
                  to="/fleet"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Fleet
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              <li className="text-sm text-slate-400">
                Highway Transportation
              </li>

              <li className="text-sm text-slate-400">
                Group Transportation
              </li>

              <li className="text-sm text-slate-400">
                Educational Trips
              </li>

              <li className="text-sm text-slate-400">
                Corporate Travel
              </li>

              <li className="text-sm text-slate-400">
                Event Transportation
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-5">

              {/* Location */}
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    Mastauna, Punjab, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    Contact number coming soon
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    Email coming soon
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:flex-row md:items-center md:justify-between">

          <div>
            <h3 className="text-lg font-semibold">
              Planning your next journey?
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Get in touch with MHB for your transportation requirements.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Contact Us
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} MHB. All rights reserved.
          </p>

          <p>
            Mastauna Highway Bus
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;