import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Globe, BookOpen, Award } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Avenue = () => {
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
      color: "from-red-600 to-red-700",
      bgColor: "from-red-50 to-red-100",
      textColor: "text-red-800",
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
      title: "Clubs Services & Sports",
      description: "Promoting physical fitness, teamwork, and recreational activities through various sports and club activities.",
      icon: Users,
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      textColor: "text-blue-800",
      features: [
        "Sports Tournaments",
        "Fitness Programs",
        "Team Building Activities",
        "Recreational Events",
        "Club Competitions"
      ]
    },
    {
      id: 5,
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
                const isClubsSports = avenue.title === 'Clubs & Sports';
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
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#4B1D1D] to-[#A05252] text-white px-6 py-2 rounded-full font-medium hover:from-[#3A1515] hover:to-[#B36B6B] transition-colors duration-200 shadow-lg"
                          >
                            <span>Learn More</span>
                          </Link>
                        ) : isProfessional ? (
                          <Link
                            to="/professionaldevelopment"
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#4B1D1D] to-[#A05252] text-white px-6 py-2 rounded-full font-medium hover:from-[#3A1515] hover:to-[#B36B6B] transition-colors duration-200 shadow-lg"
                          >
                            <span>Learn More</span>
                          </Link>
                        ) : isInternational ? (
                          <Link
                            to="/internationalservice"
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#4B1D1D] to-[#A05252] text-white px-6 py-2 rounded-full font-medium hover:from-[#3A1515] hover:to-[#B36B6B] transition-colors duration-200 shadow-lg"
                          >
                            <span>Learn More</span>
                          </Link>
                        ) : isClubsSports ? (
                          <Link
                            to="/clubssports"
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#4B1D1D] to-[#A05252] text-white px-6 py-2 rounded-full font-medium hover:from-[#3A1515] hover:to-[#B36B6B] transition-colors duration-200 shadow-lg"
                          >
                            <span>Learn More</span>
                          </Link>
                        ) : (
                          <button
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#4B1D1D] to-[#A05252] text-white px-6 py-2 rounded-full font-medium hover:from-[#3A1515] hover:to-[#B36B6B] transition-colors duration-200 shadow-lg"
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
                const isClubsSports = avenue.title === 'Clubs & Sports';
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
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#4B1D1D] to-[#A05252] text-white px-6 py-2 rounded-full font-medium hover:from-[#3A1515] hover:to-[#B36B6B] transition-colors duration-200 shadow-lg"
                          >
                            <span>Learn More</span>
                          </Link>
                        ) : isProfessional ? (
                          <Link
                            to="/professionaldevelopment"
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#4B1D1D] to-[#A05252] text-white px-6 py-2 rounded-full font-medium hover:from-[#3A1515] hover:to-[#B36B6B] transition-colors duration-200 shadow-lg"
                          >
                            <span>Learn More</span>
                          </Link>
                        ) : isInternational ? (
                          <Link
                            to="/internationalservice"
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#4B1D1D] to-[#A05252] text-white px-6 py-2 rounded-full font-medium hover:from-[#3A1515] hover:to-[#B36B6B] transition-colors duration-200 shadow-lg"
                          >
                            <span>Learn More</span>
                          </Link>
                        ) : isClubsSports ? (
                          <Link
                            to="/clubssports"
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#4B1D1D] to-[#A05252] text-white px-6 py-2 rounded-full font-medium hover:from-[#3A1515] hover:to-[#B36B6B] transition-colors duration-200 shadow-lg"
                          >
                            <span>Learn More</span>
                          </Link>
                        ) : (
                          <button
                            className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#4B1D1D] to-[#A05252] text-white px-6 py-2 rounded-full font-medium hover:from-[#3A1515] hover:to-[#B36B6B] transition-colors duration-200 shadow-lg"
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

export default Avenue;