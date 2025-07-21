import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Star, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-24 pb-16"
        style={{
          background: 'linear-gradient(135deg, #800000, #b03060, #a52a2a, #800000)',
          backgroundSize: '400% 400%',
          animation: 'maroonGradient 4s linear infinite',
        }}
      >
        <style>{`
          @keyframes maroonGradient {
            0% { background-position: 0% 50%; }
            25% { background-position: 50% 100%; }
            50% { background-position: 100% 50%; }
            75% { background-position: 50% 0%; }
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
            About Our Club
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-red-100 max-w-3xl mx-auto"
          >
            Learn about our mission, values, and the amazing team that makes our community impact possible.
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Introduction</h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center mb-8"
            >
              {/* <img
                src="/src/Pictures/Rotaract Main Pic.jpg"
                alt="Rotaract Club of Wellawatte"
                className="max-w-2xl w-full h-auto rounded-lg shadow-lg"
                style={{ maxHeight: '350px', objectFit: 'cover' }}
              /> */}
            </motion.div>
            
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Rotaract is the strongest and largest youth-led non-profit organization in Sri Lanka,
              which emphasizes on grooming of budding
              young professionals to assist them in
              personal development while addressing the
              physical and social needs of our
              communities, and promoting better relations
              between all people worldwide through a
              framework of friendship and service.
              The Rotaract Club of Wellawatte (RAC
              Wellawatte) is one of the oldest clubs in the
              Rotary International District 3220 - Sri Lanka
              & Maldives, chartered by the Rotary Club of
              Mount Lavinia with its charter President PDG
              Nalin Fernando, on the 30th of June 1987.
              Over the past 38+ years, the service rendered
              to the community has been momentous. This
              club has also produced an innumerable
              number of conscientious leaders to the
              Rotaract and Rotary movement of R.I District
              3220 – Sri Lanka & Maldives. The club has
              produced five District Rotaract
              Representatives thus far and One District
              Governor, who also happens to be the
              Charter President of the club, Mr Nalin
              Fernando.
              Over the years, the club has undertaken many
              noteworthy projects, some of which have
              progressively become a part of our club to
              this day. One such project is I'm a Special
              Child, which is a revived signature project of
              the club, showcasing the talents of differently
              abled children, whose talents are often
              unnoticed.
              Another notable project which has been
              taking place annually is our Annual Wella
              Pongal, a celebration of the Thai Pongal
              festival, where several persons of different
              faiths get together and witness the traditional
              making of Pongal and then given the chance
              to devour the joyous Pongal. The festive
              celebration doesn't fail to realize the need of
              the less-fortunate, whereby they are given
              parcels of Pongal and other snacks to help all
              celebrate with us. Our club assists in the development of its
              members, in their area of expertise, by
              focusing on each member's professional
              development with the work of its respective
              avenue and helps them excel at their careers.
              Our club has come through a long and
              successful history to remember and a
              remarkable present strength to start a bright
              future with its increasing membership.
            </p>

           {/* Legacy Pictures Section */}
             <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-8"
            >
   
              {/*<div className="flex flex-wrap justify-center gap-8">

               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <img
                      src="/src/Pictures/installation 2023.jpg"
                      alt="Installation 2023"
                      className="w-80 h-64 object-cover"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <img
                      src="/src/Pictures/Servicepic.jpg"
                      alt="BreakAway 2022"
                      className="w-80 h-64 object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <img
                      src="/src/Pictures/Gifts Of Hopes 2021.jpg"
                      alt="Gifts of Hopes 2021"
                      className="w-80 h-64 object-cover"
                    />
                  </div>
                </motion.div> */}

                {/* <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <img
                      src="/src/Pictures/Wella2023.jpg"
                      alt="Wella 2003"
                      className="w-80 h-64 object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <img
                      src="/src/Pictures/LikeMindsAlign-2021.jpg"
                      alt="Like Minds Align 2021"
                      className="w-80 h-64 object-cover"
                    />
                  </div>
                </motion.div> 

                 <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <img
                      src="/src/Pictures/Jingle Mingle 2021.jpg"
                      alt="Jingle and Mingle 2021"
                      className="w-80 h-64 object-cover"
                    />
                  </div>
                </motion.div>  

            
              </div> */}
            </motion.div>

          </motion.div>
        </div>
      </section>
    
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        Our Goals
      </h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
        As a club committed to growth, service, and unity, we aim to empower individuals while fostering a responsible and inclusive society:
      </p>
      <ul className="text-left max-w-3xl mx-auto space-y-4 text-lg text-gray-700 list-disc list-inside">
        <li>
          <span className="font-medium text-gray-800">Professional and leadership development</span>: We strive to cultivate strong leadership and essential career skills among our members.
        </li>
        <li>
          <span className="font-medium text-gray-800">Community service and citizenship</span>: We encourage young individuals to actively contribute to society and grow into responsible citizens.
        </li>
        <li>
          <span className="font-medium text-gray-800">Peaceful coexistence</span>: We promote mutual respect, acceptance, and harmony among people of diverse backgrounds.
        </li>
      </ul>
    </motion.div>
  </div>
</section>

{/* Past Presidents Section */}
<section className="py-16 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
        Past Presidents
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Honoring the leaders who have shaped the legacy of the Rotaract Club of Wellawatte since its inception in 1987.
      </p>
    </motion.div>

    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white text-base leading-relaxed"
    >
      {[
        "1987-88 - Nalin Fernando",
        "1988-89 - Rathven De Livera",
        "1989-90 - Murad Rajudln",
        "1990-91 - Adrian De Lima",
        "1991-92 - Jessica Gunawardena",
        "1992-93 - Leevani Dayaratne",
        "1993-94 - Channa Dayaratne",
        "1994-95 - Rainer Fernando",
        "1995-96 - Lakmani Manatunga",
        "1996-97 - Chamila Wickramasinghe",
        "1997-98 - Sundararajah Prabhu",
        "1998-99 - Shanaka Perera",
        "1999-00 - Janakie Balasundaram",
        "2000-01 - Jayampathi Mawilmada",
        "2001-02 - Gehan De Alwis",
        "2002-03 - Nimesh Amalean",
        "2003-04 - Chirath De Silva",
        "2004-05 - Hakim A. Falul",
        "2005-06 - Ramzi Zainudeen",
        "2006-07 - Sanjaya Motwani",
        "2007-08 - Shimara Azhar",
        "2008-09 - Subramaniam Sudhakaran",
        "2009-10 - Pavithra Solomons",
        "2010-11 - Fazim Idroos",
        "2011-12 - Rifdhy Riyal",
        "2012-13 - Sathyendra Tharmakularajasingham",
        "2013-14 - Dr. Lalithkumar Selvanathan",
        "2014-15 - Gajenthran Thivankaran",
        "2015-16 - Vijayadas Thivakaran",
        "2016-17 - Vidyas Gnansekaram",
        "2017-18 - Venushajan Santhirasegaram",
        "2017-18 - Christopher Surendran",
        "2018-19 - Kayalvili Mathavaram",
        "2019-20 - Kumararuban Nathangopal",
        "2020-21 - Evelyn John",
        "2021-22 - Frank Sugirthan Joseph",
        "2022-23 - Thulackshy Mohan",
        "2023-24 - Rebeccan Priyadharshini Letchumanan",
        "2024-25 - Kugaleshani Ravirajah"
      ].map((president, index) => (
        <li
          key={index}
          className="p-4 rounded-xl shadow-md"
          style={{
            background: 'linear-gradient(135deg, #800000, #b03060)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            fontWeight: '500'
          }}
        >
          {president}
        </li>
      ))}
    </motion.ul>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default About;
