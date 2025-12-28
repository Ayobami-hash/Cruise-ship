import imgComponent2 from "figma:asset/deaf4d40c5ed77e77ea5678b8c07cafec167aad8.png";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Reviews", href: "#" },
      { name: "Updates", href: "#" }
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Contact us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Culture", href: "#" },
      { name: "Blog", href: "#" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Safety Center", href: "#" },
      { name: "Community", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" }
    ]
  };

  return (
    <footer className="bg-[#f8f8f8] pt-16 pb-8" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img 
              src={imgComponent2} 
              alt="Cordelia Cruise" 
              className="h-12 w-auto mb-6"
            />
            <p className="text-[rgba(25,24,37,0.75)] mb-6">
              Experience the journey of a lifetime with Cordelia Cruises. Discover new destinations, create unforgettable memories.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#93288e] flex-shrink-0 mt-1" size={18} />
                <span className="text-[rgba(25,24,37,0.75)] text-sm">
                  123 Harbor Drive, Marina Bay, Singapore
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#93288e] flex-shrink-0" size={18} />
                <span className="text-[rgba(25,24,37,0.75)] text-sm">
                  +1 (800) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#93288e] flex-shrink-0" size={18} />
                <span className="text-[rgba(25,24,37,0.75)] text-sm">
                  info@cordeliacruises.com
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#93288e] hover:text-white transition-colors text-[#93288e]"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#93288e] hover:text-white transition-colors text-[#93288e]"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#93288e] hover:text-white transition-colors text-[#93288e]"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#93288e] hover:text-white transition-colors text-[#93288e]"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-[#222] mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[rgba(25,24,37,0.75)] hover:text-[#93288e] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-[#222] mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[rgba(25,24,37,0.75)] hover:text-[#93288e] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal Links */}
          <div>
            <h3 className="text-[#222] mb-4">Support</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[rgba(25,24,37,0.75)] hover:text-[#93288e] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h3 className="text-[#222] mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[rgba(25,24,37,0.75)] hover:text-[#93288e] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[rgba(25,24,37,0.75)] text-sm text-center md:text-left">
              © {currentYear} Cordelia Cruises. All rights reserved.
            </p>
            <p className="text-[rgba(25,24,37,0.75)] text-sm text-center md:text-right">
              Made with ❤️ by Figma Make
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
