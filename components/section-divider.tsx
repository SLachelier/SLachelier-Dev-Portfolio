"use client"; //becoming a client component in order to use 'useEffect' for the motion.div

import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
      <motion.div className='bg-[#DFE0F1] my-24 h-20 w-1 rounded-full hidden sm:block'
      initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.125 }}></motion.div>
  );
}
