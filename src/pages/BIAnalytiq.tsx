import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BIAnalyticalImg from '../Pictures/BI analytical.jpg';
import BIAnalytical2Img from '../Pictures/BI analytical 2.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: BIAnalyticalImg, alt: 'BI Analytical' },
  { src: BIAnalytical2Img, alt: 'BI Analytical 2' },
];

const BIAnalytiq = () => {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">BI Analytiq</h1>
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
              Project Chairs: Rtr. J.Basker & Rtr. Krithikprakash Sivakumar
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The "BI Analytiq" Project, named to present an innovative twist on "Business Intelligence" (BI), was crafted to introduce a diverse audience to the essentials of Power BI, which is a powerful tool for transforming complex data into clear, actionable insights. Power BI stands out as an industry standard in data visualization and analytics, bridging knowledge gaps across sectors by providing tools to visualize, analyze, and share data insights seamlessly and dynamically.<br/><br/>
              Recognizing the growing demand for data literacy, this project was designed not only for Rotaractors but also for a broader audience, including professionals, students, and community members eager to improve their data analysis skills. The session, held on September 28, 2024, via Google Meet, gathered 46 enthusiastic participants who stayed actively engaged throughout, highlighting the project's relevance and appeal.<br/><br/>
              The session began with Joint Secretary Rtr. Kirthikprakash serving as host, welcoming attendees and introducing the facilitator, Mr. Rukshan Edirisinghe, an Associate Power BI Developer at Platned with a background in science and management. Rukshan guided participants through each step of the Power BI basics, beginning with the installation process and moving into core concepts, such as data connections, model relationships, and cardinality in data structuring.<br/><br/>
              After the introductory slides, participants were prompted to log into the Power BI tool, following along as Rukshan demonstrated the essential features. This interactive, hands-on approach allowed participants to build skills in real-time. The facilitation team maintained a high level of engagement by addressing questions immediately as they arose, creating a supportive environment for learning.<br/><br/>
              At the conclusion of the session, a vote of thanks was delivered by the project chairperson, prospective member Jawagar, who expressed gratitude for the participants' engagement and emphasized the importance of data literacy in today's digital world. He encouraged everyone to apply the skills learned during the session in their respective fields. Additionally, Rukshan provided his contact details to the participants, encouraging them to reach out with any questions or doubts regarding the Power BI project and tool, reinforcing a commitment to ongoing support and learning.<br/><br/>
              Feedback from the session was highly positive, with participants expressing a strong interest in furthering their Power BI knowledge and exploring additional data analytics tools. This enthusiasm underlined the success of the "BI Analytiq" project in not only introducing Power BI basics but also fostering a community invested in data literacy and continuous learning.
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
                <li>To familiarize participants with the essential functions of Power BI, including data import, connection, visualization, and reporting.</li>
                <li>To enable participants to learn and apply core data modeling techniques, such as understanding data relationships, cardinality, and building effective dashboards.</li>
                <li>To encourage attendees to utilize data visualization and analysis to inform better decision-making in their professional and personal projects.</li>
                <li>To create a collaborative learning experience that inspires ongoing exploration of BI tools and techniques, enhancing overall data literacy within the community.</li>
                <li>To motivate participants to continue developing their skills in Power BI and related analytics tools, ensuring they remain competitive and informed in the evolving field of data analytics.</li>
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

export default BIAnalytiq;
