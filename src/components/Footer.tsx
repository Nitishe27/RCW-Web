
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Users, Calendar } from 'lucide-react';
import RCWLogo from '../Pictures/RCW  logo.png';
import MagicOfRotary from '../Pictures/Magic Of rotary.png';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#071b3b] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
          
            <img src={RCWLogo} alt="Rotaract Club of Wellawatte" className="mb-6 h-14 w-auto brightness-0 invert" />
            <p className="max-w-xs text-sm leading-relaxed text-slate-300">
              Empowering young leaders to create positive change through service, fellowship, and professional development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[.18em] text-amber-300">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="text-slate-300 transition-colors hover:text-white">Home</a></li>
              <li><a href="/about" className="text-slate-300 transition-colors hover:text-white">About Us</a></li>
              <li><a href="/projects" className="text-slate-300 transition-colors hover:text-white">Projects</a></li>
              <li><a href="/Avenue" className="text-slate-300 transition-colors hover:text-white">Avenue</a></li>
              <li><a href="/formality" className="text-slate-300 transition-colors hover:text-white">Formalities</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[.18em] text-amber-300">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="shrink-0 text-amber-300" />
                <span className="text-slate-300">rotaractclubofwellawatte1987@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Users size={16} className="shrink-0 text-amber-300" />
                <span className="text-slate-300">+94 77 432 0482</span>
              </li>
             
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[.18em] text-amber-300">Follow Us</h3>
            <div className="flex space-x-4">
  {/* Facebook */}
  <a
    href="https://web.facebook.com/RotaractClubOfWellawatte"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#1877f2]"
  >
    <Facebook size={20} className="text-white" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/rac_wellawatte/?hl=en"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#d62976]"
  >
    <Instagram size={20} className="text-white" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/rotaract-club-of-wellawatte-027890318/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#0a66c2]"
  >
    <Linkedin size={20} className="text-white" />
  </a>
</div>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © 2026 Rotaract Club of Wellawatte. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
