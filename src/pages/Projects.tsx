
import React, { useState } from 'react';
import AnimatedTransition from '@/components/AnimatedTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Placeholder project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'Modern Art Gallery',
    category: 'Web Design',
    description: 'A modern and minimalist website design for an art gallery, featuring an intuitive user interface and seamless navigation.',
    image: 'https://images.unsplash.com/photo-1552669722-2c7b7c09ef5a?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Minimalist Brand Identity',
    category: 'Branding',
    description: 'A clean and minimalist brand identity design for a luxury fashion brand, including logo, color palette, and brand guidelines.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Creative Photography',
    category: 'Photography',
    description: 'A creative photography project showcasing the beauty of everyday objects through unique perspectives and lighting techniques.',
    image: 'https://images.unsplash.com/photo-1593073862407-a3ce22748763?q=80&w=2574&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Product Packaging',
    category: 'Packaging',
    description: 'Innovative packaging design for a sustainable product line, combining aesthetics with environmental responsibility.',
    image: 'https://images.unsplash.com/photo-1628921919890-6d79dc5592c1?q=80&w=2574&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Mobile App Design',
    category: 'UI/UX',
    description: 'User-centered design for a mobile application, focusing on intuitive navigation and seamless user experience.',
    image: 'https://images.unsplash.com/photo-1543967993-5b4f5a20322e?q=80&w=2583&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Editorial Illustration',
    category: 'Illustration',
    description: 'A series of illustrations created for an editorial feature in a leading design magazine.',
    image: 'https://images.unsplash.com/photo-1618543001425-ad304ea87143?q=80&w=2574&auto=format&fit=crop'
  }
];

// Categories for filtering
const categories = ['All', 'Web Design', 'Branding', 'Photography', 'Packaging', 'UI/UX', 'Illustration'];

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

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <AnimatedTransition>
      <div className="page-container">
        <h1 className="page-title">Our Projects</h1>
        <p className="page-description">
          Explore our portfolio of creative work across various disciplines and industries.
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-secondary/80 text-foreground/70 hover:bg-secondary/90'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="card-glass overflow-hidden group"
                variants={itemVariants}
                layout
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-primary/90 uppercase font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    <span>View Project</span>
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </AnimatedTransition>
  );
};

export default Projects;
