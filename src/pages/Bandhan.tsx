import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BandhanImg from '../Pictures/Bandhan.jpg';
import Bandhan2Img from '../Pictures/Bandhan 2.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: BandhanImg, alt: 'Bandhan 1' },
  { src: Bandhan2Img, alt: 'Bandhan 2' },
];

const Bandhan = () => {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Bandhan</h1>
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
              Project Bandhan was a vibrant virtual cultural exchange event that brought together the Rotaract Club of Wellawatte (RID 3220)
              and the Rotaract Club of SIES College, Mumbai (RID 3141) in celebration of Twinning Day. Held on March 24th via Google
              Meet, the event fostered cross-border friendships and a deeper appreciation of the rich traditions and customs of India and Sri Lanka.<br/><br/>
              The session commenced with a warm welcome by Rtr. Kugaleshani Ravirajah, President of the Rotaract Club of Wellawatte, who
              set the tone for an engaging and enlightening exchange. This was followed by opening remarks from the International Service
              Directors (ISDs) of both clubs, emphasizing the importance of cultural exchange in strengthening global understanding and unity
              within Rotaract.<br/><br/>
              <b>Cultural Showcase & Open Forum</b><br/>
              The heart of the event was the Cultural Showcase, where members from both clubs took participants on an exciting journey
              through their nations' heritage, traditions, and way of life.<br/><br/>
              The Rotaract Club of SIES College, Mumbai shared fascinating insights into Indian festivals like Diwali, where homes are
              illuminated with lamps and fireworks light up the sky, and Holi, a joyous celebration of colors. They also highlighted Bollywood's
              influence, iconic dishes like pani puri and masala dosa, and the significance of traditional attire such as sarees and sherwanis in
              Indian culture.<br/><br/>
              The Rotaract Club of Wellawatte introduced Sri Lanka's cultural gems, including the Sinhala and Tamil New Year, marked by
              kou-making competitions and traditional games, the beauty of Kandyan and Bharatanatyam dance, and Sri Lanka's beloved street
              food isso wade (prawn fritters) and kiribath (milk rice). They also showcased the deep-rooted tea culture and the spiritual harmony
              of Buddhist, Hindu, Christian, and Islamic traditions that define Sri Lankan society.<br/><br/>
              Following each presentation, an Open Forum allowed participants to ask questions, share experiences, and clarify intriguing
              aspects of each other's cultures. This interactive segment sparked enriching discussions whether it was about the significance of
              rangoli in Indian households or the origins of Sri Lankan devil masks in traditional dance performances.<br/><br/>
              The event continued with a Sing-Along Session, where members from both clubs came together to sing classic and contemporary
              songs from India and Sri Lanka. Whether it was a Bollywood favorite or a soulful Sri Lankan melody, the music created a sense of
              unity beyond words.<br/><br/>
              As the event drew to a close, Rtr. Dulangan, International Service Director of the Rotaract Club of Wellawatte, delivered the vote
              of thanks, expressing heartfelt gratitude to all participants and organizers for making Project Bandhan a resounding success.<br/><br/>
              To mark this special collaboration, both clubs exchanged digital mementos, symbolizing their shared commitment to friendship
              and cross-cultural learning. The event ended with a virtual group photo, capturing the smiles, laughter, and connections that
              defined Project Bandhan.<br/><br/>
              Project Bandhan was more than just a cultural exchange—it was a celebration of unity in diversity. Through shared traditions,
              meaningful conversations, and joyful interactions, members of both clubs reaffirmed Rotaract's mission of global fellowship and
              mutual respect, paving the way for future collaborations and lifelong friendships.
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
                <li>Fostering Cross-Cultural Understanding</li>
                <li>Strengthening International Fellowship</li>
                <li>Promoting Interactive Cultural Exchange</li>
                <li>Celebrating Unity Through Music and Traditions</li>
                <li>Encouraging Future Collaborations</li>
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

export default Bandhan;
