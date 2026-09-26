import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WellaPongalImg from '../Pictures/Wella Pongal 2025.jpg';
import Pongal3 from '../Pictures/Pongal 3.jpg';
import Pongal4 from '../Pictures/Pongal 4.jpg';
import WP1 from '../Pictures/WELLPONGAL26-1.jpg';
import WP2 from '../Pictures/WELLAPONGAL26-2.jpg';
import WP3 from '../Pictures/WELLAPONGAL26-3.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: WP1, alt: 'Wella Pongal 2026' },
  { src: WP2, alt: 'Wella Pongal 2026 - 2' },
  { src: WP3, alt: 'Wella Pongal 2026 - 3' },
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Wella Pongal 2026</h1>
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
              {/* Project Chairs: Rtr. Hagshana Lingeshwaran & Rtr. Harisuthan Mohanadas */}
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
             Pongal is a joyful festival that celebrates gratitude, prosperity, and togetherness. It is a time when people
give thanks to the Sun God for a successful harvest and share happiness with family and friends. As the
signature cultural project of the Rotaract Club of Wellawatte, Wella Pongal brings our community together

to honor this meaningful tradition. On January 15th, 2026, we celebrated the fourteenth year of this special
event, and we made it bigger, brighter, and more memorable than ever before.
We began our preparations early after receiving generous permission from the Bambalapitiya Flats
administration to use their spacious grounds. Our team set up colorful tents to provide shade and comfort,
arranged seating so that everyone could relax and enjoy the program, and prepared the Pongal cooking area
with great attention to detail. The venue quickly came to life with vibrant Kolam created by our talented
female members and thoranams were displayed across the space to enhance the festive atmosphere. We also
placed the sacred Kumbam, which is a traditional symbol of prosperity, in its rightful place to set the tone
for the celebrations and to remind everyone of the significance of the occasion.
As the morning progressed, the event began with much-anticipated Pongal preparation. Our team sanctified
the Pongal pot using Viboothi and Sandhanam before lighting the firewood, which added a traditional and
meaningful start to the cooking process. Once the milk started to boil, we invited respected Rotarians and
District Committee Members to pour milk into the pot as a symbol of blessings and abundance for the New
Year. When the milk overflowed, everyone cheered with joy, because it represented prosperity, success, and
a year filled with good fortune. Our invitees then added rice to the pot, which officially began the cooking of
the Pongal. During this time, our Club Secretary warmly welcomed everyone, and the Chairpersons, Rtr.
Pragadeesen and Rtr. Hariharan, explained the meaning and cultural value of Pongal so that everyone could
connect more deeply with the tradition.
While the Pongal cooked, we planned engaging activities to keep the crowd entertained and involved. The
first game was Balloon Blasting, and it instantly created excitement across the venue. Participants were
given balloons and competed to inflate and pop them as quickly as possible. The lively Tamil music, the
cheering from the audience, and the friendly competition made the game even more enjoyable, and it
encouraged everyone to take part with enthusiasm. The energy of the crowd stayed high as participants raced
against each other, and laughter filled the space as the game progressed.
The second game was Ball Passing, which added a fun and interactive moments for everyone. Participants
stood in a circle and passed a ball from one person to another while music played. When the music stopped,
the person holding the ball was eliminated, which made each round more suspenseful and entertaining. The
game continued for two rounds, and the audience stayed fully engaged as participants tried to pass the ball
quickly while keeping control. The playful competitiveness and the joyful reactions from both participants
and supporters made the activity a highlight of the event.
As the sweet aroma of Pongal spread through the venue, we added jaggery, sugar, plums, nuts, ghee, and
cardamom to enhance the flavor and bring out the rich traditional taste. We also served fresh orange juice to
keep everyone refreshed and comfortable throughout the program, especially as more people gathered to
enjoy the celebration.
Soon after, the Pongal was ready, and we placed a portion on a banana leaf in front of the Kumbam for
prayers. The scent of incense filled the air as we sang devotional songs, and the calm and respectful
atmosphere reminded everyone of the spiritual significance of the festival. We then performed the Soodam

ritual by waving the Pongal smoke towards the deity as a sign of gratitude and respect, while participants
observed the ritual with sincerity and devotion.
After the prayers, it was time to share the feast. Everyone enjoyed the sweet Pongal served with chickpeas,
and the meal created a sense of warmth, togetherness, and celebration. We also set aside portions for the
cleaning staff, birds, and animals, because we wanted to embrace the spirit of kindness and giving that
Pongal represents.
As the event came to an end, our Club Secretary gathered everyone for an award ceremony. The winners of
the games received exciting gifts that were prepared by our club, and they were delighted to be recognized
for their participation and effort. The gifts were presented by the President of the Rotary Club of Mount
Lavinia, Past Presidents of the Rotaract Club of Wellawatte, and the District Secretary. The winners left with
smiles and appreciation, while others departed with happy hearts to enjoy a traditional Pongal meal with
their loved ones.
Before leaving, our team ensured the venue was cleaned and returned to order. We concluded the celebration
with a final group photograph to capture the joy, unity, and spirit of Wella Pongal 2026. We carried forward
hearts full of gratitude and memories to cherish, and we remain committed to continuing this tradition and
making every Wella Pongal even more special in the years to come.
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
