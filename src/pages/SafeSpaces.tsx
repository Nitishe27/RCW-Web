import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SafeSpacesImg from '../Pictures/Safe Spaces.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: SafeSpacesImg, alt: 'Safe Spaces Event' },
];

const SafeSpaces = () => {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Safe Spaces</h1>
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
              Project Chair: Rtr. Akshayvisnu Ramanathan 
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 max-w-4xl mx-auto text-justify mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Replace the following with the actual project description */}
              On the 16th of March 2025, the Rotaract Club of Wellawatte proudly hosted “Safe Spaces”, a virtual
community service initiative conducted via Google Meet. As part of our ongoing commitment to promoting
gender equity, human rights, and community well-being, this project was designed to shed light on the
pressing issue of violence against women in Sri Lanka, a topic that is often under-discussed yet deeply
impactful across all strata of society.
The primary objective of the session was to raise awareness, educate attendees, and empower individuals to
take part in the creation of safer, more inclusive environments for women and girls. With this aim in mind,
the event brought together a diverse audience, including university students, young professionals,
community leaders, and concerned citizens, all united by a shared interest in social justice and gender equity.
The keynote speaker for the session was Ms. Kathya Senevirathne, a distinguished Attorney-at-Law and
human rights advocate known for her relentless work in the field of gender-based violence and legal
empowerment. With her deep legal insight and compassionate approach, Ms. Kathya offered a
comprehensive overview of the prevalence, causes, and consequences of violence against women in the Sri
Lankan context.
Her presentation was both eye-opening and thought-provoking, beginning with statistical data on domestic
violence, workplace harassment, and systemic discrimination, helping participants understand the scale and
urgency of the issue. She then delved into the legal protections available to women under Sri Lankan law,
including the Prevention of Domestic Violence Act, and highlighted the gaps in the implementation and
accessibility of justice for survivors.
One of the most impactful segments of the session was when Ms. Kathya discussed real-world challenges
faced by survivors, including social stigma, limited support services, and the emotional toll of navigating the
justice system. Through these insights, attendees were encouraged to reflect on their own roles in either
perpetuating or dismantling the structures that enable gender-based violence.
The webinar also emphasized proactive strategies for prevention and advocacy, equipping participants with
practical tools and best practices to help create safer spaces in their personal, professional, and community
environments. These included:
Recognizing early warning signs of abuse
Engaging in bystander intervention
Supporting survivors through empathetic listening and referral to resources
Advocating for gender-sensitive policies in workplaces and institutions
Promoting awareness through education and community dialogue
Following the keynote address, the event transitioned into an interactive Q&A session, where participants
were encouraged to share their thoughts, ask questions, and explore possible solutions. The open dialogue
created a space for meaningful conversations, where ideas flowed freely and participants felt empowered to
express their concerns and commitments to change.
“Safe Spaces” ultimately served as more than just a webinar becoming a platform for connection, awareness,
and action. It reminded everyone present that addressing violence against women is not solely the
responsibility of authorities or policymakers but a collective duty that begins with each of us in our homes,
workplaces, and communities.
The Rotaract Club of Wellawatte extends its heartfelt gratitude to Ms. Kathya Senevirathne for her
invaluable contribution, and to every participant who took time to engage with this important cause. As a
club, we remain dedicated to continuing these conversations and initiatives in our pursuit of a safer, more
equitable society for all.

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
                <li>Mental health awareness workshops</li>
                <li>Resource sharing and support networks</li>
                <li>Community discussions and outreach</li>
                <li>Empowerment and stigma reduction</li>
                <li>Inclusive and safe environments for all</li>
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

export default SafeSpaces;
