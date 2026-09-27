import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Dula26 from '../Pictures/Dula26.png';
import Pragadeeshan26 from '../Pictures/Pragadeeshan26.png';
import Kavin26 from '../Pictures/Kavin26.png';
import Mathuvarthany26 from '../Pictures/Mathuvarthany26.png';
import Vasi26 from '../Pictures/Vasi26.png';
import Dinosha26 from '../Pictures/Dinosha26.png';
import Sajeev26 from '../Pictures/Sajeev26.png';
import Jawagar26 from '../Pictures/Jawagar26.png';
import Narmathan26 from '../Pictures/Narmathan26.png';
import Hariv26 from '../Pictures/Hariv26.png';
import Akash26 from '../Pictures/Akash26.png';
import Mathusha26 from '../Pictures/Mathusha26.png'

// Enhanced professional CSS for award-winning design
const flipCardStyle = `
.flip-card {
  perspective: 1200px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.flip-card:hover {
  transform: translateY(-12px);
}

.flip-card:hover .flip-card-glow {
  opacity: 1;
  box-shadow: 0 25px 70px rgba(59, 130, 246, 0.3);
}

.flip-card-glow {
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  opacity: 0;
  transition: all 0.4s ease;
  pointer-events: none;
  z-index: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
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
  border-radius: 1.5rem;
  box-shadow: 0 20px 60px rgba(5, 32, 74, 0.25), 
              0 0 40px rgba(59, 130, 246, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.6);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.flip-card-front {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  z-index: 2;
}

.flip-card-front::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(5,32,74,0.08) 100%);
  pointer-events: none;
  z-index: 1;
}

.flip-card-back {
  background: linear-gradient(135deg, #05204a 0%, #0a3a7a 100%);
  color: #fff;
  transform: rotateY(180deg);
  z-index: 3;
}

.flip-card-back::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: drift 25s linear infinite;
}

@keyframes drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.flip-card-back .testimonial-text {
  position: relative;
  z-index: 2;
}

.position-badge {
  display: inline-block;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #05204a;
  font-weight: 700;
  padding: 0.6rem 1.2rem;
  border-radius: 0.875rem;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  box-shadow: 0 6px 20px rgba(251, 191, 36, 0.35),
              inset 0 1px 0 rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
}

.member-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.member-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.flip-card-front:hover .member-image {
  transform: scale(1.08);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, 
    rgba(0,0,0,0) 0%,
    rgba(0,0,0,0.2) 50%,
    rgba(5, 32, 74, 0.4) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.flip-card-front:hover .image-overlay {
  opacity: 1;
}

.member-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.member-name {
  font-size: 1rem;
  font-weight: 800;
  color: #05204a;
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.member-role {
  flex: 0 0 auto;
}

.cta-hint {
  font-size: 0.8rem;
  color: #6b7280;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.flip-card-front:hover .cta-hint {
  color: #2563eb;
  gap: 0.75rem;
}

.back-button:hover {
  transform: translateX(-2px);
}

.testimonial-quote-mark {
  color: #fbbf24;
  opacity: 0.7;
  transition: opacity 0.4s ease;
}

.flip-card-back:hover .testimonial-quote-mark {
  opacity: 1;
}
`;

const boardMembers = [
  {
    name: 'Rtr. Dulaangan Chandrasekaran',
    position: 'International Service Director',
    image: Dula26,
    testimonial: 'When I joined Rotaract, everyone was incredibly welcoming and kind. What began as simple curiosity grew into something much larger, a community filled with positive people, uplifting energy, and a purpose-driven spirit. Since then, I\'ve encouraged my two best friends to join because I truly believe in what we\'re building together. From impactful projects to memorable moments that bring warmth to life, Rotaract has become a place where passion meets action, and every effort, big or small, makes a difference. Now, as the Director of International Services, I\'m thrilled to extend that spirit beyond borders—to connect with clubs worldwide, celebrate diverse cultures, and remind ourselves that service is a universal language.'
  },
  {
    name: 'Rtr. Pragadeeshan Sathasivem Pillai',
    position: 'International Service Director',
    image: Pragadeeshan26,
    testimonial: 'When I joined Rotaract, everyone was incredibly welcoming and kind. What began as simple curiosity grew into something much larger, a community filled with positive people, uplifting energy, and a purpose-driven spirit. Since then, I\'ve encouraged my two best friends to join because I truly believe in what we\'re building together. From impactful projects to memorable moments that bring warmth to life, Rotaract has become a place where passion meets action, and every effort, big or small, makes a difference. Now, as the Director of International Services, I\'m thrilled to extend that spirit beyond borders—to connect with clubs worldwide, celebrate diverse cultures, and remind ourselves that service is a universal language.'
  },
  {
    name: 'Rtr. Kavin Ganeshamoorthy',
    position: 'Professional Development Director',
    image: Kavin26,
    testimonial: 'In 2024, I stepped into Rotaract with the simple hope of meeting new people and broadening my horizons. What I found was something far greater — a vibrant space where purpose meets passion, and friendships evolve into lifelong bonds. Being part of this movement has been a turning point. It\'s opened doors to experiences that have refined my character, challenged my limits, and fueled my drive to grow — not just for myself, but for those around me. I have come to appreciate the value of giving back and the strength of rising through collective effort. Now, as the Professional Development Director of the Rotaract Club of Wellawatte, I\'m committed to nurturing the potential in others. My goal is to create opportunities that help our members develop the skills, confidence, and mindset they need to thrive — in service, in leadership, and in life.'
  },
  {
    name: 'Rtr. Mathuvarththany Subramaniyam',
    position: 'Professional Development Director',
    image: Mathuvarthany26,
    testimonial: 'In 2024, I embarked on my journey with Rotaract Club of Wellawatte with the modest aspiration of expanding my social circle and gaining broader perspectives. However, what I encountered was far more profound — a dynamic platform where purpose is harmonized with passion, and acquaintances are transformed into enduring relationships. Becoming part of this distinguished movement has marked a significant turning point in my personal and professional development. It has granted me access to enriching experiences that have honed my character, tested my capabilities, and ignited a sincere commitment to continuous growth not solely for personal advancement, but in service to others. Through this journey, I have come to deeply appreciate the essence of service, and the formidable impact of collective action. As the Director of Professional Development at the Rotaract Club of Wellawatte, I am dedicated to fostering the growth and potential of our members. My primary objective is to design and implement initiatives that equip individuals with the skills, confidence, and mindset necessary to excel not only in leadership and service, but also in their personal and professional lives.'
  },
  {
    name: 'Rtr. Vasikaran Vinayagamoorthy',
    position: 'Community Service Director',
    image: Vasi26,
    testimonial: 'In 2023, I joined Rotaract with the intention of expanding my network and stepping out of my comfort zone. What I discovered was far more meaningful — a community that thrives on connection, purpose, and shared growth. Rotaract has become a space where I\'ve grown not only as an individual but also as a team player. It has shaped my perspective on service, leadership, and the impact we can create when we come together for something greater than ourselves. Now, as the Club Services Director of the Rotaract Club of Wellawatte, my focus is on building a strong sense of unity and engagement within our club. I believe that a connected club is a thriving club — and I\'m dedicated to creating moments, events, and memories that bring our members closer, strengthen our bond, and reflect the true spirit of Rotaract.'
  },
  {
    name: 'Rtr. Daniya Dinosha',
    position: 'Community Service Director',
    image: Dinosha26,
    testimonial: 'It all began in April 2024 — not with a grand plan, but with a curious heart and a quiet wish to do more. I walked into Rotaract looking for a place to give back… and instead found a place that gave me purpose. Rotaract became more than just a club — it became a canvas where I could blend service, creativity, and compassion. Every project, every outreach, every story from the community painted a deeper understanding of what it truly means to serve. I didn\'t just witness change — I became part of it. Now, as the Director of Community Service for the Rotaract Club of Wellawatte, I carry that same spark into everything I do. My mission? To create ripples of kindness, build bridges of trust, and craft initiatives that leave lasting footprints — not just on the ground, but in hearts. Because when passion meets purpose, communities don\'t just survive — they shine.'
  },
  {
    name: 'Rtr. PP. Kirubakaran Sajeevkanth',
    position: 'Clubs Service Director',
    image: Sajeev26,
    testimonial: 'I joined the Rotaract Club of Wellawatte in 2024, simply hoping to meet new people and explore new experiences. But what awaited me was something far more impactful — a space where purpose meets passion, and strangers turn into lifelong friends. My journey began with a beach cleanup project — a simple act of service that opened my eyes to the deeper meaning of community and responsibility. From there, I had the privilege of leading Inside Edge, a project that pushed me to step out of my comfort zone and step up as a leader. Being part of this movement has shaped me in ways I never expected. It has refined my character, challenged my limits, and sparked a drive to grow — not just for myself, but for those around me. Through service and shared experiences, I\'ve learned the true power of collective effort and the joy of giving back. Now, as the Club Service Director of the Rotaract Club of Wellawatte, I\'m dedicated to strengthening the spirit of camaraderie within our club. My focus is on creating meaningful connections, fostering unity, and building a vibrant club culture where every member feels valued and inspired to contribute. Through shared experiences, celebrations, and collaboration, I aim to make our club not just a space for service — but a second home for every Rotaractor.'
  },
  {
    name: 'Rtr. Jawagar Sundaraj',
    position: 'Clubs Service Director',
    image: Jawagar26,
    testimonial: 'In 2023, I joined Rotaract with the intention of expanding my network and stepping out of my comfort zone. What I discovered was far more meaningful — a community that thrives on connection, purpose, and shared growth. Rotaract has become a space where I\'ve grown not only as an individual but also as a team player. It has shaped my perspective on service, leadership, and the impact we can create when we come together for something greater than ourselves. Now, as the Club Services Director of the Rotaract Club of Wellawatte, my focus is on building a strong sense of unity and engagement within our club. I believe that a connected club is a thriving club — and I\'m dedicated to creating moments, events, and memories that bring our members closer, strengthen our bond, and reflect the true spirit of Rotaract.'
  },
  {
    name: 'Rtr. Mathusha Kannathasan',
    position: 'Assistant Treasurer',
    image: Mathusha26,
    testimonial: 'In 2023, I joined Rotaract with the intention of expanding my network and stepping out of my comfort zone. What I discovered was far more meaningful — a community that thrives on connection, purpose, and shared growth. Rotaract has become a space where I\'ve grown not only as an individual but also as a team player. It has shaped my perspective on service, leadership, and the impact we can create when we come together for something greater than ourselves. Now, as the Club Services Director of the Rotaract Club of Wellawatte, my focus is on building a strong sense of unity and engagement within our club. I believe that a connected club is a thriving club — and I\'m dedicated to creating moments, events, and memories that bring our members closer, strengthen our bond, and reflect the true spirit of Rotaract.'
  },
  {
    name: 'Rtr. Narmathan Tharmathasan',
    position: 'Membership Development Director',
    image: Narmathan26,
    testimonial: 'My Rotaract journey began in 2020 with the Rotaract Club of Matale — a decision that would soon become one of the most defining chapters of my life. After two years of learning and growing, I had the honor of joining the Board as the Director of Sports and Recreation, and also took on the role of Captain of the Rotaract Sri Lanka Hockey Team — blending my passion for teamwork, leadership, and sportsmanship. In 2024, I made a bold move and transferred to the Rotaract Club of Wellawatte, where I continued my journey by serving as the Public Relations Director — a role that allowed me to amplify voices, connect people, and showcase the spirit of our club. Now in 2025, I step into a new chapter as the Director of Membership Development. My mission is simple yet powerful — to build a strong and inclusive member base, where every individual feels valued, engaged, and empowered to contribute. I look forward to creating meaningful opportunities for growth and belonging, just as Rotaract has given me.'
  },
  {
    name: 'Rtr. Harivithushanan Sasendran',
    position: 'Public Relations Director',
    image: Hariv26,
    testimonial: 'My Rotaract journey began in 2020 with the Rotaract Club of Matale — a decision that would soon become one of the most defining chapters of my life. After two years of learning and growing, I had the honor of joining the Board as the Director of Sports and Recreation, and also took on the role of Captain of the Rotaract Sri Lanka Hockey Team — blending my passion for teamwork, leadership, and sportsmanship. In 2024, I made a bold move and transferred to the Rotaract Club of Wellawatte, where I continued my journey by serving as the Public Relations Director — a role that allowed me to amplify voices, connect people, and showcase the spirit of our club. Now in 2025, I step into a new chapter as the Director of Membership Development. My mission is simple yet powerful — to build a strong and inclusive member base, where every individual feels valued, engaged, and empowered to contribute. I look forward to creating meaningful opportunities for growth and belonging, just as Rotaract has given me.'
  },
  {
    name: 'Rtr. Akash Kumar',
    position: 'Sports & Recreation Director',
    image: Akash26,
    testimonial: 'My Rotaract journey began in 2020 with the Rotaract Club of Matale — a decision that would soon become one of the most defining chapters of my life. After two years of learning and growing, I had the honor of joining the Board as the Director of Sports and Recreation, and also took on the role of Captain of the Rotaract Sri Lanka Hockey Team — blending my passion for teamwork, leadership, and sportsmanship. In 2024, I made a bold move and transferred to the Rotaract Club of Wellawatte, where I continued my journey by serving as the Public Relations Director — a role that allowed me to amplify voices, connect people, and showcase the spirit of our club. Now in 2025, I step into a new chapter as the Director of Membership Development. My mission is simple yet powerful — to build a strong and inclusive member base, where every individual feels valued, engaged, and empowered to contribute. I look forward to creating meaningful opportunities for growth and belonging, just as Rotaract has given me.'
  },
];

const CommitteeBoard = () => {
  const [flipped, setFlipped] = useState(Array(boardMembers.length).fill(false));

  const handleFlip = (idx) => {
    setFlipped(prev => prev.map((f, i) => (i === idx ? !f : f)));
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFlip(idx);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <style>{flipCardStyle}</style>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300 to-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-300 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <div className="px-5 py-2.5 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200 backdrop-filter backdrop-blur-sm shadow-lg shadow-blue-100/50">
                <span className="text-blue-700 text-sm font-bold tracking-wide uppercase">Leadership Team 2025-26</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#05204a] via-blue-600 to-cyan-600 leading-tight">
              Board of <br /> Directors
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              Dedicated directors championing departmental excellence and organizational growth across all service dimensions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-white/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {boardMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: (idx % 3) * 0.15,
                  type: 'spring',
                  bounce: 0.3
                }}
                viewport={{ once: true, margin: '-50px' }}
                className="h-full"
              >
                <div
                  className={`flip-card h-full w-full${flipped[idx] ? ' flipped' : ''}`}
                  onClick={() => handleFlip(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={flipped[idx]}
                  aria-label={`${member.name}, ${member.position}. Press Space or Enter to see testimonial`}
                >
                  <div className="flip-card-glow"></div>
                  
                  <div className="flip-card-inner relative">
                    {/* Front Side */}
                    <div className="flip-card-front flex flex-col h-full p-0 relative group">
                      <div className="relative w-full h-3/5 overflow-hidden bg-gradient-to-b from-gray-200 to-gray-100">
                        <div className="member-image-wrapper h-full">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="member-image"
                            style={{
                              objectPosition: "center 20%"
                            }}
                          />
                          <div className="image-overlay"></div>
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col justify-between p-6 bg-gradient-to-b from-slate-50 to-white">
                        <div className="member-info">
                          <h3 className="member-name">{member.name}</h3>
                          <div className="member-role">
                            <span className="position-badge">{member.position}</span>
                          </div>
                        </div>

                        <div className="cta-hint">
                          <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7m0 0l-7 7m7-7H6" />
                          </svg>
                          <span>Tap to reveal story</span>
                        </div>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="flip-card-back flex flex-col h-full p-0 relative">
                      <div className="absolute inset-0 overflow-hidden">
                        <motion.div 
                          className="absolute top-0 right-0 w-48 h-48 bg-blue-400 rounded-full mix-blend-screen opacity-10 blur-3xl"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        />
                      </div>

                      <div className="flex-1 flex items-center justify-center px-7 py-8 overflow-y-auto relative z-10">
                        <blockquote className="testimonial-text text-white text-sm sm:text-base leading-relaxed font-light">
                          <svg className="testimonial-quote-mark w-8 h-8 mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.3-2-2.5s-4.25.5-5.5.5S.75 6.75.75 11c0 5 .25 8 7 8z"></path>
                          </svg>
                          {member.testimonial}
                        </blockquote>
                      </div>

                      <div className="px-6 py-5 border-t border-white/10 flex justify-center relative z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent">
                        <button 
                          className="back-button px-6 py-2.5 text-amber-300 hover:text-white transition-all duration-300 font-semibold text-sm flex items-center gap-2 group hover:bg-white/10 rounded-lg"
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            handleFlip(idx); 
                          }}
                          aria-label="Return to member details"
                        >
                          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                          Back
                        </button>
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
