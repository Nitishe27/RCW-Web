import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
// Placeholder images (replace with actual images as needed)
import Nitishe from '../Pictures/Nitishe.jpg';
import Narmathan from '../Pictures/Narmathan.jpg';
import Didusan from '../Pictures/Didusan.jpg';
import Thaanya from '../Pictures/Thaanya.jpg';
import Mathumitha from '../Pictures/Mathumitha.jpg'
import Abishek from '../Pictures/Abishek.jpg';
import Vasikaran from '../Pictures/Vasi.jpg';
import Max from '../Pictures/Maxalo.jpg';
import Hagshana from '../Pictures/Hagshana.jpeg';
import Rodney from '../Pictures/Rodney.jpeg';



const flipCardStyle = `
.flip-card {
  perspective: 1200px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(.4,2,.6,1);
  transform-style: preserve-3d;
}
.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.flip-card-front {
  background: #fff;
  z-index: 2;
}
.flip-card-back {
  background: #4B1D1D;
  color: #fff;
  transform: rotateY(180deg);
  z-index: 3;
}
`;

const boardMembers = [
  {
    name: 'Rtr. Mathumitha Karunananthan',
    position: 'International Service Director',
    image: Mathumitha,
    testimonial: 'When I joined Rotaract, everyone was incredibly welcoming and kind. What began as simple curiosity grew into something much larger, a community filled with positive people, uplifting energy, and a purpose-driven spirit. Since then, I’ve encouraged my two best friends to join because I truly believe in what we’re building together. From impactful projects to memorable moments that bring warmth to life, Rotaract has become a place where passion meets action, and every effort, big or small, makes a difference. Now, as the Director of International Services, I’m thrilled to extend that spirit beyond borders—to connect with clubs worldwide, celebrate diverse cultures, and remind ourselves that service is a universal language.'
  },
  {
    name: 'Rtr. Nitishe Premnath',
    position: 'Professional Development Director',
    image: Nitishe,
    testimonial: 'In 2024, I stepped into Rotaract with the simple hope of meeting new people and broadening my horizons. What I found was something far greater — a vibrant space where purpose meets passion, and friendships evolve into lifelong bonds. Being part of this movement has been a turning point. It’s opened doors to experiences that have refined my character, challenged my limits, and fueled my drive to grow — not just for myself, but for those around me. I have come to appreciate the value of giving back and the strength of rising through collective effort. Now, as the Professional Development Director of the Rotaract Club of Wellawatte, I’m committed to nurturing the potential in others. My goal is to create opportunities that help our members develop the skills, confidence, and mindset they need to thrive — in service, in leadership, and in life.'
  },
  {
    name: 'Rtr. Didusan Arulshantha',
    position: 'Professional Development Director',
    image: Didusan,
    testimonial: 'In 2024, I embarked on my journey with Rotaract Club of Wellawatte with the modest aspiration of expanding my social circle and gaining broader perspectives. However, what I encountered was far more profound — a dynamic platform where purpose is harmonized with passion, and acquaintances are transformed into enduring relationships. Becoming part of this distinguished movement has marked a significant turning point in my personal and professional development. It has granted me access to enriching experiences that have honed my character, tested my capabilities, and ignited a sincere commitment to continuous growth not solely for personal advancement, but in service to others. Through this journey, I have come to deeply appreciate the essence of service, and the formidable impact of collective action. As the Director of Professional Development at the Rotaract Club of Wellawatte, I am dedicated to fostering the growth and potential of our members. My primary objective is to design and implement initiatives that equip individuals with the skills, confidence, and mindset necessary to excel not only in leadership and service, but also in their personal and professional lives.'
  },
  {
    name: 'Rtr. Thaanya Pushparaj',
    position: 'Communtiy Service',
    image: Thaanya,
    testimonial: 'In 2024, I stepped into Rotaract with a simple intention — to give back in whatever way I could. At the time, I also needed a break from routine and hoped to meet new faces. What I found was more than just a platform for service — it was a community that taught me the true power of kindness, teamwork, and impact. I’ve learned that contributing to society hits differently when it’s done as a team. The energy, support, and shared purpose within Rotaract has shown me how much more powerful service can be when we do it together. Now, as the Community Service Director of the Rotaract Club of Wellawatte, I carry that purpose forward. My goal is to lead with empathy, build projects that matter, and create safe, lasting change for the communities we serve — together, as one team.'
  },
  {
    name: 'Rtr. Hagshana Lingeshwaran',
    position: 'Communtiy Service',
    image: Hagshana,
    testimonial: 'It all began in April 2024 — not with a grand plan, but with a curious heart and a quiet wish to do more. I walked into Rotaract looking for a place to give back… and instead found a place that gave me purpose. Rotaract became more than just a club — it became a canvas where I could blend service, creativity, and compassion. Every project, every outreach, every story from the community painted a deeper understanding of what it truly means to serve. I didn’t just witness change — I became part of it. Now, as the Director of Community Service for the Rotaract Club of Wellawatte, I carry that same spark into everything I do. My mission? To create ripples of kindness, build bridges of trust, and craft initiatives that leave lasting footprints — not just on the ground, but in hearts.Because when passion meets purpose, communities don’t just survive — they shine.'
  },
  {
    name: 'Rtr. Abishek Sabren',
    position: 'Clubs Service Director',
    image: Abishek,
    testimonial: 'I joined the Rotaract Club of Wellawatte in 2024, simply hoping to meet new people and explore new experiences. But what awaited me was something far more impactful — a space where purpose meets passion, and strangers turn into lifelong friends. My journey began with a beach cleanup project — a simple act of service that opened my eyes to the deeper meaning of community and responsibility. From there, I had the privilege of leading Inside Edge, a project that pushed me to step out of my comfort zone and step up as a leader. Being part of this movement has shaped me in ways I never expected. It has refined my character, challenged my limits, and sparked a drive to grow — not just for myself, but for those around me. Through service and shared experiences, I’ve learned the true power of collective effort and the joy of giving back. Now, as the Club Service Director of the Rotaract Club of Wellawatte, I’m dedicated to strengthening the spirit of camaraderie within our club. My focus is on creating meaningful connections, fostering unity, and building a vibrant club culture where every member feels valued and inspired to contribute. Through shared experiences, celebrations, and collaboration, I aim to make our club not just a space for service — but a second home for every Rotaractor.'
  },
  {
    name: 'Rtr. Vasikaran',
    position: 'Clubs Serivce Director',
    image: Vasikaran,
    testimonial: 'In 2023, I joined Rotaract with the intention of expanding my network and stepping out of my comfort zone. What I discovered was far more meaningful — a community that thrives on connection, purpose, and shared growth. Rotaract has become a space where I’ve grown not only as an individual but also as a team player. It has shaped my perspective on service, leadership, and the impact we can create when we come together for something greater than ourselves. Now, as the Club Services Director of the Rotaract Club of Wellawatte, my focus is on building a strong sense of unity and engagement within our club. I believe that a connected club is a thriving club — and I’m dedicated to creating moments, events, and memories that bring our members closer, strengthen our bond, and reflect the true spirit of Rotaract.'
  },

  {
    name: 'Rtr. Narmathan Tharmathasan',
    position: 'Membership Development',
    image: Narmathan,
    testimonial: 'My Rotaract journey began in 2020 with the Rotaract Club of Matale — a decision that would soon become one of the most defining chapters of my life. After two years of learning and growing, I had the honor of joining the Board as the Director of Sports and Recreation, and also took on the role of Captain of the Rotaract Sri Lanka Hockey Team — blending my passion for teamwork, leadership, and sportsmanship. In 2024, I made a bold move and transferred to the Rotaract Club of Wellawatte, where I continued my journey by serving as the Public Relations Director — a role that allowed me to amplify voices, connect people, and showcase the spirit of our club. Now in 2025, I step into a new chapter as the Director of Membership Development. My mission is simple yet powerful — to build a strong and inclusive member base, where every individual feels valued, engaged, and empowered to contribute. I look forward to creating meaningful opportunities for growth and belonging, just as Rotaract has given me.'
  },
];

const CommitteeBoard = () => {
  const [flipped, setFlipped] = useState(Array(boardMembers.length).fill(false));

  const handleFlip = idx => {
    setFlipped(prev => prev.map((f, i) => (i === idx ? !f : f)));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{flipCardStyle}</style>
      <Navbar />
      <section className="pt-24 pb-12 bg-gradient-to-br from-red-600 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Board of Directors</h1>
          <p className="text-xl text-yellow-100 mb-8">Meet our Board of Directors.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {boardMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.08, type: 'spring', bounce: 0.3 }}
                viewport={{ once: true }}
                className="relative w-full flex items-center justify-center"
              >
                <div
                  className={`flip-card w-full${flipped[idx] ? ' flipped' : ''}`}
                  style={{ aspectRatio: '1/1', minWidth: 340, maxWidth: 400, minHeight: 340, maxHeight: 400 }}
                  onClick={() => handleFlip(idx)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={flipped[idx]}
                >
                  <div className="flip-card-inner">
                    {/* Front Side */}
                    <div className="flip-card-front flex flex-col h-full p-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-4/5 object-cover rounded-t-2xl"
                        style={{
                          minHeight: '75%',
                          maxHeight: '85%',
                          objectPosition:
                            member.name === "Rtr. Vasikaran" || member.name === "Rtr. Narmathan Tharmathasan"
                              ? "center 20%"
                              : "top"
                        }}
                        title="Click to see testimonial"
                      />
                      <div className="flex-1 flex flex-col justify-end items-center px-6 py-4">
                        <h3 className="text-xl font-bold text-red-800 mb-1">{member.name}</h3>
                        <div className="text-lg font-medium text-gray-600 mb-1">{member.position}</div>
                        <div className="text-sm text-gray-400">Click card to see testimonial</div>
                      </div>
                    </div>
                    {/* Back Side */}
                    <div className="flip-card-back flex flex-col h-full p-0">
                      <div className="w-full h-3/4 bg-[#4B1D1D] rounded-t-2xl flex items-center justify-center px-6 py-4">
                        <blockquote className="italic text-white text-base max-h-[90%] overflow-auto w-full whitespace-pre-line">“{member.testimonial}”</blockquote>
                      </div>
                      <div className="flex-1 flex flex-col justify-end items-center px-6 py-4">
                        <button className="mt-2 text-yellow-200 underline text-sm" onClick={e => { e.stopPropagation(); handleFlip(idx); }}>Back</button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CommitteeBoard; 