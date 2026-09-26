import React from 'react';
import { MotionConfig, motion, useReducedMotion } from 'framer-motion';
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

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fades and lifts its children into view once */
const Reveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.9, delay, ease: EASE }}
    className={className}
  >
    {children}
  </motion.div>
);

/** Masked line that slides up into view */
const Line = ({ children, delay, className = '' }: { children: React.ReactNode; delay: number; className?: string }) => (
  <span className={`block overflow-hidden pb-[0.08em] ${className}`}>
    <motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1, delay, ease: EASE }}>
      {children}
    </motion.span>
  </span>
);

const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <p className={`mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[.28em] ${light ? 'text-[#f2c14e]' : 'text-[#b8862b]'}`}>
    <span className={`h-px w-10 ${light ? 'bg-[#f2c14e]/70' : 'bg-[#b8862b]/60'}`} />
    {children}
  </p>
);

const About = () => {
  const reduceMotion = useReducedMotion();

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

  // Same introduction text, broken at its natural paragraph boundaries for readability
  const introduction = [
    'Rotaract is the strongest and largest youth-led non-profit organization in Sri Lanka, which emphasizes on grooming of budding young professionals to assist them in personal development while addressing the physical and social needs of our communities, and promoting better relations between all people worldwide through a framework of friendship and service.',
    'The Rotaract Club of Wellawatte (RAC Wellawatte) is one of the oldest clubs in the Rotary International District 3220 - Sri Lanka & Maldives, chartered by the Rotary Club of Mount Lavinia with its charter President PDG Nalin Fernando, on the 30th of June 1987. Over the past 38+ years, the service rendered to the community has been momentous. This club has also produced an innumerable number of conscientious leaders to the Rotaract and Rotary movement of R.I District 3220 – Sri Lanka & Maldives. The club has produced five District Rotaract Representatives thus far and One District Governor, who also happens to be the Charter President of the club, Mr Nalin Fernando.',
    "Over the years, the club has undertaken many noteworthy projects, some of which have progressively become a part of our club to this day. One such project is I'm a Special Child, which is a revived signature project of the club, showcasing the talents of differently abled children, whose talents are often unnoticed. Another notable project which has been taking place annually is our Annual Wella Pongal, a celebration of the Thai Pongal festival, where several persons of different faiths get together and witness the traditional making of Pongal and then given the chance to devour the joyous Pongal. The festive celebration doesn't fail to realize the need of the less-fortunate, whereby they are given parcels of Pongal and other snacks to help all celebrate with us.",
    "Our club assists in the development of its members, in their area of expertise, by focusing on each member's professional development with the work of its respective avenue and helps them excel at their careers. Our club has come through a long and successful history to remember and a remarkable present strength to start a bright future with its increasing membership.",
  ];

  const goals = [
    ['Professional and leadership development', 'We strive to cultivate strong leadership and essential career skills among our members.'],
    ['Community service and citizenship', 'We encourage young individuals to actively contribute to society and grow into responsible citizens.'],
    ['Peaceful coexistence', 'We promote mutual respect, acceptance, and harmony among people of diverse backgrounds.'],
  ];

  // Group past presidents by decade for the timeline
  const decades = presidents.reduce<{ decade: number; entries: { year: string; name: string; index: number }[] }[]>((acc, president, index) => {
    const [year, ...nameParts] = president.split(' - ');
    const decade = Math.floor(parseInt(year.slice(0, 4), 10) / 10) * 10;
    let group = acc.find((g) => g.decade === decade);
    if (!group) {
      group = { decade, entries: [] };
      acc.push(group);
    }
    group.entries.push({ year, name: nameParts.join(' - '), index });
    return acc;
  }, []);

  const scrollToIntro = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-[#f7f6f2] text-slate-900 selection:bg-[#f2c14e] selection:text-[#061634]">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="relative isolate flex min-h-[640px] items-end overflow-hidden bg-[#061634] pt-24 text-white sm:min-h-[720px]">
            <motion.img
              src={mainPic}
              alt="Rotaract Club of Wellawatte"
              className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
              initial={{ scale: reduceMotion ? 1 : 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ scale: { duration: 2.4, ease: EASE }, opacity: { duration: 1.2 } }}
            />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(6,22,52,.92)_0%,rgba(6,22,52,.66)_42%,rgba(6,22,52,.12)_80%)]" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(6,22,52,.9)_0%,rgba(6,22,52,0)_40%)]" />
            <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/30 to-transparent" />

            <div className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
                >
                  <Eyebrow light>Rotaract Club of Wellawatte</Eyebrow>
                </motion.div>
                <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[.95] tracking-[-.045em]">
                  <Line delay={0.2}>About Our</Line>
                  <Line delay={0.32}>
                    <span className="font-accent italic text-[#f2c14e]">Club</span>
                  </Line>
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
                  className="mt-8 max-w-xl text-lg leading-8 text-slate-200/90 sm:text-xl sm:leading-9"
                >
                  Learn about our mission, values, and the amazing team that makes our community impact possible.
                </motion.p>
                <motion.a
                  href="#introduction"
                  onClick={scrollToIntro}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
                  className="group mt-12 inline-flex items-center gap-4 text-sm font-semibold text-white"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-colors duration-300 group-hover:border-[#f2c14e] group-hover:bg-[#f2c14e] group-hover:text-[#061634]">
                    <ArrowDown size={17} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                  </span>
                  <span className="relative">
                    Explore our story
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#f2c14e] transition-transform duration-500 group-hover:scale-x-100" />
                  </span>
                </motion.a>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section id="introduction" className="scroll-mt-20 bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
              <Reveal className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
                <Eyebrow>01 / Our story</Eyebrow>
                <h2 className="text-4xl font-bold leading-[1.05] tracking-[-.04em] text-[#061634] sm:text-5xl lg:text-6xl">Introduction</h2>
                <figure className="mt-10 border-l-2 border-[#f2c14e] pl-6">
                  <Users className="mb-4 text-[#0b3d91]" size={22} strokeWidth={1.8} />
                  <blockquote className="font-accent text-2xl italic leading-snug text-slate-700">
                    A long and successful history to remember. A remarkable present strength to start a bright future.
                  </blockquote>
                </figure>
              </Reveal>

              <div className="lg:col-span-8">
                <Reveal>
                  <div className="group relative mb-14 overflow-hidden rounded-[28px] shadow-[0_40px_80px_-30px_rgba(6,22,52,.45)]">
                    <img
                      src={mainPic}
                      alt="Rotaract Club of Wellawatte"
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
                  </div>
                </Reveal>
                <div className="max-w-3xl space-y-7">
                  {introduction.map((paragraph, index) => (
                    <Reveal key={index} delay={index === 0 ? 0.05 : 0}>
                      <p
                        className={
                          index === 0
                            ? 'text-xl leading-9 text-[#061634] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-accent first-letter:text-[4.2rem] first-letter:leading-[.8] first-letter:text-[#0b3d91] sm:text-[1.35rem] sm:leading-10'
                            : 'text-lg leading-8 text-slate-600'
                        }
                      >
                        {paragraph}
                      </p>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Installations */}
          <section className="bg-[#f7f6f2] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <Reveal className="mb-14 max-w-3xl">
                <Eyebrow>Our Legacy / Installations</Eyebrow>
                <h2 className="text-4xl font-bold leading-[1.05] tracking-[-.04em] text-[#061634] sm:text-5xl lg:text-6xl">
                  A Legacy That <span className="font-accent italic text-[#0b3d91]">Continues</span>
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">A look back at the last six installation ceremonies, from the 40th to the 35th.</p>
              </Reveal>

              <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:grid-rows-[repeat(3,240px)]">
                {gallery.map(([image, alt, label], index) => (
                  <motion.figure
                    key={alt}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.9, delay: (index % 3) * 0.1, ease: EASE }}
                    className={`group relative overflow-hidden rounded-[24px] bg-[#061634] shadow-[0_24px_50px_-26px_rgba(6,22,52,.5)] ${
                      index === 0
                        ? 'col-span-2 aspect-[4/3] lg:row-span-2 lg:aspect-auto'
                        : index === 1
                          ? 'col-span-2 aspect-[16/9] lg:aspect-auto'
                          : index >= 4
                            ? 'aspect-[4/3] lg:col-span-2 lg:aspect-auto'
                            : 'aspect-[4/3] lg:aspect-auto'
                    }`}
                  >
                    <img
                      src={image}
                      alt={alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061634]/90 via-[#061634]/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                    <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-6">
                      <span className={`font-bold tracking-[-.01em] text-white ${index === 0 ? 'text-lg sm:text-2xl' : 'text-sm sm:text-base'}`}>
                        {label}
                      </span>
                      <span className="mb-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f2c14e] transition-transform duration-500 group-hover:scale-[2]" />
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
          </section>

          {/* Goals */}
          <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="mb-16 grid grid-cols-1 items-end gap-8 lg:grid-cols-2">
                <Reveal>
                  <Eyebrow>02 / Direction</Eyebrow>
                  <h2 className="text-4xl font-bold leading-[1.05] tracking-[-.04em] text-[#061634] sm:text-5xl lg:text-6xl">
                    Our <span className="font-accent italic text-[#0b3d91]">Goals</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="max-w-xl text-lg leading-8 text-slate-600 lg:ml-auto">
                    As a club committed to growth, service, and unity, we aim to empower individuals while fostering a responsible and inclusive society:
                  </p>
                </Reveal>
              </div>

              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] bg-slate-900/[0.08] ring-1 ring-slate-900/[0.08] md:grid-cols-3">
                {goals.map(([title, description], index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, delay: index * 0.12 }}
                    className="group relative flex flex-col overflow-hidden bg-white p-8 transition-colors duration-500 hover:bg-[#061634] sm:p-10"
                  >
                    <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0b3d91] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60" />
                    <div className="relative mb-12 flex items-start justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#061634] text-[#f2c14e] transition-colors duration-500 group-hover:bg-[#f2c14e] group-hover:text-[#061634]">
                        <Star size={22} strokeWidth={1.8} />
                      </span>
                      <span className="font-accent text-5xl italic leading-none text-slate-200 transition-colors duration-500 group-hover:text-white/20">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="relative mb-3 text-xl font-bold tracking-[-.02em] text-[#061634] transition-colors duration-500 group-hover:text-white sm:text-[1.35rem]">
                      {title}
                    </h3>
                    <p className="relative leading-7 text-slate-600 transition-colors duration-500 group-hover:text-slate-300">{description}</p>
                    <span aria-hidden="true" className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#f2c14e] transition-transform duration-700 ease-out group-hover:scale-x-100" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Past Presidents timeline */}
          <section className="relative isolate overflow-hidden bg-[#061634] py-24 text-white sm:py-32">
            <div aria-hidden="true" className="absolute -left-40 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#0b3d91]/45 blur-[130px]" />
            <div aria-hidden="true" className="absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#f2c14e]/10 blur-[110px]" />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 opacity-[0.05]"
              style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
            />

            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <Reveal className="mb-16">
                <Eyebrow light>1987 — 2026</Eyebrow>
                <h2 className="text-4xl font-bold leading-[1.05] tracking-[-.04em] sm:text-5xl lg:text-6xl">
                  Past <span className="font-accent italic text-[#f2c14e]">Presidents</span>
                </h2>
              </Reveal>

              <div className="border-t border-white/10">
                {decades.map(({ decade, entries }) => (
                  <div key={decade} className="grid grid-cols-1 gap-6 border-b border-white/10 py-10 md:grid-cols-[180px_1fr] md:gap-10 lg:grid-cols-[240px_1fr]">
                    <Reveal>
                      <span className="font-accent block text-5xl italic leading-none text-white/90 sm:text-6xl">
                        {decade}<span className="text-[#f2c14e]">s</span>
                      </span>
                    </Reveal>
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {entries.map(({ year, name, index }, i) => {
                        const highlight = index === 0 || index === presidents.length - 1;
                        return (
                          <motion.li
                            key={`${year}-${name}`}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.6, delay: i * 0.04, ease: EASE }}
                            className={`group flex items-center gap-4 rounded-2xl px-4 py-3.5 ring-1 transition-all duration-300 hover:-translate-y-0.5 ${
                              highlight
                                ? 'bg-[#f2c14e]/10 ring-[#f2c14e]/40 hover:bg-[#f2c14e]/15'
                                : 'bg-white/[0.03] ring-white/10 hover:bg-white/[0.07] hover:ring-white/25'
                            }`}
                          >
                            <span className="shrink-0 text-xs font-bold tabular-nums tracking-wide text-[#f2c14e]">{year}</span>
                            <span className="h-4 w-px shrink-0 bg-white/15" />
                            <span className="text-[15px] font-medium leading-snug text-slate-200 transition-colors group-hover:text-white">Rtr. {name}</span>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default About;
