
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc
}) => {
  
  const containerVariants = {
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
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-200/30 blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-indigo-100/40 blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0] 
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
            
            {(ctaText || secondaryCtaText) && (
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                variants={itemVariants}
              >
                {ctaText && ctaLink && (
                  <Link
                    to={ctaLink}
                    className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {ctaText}
                  </Link>
                )}
                
                {secondaryCtaText && secondaryCtaLink && (
                  <Link
                    to={secondaryCtaLink}
                    className="button-glass text-foreground"
                  >
                    {secondaryCtaText}
                  </Link>
                )}
              </motion.div>
            )}
          </motion.div>
          
          {imageSrc && (
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/30 to-indigo-500/30 blur"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
                  <img 
                    src={imageSrc} 
                    alt="Hero"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
