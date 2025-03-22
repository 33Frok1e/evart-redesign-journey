
import React, { useState } from 'react';
import AnimatedTransition from '@/components/AnimatedTransition';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const inputClasses = "w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all";
  
  return (
    <AnimatedTransition>
      <div className="page-container">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-description">
          Have a project in mind or want to learn more about our services? Get in touch with us.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="card-glass p-8 h-full">
              <h2 className="text-2xl font-heading font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-semibold">Our Location</h3>
                    <address className="not-italic text-muted-foreground mt-1">
                      123 Art Street<br />
                      Creative District<br />
                      Design City, 12345
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-semibold">Phone</h3>
                    <p className="text-muted-foreground mt-1">
                      <a href="tel:+1234567890" className="hover:text-primary">+123 456 7890</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-semibold">Email</h3>
                    <p className="text-muted-foreground mt-1">
                      <a href="mailto:contact@ev-art.in" className="hover:text-primary">contact@ev-art.in</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-semibold">Business Hours</h3>
                    <p className="text-muted-foreground mt-1">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <a 
                      key={social}
                      href={`https://${social}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors duration-300"
                      aria-label={`Follow us on ${social}`}
                    >
                      <i className={`fab fa-${social}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="card-glass p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={inputClasses}
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300 
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90 shadow-md hover:shadow-lg'}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Map Section */}
        <div className="mt-16">
          <div className="card-glass p-1 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986673029806!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1656025579736!5m2!1sen!2sca"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default Contact;
