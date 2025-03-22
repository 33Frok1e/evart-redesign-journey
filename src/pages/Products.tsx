
import React from 'react';
import AnimatedTransition from '@/components/AnimatedTransition';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Battery, Zap, ThumbsUp, Clock, Sparkles, Leaf, Check } from 'lucide-react';

const productCategories = [
  {
    id: 1,
    title: "Motorized Weeder",
    subtitle: "Agricultural Weeding Solution",
    image: "/lovable-uploads/44f869fb-dda9-4b36-8a72-73c32e4bbbee.png",
    specs: [
      { label: "Motor Type", value: "Axial FWDC Motor" },
      { label: "Operating Voltage", value: "24V DC" },
      { label: "Power Rating", value: "250W" },
      { label: "Drive Mechanism", value: "High-efficiency gear arrangement for enhanced torque" },
      { label: "Battery Type", value: "Lithium-ion (Li-ion)" },
      { label: "Battery Capacity", value: "15Ah (as per requirement)" }
    ],
    features: [
      "Longer Operation Time - Powered by a 15Ah Li-ion battery for extended field use",
      "High Torque Output - Gear arrangement ensures smooth performance in varying soil conditions",
      "Eco-Friendly & Cost-Effective - Reduces manual labor and eliminates the need for chemical herbicides",
      "User-Friendly Design - Lightweight and ergonomically designed for ease of use"
    ],
    description: "This Electric Weeder is a compact and efficient agricultural tool designed for easy weed removal in farms and gardens. Powered by a 24V, 250W axial FWDC motor with a gear arrangement, it enhances torque for better soil penetration. The 15Ah Li-ion battery ensures long operational hours, making it ideal for sustainable farming."
  },
  {
    id: 2,
    title: "Retrofitted Electric Scooty",
    subtitle: "A New Life for Your Ride!",
    image: "/lovable-uploads/e920751c-82c8-473b-8309-2fcbafb3357c.png",
    specs: [
      { label: "Motor Type", value: "High-efficiency Electric Motor" },
      { label: "Operating Voltage", value: "48V / 60V DC (as per requirement)" },
      { label: "Power Rating", value: "1200W (as per requirement)" },
      { label: "Battery Type", value: "Lithium-ion / Lead Acid" },
      { label: "Battery Capacity", value: "26Ah (as per requirement)" },
      { label: "Top Speed", value: "35-60km/h" },
      { label: "Range per Charge", value: "65 km" }
    ],
    features: [
      "Zero Emission, High Performance",
      "Cost-Effective & Sustainable",
      "Long-Lasting Battery with Fast Charging",
      "Smooth & Silent Ride with Low Maintenance"
    ],
    description: "Upgrade your old Scooty/Pep into a powerful, eco-friendly electric vehicle with our EV retrofitting solution."
  },
  {
    id: 3,
    title: "Retrofitted Solar-Powered Agricultural Processing Unit",
    subtitle: "Sustainable | Efficient | Cost-Effective",
    image: "/lovable-uploads/027d138e-adcb-46e2-aef5-14dfbf977484.png",
    specs: [
      { label: "Power Source", value: "Solar Panel System" },
      { label: "Motor Rating", value: "High-efficiency electric motor" },
      { label: "Processing Capacity", value: "Customizable based on requirements" },
      { label: "Material", value: "Heavy-duty steel frame for durability" }
    ],
    features: [
      "Solar-Powered Operation - Reduces electricity dependency, ideal for remote areas",
      "High-Efficiency Motor - Ensures smooth and reliable processing",
      "Robust & Durable Design - Built for long-term use in tough conditions",
      "Easy to Operate & Maintain - Minimal training required for farmers",
      "Cost-Effective Solution - Saves on fuel and electricity expenses"
    ],
    description: "Designed for efficient post-harvest processing, this Solar-Powered Agricultural Processing Unit enhances productivity while promoting sustainable farming. Ideal for threshing, winnowing, and grain processing, it operates on renewable energy, reducing operational costs and environmental impact."
  },
  {
    id: 4,
    title: "Electric Vehicle (EV) Retrofittings Solution",
    subtitle: "Sustainable Mobility Transformation",
    image: "/lovable-uploads/9162a750-957f-42c8-84f9-6db7167ac203.png",
    specs: [
      { label: "Product", value: "Retrofitted Electric Car" },
      { label: "Technology", value: "Smart EV Conversion Kit" },
      { label: "Battery", value: "High-Efficiency Li-Ion Battery Pack" },
      { label: "Motor", value: "Powerful & Energy-Efficient Electric Drive" },
      { label: "Range", value: "Extended Mileage with Optimized Power Usage" },
      { label: "Charging", value: "Fast Charging Compatible" }
    ],
    features: [
      "Sustainable | Cost-Effective | Low Maintenance"
    ],
    description: "Convert your fuel car into an eco-friendly EV today! Our retrofitting solution turns conventional vehicles into modern electric cars, reducing emissions and operation costs."
  },
  {
    id: 5,
    title: "EVART ELECTRIC BICYCLE",
    subtitle: "Eco-Friendly | Cost-Effective | Smart Mobility",
    image: "/lovable-uploads/cf76778b-9be6-45e2-b968-0b6f1d3d9d62.png",
    specs: [],
    features: [
      "Battery-Powered for Extended Range",
      "Lightweight & Durable Frame"
    ],
    description: "Swap out your normal wheels for one with super power by retrofit. Our electric bicycles offer efficient, clean transportation for daily commutes."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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

const Products: React.FC = () => {
  return (
    <AnimatedTransition>
      <div className="pt-24 pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Innovative electric vehicle solutions and retrofitting services to transform conventional vehicles into eco-friendly alternatives.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {productCategories.map((product) => (
              <motion.div 
                key={product.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="lg:flex">
                  <div className="lg:w-1/3 relative">
                    <div className="h-full">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 lg:w-2/3">
                    <div className="border-b border-gray-200 pb-4 mb-4">
                      <h2 className="text-2xl font-bold text-gray-800 mb-1">{product.title}</h2>
                      <p className="text-green-600 font-medium">{product.subtitle}</p>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                    
                    {product.specs.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3">Technical Specifications:</h3>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {product.specs.map((spec, index) => (
                            <li key={index} className="flex items-start">
                              <div className="text-green-600 mr-2 mt-0.5">
                                <Battery size={16} />
                              </div>
                              <div>
                                <span className="font-medium">{spec.label}:</span> {spec.value}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {product.features.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {product.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <div className="text-green-600 mr-2 mt-0.5">
                                <Check size={16} />
                              </div>
                              <div>{feature}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default Products;
