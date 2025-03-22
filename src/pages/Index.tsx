
import React from 'react';
import Hero from '@/components/Hero';
import AnimatedTransition from '@/components/AnimatedTransition';
import { ArrowRight, Palette, Code, PenTool, Lightbulb, Users, Image } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Placeholder for a demo image - replace with your actual image
const heroImage = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop';

const services = [
  {
    icon: <Palette className="w-10 h-10 text-primary" />,
    title: 'Creative Design',
    description: 'Unique and innovative design solutions tailored to your specific needs.',
    link: '/services'
  },
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: 'Development',
    description: 'Transforming designs into functional and responsive digital experiences.',
    link: '/services'
  },
  {
    icon: <PenTool className="w-10 h-10 text-primary" />,
    title: 'Illustration',
    description: 'Custom illustrations to bring your ideas and concepts to life.',
    link: '/services'
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-primary" />,
    title: 'Strategy',
    description: 'Strategic planning to ensure your creative vision achieves its goals.',
    link: '/services'
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: 'Consultation',
    description: 'Expert advice to guide your creative projects from concept to completion.',
    link: '/services'
  },
  {
    icon: <Image className="w-10 h-10 text-primary" />,
    title: 'Photography',
    description: 'Professional photography services to capture your vision.',
    link: '/services'
  }
];

const projects = [
  {
    id: 1,
    title: 'Modern Art Gallery',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1552669722-2c7b7c09ef5a?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Minimalist Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Creative Photography',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1593073862407-a3ce22748763?q=80&w=2574&auto=format&fit=crop'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      <Hero 
        title="Bringing Creative Vision to Life"
        subtitle="We blend artistry with innovation to create meaningful experiences that inspire and connect."
        ctaText="Explore Our Work"
        ctaLink="/projects"
        secondaryCtaText="Get in Touch"
        secondaryCtaLink="/contact"
        imageSrc={heroImage}
      />
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a wide range of creative services tailored to meet your unique needs and vision.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="card-glass p-8 flex flex-col h-full"
                variants={itemVariants}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-5 flex-grow">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium mt-auto"
                >
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="button-glass inline-flex items-center text-foreground"
            >
              <span>View All Services</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our latest works and see how we bring creative visions to life.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                className="overflow-hidden rounded-lg shadow-md hover-scale"
                variants={itemVariants}
              >
                <Link to={`/projects/${project.id}`} className="block relative group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="text-xs text-primary/90 uppercase font-medium mb-2">{project.category}</div>
                      <h3 className="text-xl text-white font-semibold">{project.title}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="button-glass inline-flex items-center text-foreground"
            >
              <span>View All Projects</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-blue-400/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's collaborate to bring your creative vision to life. Contact us today to discuss your project.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </AnimatedTransition>
  );
};

export default Index;
