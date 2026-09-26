import React, { useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, ArrowLeft, ArrowUpRight, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lailath from '../Pictures/Lailath1.jpeg'
import WellaPongal26 from '../Pictures/WELLPONGAL26-1.jpg'
import BreakAway26 from '../Pictures/BreakAway-2.jpeg'
import CrownCons from '../Pictures/CrownCons1.jpeg'
import NextStep from '../Pictures/NextStep-1.jpeg'
import WhotShot from '../Pictures/WhotShot-1.jpeg'
import MithuriDosti from '../Pictures/Mithuru Dhosthi.jpeg'
import IamASpecialChild from '../Pictures/IAC-2.jpeg'
import Hinawa from '../Pictures/Hinawa1.jpeg'
import CoastalCare from '../Pictures/CoastalCare3.jpeg'
import DigiThrive from '../Pictures/DigiThrive1.jpeg'
import KickOff from '../Pictures/KickOff.jpeg'
import PaddlesGiggles from '../Pictures/PG1.jpeg'
import { Link } from 'react-router-dom';

const allImages = [
  { src: Lailath, alt: "Lailath' 26" },
  { src: WellaPongal26, alt: "Wella Pongal 2026" }, 
  { src: BreakAway26, alt: "Break Away' 26" },
  { src: CrownCons, alt: "Crown Conspiracy" },
  { src: NextStep, alt: "Next Step" },
  { src: WhotShot, alt: "Whot Shot" },
  { src: MithuriDosti, alt: "Mithuru Dosti" },
  { src: IamASpecialChild, alt: "I Am a Special Child" },
  { src: Hinawa, alt: "Hinawa" },
  { src: CoastalCare, alt: "Coastal Care" },
  { src: DigiThrive, alt: "DigiThrive" },
  { src: KickOff, alt: "Kick Off" },
  { src: PaddlesGiggles, alt: "Paddles and Giggles" }
];
const uniqueImages = Array.from(
  new Map(allImages.map((image) => [image.src, image])).values(),
);

const IMAGES_PER_PAGE = 8;

const LegacyEvents = () => {
  // For scroll direction detection and animation
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const lastScrollY = React.useRef(window.scrollY);
  const [scrollDir, setScrollDir] = React.useState<'up' | 'down'>('down');
  const [page, setPage] = React.useState(0);
  const totalPages = Math.ceil(uniqueImages.length / IMAGES_PER_PAGE);
  const paginatedImages = uniqueImages.slice(page * IMAGES_PER_PAGE, (page + 1) * IMAGES_PER_PAGE);

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
    if (gridRef.current) {
      (gridRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBack = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
    if (gridRef.current) {
      (gridRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDir('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDir('up');
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="projects into "className="pt-24 pb-16"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a, #2563eb, #0ea5e9, #1e3a8a)',
          backgroundSize: '400% 400%',
          animation: 'blueGradient 4s linear infinite',
        }}
      >
        <style>{`
          @keyframes blueGradient {
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
            Our Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Discover upcoming activities and celebrate our community impact through service and fellowship.
          </motion.p>
        </div>
      </section>


      {/* Recent Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Recent Projects</h2>
            <p className="text-lg text-gray-600">A glimpse at some of our recent project highlights</p>
          </motion.div>
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 overflow-hidden">
            {paginatedImages.map((img, idx) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: scrollDir === 'down' ? 60 : 0 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: idx * 0.08, type: 'spring', bounce: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 flex flex-col items-center group"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
              >
                <div className="relative w-full h-48 sm:h-56 md:h-64">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full h-48 sm:h-56 md:h-64 object-cover transition duration-300 group-hover:brightness-75${img.alt === 'Hip Hop Thiruvizha' ? ' object-right' : ''}${img.alt === 'Mithuru Dosti' ? ' object-top' : ''}`}
                  />
                  {img.alt === "Lailath' 26" ? (
                    <Link
                      to="/projects/lailath"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ) :img.alt === "Break Away' 26" ? (
                    <Link
                      to="/projects/breakaway"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ) :img.alt === "Crown Conspiracy" ? (
                    <Link
                      to="/projects/crownconspiracy"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ) :img.alt === "Next Step" ? (
                    <Link
                      to="/projects/nextstep"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ) :img.alt === "Whot Shot" ? (
                    <Link
                      to="/projects/whotshot"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ):img.alt === "Mithuru Dosti" ? (
                    <Link
                      to="/projects/mithuridosti"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </Link>
                  ): (
                    <a
                      href="#"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      tabIndex={-1}
                    >
                      <button
                        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:from-blue-900 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Visit
                      </button>
                    </a>
                  )}
                </div>
                <div className="p-4 w-full text-center">
                  <span className="block text-gray-800 font-serif font-semibold tracking-wide text-lg truncate">{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Next Arrow Button */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              {page !== 0 && (
              <button
                className="flex items-center gap-1 px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-full shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-base mr-2"
                aria-label="Back"
                onClick={handleBack}
              >
                <ArrowLeft size={18} />
                <span className="font-semibold text-base">Back</span>
              </button>
              )}
              <button
              className="flex items-center gap-1 px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-full shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-base"
              aria-label="Next"
              onClick={handleNext}
            >
              <span className="font-semibold text-base">Next</span>
              <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const projectPaths: Record<string, string> = {
  "Lailath' 26": '/projects/lailath',
  'Wella Pongal 2026': '/projects/wellapongal26',
  "Break Away' 26": '/projects/breakaway',
  'Crown Conspiracy': '/projects/crownconspiracy',
  'Next Step': '/projects/nextstep',
  'Whot Shot': '/projects/whotshot',
  'Mithuru Dosti': '/projects/mithuridosti',
  'I Am a Special Child': '/projects/iamaspecialchild',
  Hinawa: '/projects/hinawa',
  'Coastal Care': '/projects/coastalcare',
  DigiThrive: '/projects/digithrive',
  'Kick Off': '/projects/kickoff',
  'Paddles and Giggles': '/projects/paddlesandgiggles',
};

const imagePosition = (title: string) => {
  if (title === 'Coastal Care') return 'object-[center_20%]';
  if (title === 'DigiThrive') return 'object-top';
  if (title === 'Mithuru Dosti') return 'object-top';
  return 'object-center';
};

const Events = () => {
  const [page, setPage] = React.useState(0);
  const totalPages = Math.ceil(uniqueImages.length / IMAGES_PER_PAGE);
  const paginatedImages = uniqueImages.slice(page * IMAGES_PER_PAGE, (page + 1) * IMAGES_PER_PAGE);
  const changePage = (nextPage: number) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const scrollToProjects = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-[#10213d]">
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden bg-[#071d3d] pt-28 text-white sm:pt-36">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,rgba(42,161,214,.35),transparent_35%),linear-gradient(115deg,#071d3d_0%,#0a3267_60%,#0f5a80_100%)]" />
          <div className="absolute -right-24 top-20 -z-10 h-72 w-72 rounded-full border border-cyan-200/20 sm:h-96 sm:w-96" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[1fr_440px] lg:gap-20">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.28em] text-cyan-200">
                <Sparkles size={16} /> Service in motion
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[.95] tracking-[-.045em] sm:text-7xl lg:text-8xl">
                Ideas that become <span className="text-cyan-300">impact.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">
                A living archive of the people, partnerships, and projects shaping a more connected RCW.
              </p>
              <a href="#projects" onClick={scrollToProjects} className="mt-10 inline-flex items-center gap-3 border border-cyan-200/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#071d3d]">
                Explore our work <ArrowRight size={17} />
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .15 }} className="relative hidden min-h-[310px] lg:block">
              <div className="absolute left-0 top-0 h-full border-l border-cyan-200/30" />
              <div className="pl-10 pt-2">
                <p className="text-xs font-semibold uppercase tracking-[.28em] text-cyan-200">Our work, in motion</p>
                <div className="mt-8 max-w-sm space-y-5">
                  <div className="border-t border-cyan-200/30 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[.2em] text-cyan-200/80">Community</p>
                    <p className="mt-2 text-xl font-semibold text-white">Showing up where it matters.</p>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[.2em] text-cyan-200/80">Connection</p>
                    <p className="mt-2 text-xl font-semibold text-white">Creating room for everyone.</p>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[.2em] text-cyan-200/80">Momentum</p>
                    <p className="mt-2 text-xl font-semibold text-white">Turning good intentions into action.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }} className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="text-sm font-semibold uppercase tracking-[.22em] text-[#1686a8]">The project journal</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Recent projects</h2></div>
            <p className="max-w-md border-l-2 border-[#1686a8]/40 pl-5 font-serif text-lg italic leading-8 text-slate-600 sm:text-xl">Small acts, bold ideas, and the shared energy behind every chapter.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {paginatedImages.map((image, index) => (
              <motion.article key={image.src} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: index * .06 }} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                  <img src={image.src} alt={image.alt} className={`h-full w-full object-cover ${imagePosition(image.alt)} transition duration-700 group-hover:scale-105`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071d3d]/75 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  {projectPaths[image.alt] && <Link to={projectPaths[image.alt]} aria-label={`Explore ${image.alt}`} className="absolute bottom-4 right-4 flex translate-y-3 items-center gap-2 bg-white px-4 py-2 text-sm font-semibold text-[#071d3d] opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">Explore <ArrowUpRight size={16} /></Link>}
                </div>
                <div className="flex items-start justify-between gap-3 border-b border-slate-200 py-4">
                  <h3 className="font-serif text-xl font-semibold leading-tight text-[#10213d]">{image.alt}</h3>
                  <span className="pt-1 text-xs font-semibold text-slate-400">{String(page * IMAGES_PER_PAGE + index + 1).padStart(2, '0')}</span>
                </div>
              </motion.article>
            ))}
          </div>
          {totalPages > 1 && <div className="mt-16 flex items-center justify-between border-t border-slate-200 pt-6"><p className="text-sm text-slate-500">Page <span className="font-semibold text-[#10213d]">{String(page + 1).padStart(2, '0')}</span> of {String(totalPages).padStart(2, '0')}</p><div className="flex gap-2"><button onClick={() => changePage(Math.max(0, page - 1))} disabled={page === 0} aria-label="Previous projects" className="inline-flex items-center gap-2 border border-slate-300 px-4 py-2 text-sm font-semibold text-[#10213d] transition hover:border-[#1686a8] hover:text-[#1686a8] disabled:cursor-not-allowed disabled:opacity-35"><ArrowLeft size={16} /> Back</button><button onClick={() => changePage(Math.min(totalPages - 1, page + 1))} disabled={page === totalPages - 1} aria-label="Next projects" className="inline-flex items-center gap-2 bg-[#071d3d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1686a8] disabled:cursor-not-allowed disabled:opacity-35">Next <ArrowRight size={16} /></button></div></div>}
        </section>
      </main>
      <Footer />
    </div>
  );
};

const LegacyProjects = () => {
  const [page, setPage] = React.useState(0);
  const totalPages = Math.ceil(uniqueImages.length / IMAGES_PER_PAGE);
  const paginatedImages = uniqueImages.slice(page * IMAGES_PER_PAGE, (page + 1) * IMAGES_PER_PAGE);
  const paths: Record<string, string> = { "Lailath' 26": '/projects/lailath', 'Wella Pongal 2026': '/projects/wellapongal26', "Break Away' 26": '/projects/breakaway', 'Crown Conspiracy': '/projects/crownconspiracy', 'Next Step': '/projects/nextstep', 'Whot Shot': '/projects/whotshot', 'Mithuru Dosti': '/projects/mithuridosti', 'I Am a Special Child': '/projects/iamaspecialchild', Hinawa: '/projects/hinawa', 'Coastal Care': '/projects/coastalcare', DigiThrive: '/projects/digithrive', 'Kick Off': '/projects/kickoff', 'Paddles and Giggles': '/projects/paddlesandgiggles' };
  const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-slate-900"><Navbar /><main>
      <section className="relative isolate overflow-hidden bg-[#082b66] pb-20 pt-36 text-white sm:pb-28"><div className="absolute -right-20 -top-28 -z-10 h-96 w-96 rounded-full border border-white/10" /><div className="mx-auto max-w-7xl px-5 sm:px-8"><motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: .7 }} className="max-w-3xl"><h1 className="text-5xl font-semibold tracking-[-.04em] sm:text-7xl">Our Events</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">Discover upcoming activities and celebrate our community impact through service and fellowship.</p></motion.div></div></section>
      <section className="py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-8"><motion.div initial="hidden" whileInView="visible" variants={reveal} transition={{ duration: .7 }} viewport={{ once: true }} className="mb-12"><h2 className="text-4xl font-semibold tracking-[-.035em] sm:text-5xl">Recent Projects</h2><p className="mt-5 text-lg text-slate-600">A glimpse at some of our recent project highlights</p></motion.div><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{paginatedImages.map((image, index) => <motion.article key={image.src} initial="hidden" whileInView="visible" variants={reveal} transition={{ duration: .55, delay: index * .06 }} viewport={{ once: true }} className="group overflow-hidden bg-white shadow-[0_12px_35px_rgba(15,35,70,.08)]"><div className="relative aspect-[4/3] overflow-hidden"><img src={image.src} alt={image.alt} className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-75 ${image.alt === 'Coastal Care' ? 'object-[center_20%]' : image.alt === 'DigiThrive' ? 'object-top' : ''}`} />{paths[image.alt] && <Link to={paths[image.alt]} className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100"><span className="bg-white px-5 py-2 text-sm font-semibold text-[#082b66] shadow-lg">Visit</span></Link>}</div><div className="p-5"><span className="block truncate font-serif text-lg font-semibold tracking-wide text-slate-800">{image.alt}</span></div></motion.article>)}</div>{totalPages > 1 && <div className="mt-12 flex justify-center gap-3">{page !== 0 && <button onClick={() => setPage(current => current - 1)} aria-label="Back" className="inline-flex items-center gap-2 bg-[#082b66] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123f85]"><ArrowLeft size={17} /> Back</button>}<button onClick={() => setPage(current => (current + 1) % totalPages)} aria-label="Next" className="inline-flex items-center gap-2 bg-[#082b66] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123f85]">Next <ArrowRight size={17} /></button></div>}</div></section>
    </main><Footer /></div>
  );
};

export default Events;
