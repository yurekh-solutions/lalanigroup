import { useState, useEffect } from "react";
import { Menu, X, Phone, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Buyers' Guide", href: "/buyers-guide" },
  { label: "Media Room", href: "/media-room" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-warm-brown shadow-2xl py-3 border-b border-primary/30" 
          : "bg-warm-brown/98 py-4 border-b border-primary/20 shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Image */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-white shadow-lg group-hover:shadow-2xl transition-all duration-300 ring-2 ring-primary/30 group-hover:ring-primary/60 group-hover:scale-110">
              <img 
                src={logo} 
                alt="Lalani Group Logo" 
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-wider gradient-premium-text transition-all duration-300 group-hover:scale-105">
                LALANI
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-gold-accent uppercase font-semibold">
                Group
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Modern Top Bar Style */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg ${
                  location.pathname === link.href
                    ? "text-white bg-gradient-to-r from-primary to-gold-accent shadow-lg"
                    : "text-cream hover:text-white hover:bg-primary/20"
                }`}
              >
                {link.label}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="tel:02267280000"
            className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary via-gold-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            022-6728 0000
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2.5 hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-warm-brown border-t border-primary/30 shadow-2xl"
          >
            <div className="container mx-auto px-4 py-6">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                        location.pathname === link.href
                          ? "text-white bg-gradient-to-r from-primary to-gold-accent shadow-lg"
                          : "text-cream hover:text-white hover:bg-primary/30"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-4">
                  <a
                    href="tel:02267280000"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary via-gold-accent to-primary text-white font-bold text-sm shadow-xl"
                  >
                    <Phone className="w-4 h-4" />
                    022-6728 0000
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
