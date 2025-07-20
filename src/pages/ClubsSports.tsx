import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Trophy, Dumbbell, Group, Star } from 'lucide-react';
import InstallationImg from '../Pictures/Group Pic - Installation.jpg';
import WellaPongalImg from '../Pictures/Wella Pongal 2025.jpg';
import ClubTripImg from '../Pictures/Club Trip 24.jpg';
import HipHopImg from '../Pictures/Hip Hop 1.jpg';
import InsideEdgeImg from '../Pictures/Inside Edge.jpg';
import { Link } from 'react-router-dom';
import Didu from '../Pictures/Didu.jpeg'
import Abishek from '../Pictures/Abishek.jpg';
import vasi from '../Pictures/Vasi.jpg';

const focusAreas = [
  {
    icon: Trophy,
    title: 'Sports Tournaments',
    description: 'Organizing competitive and friendly sports events to promote teamwork, fitness, and club spirit.'
  },
  {
    icon: Dumbbell,
    title: 'Fitness & Wellness',
    description: 'Encouraging healthy lifestyles through fitness programs, wellness challenges, and recreational activities.'
  },
  {
    icon: Group,
    title: 'Team Building',
    description: 'Fostering camaraderie and collaboration through engaging team-building exercises and club outings.'
  },
  {
    icon: Users,
    title: 'Member Engagement',
    description: 'Boosting participation and club unity with fun events, socials, and interactive sessions.'
  },
  {
    icon: Star,
    title: 'Celebrations & Traditions',
    description: 'Honoring club milestones and cultural traditions with vibrant celebrations and annual events.'
  },
];

const recentProjects = [
  {
    title: '38th Installation',
    description: 'A momentous ceremony marking the induction of the new Board of Directors for 2024-2025, celebrating leadership, service, and club spirit.',
    image: InstallationImg,
    link: '/projects/38thinstallation'
  },
  {
    title: 'Wella Pongal',
    description: 'Our signature cultural event celebrating gratitude, prosperity, and togetherness through traditional Pongal festivities, games, and community bonding.',
    image: WellaPongalImg,
    link: '/projects/wellapongal'
  },
  {
    title: 'Mind the Gap',
    description: 'A fun-filled club outing fostering friendship, adventure, and unforgettable memories among members.',
    image: ClubTripImg,
    link: '/projects/mindthegap'
  },
  {
    title: 'Hip Hop Thiruvizha',
    description: 'A vibrant celebration of Hip-Hop culture, featuring electrifying performances, breakdancing, and DJ sets, empowering youth and promoting cultural exchange.',
    image: HipHopImg,
    link: '/projects/hiphopthiruvizha'
  },
  {
    title: 'Inside Edge',
    description: 'A dynamic club event focused on teamwork, strategy, and friendly competition, strengthening bonds among members.',
    image: InsideEdgeImg,
    link: '/projects/insideedge'
  },
];

const ClubsSports = () => {
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
          backgroundImage: `url(${ClubTripImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Clubs & Sports
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-red-100 max-w-2xl mx-auto"
          >
            Promoting teamwork, fitness, and fun through sports, club outings, and vibrant celebrations.
          </motion.p>
        </div>
      </section>

      {/* About Clubs & Sports Section */}
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
                What are Clubs & Sports?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Clubs & Sports at Rotaract Club of Wellawatte are all about building strong bonds, promoting healthy lifestyles, and celebrating our vibrant club culture. Through a variety of sports tournaments, fitness programs, and social events, we create opportunities for members to connect, compete, and grow together.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From annual installations and cultural festivals to club trips and team-building activities, our Clubs & Sports avenue ensures every member finds their place, discovers new passions, and makes lasting memories. Join us as we champion teamwork, wellness, and the true spirit of fellowship!
              </p>
              {/* Director of Community Service Section */}
                              {/* Director of Community Service Section */}
                              <div className="mt-8 mb-4 flex items-center gap-4 bg-gray-100 rounded-xl shadow p-4 w-fit">
                <img
                  src={Abishek}
                  alt="Didusan Arulshantha"
                  className="w-20 h-20 rounded-full object-cover object-top border-4 border-white shadow-md"
                />
                <div>
                  <div className="text-lg font-semibold text-gray-800">Rtr. Abishek Sabri</div>
                  <div className="text-sm text-gray-600">Director of Club Service</div>
                </div>
              </div>
              <div className="mt-8 mb-4 flex items-center gap-4 bg-gray-100 rounded-xl shadow p-4 w-fit">
                <img
                  src={vasi}
                  alt="Didusan Arulshantha"
                  className="w-20 h-20 rounded-full object-cover object-top border-4 border-white shadow-md"
                />
                <div>
                  <div className="text-lg font-semibold text-gray-800">Rtr. Vasikaran Vinayagamoorthy</div>
                  <div className="text-sm text-gray-600">Director of Club Service</div>
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
                  src={WellaPongalImg}
                  alt="Clubs & Sports in Action"
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
            <p className="text-lg text-gray-600">We build club spirit and wellness through these key initiatives</p>
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
            <p className="text-lg text-gray-600">A glimpse at some of our recent club and sports highlights</p>
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
                  {project.link !== '#' ? (
                    <Link
                      to={project.link}
                      className="inline-block bg-gradient-to-r from-[#4B1D1D] to-[#A05252] text-white px-5 py-2 rounded-full font-medium hover:from-[#3A1515] hover:to-[#B36B6B] transition-colors duration-200 shadow"
                    >
                      Learn More
                    </Link>
                  ) : null}
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
            Ready to Join the Fun?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-red-100 mb-8"
          >
            Be part of our club’s vibrant events, sports, and celebrations. There’s something for everyone!
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

export default ClubsSports;
