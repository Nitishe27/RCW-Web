import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Trophy, Dumbbell, Users, Heart, Star } from 'lucide-react';
import ClubTripImg from '../Pictures/Club Trip 24.jpg';
import KickOffImg from '../Pictures/KickOff.jpeg';
import PaddlesImg from '../Pictures/PG1.jpeg';
import CrownConspiracyImg from '../Pictures/CrownCons1.jpeg';
import Akash from '../Pictures/Akash26.png';
import RanjanAward from '../Pictures/RanjanAward.jpg'
import CrownImg from '../Pictures/CrownCons2.jpeg'
import { Link } from 'react-router-dom';

const focusAreas = [
  { icon: Trophy, title: 'Sports Tournaments', description: 'Organizing competitive and friendly sports events that promote teamwork, fitness, and club spirit.' },
  { icon: Dumbbell, title: 'Fitness & Wellness', description: 'Encouraging healthy lifestyles through fitness programs, wellness challenges, and recreational activities.' },
  { icon: Users, title: 'Team Building', description: 'Fostering camaraderie and collaboration through engaging team-building exercises and club outings.' },
  { icon: Heart, title: 'Fellowship Through Sport', description: 'Creating welcoming spaces where members can connect, compete, and enjoy active time together.' },
  { icon: Star, title: 'Sportsmanship', description: 'Building confidence, respect, and leadership through participation, practice, and friendly competition.' },
];

const recentProjects = [
  { title: 'Kick Off', description: 'A sports and fellowship event designed to promote physical wellness and inter-club friendship.', image: KickOffImg, link: '/projects/kickoff' },
  { title: 'Paddles & Giggles', description: 'A lively recreational event filled with games, laughter, and memorable moments among members.', image: PaddlesImg, link: '/projects/paddlesandgiggles' },
  { title: 'Crown Conspiracy', description: 'An adventure-driven treasure hunt challenging participants through teamwork, strategy, and problem-solving.', image: CrownConspiracyImg, link: '/projects/crownconspiracy' },
];

const Sports = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <section
        className="pt-24 pb-16 relative"
        style={{ backgroundImage: `url(${CrownImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Sports & Recreations
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl text-sky-100 max-w-2xl mx-auto">
            Building teamwork, healthy competition, and fellowship through sports and recreation.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Sports at Rotaract</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Sports bring our members together through movement, friendly competition, and shared experiences. We create opportunities for everyone to participate, discover new interests, and build lasting friendships.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From inter-club tournaments to relaxed recreational outings, our sports activities promote wellness, teamwork, confidence, and the spirit of fellowship that makes Rotaract special.
              </p>
              <div className="mt-8 mb-4 flex items-center gap-4 bg-gray-100 rounded-xl shadow p-4 w-fit">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={Akash}
                    alt="Rtr. Akash Kumar"
                    className="w-full h-full object-cover object-top origin-top -translate-y-3 scale-[2.2]"
                  />
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-800">Rtr. Akash Kumar</div>
                  <div className="text-sm text-gray-600">Director of Sports and Recreations</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="flex justify-center lg:justify-end">
              <div className="h-[440px] w-full max-w-[500px] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={RanjanAward}
                  alt="Rotaract members enjoying a sports and fellowship event"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Our Sports Focus</h2>
            <p className="text-lg text-gray-600">We grow stronger together through these activities</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div key={area.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: index * 0.08 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center h-full">
                  <span className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#0b3d91] to-[#1e3a8a] text-white"><Icon size={32} /></span>
                  <h3 className="text-xl font-bold text-[#05204a] mb-2">{area.title}</h3>
                  <p className="text-gray-700 text-base">{area.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Sports & Fellowship Highlights</h2>
            <p className="text-lg text-gray-600">A glimpse at the activities that keep our club moving</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden"><img src={project.image} alt={project.title} className="w-full h-full object-cover transition duration-300 hover:scale-105" /></div>
                <div className="p-6"><h3 className="text-xl font-semibold text-[#05204a] mb-2">{project.title}</h3><p className="text-gray-700 mb-4">{project.description}</p><Link to={project.link} className="inline-block bg-gradient-to-r from-[#05204a] to-[#2a4b8d] text-white px-5 py-2 rounded-full font-medium hover:from-[#041634] hover:to-[#3860a8] transition-colors duration-200 shadow">Learn More</Link></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0b3d91] to-[#1e3a8a]"><div className="max-w-3xl mx-auto px-4 text-center"><h3 className="text-3xl font-bold text-white mb-6">Ready to Get Moving?</h3><p className="text-xl text-sky-100 mb-8">Join us for sports, recreation, and unforgettable fellowship.</p><button onClick={() => window.location.href = '/contact'} className="bg-white text-[#0b3d91] px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-50 transition-colors">Get Involved</button></div></section>
      <Footer />
    </div>
  );
};

export default Sports;
