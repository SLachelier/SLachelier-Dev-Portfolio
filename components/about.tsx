"use client"; //becoming a client component in order to use 'useEffect' for the motion.section

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function About() {
  const {ref, inView} = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section ref={ref} id='about' className='mb-5 max-w-[45rem] text-center leading-8 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}>

      <SectionHeading>About Me</SectionHeading>
      <p className='mb-3'>
      At the beginning of my journey, I taught myself <span className='font-medium'>Java</span> and <span className='font-medium'>Python</span> while pursuing a computer science degree. After my second year, I yearned for a faster-paced environment and enrolled in <span className='font-medium'>the full-stack coding bootcamp at the University of Texas in Austin.</span> After <span className='font-medium'>graduating at the top of my class</span> in my course, I continued to collaborate with my fellow graduates and built new web applications that solved every-day wants and needs.
      </p>
      <p>
      Software has nearly limitless potential to solve problems and create <span className='italic'>new</span> and <span className='italic'>better</span> experiences online. I want to be a part of learning and shaping that vast, evolving ocean of programming knowledge so that I can create even better websites and applications. My core stack is <span className='font-medium'>React, Next.js, Node.js and MongoDB.</span> Currently, I am teaching myself <span className='font-medium'>C#</span> and <span className='font-medium'>Three.js.</span>
      </p>

    </motion.section>
  )
}
