import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BreakawayImg from '../Pictures/Breakaway.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: BreakawayImg, alt: 'Breakaway' },
];

const Breakaway = () => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const handleNext = () => {
    setImgIndex((prev) => (prev + 1) % images.length);
  };
  const handlePrev = () => {
    setImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <button
            onClick={() => navigate('/projects')}
            className="absolute -top-2 -left-8 md:-left-12 flex items-center gap-2 p-2 bg-white rounded-full shadow hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 z-10 group"
            aria-label="Back to Projects"
          >
            <ArrowLeft size={22} className="text-blue-800 group-hover:text-blue-900 transition-colors" />
            <span className="hidden sm:inline text-blue-800 font-medium group-hover:text-blue-900 transition-colors">Back</span>
          </button>
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Breakaway</h1>
            </motion.div>
            <div className="flex justify-center items-center mb-8 gap-4">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Previous image"
              >
                <ArrowLeft size={28} className="text-blue-800" />
              </button>
              <motion.img
                key={imgIndex}
                src={images[imgIndex].src}
                alt={images[imgIndex].alt}
                className="w-full max-w-xl object-contain"
                style={{ maxHeight: '350px' }}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              />
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Next image"
              >
                <ArrowRight size={28} className="text-blue-800" />
              </button>
            </div>
            <motion.p
              className="text-base text-blue-900 font-semibold max-w-4xl mx-auto text-center mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Project Chair: Rtr. Azeef Azmie
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Break-A-Way is an annual orientation program that brings together new and existing members of the Rotaract Club of Wellawatte to foster a sense of belonging, teamwork, and deeper understanding of Rotaract's mission. Held on August 3rd, 2024, at the iconic Independence Square, this year's event started at 8:30 AM, with a warm-up session to refresh and energize the participants, setting the tone for an exciting and productive day.<br/><br/>
              The event's primary goal was to orient new members while strengthening bonds within the club. Following the warm-up, each member introduced themselves, allowing everyone to get to know each other better. This was followed by an opening speech from President Rtr. Kugaleshani Ravirajah, who shared her inspiring vision for the year and emphasized the importance of Rotaract in personal and professional growth.<br/><br/>
              The past presidents of the club were special invitees to this event, and their experiences became the foundation for insightful learning throughout the day. The first session of the event honored these past presidents—PP. Vidyas Nyanasekaram, PP. Kayalvizhi Mathavaram, PP. Frank Joseph, and IPP Rtr. Rebeccan Letchumanan—for their invaluable contributions to the club and Rotaract as a whole. Each of them shared their personal journeys, detailing how Rotaract shaped their lives, providing mentorship and guidance to the current members.<br/><br/>
              PP. Vidyas Nyanasekaram kicked off the speeches, reflecting on how Rotaract had transformed his life and what he had learned from his time in the club. He emphasized the value of taking opportunities and making the most of them. Following him, PP. Kayalvizhi Mathavaram spoke passionately about the importance of Rotaract and shared her experiences on how the Rotaract Club of Wellawatte functions and thrives. PP. Frank Joseph then took the stage, focusing on the essence of fellowship and the vast opportunities available through Rotaract, encouraging members to build strong networks and friendships. IPP Rtr. Rebeccan Letchumanan concluded the speeches by recounting her personal experience as the Immediate Past President, underlining how Rotaract provides members with the freedom to make mistakes, learn, and grow, all without fear of rejection or failure.<br/><br/>
              To further engage the members and promote collaboration, the event featured two interactive games: Building the Tallest Tower (using newspapers and cellotape) and Dog n Bone. The games were designed to be both fun and educational, as they required participants to work in teams, think creatively, and communicate effectively to achieve a common goal. Members were divided into two groups, and both games served as a platform to strengthen teamwork and highlight the importance of working together towards success.<br/><br/>
              In addition to these engaging activities, refreshments were provided to keep the energy high throughout the day. The event also had a lighter side, as latecomers were given funny punishments in between the speeches, creating an atmosphere of laughter and camaraderie.<br/><br/>
              A key feature of the program was the interactive question-and-answer session, which allowed members to pose questions directly to the past presidents. This two-way communication created a more personalized learning experience and gave the newer members an opportunity to clear their doubts, seek advice, and gain deeper insights into how they could make the most of their Rotaract journey.<br/><br/>
              The program concluded with a vote of thanks delivered by Professional Development Director Rtr. Rodney Rajaratnam, who expressed gratitude to the past presidents, participants, and organizers for their valuable contributions to the success of the event. A group photo was taken to capture the special memories of the day, marking the official close of the event.<br/><br/>
              In essence, Break-A-Way was more than just an orientation program—it was a platform for members to learn, grow, and form lasting bonds. The event emphasized that Rotaract is a space where individuals can make mistakes, learn from them, and continue to evolve without fear of rejection. This sentiment, reinforced by the experiences of past presidents and the enthusiasm of current members, ensured that all attendees left the event feeling empowered, inspired, and ready to take on new challenges within the club.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-xl shadow p-6"
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Project Objectives</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base text-left">
                <li>To orient new members to the core values, mission, and opportunities within Rotaract.</li>
                <li>To create a platform for members to engage with past presidents and learn from their experiences.</li>
              </ul>
              <div className="mt-6 text-gray-600">
                {/* Add more details or highlights if needed */}
              </div>
            </motion.div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Breakaway;
