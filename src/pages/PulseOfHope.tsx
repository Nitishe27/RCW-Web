import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PulseOfHope2Img from '../Pictures/Pulse Of Hope 2.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: PulseOfHope2Img, alt: 'Pulse of Hope 2' },
];

const PulseOfHope = () => {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Pulse of Hope</h1>
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
              Project Chair: Rtr. Sivanjale Ravindrakumar
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              On the 17th of September, the Rotaract Club of Wellawatte, in a collaborative effort with the Rotaract Club of IIT and the Rotaract Club of Mid City, orchestrated an impactful initiative named "Pulse of Hope" at the Narahenpita Blood Donation Bank. This project was thoughtfully planned to address the urgent demand for blood supplies, a critical necessity that saves lives across the globe every day. Recognizing the essential need for blood in saving lives and aiding medical emergencies, our project aimed to mobilize the entire community, with a keen emphasis on encouraging the youth, to come forward and contribute to this noble cause.<br/><br/>
              In the weeks leading up to the donation day, as a part of our comprehensive public relations strategy, we took an innovative approach to educate and prepare our potential donors through social media. We released a meticulously crafted video aimed at addressing and debunking the most common myths surrounding blood donation. This initiative was pivotal in dispelling fears and misconceptions, thereby fostering a more informed and ready pool of donors. Furthermore, our campaign highlighted the vital eligibility criteria for blood donation. It became evident that many healthy individuals, who were potential donors, were unaware that simple lifestyle factors could influence their ability to donate. From the requisite amount of sleep the night before to recent travels, these insights proved invaluable in ensuring participants were adequately prepared, significantly boosting the drive's efficiency and impact.<br/><br/>
              The event itself was an expansive affair that went beyond the conventional scope of a blood donation drive. It encompassed a series of informative sessions, interactive discussions, and educational resources, all aimed at emphasizing the importance of regular blood donation. These engagements were instrumental in not only debunking myths but also in highlighting the myriad health benefits for donors. These include the importance of undergoing regular health check-ups and experiencing the profound joy and satisfaction that comes from making a significant contribution to another person's life.<br/><br/>
              Our collaboration with the National Blood Center was pivotal in ensuring that the entire blood donation process was conducted smoothly and adhered to the highest standards of safety and health protocols. The event garnered participation from a diverse group of individuals, ranging from students and professionals to local community members. This convergence of different segments of society was united by a shared commitment to contributing towards a healthier and brighter future.<br/><br/>
              Moreover, the "Pulse of Hope" initiative served as a beacon of community spirit and collective action. It showcased how unified efforts could lead to significant, meaningful change. The blood donation drive was just the beginning. The comprehensive engagement and education of participants have set the stage for a sustained increase in blood donations, directly impacting and improving the health and well-being of countless individuals in need.<br/><br/>
              Pride fills our hearts as we reflect on the success of the "Pulse of Hope" project. It has not only established a platform for voluntary service but has also marked a significant step towards promoting health, safety, and well-being within our community. Our commitment to making a lasting difference, one pint at a time, remains unwavering. We look forward to continuing our efforts and inspiring more individuals to join us in this life-saving mission.
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
                <li>To engage youth together towards a social cause.</li>
                <li>To increase awareness of the benefits of blood donation to the donor and the community.</li>
                <li>To support the local community by increasing the supplies of blood at the blood center.</li>
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

export default PulseOfHope;
