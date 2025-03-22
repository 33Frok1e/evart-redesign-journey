
import React from 'react';
import AnimatedTransition from '@/components/AnimatedTransition';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, BookOpen } from 'lucide-react';

const Training: React.FC = () => {
  return (
    <AnimatedTransition>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Training Programs</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hands-on training for students of technical schools and colleges with real-time projects.
            </p>
          </div>

          {/* Hero Section */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="/lovable-uploads/b0840deb-06f5-4404-b751-ed247a7437bb.png" 
                  alt="Training Session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">EV Technical Training</h2>
                <p className="text-gray-600 mb-6">
                  EVART provides comprehensive training on electric vehicle technology, repair, and maintenance. Our hands-on approach ensures students gain practical knowledge and real-world skills needed in the growing EV industry.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full text-green-600 mr-3">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Practical Learning</h3>
                      <p className="text-sm text-gray-600">Hands-on projects and real-world applications</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full text-green-600 mr-3">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Expert Instructors</h3>
                      <p className="text-sm text-gray-600">Learn from industry professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Training Programs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Training Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Battery className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Battery Technology</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive training on Li-ion, LiFePO4, and Lead Acid battery servicing, repair, and pack building.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Cell testing and replacement
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Spot welding techniques
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      BMS configuration
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">EV Retrofitting</h3>
                  <p className="text-gray-600 mb-4">
                    Hands-on training for converting conventional vehicles to electric power.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Motor selection and installation
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Controller configuration
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Battery system integration
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Settings className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Motor & Controller Repair</h3>
                  <p className="text-gray-600 mb-4">
                    In-depth training on diagnosing and repairing electric motors and controllers.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      BLDC motor maintenance
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Controller troubleshooting
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Rewinding techniques
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <p className="text-gray-600 italic mb-4">
                    "Got an excellent training for our students on repairing of a solar operated electric cycle."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold">Asst. Prof. Biswajit Mohapatra</h4>
                      <p className="text-sm text-gray-600">Einstein Academy Of Technology And Management</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-500 text-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <p className="italic mb-4">
                    "I found training provided by EVART to all my students are really commendable."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold">Prof. Sameer Mohanty</h4>
                      <p className="text-sm opacity-80">Ideal School Of Engineering</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <p className="text-gray-600 italic mb-4">
                    "Great service. I highly recommend if any one needs repairing of their Electric Vehicles !!"
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold">Owner</h4>
                      <p className="text-sm text-gray-600">Usha EV Patjil</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Partner Institutions */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-center">Our Partner Institutions</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <img src="/lovable-uploads/7d3e41f0-6d66-40a7-8b97-35451283f552.png" alt="Einstein Academy" className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="/lovable-uploads/a0a8a9ba-4260-468c-8d18-24bf72436def.png" alt="Ideal School of Engineering" className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="/lovable-uploads/6cd1f315-7890-4d75-af76-2541228e427b.png" alt="Usha EV" className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default Training;

// Helper components
const Battery = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="18" height="12" rx="2" />
    <line x1="23" y1="13" x2="23" y2="11" />
  </svg>
);

const Zap = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const Settings = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
