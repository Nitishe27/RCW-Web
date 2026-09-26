
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  path?: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, path, index }) => {
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group h-full w-full border border-slate-200/80 border-t-4 border-t-[#0b3d91] bg-white p-7 shadow-[0_14px_40px_rgba(15,35,70,.06)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_22px_50px_rgba(15,35,70,.13)]"
    >
      <div className="mb-7 flex h-12 w-12 items-center justify-center bg-[#082b66] text-amber-300 shadow-[0_8px_20px_rgba(8,43,102,.18)] transition-colors duration-300 group-hover:bg-[#0b3d91]">
        <Icon size={24} />
      </div>
      <h3 className="mb-3 text-xl font-bold tracking-[-.02em] text-slate-900">{title}</h3>
      <p className="leading-7 text-slate-600">{description}</p>
    </motion.div>
  );

  return path ? <Link to={path} className="block h-full">{card}</Link> : card;
};

export default FeatureCard;
