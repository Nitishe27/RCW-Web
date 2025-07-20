import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThreadsOfTreasure2Img from '../Pictures/Threads Of Treasure 2.jpg';
import ThreadsOfTreasure3Img from '../Pictures/Threads Of Treasure 3.jpg';
import ThreadsOfTreasure4Img from '../Pictures/Threads Of Treasure 4.jpg';
import ThreadsOfTreasure5Img from '../Pictures/Threads Of Treasure 5.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: ThreadsOfTreasure2Img, alt: 'Threads of Treasure 2' },
  { src: ThreadsOfTreasure3Img, alt: 'Threads of Treasure 3' },
  { src: ThreadsOfTreasure4Img, alt: 'Threads of Treasure 4' },
  { src: ThreadsOfTreasure5Img, alt: 'Threads of Treasure 5' },
];

const ThreadsofTreasure = () => {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Threads of Treasure</h1>
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
              In a world where countless individuals discard clothing without a second thought, Threads of Treasure
emerged as a beacon of sustainability, compassion, and international camaraderie. A joint effort between the
Rotaract Club of K.C. College (RID 3141, India) and the Rotaract Club of Wellawatte (RID 3220, Sri
Lanka), this project was more than just a donation drive, it was an initiative rooted in recycling, reusing, and

rekindling hope.
Both the clubs wanted to work on a project which is sustainable to the respective communities and would
also aid in completing the Twin Club agreement between the both clubs. Both the Rotaract Club of KC
College and Rotaract Club of Wellawatte agreed on collecting used clothes at good condition and donate it
to kids at an orphanage. From the very beginning, the project was carefully curated to ensure maximum
impact. Two weeks before the project, members of both clubs actively reached out to orphanages in their
communities which could accommodate our request. The Rotaract Club of Wellawatte finalized the location
as the Sri Jinananda Children's Home in Colombo 06 while the Rotaract Club of K.C. College finalized its
location as the Dongri Children's Home in Mumbai. With the locations finalized, both the clubs started
collecting used clothes which are in good condition to be used again by underprivileged kids, that could find
a second life in the hands of children in need. Rotaract Club of Wellawatte assigned two collection points for
donations such that they could reduce the burden of the donors and also provided a deadline to prevent last
minute hassle. Once the clothes were collected from various sources, careful sorting processes were carried
out into separate boxes to ensure that only the best-quality donations were selected , garments that would
provide warmth, comfort, and dignity to the children in need.
On the day of the project, 26th of January 2025, both the clubs were geared up to visit the chosen orphanages
with the clothes collected. Volunteers from the Rotaract Club of Wellawatte gathered at Sri Jinananda
Children's Home around 10am, bringing with them bundles of neatly packed clothes, organized by size and
necessity. They were greeted by the curious and excited faces of the children, who were unaware of the
heartfelt surprise awaiting them. The members of the club was overwhelmed by seeing the faces of the kids
filled with joy, making them feel like valuable Rotaractors who serve the community. Once all the donations
were set up, the distribution process began. Volunteers personally handed out clothing items to each child,
ensuring that they received something comfortable, suitable, and meaningful. The children, with wide
smiles, eagerly explored their new clothes—some hugging their new tshirts close to their chests, others
admiring the colors and patterns of their outfits. The joy on their faces was a testament to the power of
giving.
Beyond the act of donation, the project emphasized meaningful interactions. Volunteers spent time engaging
with the children, sharing stories, playing games, and fostering a sense of companionship. This was more
than just an act of charity—it was an experience that bridged cultures, countries, and communities. As the
event came to a close at 12 PM, the room was filled with gratitude—from the caretakers of the children’s
home, who deeply appreciated the gesture, to the Rotaractors themselves, who left with a renewed sense of
purpose. The initiative reinforced the importance of sustainability, proving that a simple effort like
repurposing clothes can make a tangible difference in someone's life.
By the end of Threads of Treasure, a lasting impact had been created, not only in the form of warm clothing
but also in warmer hearts. This project was not just about providing essentials; it was about restoring dignity,
embracing sustainability, and strengthening international bonds between two Rotaract clubs from different
districts dedicated to service. This event marked the first milestone in the twin club journey between
Rotaract Club of K.C. College and Rotaract Club of Wellawatte, setting the foundation for future
collaborations that will continue to transform lives. Threads of Treasure stands as a shining example of how
collective action, no matter how small, can sew hope into the lives of those who need it most.
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
                <li>Providing Essential Clothing</li>
                <li>Promoting Sustainability & Waste Reduction</li>
                <li>Strengthening the Twin Club Bond</li>
                <li>Foster Cross-Border Friendships</li>
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

export default ThreadsofTreasure;
