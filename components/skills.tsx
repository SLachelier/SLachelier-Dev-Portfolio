"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section id='skills' ref={ref} className='max-w-[53rem] scroll-mt-28 text-center'>
      <SectionHeading>My Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-[#382F74]'>
        {skillsData.map((skill, index) => (
            <motion.li className='bg-[#FEFEFE] border-black/[0.1] rounded-xl px-5 py-3' 
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            >
              {skill}
            </motion.li>
        ))}
      </ul>
    </section>
  )
}
