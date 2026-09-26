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
import Embrace1 from '../Pictures/Embrace1.png';

const images = [
  { src: Embrace1, alt: 'Embrace 1' },
];

const Embarace = () => {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Embrace</h1>
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
              Project Chair: Rtr. Umashini Krishnananthan and Rtr. Dilash Sivakumaran
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
            The EMBRACE Project is a nationwide humanitarian education-support initiative jointly led by 17 Rotaract
Clubs (3220) across Sri Lanka in response to the severe disruption caused by Cyclone Ditwah. The
disaster created an urgent educational setback across 25 officially declared disaster-affected districts,
where thousands of schoolchildren lost essential learning materials and school supplies needed to continue
their studies. Without timely intervention, these losses risk deepening inequality, interrupting academic
progress, and limiting long-term opportunity.

The project was designed with a dual objective: to provide immediate relief while creating lasting impact,
offering a credible and transparent path for donor investment. Rather than functioning as short-term aid,
EMBRACE focuses on structured recovery that restores educational continuity with dignity, quality, and
accountability.
EMBRACE delivers carefully standardised student support packs instead of fragmented donations. Each
pack includes grade-appropriate books where required, a complete stationery kit, a durable backpack,
items selected for both immediate classroom readiness and sustained daily use. Implementation is carried
out in collaboration with the Disaster Management Centre, the Ministry of Education Sri Lanka, and
Provincial Education Departments, to accurately identify affected schools and students. Needs
assessments are based on official government reports and direct liaison with school administrators to
confirm real ground-level requirements.
Collected data is carefully structured and analysed before distribution. Requirements are categorised by
grade level, material type, and quantity, enabling precise allocation and reducing both shortages and
excess. To support scale and outreach, the project actively engages NGOs, local businesses, international
aid groups, and media partners for sponsorship and awareness building. A coordinated national and
international donation drive was launched through digital platforms, social media campaigns, and
community events, making participation accessible to both local and overseas supporters.
Beyond monetary fundraising, EMBRACE established seven physical collection points across major regions
of Sri Lanka to gather in-kind educational supplies. This hybrid model widened participation and enabled
community-level contribution alongside financial support. The expected impact was to provide educational
continuity for affected students while strengthening community resilience through coordinated recovery
support. The initiative contributes to long-term social impact by protecting learning access and advancing
overall sustainability goals through education stability.
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
                <li>Immediate Relief</li>
                <li>Maximum Accountability</li>
                <li>Unified Strength</li>
                <li>Long-Term Well-being</li>
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

export default Embarace;
