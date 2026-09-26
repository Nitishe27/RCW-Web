import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BreakawayImg from '../Pictures/Breakaway.jpg';
import BreakAway26Img from '../Pictures/BreakAway-1.jpeg';
import BreakAway26Img2 from '../Pictures/BreakAway-2.jpeg';
import BreakAway26Img3 from '../Pictures/BreakAway-3.jpeg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CoastalCareImg1 from '../Pictures/CoastalCare1.jpeg';
import CoastalCareImg2 from '../Pictures/CoastalCare2.png';
import CoastalCareImg3 from '../Pictures/CoastalCare3.jpeg';

const images = [
    { src: CoastalCareImg2, alt: 'Coastal Care' },
    { src: CoastalCareImg1, alt: 'Coastal Care' },
    { src: CoastalCareImg3, alt: 'Coastal Care' },
];

const CoastalCare = () => {
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
                            <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Coastal Care</h1>
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
                            Project Chair: Rtr. T. Pushparaj
                        </motion.p>
                        <motion.p
                            className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            The Coastal Care Beach Clean-Up Project was an environmental initiative jointly organized by the Rotaract
                            Clubs of ICBT, Panadura, and Wellawatte on 16th August 2025 at Mt. Lavinia Beach. With Sri Lanka’s

                            beaches facing increasing pollution due to tourism, fishing activities, and urban runoff, this project was
                            designed to address marine pollution while raising community awareness on sustainable waste management.
                            A total of 35 volunteers actively participated, supported by the Dehiwala-Mount Lavinia Municipal Council,
                            Mount Lavinia Police, and the Department of Coast Conservation and Coastal Resource Management. The
                            participants were briefed on objectives, safety protocols, and proper handling of waste before being divided
                            into groups and assigned zones across the beach. Equipped with gloves and garbage bags, they
                            systematically collected and segregated waste into plastics, glass, metal, and biodegradable materials,
                            ensuring recyclables were handled appropriately.
                            By the end of the morning, volunteers had successfully collected approximately 85 kilograms of waste,
                            significantly reducing visible litter along the coastline. The project not only restored the beach’s natural
                            beauty but also played a vital role in protecting marine biodiversity by reducing threats posed by plastics and
                            non-biodegradables.

                            In addition to its environmental impact, the initiative fostered teamwork, leadership, and a culture of eco-
                            consciousness among participants. Through strong collaboration and an effective public relations campaign,

                            the project reached a wider audience, inspiring sustainable practices and setting a foundation for future
                            conservation efforts.
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
                                <li>To remove solid waste and plastics from the beach area.</li>
                                <li>To promote community participation in environmental conservation.</li>
                                <li>To raise awareness on the importance of reducing single-use plastics.</li>
                                <li>To encourage sustainable waste disposal and recycling practices.</li>
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

export default CoastalCare;
