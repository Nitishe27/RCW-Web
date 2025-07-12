import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InnerLeaderImg from '../Pictures/Inner Leader.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: InnerLeaderImg, alt: 'Inner Leader' },
];

const InnerLeader = () => {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Inner Leader</h1>
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
              Project Chair: Rtr. Umashini Krishnananthan
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Project Inner leader is a leadership engagement program, which was initiated in uniting the members of Rotaract club of Wellawatte, making them future fit leaders. Held on March 23rd, 2025, it aimed to inspire self-awareness and confidence among participants through interactive session and activities. The initiative focused on unlocking individual potential while promoting teamwork and emotional intelligence.<br/><br/>
              The physical event commenced at 10.30 AM at Viharamahadevi Park, where the participants of Rotaract club of Wellawatta were welcomed by Rtr. Dilash, Secretary of Rotaract club of Wellawatte and Project Chairperson, Rtr Umashini. The session began with introducing themselves and explaining the motive of this project in increasing leadership growth and strengthened their self-confidence.<br/><br/>
              The highlight of the event was the focus on leadership development, with members of the club, showcasing a deep understanding of the qualities and responsibilities of effective leadership. The session commenced with Rtr. Dilash posing a thought-provoking question: "What is the role of leadership, and why does it matter in our daily lives?" This set the tone for an engaging discussion, where members actively shared their perspectives on the purpose and impact of leadership, demonstrating both insight and enthusiasm.<br/><br/>
              To interact with participants and enhance the confidence within members, the event offered four interactive sessions:<br/>
              <b>1) Word game:</b> In this game, two players receive a word and give clues to help the third player guess it, without saying the word or any part of it. The team earns a point for each correct guess made within the time limit. This fun activity-built communication, teamwork, and quick-thinking skills.<br/>
              <b>2) Balloon Game:</b> Players are divided into three groups, each given a balloon. Team members held hands and balance the balloon using only their heads and feet, without letting it fall. This game promoted interaction, coordination, and teamwork.<br/>
              <b>3) Trust Walk:</b> Obstacles are arranged on the ground, and one team member is blindfolded. The rest of the team guided them verbally to cross the path safely. This activity strengthens communication, trust, patience, and coordination.<br/>
              <b>4) Uprising:</b> A crisis scenario is presented to the participants, who must quickly come up with a solution and justify their actions. This task built crisis management, problem-solving, and decision-making skills under pressure.<br/>
              <b>5) Real-Life Leadership Sharing:</b> Participants were invited to share their personal experiences where they demonstrated leadership in real-life situations. This encouraged reflection, builds confidence, and inspires others through shared stories. The activity promotes self-awareness and peer learning.<br/><br/>
              As the leadership-focused event came to an end, participants considered how the Inner Leader project helped them to identify and develop their own principles of leadership. The vote of thanks was delivered by Rtr. Umashini, conveyed her heartfelt gratitude to the organising team and participants for their eagerness and active participation, which helped make the event a success. The celebration came to an end with a group photo that captured the happiness, friendship, and special moments that characterized Project Inner Leader.<br/><br/>
              Inner Leader was a life-changing experience that enabled participants to discover their own leadership potential, not just a leadership exercise. Members gained critical abilities including self-awareness, communication, and decision-making through thought-provoking conversations, interesting workshops, and team-based tasks. The success of Rotaract highlighted the importance of both individual and group development, furthering Rotaract's commitment to shaping future-ready, responsible, and welcoming leaders.
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
                <li>Enhancing Communication and Teamwork</li>
                <li>Building Trust and Patience</li>
                <li>Promoting Coordination and Strategic Thinking</li>
                <li>Developing Problem-Solving and Decision-Making Skills</li>
                <li>Building Confidence and Self-Awareness</li>
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

export default InnerLeader;
