import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Share2, Camera, PenTool, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Narmathan from '../Pictures/Narmathan26.png';
import Hariv from '../Pictures/Hariv26.png'
import CharterDay from '../Pictures/CharterDay26-1.jpeg';
import ClubLogo from '../Pictures/Club - Black.png'
import socialmedia from '../Pictures/SocialMedia.png'
import socialmedia2 from '../Pictures/SocialMedia2.png'

const focusAreas = [
  { icon: Megaphone, title: 'Media Relations', description: 'Building strong relationships with media partners and sharing the club\'s service impact with a wider audience.' },
  { icon: Share2, title: 'Social Media Communication', description: 'Creating engaging digital content that keeps members, partners, and the community connected with our work.' },
  { icon: Camera, title: 'Event Coverage', description: 'Capturing and documenting the people, moments, and stories behind every club initiative.' },
  { icon: PenTool, title: 'Brand Management', description: 'Maintaining a clear and consistent Rotaract identity across campaigns, events, and communication channels.' },
  { icon: Users, title: 'Community Outreach', description: 'Strengthening public engagement through meaningful communication and collaboration with community partners.' },
];

const PublicRelation = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <section className="pt-24 pb-16 relative" style={{ backgroundImage: `url(${socialmedia})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl sm:text-5xl font-bold text-white mb-6">Public Relations</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl text-sky-100 max-w-2xl mx-auto">Sharing our stories, strengthening our identity, and connecting Rotaract with the community.</motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">What is Public Relations?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">Public Relations gives our club a voice. It connects our members, partners, and community through clear communication, thoughtful storytelling, and a consistent visual identity.</p>
              <p className="text-lg text-gray-700 leading-relaxed">Through media coverage, digital campaigns, event documentation, and community outreach, we make the impact of Rotaract visible and invite more people to be part of the journey.</p>
              <div className="mt-8 mb-4 flex items-center gap-4 bg-gray-100 rounded-xl shadow p-4 w-fit">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img src={Narmathan} alt="Rtr. Narmathan" className="w-full h-full object-cover object-top origin-top -translate-y-2 scale-[2.2]" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-800">Rtr. Narmathan Tharmathasan</div>
                  <div className="text-sm text-gray-600">Director of Public Relations</div>
                </div>
              </div>
              <div className="mt-8 mb-4 flex items-center gap-4 bg-gray-100 rounded-xl shadow p-4 w-fit">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img src={Hariv} alt="Rtr. Harivithushanan" className="w-full h-full object-cover object-top origin-top -translate-y-2 scale-[2.2]" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-800">Rtr. Harivithushanan Sasendran</div>
                  <div className="text-sm text-gray-600">Director of Public Relations</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="flex justify-center lg:justify-end">
              <img src={socialmedia2} alt="Rotaract members and community" className="w-full max-w-[600px] rounded-2xl shadow-2xl h-auto" style={{ maxHeight: '600px', objectFit: 'cover' }} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Our Focus Areas</h2><p className="text-lg text-gray-600">Connecting people to the work and purpose of our club</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {focusAreas.map((area, index) => { const Icon = area.icon; return <motion.div key={area.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: index * 0.08 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center h-full"><span className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#0b3d91] to-[#1e3a8a] text-white"><Icon size={32} /></span><h3 className="text-xl font-bold text-[#05204a] mb-2">{area.title}</h3><p className="text-gray-700 text-base">{area.description}</p></motion.div>; })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0b3d91] to-[#1e3a8a]"><div className="max-w-3xl mx-auto px-4 text-center"><h3 className="text-3xl font-bold text-white mb-6">Have a Story to Share?</h3><p className="text-xl text-sky-100 mb-8">Join us in telling the story of service, fellowship, and impact.</p><button onClick={() => window.location.href = '/contact'} className="bg-white text-[#0b3d91] px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-50 transition-colors">Get Involved</button></div></section>
      <Footer />
    </div>
  );
};

export default PublicRelation;
