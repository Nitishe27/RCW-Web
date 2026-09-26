import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SafeSpacesImg from '../Pictures/Safe Spaces.jpg';
import NextStepImg1 from '../Pictures/NextStep-1.jpeg';
import NextStepImg2 from '../Pictures/NextStep-2.jpeg';
import NextStepImg3 from '../Pictures/NextStep-3.jpeg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NextStep from './NextStep';
import PG1 from '../Pictures/PG1.jpeg';
import PG2 from '../Pictures/PG2.jpeg';

const images = [

    { src: PG1, alt: 'Paddles and Giggles Event 1' },
    { src: PG2, alt: 'Paddles and Giggles Event 2' },
];

const PaddlesAndGiggles = () => {
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
                            <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Paddles and Giggles</h1>
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
                            Project Chair: Rtr. Rodney Rajaratnam
                        </motion.p>
                        <motion.p
                            className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* Replace the following with the actual project description */}
                            As the youth of an international volunteer movement, the path to selfless, and dedicated service, is often not
                            one walked upon solely. Identifying the significance of collaboration, and connection as means of
                            accomplishing the intended objectives, the Sports and Recreational Activities Avenue of the Rotaract Clubs
                            of Cinnamon Gardens, Colombo Uptown, and Wellawatte jointly organized the novel initiative “Paddles &
                            Giggles”.
                            Transpiring on the 28th of September, 2025 at the picturesque premises of The Pickle Island at the Arcade
                            Independence Square, the occasion gathered a multitude of personalities for an evening of competition,

                            laughter, and fellowship; accomplishing the Sustainable Development Goal 03 - Good Health and Well-
                            Being with the promotion of physical activities, and balanced lifestyles; Sustainable Development Goal 16

                            - Peace, Justice, and Strong Institutions by the formulation of collaborations, understanding, and respect;
                            as well as Sustainable Development Goal 17 - Partnerships for Goals through the strengthening of
                            associations amongst organizations to achieve objectives.
                            Additionally, the initiative aligned with the Rotary Focus Areas of Peacebuilding and Conflict Prevention,
                            and Disease Prevention and Treatment, in parallel to the completion of the District Focus Area for the
                            Sports and Recreational Activities Avenue by implementing a pursuit which “Embraces Recreational
                            Activities”.
                            Paddles & Giggles successfully marked its conclusion attributing not only to the continuous enthusiasm, and
                            passion of the members of the Rotaract Clubs of Cinnamon Gardens, Colombo Uptown, and Wellawatte, but
                            also owing to the effective public relations efforts; which majorly utilized internal communications channels,
                            with only a few materials being released on the social media pages.
                            Commencing the promotional venture for the initiative on the 16th of September, 2025, with a “Project
                            Reveal” flyer which accumulated over 6,000 views across the platforms, the eye-catching mediums served
                            as a means to capture the curiosity of the intended individuals. While the During Public Relations campaign
                            conducted through Facebook, and Instagram Stories, subsequent to the occasion, a “Thank You” poster, and
                            a recapitulation video was released; bringing the amalgamated outreach of the initiative to approximately
                            15,000 views, with notable engagements.

                            Bringing together diverse individuals from the Rotaract Clubs of Cinnamon Gardens, Colombo Uptown, and
                            Wellawatte, Paddles & Giggles exemplified the methods by which initiatives could be meticulously schemed
                            to foster fellowship, networks, and active engagement, while promoting physical, and mental well-being. As
                            the chapter of Paddles & Giggles concludes with fond memories, and the essence of familiarity, the initiative
                            will continue to lay the foundation for future endeavours which will not only pave the way for the
                            accomplishment of sustainable goals, but also ensure that entities unite for good in the pursuit for a better
                            world.

                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="bg-white rounded-xl shadow p-6"
                        >
                            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Project Highlights</h2>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base text-left">
                                <li>Encourage Holistic Well-Being</li>
                                <li>Strengthen Inter-Club Collaboration.</li>
                                <li>Cultivate Fellowship and Connection</li>
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

export default PaddlesAndGiggles;
