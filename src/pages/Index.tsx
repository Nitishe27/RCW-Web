import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Star, Calendar, ArrowRight, Globe, Club, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Community Service",
      description: "Making a positive impact through volunteer work and community projects that address local needs and create lasting change."
    },
    {
      icon: Users,
      title: "Professional Development",
      description: "Building leadership skills and career networks through workshops, mentorship programs, and professional growth opportunities."
    },
    {
      icon: Globe,
      title: "International Service",
      description: "Fostering global understanding and collaboration through international projects, cultural exchanges, and partnerships with clubs worldwide."
    },
    {
      icon: Club,
      title: "Club Service",
      description: "Strengthening our club through effective administration, member engagement, and activities that build a strong, vibrant organization."
    },
    {
      icon: Megaphone,
      title: "Sports & Public Relations",
      description: "Promoting teamwork, healthy competition, and club visibility through sports, media outreach, and public engagement initiatives."
    }
  ];

  const upcomingEvents = [
    {
      title: "Community Clean-Up Drive",
      date: "July 15, 2024",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
    },
    {
      title: "Professional Workshop",
      date: "July 22, 2024",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      title: "Charity Fundraising Gala",
      date: "August 5, 2024",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      {/* Club Introduction Section */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-red-700 mb-4"
          >
            About Rotaract Club of Wellawatte
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 max-w-2xl mx-auto"
          >
            The Rotaract Club of Wellawatte is a vibrant community of young professionals and students dedicated to making a positive impact through service, leadership, and fellowship. As part of the global Rotaract movement, we strive to empower youth, foster personal and professional growth, and create lasting change in our local and international communities.
          </motion.p>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Rotaract Club focuses on service, professional development, and fellowship 
              to create positive change in our community and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center mt-8 max-w-2xl mx-auto">
            {features.slice(3).map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index + 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for these exciting upcoming activities and make a difference in our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.date}</p>
                  <button className="text-red-600 font-medium hover:text-red-700 transition-colors flex items-center space-x-1">
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/events"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-yellow-500 text-white px-8 py-3 rounded-full font-medium hover:from-red-600 hover:to-yellow-600 transition-colors duration-200 shadow-lg"
            >
              <span>View All Events</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Join our community of young leaders dedicated to service, professional growth, and positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Join Our Club
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
