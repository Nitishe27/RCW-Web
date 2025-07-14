import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Heart, Leaf, GraduationCap, Users, Globe } from 'lucide-react';
import ServicePic from '../Pictures/Servicepic.jpg';
import GiftsOfHopes1 from '../Pictures/Gifts Of Hopes 1.jpg';
import BeachCleanup from '../Pictures/Beach Cleanup.jpg';
import PulseOfHope2 from '../Pictures/Pulse Of Hope 2.jpg';
import ThreadsOfTreasure2 from '../Pictures/Threads Of Treasure 2.jpg';
import { Link } from 'react-router-dom';
import Didu from '../Pictures/Didu.jpeg';

const focusAreas = [
  {
    icon: Heart,
    title: 'Health & Wellness Initiatives',
    description: 'Promoting healthy lifestyles and supporting the well-being of our community through medical camps, awareness drives, and wellness programs.'
  },
  {
    icon: GraduationCap,
    title: 'Education Support Programs',
    description: 'Empowering youth and children by providing educational resources, scholarships, and mentorship opportunities.'
  },
  {
    icon: Leaf,
    title: 'Environmental Conservation',
    description: 'Organizing clean-ups, tree planting, and sustainability campaigns to protect and enhance our environment.'
  },
  {
    icon: Users,
    title: 'Social Welfare Activities',
    description: 'Supporting underprivileged groups through food drives, donation campaigns, and inclusive community events.'
  },
  {
    icon: Globe,
    title: 'Local Community Projects',
    description: 'Initiatives that address specific needs in our locality, fostering unity and positive change.'
  },
];

const recentProjects = [
  {
    title: 'Beach Cleanup',
    description: 'Environmental conservation initiative focused on cleaning coastal areas and promoting marine ecosystem protection.',
    image: BeachCleanup,
    link: '/projects/beachcleanup'
  },
  {
    title: 'Pulse of Hope',
    description: 'Community health and wellness project providing medical support and hope to underprivileged communities.',
    image: PulseOfHope2,
    link: '/projects/pulseofhope'
  },
  {
    title: 'Gifts Of Hopes',
    description: 'Charitable initiative delivering essential supplies and support to families in need during challenging times.',
    image: GiftsOfHopes1,
    link: '/projects/giftsofhopes'
  },
  {
    title: 'Threads of Treasure',
    description: 'Sustainable fashion and textile recycling project promoting environmental consciousness and community engagement.',
    image: ThreadsOfTreasure2,
    link: '/projects/threadsoftreasure'
  },
];

const CommunityService = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section
        className="pt-24 pb-16 relative"
        style={{
          backgroundImage: `url(${ServicePic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Optional: subtle black overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Community Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-red-100 max-w-2xl mx-auto"
          >
            Making a positive impact through volunteer work and community projects that address local needs and create lasting change.
          </motion.p>
        </div>
      </section>

      {/* About Community Service Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                What is Community Service?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Community Service is the heart of Rotaract's mission, where we actively engage with our local communities to address real needs and create lasting positive change. Through volunteer work, charitable initiatives, and community development projects, we strive to make a meaningful impact on the lives of those around us.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Rotaract Club of Wellawatte believes in the power of collective action. Our members dedicate their time, skills, and resources to serve the community through various initiatives including health camps, educational support, environmental conservation, and social welfare programs. We work closely with local organizations, schools, and community leaders to identify needs and implement sustainable solutions that benefit everyone.
              </p>
              {/* Director of Community Service Section */}
              <div className="mt-8 mb-4 flex items-center gap-4 bg-gray-100 rounded-xl shadow p-4 w-fit">
                <img
                  src={Didu}
                  alt="Didusan Arulshantha"
                  className="w-20 h-20 rounded-full object-cover object-top border-4 border-white shadow-md"
                />
                <div>
                  <div className="text-lg font-semibold text-gray-800">Rtr. Thanya</div>
                  <div className="text-sm text-gray-600">Director of Community Service</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <img
                  src={GiftsOfHopes1}
                  alt="Community Service in Action"
                  className="rounded-2xl shadow-2xl max-w-full h-auto"
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Our Focus Areas</h2>
            <p className="text-lg text-gray-600">We strive to serve our community through these key initiatives</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.08, type: 'spring', bounce: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center h-full"
                >
                  <div className="mb-4">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#800000] to-[#b03060] text-white">
                      <Icon size={32} />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">{area.title}</h3>
                  <p className="text-gray-700 text-base">{area.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Recent Projects</h2>
            <p className="text-lg text-gray-600">A glimpse at some of our recent community initiatives</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <Link
                    to={project.link}
                    className="inline-block bg-gradient-to-r from-[#4B1D1D] to-[#A05252] text-white px-5 py-2 rounded-full font-medium hover:from-[#3A1515] hover:to-[#B36B6B] transition-colors duration-200 shadow"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#800000] to-[#b03060]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-6"
          >
            Ready to Make a Difference?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-red-100 mb-8"
          >
            Join us in our mission to serve the community. Every helping hand counts!
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#800000] px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#800000]"
            onClick={() => window.location.href = '/contact'}
          >
            Get Involved
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityService;
