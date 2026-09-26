import React from 'react';
import { MotionConfig, motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
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

const EASE = [0.22, 1, 0.36, 1] as const;

/** Masked line that slides up into view */
const Line = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
  <span className="block overflow-hidden pb-[0.1em]">
    <motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1, delay, ease: EASE }}>
      {children}
    </motion.span>
  </span>
);

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

/** Verse whose lines rise in one after another */
const Verse = ({ lines, className }: { lines: string[]; className: string }) => (
  <motion.p
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
    className={className}
  >
    {lines.map((line, i) => (
      <motion.span
        key={i}
        className="block"
        variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
      >
        {line}
      </motion.span>
    ))}
  </motion.p>
);

const Eyebrow = ({ n, light = false }: { n: string; light?: boolean }) => (
  <div className={`mb-6 flex items-center gap-3 text-xs font-bold tabular-nums tracking-[.3em] ${light ? 'text-[#f2c14e]' : 'text-[#b8862b]'}`}>
    <span>({n})</span>
    <span className={`h-px w-12 ${light ? 'bg-[#f2c14e]/60' : 'bg-[#b8862b]/50'}`} />
  </div>
);

/** Emphasises the capitalised key words of a Four-Way Test question */
const emphasise = (line: string) =>
  line.split(/(\b[A-Z]{2,}(?:\s+[A-Z]{2,})*\b)/).map((part, i) =>
    /^[A-Z]{2,}(?:\s+[A-Z]{2,})*$/.test(part) ? (
      <span key={i} className="text-[#0b3d91] transition-colors duration-500 group-hover:text-[#f2c14e]">
        {part}
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  );

const Formality = () => {
  const test = ['Is it the TRUTH?', 'Is it FAIR to all concerned?', 'Will it build GOODWILL and BETTER FRIENDSHIPS?', 'Will it be BENEFICIAL to all concerned?'];

  const verse = ['"Always, we shine where it matters,', 'To serving our fellow men, like no other', 'No matter, the creed or culture,', 'We pull together, to care for others,"'];
  const bridge = ['"It\'s our friendship that makes us thrive,', 'True sense of fellowship that makes us shine', 'As Rotaractors we always try,', 'To reach out and make things bright,"'];
  const invocation = ['"Remember us always as thy children', 'oh lord, instill in us the true meaning of friendship.', 'That the difference of cultures and creeds should not matter', 'at all times endow with us the desire to serve."'];

  const sections = [
    { id: 'song', title: 'Rotaract Song' },
    { id: 'invocation', title: 'Rotaract Invocation' },
    { id: 'four-way-test', title: 'THE FOUR-WAY TEST OF THE THINGS WE THINK, SAY, OR DO' },
    { id: 'values', title: 'Living Our Values' },
  ];

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-[#f7f6f2] text-[#061634] selection:bg-[#f2c14e] selection:text-[#061634]">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="relative isolate overflow-hidden bg-[#061634] text-white">
            <div aria-hidden="true" className="absolute -left-40 top-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#0b3d91]/50 blur-[130px]" />
            <div aria-hidden="true" className="absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#f2c14e]/10 blur-[110px]" />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 opacity-[0.05]"
              style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
            />

            <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:grid-cols-[1.15fr_.85fr]">
              <div>
                <h1 className="text-[clamp(3.2rem,8vw,7rem)] font-extrabold leading-[.95] tracking-[-.045em]">
                  <Line delay={0.15}>Rotaract</Line>
                  <Line delay={0.27}>
                    <span className="font-accent italic text-[#f2c14e]">Legacy</span>
                  </Line>
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
                  className="mt-8 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9"
                >
                  The timeless traditions, principles, and ceremonies that define the Rotaract movement.
                </motion.p>
              </div>

              {/* Section index */}
              <motion.nav
                aria-label="Formalities"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: EASE }}
                className="hidden border-l border-white/15 pl-8 sm:block"
              >
                <ol className="space-y-1">
                  {sections.map((section, index) => (
                    <motion.li
                      key={section.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: EASE }}
                    >
                      <button
                        type="button"
                        onClick={() => scrollTo(section.id)}
                        className="group flex w-full items-baseline gap-5 border-b border-white/10 py-5 text-left"
                      >
                        <span className="font-accent text-3xl italic leading-none text-[#f2c14e]/70 transition-colors group-hover:text-[#f2c14e]">
                          0{index + 1}
                        </span>
                        <span className="flex-1 text-base font-semibold leading-snug text-white/80 transition-colors group-hover:text-white">
                          {section.title}
                        </span>
                        <ArrowDown size={16} className="shrink-0 -translate-y-1 text-white/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-[#f2c14e]" />
                      </button>
                    </motion.li>
                  ))}
                </ol>
              </motion.nav>
            </div>
          </section>

          {/* Rotaract Song */}
          <section id="song" className="scroll-mt-20 bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <Reveal className="mb-14">
                <Eyebrow n="01" />
                <h2 className="text-4xl font-bold leading-[1.05] tracking-[-.04em] sm:text-5xl lg:text-6xl">
                  Rotaract <span className="font-accent italic text-[#0b3d91]">Song</span>
                </h2>
              </Reveal>

              <div className="grid grid-cols-1 gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
                <div className="space-y-10 border-l-2 border-[#f2c14e] pl-7 sm:pl-10">
                  <Verse lines={verse} className="font-accent text-2xl italic leading-[1.55] text-slate-700 sm:text-[1.7rem]" />
                  <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[.28em] text-[#b8862b]">
                      <strong>Bridge</strong>
                    </p>
                    <Verse lines={bridge} className="font-accent text-2xl italic leading-[1.55] text-slate-700 sm:text-[1.7rem]" />
                  </div>
                </div>

                <Reveal delay={0.15}>
                  <div className="relative isolate overflow-hidden rounded-[28px] bg-[#061634] p-5 shadow-[0_40px_80px_-40px_rgba(6,22,52,.8)] sm:p-7">
                    <div aria-hidden="true" className="absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full bg-[#0b3d91]/70 blur-[80px]" />
                    <div aria-hidden="true" className="absolute -bottom-16 -left-10 -z-10 h-48 w-48 rounded-full bg-[#f2c14e]/15 blur-[70px]" />
                    <h3 className="mb-5 flex items-center gap-3 px-1 text-sm font-semibold text-white">
                      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#f2c14e] text-[#061634]">
                        <Play size={13} fill="currentColor" />
                      </span>
                      Listen to the Rotaract Song
                    </h3>
                    <div className="aspect-video overflow-hidden rounded-2xl ring-1 ring-white/10">
                      <iframe
                        src="https://www.youtube.com/embed/Ft3AQeWorb8"
                        title="Rotaract Song"
                        className="h-full w-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Rotaract Invocation */}
          <section id="invocation" className="relative scroll-mt-20 overflow-hidden bg-[#f7f6f2] py-24 sm:py-32">
            <span
              aria-hidden="true"
              className="font-accent pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 select-none text-[22rem] italic leading-none text-[#0b3d91]/[0.05]"
            >
              &ldquo;
            </span>
            <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
              <Reveal className="mb-12 flex flex-col items-center">
                <Eyebrow n="02" />
                <h2 className="text-4xl font-bold leading-[1.05] tracking-[-.04em] sm:text-5xl lg:text-6xl">
                  Rotaract <span className="font-accent italic text-[#0b3d91]">Invocation</span>
                </h2>
              </Reveal>
              <Verse lines={invocation} className="font-accent text-2xl italic leading-[1.6] text-[#061634] sm:text-[2rem]" />
              <Reveal delay={0.3} className="mt-12 flex justify-center">
                <span className="h-px w-24 bg-gradient-to-r from-transparent via-[#f2c14e] to-transparent" />
              </Reveal>
            </div>
          </section>

          {/* Four-Way Test */}
          <section id="four-way-test" className="scroll-mt-20 bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <Reveal className="mb-14 max-w-4xl">
                <Eyebrow n="03" />
                <h2 className="text-3xl font-bold leading-[1.15] tracking-[-.02em] sm:text-4xl lg:text-5xl">
                  THE FOUR-WAY TEST OF THE THINGS WE THINK, SAY, OR DO
                </h2>
              </Reveal>

              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] bg-slate-900/[0.08] ring-1 ring-slate-900/[0.08] sm:grid-cols-2 lg:grid-cols-4">
                {test.map((line, index) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, delay: index * 0.12 }}
                    className="group relative flex flex-col overflow-hidden bg-white p-7 sm:min-h-[240px] sm:p-8 lg:min-h-[260px] transition-colors duration-500 hover:bg-[#061634] sm:p-10"
                  >
                    <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0b3d91] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60" />
                    <span className="font-accent relative text-5xl italic leading-none text-slate-200 sm:text-6xl transition-colors duration-500 group-hover:text-white/20">
                      {index + 1}.
                    </span>
                    <p className="relative mt-auto pt-5 text-xl font-bold sm:pt-10 leading-snug tracking-[-.01em] text-[#061634] transition-colors duration-500 group-hover:text-white sm:text-[1.35rem]">
                      <strong>{emphasise(line)}</strong>
                    </p>
                    <span aria-hidden="true" className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#f2c14e] transition-transform duration-700 ease-out group-hover:scale-x-100" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Living Our Values */}
          <section id="values" className="scroll-mt-20 bg-white px-3 pb-3 sm:px-5 sm:pb-5">
            <div className="relative isolate mx-auto max-w-[1440px] overflow-hidden rounded-[32px] bg-[#061634] px-6 py-24 text-center text-white sm:px-10 sm:py-32">
              <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[#f2c14e]/20 blur-[110px]" />
              <div aria-hidden="true" className="absolute -bottom-32 -left-20 -z-10 h-80 w-80 rounded-full bg-[#0b3d91]/60 blur-[110px]" />
              <Reveal className="flex flex-col items-center">
                <Eyebrow n="04" light />
                <h3 className="mx-auto mb-8 max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-.04em] sm:text-6xl">
                  Living Our <span className="font-accent italic text-[#f2c14e]">Values</span>
                </h3>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
                  These formalities guide our every action as Rotaractors. Through song, prayer, patriotism, and ethical principles, we build a foundation of service, leadership, and fellowship that transforms our communities and ourselves.
                </p>
              </Reveal>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default Formality;
