import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClubTrip24Img1 from '../Pictures/Club Trip 24.jpg';
import ClubTrip24Img2 from '../Pictures/Club Trip 24 -2.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: ClubTrip24Img1, alt: 'Club Trip 24 - 1' },
  { src: ClubTrip24Img2, alt: 'Club Trip 24 - 2' },
];

const MindtheGap = () => {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Mind the Gap</h1>
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
              Project Chair: Rtr. Dilash Sivakumaran and Rtr. Harrindhran Balakrishnan
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Replace the following with the actual project description */}
              The 'Mind the Gap' Annual Club Trip was designed as a strategic initiative to foster stronger relationships

and promote team cohesion within the Rotaract Club of Wellawatte. Recognizing the importance of a tight-
knit community, particularly at the start of the Rotaract year, the club planned the trip for the first quarter to

give members a unique opportunity to connect on a personal level. The chosen name, 'Mind the Gap,'
symbolized the aim of bridging any gaps in communication or familiarity among club members, especially
between new and existing members.
The planning process for this trip was inclusive and interactive, ensuring the preferences and feedback of
club members were taken into account. A poll was conducted in the club’s WhatsApp groups, where
members were asked to share their preferences for the destination hill country versus the southern region
along with their expected budget, accommodation preferences (villa stay or exploration), and duration of the
trip (one or two nights). After analyzing the results, Bentota was selected as the destination, and the trip was
planned as a one-night stay at a cozy villa over the long weekend of August 19-21, 2024, capitalizing on the
holiday to make it easier for working members to join.
To encourage maximum participation, the Executive Committee (ExCo) took a personalized approach,
dividing the club members among them and contacting each person individually to explain the details and
encourage them to take part. Additionally, the club distributed flyers to build excitement and keep everyone
informed. Current members and past members of the club were all warmly invited to join the experience.
With inclusivity in mind, the organizing team ensured that finances did not become a barrier for
participation. A detailed budget was prepared, and the per-head cost was calculated. Members were given
the option to pay in installments, providing flexibility and making the trip accessible to everyone. Once the
villa was confirmed, a thorough agenda was created, detailing each activity and the timeline for the trip to
ensure a smooth and enjoyable experience.
Two days before the trip, all necessary supplies were purchased, and preparations were made to ensure a
hassle-free getaway. The journey started on the morning of August 19, 2024, as members gathered at Pettah
Bus Stop at 8 AM. A bus was chosen as the preferred mode of transportation, given its cost-effectiveness
and efficiency. Upon arriving in Bentota, tuk-tuks were arranged to transport members to Sakura Villa, a
picturesque villa located in a village setting surrounded by lush greenery. The peaceful environment of the
villa offered the perfect backdrop for relaxation and bonding.
The agenda for the trip was carefully curated to offer a mix of relaxation and fun. Upon arrival, a few
members collected lunch while others settled into the villa. After a delicious meal, a spontaneous cricket
match with local village children kicked off the fun, followed by a sunset visit to Bentota Beach. The group
strolled along the shore, taking in the stunning sunset while capturing moments on video and in photos. The
evening continued with an exciting pool session, where members enjoyed themselves and created

unforgettable memories, like playfully pushing a member into the pool while they were on a call.
As night fell, the group worked together to prepare a BBQ dinner, with everyone contributing to chopping
vegetables and grilling food. A local dog joined in the festivities, enjoying the BBQ chicken alongside the
members. The night was filled with lively conversations, music, and a collective moment of reflection under
the stars, sharing personal stories and building deeper connections.
The second day started with hot coffee and an engaging UNO session (minus the club president, who was
still asleep!). Despite the fun and relaxation, some members demonstrated their multitasking abilities by
attending virtual meetings and lectures during the trip, balancing their responsibilities. Breakfast, prepared
by the members, consisted of simple sandwiches, served with music and laughter as everyone reminisced
about the previous night’s activities.
The trip concluded with everyone packing up and checking out of the villa by 1 PM. Although rain began to
fall as the group prepared to leave, it only added to the charm of the journey, as if Bentota was bidding a
fond farewell to the club. Upon returning to Colombo, members began sharing photos and videos from the
trip, with the PR Director creating a highlight reel of the event, which was later posted on social media.
Feedback from members indicated that the trip was a resounding success, with many requesting another trip
in the near future this time to the hill country. The 'Mind the Gap' trip achieved its goal of creating a unified,
energized, and connected club, setting a positive tone for the year ahead.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-xl shadow p-6"
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Trip Highlights</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base text-left">
                <li>Strengthening Member Relationships:</li>
                <li>Team-building games and activities</li>
                <li>Club bonding and networking</li>
                <li>Memorable group photos and stories</li>
                <li>Relaxation and fun for all participants</li>
                <li>Boosting Club Morale and Engagement</li>
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

export default MindtheGap;
