
import React from 'react';
import AnimatedTransition from '@/components/AnimatedTransition';
import { motion } from 'framer-motion';
import { Clock, Video, BookOpen, Users, GraduationCap } from 'lucide-react';

const trainingTypes = [
  {
    title: "Long Term Training",
    duration: "6 months",
    description: "A 6 months intensive online and offline training classes with hands-on practice by building/converting electric vehicle.",
    icon: <Clock className="w-6 h-6" />,
    features: [
      "Comprehensive EV technology curriculum",
      "Hands-on practical sessions",
      "Real project experience",
      "Industry-recognized certification"
    ]
  },
  {
    title: "Short Term Training",
    duration: "1 month",
    description: "One month online and offline training classes on components and wire harnessing of electric vehicles.",
    icon: <Video className="w-6 h-6" />,
    features: [
      "Focused learning modules",
      "Component-level understanding",
      "Practical wire harnessing",
      "Quick certification"
    ]
  }
];

const Training: React.FC = () => {
  return (
    <AnimatedTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/lovable-uploads/411cf826-93ab-47ea-88de-de0316fa10c4.png"
              alt="Training Session"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">EV Training Programs</h1>
            <p className="text-xl max-w-2xl">
              Empowering professionals through interactive training and hands-on practice. 
              Our sessions provide practical insights, real-world applications, and in-depth learning experiences.
            </p>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {trainingTypes.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-green-100 text-green-600 rounded-full">
                        {program.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold">{program.title}</h3>
                        <p className="text-green-600">Duration: {program.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <div className="space-y-3">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Training Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl overflow-hidden shadow-md"
              >
                <img 
                  src="/lovable-uploads/68defbe1-cf26-4b86-b85e-4f79a93a0e83.png"
                  alt="Training Session"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl overflow-hidden shadow-md"
              >
                <img 
                  src="/lovable-uploads/693b80cb-fbbf-4d2f-a080-2db6d174d24c.png"
                  alt="Hands-on Training"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-xl overflow-hidden shadow-md"
              >
                <img 
                  src="/lovable-uploads/f4325d0e-3706-44fd-9ac7-52887879667a.png"
                  alt="Group Training"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </AnimatedTransition>
  );
};

export default Training;
