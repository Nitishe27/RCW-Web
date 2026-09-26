import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClubTrip24Img1 from '../Pictures/Club Trip 24.jpg';
import ClubTrip24Img2 from '../Pictures/Club Trip 24 -2.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MindtheGap from './MindtheGap';
import MithuruDostiImg1 from '../Pictures/Mithuru Dhosthi.jpeg';

const images = [
  { src: MithuruDostiImg1, alt: 'Mithuru Dosti - 1' },
];

const MithuriDosti = () => {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Mind the Gap</h1>
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
              Project Chair: Rtr. Mathumitha Karunananthan
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Replace the following with the actual project description */}
Description

The Rotaract Club of Wellawatte, RID 3220, proudly collaborated with its twin club, the Rotaract Club of
SIES College, Mumbai (RID 3141), to successfully execute “ICYE 2025 – Mithuru Dosti”, an Inter Club
Youth Exchange Program that celebrated friendship, diversity, and unity between Sri Lanka and India.

Conducted from the 3rd to the 7th of September 2025, this five-day exchange was more than just a visit; it
was a journey that blended culture, learning, and fellowship into a truly unforgettable international
experience. From Colombo to Mumbai, every moment was a celebration of shared humanity , connecting
hearts beyond borders and strengthening the spirit of Rotaract.
The term “Mithuru Dosti” itself captures the essence of this project. “Mithuru” in Sinhala and “Dosti” in
Hindi both mean friendship, symbolizing how two nations, two cultures, and two Rotaract clubs came
together as one through fellowship and service.
Day 1 – Warm Welcome and Cultural Discovery
The program began with a heartfelt welcome from the members of the Rotaract Club of SIES College, who
greeted the visiting Rotaractors from Wellawatte with warmth, enthusiasm, and the signature Indian
hospitality. The ice-breaking session set the tone for a friendship-filled journey ahead, where laughter,
curiosity, and genuine connection flowed effortlessly.
The day continued with a tour of the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (formerly known as
the Prince of Wales Museum), one of Mumbai’s most iconic heritage sites. Here, the participants explored
India’s colonial history and admired the museum’s vast collection of art and artifacts, gaining deep insights
into the country’s cultural evolution and architectural splendor.
A visit to the historic St. Thomas Cathedral Church, one of Mumbai’s oldest Anglican churches, added a
spiritual and historical depth to the journey. This was followed by a stop at Kitab Khana, a beloved
bookstore that embodies Mumbai’s literary charm. The participants immersed themselves in the tranquil
ambience of the place, appreciating how books and stories transcend boundaries , much like the friendship
between the two clubs.
The day ended with an authentic Indian lunch at the legendary Pancham Puriwala, one of Mumbai’s oldest
eateries. Sharing a meal together created a sense of camaraderie and connection, as participants bonded over
delicious local dishes and lighthearted conversation.
Day 2 – The Vibrance of Josh 10.0
The second day was filled with color, music, and energy as the team joined in the Josh 10.0 celebrations, a
flagship event of the Rotaract Club of SIES College. The atmosphere was electric, filled with passion,
creativity, and the collective spirit of young leaders working together to create impact.
More than just an event, Josh 10.0 was a celebration of unity, teamwork, and joy. The visiting Rotaractors
from Wellawatte actively participated in the festivities, enjoying performances, cultural showcases, and
collaborative games that bridged borders and built lifelong friendships.
The group later visited several Ganesh Chaturthi Pandals vibrant, temporary shrines set up across the city in
honor of Lord Ganesha. The streets were alive with devotion, music, and color, and the Sri Lankan team was
deeply moved by the scale and spirit of community participation. The festival embodied the values of
inclusivity, harmony, and celebration of culture. mirroring the very essence of Mithuru Dosti.
Later in the evening, the Rotaract Club of Wellawatte was part of the general meeting for the month of
September of the Rotaract Club of SIES, which furthered enhanced the bonding between clubs in Rotaract
terms.
Day 3 – Traditions and Togetherness

The third day embraced the theme of tradition and cultural unity. The participants joined in the celebration
of Onam, one of India’s most cherished festivals symbolizing gratitude, prosperity, and togetherness.
Members from both clubs came together for the Onam Sadya, a traditional vegetarian feast served on banana
leaves. The elaborate spread of dishes introduced the Sri Lankan participants to authentic South Indian
flavors and customs. Beyond the food, the experience was about sharing , sharing laughter, stories, and
cultural wisdom.
Later, an interactive cultural exchange session was held between both clubs. Participants presented aspects
of their respective cultures , Sri Lankans showcased their island’s traditions, festivals, and cuisine, while
Indian members introduced the diverse customs of their regions. The session sparked deep discussions on
similarities and differences between the two cultures, and how such diversity strengthens the Rotaract
movement.
Day 4 – Adventure and Exploration
After a few days of cultural immersion, it was time for adventure and discovery. The group began the day
with a visit to the Gateway of India, one of Mumbai’s most iconic landmarks. Standing by the Arabian Sea,
the participants reflected on how the Gateway symbolized not just colonial history but also new beginnings
and connections, much like their own journey together.
The group then explored Colaba Causeway, a lively street filled with local vendors, shops, and cultural
energy. The Sri Lankan members indulged in some light shopping and enjoyed the vibrant street
atmosphere, interacting with locals and trying various street snacks.
That evening, the participants embarked on a unique and unforgettable experience, a Midnight Cycling Ride
through the streets of Mumbai. Under the city’s glittering skyline, the Rotaractors pedaled together through
quiet lanes and iconic neighborhoods, sharing stories, laughter, and a sense of freedom that only true
adventure brings.
Day 5 – Reflection and Farewell
The final day was filled with reflection, emotion, and gratitude. The participants gathered for a closing
session where they shared their thoughts and experiences from the journey. Many described the exchange as
life-changing, expressing how it opened their minds to new perspectives and strengthened their sense of
belonging to the global Rotaract community.
ICYE 2025 – Mithuru Dosti was far more than an international exchange; it was a journey of cultural
discovery, friendship, and leadership growth. The five days spent together in Mumbai created bonds that
transcended geography and language.
Through every meal shared, every story told, and every adventure experienced, participants strengthened
their belief in Rotaract’s global purpose to create peace and understanding through service and fellowship.
The project left a lasting impression on all participants, reinforcing the idea that youth diplomacy and
cultural exchange are vital tools for building a more compassionate world. Mithuru Dosti stands as a
testament to how two clubs from different nations can come together to celebrate not just their differences,
but their shared dreams for a better tomorrow.
As goodbyes were exchanged, promises were made to stay connected, to collaborate again, and to carry
forward the spirit of friendship cultivated through this experience. The Rotaract Club of Wellawatte expects
the Rotaract Club of SIES Mumbai to visit Sri Lanka in the month of January 2026.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-xl shadow p-6"
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Trip Objectives</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base text-left">
                <li>To strengthen international friendship and cultural understanding between Sri Lankan and Indian Rotaractors.</li>
                <li>To promote mutual learning and appreciation of traditions, customs, and lifestyles across both nations.</li>
                <li>To enhance international service collaboration through people-to-people connections.</li>
                <li>To represent the Rotaract Club of Wellawatte and District 3220 on an international platform.</li>
                <li>To create a lasting impact through intercultural exposure and future collaborative initiatives.</li>
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

export default MithuriDosti;
