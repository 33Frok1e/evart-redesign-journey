
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-heading font-bold text-foreground"
        >
          EV-ART
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors duration-300 link-effect",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground/80 hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-foreground focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 bg-white/95 backdrop-blur-lg transition-all duration-300 ease-in-out shadow-md overflow-hidden",
          isMobileMenuOpen ? "top-[60px] max-h-screen" : "top-[60px] max-h-0"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "py-2 text-base font-medium transition-colors duration-300",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/80 hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
