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
import KickOffImage from '../Pictures/KickOff.jpeg'

const images = [
//   { src: ClubTrip24Img1, alt: 'Club Trip 24 - 1' },
//   { src: ClubTrip24Img2, alt: 'Club Trip 24 - 2' },
  { src: KickOffImage, alt: 'Kick Off' },
];

const KickOff = () => {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Kick Off</h1>
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
              Project Chair: Rtr. Akash Kumar
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Replace the following with the actual project description */}
Kick Off was a collaborative friendly futsal project hosted by the Rotaract Club of Wellawatte in partnership
with the Rotaract Club of ICBT. The project was designed to provide a platform for members of both clubs
to come together, engage in sports, and strengthen inter-club fellowship in a dynamic yet relaxed
atmosphere. Recognizing that sports serve as an effective medium to foster unity, teamwork, and well-being,
the clubs jointly curated this initiative with the aim of creating meaningful interactions outside formal
Rotaract settings.

The futsal matches were played in a friendly spirit, encouraging both experienced players and beginners to
participate actively. Members showcased not only their enthusiasm for the sport but also their commitment
to building long-lasting connections. The project emphasized inclusivity, ensuring that all participants felt
equally valued regardless of their skill level.
Beyond the game itself, Kick Off functioned as an avenue for bonding, promoting healthy competition, and
breaking away from routine work. It also provided members with an opportunity to collaborate on planning,
execution, and coordination, reinforcing leadership, organizational, and communication skills.
By the end of the event, participants had not only enjoyed the thrill of the sport but also strengthened their
networks, paving the way for future joint initiatives between the two clubs. The success of Kick Off
highlighted the importance of combining recreation with service, leaving members refreshed, motivated, and
connected.
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
                <li>TStrengthen inter-club fellowship and collaboration between the Rotaract Clubs of Wellawatte and ICBT through a friendly futsal event.</li>
                <li>Promote physical wellness, teamwork, sportsmanship, and a balanced lifestyle alongside community service.</li>
                <li>uild a foundation for future partnerships while giving members hands-on experience in leadership and event management.</li>
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

export default KickOff;
