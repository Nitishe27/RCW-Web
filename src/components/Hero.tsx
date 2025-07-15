import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import backgroundImage1 from '../Pictures/Group Pic - Installation.jpg';
import backgroundImage2 from '../Pictures/Wella Pongal 2025.jpg';
import backgroundImage3 from '../Pictures/Inside Edge.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  const images = [backgroundImage1, backgroundImage2, backgroundImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🔁 Background Layers for Crossfade */}
      {images.map((img, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: index === currentIndex ? 1 : 0,
            zIndex: 0,
          }}
        />
      ))}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 z-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Welcome to
          <span className="block text-white-300">Rotaract Club of Wellawatte</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl mb-8 text-red-100 max-w-3xl mx-auto"
        >
          Empowering young leaders to create positive change in our community through service, fellowship, and professional development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/contact">
            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-200 shadow-lg">
              Join Our Club
            </button>
          </Link>

          <Link to="/about">
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition duration-200">
              Learn More
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-13 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/70 cursor-pointer mt-4"
            onClick={() => {
              document.getElementById('club-intro')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ArrowDown size={22} />
          </motion.div>
        </motion.div>
      </div>


      {/* Floating Blur Effects */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl z-10"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-16 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl z-10"
      />
    </section>
  );
};

export default Hero;
