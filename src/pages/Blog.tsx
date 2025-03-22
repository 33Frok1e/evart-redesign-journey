
import React, { useState } from 'react';
import AnimatedTransition from '@/components/AnimatedTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Tag } from 'lucide-react';

// Placeholder blog data - replace with your actual blog content
const blogPosts = [
  {
    id: 1,
    title: 'The Importance of Typography in Design',
    excerpt: "Typography is more than just selecting fonts; it's about creating a visual hierarchy, enhancing readability, and conveying the right emotions.",
    date: 'May 15, 2023',
    author: 'Jane Cooper',
    category: 'Design',
    tags: ['Typography', 'Design Principles', 'Visual Hierarchy'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2568&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Sustainable Design Practices for the Future',
    excerpt: 'As designers, we have a responsibility to consider the environmental impact of our work and adopt sustainable design practices.',
    date: 'April 28, 2023',
    author: 'John Smith',
    category: 'Sustainability',
    tags: ['Sustainability', 'Eco-Friendly Design', 'Future Trends'],
    image: 'https://images.unsplash.com/photo-1610133136895-5e18ad8bf267?q=80&w=2574&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'The Evolution of Web Design: Past, Present, and Future',
    excerpt: "From the early days of static HTML pages to today's interactive experiences, web design has come a long way and continues to evolve.",
    date: 'March 10, 2023',
    author: 'Emily Davis',
    category: 'Web Design',
    tags: ['Web Design', 'Design History', 'Future of Design'],
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'The Psychology of Color in Branding',
    excerpt: 'Colors evoke emotions and associations that can significantly impact how consumers perceive and interact with your brand.',
    date: 'February 22, 2023',
    author: 'Jane Cooper',
    category: 'Branding',
    tags: ['Color Theory', 'Branding', 'Psychology'],
    image: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Minimalism in Design: Less is More',
    excerpt: 'Minimalist design focuses on simplicity and removing unnecessary elements to create clean, focused, and effective designs.',
    date: 'January 15, 2023',
    author: 'John Smith',
    category: 'Design',
    tags: ['Minimalism', 'Design Principles', 'Simplicity'],
    image: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'The Role of AI in Creative Design',
    excerpt: 'Artificial intelligence is transforming the creative industry, offering new tools and possibilities for designers.',
    date: 'December 5, 2022',
    author: 'Emily Davis',
    category: 'Technology',
    tags: ['AI', 'Technology', 'Future of Design'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop'
  }
];

// Categories for filtering
const categories = ['All', 'Design', 'Web Design', 'Branding', 'Technology', 'Sustainability'];

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

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = blogPosts
    .filter(post => activeCategory === 'All' || post.category === activeCategory)
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <AnimatedTransition>
      <div className="page-container">
        <h1 className="page-title">Our Blog</h1>
        <p className="page-description">
          Insights, tips, and thoughts on design, creativity, and technology.
        </p>
        
        {/* Search and Filter */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none bg-white"
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-secondary/80 text-foreground/70 hover:bg-secondary/90'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Blog Posts */}
        <AnimatePresence mode="wait">
          {filteredPosts.length > 0 ? (
            <motion.div 
              key={activeCategory + searchQuery}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              {filteredPosts.map((post) => (
                <motion.article 
                  key={post.id}
                  className="card-glass overflow-hidden flex flex-col h-full group"
                  variants={itemVariants}
                  layout
                >
                  <Link to={`/blog/${post.id}`} className="block overflow-hidden">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <Link to={`/blog/${post.id}`} className="block mb-3">
                      <h3 className="text-xl font-semibold hover:text-primary transition-colors duration-300">{post.title}</h3>
                    </Link>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <div 
                          key={index}
                          className="inline-flex items-center text-xs bg-secondary px-2 py-1 rounded-full"
                        >
                          <Tag className="w-3 h-3 mr-1 text-primary" />
                          <span>{tag}</span>
                        </div>
                      ))}
                      {post.tags.length > 2 && (
                        <div className="inline-flex items-center text-xs bg-secondary px-2 py-1 rounded-full">
                          +{post.tags.length - 2}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-md transition-colors"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedTransition>
  );
};

export default Blog;
