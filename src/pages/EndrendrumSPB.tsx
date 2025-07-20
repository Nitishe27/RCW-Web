import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EndrendumSPBImg from '../Pictures/Endrendum SPB.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: EndrendumSPBImg, alt: 'Endrendum SPB Event' },
];

const EndrendrumSPB = () => {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Endrendrum SPB</h1>
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
              Project Chair:Rtr. Kugaleshani Ravirajah
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Replace the following with the actual project description */}
              "Indha thegam maraindhaalum isaiyaai malarven...."
Some voices are not just heard; they're felt, lived, and forever remembered. The legendary playback singer,
S. P. Balasubrahmanyam (SPB), is one such voice. With over 40,000 recorded songs in multiple languages,
SPB's music transcends generations, languages, and emotions. Whether it’s the pain of heartbreak, the joy of
love, the serenity of sleep, or the hope in despair, there’s always a song by SPB that resonates.
In memory of this eternal legend, we hosted Endrendrum SPB'25, our third consecutive annual tribute to the
voice that shaped our emotions. This year, we decided to make it even more special by collaborating with a
wider circle of Rotaract Clubs, including Rotaract Club of Colombo Fort, Rotaract Club of Jaffna Midtown,
Rotaract Club of Kilinochchi Town, Rotaract Club of Trincomalee, Rotaract Club of Mannar Town,
Rotaract Club of Matale, and Rotaract Club of Chunnakkam. By combining efforts, we amplified the love
and respect we collectively hold for this icon through this club service (main avenue) and recreational (sub
avenue) project.
Though the initial plan was to host a physical event, considering the financial constraints as we approached
the final month of the Rotaract year, we decided to go virtual. Google Meet was chosen for its accessibility,
familiarity, and capacity to host a larger audience without complications.
The session kicked off at 7:10 PM, following a brief waiting period to accommodate more participants. With
over 50 people joining and 45+ staying actively until the end, the success of this virtual session far exceeded
our expectations.
The evening began with our energetic hosts Rtr. Yazeed from Rotaract Club of Colombo Fort and Rtr.
Anojan from the Rotaract Club of Jaffna Midtown warmly welcomed the attendees. They opened with a
beautiful introduction about SPB and the legacy we were about to honor. To ignite the emotion, they invited
participants to share their memories and thoughts associated with SPB. What followed was a flood of
heartfelt recollections - songs that helped them fall asleep, music that stood by them through failure, love,
and loneliness. It was evident SPB had touched every soul in the room.
We were honored to feature Kannadasan Indrajith, a famed participant of Zee Tamil’s SaReGaMaPa, who
made a mark by singing SPB’s classics throughout the competition. His presence elevated the entire session.
He began with the song, “Kadalilae mazhaiveezhndhapin, Endha thuli mazhai thuli... Kaadhalil adhupola
naan kalandhitten kaadhali...”, instantly captivating every listener.
The club performances that followed were nothing short of magical:
Rtr. Christina from Rotaract Club of Trincomalee sang “Thaamarai melae neerthuli pol, Thalaivanum
thalaiviyum vaazhvadhenna...” which beautifully transported us into the very scenes of the song.
Rtr. Narmathan from Rotaract Club of Wellawatte sang “Nilaave vaa...”, touching hearts with the iconic line
“Enai nee thaan pirinthaalum ninevaale anaipean...” - a lyric that sums up our enduring connection with SPB
even in his absence.
We welcomed Indrajith back to sing again, and he chose “Idho idho en pallavi...” - a performance that
brought tears to many eyes.
A surprise request was made to Rtr. Jeimoshan from the Rotaract Club of Matale, and after enthusiastic
encouragement, he performed “En kadhale en kadhale...” - a few heartfelt lines that left a deep impact.
Rotaract Club of Kilinochchi Town presented a heartfelt video tribute, made by a true fan of SPB, honoring
his timeless legacy.
Rtr. Roy Justin from the Rotaract Club of Jaffna Midtown then took the virtual stage and stunned everyone
with his remarkable talent. His rendition included the moving line “En idhayathai vazhiyil engeyo maranthu
thozhainthuvittean...”, a sentiment we all felt amidst his performance.
We also played a pre-recorded performance by Rtr. Thanushan from the Rotaract Club of Fort, who was
touching and soulfully rendered.
In between, our hosts kept the energy alive with facts about SPB’s illustrious journey, from his first song to
his Guinness World Records, reminding us of the man behind the voice.
As a grand finale, all participants unmuted their microphones to sing together “Sangeetha megam thean
sindhum neram...” - a surreal and harmonious ending to a night that felt like a shared dream.
This session gave us more than just music. It gave us connection, healing, and a few hours of peace amidst
our hectic lives. It reminded us that SPB isn’t gone. He’s in every song, every lyric, and every memory we
hold dear.
We concluded the session with heartfelt thanks to Indrajith, our enthusiastic participants, and our partner
clubs. And we promise to bring this project to life physically next year, just the way SPB’s music deserves
to be celebrated: together, in harmony.
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
                <li>Tribute performances of SPB's classic songs</li>
                <li>Engaging musical atmosphere for all attendees</li>
                <li>Interactive sessions and audience participation</li>
                <li>Celebration of SPB's legacy and influence</li>
                <li>Community bonding through music</li>
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

export default EndrendrumSPB;
