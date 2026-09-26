import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HipHop1Img from '../Pictures/Hip Hop 1.jpg';
import HipHop2Img from '../Pictures/Hip Hop 2.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import IAC1 from '../Pictures/IAC-1.jpeg';
import IAC2 from '../Pictures/IAC-2.jpeg';
import IAC3 from '../Pictures/IAC-3.jpeg';

const images = [
    { src: IAC2, alt: 'I Am A Special Child 2' },
    { src: IAC3, alt: 'I Am A Special Child 3' },
    { src: IAC1, alt: 'I Am A Special Child 1' },
];

const IamASpecialChild = () => {
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
                            <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">I am a Special Child</h1>
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
                            Project Chairs: Rtr. Hagshana Lingeshwaran
                        </motion.p>
                        <motion.p
                            className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            The “I’m Special Child” project, organized by the Rotaract Club of Wellawatte, was a heartwarming
                            community service initiative aimed at celebrating and supporting children with special needs. The event took
                            place on the 26th of September 2025 at Little Flower School in Kurunegala. Planning for the project began
                            on the 28th of July under the guidance of the club’s President, Rtr. Dilash Sivakumaran. The project was
                            jointly chaired by the Community Service Directors, Rtr. Thaanya Pushparaj and Rtr. Hagshana
                            Lingeshwaran, who worked diligently to ensure that every element of the program was meaningful and
                            impactful.
                            The team arrived at the venue around 9.00 a.m., where the students and teachers warmly welcomed the
                            Rotaractors. The school atmosphere was filled with joy, positivity, and excitement as everyone prepared for
                            the day’s activities. The agenda included several interactive sessions, fun games, and entertainment
                            programs designed to engage the children and make them feel appreciated. Volunteers from the Club
                            interacted closely with the children, spreading smiles and creating lasting memories.
                            During the event, participants enjoyed various activities such as music, dancing, and drawing sessions,
                            which encouraged creativity and expression among the children. Refreshments were provided throughout the
                            day, ensuring that everyone was comfortable and energized. The program concluded around 2.30 p.m. after
                            an emotional and joyful celebration where all participants came together to appreciate the uniqueness and
                            talents of every child.
                            The “I’m Special Child” project was more than just a one-day event; it was a meaningful gesture of
                            inclusion and compassion. It reflected the club’s dedication to making a difference in society by uplifting
                            those who often go unnoticed. The event strengthened the bond between the Rotaract members and the
                            community, reminding everyone that love, patience, and understanding can create a more inclusive world for
                            all
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
                                <li>Promote inclusivity, love, and acceptance for children with special needs through fun, confidence-building activities.</li>
                                <li>Raise community awareness about supporting differently-abled individuals and recognizing their unique abilities.</li>
                                <li>Strengthen community relationships by uniting parents, teachers, and volunteers around a shared cause of compassion.</li>
                                <li>Develop leadership, empathy, and teamwork skills among club members through hands-on community service.</li>
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

export default IamASpecialChild;
