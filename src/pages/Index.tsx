
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedTransition from '@/components/AnimatedTransition';
import { ArrowRight, Battery, Zap, Tool, Leaf, Cpu, Wrench } from 'lucide-react';

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Index: React.FC = () => {
  return (
    <AnimatedTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-white/90"></div>
          <img
            src="/lovable-uploads/b0840deb-06f5-4404-b751-ed247a7437bb.png"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left"
              variants={heroVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                variants={itemVariants}
              >
                EVART Engineering and Automobile LLP
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                Drive with Green Energy by Empowering Technology, Environment and Society.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <Link
                  to="/products"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Explore Our Products
                </Link>
                
                <Link
                  to="/services"
                  className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-8 py-3 rounded-full font-medium transition-all duration-300"
                >
                  Our Services
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-green-300/30 to-blue-500/30 blur"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative rounded-2xl bg-white shadow-2xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/b0840deb-06f5-4404-b751-ed247a7437bb.png" 
                    alt="Electric Bike"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Innovative EV solutions to transform conventional vehicles into eco-friendly alternatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="p-3 bg-green-100 text-green-600 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Battery className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">E-Bicycle</h3>
                <p className="text-gray-600 mb-5 flex-grow">Swap out your normal wheels for one with super power by retrofit.</p>
                <Link
                  to="/products"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="p-3 bg-green-100 text-green-600 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">E-Tricycle</h3>
                <p className="text-gray-600 mb-5 flex-grow">Swap out your normal wheels for one with super power by retrofit.</p>
                <Link
                  to="/products"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="p-3 bg-green-100 text-green-600 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">E-Bike/E-Scooty</h3>
                <p className="text-gray-600 mb-5 flex-grow">Swap out your normal wheels for one with super power by retrofit.</p>
                <Link
                  to="/products"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="p-3 bg-green-100 text-green-600 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Handicap E-Cycle</h3>
                <p className="text-gray-600 mb-5 flex-grow">Swap out your normal wheels for one with super power by retrofit.</p>
                <Link
                  to="/products"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-full font-medium transition-all duration-300"
            >
              <span>View All Products</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our most popular electric vehicle solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img 
                  src="/lovable-uploads/cf76778b-9be6-45e2-b968-0b6f1d3d9d62.png" 
                  alt="Electric Bicycle"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-green-600 bg-green-100 px-2 py-1 rounded-full">Electric Mobility</span>
                <h3 className="text-xl font-bold mt-2 mb-2">EVART Electric Bicycle</h3>
                <p className="text-gray-600 mb-4">Battery-powered bicycle for extended range and eco-friendly transportation.</p>
                <Link
                  to="/products"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  <span>View details</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img 
                  src="/lovable-uploads/e920751c-82c8-473b-8309-2fcbafb3357c.png" 
                  alt="Electric Scooty"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-green-600 bg-green-100 px-2 py-1 rounded-full">Retrofitting</span>
                <h3 className="text-xl font-bold mt-2 mb-2">Retrofitted Electric Scooty</h3>
                <p className="text-gray-600 mb-4">Convert your conventional scooter into a powerful, eco-friendly electric vehicle.</p>
                <Link
                  to="/products"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  <span>View details</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden group"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img 
                  src="/lovable-uploads/9162a750-957f-42c8-84f9-6db7167ac203.png" 
                  alt="Electric Car"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-green-600 bg-green-100 px-2 py-1 rounded-full">Car Conversion</span>
                <h3 className="text-xl font-bold mt-2 mb-2">Electric Car Retrofitting</h3>
                <p className="text-gray-600 mb-4">Transform your conventional car into an efficient electric vehicle with our retrofit solution.</p>
                <Link
                  to="/products"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  <span>View details</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive electric vehicle servicing, repair, and maintenance solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md flex flex-col h-full hover:shadow-lg transition-all duration-300">
              <div className="mb-4 text-green-600">
                <Battery className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Battery Servicing</h3>
              <p className="text-gray-600">All types of Battery (Lithium-ion, Lithium Iron Phosphate, Lead acid, etc) are being repaired.</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-md flex flex-col h-full hover:shadow-lg transition-all duration-300">
              <div className="mb-4 text-green-600">
                <Zap className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Charger Servicing</h3>
              <p className="text-gray-600">All types of Charger (Lithium-ion, Lithium Iron Phosphate, Lead acid, etc) are being repaired.</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-md flex flex-col h-full hover:shadow-lg transition-all duration-300">
              <div className="mb-4 text-green-600">
                <Cpu className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Controller Servicing</h3>
              <p className="text-gray-600">All types of Controller (E-Rickshaw, E-Scooter, E-Cycle, etc) are being repaired.</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-md flex flex-col h-full hover:shadow-lg transition-all duration-300">
              <div className="mb-4 text-green-600">
                <Tool className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Complete EV Solutions</h3>
              <p className="text-gray-600">All types of services for Electric Vehicles - comprehensive maintenance and repair solutions.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-full font-medium transition-all duration-300"
            >
              <span>View All Services</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Go Electric?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Whether you need a new electric vehicle, want to retrofit your existing ride, or require maintenance for your EV, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/products"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatedTransition>
  );
};

export default Index;
