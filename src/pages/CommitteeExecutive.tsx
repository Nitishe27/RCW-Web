import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import PresidentImg from '../Pictures/Gautham.jpg';
import IPPImg from '../Pictures/installation 2023.jpg';
import VPImg from '../Pictures/TransitionMeeting.jpeg';
import SecImg from '../Pictures/Didu.jpeg';
import AsstSecImg from '../Pictures/BreakAwaybg.jpg';
import TreasurerImg from '../Pictures/Wella Pongal 2025.jpg';
import SAAImg from '../Pictures/Club Trip 24.jpg';
import EditorImg from '../Pictures/Rotaract Main Pic.jpg';
import Dilash from '../Pictures/Dilash.jpg';
import Kugal from '../Pictures/Kugal.jpg';
import Dulan from '../Pictures/Dulangan - Copy.jpg'
import Hari from '../Pictures/Harisuthan - Copy.jpg'
import Umashini from '../Pictures/Umashini.jpg';
import Akshay from '../Pictures/Akshay.jpg'
import Max from '../Pictures/Maxalo.jpg';
import Rodney from '../Pictures/Rodney.jpeg';

// Add custom CSS for flip effect
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

const executives = [
  {
    name: 'Rtr. Dilash Sivakumaran',
    position: 'President',
    image: Dilash,
    testimonial: 'I joined the Rotaract movement in 2022, hoping to expand my network and build genuine friendships. What began as a simple intention turned into one of the most meaningful chapters of my life. Rotaract has given me more than just connections, it has given me a purpose, a family, and countless opportunities to grow both personally and professionally. The experiences, the people, and the impact we create together have shaped me in ways I never imagined. From learning the value of true leadership to understanding the power of service, Rotaract has been a journey of rising not just as an individual, but as part of a united force for good. Today, I carry forward this spirit with pride, as the President of a club that continues to inspire, empower, and uplift — because together, we rise'
  },
  {
    name: 'Rtr. Kugaleshani Ravirajah',
    position: 'Immediate Past President',
    image: Kugal,
    testimonial: 'I stepped into Rotaract in 2021, not knowing that it would become one of the most defining parts of my life. From starting off as Assistant Treasurer, then taking up the role of Secretary, and later leading as President. Each year shaped me in ways I never expected. It didn’t just build me as a leader; it shaped me as a person. Rotaract taught me to speak up when it felt easier to stay silent, to lead even when I had doubts, and to truly listen when it mattered the most. It gave me the space to grow, make mistakes, learn, and keep moving forward with purpose. Now, as the Immediate Past President, I carry a quiet sense of pride not just for what we’ve accomplished, but for how much I’ve grown through it all. I’m genuinely grateful for everything this journey has brought into my life. Rotaract gave me purpose, friendships that feel like family, and a place I’ll always be proud to call home.'
  },
  {
    name: 'Rtr. Dulaangan Chandrasekaran',
    position: 'Vice President',
    image: Dulan,
    testimonial: 'In 2021, I began my Rotaract journey with a simple desire to be part of something meaningful. Over the years, that decision has grown into one of the most rewarding chapters of my life — one filled with purpose, growth, and unforgettable connections. Being part of the Rotaract Club of Wellawatte has given me a front-row seat to the power of service, the joy of teamwork, and the impact of leadership grounded in empathy and action. Every role I’ve taken on, every project I’ve contributed to, has shaped me into a more confident, compassionate, and driven individual. Now, as I embrace the role of Vice President, I do so with deep gratitude and greater responsibility. I’m committed to standing beside our team, supporting our vision, and helping lead with intention — ensuring we continue to grow together, uplift others, and make every moment count.'
  },
  {
    name: 'Rtr. Harisuthan Mohanadas',
    position: 'Secretary',
    image: Hari,
    testimonial: 'In 2023, I joined the Rotaract Club of Wellawatte with a quiet hope — to find something more than just a club. What I found was life-changing. I met some of the most inspiring, driven, and kind-hearted people — individuals who challenged me, uplifted me, and reminded me that growth happens best when you’re surrounded by the right energy. Together, we laughed, we learned, and we built something bigger than ourselves. Serving as Treasurer in 2024–25 was not just a title — it was a transformation. From sleepless nights managing budgets to celebrating the success of projects we poured our hearts into, I learned what it means to lead with purpose. I learned to speak up, to listen deeper, and to step forward even when things felt uncertain. Each project taught me more than numbers ever could — about trust, about teamwork, about the magic of shared vision. And somewhere in the middle of those busy days and late-night calls, I found my voice — and the confidence to use it. Now, stepping into the role of Secretary for 2025–26, I carry not just experience, but a deep responsibility. To serve with intention. To communicate with clarity. To support, uplift, and help this beautiful community grow stronger together. Because Rotaract isn’t just a club I joined. It’s the home where I discovered who I’m meant to become.'
  },
  {
    name: 'Rtr. Umashini Krishananthan',
    position: 'Assistant Secretary',
    image: Umashini,
    testimonial: 'I joined the Rotaract Club of Wellawatte at the end of 2024 with a simple motive — to meet new people, gain knowledge, and be of service to the community. What started as a search for connection and purpose quickly became a journey of personal growth and self-discovery. Through each experience, I’ve been able to develop new skills, build my confidence, and most importantly, recognize my own worth. Rotaract has given me a platform not just to serve, but to evolve — both as a team player and as a leader in the making. Now, stepping into the role of Assistant Secretary for the year 2025–26, I’m filled with excitement and commitment. I’m ready to contribute, support, and help steer our club forward with energy and purpose. Here’s to a year of meaningful impact and continuous growth.'
  },
  {
    name: 'Rtr. Akshayvisnu Ramanathan',
    position: 'Treasurer',
    image: Akshay,
    testimonial: 'In 2024 when I first joined the Rotaract Club of Wellawatte as a general member, my intention was simple: to contribute meaningfully whenever my busy schedule allowed. What I found was a community that inspired me to do more, give more, and grow alongside passionate individuals striving for a greater purpose. My journey with Rotaract has been both unexpected and rewarding. I still remember my very first installation, where I was given the honour of compering the Rotaract Club of Wellawatte Installation Ceremony. It was a defining moment that made me realise I was part of something truly special. Since then, I have sought to contribute in ways that create real impact, such as serving as the Chairperson for the Safe Spaces project, raising awareness and support for women in need. Now, as the Treasurer of the Rotaract Club of Wellawatte for 2025–26, I am committed to ensuring transparency and sustainability in our initiatives. My goal is to manage our resources effectively so we can continue to serve our community, empower our members, and uphold the values that make Rotaract a space for growth, connection, and meaningful change.'
  },
  {
    name: 'Rtr. Rodney Rajaratnam',
    position: 'Sergeant at Arms',
    image: Rodney,
    testimonial: 'I joined the Rotaract Club of Wellawatte in 2023, hoping to connect with like-minded individuals and contribute in whatever way I could. What began as a step toward community involvement soon blossomed into a journey of friendship, growth, and self-discovery.Throughout the year, I actively participated in various projects that not only allowed me to build meaningful relationships but also helped me develop a deeper understanding of leadership and teamwork. One of the most defining moments was leading a project an experience that boosted my confidence and sharpened my ability to lead with purpose and empathy. In 2024, I was honored to be appointed as the *Professional Development Director* of the club. In this role, I focused on creating impactful opportunities that empowered our members to grow professionally. From workshops to mentorship initiatives, my goal was to help our members cultivate the skills and mindset they need to thrive in both their personal and professional lives. Now, in 2025, I proudly serve as the *Sergeant-at-Arms* of the club. In this role, I’m committed to upholding the values, dignity, and traditions of the Rotary movement. I look forward to guiding our members, supporting the President and Board of Directors, and helping ensure that our club continues to be a space of respect, growth, and service.'
  },
  {
    name: 'Rtr. Maxalo Thangarajah',
    position: 'Editor',
    image: Max,
    testimonial: 'In 2025, I joined the Rotaract Club of Wellawatte with a simple desire to connect, learn, and contribute—and I quickly discovered a community where creativity and purpose flourish together. As the newly appointed Director – Editor for 2025–26, I’m thrilled to help shape our club’s story. In this role, I’ll be curating and crafting the narratives that showcase our projects, celebrate our members, and broadcast the impact we make—both locally and beyond. Through newsletters, social media, and feature articles, I aim to highlight the dedication and passion that drive every Rotaractor. Being part of this vibrant movement has already broadened my perspective, challenged me to think more critically, and inspired me to use my skills in service of something greater. I’m committed to ensuring that every member’s voice is heard and every success is shared, because when we tell our collective story well, we strengthen our bonds and amplify our impact. I look forward to working with fellow Rotaractors to capture the moments that define us, celebrate the milestones we achieve, and inspire others to join us on this journey of growth and service.'
  },
];

const CommitteeExecutive = () => {
  const [flipped, setFlipped] = useState(Array(executives.length).fill(false));

  const handleFlip = idx => {
    setFlipped(prev => prev.map((f, i) => (i === idx ? !f : f)));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{flipCardStyle}</style>
      <Navbar />
      <section className="pt-24 pb-12 bg-gradient-to-br from-green-700 to-green-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Executive Committee</h1>
          <p className="text-xl text-yellow-100 mb-8">Meet our Executive Committee members.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {executives.map((member, idx) => (
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
                        className="w-full h-3/4 object-cover object-top rounded-t-2xl"
                        style={{
                          minHeight: '65%',
                          maxHeight: '75%',
                          objectPosition:
                            member.name === "Rtr. Maxalo Thangarajah" ||
                            member.name === "Rtr. Akshayvisnu Ramanathan" ||
                            member.name === "Rtr. Umashini Krishananthan"
                              ? "center 15%"
                            : member.name === "Rtr. Rodney Rajaratnam"
                              ? "center 30%"
                              : "center 20%"
                        }}
                        title="Click to see testimonial"
                      />
                      <div className="flex-1 flex flex-col justify-end items-center px-6 py-4">
                        <h3 className="text-2xl font-bold text-red-800 mb-1">{member.name}</h3>
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

export default CommitteeExecutive; 