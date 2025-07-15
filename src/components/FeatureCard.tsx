
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-[#800000] hover:bg-[#d7a7b3] rounded-xl p-6 shadow-lg transition-colors duration-300"
      style={{ color: '#fff' }}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-[#800000] to-[#b03060] rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
