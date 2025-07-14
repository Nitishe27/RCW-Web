import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Formality = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section
        className="pt-24 pb-16"
        style={{
          background: 'linear-gradient(135deg, #800000, #b03060, #a52a2a, #800000)',
          backgroundSize: '400% 400%',
          animation: 'maroonGradient 10s ease-in-out infinite',
        }}
      >
        <style>{`
          @keyframes maroonGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
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
            className="text-xl text-red-100 max-w-3xl mx-auto"
          >
            The timeless traditions, principles, and ceremonies that define the Rotaract movement.
          </motion.p>
        </div>
      </section>

      {/* Rotaract Song Section */}
      <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
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
            <div className="bg-red-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <p className="text-lg sm:text-xl text-red-100 leading-relaxed mb-6">
                "Always, we shine where it matters,<br />
                To serving our fellow men, like no other<br />
                No matter, the creed or culture,<br />
                We pull together, to care for others,"
              </p>
              <p className="text-lg sm:text-xl text-red-100 leading-relaxed mb-6">
                <strong>Bridge</strong><br />
                "It's our friendship that makes us thrive,<br />
                True sense of fellowship that makes us shine<br />
                As Rotaractors we always try,<br />
                To reach out and make things bright,"
              </p>
              <p className="text-lg sm:text-xl text-red-100 leading-relaxed mb-6">
                <strong>Chorus</strong><br />
                "Together we can make it happen,<br />
                For our fellow men, like no other,<br />
                No matter the creed or culture,<br />
                And we are proud to Rotaractors"
              </p>
              <p className="text-lg sm:text-xl text-red-100 leading-relaxed mb-6">
                <strong>Bridge</strong><br />
                "It's our friendship that makes us thrive,<br />
                True sense of fellowship that makes us shine,<br />
                As Rotaractors we always try,<br />
                To reach out and make things bright,"
              </p>
              <p className="text-lg sm:text-xl text-red-100 leading-relaxed mb-8">
                <strong>Chorus</strong><br />
                "Together we can make it happen,<br />
                For our fellow men, like no other,<br />
                No matter the creed or culture,<br />
                And we are proud to Rotaractors"
              </p>
              
              {/* Video Section */}
              <div className="mt-8 pt-6 border-t border-red-300">
                <h3 className="text-xl font-semibold text-red-100 text-center mb-6">
                  Listen to the Rotaract Song
                </h3>
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

      {/* Rotaract Invocation Section */}
      <section className="py-16 bg-gradient-to-br from-red-100 to-red-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-red-900">Rotaract Invocation</h2>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-red-200">
              <p className="text-lg sm:text-xl text-red-800 leading-relaxed mb-6">
                "Remember us always as thy children<br />
                oh lord, instill in us the true meaning of friendship.<br />
                That the difference of cultures and creeds should not matter<br />
                at all times endow with us the desire to serve."
              </p>
              <p className="text-lg sm:text-xl text-red-800 leading-relaxed mb-6">
                "Remembering that we too often need help<br />
                as and when the need for service arises<br />
                caring to make our badge of Rotaract worthwhile.<br />
                Tell us that we have not lived in vain"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flag Salutation Section */}
      <section className="py-16 bg-gradient-to-br from-red-800 to-red-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Flag Salutation</h2>
            </div>
            <div className="bg-red-700/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <p className="text-lg sm:text-xl text-red-100 leading-relaxed mb-6">
                "I, Salute the National Flag of Sri Lanka Which signifies the Independence of my Country and stands for all its People united as one Nation. I pledge all allegiance to Sri Lanka and undertake to work towards its, Peace and Prosperity In a spirit of Tolerance and Love."
              </p>
              <p className="text-lg sm:text-xl text-red-100 leading-relaxed mb-6">
                "මාගේ දේශයේ නිදහස පිලිබිඹු කරන ශ්‍රී ලාංකීය ධජයට මම ආචාර කරමි. එසේම ඒ සෙවෙනෙහි එක් ජාතියක් ලෙස එක් රොක් වී සිටින සැමදෙනා වෙනුවෙන් නැගී සිටින අතරම, තවද මෙරටෙහි නිදහස හා සෞභාග්‍යය වෙනුවෙන් සිදුකල හැකි ක්‍රියාවන්ට ලැදි භාවයකින් යුතුව කැප වෙන බවට ප්‍රතිඥා දෙමි."
              </p>
              <p className="text-lg sm:text-xl text-red-100 leading-relaxed mb-6">
                "எனது நாட்டின் சுதந்திரத்தையும் அனைத்து மக்களும் ஒன்றாக ஒரு தேசமாக நிற்பதனேயும் அடையாள படுத்தும் எமது தேசிய கோடிக்கு தலை வணங்குகிறேன். அன்பு, சகிர்புத்தன்மை என்பவற்றின் உயிர்த்துணையுடன் செளிற்பு, சமாதானம் நோக்கி வெலை செய்வதற்கு நடவடிக்கை வேட்கொல்வேன் என்றும் இலங்கைக்கு விசுவாசியாக இருப்பேன் என்றும் உறுதி புரிகிறேன்."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Four-Way Test Section */}
      <section className="py-16 bg-gradient-to-br from-red-200 to-red-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-red-900">THE FOUR-WAY TEST OF THE THINGS WE THINK, SAY, OR DO</h2>
            </div>
                          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-red-300">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl font-bold text-red-600 flex-shrink-0 w-8">1.</span>
                    <p className="text-lg sm:text-xl text-red-800 leading-relaxed">
                      <strong>Is it the TRUTH?</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl font-bold text-red-600 flex-shrink-0 w-8">2.</span>
                    <p className="text-lg sm:text-xl text-red-800 leading-relaxed">
                      <strong>Is it FAIR to all concerned?</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl font-bold text-red-600 flex-shrink-0 w-8">3.</span>
                    <p className="text-lg sm:text-xl text-red-800 leading-relaxed">
                      <strong>Will it build GOODWILL and BETTER FRIENDSHIPS?</strong>
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl font-bold text-red-600 flex-shrink-0 w-8">4.</span>
                    <p className="text-lg sm:text-xl text-red-800 leading-relaxed">
                      <strong>Will it be BENEFICIAL to all concerned?</strong>
                    </p>
                  </div>
                </div>
              </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Living Our Values
            </h3>
            <p className="text-lg sm:text-xl text-red-100 leading-relaxed max-w-3xl mx-auto">
              These formalities guide our every action as Rotaractors. Through song, prayer, 
              patriotism, and ethical principles, we build a foundation of service, leadership, 
              and fellowship that transforms our communities and ourselves.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Formality;