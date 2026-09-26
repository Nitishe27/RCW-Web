import React from 'react';
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion';
import { Users, Heart, Globe, BookOpen, Award, Trophy, ArrowUpRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LegacyAvenue = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const avenues = [
    {
      id: 1,
      title: "Community Service",
      description: "Addressing local community needs through impactful projects that create positive change and lasting impact in our society.",
      icon: Heart,
      color: "from-[#05204a] to-[#2a4b8d]",
      bgColor: "from-blue-50 to-blue-100",
      textColor: "text-[#05204a]",
      features: [
        "Local Community Projects",
        "Health & Wellness Initiatives",
        "Education Support Programs",
        "Environmental Conservation",
        "Social Welfare Activities"
      ]
    },
    {
      id: 2,
      title: "Professional Development",
      description: "Enhancing career skills and professional growth through workshops, networking, and skill-building activities for members.",
      icon: BookOpen,
      color: "from-purple-600 to-purple-700",
      bgColor: "from-purple-50 to-purple-100",
      textColor: "text-purple-800",
      features: [
        "Skill Development Workshops",
        "Career Networking Events",
        "Professional Training Programs",
        "Industry Insights Sessions",
        "Leadership Development"
      ]
    },
    {
      id: 3,
      title: "International Service",
      description: "Building global connections and understanding through cross-cultural projects and international partnerships.",
      icon: Globe,
      color: "from-green-600 to-green-700",
      bgColor: "from-green-50 to-green-100",
      textColor: "text-green-800",
      features: [
        "Cultural Exchange Programs",
        "Global Partnerships",
        "International Projects",
        "Cross-border Collaboration",
        "Cultural Understanding"
      ]
    },
    {
      id: 4,
      title: "Clubs Service",
      description: "Building unity, collaboration, and fellowship among Rotaract clubs through inter-club activities and shared experiences.",
      icon: Users,
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      textColor: "text-blue-800",
      features: [
        "Inter-club Collaboration",
        "Club Networking",
        "Joint Club Activities",
        "Fellowship Events",
        "Rotaract Unity"
      ]
    },
    {
      id: 5,
      title: "Sports",
      description: "Promoting fitness, healthy competition, and fellowship through sports and recreational activities.",
      icon: Trophy,
      color: "from-blue-700 to-blue-800",
      bgColor: "from-blue-50 to-blue-100",
      textColor: "text-blue-800",
      features: [
        "Sports Tournaments",
        "Fitness & Wellness",
        "Team Building",
        "Fellowship Through Sport",
        "Sportsmanship"
      ]
    },
    {
      id: 6,
      title: "Public Relations",
      description: "Managing communication, branding, and outreach to enhance club visibility and community engagement.",
      icon: Award,
      color: "from-yellow-600 to-yellow-700",
      bgColor: "from-yellow-50 to-yellow-100",
      textColor: "text-yellow-800",
      features: [
        "Media Relations",
        "Brand Management",
        "Social Media Marketing",
        "Event Publicity",
        "Community Outreach"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Avenues of Service
            </motion.h1>
                         <motion.p
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="text-xl text-blue-100 max-w-3xl mx-auto"
             >
               Discover the five core areas that drive our mission of service, leadership, and fellowship in the Rotaract movement.
             </motion.p>
          </div>
            </div>
      </section>

      {/* Avenues Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Our Service Areas</h2>
            <p className="text-lg text-gray-600">Each avenue represents a unique opportunity to make a difference</p>
          </motion.div>

          <div className="flex flex-col items-center gap-8">
            {/* Two rows of two cards each for avenues */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
              {avenues.slice(0, 2).map((avenue, index) => {
                const IconComponent = avenue.icon;
                const isCommunity = avenue.title === 'Community Service';
                const isProfessional = avenue.title === 'Professional Development';
                const isInternational = avenue.title === 'International Service';
                const isClubsSports = avenue.title === 'Clubs Services & Sports';
                return (
                  <motion.div
                    key={avenue.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                  >
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${avenue.color} p-6 text-white`}>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-full">
                          <IconComponent size={28} />
                        </div>
                        <h3 className="text-xl font-bold">{avenue.title}</h3>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6 flex-grow">
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {avenue.description}
                      </p>
                      <div className="space-y-3">
                        <h4 className={`font-semibold ${avenue.textColor} text-lg mb-3`}>
                          Key Focus Areas:
                        </h4>
                        <ul className="space-y-2">
                          {avenue.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${avenue.color}`}></div>
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        {isCommunity ? (
                          <Link
                            to="/communityservice"
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#05204a] to-[#2a4b8d] text-white px-6 py-2 rounded-full font-medium hover:from-[#041634] hover:to-[#3860a8] transition-colors duration-200 shadow-lg"
                          >
                            <span>Learn More</span>
                          </Link>
                        ) : isProfessional ? (
                          <Link
                            to="/professionaldevelopment"
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#05204a] to-[#2a4b8d] text-white px-6 py-2 rounded-full font-medium hover:from-[#041634] hover:to-[#3860a8] transition-colors duration-200 shadow-lg"
                          >
                            <span>Learn More</span>
                          </Link>
                        ) : isInternational ? (
                          <Link
                            to="/internationalservice"
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#05204a] to-[#2a4b8d] text-white px-6 py-2 rounded-full font-medium hover:from-[#041634] hover:to-[#3860a8] transition-colors duration-200 shadow-lg"
                          >
                            <span>Learn More</span>
                          </Link>
                        ) : isClubsSports ? (
                          <Link
                            to="/sports"
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#05204a] to-[#2a4b8d] text-white px-6 py-2 rounded-full font-medium hover:from-[#041634] hover:to-[#3860a8] transition-colors duration-200 shadow-lg"
                          >
                            <span>Learn More</span>
                          </Link>
                        ) : (
                          <button
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#05204a] to-[#2a4b8d] text-white px-6 py-2 rounded-full font-medium hover:from-[#041634] hover:to-[#3860a8] transition-colors duration-200 shadow-lg"
                            onClick={() => {}}
                          >
                            <span>Learn More</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mt-6">
              {avenues.slice(2, 4).map((avenue, index) => {
                const IconComponent = avenue.icon;
                const isCommunity = avenue.title === 'Community Service';
                const isProfessional = avenue.title === 'Professional Development';
                const isInternational = avenue.title === 'International Service';
                const isClubsSports = avenue.title === 'Clubs Services & Sports';
                return (
                  <motion.div
                    key={avenue.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                  >
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${avenue.color} p-6 text-white`}>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-full">
                          <IconComponent size={28} />
                        </div>
                        <h3 className="text-xl font-bold">{avenue.title}</h3>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6 flex-grow">
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {avenue.description}
                      </p>
                      <div className="space-y-3">
                        <h4 className={`font-semibold ${avenue.textColor} text-lg mb-3`}>
                          Key Focus Areas:
                        </h4>
                        <ul className="space-y-2">
                          {avenue.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${avenue.color}`}></div>
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        {isCommunity ? (
                          <Link
                            to="/communityservice"
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#05204a] to-[#2a4b8d] text-white px-6 py-2 rounded-full font-medium hover:from-[#041634] hover:to-[#3860a8] transition-colors duration-200 shadow-lg"
                          >
                            <span>Learn More</span>
                          </Link>
                        ) : isProfessional ? (
                          <Link
                            to="/professionaldevelopment"
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#05204a] to-[#2a4b8d] text-white px-6 py-2 rounded-full font-medium hover:from-[#041634] hover:to-[#3860a8] transition-colors duration-200 shadow-lg"
                          >
                            <span>Learn More</span>
                          </Link>
                        ) : isInternational ? (
                          <Link
                            to="/internationalservice"
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#05204a] to-[#2a4b8d] text-white px-6 py-2 rounded-full font-medium hover:from-[#041634] hover:to-[#3860a8] transition-colors duration-200 shadow-lg"
                          >
                            <span>Learn More</span>
                          </Link>
                        ) : isClubsSports ? (
                          <Link
                            to="/sports"
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#05204a] to-[#2a4b8d] text-white px-6 py-2 rounded-full font-medium hover:from-[#041634] hover:to-[#3860a8] transition-colors duration-200 shadow-lg"
                          >
                            <span>Learn More</span>
                          </Link>
                        ) : (
                          <button
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#05204a] to-[#2a4b8d] text-white px-6 py-2 rounded-full font-medium hover:from-[#041634] hover:to-[#3860a8] transition-colors duration-200 shadow-lg"
                            onClick={() => {}}
                          >
                            <span>Learn More</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Serve?
            </h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join us in making a difference across all avenues of service. 
              Every avenue offers unique opportunities to grow, lead, and create positive change.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
              onClick={() => navigate('/contact')}
            >
              Get Involved Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const EASE = [0.22, 1, 0.36, 1] as const;

/** Masked line that slides up into view */
const Line = ({ children, delay, className = '' }: { children: React.ReactNode; delay: number; className?: string }) => (
  <span className={`block overflow-hidden pb-[0.1em] ${className}`}>
    <motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1, delay, ease: EASE }}>
      {children}
    </motion.span>
  </span>
);

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

const Avenue = () => {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const avenues = [
    { title: 'Community Service', description: 'Addressing local community needs through impactful projects that create positive change and lasting impact in our society.', icon: Heart, color: 'from-[#05204a] to-[#2a4b8d]', textColor: 'text-[#05204a]', path: '/communityservice', features: ['Local Community Projects', 'Health & Wellness Initiatives', 'Education Support Programs', 'Environmental Conservation', 'Social Welfare Activities'] },
    { title: 'Professional Development', description: 'Enhancing career skills and professional growth through workshops, networking, and skill-building activities for members.', icon: BookOpen, color: 'from-[#12305d] to-[#4877b8]', textColor: 'text-[#12305d]', path: '/professionaldevelopment', features: ['Skill Development Workshops', 'Career Networking Events', 'Professional Training Programs', 'Industry Insights Sessions', 'Leadership Development'] },
    { title: 'International Service', description: 'Building global connections and understanding through cross-cultural projects and international partnerships.', icon: Globe, color: 'from-[#0f4c5c] to-[#31858d]', textColor: 'text-[#0f4c5c]', path: '/internationalservice', features: ['Cultural Exchange Programs', 'Global Partnerships', 'International Projects', 'Cross-border Collaboration', 'Cultural Understanding'] },
    { title: 'Clubs Service', description: 'Building unity, collaboration, and fellowship among Rotaract clubs through inter-club activities and shared experiences.', icon: Users, color: 'from-[#1d4e89] to-[#4c8cc9]', textColor: 'text-[#1d4e89]', path: '/clubssports', features: ['Inter-club Collaboration', 'Club Networking', 'Joint Club Activities', 'Fellowship Events', 'Rotaract Unity'] },
    { title: 'Sports & Recreations', description: 'Promoting fitness, healthy competition, and fellowship through sports and recreational activities.', icon: Trophy, color: 'from-[#2563eb] to-[#1d4ed8]', textColor: 'text-[#1d4ed8]', path: '/sports', features: ['Sports Tournaments', 'Fitness & Wellness', 'Team Building', 'Fellowship Through Sport', 'Sportsmanship'] },
    { title: 'Public Relations', description: 'Managing communication, branding, and outreach to enhance club visibility and community engagement.', icon: Award, color: 'from-[#0f4c5c] to-[#2a9d8f]', textColor: 'text-[#0f4c5c]', path: '/publicrelations', features: ['Media Relations', 'Brand Management', 'Social Media Marketing', 'Event Publicity', 'Community Outreach'] },
  ];

  const [active, setActive] = React.useState(0);
  const current = avenues[active];
  const CurrentIcon = current.icon;

  const focusAvenue = (index: number) => {
    setActive(index);
    document.getElementById('service-areas')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-[#f7f6f2] text-[#061634] selection:bg-[#f2c14e] selection:text-[#061634]">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="relative isolate overflow-hidden bg-[#061634] text-white">
            <div aria-hidden="true" className="absolute -left-40 top-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#0b3d91]/50 blur-[130px]" />
            <div aria-hidden="true" className="absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#f2c14e]/10 blur-[110px]" />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 opacity-[0.05]"
              style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
            />

            <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:grid-cols-[1.1fr_.9fr]">
              <div>
                <motion.p
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
                  className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[.3em] text-[#f2c14e]"
                >
                  <span className="h-px w-10 bg-[#f2c14e]" /> Rotaract Club of Wellawatte
                </motion.p>
                <h1 className="text-[clamp(3rem,7.2vw,6.4rem)] font-extrabold leading-[.95] tracking-[-.045em]">
                  <Line delay={0.2}>Avenues of</Line>
                  <Line delay={0.32}>
                    <span className="font-accent italic text-[#f2c14e]">Service</span>
                  </Line>
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
                  className="mt-8 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9"
                >
                  Six pathways for service, leadership, connection, and meaningful impact in our community and beyond.
                </motion.p>
              </div>

              {/* Avenue constellation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.3, delay: 0.3, ease: EASE }}
                className="relative mx-auto hidden aspect-square w-full max-w-[440px] sm:block"
              >
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-[12%] rounded-full border border-dashed border-white/20"
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                />
                <div aria-hidden="true" className="absolute inset-[30%] rounded-full border border-white/10 bg-white/[0.03]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-7xl font-extrabold leading-none tracking-[-.06em] text-transparent">
                    0{avenues.length}
                  </span>
                  <span className="mt-2 text-[11px] font-bold uppercase tracking-[.3em] text-[#f2c14e]">Avenues</span>
                </div>

                {avenues.map((avenue, index) => {
                  const Icon = avenue.icon;
                  const angle = (index / avenues.length) * Math.PI * 2 - Math.PI / 2;
                  const x = 50 + 38 * Math.cos(angle);
                  const y = 50 + 38 * Math.sin(angle);
                  return (
                    <motion.button
                      key={avenue.title}
                      type="button"
                      onClick={() => focusAvenue(index)}
                      aria-label={avenue.title}
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: 0.6 + index * 0.08, ease: EASE }}
                      style={{ left: `${x}%`, top: `${y}%` }}
                      className="group absolute -translate-x-1/2 -translate-y-1/2"
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0b2a5b] text-[#f2c14e] shadow-[0_18px_40px_-14px_rgba(0,0,0,.6)] ring-1 ring-white/15 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[#f2c14e] group-hover:text-[#061634] group-hover:ring-[#f2c14e]">
                        <Icon size={24} strokeWidth={1.8} />
                      </span>
                      <span className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#061634] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                        {avenue.title}
                      </span>
                    </motion.button>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* Service areas */}
          <section id="service-areas" className="scroll-mt-20 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="mb-16 grid grid-cols-1 items-end gap-8 lg:grid-cols-2">
                <Reveal>
                  <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[.28em] text-[#b8862b]">
                    <span className="h-px w-10 bg-[#b8862b]/60" /> Find your avenue
                  </p>
                  <h2 className="text-4xl font-bold leading-[1.05] tracking-[-.04em] sm:text-5xl lg:text-6xl">
                    Our Service <span className="font-accent italic text-[#0b3d91]">Areas</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="max-w-xl text-lg leading-8 text-slate-600 lg:ml-auto">
                    Each avenue brings a different strength to our shared mission of service and fellowship.
                  </p>
                </Reveal>
              </div>

              {/* Desktop: interactive explorer */}
              <Reveal className="hidden gap-6 lg:grid lg:grid-cols-[380px_1fr]">
                <div role="tablist" aria-label="Avenues of service" className="flex flex-col gap-1.5">
                  {avenues.map((avenue, index) => {
                    const Icon = avenue.icon;
                    const selected = index === active;
                    return (
                      <button
                        key={avenue.title}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        onClick={() => setActive(index)}
                        onMouseEnter={() => setActive(index)}
                        className="group relative flex items-center gap-4 rounded-2xl px-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b3d91]"
                      >
                        {selected && (
                          <motion.span
                            layoutId="avenue-tab"
                            className="absolute inset-0 rounded-2xl bg-white shadow-[0_18px_40px_-20px_rgba(6,22,52,.35)] ring-1 ring-slate-900/[0.06]"
                            transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                          />
                        )}
                        <span className={`relative text-xs font-bold tabular-nums tracking-[.2em] transition-colors ${selected ? 'text-[#b8862b]' : 'text-slate-400'}`}>
                          0{index + 1}
                        </span>
                        <span
                          className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                            selected ? 'bg-[#061634] text-[#f2c14e]' : 'bg-slate-900/[0.05] text-slate-500 group-hover:text-[#061634]'
                          }`}
                        >
                          <Icon size={20} strokeWidth={1.8} />
                        </span>
                        <span className={`relative text-[1.05rem] font-bold tracking-[-.01em] transition-colors ${selected ? 'text-[#061634]' : 'text-slate-500 group-hover:text-[#061634]'}`}>
                          {avenue.title}
                        </span>
                        <ArrowUpRight
                          size={18}
                          className={`relative ml-auto transition-all duration-300 ${selected ? 'rotate-45 text-[#061634] opacity-100' : 'opacity-0'}`}
                        />
                      </button>
                    );
                  })}
                </div>

                <div role="tabpanel" className="relative isolate min-h-[520px] overflow-hidden rounded-[32px] bg-[#061634] p-12 text-white">
                  <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-[#0b3d91]/60 blur-[100px]" />
                  <div aria-hidden="true" className="absolute -bottom-20 left-10 -z-10 h-64 w-64 rounded-full bg-[#f2c14e]/10 blur-[90px]" />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="flex h-full flex-col"
                    >
                      <span aria-hidden="true" className="font-accent pointer-events-none absolute -top-6 right-8 text-[11rem] italic leading-none text-white/[0.05]">
                        0{active + 1}
                      </span>
                      <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f2c14e] text-[#061634]">
                        <CurrentIcon size={28} strokeWidth={1.8} />
                      </div>
                      <h3 className="text-4xl font-bold tracking-[-.035em] xl:text-5xl">{current.title}</h3>
                      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{current.description}</p>

                      <h4 className="mb-5 mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[.24em] text-[#f2c14e]">
                        Key Focus Areas <span className="h-px flex-1 bg-white/10" />
                      </h4>
                      <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                        {current.features.map((feature, i) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.15 + i * 0.05, ease: EASE }}
                            className="flex items-center gap-3 text-[15px] text-slate-200"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#f2c14e]" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      <div className="mt-12">
                        <Link
                          to={current.path}
                          className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-7 pr-2 font-bold text-[#061634] transition-colors duration-300 hover:bg-[#f2c14e]"
                        >
                          Explore Avenue
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#061634] text-[#f2c14e] transition-transform duration-300 group-hover:rotate-45">
                            <ArrowUpRight size={18} />
                          </span>
                        </Link>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </Reveal>

              {/* Mobile & tablet: stacked cards */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:hidden">
                {avenues.map((avenue, index) => {
                  const Icon = avenue.icon;
                  return (
                    <Reveal key={avenue.title} delay={(index % 2) * 0.08}>
                      <article className="relative flex h-full flex-col overflow-hidden rounded-[26px] bg-white p-7 shadow-[0_24px_50px_-30px_rgba(6,22,52,.4)] ring-1 ring-slate-900/[0.06]">
                        <div className="mb-8 flex items-start justify-between">
                          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#061634] text-[#f2c14e]">
                            <Icon size={24} strokeWidth={1.8} />
                          </span>
                          <span className="font-accent text-4xl italic leading-none text-slate-200">0{index + 1}</span>
                        </div>
                        <h3 className="text-2xl font-bold tracking-[-.03em]">{avenue.title}</h3>
                        <p className="mt-3 leading-7 text-slate-600">{avenue.description}</p>
                        <h4 className="mb-4 mt-7 text-xs font-bold uppercase tracking-[.22em] text-[#b8862b]">Key Focus Areas</h4>
                        <ul className="space-y-2.5 text-[15px] text-slate-600">
                          {avenue.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#f2c14e]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto pt-8">
                          <Link
                            to={avenue.path}
                            className="group flex w-full items-center justify-between rounded-full bg-[#061634] py-2 pl-6 pr-2 font-semibold text-white"
                          >
                            Explore Avenue
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2c14e] text-[#061634] transition-transform duration-300 group-hover:rotate-45">
                              <ArrowUpRight size={17} />
                            </span>
                          </Link>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Call to action */}
          <section className="px-3 pb-3 sm:px-5 sm:pb-5">
            <div className="relative isolate mx-auto max-w-[1440px] overflow-hidden rounded-[32px] bg-[#061634] px-6 py-24 text-center text-white sm:px-10 sm:py-32">
              <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[#f2c14e]/20 blur-[110px]" />
              <div aria-hidden="true" className="absolute -bottom-32 -left-20 -z-10 h-80 w-80 rounded-full bg-[#0b3d91]/60 blur-[110px]" />
              <Reveal>
                <h3 className="mx-auto mb-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-.04em] sm:text-6xl">
                  Ready to <span className="font-accent italic text-[#f2c14e]">Serve?</span>
                </h3>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mx-auto mb-11 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Join us in making a difference across all avenues of service. Every avenue offers unique opportunities to grow, lead, and create positive change.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#f2c14e] py-2 pl-7 pr-2 font-bold text-[#061634] shadow-[0_18px_40px_-12px_rgba(242,193,78,.55)] transition-colors duration-300 hover:bg-[#f6cf6e]"
                >
                  Get Involved Today
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#061634] text-[#f2c14e] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </button>
              </Reveal>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default Avenue;
