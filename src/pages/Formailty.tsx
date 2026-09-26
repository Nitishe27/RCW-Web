import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LegacyFormality = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-24 pb-16"
        style={{
          background: 'linear-gradient(135deg, #0b3d91, #1e3a8a, #12305d, #0b3d91)',
          backgroundSize: '400% 400%',
          animation: 'navyGradient 8s ease-in-out infinite',
        }}
      >
        <style>{`@keyframes navyGradient { 0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%} }`}</style>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Rotaract Legacy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-sky-100 max-w-3xl mx-auto"
          >
            The timeless traditions, principles, and ceremonies that define the Rotaract movement.
          </motion.p>
        </div>
      </section>

      {/* Rotaract Song Section */}
      <section className="py-16 bg-gradient-to-br from-[#05204a] to-[#0b3d91]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Rotaract Song</h2>
            </div>

            <div className="bg-[#0b3d91]/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <p className="text-lg sm:text-xl text-sky-100 leading-relaxed mb-6">
                "Always, we shine where it matters,<br />
                To serving our fellow men, like no other<br />
                No matter, the creed or culture,<br />
                We pull together, to care for others,"
              </p>

              <p className="text-lg sm:text-xl text-sky-100 leading-relaxed mb-6">
                <strong>Bridge</strong><br />
                "It's our friendship that makes us thrive,<br />
                True sense of fellowship that makes us shine<br />
                As Rotaractors we always try,<br />
                To reach out and make things bright,"
              </p>

              <div className="mt-8 pt-6 border-t border-[#6b86d6]/40">
                <h3 className="text-xl font-semibold text-sky-100 text-center mb-6">Listen to the Rotaract Song</h3>
                <div className="relative w-full max-w-2xl mx-auto">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                    <iframe
                      src="https://www.youtube.com/embed/Ft3AQeWorb8"
                      title="Rotaract Song"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Invocation & Flag Sections */}
      <section className="py-16 bg-[#eaf4ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#05204a]">Rotaract Invocation</h2>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-[#dbeeff]">
              <p className="text-lg sm:text-xl text-[#05204a] leading-relaxed mb-6">
                "Remember us always as thy children<br />
                oh lord, instill in us the true meaning of friendship.<br />
                That the difference of cultures and creeds should not matter<br />
                at all times endow with us the desire to serve."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#cfe0ff] to-[#bcd7ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#05204a]">THE FOUR-WAY TEST OF THE THINGS WE THINK, SAY, OR DO</h2>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-[#cfe0ff] text-left">
              <div className="space-y-6">
                {[
                  "Is it the TRUTH?",
                  "Is it FAIR to all concerned?",
                  "Will it build GOODWILL and BETTER FRIENDSHIPS?",
                  "Will it be BENEFICIAL to all concerned?",
                ].map((line, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-xl font-bold text-[#0b3d91] w-6 min-w-[1.5rem] mr-3">{i + 1}.</span>
                    <p className="text-lg sm:text-xl text-[#05204a] leading-relaxed"><strong>{line}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 bg-gradient-to-br from-[#05204a] to-[#0b3d91]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Living Our Values</h3>
            <p className="text-lg sm:text-xl text-sky-100 leading-relaxed max-w-3xl mx-auto">
              These formalities guide our every action as Rotaractors. Through song, prayer, patriotism, and ethical principles, we build a foundation of service, leadership, and fellowship that transforms our communities and ourselves.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Formality = () => {
  const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
  const test = ['Is it the TRUTH?', 'Is it FAIR to all concerned?', 'Will it build GOODWILL and BETTER FRIENDSHIPS?', 'Will it be BENEFICIAL to all concerned?'];
  return <div className="min-h-screen bg-[#f5f7fa] text-slate-900"><Navbar /><main><section className="bg-[#082b66] pb-20 pt-36 text-white sm:pb-28"><div className="mx-auto max-w-7xl px-5 sm:px-8"><motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: .7 }}><h1 className="max-w-3xl text-5xl font-semibold tracking-[-.04em] sm:text-7xl">Rotaract Legacy</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-sky-100 sm:text-xl">The timeless traditions, principles, and ceremonies that define the Rotaract movement.</p></motion.div></div></section><section className="bg-[#061f4d] py-20 text-white sm:py-28"><div className="mx-auto max-w-4xl px-5 sm:px-8"><motion.div initial="hidden" whileInView="visible" variants={reveal} transition={{ duration: .7 }} viewport={{ once: true }}><h2 className="text-4xl font-semibold tracking-[-.035em] sm:text-5xl">Rotaract Song</h2><div className="mt-10 border border-white/15 bg-white/[.06] p-7 sm:p-12"><p className="text-lg leading-8 text-sky-100 sm:text-xl">"Always, we shine where it matters,<br />To serving our fellow men, like no other<br />No matter, the creed or culture,<br />We pull together, to care for others,"</p><p className="mt-8 border-t border-white/15 pt-8 text-lg leading-8 text-sky-100 sm:text-xl"><strong>Bridge</strong><br />"It's our friendship that makes us thrive,<br />True sense of fellowship that makes us shine<br />As Rotaractors we always try,<br />To reach out and make things bright,"</p><div className="mt-10 border-t border-white/15 pt-8"><h3 className="mb-6 text-xl font-semibold text-sky-100">Listen to the Rotaract Song</h3><div className="aspect-video overflow-hidden shadow-2xl"><iframe src="https://www.youtube.com/embed/Ft3AQeWorb8" title="Rotaract Song" className="h-full w-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div></div></div></motion.div></div></section><section className="py-20 sm:py-28"><div className="mx-auto max-w-4xl px-5 sm:px-8"><motion.div initial="hidden" whileInView="visible" variants={reveal} transition={{ duration: .7 }} viewport={{ once: true }}><h2 className="text-4xl font-semibold tracking-[-.035em] text-[#05204a] sm:text-5xl">Rotaract Invocation</h2><div className="mt-10 border-l-4 border-blue-700 bg-white p-7 shadow-[0_15px_40px_rgba(15,35,70,.08)] sm:p-12"><p className="text-lg leading-8 text-[#05204a] sm:text-xl">"Remember us always as thy children<br />oh lord, instill in us the true meaning of friendship.<br />That the difference of cultures and creeds should not matter<br />at all times endow with us the desire to serve."</p></div></motion.div></div></section><section className="bg-[#dceaff] py-20 sm:py-28"><div className="mx-auto max-w-4xl px-5 sm:px-8"><motion.div initial="hidden" whileInView="visible" variants={reveal} transition={{ duration: .7 }} viewport={{ once: true }}><h2 className="text-3xl font-semibold tracking-[-.03em] text-[#05204a] sm:text-5xl">THE FOUR-WAY TEST OF THE THINGS WE THINK, SAY, OR DO</h2><div className="mt-10 bg-white p-7 shadow-[0_15px_40px_rgba(15,35,70,.1)] sm:p-12"><div className="space-y-6">{test.map((line, index) => <div key={line} className="flex gap-4"><span className="text-xl font-bold text-[#0b3d91]">{index + 1}.</span><p className="text-lg leading-7 text-[#05204a] sm:text-xl"><strong>{line}</strong></p></div>)}</div></div></motion.div></div></section><section className="bg-[#082b66] py-20 text-center text-white sm:py-24"><motion.div initial="hidden" whileInView="visible" variants={reveal} transition={{ duration: .7 }} viewport={{ once: true }} className="mx-auto max-w-3xl px-5 sm:px-8"><h3 className="text-3xl font-semibold">Living Our Values</h3><p className="mt-6 text-lg leading-8 text-sky-100">These formalities guide our every action as Rotaractors. Through song, prayer, patriotism, and ethical principles, we build a foundation of service, leadership, and fellowship that transforms our communities and ourselves.</p></motion.div></section></main><Footer /></div>;
};

export default Formality;
