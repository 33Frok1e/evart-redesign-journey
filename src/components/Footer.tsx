
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-green-600">EVART</h2>
            <p className="text-gray-600">
              Drive with Green Energy by Empowering Technology, Environment and Society.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="mailto:evarteng.auto@gmail.com" 
                className="text-gray-600 hover:text-green-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors">Home</Link>
              <Link to="/products" className="text-gray-600 hover:text-green-600 transition-colors">Products</Link>
              <Link to="/services" className="text-gray-600 hover:text-green-600 transition-colors">Services</Link>
              <Link to="/training" className="text-gray-600 hover:text-green-600 transition-colors">Training</Link>
              <Link to="/about" className="text-gray-600 hover:text-green-600 transition-colors">About Us</Link>
              <Link to="/contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact Us</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <address className="not-italic text-gray-600 space-y-2">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-green-600" />
                <p>PLOT NO: 380/1837, AT: SUDARSAN VIHAR, JASUAPUR, BHUBANESWAR PIN-752100, ODISHA</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-green-600" />
                <p>+91-8249933964, 7978541707, 9861107123</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-green-600" />
                <p>evarteng.auto@gmail.com</p>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} EVART Engineering and Automobile LLP. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-green-600 transition-colors mt-4 md:mt-0"
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
