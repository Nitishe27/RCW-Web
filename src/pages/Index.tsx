import React, { useState } from 'react';
import { MotionConfig, motion } from 'framer-motion';
import { Heart, Users, ArrowUpRight, Globe, Club, Megaphone, Trophy, Pause, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import GroupPicInstallation from '../Pictures/Group Pic - Installation.jpg';
import RanjanAward from '../Pictures/RanjanAward.jpg'
import Lailath from '../Pictures/Lailath1.jpeg';
import WellaPongal26 from '../Pictures/WELLPONGAL26-1.jpg';
import InstallationImg39 from '../Pictures/installation-1.jpg';
import CrownConsipiracy from '../Pictures/CrownCons1.jpeg';
import RDA from '../Pictures/RDA.jpeg';
import BreakAway26 from '../Pictures/BreakAway-2.jpeg'
import NextStep1 from '../Pictures/NextStep1.jpeg'
import Pinnacle from '../Pictures/Pinnacle.jpeg';
import YPL from '../Pictures/YPL.jpeg';
import Mithuru1 from '../Pictures/Mithuru1.jpeg'
import Installation40 from '../Pictures/40th Installation.jpeg'

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fades and lifts its children into view once */
const Reveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.9, delay, ease: EASE }}
    className={className}
  >
    {children}
  </motion.div>
);

/** Small numbered section marker, e.g. "(02)" with a gold rule */
const SectionMark = ({ n, light = false }: { n: string; light?: boolean }) => (
  <div className={`mb-6 flex items-center gap-3 text-xs font-bold tabular-nums tracking-[.3em] ${light ? 'text-[#f2c14e]' : 'text-[#b8862b]'}`}>
    <span>({n})</span>
    <span className={`h-px w-12 ${light ? 'bg-[#f2c14e]/60' : 'bg-[#b8862b]/50'}`} />
  </div>
);

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
    { image: Pinnacle, alt: 'Pinnacle' },
    { image: YPL, alt: 'YPL' },
    { image: Mithuru1, alt: 'Mithuru 1' },
    { image: BreakAway26, alt: 'Breakaway 26' },
    { image: NextStep1, alt: 'Next Step 1' },
  ];

  const stats = [
    { end: 75, duration: 2, label: 'Projects Completed' },
    { end: 54, duration: 2, label: 'Active Members' },
    { end: 1500, duration: 2.5, label: 'Volunteer Hours' },
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);
  const toggleGallery = () => setIsGalleryPaused((paused) => !paused);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#f7f6f2] text-slate-900 selection:bg-[#f2c14e] selection:text-[#061634]">
        <Navbar />
        <Hero />

        {/* Legacy band */}
        <section className="relative border-b border-slate-900/[0.06] bg-[#f7f6f2]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 py-14 sm:px-8 md:py-16 lg:grid-cols-[auto_1fr] lg:gap-16">
            <Reveal className="flex items-center gap-6">
              <span className="bg-gradient-to-br from-[#0b3d91] to-[#061634] bg-clip-text text-7xl font-extrabold leading-none tracking-[-.07em] text-transparent sm:text-8xl">
                40
              </span>
              <div className="h-16 w-px bg-gradient-to-b from-transparent via-[#f2c14e] to-transparent" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[.28em] text-[#b8862b]">1987 — 2026</p>
                <h2 className="mt-2 text-2xl font-bold tracking-[-.03em] text-[#061634] sm:text-[1.7rem]">40 Years of Legacy</h2>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-accent text-2xl italic leading-snug text-slate-700 sm:text-[1.85rem] lg:border-l lg:border-slate-900/10 lg:pl-12">
                A journey shaped by service, fellowship, and the young leaders who continue to carry the Rotaract Club of Wellawatte forward.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Club Introduction */}
        <section id="club-intro" className="scroll-mt-20 overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
            {/* Photo collage */}
            <Reveal className="relative lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div aria-hidden="true" className="absolute -right-4 -top-4 h-full w-full rounded-[28px] border border-[#f2c14e]/70 sm:-right-6 sm:-top-6" />
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_40px_80px_-30px_rgba(6,22,52,.45)]">
                  <img
                    src={InstallationImg39}
                    alt="Rotaract Club of Wellawatte installation"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061634]/40 via-transparent to-transparent" />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 40, rotate: -4 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: EASE }}
                  className="absolute -bottom-10 -left-4 w-[46%] overflow-hidden rounded-2xl border-[6px] border-white shadow-[0_24px_50px_-18px_rgba(6,22,52,.5)] sm:-left-10"
                >
                  <img src={Installation40} alt="Club members at the installation" loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
                </motion.div>
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal>
                <SectionMark n="01" />
                <h2 className="mb-8 text-4xl font-bold leading-[1.05] tracking-[-.04em] text-[#061634] sm:text-5xl lg:text-6xl">
                  About Rotaract Club of <span className="font-accent italic text-[#0b3d91]">Wellawatte</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
                  The Rotaract Club of Wellawatte is a vibrant community of young professionals and students dedicated to making a positive impact through service, leadership, and fellowship. As part of the global Rotaract movement, we strive to empower youth, foster personal and professional growth, and create lasting change in our local and international communities.
                </p>
              </Reveal>
              <Reveal delay={0.24} className="mt-10">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#061634] py-2 pl-7 pr-2 font-semibold text-white shadow-[0_18px_40px_-16px_rgba(6,22,52,.6)] transition-colors duration-300 hover:bg-[#0b2a5b]"
                >
                  Read More
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2c14e] text-[#061634] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-[#f7f6f2] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-16 grid grid-cols-1 items-end gap-8 lg:grid-cols-2">
              <Reveal>
                <SectionMark n="02" />
                <h2 className="text-4xl font-bold tracking-[-.04em] text-[#061634] sm:text-5xl lg:text-6xl">
                  What We <span className="font-accent italic text-[#0b3d91]">Do</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-xl text-lg leading-8 text-slate-600 lg:ml-auto">
                  Our Rotaract Club focuses on service, professional development, and fellowship to create positive change in our community and beyond.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] bg-slate-900/[0.08] ring-1 ring-slate-900/[0.08] sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const card = (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
                    className="group relative flex h-full flex-col overflow-hidden bg-white p-8 transition-colors duration-500 hover:bg-[#061634] sm:p-10"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0b3d91] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
                    />
                    <div className="relative mb-10 flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#061634] text-[#f2c14e] transition-colors duration-500 group-hover:bg-[#f2c14e] group-hover:text-[#061634]">
                        <Icon size={24} strokeWidth={1.8} />
                      </div>
                      <span className="text-sm font-bold tabular-nums tracking-[.2em] text-slate-300 transition-colors duration-500 group-hover:text-white/40">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="relative mb-3 text-xl font-bold tracking-[-.02em] text-[#061634] transition-colors duration-500 group-hover:text-white sm:text-[1.35rem]">
                      {feature.title}
                    </h3>
                    <p className="relative leading-7 text-slate-600 transition-colors duration-500 group-hover:text-slate-300">
                      {feature.description}
                    </p>
                    {feature.path && (
                      <span className="relative mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[#061634] transition-all duration-500 group-hover:rotate-45 group-hover:border-[#f2c14e] group-hover:bg-[#f2c14e]">
                        <ArrowUpRight size={18} />
                      </span>
                    )}
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#f2c14e] transition-transform duration-700 ease-out group-hover:scale-x-100"
                    />
                  </motion.div>
                );
                return feature.path ? (
                  <Link key={feature.title} to={feature.path} className="block h-full">
                    {card}
                  </Link>
                ) : (
                  <div key={feature.title}>{card}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section ref={ref} className="relative overflow-hidden bg-[#061634] py-24 text-white sm:py-32">
          <div aria-hidden="true" className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[#0b3d91]/50 blur-[120px]" />
          <div aria-hidden="true" className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#f2c14e]/15 blur-[100px]" />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
          />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-16 grid grid-cols-1 items-end gap-8 lg:grid-cols-2">
              <Reveal>
                <SectionMark n="03" light />
                <h2 className="text-4xl font-bold tracking-[-.04em] sm:text-5xl lg:text-6xl">
                  Our <span className="font-accent italic text-[#f2c14e]">Impact</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-xl text-lg leading-8 text-slate-300 lg:ml-auto">
                  Celebrating the milestones we've achieved as a club committed to service and development.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 border-t border-white/10 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <Reveal
                  key={stat.label}
                  delay={index * 0.12}
                  className={`py-10 sm:px-8 sm:py-12 ${index > 0 ? 'border-t border-white/10 sm:border-l sm:border-t-0' : 'sm:pl-0'}`}
                >
                  <h3 className="mb-3 flex items-start text-6xl font-extrabold tabular-nums tracking-[-.05em] sm:text-5xl lg:text-7xl">
                    {inView ? <CountUp end={stat.end} duration={stat.duration} separator="," /> : 0}
                    <span className="ml-1 text-4xl text-[#f2c14e] sm:text-3xl lg:text-5xl">+</span>
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-[.22em] text-slate-400">{stat.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <Reveal>
                <SectionMark n="04" />
                <h2 className="mb-5 text-4xl font-bold tracking-[-.04em] text-[#061634] sm:text-5xl lg:text-6xl">
                  Recent <span className="font-accent italic text-[#0b3d91]">Projects</span>
                </h2>
                <p className="max-w-xl text-lg leading-8 text-slate-600">
                  Here are some of our recent projects and initiatives.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-3 rounded-full border border-slate-900/15 py-2 pl-6 pr-2 font-semibold text-[#061634] transition-colors duration-300 hover:border-[#061634] hover:bg-[#061634] hover:text-white"
                >
                  View All Events
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#061634] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#f2c14e] group-hover:text-[#061634]">
                    <ArrowUpRight size={17} />
                  </span>
                </Link>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
              {recentProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.9, delay: index * 0.12, ease: EASE }}
                  className={
                    index === 0
                      ? 'md:col-span-2 lg:col-span-7 lg:row-span-2'
                      : 'lg:col-span-5'
                  }
                >
                  <Link
                    to={project.link}
                    className={`group relative block h-full overflow-hidden rounded-[28px] bg-[#061634] ${
                      index === 0 ? 'aspect-[4/3] lg:aspect-auto lg:min-h-[560px]' : 'aspect-[16/11] lg:aspect-auto lg:min-h-[270px]'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061634]/95 via-[#061634]/25 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                    <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#f2c14e] group-hover:text-[#061634] group-hover:ring-[#f2c14e]">
                      <ArrowUpRight size={20} />
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                      <span className="mb-3 block text-xs font-bold tabular-nums tracking-[.3em] text-[#f2c14e]">0{index + 1}</span>
                      <h3 className={`font-bold tracking-[-.03em] text-white ${index === 0 ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-3xl'}`}>
                        {project.title}
                      </h3>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors group-hover:text-white">
                        <span className="relative">
                          Learn More
                          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[#f2c14e] transition-transform duration-500 group-hover:scale-x-100" />
                        </span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Gallery */}
        <section className="overflow-hidden bg-[#f7f6f2] py-24 sm:py-32">
          <style>{`
            @keyframes gallery-slide {
              from { transform: translateX(0); }
              to { transform: translateX(calc(-50% - 0.75rem)); }
            }
            .gallery-track { animation: gallery-slide 48s linear infinite; }
            .gallery-track.gallery-paused { animation-play-state: paused; }
            @media (prefers-reduced-motion: reduce) {
              .gallery-track { animation-play-state: paused; }
            }
          `}</style>
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <Reveal>
                <SectionMark n="05" />
                <h2 className="mb-5 text-4xl font-bold tracking-[-.04em] text-[#061634] sm:text-5xl lg:text-6xl">
                  Sample <span className="font-accent italic text-[#0b3d91]">Gallery</span>
                </h2>
                <p className="max-w-xl text-lg leading-8 text-slate-600">A glimpse at some of our favorite moments !</p>
              </Reveal>
              <Reveal delay={0.1}>
                <button
                  type="button"
                  aria-label={isGalleryPaused ? 'Resume gallery animation' : 'Pause gallery animation'}
                  aria-pressed={isGalleryPaused}
                  onClick={toggleGallery}
                  className="group inline-flex items-center gap-3 rounded-full border border-slate-900/15 bg-white py-2 pl-2 pr-5 text-xs font-bold uppercase tracking-[0.16em] text-[#061634] shadow-sm transition-colors duration-300 hover:border-[#061634] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b3d91] focus-visible:ring-offset-2"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#061634] text-[#f2c14e]">
                    {isGalleryPaused ? <Play size={12} fill="currentColor" aria-hidden="true" /> : <Pause size={12} fill="currentColor" aria-hidden="true" />}
                  </span>
                  <span>{isGalleryPaused ? 'Tap to resume' : 'Tap to pause'}</span>
                </button>
              </Reveal>
            </div>
          </div>

          <div
            role="button"
            tabIndex={0}
            aria-label={isGalleryPaused ? 'Resume gallery animation' : 'Pause gallery animation'}
            onClick={toggleGallery}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleGallery();
              }
            }}
            className="relative cursor-pointer outline-none [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] focus-visible:ring-2 focus-visible:ring-[#0b3d91]"
          >
            <div className={`gallery-track flex w-max items-center gap-6 py-6 ${isGalleryPaused ? 'gallery-paused' : ''}`}>
              {[...galleryImages, ...galleryImages].map(({ image, alt }, index) => (
                <div
                  key={`${alt}-${index}`}
                  className={`group relative shrink-0 overflow-hidden rounded-[22px] shadow-[0_24px_50px_-24px_rgba(6,22,52,.45)] ${
                    index % 2 === 0
                      ? 'h-72 w-[min(78vw,20rem)] sm:h-80 sm:w-[22rem]'
                      : 'h-60 w-[min(70vw,18rem)] sm:h-64 sm:w-[19rem]'
                  }`}
                >
                  <img
                    src={image}
                    alt={alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="bg-[#f7f6f2] px-3 pb-3 sm:px-5 sm:pb-5">
          <div className="relative isolate mx-auto max-w-[1440px] overflow-hidden rounded-[32px] bg-[#061634] px-6 py-24 text-center text-white sm:px-10 sm:py-32">
            <img
              src={GroupPicInstallation}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
            />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(6,22,52,.55)_0%,rgba(6,22,52,.95)_70%)]" />
            <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[#f2c14e]/20 blur-[110px]" />

            <Reveal>
              <h2 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-.04em] sm:text-6xl lg:text-7xl">
                Ready to Make a <span className="font-accent italic text-[#f2c14e]">Difference?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mb-11 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Join our community of young leaders dedicated to service, professional growth, and positive change.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#f2c14e] py-2 pl-7 pr-2 font-bold text-[#061634] shadow-[0_18px_40px_-12px_rgba(242,193,78,.55)] transition-colors duration-300 hover:bg-[#f6cf6e]"
              >
                Join Our Club
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#061634] text-[#f2c14e] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#061634]"
              >
                Learn More
              </Link>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>
    </MotionConfig>
  );
};

export default Index;
