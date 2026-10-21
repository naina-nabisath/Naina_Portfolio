
import { useState } from "react";
import { Mail, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Connect", id: "connect" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-[#08171e]"
      style={{
        backgroundColor: "#042b44",
        color: "#a1ccdc",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo and Name */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-3"
          aria-label="Naina Nabisath S - Home"
        >
          <span className="shrink-0 text-3xl font-bold text-blue-400 sm:text-4xl">
            NN
          </span>

          <span className="min-w-0">
            <span className="block whitespace-nowrap text-sm font-bold text-white sm:text-base">
              Naina Nabisath S
            </span>
            <span className="block text-xs sm:text-sm">
              MERN Stack Developer
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-4 lg:flex xl:gap-6">
          {navLink.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="whitespace-nowrap transition-colors duration-200 hover:text-blue-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Contact */}
        <a
          href="#connect"
          className="hidden shrink-0 items-center gap-2 rounded-full border border-blue-400 px-4 py-2 text-blue-400 transition-all duration-300 hover:bg-blue-400 hover:text-white lg:flex"
        >
          <Mail size={18} />
          <span>Get in touch</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="shrink-0 rounded-lg p-2 text-blue-400 transition hover:bg-white/10 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 px-4 pb-5 pt-3 sm:px-6 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLink.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  className="block w-full rounded-lg px-3 py-3 transition-colors duration-200 hover:bg-white/10 hover:text-blue-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#connect"
            onClick={closeMenu}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-blue-400 px-4 py-3 text-blue-400 transition hover:bg-blue-400 hover:text-white"
          >
            <Mail size={18} />
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
