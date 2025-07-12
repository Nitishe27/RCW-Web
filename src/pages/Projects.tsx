import React, { useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Calendar, Users, MapPin, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Audacia from '../Pictures/Audacia.jpg';
import Bandhan from '../Pictures/Bandhan.jpg';
import EndrendumSPB from '../Pictures/Endrendum SPB.jpg';
import GroupPicInstallation from '../Pictures/Group Pic - Installation.jpg';
import InsideEdge from '../Pictures/Inside Edge.jpg';
import SafeSpaces from '../Pictures/Safe Spaces.jpg';
import WellaPongal2025 from '../Pictures/Wella Pongal 2025.jpg';
import RotarayLogo from '../Pictures/Rotaray logo.png';
import ClubLogo from '../Pictures/Club logo.png';
import InnerLeader from '../Pictures/Inner Leader.jpg';
import PulseOfHope2 from '../Pictures/Pulse Of Hope 2.jpg';
import RotaractLogo from '../Pictures/Rotaract logo.jpg';
import MagicOfRotary from '../Pictures/Magic Of rotary.png';
import RCWLogo from '../Pictures/RCW  logo.png';
import Bandhan2 from '../Pictures/Bandhan 2.jpg';
import ClubTrip24 from '../Pictures/Club Trip 24.jpg';
import GiftsOfHopes1 from '../Pictures/Gifts Of Hopes 1.jpg';
import BIAnalytical from '../Pictures/BI analytical.jpg';
import BeachCleanup from '../Pictures/Beach Cleanup.jpg';
import ThreadsOfTreasure2 from '../Pictures/Threads Of Treasure 2.jpg';
import HipHop1 from '../Pictures/Hip Hop 1.jpg';
import Breakaway from '../Pictures/Breakaway.jpg';
import { Link } from 'react-router-dom';

const allImages = [
  { src: Audacia, alt: 'Audacia' },
  { src: Bandhan, alt: 'Bandhan' },
  { src: EndrendumSPB, alt: 'Endrendum SPB' },
  { src: InsideEdge, alt: 'Inside Edge' },
  { src: SafeSpaces, alt: 'Safe Spaces' },
  { src: WellaPongal2025, alt: 'Wella Pongal 2025' },
  { src: InnerLeader, alt: 'Inner Leader' },
  { src: HipHop1, alt: 'Hip Hop Thiruvizha' },
  { src: PulseOfHope2, alt: 'Pulse of Hope ' },
  { src: GiftsOfHopes1, alt: 'Gifts Of Hopes ' },
  { src: GroupPicInstallation, alt: '38th Installation' },
  { src: ClubTrip24, alt: 'Mind the Gap' },
  { src: BIAnalytical, alt: 'BI Analytiq' },
  { src: BeachCleanup, alt: 'Beach Cleanup' },
  { src: ThreadsOfTreasure2, alt: 'Threads of Treasure' },
  { src: Breakaway, alt: 'Breakaway' },
];

const IMAGES_PER_PAGE = 8;

const Events = () => {
  // For scroll direction detection and animation
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const lastScrollY = React.useRef(window.scrollY);
  const [scrollDir, setScrollDir] = React.useState<'up' | 'down'>('down');
  const [page, setPage] = React.useState(0);
  const totalPages = Math.ceil(allImages.length / IMAGES_PER_PAGE);
  const paginatedImages = allImages.slice(page * IMAGES_PER_PAGE, (page + 1) * IMAGES_PER_PAGE);
  // If not enough images for a full page, loop to the start
  const displayImages = paginatedImages.length === IMAGES_PER_PAGE
    ? paginatedImages
    : [...paginatedImages, ...allImages.slice(0, IMAGES_PER_PAGE - paginatedImages.length)];

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
    if (gridRef.current) {
      (gridRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBack = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
    if (gridRef.current) {
      (gridRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDir('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDir('up');
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="projects into "className="pt-24 pb-16 bg-gradient-to-br from-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Our Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Discover upcoming activities and celebrate our community impact through service and fellowship.
          </motion.p>
        </div>
      </section>


      {/* Recent Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Recent Projects</h2>
            <p className="text-lg text-gray-600">A glimpse at some of our recent project highlights</p>
          </motion.div>
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 overflow-hidden">
            {displayImages.map((img, idx) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, y: scrollDir === 'down' ? 60 : 0 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: idx * 0.08, type: 'spring', bounce: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 flex flex-col items-center group"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
              >
                <div className="relative w-full h-48 sm:h-56 md:h-64">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full h-48 sm:h-56 md:h-64 object-cover transition duration-300 group-hover:brightness-75${img.alt === 'Hip Hop Thiruvizha' ? ' object-right' : ''}`}
                  />
                  {img.alt === 'Audacia' ? (
                    <Link
                      to="/projects/audacia"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ) : img.alt === 'Wella Pongal 2025' ? (
                    <Link
                      to="/projects/wellapongal"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ) : img.alt === 'Inside Edge' ? (
                    <Link
                      to="/projects/insideedge"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ) : img.alt === 'Inner Leader' ? (
                    <Link
                      to="/projects/innerleader"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ) : img.alt === 'Hip Hop Thiruvizha' ? (
                    <Link
                      to="/projects/hiphopthiruvizha"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ) : img.alt === 'BI Analytiq' ? (
                    <Link
                      to="/projects/bianalytiq"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ) : img.alt === 'Beach Cleanup' ? (
                    <Link
                      to="/projects/beachcleanup"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ) : img.alt === 'Threads of Treasure' ? (
                    <Link
                      to="/projects/threadsoftreasure"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ) : img.alt === 'Pulse of Hope ' ? (
                    <Link
                      to="/projects/pulseofhope"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ) : img.alt === 'Gifts Of Hopes ' ? (
                    <Link
                      to="/projects/giftsofhopes"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ) : img.alt === '38th Installation' ? (
                    <Link
                      to="/projects/38thinstallation"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ) : img.alt === 'Bandhan' ? (
                    <Link
                      to="/projects/bandhan"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ) : img.alt === 'Breakaway' ? (
                    <Link
                      to="/projects/breakaway"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ) : (
                    <a
                      href="#"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </a>
                  )}
                </div>
                <div className="p-4 w-full text-center">
                  <span className="block text-gray-800 font-serif font-semibold tracking-wide text-lg truncate">{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Next Arrow Button */}
          <div className="flex justify-center mt-8">
            {page !== 0 && (
              <button
                className="flex items-center gap-1 px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-full shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-base mr-2"
                aria-label="Back"
                onClick={handleBack}
              >
                <ArrowLeft size={18} />
                <span className="font-semibold text-base">Back</span>
              </button>
            )}
            <button
              className="flex items-center gap-1 px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-full shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-base"
              aria-label="Next"
              onClick={handleNext}
            >
              <span className="font-semibold text-base">Next</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
