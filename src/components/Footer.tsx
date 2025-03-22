
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-heading font-bold">EV-ART</h2>
            <p className="text-muted-foreground">
              Creating meaningful art and design experiences that inspire and connect.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="mailto:contact@ev-art.in" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">About</Link>
              <Link to="/projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</Link>
              <Link to="/services" className="text-foreground/70 hover:text-primary transition-colors">Services</Link>
              <Link to="/blog" className="text-foreground/70 hover:text-primary transition-colors">Blog</Link>
              <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>123 Art Street</p>
              <p>Creative District</p>
              <p>Design City, 12345</p>
              <p>Phone: +123 456 7890</p>
              <p>Email: contact@ev-art.in</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} EV-ART. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-sm text-foreground/70 hover:text-primary transition-colors mt-4 md:mt-0"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
