import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GiftsOfHopesImg from '../Pictures/Gifts Of Hopes 1.jpg';
import GiftsOfHopes2Img from '../Pictures/Gifts Of Hopes 2.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: GiftsOfHopesImg, alt: 'Gifts Of Hopes 1' },
  { src: GiftsOfHopes2Img, alt: 'Gifts Of Hopes 2' },
];

const GiftsOfHopes = () => {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Gifts Of Hopes</h1>
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
              The sun had just begun to rise over the misty hills of Monaragala, casting a golden glow over the dense rubber plantations. A group of young children, dressed in worn-out uniforms, made their way up a steep, rocky path barefoot, some with tattered shoes barely holding together. They carried school bags that had seen too many monsoons, clutching their notebooks tightly as they climbed the mountain, step by step, determined to reach their school.<br/><br/>
              This was not an extraordinary morning. This was every morning for the 250+ students of Sri Gowry Tamil Maha Vidyalaya, a small school nestled in the remote highlands of Sri Lanka. Their parents, mostly rubber plantation workers and factory laborers, earn just enough to put food on the table. Education, though a priority, often takes a backseat when survival is challenging.<br/><br/>
              Despite their struggles, these children dream. They dream of becoming doctors, teachers, and engineers and of a life where they don't have to wake up wondering if they will have books to write in or pencils to sharpen.<br/><br/>
              But dreams need support, and that's where Gifts of Hope 2025 comes in.<br/><br/>
              For over 8 years, the Rotaract Club of Wellawatte has stood by children in need, ensuring that financial hardship does not deprive them of an education. This year, we set our sights on Sri Gowry Tamil Maha Vidyalaya, determined to make a difference not just for a day but for a lifetime.<br/><br/>
              Our goal was simple but powerful: equip these students with the essentials they need to continue their education without worry.<br/><br/>
              With months of planning, fundraising, and logistical coordination, we packed hundreds of school bags with exercise books, pens, pencils, erasers, mathematical sets, and more. We reached out to generous donors who believed in the power of education. And finally, on the much-awaited day, we made our journey to Monaragala, carrying not just school supplies but hope, encouragement, and the promise of a better tomorrow.<br/><br/>
              The moment we arrived, we saw the sheer excitement in their eyes. Some hesitated, unsure if they were truly getting a new set of school supplies. Others clutched their old, nearly empty notebooks, wondering if they would finally have enough paper to last the school year. And then, as we handed over the first bag, a wave of smiles spread across the room, one that told us everything we needed to know.<br/><br/>
              That was the true success of Gifts of Hope 2025. It wasn't just about the school supplies; it was about reaffirming these children's right to dream, to hope, and to believe in a brighter future.
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
                <li>Bridge the Educational Gap</li>
                <li>Encourage School Attendance</li>
                <li>Motivate Academic Excellence</li>
                <li>Foster Community Development</li>
                <li>Build Sustainable Change</li>
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

export default GiftsOfHopes;
