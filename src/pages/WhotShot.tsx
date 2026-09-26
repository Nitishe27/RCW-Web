import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WellaPongalImg from '../Pictures/Wella Pongal 2025.jpg';

import WhotShot1 from '../Pictures/WhotShot-1.jpeg';
import WhotShot2 from '../Pictures/WhotShot-2.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
    { src: WhotShot1, alt: 'WhotShot1' },
    { src: WhotShot2, alt: 'WhotShot2' },
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
                            <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Whot Sot</h1>
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
                            A club service initiative titled WHOTSOT was organized as for its Membership Development and Retention

                            efforts. The project was held at Leisure Land, Galle, with the participation of eight club members.
                            Initially, the club planned a two day trip to strengthen fellowship and enhance member engagement.
                            However, due to unavoidable circumstances, the plan was revised to a one day outing. Despite the change,
                            the event was successfully carried out and achieved its intended objectives.
                            The day-out trip was filled with exciting water games and recreational activities, allowing members to relax,
                            interact, and bond outside the usual club environment. The informal setting helped improve relationships
                            among members and fostered a sense of unity and belonging within the club.
                            Overall, the project was a great success as it promoted fellowship, strengthened member connections, and
                            contributed positively toward membership retention. The participants thoroughly enjoyed the experience,
                            making it a memorable and fun-filled outing for everyone involved.
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
                                <li>To organize a successful recreational trip for active participation of members</li>
                                <li>To encourage better interaction and communication among members</li>
                                <li>To create a comfortable environment for members to build stronger relationships</li>
                                <li>To enhance teamwork and unity within the club</li>
                                <li>To ensure all participants have an enjoyable and memorable experience</li>
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
