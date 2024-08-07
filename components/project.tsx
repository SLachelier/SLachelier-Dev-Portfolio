'use client';

import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { projectsData } from '@/lib/data';

type ProjectProps = typeof projectsData[number];

export default function Project({ title, tgtLink, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  return (
    <motion.div ref={ref} style={{ scale: scrollYProgress, opacity: scrollYProgress}} className='mb-3 sm:mb-8 last:mb-0'>

      <section className='group bg-[#FEFEFE] max-w-[42rem] border rounded-[.25rem] border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] even:pl-8 hover:bg-[#DFE0F1] transition dark:bg-white/10 dark:hover:bg-white/20 '>
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex-wrap sm:max-w-[50%] min-[320px]:max-w-[50%] md:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
          <h3 className='text-2xl font-semibold'><a href={tgtLink}>{title}</a></h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/60'>{description}</p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={index}>{tag}</li>
            ))}
          </ul>
          </div>

        <Image src={imageUrl} alt={title} quality={95} 
        className='absolute top-8 -right-60 w-[28.25rem] rounded-t-lg shadow-2xl transition 
        group-hover:scale-105 
        group-hover:-translate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2 

        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2 

        group-even:right-[initial] 
        group-even:-left-40 ' />
      </section>
      
    </motion.div>
  );
}