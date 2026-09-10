import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Routes", path: "/routes" },
  { name: "Fleet", path: "/fleet" },
  { name: "Gallery", path: "/gallery" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/20 bg-slate-950/90 px-4 shadow-2xl backdrop-blur-xl">

          <div className="flex h-18 items-center justify-between">

            {/* ================= LOGO ================= */}
            <Link
              to="/"
              className="flex items-center gap-3"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-black text-white shadow-lg shadow-blue-600/30">
                M
              </div>

              <div className="leading-none">
                <h1 className="text-xl font-black tracking-tight text-white">
                  MHB
                </h1>

                <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  Mastauna Highway Bus
                </p>
              </div>
            </Link>

            {/* ================= DESKTOP MENU ================= */}
            <div className="hidden items-center gap-1 lg:flex">

              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

            </div>

            {/* ================= CONTACT BUTTON ================= */}
            <div className="hidden lg:block">

              <Link
                to="/contact"
                className="group flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30"
              >
                <Phone
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />

                Contact Us
              </Link>

            </div>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl p-2.5 text-white transition hover:bg-white/10 lg:hidden"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={25} /> : <Menu size={25} />}
            </button>

          </div>

          {/* ================= MOBILE MENU ================= */}
          <div
            className={`overflow-hidden transition-all duration-300 lg:hidden ${
              isOpen ? "max-h-125 pb-4" : "max-h-0"
            }`}
          >
            <div className="border-t border-white/10 pt-3">

              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
              >
                <Phone size={16} />
                Contact Us
              </Link>

            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;