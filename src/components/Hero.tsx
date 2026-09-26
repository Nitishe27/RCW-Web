import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import backgroundImage1 from '../Pictures/40th Installation.jpeg';
// import backgroundImage2 from '../Pictures/Lailath7 (2).jpeg';
import backgroundImage3 from '../Pictures/Inside Edge.jpg';
import backgroundImage4 from '../Pictures/CrownCons1.jpeg';
import backgroundImage5 from '../Pictures/BreakAway-2.jpeg';

const slides = [
  { src: backgroundImage1, position: 'center center', filter: 'contrast(1.06) saturate(1.1)' },
  // { src: backgroundImage2, position: '58% 12%', filter: 'brightness(1.14) contrast(1.06)' },
  { src: backgroundImage3, position: 'center center', filter: 'contrast(1.06) saturate(1.1)' },
  { src: backgroundImage4, position: 'center center', filter: 'contrast(1.06) saturate(1.1)' },
  { src: backgroundImage5, position: 'center center', filter: 'contrast(1.06) saturate(1.1)' },
];

const SLIDE_MS = 6000;
const EASE = [0.22, 1, 0.36, 1] as const;


/** Masked line that slides up into view */
const Line = ({ children, delay, className = '' }: { children: React.ReactNode; delay: number; className?: string }) => (
  <span className={`block overflow-hidden pb-[0.08em] ${className}`}>
    <motion.span
      className="block"
      initial={{ y: '105%' }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [currentIndex]);

  const ringText = 'Celebrating 40 Years of Legacy • 1987 — 2026 • ';

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#061634] text-white">
      {/* Slides with slow Ken Burns zoom */}
      {slides.map((slide, index) => {
        const active = index === currentIndex;
        return (
          <motion.img
            key={slide.src}
            src={slide.src}
            alt=""
            aria-hidden="true"
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            style={{ objectPosition: slide.position, filter: slide.filter }}
            initial={false}
            animate={{ opacity: active ? 1 : 0, scale: reduceMotion ? 1 : active ? 1 : 1.05 }}
            transition={{
              opacity: { duration: 1.6, ease: 'easeInOut' },
              scale: { duration: active ? SLIDE_MS / 1000 + 1.6 : 1.6, ease: 'linear' },
            }}
          />
        );
      })}

      {/* Colour grading */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,22,52,.9)_0%,rgba(6,22,52,.6)_38%,rgba(6,22,52,0)_68%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(6,22,52,.85)_0%,rgba(6,22,52,0)_28%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/35 to-transparent" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(6,22,52,.92)_0%,rgba(6,22,52,.55)_55%,rgba(6,22,52,.25)_100%)] lg:hidden" />
      <div aria-hidden="true" className="absolute -left-40 top-1/4 -z-10 h-[32rem] w-[32rem] rounded-full bg-[#0b3d91]/25 blur-[120px]" />

      {/* Content */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-16 px-5 pb-36 pt-32 sm:px-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-12 lg:pb-40 lg:pt-36">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="mb-8 flex items-center gap-3 text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#f2c14e] sm:gap-4 sm:text-xs sm:tracking-[0.3em]"
          >
            <span className="h-px w-6 shrink-0 bg-[#f2c14e] sm:w-10" />
            Celebrating 40 Years of Legacy
          </motion.div>

          <h1 className="mb-8 font-extrabold tracking-[-.045em]">
            <Line delay={0.2} className="mb-3 text-2xl font-semibold tracking-[-.02em] text-white/75 sm:text-3xl">
              Welcome to
            </Line>
            <Line delay={0.32} className="text-[clamp(2.9rem,7.6vw,7rem)] leading-[.95]">
              Rotaract Club
            </Line>
            <Line delay={0.44} className="text-[clamp(2.9rem,7.6vw,7rem)] leading-[1.02]">
              of <span className="font-accent italic text-[#f2c14e]">Wellawatte</span>
            </Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
            className="mb-11 max-w-xl text-lg leading-8 text-slate-200/90 sm:text-xl sm:leading-9"
          >
            Empowering young leaders to create positive change in our community through service, fellowship, and professional development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
            className="flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#f2c14e] py-2 pl-7 pr-2 font-bold text-[#061634] shadow-[0_18px_40px_-12px_rgba(242,193,78,.6)] transition-colors duration-300 hover:bg-[#f6cf6e]"
            >
              Join Our Club
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#061634] text-[#f2c14e] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </Link>

            <Link
              to="/about"
              className="group inline-flex items-center gap-3 rounded-full py-3.5 pl-2 pr-4 font-semibold text-white"
            >
              <span className="relative">
                Learn More
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-white/50 transition-transform duration-500 group-hover:scale-x-0" />
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-[#f2c14e] transition-transform duration-500 delay-100 group-hover:origin-left group-hover:scale-x-100" />
              </span>
              <ArrowUpRight size={18} className="text-[#f2c14e] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* 40-year emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
          className="relative hidden aspect-square w-[300px] items-center justify-center lg:flex"
          aria-label="Celebrating 40 years of legacy"
        >
          <motion.svg
            viewBox="0 0 300 300"
            className="absolute inset-0 h-full w-full [filter:drop-shadow(0_1px_6px_rgba(6,22,52,.8))]"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            aria-hidden="true"
          >
            <defs>
              <path id="hero-ring" d="M150,150 m-128,0 a128,128 0 1,1 256,0 a128,128 0 1,1 -256,0" />
            </defs>
            <text className="fill-white/70 text-[13px] font-bold uppercase" style={{ letterSpacing: '0.32em' }}>
              <textPath href="#hero-ring">{ringText}{ringText}</textPath>
            </text>
          </motion.svg>
          <div className="absolute inset-[38px] rounded-full border border-white/25" />
          <div className="relative flex flex-col items-center [filter:drop-shadow(0_4px_18px_rgba(6,22,52,.75))]">
            <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-[7.5rem] font-extrabold leading-[.8] tracking-[-.08em] text-transparent">
              40
            </span>
            <span className="mt-3 text-center text-[11px] font-bold uppercase leading-5 tracking-[.34em] text-[#f2c14e]">
              Years<br />of legacy
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar: scroll cue + slide controls */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-[1440px] items-end justify-between px-5 pb-8 sm:px-8 lg:px-12">
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            onClick={() => document.getElementById('club-intro')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Scroll to content"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-[#f2c14e] hover:text-[#f2c14e]"
          >
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={18} />
            </motion.span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center gap-4 text-xs font-semibold tabular-nums tracking-[.18em] text-white/60"
          >
            <span className="text-white">0{currentIndex + 1}</span>
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Show image ${index + 1} of ${slides.length}`}
                  aria-current={index === currentIndex}
                  className="group py-3"
                >
                  <span className="relative block h-[2px] w-8 overflow-hidden bg-white/25 transition-colors group-hover:bg-white/45 sm:w-12">
                    {index === currentIndex && (
                      <motion.span
                        key={`progress-${currentIndex}`}
                        className="absolute inset-0 origin-left bg-[#f2c14e]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: SLIDE_MS / 1000, ease: 'linear' }}
                      />
                    )}
                    {index < currentIndex && <span className="absolute inset-0 bg-white/70" />}
                  </span>
                </button>
              ))}
            </div>
            <span>0{slides.length}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
