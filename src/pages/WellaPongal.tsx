import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WellaPongalImg from '../Pictures/Wella Pongal 2025.jpg';
import Pongal3 from '../Pictures/Pongal 3.jpg';
import Pongal4 from '../Pictures/Pongal 4.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: WellaPongalImg, alt: 'Wella Pongal 2025' },
  { src: Pongal3, alt: 'Wella Pongal 2025 - 3' },
  { src: Pongal4, alt: 'Wella Pongal 2025 - 4' },
];

const WellaPongal = () => {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Wella Pongal</h1>
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
              Project Chairs: Rtr. Hagshana Lingeshwaran & Rtr. Harisuthan Mohanadas
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pongal is a joyful festival that celebrates gratitude, prosperity, and togetherness. It is a time when people give thanks to the Sun God for a good harvest and share happiness with family and friends. As the signature cultural project of the Rotaract Club of Wellawatte, Wella Pongal brings our community together to honor this beautiful tradition.<br/><br/>
              On January 14th, 2025, we celebrated the 13th year of this special event, making it bigger, brighter, and more memorable than ever before. Our preparations began early with the generous permission of the Bambalapitiya Flats administration to use their spacious grounds. Our team set up colorful tents for shade, arranged comfortable seating, and carefully prepared the Pongal cooking area. The venue came to life with vibrant Kolam (beautiful floor art) drawn by our talented female members and festive Thoranams (decorations) waving in the breeze. The sacred Kumbam, a traditional symbol of prosperity, was placed in its rightful spot, setting the stage for the festivities.<br/><br/>
              As the morning sun warmed the grounds, the event began with the much-anticipated Pongal preparation. Our team sanctified the Pongal pot with Viboothi and Sandhanam before lighting the firewood. Once the milk started to boil, our respected Rotarians and District Committee Members were invited to pour milk into the pot, symbolizing prosperity and blessings for the new year. As the milk overflowed, cheers erupted, marking a year of abundance and success. Our invitees then added rice to the pot, officially beginning the Pongal feast. Meanwhile, our Club Secretary warmly welcomed everyone, and the Project Chairperson, Rtr. Harisuthan, explained the meaning behind Pongal, enriching the experience for all.<br/><br/>
              To keep the energy high, we organized fun and engaging games while the Pongal cooked. The first game, Ball Passing, had participants eagerly tossing a ball as music played, with eliminations adding excitement. Laughter and joy filled the air as two rounds of friendly competition took place. As the sweet aroma of Pongal spread, we added delicious ingredients—jaggery, sugar, plums, nuts, ghee, and cardamom—to enhance its flavor. Fresh orange juice was served to keep everyone cool and refreshed.<br/><br/>
              Next up was Balloon Blasting, where participants raced to blow up and pop their balloons first. The lively Tamil music, combined with the thrill of the game, kept everyone entertained. Soon, the Pongal was ready, and a portion was placed on a banana leaf before the Kumbam for prayers. The scent of incense filled the air as we sang devotional songs and performed the Soodam ritual, waving the Pongal smoke towards the deity as a sign of respect.<br/><br/>
              With prayers completed, it was time to feast! Everyone enjoyed the delicious sweet Pongal, paired with chickpeas, spreading warmth and joy. In the true spirit of kindness, we also set aside portions for the cleaning staff, birds, and animals, embracing the essence of giving.<br/><br/>
              As the event came to a close, our Club Secretary gathered everyone for an exciting award ceremony. Winners of the games were delighted to receive discount vouchers, which were awarded by the President of the Rotary Club of Mount Lavinia, Past Presidents of the Rotaract Club of Wellawatte, and the District Secretary. The vouchers were generously provided by our gifting partner, Indian Kitchen. With smiles on their faces, they looked forward to enjoying their well-earned rewards, while others departed to relish a traditional Pongal meal with loved ones.<br/><br/>
              Before leaving, our dedicated team ensured the venue was spotless. We wrapped up the day with a final group picture, capturing the joy, unity, and spirit of Wella Pongal 2025. With hearts full of gratitude and memories to cherish, we are committed to continuing this tradition, making every Wella Pongal even more special in the years to come!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-xl shadow p-6"
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Project Objectives</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
                <li>Preserve and Promote Tamil Culture</li>
                <li>Foster Community Bonding</li>
                <li>Ensure an Inclusive Celebration</li>
                <li>Encourage Sustainability and Giving Back</li>
                <li>Enhance Member Engagement</li>
              </ul>
              <div className="mt-6 text-gray-600">
                <p>
                  Wella Pongal continues to unite our community in celebration and gratitude. Join us for a day filled with tradition, laughter, and togetherness!
                </p>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WellaPongal;
