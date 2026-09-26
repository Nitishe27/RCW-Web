import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Star, Calendar, ArrowRight, Globe, Club, Megaphone, Trophy, Pause, Play } from 'lucide-react';
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
import Lailath from '../Pictures/Lailath1.jpeg';
import WellaPongal26 from '../Pictures/WELLPONGAL26-1.jpg';
import InstallationImg39 from '../Pictures/Install39 - 2.jpeg';
import CrownConsipiracy from '../Pictures/CrownCons1.jpeg';
import RDA from '../Pictures/RDA.jpeg';
import BreakAway26 from '../Pictures/BreakAway-2.jpeg'
import NextStep1 from '../Pictures/NextStep1.jpeg'
import Installationpic from '../Pictures/installation-1.jpg'
import Pinnacle from '../Pictures/Pinnacle.jpeg';
import YPL from '../Pictures/YPL.jpeg';
import Mithuru1 from '../Pictures/Mithuru1.jpeg'
import Installation40 from '../Pictures/40th Installation.jpeg'

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
      title: "Clubs Services",
      description: "Strengthening our club through effective administration, member engagement, and promoting teamwork and healthy competition through sports."
    },
    {
      icon: Trophy,
      title: "Sports",
      description: "Promoting teamwork, healthy competition, and fellowship through sports and recreational activities.",
      path: "/sports"
    },
    {
      icon: Megaphone,
      title: "Public Relations",
      description: "Promoting club visibility, media outreach, and public engagement initiatives to enhance our presence in the community."
    }
  ];

  // Sample 
  
  const recentProjects = [
    {
      title: "Crown Conspiracy",
      image: CrownConsipiracy,
      link: '/projects/crownconspiracy',
    },
    {
      title: "Lailath' 26",
      image: Lailath,
      link: '/projects/lailath',
    },

    {
      title: 'Wella Pongal 2026',
      image: WellaPongal26,
      link: '/projects/wellapongal26',
    }

  ];

  const galleryImages = [  
    { image: Installation40, alt: 'Installation Pic' },
    { image: RanjanAward, alt: 'Endrendum SPB' },
    { image: RDA, alt: 'Bandhan 2' },
    {image: Pinnacle, alt: 'Pinnacle'},
    { image: YPL, alt: 'YPL' },
    { image: Mithuru1, alt: 'Mithuru 1' },
    { image: BreakAway26, alt: 'Breakaway 26' },
    { image: NextStep1, alt: 'Next Step 1' },
  ];

  const [ref, inView] = useInView({ triggerOnce: true });
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-slate-900">
      <Navbar />
      <Hero />

      <section className="border-b border-slate-200 bg-[#f5f7fa] py-10 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-7xl flex-col gap-5 px-5 sm:px-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-5">
            <span className="text-5xl font-semibold leading-none tracking-[-.08em] text-[#0b3d91] sm:text-6xl">40</span>
            <div className="h-12 w-px bg-amber-400" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-[#0b3d91]">1987 — 2026</p>
              <h2 className="mt-1 text-xl font-semibold tracking-[-.02em] text-slate-900 sm:text-2xl">40 Years of Legacy</h2>
            </div>
          </div>
          <p className="max-w-xl border-l border-slate-300 pl-5 text-base leading-7 text-slate-600 md:text-right md:border-l-0 md:border-r md:pr-5 md:pl-0">A journey shaped by service, fellowship, and the young leaders who continue to carry the Rotaract Club of Wellawatte forward.</p>
        </motion.div>
      </section>

      {/* Club Introduction Section */}
      <section id="club-intro" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-5 text-4xl font-semibold tracking-[-.035em] text-[#05204a] sm:text-5xl"
          >
            About Rotaract Club of Wellawatte
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-lg leading-8 text-slate-600"
          >
            The Rotaract Club of Wellawatte is a vibrant community of young professionals and students dedicated to making a positive impact through service, leadership, and fellowship. As part of the global Rotaract movement, we strive to empower youth, foster personal and professional growth, and create lasting change in our local and international communities.
          </motion.p>
        </div>
        <div className="mt-9 flex justify-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-[#082b66] px-8 py-3 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-[#123f85]"
          >
            <span>Read More</span>
            <ArrowRight size={18} />
          </Link>
        </div>

      </section>

      {/* Features Section */}
      <section className="bg-[#f5f7fa] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 max-w-3xl"
          >
            <h2 className="mb-5 text-4xl font-semibold tracking-[-.035em] text-slate-900 sm:text-5xl">
              What We Do
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              Our Rotaract Club focuses on service, professional development, and fellowship to create positive change in our community and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                path={feature.path}
                index={index}
              />
            ))}
          </div>
          <div className="mx-auto mt-5 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.slice(3).map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                path={feature.path}
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
              <h3 className="text-4xl font-bold text-[#0b3d91] mb-2">
                {inView && <CountUp end={75} duration={2} />}+
              </h3>
              <p className="text-lg text-gray-700">Projects Completed</p>
            </div>
            <div className="bg-white shadow-md p-8 rounded-xl">
              <h3 className="text-4xl font-bold text-[#0b3d91] mb-2">
                {inView && <CountUp end={54} duration={2} />}+
              </h3>
              <p className="text-lg text-gray-700">Active Members</p>
            </div>
            <div className="bg-white shadow-md p-8 rounded-xl">
              <h3 className="text-4xl font-bold text-[#0b3d91] mb-2">
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
                <div className="bg-gradient-to-br from-[#05204a] to-[#0b3d91] p-6">
                  <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
                  <Link
                    to="/projects#project intro"
                    className="flex items-center space-x-1 font-medium text-sky-100 transition-colors hover:text-white"
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#05204a] to-[#2a4b8d] text-white px-8 py-3 rounded-full font-medium hover:from-[#041634] hover:to-[#3860a8] transition-colors duration-200 shadow-lg"
            >
              <span>View All Events</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sample Gallery Section */}
      <section className="overflow-hidden bg-gradient-to-br from-yellow-50 to-red-50 py-24">
        <style>{`
          @keyframes gallery-slide {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-50% - 0.75rem)); }
          }

          .gallery-track {
            animation: gallery-slide 42s linear infinite;
          }

          .gallery-track.gallery-paused {
            animation-play-state: paused;
          }

          @media (prefers-reduced-motion: reduce) {
            .gallery-track {
              animation-play-state: paused;
            }
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Sample Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A glimpse at some of our favorite moments !</p>
          </div>
          <div className="mb-4 flex justify-end">
            <button
              type="button"
              aria-label={isGalleryPaused ? 'Resume gallery animation' : 'Pause gallery animation'}
              aria-pressed={isGalleryPaused}
              onClick={() => setIsGalleryPaused((paused) => !paused)}
              className="group inline-flex items-center gap-2 rounded-full border border-emerald-700/20 bg-emerald-700 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_8px_20px_rgba(4,120,87,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-[0_12px_24px_rgba(4,120,87,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 sm:text-sm"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-colors group-hover:bg-white/25">
                {isGalleryPaused ? <Play size={13} fill="currentColor" aria-hidden="true" /> : <Pause size={13} fill="currentColor" aria-hidden="true" />}
              </span>
              <span>{isGalleryPaused ? 'Tap to resume' : 'Tap to pause'}</span>
            </button>
          </div>
          <div
            role="button"
            tabIndex={0}
            aria-label={isGalleryPaused ? 'Resume gallery animation' : 'Pause gallery animation'}
            onClick={() => setIsGalleryPaused((paused) => !paused)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setIsGalleryPaused((paused) => !paused);
              }
            }}
            className="relative cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#0b3d91] focus-visible:ring-offset-4"
          >
            <div className={`gallery-track flex w-max gap-6 ${isGalleryPaused ? 'gallery-paused' : ''}`}>
              {[...galleryImages, ...galleryImages].map(({ image, alt }, index) => (
                <img
                  key={`${alt}-${index}`}
                  src={image}
                  alt={alt}
                  className="h-64 w-[min(78vw,20rem)] shrink-0 rounded-2xl object-cover shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl sm:h-72 sm:w-[min(42vw,22rem)] lg:h-80 lg:w-[22rem]"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 bg-gradient-to-br from-[#05204a] to-[#0b3d91] animate-navy-gradient"
        style={{
          background: 'linear-gradient(135deg, #0b3d91, #1e3a8a, #12305d, #0b3d91)',
          backgroundSize: '400% 400%',
          animation: 'navyGradient 10s ease-in-out infinite'
        }}
      >
        <style>{`
          @keyframes navyGradient {
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
            <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
              Join our community of young leaders dedicated to service, professional growth, and positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-[#0b3d91] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Join Our Club
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0b3d91] transition-colors duration-200"
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
