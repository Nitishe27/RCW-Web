import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InnerLeaderImg from '../Pictures/Inner Leader.jpg';
import CrownCons1 from '../Pictures/CrownCons1.jpeg';
import CrownCons2 from '../Pictures/CrownCons2.jpeg';
import CrownCons3 from '../Pictures/CrownCons3.jpeg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: CrownCons1, alt: 'Crown Conspiracy 1' },
  { src: CrownCons2, alt: 'Crown Conspiracy 2' },
  { src: CrownCons3, alt: 'Crown Conspiracy 3' },
];

const InnerLeader = () => {
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
            className="absolute -top-2 -left-4 md:-left-6 flex items-center gap-2 p-2 bg-white rounded-full shadow hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 z-10 group"
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Crown Conspiracy</h1>
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
              {/* Project Chair: Rtr. Umashini Krishnananthan */}
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crown Conspiracy , a joint project by the Rotaract Clubs of Royal Institute of Colombo and Wellawatte under the sports and recreational avenue, was conceptualized as an innovative, experience-driven treasure hunt designed to bring together Rotaract clubs and common public in a dynamic and engaging environment. The initiative was built around the idea of creating a high-energy experience that would challenge participants both mentally and physically, while fostering teamwork, communication, and problemsolving skills. Through a carefully curated series of tasks and a technology-driven flow using QR codes, Crown Conspiracy successfully transformed a simple treasure hunt into a memorable and impactful event that resonated with all participants. Set across some of Colombo’s most iconic locations, including Colombo Racecourse and Viharamahadevi Park, the project aimed to go beyond a conventional competition by delivering a holistic journey that combined adventure, strategy, and collaboration. Prior to the official start, the organizing committee ensured a seamless and professional setup by delivering clear, structured briefings to all teams. Participants were thoroughly guided on rules, safety protocols, and the mechanics of the hunt. To maintain efficiency and consistency throughout the experience, dedicated volunteers were strategically stationed at each checkpoint, playing a dual role of facilitators and evaluators. Rather than relying on traditional clue formats, each successfully completed challenge unlocked the next destination through a QR scan, creating a smooth, tech-enabled transition between locations while adding an element of suspense and anticipation. The detailed breakdown of the project objectives and planning will be discussed as follows.
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
                <li>Enhancing Participant Engagement</li>
                <li>Promoting Teamwork and Participation</li>
                <li>Ensuring Agility in Execution</li>
                <li>Delivering a Multi-Skill Experience</li>
                <li>Strengthening Collaboration and Visibility</li>
              </ul>
              <div className="mt-6 text-gray-600">
              </div>
            </motion.div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InnerLeader;
