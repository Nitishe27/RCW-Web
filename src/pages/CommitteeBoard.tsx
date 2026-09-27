import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { executives } from "./CommitteeExecutive";
// Optimised web copies of the original portraits (originals kept in src/Pictures)
import Dula26 from '../Pictures/committee/Dula26.webp';
import Pragadeeshan26 from '../Pictures/committee/Pragadeeshan26.webp';
import Kavin26 from '../Pictures/committee/Kavin26.webp';
import Mathuvarthany26 from '../Pictures/committee/Mathuvarthany26.webp';
import Vasi26 from '../Pictures/committee/Vasi26.webp';
import Dinosha26 from '../Pictures/committee/Dinosha26.webp';
import Sajeev26 from '../Pictures/committee/Sajeev26.webp';
import Jawagar26 from '../Pictures/committee/Jawagar26.webp';
import Mathusha26 from '../Pictures/committee/Mathusha26.webp';
import Narmathan26 from '../Pictures/committee/Narmathan26.webp';
import Hariv26 from '../Pictures/committee/Hariv26.webp';
import Akash26 from '../Pictures/committee/Akash26.webp';

const boardMembers = [
  {
    name: 'Rtr. Dulaangan Chandrasekaran',
    position: 'International Service Director',
    image: Dula26,
    testimonial: 'When I joined Rotaract, everyone was incredibly welcoming and kind. What began as simple curiosity grew into something much larger, a community filled with positive people, uplifting energy, and a purpose-driven spirit. Since then, I’ve encouraged my two best friends to join because I truly believe in what we’re building together. From impactful projects to memorable moments that bring warmth to life, Rotaract has become a place where passion meets action, and every effort, big or small, makes a difference. Now, as the Director of International Services, I’m thrilled to extend that spirit beyond borders—to connect with clubs worldwide, celebrate diverse cultures, and remind ourselves that service is a universal language.'
  },

  {
    name: 'Rtr. Pragadeeshan Sathasivem Pillai',
    position: 'International Service Director',
    image: Pragadeeshan26,
    testimonial: 'When I joined Rotaract, everyone was incredibly welcoming and kind. What began as simple curiosity grew into something much larger, a community filled with positive people, uplifting energy, and a purpose-driven spirit. Since then, I’ve encouraged my two best friends to join because I truly believe in what we’re building together. From impactful projects to memorable moments that bring warmth to life, Rotaract has become a place where passion meets action, and every effort, big or small, makes a difference. Now, as the Director of International Services, I’m thrilled to extend that spirit beyond borders—to connect with clubs worldwide, celebrate diverse cultures, and remind ourselves that service is a universal language.'
  },

  {
    name: 'Rtr. Kavin Ganeshamoorthy',
    position: 'Professional Development Director',
    image: Kavin26,
    testimonial: 'In 2024, I stepped into Rotaract with the simple hope of meeting new people and broadening my horizons. What I found was something far greater — a vibrant space where purpose meets passion, and friendships evolve into lifelong bonds. Being part of this movement has been a turning point. It’s opened doors to experiences that have refined my character, challenged my limits, and fueled my drive to grow — not just for myself, but for those around me. I have come to appreciate the value of giving back and the strength of rising through collective effort. Now, as the Professional Development Director of the Rotaract Club of Wellawatte, I’m committed to nurturing the potential in others. My goal is to create opportunities that help our members develop the skills, confidence, and mindset they need to thrive — in service, in leadership, and in life.'
  },
  {
    name: 'Rtr. Mathuvarththany Subramaniyam',
    position: 'Professional Development Director',
    image: Mathuvarthany26,
    testimonial: 'In 2024, I embarked on my journey with Rotaract Club of Wellawatte with the modest aspiration of expanding my social circle and gaining broader perspectives. However, what I encountered was far more profound — a dynamic platform where purpose is harmonized with passion, and acquaintances are transformed into enduring relationships. Becoming part of this distinguished movement has marked a significant turning point in my personal and professional development. It has granted me access to enriching experiences that have honed my character, tested my capabilities, and ignited a sincere commitment to continuous growth not solely for personal advancement, but in service to others. Through this journey, I have come to deeply appreciate the essence of service, and the formidable impact of collective action. As the Director of Professional Development at the Rotaract Club of Wellawatte, I am dedicated to fostering the growth and potential of our members. My primary objective is to design and implement initiatives that equip individuals with the skills, confidence, and mindset necessary to excel not only in leadership and service, but also in their personal and professional lives.'
  },
  {
    name: 'Rtr. Vasikaran Vinayagamoorthy',
    position: 'Community Service Director',
    image: Vasi26,
    testimonial: 'In 2023, I joined Rotaract with the intention of expanding my network and stepping out of my comfort zone. What I discovered was far more meaningful — a community that thrives on connection, purpose, and shared growth. Rotaract has become a space where I’ve grown not only as an individual but also as a team player. It has shaped my perspective on service, leadership, and the impact we can create when we come together for something greater than ourselves. Now, as the Club Services Director of the Rotaract Club of Wellawatte, my focus is on building a strong sense of unity and engagement within our club. I believe that a connected club is a thriving club — and I’m dedicated to creating moments, events, and memories that bring our members closer, strengthen our bond, and reflect the true spirit of Rotaract.'
  },
  {
    name: 'Rtr. Daniya Dinosha',
    position: 'Community Service Director',
    image: Dinosha26,
    testimonial: 'It all began in April 2024 — not with a grand plan, but with a curious heart and a quiet wish to do more. I walked into Rotaract looking for a place to give back… and instead found a place that gave me purpose. Rotaract became more than just a club — it became a canvas where I could blend service, creativity, and compassion. Every project, every outreach, every story from the community painted a deeper understanding of what it truly means to serve. I didn’t just witness change — I became part of it. Now, as the Director of Community Service for the Rotaract Club of Wellawatte, I carry that same spark into everything I do. My mission? To create ripples of kindness, build bridges of trust, and craft initiatives that leave lasting footprints — not just on the ground, but in hearts.Because when passion meets purpose, communities don’t just survive — they shine.'
  },
  {
    name: 'Rtr. PP. Kirubakaran Sajeevkanth',
    position: 'Clubs Service Director',
    image: Sajeev26,
    testimonial: 'I joined the Rotaract Club of Wellawatte in 2024, simply hoping to meet new people and explore new experiences. But what awaited me was something far more impactful — a space where purpose meets passion, and strangers turn into lifelong friends. My journey began with a beach cleanup project — a simple act of service that opened my eyes to the deeper meaning of community and responsibility. From there, I had the privilege of leading Inside Edge, a project that pushed me to step out of my comfort zone and step up as a leader. Being part of this movement has shaped me in ways I never expected. It has refined my character, challenged my limits, and sparked a drive to grow — not just for myself, but for those around me. Through service and shared experiences, I’ve learned the true power of collective effort and the joy of giving back. Now, as the Club Service Director of the Rotaract Club of Wellawatte, I’m dedicated to strengthening the spirit of camaraderie within our club. My focus is on creating meaningful connections, fostering unity, and building a vibrant club culture where every member feels valued and inspired to contribute. Through shared experiences, celebrations, and collaboration, I aim to make our club not just a space for service — but a second home for every Rotaractor.'
  },
  {
    name: 'Rtr. Jawagar Sundaraj',
    position: 'Clubs Service Director',
    image: Jawagar26,
    testimonial: 'In 2023, I joined Rotaract with the intention of expanding my network and stepping out of my comfort zone. What I discovered was far more meaningful — a community that thrives on connection, purpose, and shared growth. Rotaract has become a space where I’ve grown not only as an individual but also as a team player. It has shaped my perspective on service, leadership, and the impact we can create when we come together for something greater than ourselves. Now, as the Club Services Director of the Rotaract Club of Wellawatte, my focus is on building a strong sense of unity and engagement within our club. I believe that a connected club is a thriving club — and I’m dedicated to creating moments, events, and memories that bring our members closer, strengthen our bond, and reflect the true spirit of Rotaract.'
  },

    {
    name: 'Rtr. Mathusha Kannathasan',
    position: 'Assistant Treasurer',
    image: Mathusha26,
    testimonial: 'In 2023, I joined Rotaract with the intention of expanding my network and stepping out of my comfort zone. What I discovered was far more meaningful — a community that thrives on connection, purpose, and shared growth. Rotaract has become a space where I’ve grown not only as an individual but also as a team player. It has shaped my perspective on service, leadership, and the impact we can create when we come together for something greater than ourselves. Now, as the Club Services Director of the Rotaract Club of Wellawatte, my focus is on building a strong sense of unity and engagement within our club. I believe that a connected club is a thriving club — and I’m dedicated to creating moments, events, and memories that bring our members closer, strengthen our bond, and reflect the true spirit of Rotaract.'
  },

  {
    name: 'Rtr. Narmathan Tharmathasan',
    position: 'Public Relations Director',
    image: Narmathan26,
    testimonial: 'My Rotaract journey began in 2020 with the Rotaract Club of Matale — a decision that would soon become one of the most defining chapters of my life. After two years of learning and growing, I had the honor of joining the Board as the Director of Sports and Recreation, and also took on the role of Captain of the Rotaract Sri Lanka Hockey Team — blending my passion for teamwork, leadership, and sportsmanship. In 2024, I made a bold move and transferred to the Rotaract Club of Wellawatte, where I continued my journey by serving as the Public Relations Director — a role that allowed me to amplify voices, connect people, and showcase the spirit of our club. Now in 2025, I step into a new chapter as the Director of Membership Development. My mission is simple yet powerful — to build a strong and inclusive member base, where every individual feels valued, engaged, and empowered to contribute. I look forward to creating meaningful opportunities for growth and belonging, just as Rotaract has given me.'
  },

  {
    name: 'Rtr. Harivithushanan Sasendran',
    position: 'Public Relations Director',
    image: Hariv26,
    testimonial: 'My Rotaract journey began in 2020 with the Rotaract Club of Matale — a decision that would soon become one of the most defining chapters of my life. After two years of learning and growing, I had the honor of joining the Board as the Director of Sports and Recreation, and also took on the role of Captain of the Rotaract Sri Lanka Hockey Team — blending my passion for teamwork, leadership, and sportsmanship. In 2024, I made a bold move and transferred to the Rotaract Club of Wellawatte, where I continued my journey by serving as the Public Relations Director — a role that allowed me to amplify voices, connect people, and showcase the spirit of our club. Now in 2025, I step into a new chapter as the Director of Membership Development. My mission is simple yet powerful — to build a strong and inclusive member base, where every individual feels valued, engaged, and empowered to contribute. I look forward to creating meaningful opportunities for growth and belonging, just as Rotaract has given me.'
  },

  {
    name: 'Rtr. Akash Kumar',
    position: 'Sports & Recreation Director',
    image: Akash26,
    testimonial: 'My Rotaract journey began in 2020 with the Rotaract Club of Matale — a decision that would soon become one of the most defining chapters of my life. After two years of learning and growing, I had the honor of joining the Board as the Director of Sports and Recreation, and also took on the role of Captain of the Rotaract Sri Lanka Hockey Team — blending my passion for teamwork, leadership, and sportsmanship. In 2024, I made a bold move and transferred to the Rotaract Club of Wellawatte, where I continued my journey by serving as the Public Relations Director — a role that allowed me to amplify voices, connect people, and showcase the spirit of our club. Now in 2025, I step into a new chapter as the Director of Membership Development. My mission is simple yet powerful — to build a strong and inclusive member base, where every individual feels valued, engaged, and empowered to contribute. I look forward to creating meaningful opportunities for growth and belonging, just as Rotaract has given me.'
  },
];

type Member = {
  name: string;
  position: string;
  image: string;
  testimonial: string;
};

type View = 'executive' | 'board';

const EASE = [0.22, 1, 0.36, 1] as const;

const views: Record<View, { eyebrow: string; title: string; accent: string; subtitle: string; members: Member[] }> = {
  executive: {
    eyebrow: 'Leadership Team 2025-26',
    title: 'Executive',
    accent: 'Committee',
    subtitle: 'Visionary leaders guiding our club with unwavering commitment to service, growth, and community impact',
    members: executives,
  },
  board: {
    eyebrow: 'Board of Directors',
    title: 'Board',
    accent: 'Directors',
    subtitle: 'Dedicated leaders ensuring strategic excellence and visionary guidance for our organization',
    members: boardMembers,
  },
};

const tabs: { id: View; label: string }[] = [
  { id: 'executive', label: 'Executive Committee' },
  { id: 'board', label: 'Board of Directors' },
];

/** Masked line that slides up into view */
const Line = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
  <span className="block overflow-hidden pb-[0.1em]">
    <motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay, ease: EASE }}>
      {children}
    </motion.span>
  </span>
);

/** Two-option segmented control with a sliding highlight */
const TabSwitch = ({
  active,
  onChange,
  layoutId,
  tone,
}: {
  active: View;
  onChange: (view: View) => void;
  layoutId: string;
  tone: 'dark' | 'light' | 'floating';
}) => {
  const onDark = tone !== 'light';
  return (
  <div
    role="tablist"
    aria-label="Committee"
    className={`grid-cols-2 rounded-full p-1 ${
      tone === 'floating' ? 'inline-grid' : 'grid w-full sm:inline-grid sm:w-auto'
    } ${
      tone === 'dark'
        ? 'bg-white/[0.06] ring-1 ring-white/15 backdrop-blur-md'
        : tone === 'floating'
          ? 'bg-[#061634]/95 shadow-[0_24px_50px_-12px_rgba(6,22,52,.65)] ring-1 ring-white/10 backdrop-blur-xl'
          : 'bg-white shadow-[0_18px_40px_-20px_rgba(6,22,52,.45)] ring-1 ring-slate-900/[0.07]'
    }`}
  >
    {tabs.map((tab) => {
      const selected = tab.id === active;
      return (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={selected}
          onClick={() => onChange(tab.id)}
          className="relative rounded-full px-3 py-2.5 text-[13px] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2c14e] sm:px-6 sm:text-sm"
        >
          {selected && (
            <motion.span
              layoutId={layoutId}
              className={`absolute inset-0 rounded-full ${onDark ? 'bg-[#f2c14e]' : 'bg-[#061634]'}`}
              transition={{ type: 'spring', stiffness: 380, damping: 34 }}
            />
          )}
          <span
            className={`relative z-10 transition-colors duration-300 ${
              selected
                ? onDark ? 'text-[#061634]' : 'text-white'
                : onDark ? 'text-white/75 hover:text-white' : 'text-slate-500 hover:text-[#061634]'
            }`}
          >
            {tab.label}
          </span>
        </button>
      );
    })}
  </div>
  );
};

/** Portrait card that shows a soft placeholder until the photo has loaded */
const MemberCard = ({ member, id, eager }: { member: Member; id: string; eager: boolean }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <article
      id={id}
      className={`group relative flex h-full scroll-mt-40 flex-col overflow-hidden rounded-2xl bg-white shadow-[0_24px_50px_-32px_rgba(6,22,52,.45)] ring-1 ring-slate-900/[0.06] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_70px_-34px_rgba(6,22,52,.5)] sm:rounded-[20px]`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(165deg,#f4f6fa_0%,#e3eaf4_55%,#d5dfee_100%)]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[14%] h-3/5 w-3/4 -translate-x-1/2 rounded-full bg-white/80 blur-3xl transition-colors duration-700 group-hover:bg-[#f2c14e]/30"
        />

        {!loaded && <div aria-hidden="true" className="committee-shimmer absolute inset-0" />}

        <img
          ref={imgRef}
          src={member.image}
          alt={member.name}
          width={800}
          height={1000}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`relative h-full w-full origin-bottom object-cover object-top transition-[opacity,transform,filter] duration-700 ease-out group-hover:scale-[1.04] ${
            loaded ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-3 opacity-0 blur-md'
          }`}
        />
      </div>

      <div className="relative flex flex-1 flex-col px-4 pb-5 pt-3 sm:px-5 sm:pb-6">
        <p className="text-[10px] font-bold uppercase leading-snug tracking-[.14em] text-[#b8862b] sm:text-[11px] sm:tracking-[.18em]">
          {member.position}
        </p>
        <h3 className="mt-1.5 text-[15px] font-bold leading-snug tracking-[-.01em] text-[#061634] sm:text-base">
          {member.name}
        </h3>
      </div>

      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#f2c14e] transition-transform duration-700 ease-out group-hover:scale-x-100"
      />
    </article>
  );
};

const CommitteeBoard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeView: View = searchParams.get('view') === 'executive' ? 'executive' : 'board';
  const current = views[activeView];
  const scrollToMembers = useRef(false);
  const inlineSwitchRef = useRef<HTMLDivElement>(null);
  const membersRef = useRef<HTMLElement>(null);
  const [showFloating, setShowFloating] = useState(false);

  // Show a floating switch once the in-page one has scrolled away, while the member list is on screen
  useEffect(() => {
    const update = () => {
      const switchBox = inlineSwitchRef.current?.getBoundingClientRect();
      const membersBox = membersRef.current?.getBoundingClientRect();
      if (!switchBox || !membersBox) return;
      setShowFloating(switchBox.bottom < 90 && membersBox.bottom > window.innerHeight + 40);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const switchView = (view: View, fromMembers = false) => {
    if (view === activeView) return;
    scrollToMembers.current = fromMembers;
    setSearchParams({ view });
  };

  // The app scrolls to the top on every URL change; when switching from the member list, return to it
  useEffect(() => {
    if (!scrollToMembers.current) return;
    scrollToMembers.current = false;
    document.getElementById('members')?.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' });
  }, [activeView]);

  // Quietly fetch the other tab's portraits once the page is idle, so switching feels instant
  useEffect(() => {
    const other = views[activeView === 'executive' ? 'board' : 'executive'].members;
    const warm = () => other.forEach((member) => {
      const img = new Image();
      img.src = member.image;
    });
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    if (w.requestIdleCallback) w.requestIdleCallback(warm);
    else window.setTimeout(warm, 1500);
  }, [activeView]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-[#f7f6f2] text-[#061634] selection:bg-[#f2c14e] selection:text-[#061634]">
        <style>{`
          @keyframes committee-shimmer { from { transform: translateX(-100%); } to { transform: translateX(100%); } }
          .committee-shimmer { overflow: hidden; }
          .committee-shimmer::after {
            content: ''; position: absolute; inset: 0;
            background: linear-gradient(100deg, transparent 20%, rgba(255,255,255,.65) 50%, transparent 80%);
            animation: committee-shimmer 1.4s ease-in-out infinite;
          }
          @media (prefers-reduced-motion: reduce) { .committee-shimmer::after { animation: none; } }
        `}</style>
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

            <div className="mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-44">
              <div className="max-w-3xl">
                <AnimatePresence mode="wait">
                  <motion.div key={activeView} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
                    <motion.p
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
                      className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.26em] text-[#f2c14e] sm:mb-8 sm:text-xs sm:tracking-[.3em]"
                    >
                      <span className="h-px w-8 bg-[#f2c14e] sm:w-10" /> {current.eyebrow}
                    </motion.p>
                    <h1 className="text-[clamp(2.9rem,7.6vw,6.4rem)] font-extrabold leading-[.95] tracking-[-.045em]">
                      <Line delay={0.1}>{current.title}</Line>
                      <Line delay={0.2}>
                        <span className="font-accent italic text-[#f2c14e]">{current.accent}</span>
                      </Line>
                    </h1>
                    <motion.p
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
                      className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:mt-8 sm:text-xl sm:leading-9"
                    >
                      {current.subtitle}
                    </motion.p>
                  </motion.div>
                </AnimatePresence>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
                  className="mt-10"
                >
                  <TabSwitch active={activeView} onChange={(view) => switchView(view)} layoutId="committee-hero-tab" tone="dark" />
                </motion.div>
              </div>

            </div>
          </section>

          {/* Members */}
          <section ref={membersRef} id="members" className="scroll-mt-24 pb-24 pt-10 sm:pb-32 sm:pt-14">
            <div ref={inlineSwitchRef} className="mx-auto mb-10 flex max-w-7xl justify-center px-5 sm:mb-14 sm:px-8">
              <TabSwitch active={activeView} onChange={(view) => switchView(view, true)} layoutId="committee-sticky-tab" tone="light" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeView}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={{
                    enter: { opacity: 0 },
                    center: { opacity: 1, transition: { staggerChildren: 0.06 } },
                    exit: { opacity: 0, transition: { duration: 0.2 } },
                  }}
                  className="flex flex-wrap justify-center gap-3 sm:gap-5 lg:gap-6"
                >
                  {current.members.map((member, index) => {
                    const id = `member-${activeView}-${index}`;
                    return (
                      <motion.div
                        key={member.name}
                        className="w-[calc((100%-0.75rem)/2)] sm:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-4.5rem)/4)] xl:w-[calc((100%-6rem)/5)]"
                        variants={{
                          enter: { opacity: 0, y: 28 },
                          center: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
                          exit: { opacity: 0 },
                        }}
                      >
                        <MemberCard member={member} id={id} eager={index < 6} />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        </main>

        <AnimatePresence>
          {showFloating && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-4 sm:bottom-8"
            >
              <div className="pointer-events-auto">
                <TabSwitch active={activeView} onChange={(view) => switchView(view, true)} layoutId="committee-floating-tab" tone="floating" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </MotionConfig>
  );
};

export default CommitteeBoard;
