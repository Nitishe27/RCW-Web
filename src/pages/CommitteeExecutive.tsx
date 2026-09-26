import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Rodney26 from '../Pictures/Rodney26.png';
import Nitishe26 from '../Pictures/Nitishe26.png';
import Harisuthan26 from '../Pictures/Harisuthan26.png';
import Dilash26 from '../Pictures/Dilash26.png';
import Umashini26 from '../Pictures/Umashini26.png';
import Niroshan26 from '../Pictures/Niroshan26.png';
import Maxalo26 from '../Pictures/Max26.png'
import Vinoth26 from '../Pictures/Vinoth26.png'
import Abishek26 from '../Pictures/Abishek26.png'

// Enhanced professional CSS for award-winning design
const flipCardStyle = `
.flip-card {
  height: 520px;
  min-height: 460px;
  width: 100%;
  perspective: 1200px;
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
  background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(5,32,74,0.08) 100%);
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
  align-items: center;
  text-align: center;
}

.member-name {
  font-size: 1.25rem;
  font-weight: 800;
  color: #05204a;
  letter-spacing: -0.02em;
}

.member-role {
  flex: 0 0 auto;
  text-align: center;
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

const executives = [
  {
    name: 'Rtr. Harisuthan Mohanadas',
    position: 'President',
    image: Harisuthan26,
    testimonial: 'In 2023, I joined the Rotaract Club of Wellawatte with a quiet hope — to find something more than just a club. What I found was life-changing. I met some of the most inspiring, driven, and kind-hearted people — individuals who challenged me, uplifted me, and reminded me that growth happens best when you’re surrounded by the right energy. Together, we laughed, we learned, and we built something bigger than ourselves. Serving as Treasurer in 2024–25 was not just a title — it was a transformation. From sleepless nights managing budgets to celebrating the success of projects we poured our hearts into, I learned what it means to lead with purpose. I learned to speak up, to listen deeper, and to step forward even when things felt uncertain. Each project taught me more than numbers ever could — about trust, about teamwork, about the magic of shared vision. And somewhere in the middle of those busy days and late-night calls, I found my voice — and the confidence to use it. Now, stepping into the role of Secretary for 2025–26, I carry not just experience, but a deep responsibility. To serve with intention. To communicate with clarity. To support, uplift, and help this beautiful community grow stronger together. Because Rotaract isn’t just a club I joined. It’s the home where I discovered who I’m meant to become.'
  },
  {
    name: 'Rtr. Dilash Sivakumaran',
    position: 'Immediate Past President',
    image: Dilash26,
    testimonial: 'I joined the Rotaract movement in 2022, hoping to expand my network and build genuine friendships. What began as a simple intention turned into one of the most meaningful chapters of my life. Rotaract has given me more than just connections, it has given me a purpose, a family, and countless opportunities to grow both personally and professionally. The experiences, the people, and the impact we create together have shaped me in ways I never imagined. From learning the value of true leadership to understanding the power of service, Rotaract has been a journey of rising not just as an individual, but as part of a united force for good. Today, I carry forward this spirit with pride, as the President of a club that continues to inspire, empower, and uplift — because together, we rise'
  },
  {
    name: 'Rtr. Rodney Rajaratnam',
    position: 'Vice President',
    image: Rodney26,
    testimonial: 'I joined the Rotaract Club of Wellawatte in 2023, hoping to connect with like-minded individuals and contribute in whatever way I could. What began as a step toward community involvement soon blossomed into a journey of friendship, growth, and self-discovery.Throughout the year, I actively participated in various projects that not only allowed me to build meaningful relationships but also helped me develop a deeper understanding of leadership and teamwork. One of the most defining moments was leading a project an experience that boosted my confidence and sharpened my ability to lead with purpose and empathy. In 2024, I was honored to be appointed as the *Professional Development Director* of the club. In this role, I focused on creating impactful opportunities that empowered our members to grow professionally. From workshops to mentorship initiatives, my goal was to help our members cultivate the skills and mindset they need to thrive in both their personal and professional lives. Now, in 2025, I proudly serve as the *Sergeant-at-Arms* of the club. In this role, I’m committed to upholding the values, dignity, and traditions of the Rotary movement. I look forward to guiding our members, supporting the President and Board of Directors, and helping ensure that our club continues to be a space of respect, growth, and service.'
  },

    {
    name: 'Rtr. Nitishe Premnath',
    position: 'Vice President',
    image: Nitishe26,
    testimonial: 'In 2024, I stepped into Rotaract with the simple hope of meeting new people and broadening my horizons. What I found was something far greater — a vibrant space where purpose meets passion, and friendships evolve into lifelong bonds. Being part of this movement has been a turning point. It’s opened doors to experiences that have refined my character, challenged my limits, and fueled my drive to grow — not just for myself, but for those around me. I have come to appreciate the value of giving back and the strength of rising through collective effort. Now, as the Professional Development Director of the Rotaract Club of Wellawatte, I’m committed to nurturing the potential in others. My goal is to create opportunities that help our members develop the skills, confidence, and mindset they need to thrive — in service, in leadership, and in life.'
  },

  {
    name: 'Rtr. Niroshan Murugendran',
    position: 'Joint Secretary',
    image: Niroshan26,
    testimonial: 'In 2023, I joined the Rotaract Club of Wellawatte with a quiet hope — to find something more than just a club. What I found was life-changing. I met some of the most inspiring, driven, and kind-hearted people — individuals who challenged me, uplifted me, and reminded me that growth happens best when you’re surrounded by the right energy. Together, we laughed, we learned, and we built something bigger than ourselves. Serving as Treasurer in 2024–25 was not just a title — it was a transformation. From sleepless nights managing budgets to celebrating the success of projects we poured our hearts into, I learned what it means to lead with purpose. I learned to speak up, to listen deeper, and to step forward even when things felt uncertain. Each project taught me more than numbers ever could — about trust, about teamwork, about the magic of shared vision. And somewhere in the middle of those busy days and late-night calls, I found my voice — and the confidence to use it. Now, stepping into the role of Secretary for 2025–26, I carry not just experience, but a deep responsibility. To serve with intention. To communicate with clarity. To support, uplift, and help this beautiful community grow stronger together. Because Rotaract isn’t just a club I joined. It’s the home where I discovered who I’m meant to become.'
  },
  {
    name: 'Rtr. Umashini Krishananthan',
    position: 'Joint Secretary',
    image: Umashini26,
    testimonial: 'I joined the Rotaract Club of Wellawatte at the end of 2024 with a simple motive — to meet new people, gain knowledge, and be of service to the community. What started as a search for connection and purpose quickly became a journey of personal growth and self-discovery. Through each experience, I’ve been able to develop new skills, build my confidence, and most importantly, recognize my own worth. Rotaract has given me a platform not just to serve, but to evolve — both as a team player and as a leader in the making. Now, stepping into the role of Assistant Secretary for the year 2025–26, I’m filled with excitement and commitment. I’m ready to contribute, support, and help steer our club forward with energy and purpose. Here’s to a year of meaningful impact and continuous growth.'
  },
  {
    name: 'Rtr. Vinoth Chandramohan',
    position: 'Treasurer',
    image: Vinoth26,
    testimonial: 'In 2024 when I first joined the Rotaract Club of Wellawatte as a general member, my intention was simple: to contribute meaningfully whenever my busy schedule allowed. What I found was a community that inspired me to do more, give more, and grow alongside passionate individuals striving for a greater purpose. My journey with Rotaract has been both unexpected and rewarding. I still remember my very first installation, where I was given the honour of compering the Rotaract Club of Wellawatte Installation Ceremony. It was a defining moment that made me realise I was part of something truly special. Since then, I have sought to contribute in ways that create real impact, such as serving as the Chairperson for the Safe Spaces project, raising awareness and support for women in need. Now, as the Treasurer of the Rotaract Club of Wellawatte for 2025–26, I am committed to ensuring transparency and sustainability in our initiatives. My goal is to manage our resources effectively so we can continue to serve our community, empower our members, and uphold the values that make Rotaract a space for growth, connection, and meaningful change.'
  },
  {
    name: 'Rtr. Abishek Sabren',
    position: 'Sergeant at Arms',
    image: Abishek26,
    testimonial: 'I joined the Rotaract Club of Wellawatte in 2024, simply hoping to meet new people and explore new experiences. But what awaited me was something far more impactful — a space where purpose meets passion, and strangers turn into lifelong friends. My journey began with a beach cleanup project — a simple act of service that opened my eyes to the deeper meaning of community and responsibility. From there, I had the privilege of leading Inside Edge, a project that pushed me to step out of my comfort zone and step up as a leader. Being part of this movement has shaped me in ways I never expected. It has refined my character, challenged my limits, and sparked a drive to grow — not just for myself, but for those around me. Through service and shared experiences, I’ve learned the true power of collective effort and the joy of giving back. Now, as the Club Service Director of the Rotaract Club of Wellawatte, I’m dedicated to strengthening the spirit of camaraderie within our club. My focus is on creating meaningful connections, fostering unity, and building a vibrant club culture where every member feels valued and inspired to contribute. Through shared experiences, celebrations, and collaboration, I aim to make our club not just a space for service — but a second home for every Rotaractor.'
  },
  {
    name: 'Rtr. Maxalo Thangarajah',
    position: 'Editor',
    image: Maxalo26,
    testimonial: 'In 2025, I joined the Rotaract Club of Wellawatte with a simple desire to connect, learn, and contribute—and I quickly discovered a community where creativity and purpose flourish together. As the newly appointed Director – Editor for 2025–26, I’m thrilled to help shape our club’s story. In this role, I’ll be curating and crafting the narratives that showcase our projects, celebrate our members, and broadcast the impact we make—both locally and beyond. Through newsletters, social media, and feature articles, I aim to highlight the dedication and passion that drive every Rotaractor. Being part of this vibrant movement has already broadened my perspective, challenged me to think more critically, and inspired me to use my skills in service of something greater. I’m committed to ensuring that every member’s voice is heard and every success is shared, because when we tell our collective story well, we strengthen our bonds and amplify our impact. I look forward to working with fellow Rotaractors to capture the moments that define us, celebrate the milestones we achieve, and inspire others to join us on this journey of growth and service.'
  },
];

const CommitteeExecutive = ({ embedded = false }: { embedded?: boolean }) => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <style>{flipCardStyle}</style>
      {!embedded && <Navbar />}
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden px-4">
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
              Executive <br /> Committee
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              Visionary leaders guiding our club with unwavering commitment to service, growth, and community impact
            </motion.p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-white/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {executives.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: (idx % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true, margin: '-80px' }}
                className="h-full"
              >
                <div
                  className="flip-card h-full w-full"
                  aria-label={`${member.name}, ${member.position}`}
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
                              objectPosition:
                                member.name === "Rtr. Maxalo Thangarajah" ||
                                member.name === "Rtr. Umashini Krishananthan"
                                  ? "center 10%"
                                : member.name === "Rtr. Rodney Rajaratnam"
                                  ? "center 25%"
                                  : "center 20%"
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
      {!embedded && <Footer />}
    </div>
  );
};

export default CommitteeExecutive; 