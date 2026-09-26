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

const images = [
  { src: BreakAway26Img2, alt: 'Breakaway' },
  { src: BreakAway26Img, alt: 'Breakaway' },
  { src: BreakAway26Img3, alt: 'Breakaway' },
];

const Breakaway = () => {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Breakaway</h1>
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
              Project Chair: Rtr. Azeef Azmie
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Break-A-Way ’26, an annual orientation and fellowship initiative of the Rotaract Club of Wellawatte, was
              successfully conducted at the Wellawatte Beach, bringing together prospective members and existing
              Rotaractors in an engaging and vibrant setting. Designed to provide newcomers with a meaningful introduction
              to the values, opportunities, and fellowship of Rotaract, the project served as a platform for participants to build
              connections, develop interpersonal skills, and gain insights from experienced Rotaractors and past leaders of the
              Club.
              The day commenced with the gathering of members and registered prospects at 7:30 am, allowing participants
              to arrive, settle in, and connect with one another before the commencement of the program. At 8:00 am, the
              program commenced with the Professional Development Director Rtr. Kavinesh Ganeshamoorthy welcoming
              the gathering and introducing himself and his Co-Director, Rtr. Mathuvathany Subramaniyam. This set the tone
              for a day centered around fellowship, learning, interaction, and personal development.
              Following the opening, the Project Chair Rtr. Shalini Nagaratnam introduced Break-A-Way ’26 and provided
              the participants with an overview of the day's proceedings. She subsequently introduced the first activity,
              “Meet and Mingle,” an interactive icebreaker designed to break down initial barriers and encourage
              participants to establish meaningful connections from the outset.
              For the activity, participants were paired up and given the opportunity to engage in a brief conversation where
              they exchanged information about themselves. Following the interaction, each participant was required to
              introduce their partner to the wider gathering, sharing the information they had learned. Conducted over
              approximately 15–20 minutes, the activity created a welcoming and inclusive environment while encouraging
              participants to step outside their comfort zones, communicate confidently, and become acquainted with fellow
              members and prospects.
              The program then transitioned into the first segment of “Legacy Speaks,” featuring GCC Rtr. Balavan
              Kulendran. Drawing upon his experiences and journey within Rotaract, he shared valuable insights with the
              participants, offering them a glimpse into the opportunities, relationships, and personal growth that the
              movement can facilitate. His reflections provided the newcomers with an authentic perspective on the
              significance of active participation in Rotaract and the lasting impact of the experiences gained through the
              movement.
              Adding an element of excitement and friendly competition to the program, participants were then engaged in
              “Blockbuster Brain Teaser,” an interactive movie-guessing challenge. The gathering was divided into two
              teams, with participants taking turns acting out movie titles for the opposing team to identify. Spanning
              approximately 30 minutes, the activity encouraged creativity, teamwork, observation, and effective
              communication, while simultaneously strengthening the camaraderie among the participants.
              The second segment of “Legacy Speaks” featured Immediate Past President Rtr. Dilash Sivakumaran, who
              shared his experiences and perspectives on Rotaract. His address further enriched the orientation experience by
              providing participants with insights into the responsibilities, opportunities, and personal development that
              accompany active involvement in the movement. The session encouraged the prospects to view Rotaract not
              merely as a club, but as a platform through which they could challenge themselves, develop their capabilities,
              and create a meaningful impact.
              The participants were subsequently engaged in “Number Rush,” a fast-paced elimination game designed to
              test concentration, memory, coordination, and the ability to respond under pressure. As the rounds progressed,
              individual numbers were replaced by designated objects or sounds, requiring participants to carefully remember
              the sequence and respond accurately. Any participant who disrupted the sequence was eliminated, creating an
              atmosphere of anticipation and excitement while encouraging participants to remain attentive and adaptable.
              A short refreshment break was then provided, allowing participants to recharge and interact informally before
              proceeding with the next activity. The program continued with “Balloon Worm,” a team-based challenge that
              placed strong emphasis on coordination, cooperation, communication, and collective effort. Participants were
              required to maintain balloons between themselves and the person behind them while forming a continuous line
              and navigating a designated distance. The team that successfully completed the challenge first without allowing
              any balloons to fall was declared the winner. The activity reinforced the importance of synchronized effort and
              demonstrated how effective teamwork can transform individual contributions into collective success.
              The energy of the program was further complemented by an address from Past President Rtr. Rebbeccan
              Priyadharshani, who shared her experiences and reflections from her journey in Rotaract. Her insights provided
              participants with another valuable perspective on the personal and professional growth that can be achieved
              through active engagement in the movement. Her address further emphasized the importance of embracing
              opportunities, building meaningful relationships, and making the most of one's Rotaract experience.
              The final activity of the day, “Cone Game,” brought the participants together for a lively conclusion to the
              series of games. Divided into two groups, participants were required to remain attentive as the instructor called
              out a series of words. At the mention of the word “cone,” participants had to react swiftly and retrieve the cone
              placed before them. Those who failed to secure the cone were eliminated, allowing the competition to progress
              through successive rounds. The activity tested participants' reflexes, concentration, alertness, and ability to
              perform under pressure, concluding the games on an energetic and memorable note.
              Following the completion of the activities, President Rtr. Harisuthan Mohanadas addressed the gathering and
              shared important insights into Rotaract. His address provided participants with a broader understanding of the
              movement, its values, and the opportunities it presents for personal development, leadership, fellowship, and
              community engagement. The session served as an important concluding reflection for the prospects as they
              embarked on their journey within the Club.
              The project culminated with Project Chair Rtr. Shalini Nagaratnam delivering the Vote of Thanks, expressing
              sincere appreciation to the Directors, President, Past Presidents, senior Rotaractors, members, prospects, and
              everyone who contributed towards the successful execution of Break-A-Way ’26. The collective efforts of the
              organising team and the enthusiastic participation of the attendees played an integral role in creating a
              meaningful and memorable experience.
              In essence, Break-A-Way ’26 transcended the boundaries of a conventional orientation program, serving as a
              platform for connection, learning, fellowship, and personal development. Through a carefully curated blend of
              interactive activities, leadership insights, experiential sharing, and opportunities for meaningful interaction, the
              project introduced prospective members to the essence of the Rotaract experience.
              The stories and guidance shared by senior Rotaractors and past leaders offered participants a glimpse into the
              transformative potential of the movement, while the collaborative activities enabled them to experience the
              values of teamwork, communication, adaptability, and fellowship firsthand. By bringing together new faces and
              existing members in an environment built on inclusivity and engagement, Break-A-Way ’26 successfully laid
              the foundation for lasting friendships, stronger club integration, and continued participation in the Rotaract
              movement.
              Break-A-Way ’26
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
                <li>To orient new members to the core values, mission, and opportunities within Rotaract.</li>
                <li>To create a platform for members to engage with past presidents and learn from their experiences.</li>
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

export default Breakaway;
