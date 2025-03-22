
import React from 'react';
import AnimatedTransition from '@/components/AnimatedTransition';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart } from 'lucide-react';

// Placeholder images - replace with your actual images
const aboutImage = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop';
const teamImage1 = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop';
const teamImage2 = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop';
const teamImage3 = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1374&auto=format&fit=crop';

const values = [
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: 'Excellence',
    description: 'We strive for excellence in every project we undertake, ensuring the highest quality in our work.'
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Collaboration',
    description: 'We believe in the power of collaboration and work closely with our clients to achieve their vision.'
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: 'Passion',
    description: 'Our passion for creativity drives us to push boundaries and create meaningful experiences.'
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: 'Commitment',
    description: 'We are committed to delivering projects on time and exceeding our clients\' expectations.'
  }
];

const team = [
  {
    name: 'Jane Cooper',
    role: 'Creative Director',
    image: teamImage1,
    bio: 'Jane brings over 15 years of creative experience, guiding our artistic vision with passion and expertise.'
  },
  {
    name: 'John Smith',
    role: 'Lead Designer',
    image: teamImage2,
    bio: 'John specializes in user-centered design and has crafted experiences for global brands.'
  },
  {
    name: 'Emily Davis',
    role: 'Art Director',
    image: teamImage3,
    bio: 'Emily blends traditional art techniques with digital innovation to create unique visual identities.'
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

const About: React.FC = () => {
  return (
    <AnimatedTransition>
      <div className="page-container">
        <h1 className="page-title">About Us</h1>
        <p className="page-description">
          Learn more about our creative studio, our story, values, and the team behind our work.
        </p>
        
        {/* Our Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2010, EV-ART began as a small creative studio with a passion for design and a vision to create meaningful experiences. Over the years, we have grown into a team of dedicated professionals committed to excellence in every project we undertake.
                </p>
                <p>
                  Our journey has been one of continuous learning, innovation, and growth. We've had the privilege of working with clients across various industries, helping them bring their visions to life through thoughtful and strategic design solutions.
                </p>
                <p>
                  Today, we continue to push the boundaries of creativity, embracing new technologies and design approaches to deliver exceptional results for our clients. Our commitment to quality, innovation, and client satisfaction remains at the heart of everything we do.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative"
            >
              <motion.div 
                className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/30 to-blue-500/30 blur-md"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={aboutImage} 
                  alt="Our Studio"
                  className="w-full h-auto object-cover shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core principles guide our work and define who we are as a creative studio.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="card-glass p-6 text-center"
                variants={itemVariants}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        {/* Our Team Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The talented individuals behind our creative work, bringing expertise and passion to every project.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="card-glass overflow-hidden"
                variants={itemVariants}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </AnimatedTransition>
  );
};

export default About;
