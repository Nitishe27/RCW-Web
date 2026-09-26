import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import backgroundImage1 from '../Pictures/40th Installation.jpeg';
import backgroundImage2 from '../Pictures/Lailath7 (2).jpeg';
import backgroundImage3 from '../Pictures/Inside Edge.jpg';
import backgroundImage4 from '../Pictures/CrownCons1.jpeg';
import backgroundImage5 from '../Pictures/BreakAway-2.jpeg';
import { Link } from 'react-router-dom';

const Hero = () => {
  const images = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[calc(100vh-4.75rem)] items-center overflow-hidden bg-[#061b3b]">
      {/* 🔁 Background Layers for Crossfade */}
      {images.map((img, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: index === 1
              ? `linear-gradient(180deg, rgba(4,20,48,0.58) 0%, rgba(4,20,48,0.32) 48%, rgba(4,20,48,0.08) 100%), linear-gradient(90deg, rgba(4,20,48,0.94) 0%, rgba(4,20,48,0.7) 38%, rgba(4,20,48,0.18) 100%), url(${img})`
              : `linear-gradient(90deg, rgba(4,20,48,0.97) 0%, rgba(4,20,48,0.78) 38%, rgba(4,20,48,0.25) 100%), linear-gradient(0deg, rgba(4,20,48,0.3), transparent 45%), url(${img})`,
            backgroundSize: index === 1 ? '108% auto' : 'cover',
            backgroundPosition: index === 1 ? '58% top' : 'center center',
            backgroundRepeat: 'no-repeat',
            filter: index === 1 ? 'brightness(1.14) contrast(1.06)' : 'none',
            opacity: index === currentIndex ? 1 : 0,
            zIndex: 0,
          }}
        />
      ))}

      {currentIndex === 1 && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            backgroundImage: `url(${backgroundImage2})`,
            backgroundSize: '108% auto',
            backgroundPosition: '58% top',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(1.3) contrast(1.04)',
            maskImage: 'linear-gradient(to bottom, transparent 38%, black 68%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 38%, black 68%, black 100%)',
            opacity: 0.55,
          }}
        />
      )}

      <div className="absolute inset-0 z-10 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-5 py-24 text-white sm:px-8 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-20 lg:px-12 lg:py-32">
        <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mb-8 inline-flex items-center gap-3 border-l-2 border-amber-300 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-100"
        >
          <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(252,211,77,.8)]" />
          Celebrating 40 Years of Legacy
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 max-w-4xl text-5xl font-extrabold leading-[.94] tracking-[-.05em] sm:text-7xl lg:text-[6.5rem]"
        >
          Welcome to
          <span className="mt-3 block text-white">Rotaract Club of Wellawatte</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 max-w-2xl text-lg leading-8 text-slate-200 sm:text-2xl"
        >
          Empowering young leaders to create positive change in our community through service, fellowship, and professional development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-start gap-4 sm:flex-row"
        >
          <Link to="/contact">
            <span className="group inline-flex items-center gap-3 bg-amber-300 px-8 py-3.5 font-bold text-[#071b3b] shadow-[0_14px_35px_rgba(244,201,93,.2)] transition duration-200 hover:bg-amber-200">
              Join Our Club
              <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </Link>

          <Link to="/about">
            <span className="group inline-flex items-center gap-3 border border-white/50 px-8 py-3.5 font-semibold text-white transition duration-200 hover:border-white hover:bg-white hover:text-[#0b3d91]">
              Learn More
              <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: .9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: .9, delay: .35 }}
          className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:border-l lg:border-white/25 lg:py-8"
          aria-label="Celebrating 40 years of legacy"
        >
          <span className="text-[10rem] font-extrabold leading-[.75] tracking-[-.1em] text-white/90">40</span>
          <span className="mt-8 text-center text-sm font-bold uppercase tracking-[.35em] text-amber-200">Years<br />of legacy</span>
          <span className="mt-6 h-12 w-px bg-amber-300/70" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-5 sm:left-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-4 cursor-pointer text-white/70"
            onClick={() => {
              document.getElementById('club-intro')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ArrowDown size={22} />
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 right-5 z-20 flex items-center gap-3 text-xs font-semibold tracking-[.18em] text-white/70 sm:right-8">
          <span>0{currentIndex + 1}</span>
          <div className="flex gap-1.5" aria-label={`Showing image ${currentIndex + 1} of ${images.length}`}>
            {images.map((_, index) => <span key={index} className={`h-1 w-7 transition-colors duration-500 ${index === currentIndex ? 'bg-amber-300' : 'bg-white/35'}`} />)}
          </div>
          <span>0{images.length}</span>
        </div>
      </div>


    </section>
  );
};

export default Hero;
