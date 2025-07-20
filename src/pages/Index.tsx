import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Star, Calendar, ArrowRight, Globe, Club, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import WellaPongal2025 from '../Pictures/Wella Pongal 2025.jpg';
import InnerLeader from '../Pictures/Inner Leader.jpg';
import SafeSpaces from '../Pictures/Safe Spaces.jpg';
import GroupPicInstallation from '../Pictures/Group Pic - Installation.jpg';
import ClubTrip24 from '../Pictures/Club Trip 24.jpg';
import EndrendumSPB from '../Pictures/Endrendum SPB.jpg';
import Bandhan2 from '../Pictures/Bandhan 2.jpg';
import PulseOfHope2 from '../Pictures/Pulse Of Hope 2.jpg';
import BreakawayExtra from '../Pictures/BreakAway-extra.jpg';
import GiftsOfHopes from '../Pictures/Gifts Of Hopes 1.jpg';
import RanjanAward from '../Pictures/RanjanAward.jpg'

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
      title: "Club & Sports",
      description: "Strengthening our club through effective administration, member engagement, and promoting teamwork and healthy competition through sports."
    },
    {
      icon: Megaphone,
      title: "Public Relations",
      description: "Promoting club visibility, media outreach, and public engagement initiatives to enhance our presence in the community."
    }
  ];

  // Sample recent projects
  const recentProjects = [
    {
      title: 'Wella Pongal 2025',
      image: WellaPongal2025,
      link: '/projects/wellapongal',
    },
    {
      title: 'Inner Leader',
      image: InnerLeader,
      link: '/projects/innerleader',
    },
    {
      title: 'Safe Spaces',
      image: SafeSpaces,
      link: '/projects/safespaces',
    },
  ];

  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Club Introduction Section */}
      <section id="club-intro" className="py-10 bg-white">
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
        <div className="flex justify-center mt-6">
          <Link
            to="/about"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#4B1D1D] to-[#A05252] text-white px-8 py-3 rounded-full font-medium hover:from-[#3A1515] hover:to-[#B36B6B] transition-colors duration-200 shadow-lg"
          >
            <span>Read More</span>
            <ArrowRight size={18} />
          </Link>
        </div>

      </section>

      {/* Features Section */}
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
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Rotaract Club focuses on service, professional development, and fellowship to create positive change in our community and beyond.
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

      {/* ✅ Club Stats Section with CountUp */}
      <section ref={ref} className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">
              Celebrating the milestones we've achieved as a club committed to service and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="bg-white shadow-md p-8 rounded-xl">
              <h3 className="text-4xl font-bold text-red-600 mb-2">
                {inView && <CountUp end={75} duration={2} />}+
              </h3>
              <p className="text-lg text-gray-700">Projects Completed</p>
            </div>
            <div className="bg-white shadow-md p-8 rounded-xl">
              <h3 className="text-4xl font-bold text-red-600 mb-2">
                {inView && <CountUp end={54} duration={2} />}+
              </h3>
              <p className="text-lg text-gray-700">Active Members</p>
            </div>
            <div className="bg-white shadow-md p-8 rounded-xl">
              <h3 className="text-4xl font-bold text-red-600 mb-2">
                {inView && <CountUp end={1500} duration={2.5} />}+
              </h3>
              <p className="text-lg text-gray-700">Volunteer Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
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
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of our recent projects and initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {recentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <Link
                    to="/projects#project intro"
                    className="text-red-600 font-medium hover:text-red-700 transition-colors flex items-center space-x-1"
                  >

                    <span>Learn More</span>

                    <ArrowRight size={16} />
                  </Link>
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
              to="/projects"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#4B1D1D] to-[#A05252] text-white px-8 py-3 rounded-full font-medium hover:from-[#3A1515] hover:to-[#B36B6B] transition-colors duration-200 shadow-lg"
            >
              <span>View All Events</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sample Gallery Section */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Sample Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A glimpse at some of our favorite moments !</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <img src={GroupPicInstallation} alt="38th Installation" className="rounded-2xl object-cover w-full h-80 transition-transform duration-300 hover:scale-105 hover:shadow-2xl -rotate-2 -translate-y-2" />
            <img src={ClubTrip24} alt="Club Trip 24" className="rounded-2xl object-cover w-full h-80 transition-transform duration-300 hover:scale-105 hover:shadow-2xl rotate-2 translate-y-4" />
            <img src={RanjanAward} alt="Endrendum SPB" className="rounded-2xl object-cover w-full h-80 transition-transform duration-300 hover:scale-105 hover:shadow-2xl -rotate-3" />
            <img src={GiftsOfHopes} alt="Bandhan 2" className="rounded-2xl object-cover w-full h-80 transition-transform duration-300 hover:scale-105 hover:shadow-2xl rotate-1 -translate-y-3" />
            <img src={PulseOfHope2} alt="Pulse Of Hope 2" className="rounded-2xl object-cover w-full h-80 transition-transform duration-300 hover:scale-105 hover:shadow-2xl -rotate-1 translate-y-2" />
            <img src={WellaPongal2025} alt="Wella Pongal 2025" className="rounded-2xl object-cover w-full h-80 transition-transform duration-300 hover:scale-105 hover:shadow-2xl rotate-3" />
          </div>
          <div className="text-center">
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 bg-gradient-to-br from-[#800000] to-[#b03060] animate-maroon-gradient"
        style={{
          background: 'linear-gradient(135deg, #800000, #b03060, #a52a2a, #800000)',
          backgroundSize: '400% 400%',
          animation: 'maroonGradient 10s ease-in-out infinite'
        }}
      >
        <style>{`
          @keyframes maroonGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
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
