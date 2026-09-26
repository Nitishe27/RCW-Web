import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GiftsOfHopesImg from '../Pictures/Gifts Of Hopes 1.jpg';
import GiftsOfHopes2Img from '../Pictures/Gifts Of Hopes 2.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Hinawa1 from '../Pictures/Hinawa1.jpeg';
import Hinawa2 from '../Pictures/Hinawa2.jpeg';
import Hinawa3 from '../Pictures/Hinawa3.jpeg';
import GiftsOfHopes from './GiftsOfHopes';

const images = [
  { src: Hinawa1, alt: 'Hinawa 1' },
  { src: Hinawa2, alt: 'Hinawa 2' },
  { src: Hinawa3, alt: 'Hinawa 3' },
];

const Hinawa = () => {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Hinawa</h1>
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
              Project Chair: Rtr. Dulaangan Chandrasekaran
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
Project Hinawa was a heartfelt and impactful community service initiative carried out on the 26th of
October, jointly organized by the Rotaract Clubs of APIIT, Colombo West, RIC, and Wellawatte, in
collaboration with the non-profit organization Shanthimaargam. The project was organized in celebration of
World Children’s Day, with the vision of creating a memorable and heartwarming experience for two special
groups of society children and senior citizens.
The initiative brought together more than 60 underprivileged children from Shanthimaargam and 60 elders
from The Salvation Army Elder’s Home for a day filled with joy, companionship, and meaningful
connection. The event aimed to bridge the generational gap and inspire compassion, understanding, and

togetherness through shared experiences and mutual appreciation.
To make the day truly special, the organizing clubs put together a vibrant and engaging lineup of activities
that encouraged participation and creativity. The children and elders took part in singing, dancing, drama
acts, and even a karate display, proudly showcasing their talents and passions. These performances not only
entertained the audience but also served as a touching reminder that talent and enthusiasm know no age.
Adding a touch of wonder to the day’s celebrations, an external magician was invited to perform a
captivating magic show that left both the children and elders completely mesmerized. The performance
added excitement and joy to the atmosphere, filling the room with laughter, surprise, and pure amazement. It
became one of the highlights of the day, perfectly complementing the spirit of Hinawa by spreading
happiness through moments of shared awe and delight.
Volunteers from all four clubs worked collaboratively to ensure the smooth execution of every detail, from
organizing logistics and activity coordination to personally engaging with the participants. Their
commitment and teamwork created an atmosphere of inclusivity and warmth, where everyone felt
welcomed, cared for, and valued.
The provision of refreshments and meals added an extra layer of care and warmth to the experience. The day
began with a hearty breakfast served to both the children and the elders, ensuring that everyone felt
energized and comfortable to take part in the activities. Towards the end of the event, lunch packets were
distributed along with thoughtful gift packs prepared especially for the children, making the conclusion of
the program both joyful and memorable.

Additionally, Access Real Estate came forward as a sponsor for bottled water, ensuring that all
participants and volunteers stayed refreshed and hydrated throughout the day. Their generous contribution
played a valuable role in the smooth facilitation of the event and reflected the strength of community
partnerships that made Project Hinawa a success.
Following the main celebration, members from the organizing clubs visited The Salvation Army Elder’s
Home to personally hand over the gifts to the elders who had participated in the project. This gesture of
kindness and connection beautifully reflected the true essence of Hinawa spreading warmth, compassion,
and gratitude beyond the event itself.
The name “Hinawa,” symbolizing warmth and compassion, perfectly captured the essence of the project. By
bringing together two generations through joy, empathy, and love, the initiative highlighted the importance
of community responsibility, human connection, and kindness in action.
Beyond its immediate success, Project Hinawa became a powerful reminder of what can be achieved
through collective effort and empathy. It strengthened the bonds among the organizing Rotaract Clubs,
fostered teamwork, and showcased how service can bring out the best in people.
Ultimately, Project Hinawa was more than just an event, it was a celebration of human connection, shared
happiness, and the beauty of giving. Through music, laughter, creativity, and a touch of magic, the project
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
                <li>To celebrate World Children’s Day by creating a joyful, inclusive, and meaningful experience for
children and elders.</li>
                <li>To bridge the generational gap by fostering interaction, understanding, and compassion between
the younger and older generations.</li>

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

export default Hinawa;
