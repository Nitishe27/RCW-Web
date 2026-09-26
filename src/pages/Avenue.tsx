import React from 'react';
import { motion } from 'framer-motion';
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

const Avenue = () => { 
  const navigate = useNavigate();
  const avenues = [
    { title: 'Community Service', description: 'Addressing local community needs through impactful projects that create positive change and lasting impact in our society.', icon: Heart, color: 'from-[#05204a] to-[#2a4b8d]', textColor: 'text-[#05204a]', path: '/communityservice', features: ['Local Community Projects', 'Health & Wellness Initiatives', 'Education Support Programs', 'Environmental Conservation', 'Social Welfare Activities'] },
    { title: 'Professional Development', description: 'Enhancing career skills and professional growth through workshops, networking, and skill-building activities for members.', icon: BookOpen, color: 'from-[#12305d] to-[#4877b8]', textColor: 'text-[#12305d]', path: '/professionaldevelopment', features: ['Skill Development Workshops', 'Career Networking Events', 'Professional Training Programs', 'Industry Insights Sessions', 'Leadership Development'] },
    { title: 'International Service', description: 'Building global connections and understanding through cross-cultural projects and international partnerships.', icon: Globe, color: 'from-[#0f4c5c] to-[#31858d]', textColor: 'text-[#0f4c5c]', path: '/internationalservice', features: ['Cultural Exchange Programs', 'Global Partnerships', 'International Projects', 'Cross-border Collaboration', 'Cultural Understanding'] },
    { title: 'Clubs Service', description: 'Building unity, collaboration, and fellowship among Rotaract clubs through inter-club activities and shared experiences.', icon: Users, color: 'from-[#1d4e89] to-[#4c8cc9]', textColor: 'text-[#1d4e89]', path: '/clubssports', features: ['Inter-club Collaboration', 'Club Networking', 'Joint Club Activities', 'Fellowship Events', 'Rotaract Unity'] },
    { title: 'Sports & Recreations', description: 'Promoting fitness, healthy competition, and fellowship through sports and recreational activities.', icon: Trophy, color: 'from-[#2563eb] to-[#1d4ed8]', textColor: 'text-[#1d4ed8]', path: '/sports', features: ['Sports Tournaments', 'Fitness & Wellness', 'Team Building', 'Fellowship Through Sport', 'Sportsmanship'] },
    { title: 'Public Relations', description: 'Managing communication, branding, and outreach to enhance club visibility and community engagement.', icon: Award, color: 'from-[#0f4c5c] to-[#2a9d8f]', textColor: 'text-[#0f4c5c]', path: '/publicrelations', features: ['Media Relations', 'Brand Management', 'Social Media Marketing', 'Event Publicity', 'Community Outreach'] },
  ];
  const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-900">
      <Navbar />
      <main>
        <section className="relative isolate flex min-h-[430px] items-center overflow-hidden bg-gradient-to-br from-[#071f4d] via-[#123f85] to-[#0f4c5c] py-24 text-white sm:min-h-[500px] sm:py-28">
          <div aria-hidden="true" className="absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full border border-white/10" />
          <div aria-hidden="true" className="absolute bottom-0 left-1/3 -z-10 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />
          <div aria-hidden="true" className="absolute inset-y-0 right-0 -z-10 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.04)),linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:auto,42px_42px,42px_42px] opacity-40" />
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: .7 }} className="max-w-3xl border-l-2 border-cyan-300/60 pl-6 sm:pl-8">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[.2em] text-cyan-200">Rotaract Club of Wellawatte</p>
              <h1 className="text-5xl font-semibold tracking-[-.04em] sm:text-7xl">Avenues of Service</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-sky-100 sm:text-xl">Six pathways for service, leadership, connection, and meaningful impact in our community and beyond.</p>
            </motion.div>
          </div>
        </section>
        <section className="py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-8"><motion.div initial="hidden" whileInView="visible" variants={reveal} transition={{ duration: .7 }} viewport={{ once: true }} className="mb-12 flex items-end justify-between gap-6"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[.18em] text-blue-700">Find your avenue</p><h2 className="text-4xl font-semibold tracking-[-.035em] text-slate-900 sm:text-5xl">Our Service Areas</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Each avenue brings a different strength to our shared mission of service and fellowship.</p></div><Heart className="hidden text-blue-700 sm:block" size={30} /></motion.div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{avenues.map((avenue, index) => { const Icon = avenue.icon; return <motion.article key={avenue.title} initial="hidden" whileInView="visible" variants={reveal} transition={{ duration: .6, delay: index * .07 }} viewport={{ once: true }} className="group flex h-full flex-col overflow-hidden border border-slate-200/80 bg-white shadow-[0_12px_35px_rgba(15,35,70,.07)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(15,35,70,.14)]"><div className={`bg-gradient-to-r ${avenue.color} p-7 text-white`}><div className="mb-8 flex h-12 w-12 items-center justify-center border border-white/30 bg-white/10 transition duration-300 group-hover:bg-white/20"><Icon size={24} /></div><div className="flex items-start justify-between gap-4"><h3 className="text-2xl font-semibold tracking-[-.02em]">{avenue.title}</h3><ArrowUpRight className="mt-1 shrink-0 opacity-70 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" size={20} /></div></div><div className="flex flex-1 flex-col p-7"><p className="leading-7 text-slate-600">{avenue.description}</p><h4 className={`mt-8 mb-4 font-semibold ${avenue.textColor}`}>Key Focus Areas</h4><ul className="space-y-3 text-sm text-slate-600">{avenue.features.map(feature => <li key={feature} className="flex gap-3"><span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${avenue.color}`} />{feature}</li>)}</ul><div className="mt-auto pt-8">{avenue.path ? <Link to={avenue.path} className="inline-flex w-full items-center justify-center bg-[#082b66] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#123f85]">Explore Avenue</Link> : <button onClick={() => {}} className="inline-flex w-full items-center justify-center bg-[#082b66] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#123f85]">Explore Avenue</button>}</div></div></motion.article>; })}</div></div></section>
        <section className="bg-gradient-to-br from-[#082b66] to-[#0f4c5c] py-20 text-center text-white sm:py-24"><motion.div initial="hidden" whileInView="visible" variants={reveal} transition={{ duration: .7 }} viewport={{ once: true }} className="mx-auto max-w-3xl px-5 sm:px-8"><h3 className="text-4xl font-semibold tracking-[-.035em]">Ready to Serve?</h3><p className="mt-6 text-lg leading-8 text-sky-100">Join us in making a difference across all avenues of service. Every avenue offers unique opportunities to grow, lead, and create positive change.</p><motion.button whileHover={{ y: -2 }} whileTap={{ scale: .98 }} onClick={() => navigate('/contact')} className="mt-9 bg-white px-8 py-3 font-semibold text-[#082b66] shadow-lg transition hover:bg-sky-50">Get Involved Today</motion.button></motion.div></section>
      </main><Footer />
    </div>
  );
};

export default Avenue;