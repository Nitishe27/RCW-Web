import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Star, Calendar, ArrowDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import mainPic from '../Pictures/Rotaract Main Pic.jpg';
import installation2023 from '../Pictures/installation 2023.jpg';
import Servicepic from '../Pictures/Servicepic.jpg';
import GiftsOfHopes2021 from '../Pictures/Gifts Of Hopes 2021.jpg';
import Wella2003 from '../Pictures/Wella2023.jpg';
import LikeMindsAlign from '../Pictures/LikeMindsAlign-2021.jpg';
import JingleMingle from '../Pictures/Jingle Mingle 2021.jpg';
import installation40 from '../Pictures/40th Installation.jpeg';
import installation39 from '../Pictures/39th Installation.jpeg';
import installation38 from '../Pictures/38th Installation.jpeg';
import installation37 from '../Pictures/37th Installation.jpeg';
import installation36 from '../Pictures/36th Installation.jpeg';
import installation35 from '../Pictures/35th Installation.jpeg';

const LegacyAbout = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-24 pb-16"
        style={{
          background: 'linear-gradient(135deg, #0b3d91, #1e3a8a, #12305d, #0b3d91)',
          backgroundSize: '400% 400%',
          animation: 'navyGradient 6s linear infinite',
        }}
      >
        <style>{`
          @keyframes navyGradient {
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
            className="text-xl text-sky-100 max-w-3xl mx-auto"
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
              <img
                 src={mainPic}
                alt="Rotaract Club of Wellawatte"
                className="max-w-2xl w-full h-auto rounded-lg shadow-lg"
                style={{ maxHeight: '350px', objectFit: 'cover' }}
              /> 
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
   
              <div className="flex flex-wrap justify-center gap-8">

               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <img
                      src= {installation2023}
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
                      src={Servicepic}
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
                      src={GiftsOfHopes2021}
                      alt="Gifts of Hopes 2021"
                      className="w-80 h-64 object-cover"
                    />
                  </div>
                </motion.div> 

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <img
                      src={Wella2003}
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
                      src={LikeMindsAlign}
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
                      src={JingleMingle}
                      alt="Jingle and Mingle 2021"
                      className="w-80 h-64 object-cover"
                    />
                  </div>
                </motion.div>  

            
              </div> 
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
        "2024-25 - Kugaleshani Ravirajah",
        "2025-26 - Dilash Sivakumaran",
      ].map((president, index) => (
        <li
          key={index}
          className="p-4 rounded-xl shadow-md"
          style={{
            background: 'linear-gradient(135deg, #0b3d91, #1e3a8a)',
            boxShadow: '0 6px 20px rgba(2,6,23,0.12)',
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

const About = () => {
  const gallery = [
    [installation40, '40th Installation', '40th Installation Ceremony'],
    [installation39, '39th Installation', '39th Installation Ceremony'],
    [installation38, '38th Installation', '38th Installation Ceremony'],
    [installation37, '37th Installation', '37th Installation Ceremony'],
    [installation36, '36th Installation', '36th Installation Ceremony'],
    [installation35, '35th Installation', '35th Installation Ceremony'],
  ];
  const presidents = [
    '1987-88 - Nalin Fernando', '1988-89 - Rathven De Livera', '1989-90 - Murad Rajudln', '1990-91 - Adrian De Lima', '1991-92 - Jessica Gunawardena', '1992-93 - Leevani Dayaratne', '1993-94 - Channa Dayaratne', '1994-95 - Rainer Fernando', '1995-96 - Lakmani Manatunga', '1996-97 - Chamila Wickramasinghe', '1997-98 - Sundararajah Prabhu', '1998-99 - Shanaka Perera', '1999-00 - Janakie Balasundaram', '2000-01 - Jayampathi Mawilmada', '2001-02 - Gehan De Alwis', '2002-03 - Nimesh Amalean', '2003-04 - Chirath De Silva', '2004-05 - Hakim A. Falul', '2005-06 - Ramzi Zainudeen', '2006-07 - Sanjaya Motwani', '2007-08 - Shimara Azhar', '2008-09 - Subramaniam Sudhakaran', '2009-10 - Pavithra Solomons', '2010-11 - Fazim Idroos', '2011-12 - Rifdhy Riyal', '2012-13 - Sathyendra Tharmakularajasingham', '2013-14 - Dr. Lalithkumar Selvanathan', '2014-15 - Gajenthran Thivankaran', '2015-16 - Vijayadas Thivakaran', '2016-17 - Vidyas Gnansekaram', '2017-18 - Venushajan Santhirasegaram', '2017-18 - Christopher Surendran', '2018-19 - Kayalvili Mathavaram', '2019-20 - Kumararuban Nathangopal', '2020-21 - Evelyn John', '2021-22 - Frank Sugirthan Joseph', '2022-23 - Thulackshy Mohan', '2023-24 - Rebeccan Priyadharshini Letchumanan', '2024-25 - Kugaleshani Ravirajah', '2025-26 - Dilash Sivakumaran',
  ];
  const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f5f7fa] text-slate-900">
      <Navbar />
      <main>
        <section className="relative isolate flex min-h-[620px] items-end overflow-hidden bg-[#082b66] pt-24 text-white sm:min-h-[680px]">
          <img src={mainPic} alt="Rotaract Club of Wellawatte" className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-35" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(4,25,63,.98)_0%,rgba(8,43,102,.82)_44%,rgba(8,43,102,.2)_100%)]" />
          <div className="absolute right-[-10%] top-20 -z-10 h-80 w-80 rounded-full border border-white/10 sm:right-[8%]" />
          <div className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 lg:pb-24">
            <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: .7 }} className="max-w-3xl">
              <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.28em] text-sky-200"><span className="h-px w-10 bg-sky-300" /> Rotaract Club of Wellawatte</p>
              <h1 className="max-w-2xl text-5xl font-semibold leading-[.98] tracking-[-.04em] sm:text-7xl">About Our Club</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-sky-100 sm:text-xl">Learn about our mission, values, and the amazing team that makes our community impact possible.</p>
              <a href="#introduction" className="mt-12 inline-flex items-center gap-3 border-b border-sky-200/60 pb-2 text-sm font-semibold text-white transition-colors hover:border-white"><ArrowDown size={16} /> Explore our story</a>
            </motion.div>
          </div>
        </section>

        <section id="introduction" className="bg-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <motion.div initial="hidden" whileInView="visible" variants={reveal} transition={{ duration: .7 }} viewport={{ once: true }} className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-blue-700">01 / Our story</p><h2 className="max-w-sm text-4xl font-semibold leading-tight tracking-[-.035em] text-slate-900 sm:text-5xl">Introduction</h2>
              <div className="mt-8 flex gap-5 text-slate-500"><Users className="mt-1 shrink-0 text-blue-700" size={22} /><p className="max-w-xs text-sm leading-6">A long and successful history to remember. A remarkable present strength to start a bright future.</p></div>
              <div className="mt-12 rounded-2xl border border-blue-100 bg-gradient-to-br from-slate-50 to-white p-5 shadow-[0_12px_30px_rgba(15,35,70,.06)]">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-700">Past Presidents</p>
                  <span className="h-px flex-1 bg-blue-100" />
                </div>
                <ul className="grid grid-cols-1 gap-2 text-xs leading-5 sm:grid-cols-2">
                  {presidents.map((president) => {
                    const [year, ...nameParts] = president.split(' - ');
                    return <li key={president} className="flex items-center gap-2 rounded-lg border border-slate-100 bg-white px-2.5 py-2 text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-md"><span className="shrink-0 rounded-md bg-blue-50 px-1.5 py-0.5 text-[10px] font-bold text-blue-700">{year}</span><span>Rtr. {nameParts.join(' - ')}</span></li>;
                  })}
                </ul>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" variants={reveal} transition={{ duration: .7, delay: .1 }} viewport={{ once: true }}>
              <img src={mainPic} alt="Rotaract Club of Wellawatte" className="mb-10 aspect-[16/9] w-full object-cover shadow-[0_24px_60px_rgba(15,35,70,.16)]" />
              <p className="max-w-3xl text-lg leading-8 text-slate-600">Rotaract is the strongest and largest youth-led non-profit organization in Sri Lanka, which emphasizes on grooming of budding young professionals to assist them in personal development while addressing the physical and social needs of our communities, and promoting better relations between all people worldwide through a framework of friendship and service. The Rotaract Club of Wellawatte (RAC Wellawatte) is one of the oldest clubs in the Rotary International District 3220 - Sri Lanka & Maldives, chartered by the Rotary Club of Mount Lavinia with its charter President PDG Nalin Fernando, on the 30th of June 1987. Over the past 38+ years, the service rendered to the community has been momentous. This club has also produced an innumerable number of conscientious leaders to the Rotaract and Rotary movement of R.I District 3220 – Sri Lanka & Maldives. The club has produced five District Rotaract Representatives thus far and One District Governor, who also happens to be the Charter President of the club, Mr Nalin Fernando. Over the years, the club has undertaken many noteworthy projects, some of which have progressively become a part of our club to this day. One such project is I'm a Special Child, which is a revived signature project of the club, showcasing the talents of differently abled children, whose talents are often unnoticed. Another notable project which has been taking place annually is our Annual Wella Pongal, a celebration of the Thai Pongal festival, where several persons of different faiths get together and witness the traditional making of Pongal and then given the chance to devour the joyous Pongal. The festive celebration doesn't fail to realize the need of the less-fortunate, whereby they are given parcels of Pongal and other snacks to help all celebrate with us. Our club assists in the development of its members, in their area of expertise, by focusing on each member's professional development with the work of its respective avenue and helps them excel at their careers. Our club has come through a long and successful history to remember and a remarkable present strength to start a bright future with its increasing membership.</p>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#edf3f8_0%,#ffffff_48%,#e7eef8_100%)] py-16 sm:py-24"><div aria-hidden="true" className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#c6d7eb]/70" /><div aria-hidden="true" className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-[#dce8f5]/60 blur-3xl" /><div className="relative mx-auto max-w-7xl px-5 sm:px-8"><motion.div initial="hidden" whileInView="visible" variants={reveal} transition={{ duration: .7 }} viewport={{ once: true }} className="mb-11 flex items-end justify-between gap-6"><div><p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-[#1d5fbf]"><span className="h-px w-10 bg-[#d19a3a]" /> Our Legacy / Installations</p><h2 className="text-3xl font-semibold leading-tight tracking-[-.035em] text-[#071f4d] sm:text-5xl">A Legacy That Continues</h2><p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">A look back at the last six installation ceremonies, from the 40th to the 35th.</p></div><Heart className="hidden text-[#1d5fbf] sm:block" size={30} /></motion.div><div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">{gallery.map(([image, alt, label], index) => <motion.figure key={alt} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: index * .06 }} viewport={{ once: true }} className="group overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_14px_35px_rgba(7,31,77,.10)] ring-1 ring-[#dce6f2] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_rgba(7,31,77,.18)]"><div className="relative aspect-[4/3] overflow-hidden"><img src={image} alt={alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div><figcaption className="flex items-center justify-between gap-3 border-t border-slate-100 px-3 py-3 text-xs sm:px-4 sm:py-4 sm:text-sm"><span className="font-bold tracking-wide text-[#071f4d]">{label}</span><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d19a3a]" /></figcaption></motion.figure>)}</div></div></section>

        <section className="bg-white py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><motion.div initial="hidden" whileInView="visible" variants={reveal} transition={{ duration: .7 }} viewport={{ once: true }}><p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-blue-700">02 / Direction</p><h2 className="text-4xl font-semibold leading-tight tracking-[-.035em] text-slate-900 sm:text-5xl">Our Goals</h2></motion.div><motion.div initial="hidden" whileInView="visible" variants={reveal} transition={{ duration: .7, delay: .1 }} viewport={{ once: true }}><p className="mb-8 max-w-2xl text-lg leading-8 text-slate-600">As a club committed to growth, service, and unity, we aim to empower individuals while fostering a responsible and inclusive society:</p><ul className="space-y-5 text-base leading-7 text-slate-600"><li className="flex gap-4 border-t border-slate-200 pt-5"><Star className="mt-1 shrink-0 text-amber-500" size={18} /><span><strong className="font-medium text-slate-800">Professional and leadership development</strong>: We strive to cultivate strong leadership and essential career skills among our members.</span></li><li className="flex gap-4 border-t border-slate-200 pt-5"><Star className="mt-1 shrink-0 text-amber-500" size={18} /><span><strong className="font-medium text-slate-800">Community service and citizenship</strong>: We encourage young individuals to actively contribute to society and grow into responsible citizens.</span></li><li className="flex gap-4 border-t border-slate-200 pt-5"><Star className="mt-1 shrink-0 text-amber-500" size={18} /><span><strong className="font-medium text-slate-800">Peaceful coexistence</strong>: We promote mutual respect, acceptance, and harmony among people of diverse backgrounds.</span></li></ul></motion.div></div></section>

      </main>
      <Footer />
    </div>
  );
};

export default About;
