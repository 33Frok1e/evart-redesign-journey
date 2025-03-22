
import React from 'react';
import AnimatedTransition from '@/components/AnimatedTransition';
import { motion } from 'framer-motion';
import { Palette, Code, PenTool, Lightbulb, Users, Image, Camera, Film, Layout, Package, Briefcase, Mail } from 'lucide-react';

// Service categories with their respective services
const serviceCategories = [
  {
    title: 'Design',
    description: 'Creative design solutions tailored to your unique needs.',
    icon: <Palette className="w-12 h-12 text-primary" />,
    services: [
      {
        title: 'UI/UX Design',
        description: 'Creating intuitive and engaging user interfaces that provide exceptional user experiences.',
        icon: <Layout className="w-6 h-6 text-primary" />
      },
      {
        title: 'Web Design',
        description: 'Beautiful, functional websites designed to captivate your audience and achieve your goals.',
        icon: <Code className="w-6 h-6 text-primary" />
      },
      {
        title: 'Brand Identity',
        description: 'Comprehensive brand identity development to establish a strong and consistent brand presence.',
        icon: <Briefcase className="w-6 h-6 text-primary" />
      }
    ]
  },
  {
    title: 'Creative',
    description: 'Bringing your ideas to life through creative execution.',
    icon: <PenTool className="w-12 h-12 text-primary" />,
    services: [
      {
        title: 'Illustration',
        description: 'Custom illustrations to enhance your brand storytelling and visual communication.',
        icon: <PenTool className="w-6 h-6 text-primary" />
      },
      {
        title: 'Photography',
        description: 'Professional photography services to capture and showcase your products or services.',
        icon: <Camera className="w-6 h-6 text-primary" />
      },
      {
        title: 'Video Production',
        description: 'Engaging video content that communicates your message effectively.',
        icon: <Film className="w-6 h-6 text-primary" />
      }
    ]
  },
  {
    title: 'Strategy',
    description: 'Strategic planning to ensure your creative vision achieves its goals.',
    icon: <Lightbulb className="w-12 h-12 text-primary" />,
    services: [
      {
        title: 'Brand Strategy',
        description: 'Developing strategic brand frameworks that align with your business objectives.',
        icon: <Lightbulb className="w-6 h-6 text-primary" />
      },
      {
        title: 'Marketing Strategy',
        description: 'Comprehensive marketing strategies to reach and engage your target audience.',
        icon: <Users className="w-6 h-6 text-primary" />
      },
      {
        title: 'Content Strategy',
        description: 'Strategic content planning to support your marketing and communication goals.',
        icon: <Mail className="w-6 h-6 text-primary" />
      }
    ]
  },
  {
    title: 'Production',
    description: 'Bringing designs to life through skilled production and implementation.',
    icon: <Package className="w-12 h-12 text-primary" />,
    services: [
      {
        title: 'Web Development',
        description: 'Turning designs into fully functional websites with smooth user experiences.',
        icon: <Code className="w-6 h-6 text-primary" />
      },
      {
        title: 'Print Production',
        description: 'High-quality print production services for your marketing materials.',
        icon: <Image className="w-6 h-6 text-primary" />
      },
      {
        title: 'Packaging Production',
        description: 'From concept to finished product, we handle all aspects of packaging production.',
        icon: <Package className="w-6 h-6 text-primary" />
      }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      <div className="page-container">
        <h1 className="page-title">Our Services</h1>
        <p className="page-description">
          We offer a comprehensive range of creative services to help bring your vision to life.
        </p>
        
        {/* Service Categories */}
        <motion.div 
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {serviceCategories.map((category, index) => (
            <motion.section key={index} variants={itemVariants}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                <div className="lg:sticky lg:top-24">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-heading font-bold mb-4">{category.title}</h2>
                  <p className="text-muted-foreground max-w-md">
                    {category.description}
                  </p>
                </div>
                
                <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex}
                      className="card-glass p-6 h-full"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </motion.div>
        
        {/* Process Section */}
        <motion.section 
          className="mt-20 py-16 bg-secondary/50 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">Our Process</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We follow a systematic approach to ensure that every project meets our high standards of quality and exceeds client expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '01', title: 'Discovery', description: 'We begin by understanding your goals, audience, and requirements.' },
                { number: '02', title: 'Strategy', description: 'We develop a strategic plan to achieve your objectives efficiently.' },
                { number: '03', title: 'Creation', description: 'Our team brings the vision to life through creative execution.' },
                { number: '04', title: 'Delivery', description: 'We refine, finalize, and deliver the completed project on time.' }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-5xl font-heading font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 right-0 transform translate-x-1/2">
                      <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z" fill="currentColor" className="text-primary/20" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </AnimatedTransition>
  );
};

export default Services;
