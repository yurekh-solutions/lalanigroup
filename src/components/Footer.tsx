import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-warm-brown border-t border-primary/20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container-max section-padding !py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand with Logo */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 ring-2 ring-primary/20 group-hover:ring-primary/40">
                <img 
                  src={logo} 
                  alt="Lalani Group Logo" 
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-2xl font-bold gradient-premium-text">LALANI</span>
                <span className="text-[10px] tracking-[0.35em] text-gold-light uppercase font-semibold">Group</span>
              </div>
            </Link>
            <p className="font-body text-sm text-cream leading-relaxed mb-4">
              Building trust since 1985. One of Mumbai's leading construction companies delivering quality homes
              and commercial spaces.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/lalanigroup/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-gold-light" />
              </a>
              <a href="https://www.instagram.com/lalanigroup/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-gold-light" />
              </a>
              <a href="https://www.youtube.com/channel/UC5NG_QT27lb62g6uHI-s0wQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl" aria-label="YouTube">
                <Youtube className="w-5 h-5 text-gold-light" />
              </a>
              <a href="https://www.linkedin.com/company/lalani-group" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-gold-light" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold gradient-gold-text mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-gold-accent rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Projects", path: "/projects" },
                { label: "Buyers' Guide", path: "/buyers-guide" },
                { label: "Media Room", path: "/media-room" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-cream hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-heading text-lg font-bold gradient-gold-text mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-gold-accent rounded-full"></span>
              Our Projects
            </h4>
            <ul className="space-y-2">
              {["Lalani Goodwill", "Lalani Business Park", "Velentine Apartment", "Heritage Park", "Lalani Grandeur", "Dream Residency"].map((p) => (
                <li key={p}>
                  <span className="font-body text-sm text-cream">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold gradient-gold-text mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-gold-accent rounded-full"></span>
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-light mt-0.5 shrink-0" />
                <p className="font-body text-sm text-cream">
                  7th Floor, Lalani Aura, 34th Road, Khar (W), Mumbai - 400052
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-light shrink-0" />
                <a href="tel:02267280000" className="font-body text-sm text-cream hover:text-gold-light">
                  022-6728 0000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-light shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@lalanigroup.in" className="font-body text-sm text-cream hover:text-gold-light">
                    info@lalanigroup.in
                  </a>
                  <a href="mailto:sales@lalanigroup.in" className="font-body text-sm text-cream hover:text-gold-light">
                    sales@lalanigroup.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gold-light/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-cream">
              © {new Date().getFullYear()} Lalani Group. All Rights Reserved.
            </p>
            <p className="font-body text-xs text-cream">
              MAHA RERA website:{" "}
              <a
                href="https://maharera.mahaonline.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-light hover:text-gold-accent"
              >
                www.maharera.mahaonline.gov.in
              </a>
            </p>
          </div>
          
          {/* Developer Credit */}
          <div className="mt-6 text-center">
            <div className="inline-block bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
              <p className="font-body text-sm text-cream">
                Developed & Designed by{" "}
                <a
                  href="https://yurekh.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-light font-bold hover:text-gold-accent inline-block transition-colors"
                >
                  YS
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
