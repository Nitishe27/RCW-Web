import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import RCWLogo from '../Pictures/RCW  logo.png';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Avenue', path: '/avenue' },
  { name: 'Formalities', path: '/formality' },
];

const socials = [
  { name: 'Facebook', href: 'https://web.facebook.com/RotaractClubOfWellawatte', icon: Facebook, hover: 'hover:bg-[#1877f2] hover:ring-[#1877f2]' },
  { name: 'Instagram', href: 'https://www.instagram.com/rac_wellawatte/?hl=en', icon: Instagram, hover: 'hover:bg-[#d62976] hover:ring-[#d62976]' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rotaract-club-of-wellawatte-027890318/', icon: Linkedin, hover: 'hover:bg-[#0a66c2] hover:ring-[#0a66c2]' },
];

const column = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const headingClass = 'mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[.24em] text-[#f2c14e]';

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden bg-[#061634] text-white">
      <div aria-hidden="true" className="absolute -left-40 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#0b3d91]/40 blur-[130px]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f2c14e]/50 to-transparent" />

      <div className="mx-auto max-w-[1440px] px-5 pt-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <motion.div {...column(0)} className="sm:col-span-2 lg:col-span-4">
            <img src={RCWLogo} alt="Rotaract Club of Wellawatte" className="mb-7 h-14 w-auto brightness-0 invert" />
            <p className="max-w-sm text-[15px] leading-7 text-slate-300">
              Empowering young leaders to create positive change through service, fellowship, and professional development.
            </p>
          </motion.div>

          <motion.div {...column(0.08)} className="lg:col-span-2 lg:col-start-6">
            <h3 className={headingClass}>Quick Links</h3>
            <ul className="space-y-3.5 text-[15px]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="group inline-flex items-center gap-1.5 text-slate-300 transition-colors hover:text-white">
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[#f2c14e] transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                    <ArrowUpRight size={13} className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...column(0.16)} className="lg:col-span-3">
            <h3 className={headingClass}>Contact Info</h3>
            <ul className="space-y-4 text-[15px]">
              <li>
                <a href="mailto:rotaractclubofwellawatte1987@gmail.com" className="group flex items-start gap-3 text-slate-300 transition-colors hover:text-white">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[#f2c14e] ring-1 ring-white/10 transition-colors group-hover:bg-[#f2c14e] group-hover:text-[#061634]">
                    <Mail size={15} />
                  </span>
                  <span className="break-all pt-1">rotaractclubofwellawatte1987@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+94702986858" className="group flex items-center gap-3 text-slate-300 transition-colors hover:text-white">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[#f2c14e] ring-1 ring-white/10 transition-colors group-hover:bg-[#f2c14e] group-hover:text-[#061634]">
                    <Phone size={15} />
                  </span>
                  +94 70 298 6858
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div {...column(0.24)} className="lg:col-span-2">
            <h3 className={headingClass}>Follow Us</h3>
            <div className="flex gap-3">
              {socials.map(({ name, href, icon: Icon, hover }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-1 ${hover}`}
                >
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-center justify-between gap-6 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-center text-sm text-slate-400 sm:text-left">© 2026 Rotaract Club of Wellawatte. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="group flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/20 transition-colors hover:bg-[#f2c14e] hover:text-[#061634] hover:ring-[#f2c14e]"
          >
            <ArrowUp size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
