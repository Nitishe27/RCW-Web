import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Clublogo from '../Pictures/Club - Black.png';

type NavItem = {
  name: string;
  path: string;
  match: (pathname: string) => boolean;
};

const navItems: NavItem[] = [
  { name: 'Home', path: '/', match: (p) => p === '/' },
  { name: 'About', path: '/about', match: (p) => p === '/about' },
  { name: 'Projects', path: '/projects', match: (p) => p.startsWith('/projects') },
  { name: 'Avenue', path: '/avenue', match: (p) => p.toLowerCase() === '/avenue' },
  { name: 'Contact', path: '/contact', match: (p) => p === '/contact' },
  { name: 'Formality', path: '/formality', match: (p) => p === '/formality' },
  { name: 'Committee', path: '/committee/board?view=board', match: (p) => p.startsWith('/committee') },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setIsOpen(false);
  };

  // Transparent over pages that open with a dark hero, frosted glass everywhere else
  const darkHeroPaths = ['/', '/about', '/avenue', '/projects', '/contact', '/formality', '/committee/board'];
  const onDark = (darkHeroPaths.includes(location.pathname.toLowerCase()) && !scrolled) || isOpen;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
          onDark
            ? 'border-b border-transparent bg-transparent'
            : 'border-b border-slate-200/70 bg-white/80 shadow-[0_10px_40px_-12px_rgba(6,22,52,.18)] backdrop-blur-xl'
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex h-[76px] items-center justify-between gap-6">
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link to="/" onClick={handleNavClick} className="flex items-center" aria-label="Rotaract Club of Wellawatte, home">
                <img
                  src={Clublogo}
                  alt="RCW Logo"
                  className={`h-10 w-auto transition-[filter,transform] duration-500 hover:scale-[1.03] sm:h-11 ${
                    onDark ? 'brightness-0 invert' : ''
                  }`}
                />
              </Link>
            </motion.div>

            {/* Desktop navigation */}
            <div
              className={`hidden items-center rounded-full p-1 transition-colors duration-500 lg:flex ${
                onDark ? 'bg-white/[0.06] ring-1 ring-white/15 backdrop-blur-md' : 'bg-slate-900/[0.03] ring-1 ring-slate-900/[0.06]'
              }`}
            >
              {navItems.map((item) => {
                const active = item.match(location.pathname);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={handleNavClick}
                    aria-current={active ? 'page' : undefined}
                    className={`relative rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2c14e] ${
                      active
                        ? onDark ? 'text-[#061634]' : 'text-white'
                        : onDark ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-[#0b3d91]'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className={`absolute inset-0 rounded-full ${onDark ? 'bg-white' : 'bg-[#0b2a5b]'}`}
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="/contact"
                onClick={handleNavClick}
                className="group hidden items-center gap-2 rounded-full bg-[#f2c14e] py-1.5 pl-5 pr-1.5 text-[13.5px] font-bold text-[#061634] shadow-[0_8px_24px_-8px_rgba(242,193,78,.7)] transition-colors hover:bg-[#f6cf6e] xl:inline-flex"
              >
                Join Our Club
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#061634] text-[#f2c14e] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
                  onDark ? 'text-white ring-1 ring-white/25 hover:bg-white/10' : 'text-[#0b2a5b] ring-1 ring-slate-200 hover:bg-slate-100'
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Reading progress */}
        {!onDark && (
          <motion.div
            aria-hidden="true"
            style={{ scaleX: progress }}
            className="absolute bottom-[-1px] left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#f2c14e] to-[#0b3d91]"
          />
        )}
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: 'circle(0% at calc(100% - 44px) 38px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 44px) 38px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 44px) 38px)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[#061634] px-6 pb-10 pt-28 text-white lg:hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[#0b3d91] opacity-40 blur-3xl"
            />
            <ul className="relative">
              {navItems.map((item, index) => {
                const active = item.match(location.pathname);
                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.05, duration: 0.45, ease: 'easeOut' }}
                  >
                    <Link
                      to={item.path}
                      onClick={handleNavClick}
                      aria-current={active ? 'page' : undefined}
                      className="group flex items-baseline gap-4 border-b border-white/10 py-4"
                    >
                      <span className="w-6 text-xs font-semibold tabular-nums text-[#f2c14e]/70">0{index + 1}</span>
                      <span
                        className={`text-3xl font-bold tracking-[-.03em] transition-colors sm:text-4xl ${
                          active ? 'text-[#f2c14e]' : 'text-white group-hover:text-[#f2c14e]'
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="relative mt-auto pt-10"
            >
              <Link
                to="/contact"
                onClick={handleNavClick}
                className="flex w-full items-center justify-between rounded-full bg-[#f2c14e] py-2 pl-6 pr-2 font-bold text-[#061634]"
              >
                Join Our Club
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#061634] text-[#f2c14e]">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
