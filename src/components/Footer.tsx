
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Users, Calendar } from 'lucide-react';
import RCWLogo from '../Pictures/RCW  logo.png';
import MagicOfRotary from '../Pictures/Magic Of rotary.png';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
          
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering young leaders to create positive change through service, fellowship, and professional development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="/Avenue" className="text-gray-400 hover:text-white transition-colors">Avenue</a></li>
              <li><a href="/formailty" className="text-gray-400 hover:text-white transition-colors">Formalities</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-red-500" />
                <span className="text-gray-400">rotaractclubofwellawatte1987@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Users size={16} className="text-red-500" />
                <span className="text-gray-400">+94 77 432 0482</span>
              </li>
             
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
  {/* Facebook */}
  <a
    href="https://web.facebook.com/RotaractClubOfWellawatte"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
  >
    <Facebook size={20} className="text-white" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/rac_wellawatte/?hl=en"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center hover:opacity-90 transition"
  >
    <Instagram size={20} className="text-white" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/rotaract-club-of-wellawatte-027890318/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
  >
    <Linkedin size={20} className="text-white" />
  </a>
</div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Rotaract Club of Wellawatte. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
