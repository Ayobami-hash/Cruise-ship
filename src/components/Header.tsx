import imgComponent2 from "figma:asset/deaf4d40c5ed77e77ea5678b8c07cafec167aad8.png";
import { Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onLogout?: () => void;
}

export function Header({ onLogout }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={imgComponent2} 
              alt="Cordelia Cruise" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-[#222] hover:text-[#93288e] transition-colors">
              Home
            </a>
            <a href="#destinations" className="text-[#222] hover:text-[#93288e] transition-colors">
              Destinations
            </a>
            <a href="#cruises" className="text-[#222] hover:text-[#93288e] transition-colors">
              Cruises
            </a>
            <a href="#gallery" className="text-[#222] hover:text-[#93288e] transition-colors">
              Gallery
            </a>
            <a href="#reviews" className="text-[#222] hover:text-[#93288e] transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-[#222] hover:text-[#93288e] transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="bg-[#93288e] text-white px-6 py-2.5 rounded-full hover:bg-[#7a2077] transition-colors">
              Book Now
            </button>
            {onLogout && (
              <button 
                onClick={onLogout}
                className="flex items-center gap-2 text-[#222] hover:text-[#93288e] transition-colors px-4 py-2.5 border border-gray-300 rounded-full hover:border-[#93288e]"
                title="Logout"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#222]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-[#222] hover:text-[#93288e] transition-colors">
                Home
              </a>
              <a href="#destinations" className="text-[#222] hover:text-[#93288e] transition-colors">
                Destinations
              </a>
              <a href="#cruises" className="text-[#222] hover:text-[#93288e] transition-colors">
                Cruises
              </a>
              <a href="#gallery" className="text-[#222] hover:text-[#93288e] transition-colors">
                Gallery
              </a>
              <a href="#reviews" className="text-[#222] hover:text-[#93288e] transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-[#222] hover:text-[#93288e] transition-colors">
                Contact
              </a>
              <button className="bg-[#93288e] text-white px-6 py-2.5 rounded-full hover:bg-[#7a2077] transition-colors text-center">
                Book Now
              </button>
              {onLogout && (
                <button 
                  onClick={onLogout}
                  className="flex items-center justify-center gap-2 text-[#222] hover:text-[#93288e] transition-colors px-6 py-2.5 border border-gray-300 rounded-full hover:border-[#93288e]"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}