
import React from 'react';
import AnimatedTransition from '@/components/AnimatedTransition';
import { motion } from 'framer-motion';
import { Check, Battery, Zap, Settings, Tool, Lightning } from 'lucide-react';

const serviceTypes = [
  {
    id: 1,
    title: "Battery Servicing",
    description: "All types of Battery (Lithium-ion, Lithium Iron Phosphate, Lead acid, EMF, etc) are being repaired.",
    image: "/lovable-uploads/3abfcca9-9c55-4221-a361-4ea02a142e36.png",
    icon: <Battery className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Charger Servicing",
    description: "All types of Charger (Lithium-ion, Lithium Iron Phosphate, Lead acid, EMF, etc) are being repaired.",
    image: "/lovable-uploads/15cfda5f-98d0-499a-8b86-444de87d6870.png",
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Controller Servicing",
    description: "All types of Controller (E-Rickshaw, E-Scooter, E-Cycle, etc) are being repaired.",
    image: "/lovable-uploads/554a7b4c-3656-4577-afc2-79d0e5feb97c.png",
    icon: <Settings className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Electric Motor Servicing & Repair",
    description: "We provide expert electric motor servicing and repair to ensure optimal performance and longevity. Our team specializes in diagnosing, maintaining, and refurbishing BLDC and hub motors used in electric vehicles.",
    image: "/lovable-uploads/7becadb7-b958-4721-a73e-b9415ecc87ea.png",
    icon: <Tool className="w-6 h-6" />
  },
  {
    id: 5,
    title: "A-Z Solutions of Electric Vehicle",
    description: "All types of services for Electric Vehicles - comprehensive maintenance and repair solutions.",
    image: "/lovable-uploads/3ef53618-46ad-42ca-b5f5-8fa440fd1c0d.png",
    icon: <Lightning className="w-6 h-6" />
  },
];

const detailedServices = [
  {
    id: 1,
    title: "LI-ION BATTERY SERVICING & CELL REPLACEMENT",
    subtitle: "Precision | Efficiency | Reliability",
    image: "/lovable-uploads/b354591a-99a4-4752-8da8-a7f484a107b3.png",
    description: "We specialize in Li-Ion Battery Servicing, including cell replacement and repair using advanced spot welding technology. Our expert technicians ensure seamless integration of new cells, restoring battery life and performance for EVs, solar applications, and energy storage systems.",
    features: [
      "Spot Welding For Strong & Reliable Connections",
      "High-Quality Cell Replacement & Balancing",
      "Enhanced Battery Performance & Longevity",
      "Custom Battery Pack Assembly Available"
    ]
  },
  {
    id: 2,
    title: "Electric Motor Servicing & Repair",
    subtitle: "Expert Maintenance & Optimization",
    image: "/lovable-uploads/a0d1cb66-4522-4752-82ed-9f2b71080d86.png",
    description: "We provide expert electric motor servicing and repair to ensure optimal performance and longevity. Our team specializes in diagnosing, maintaining, and refurbishing BLDC and hub motors used in electric vehicles. We conduct coil rewinding, bearing replacement, insulation testing, and performance optimization to enhance efficiency and reliability. Regular servicing helps prevent failure, reduces downtime, and extends the lifespan of motors, ensuring smooth and cost-effective EV operations. Trust EVART for precision servicing and sustainable mobility solutions!",
    features: []
  },
];

const beforeAfterExamples = [
  {
    id: 1,
    title: "Scooter Restoration",
    beforeImage: "/lovable-uploads/584fd566-541f-49a2-b2dd-4afa8239a383.png",
    afterImage: "/lovable-uploads/891c26f5-0c14-4e46-a727-6657777872c1.png"
  },
  {
    id: 2,
    title: "Motor Repair",
    image: "/lovable-uploads/f870ea7d-8dca-4854-ab72-c871342fcf40.png"
  },
  {
    id: 3,
    title: "Scooter Repair",
    image: "/lovable-uploads/98facda5-d0c3-495a-acf2-be4536504f1b.png"
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

const Services: React.FC = () => {
  return (
    <AnimatedTransition>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive electric vehicle servicing, repair, and maintenance solutions to keep your green mobility options running efficiently.
            </p>
          </div>

          {/* Service Categories */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {serviceTypes.map((service) => (
              <motion.div 
                key={service.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-52 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-green-100 rounded-full text-green-600 mr-3">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Services */}
          <div className="space-y-12 mb-16">
            {detailedServices.map((service) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
                      <p className="text-green-600 font-medium">{service.subtitle}</p>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    {service.features.length > 0 && (
                      <div>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <div className="text-green-600 mr-2 mt-0.5">
                                <Check size={18} />
                              </div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Before-After Examples */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Our Restoration Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-2 space-y-2">
                  <div className="aspect-w-16 aspect-h-12">
                    <img 
                      src="/lovable-uploads/584fd566-541f-49a2-b2dd-4afa8239a383.png" 
                      alt="Before"
                      className="w-full h-48 object-cover rounded"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="px-3 py-1 bg-black/70 text-white font-bold rounded">BEFORE</span>
                    </div>
                  </div>
                  <div className="aspect-w-16 aspect-h-12">
                    <img 
                      src="/lovable-uploads/891c26f5-0c14-4e46-a727-6657777872c1.png" 
                      alt="After"
                      className="w-full h-48 object-cover rounded"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="px-3 py-1 bg-green-600/70 text-white font-bold rounded">AFTER</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center">Scooter Restoration</h3>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-2">
                  <img 
                    src="/lovable-uploads/f870ea7d-8dca-4854-ab72-c871342fcf40.png" 
                    alt="Motor Repair"
                    className="w-full h-80 object-cover rounded"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center">Motor Rewinding</h3>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-2">
                  <img 
                    src="/lovable-uploads/98facda5-d0c3-495a-acf2-be4536504f1b.png" 
                    alt="Scooter Repair"
                    className="w-full h-80 object-cover rounded"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center">Scooter Repair</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default Services;
