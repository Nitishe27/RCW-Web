import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InsideEdgeImg from '../Pictures/Inside Edge.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: InsideEdgeImg, alt: 'Inside Edge' },
];

const InsideEdge = () => {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Inside Edge</h1>
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
              Project Chairs: Rtr. Didusan Arulshantha and Rtr. Abishek Sabri
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sports have always been a great way to bring people together, fostering friendships, learning, and new energy. As Rotaractors who frequently enjoy casual cricket matches within our club, we decided to elevate this experience by organizing an inter-club indoor cricket tournament. The idea behind "Inside Edge" was to connect with members from other clubs, encouraging fellowship, collaboration, and mutual learning through the universal language of sports.<br/><br/>
              The event took place on December 21, 2024, at the Uni Sports Center in Alfred House, Colombo 03. Participants started arriving at the venue around 7:00 AM, and by 8:00 AM, everyone had gathered for a briefing session. Chairperson Rtr. Didushan explained the unique format of the tournament, emphasizing inclusivity and inter-club mingling. Instead of forming teams based on clubs, all participants were divided into two mixed groups, ensuring that no one played with members from their own club. Specific areas on the pitch were marked to assign scores for boundaries, with designated zones for 4s and 6s. To promote gender equality and inclusivity, it was decided that the first over of each match would be played by women, both bowling and batting.<br/><br/>
              The tournament was full of excitement, surprises, and laughter, as participants displayed unique styles of play that spiced up the event. We discovered that our club could potentially form a girls' cricket team, as the women showcased remarkable talent on the field. Immediate Past President Rebecca stunned everyone with her impressive batting skills, while President Kugaleshani delivered powerful bowling, leaving many in awe. The matches reached a new level of thrill when the two Praveens faced off, demonstrating excellent cricketing skills that captivated everyone. Meanwhile, Secretary Rtr. Dilash, after being teased for getting out on the first ball, came back with determination and batted brilliantly, proving everyone wrong. Adding to the excitement, we learned that RAC ICBT has twins who are equally skilled in both cricket and football, making them standout players. The games were filled with lighthearted moments, such as Vice President Vinoj's not-so-great bowling attempts, Chairperson Didushan falling hilariously when the ball touched him, and Rebecca's ever-present toy JBL, which kept the vibe alive. Football later in the day added more laughs as the girls bravely took on the challenge, despite getting hit with the ball several times.<br/><br/>
              The tournament kicked off at 8:30 AM after a toss determined which team would bat or bowl first. With Rtr. Didushan taking the role of umpire and the President enthusiastically managing public relations, the matches unfolded in a lively and energetic atmosphere. Two matches were played back-to-back, with participants displaying skill, teamwork, and unrelenting spirit. Every hit, catch, and run was met with cheers and laughter, creating an engaging and competitive environment.<br/><br/>
              Around 11:00 AM, after the cricket matches concluded, an unexpected twist added even more excitement to the day. Some participants expressed a desire to play football, and the group embraced this idea wholeheartedly. Football became an impromptu addition to the event, with everyone, even those unfamiliar with the sport, joining in for an hour of fun. This spontaneous decision allowed participants to bond further, experiment with a new game, and enjoy themselves in a relaxed, carefree manner.<br/><br/>
              As the clock struck noon, the event wrapped up with a quick group photo, capturing the memorable moments of the day. Despite the packed schedule, everyone hurried off to attend their respective club meetings, energized and fulfilled by the morning's activities.<br/><br/>
              The "Inside Edge" project was a resounding success, achieving its purpose of building connections and fostering camaraderie among Rotaractors. By creating mixed teams, the tournament encouraged collaboration and teamwork beyond the boundaries of individual clubs. The emphasis on inclusivity, particularly through the participation of women, highlighted the values of equality and respect. The spontaneous football session added an element of fun and spontaneity, making the event even more special.<br/><br/>
              In the future, we hope to organize similar events with other sports to keep the momentum going and involve even more clubs. Inside Edge proved that sports are not just about competition they're about connection, teamwork, and the joy of coming together for something meaningful.
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
                <li>To foster friendships and build connections among Rotaractors from different clubs through sports.</li>
                <li>To promote inclusivity and teamwork by creating mixed teams that encourage collaboration across club boundaries.</li>
                <li>To create a platform for Rotaractors to share experiences, strategies, and unique playing styles while having fun.</li>
                <li>To provide an opportunity for members to engage in physical activity, enhancing their overall well-being.</li>
                <li>To strengthen inter-club relationships and encourage future collaborative initiatives.</li>
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

export default InsideEdge;
