import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClubTrip24Img1 from '../Pictures/Club Trip 24.jpg';
import ClubTrip24Img2 from '../Pictures/Club Trip 24 -2.jpg';
import LailathImg1 from '../Pictures/Lailath1.jpeg';
import LailathImg2 from '../Pictures/Lailath2.jpeg';
import LailathImg3 from '../Pictures/Lailath3.jpeg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
//   { src: ClubTrip24Img1, alt: 'Club Trip 24 - 1' },
//   { src: ClubTrip24Img2, alt: 'Club Trip 24 - 2' },
  { src: LailathImg1, alt: 'Lailath - 1' },
  { src: LailathImg2, alt: 'Lailath - 2' },
  { src: LailathImg3, alt: 'Lailath - 3' },
];

const Lailath = () => {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Lailath</h1>
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
              {/* Project Chair: Rtr. Dilash Sivakumaran and Rtr. Harrindhran Balakrishnan */}
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Replace the following with the actual project description */}
Lailat ’26 was a large-scale Iftar gathering organized collaboratively by the Rotaract Clubs of American National
College, APIIT, Colombo Fort, Colombo Metropolitan, Colombo Midtown, Colombo North, Colombo Uptown,
Colombo West, Imperial College of Business Studies, ICBT, IIT, Kandy Metropolitan, NSBM, PanColombo, Royal

Institute of Colombo, University of Colombo School of Computing, University of Moratuwa, and Wellawatte.
Held on the 14th of March at the J. R. Jayewardene Auditorium, the event brought together close to 500 participants in
the spirit of unity, inclusivity, and cultural appreciation during the holy month of Ramadan. Lailat ’26 created a
welcoming space for Rotaractors and community members from diverse backgrounds to experience the significance of
Iftar, fostering awareness and respect for Islamic traditions.
The evening featured the ceremonial breaking of the fast, followed by shared meals and fellowship, allowing attendees
to engage in meaningful conversations and build lasting connections. The collaboration between numerous clubs
highlighted the strength of the Rotaract network and its commitment to service, diversity, and community engagement.
Overall, Lailat ’26 successfully strengthened inter-club relationships while promoting harmony, mutual understanding,
and a sense of togetherness among all those present.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-xl shadow p-6"
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Trip Highlights</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base text-left">
                <li>To foster unity and fellowship among Rotaractors from multiple clubs through a collaborative and meaningful
gathering.</li>
                <li>To promote cultural awareness and understanding of Islamic traditions, particularly the significance of Iftar
during Ramadan.</li>
                <li>To create an inclusive platform that brings together individuals from diverse backgrounds in a spirit of harmony
and respect.</li>
                <li>To strengthen inter-club relationships and encourage future collaborations within the Rotaract network.</li>
                <li>To provide an opportunity for community engagement through shared experiences, conversations, and
networking.</li>
                <li>To embody the values of service, diversity, and mutual respect upheld by Rotaract.</li>
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

export default Lailath;
