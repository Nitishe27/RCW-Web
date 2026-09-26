import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import RCWLogo from '../Pictures/RCW  logo.png';
// import MagicOfRotary from '../Pictures/New Logo.png';
import Clublogo from '../Pictures/Club - Black.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Avenue', path: '/avenue' },
    { name: 'Contact', path: '/contact' },
    { name: 'Formality', path: '/formality' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 shadow-[0_8px_30px_rgba(7,27,59,.08)] backdrop-blur-xl">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex h-[76px] items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <Link to="/" className="flex items-center space-x-3">
              <img src={Clublogo} alt="RCW Logo" className="h-11 w-auto transition-transform duration-300 hover:scale-[1.03]" />
              {/* <div className="h-8 w-px bg-gray-300 mx-2" /> */}
              {/* <img src={MagicOfRotary} alt="Magic of Rotary" className="h-10 w-auto" /> */}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`relative rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-[#eaf1fb] text-[#0b3d91]'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-[#0b3d91]'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 overflow-hidden rounded-full">
                    <motion.span
                      className="block h-full w-full origin-center rounded-full bg-amber-400"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    />
                  </span>
                )}
              </Link>
            ))}
            <Link
              to="/committee/board?view=board"
              onClick={handleNavClick}
              className={`relative rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                location.pathname.startsWith('/committee')
                  ? 'bg-[#eaf1fb] text-[#0b3d91]'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-[#0b3d91]'
              }`}
            >
              Committee
              {location.pathname.startsWith('/committee') && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-amber-400"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '100%', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full p-2 text-slate-700 transition hover:bg-slate-100 hover:text-[#0b3d91] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-t border-slate-200/80 bg-white/95 md:hidden"
          >
              <div className="space-y-1 px-2 pb-4 pt-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`relative block rounded-xl px-4 py-3 text-base font-semibold transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-[#eaf1fb] text-[#0b3d91]'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#0b3d91]'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 overflow-hidden rounded-full">
                      <motion.span
                        className="block h-full w-full origin-center rounded-full bg-amber-400"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                      />
                    </span>
                  )}
                </Link>
              ))}
              <Link
                to="/committee/board?view=board"
                onClick={handleNavClick}
                className={`relative block rounded-xl px-4 py-3 text-base font-semibold transition-colors duration-200 ${
                  location.pathname.startsWith('/committee')
                    ? 'bg-[#eaf1fb] text-[#0b3d91]'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-[#0b3d91]'
                }`}
              >
                Committee
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
