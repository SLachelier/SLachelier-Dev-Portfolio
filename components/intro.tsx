"use client"; //converts to a client component

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';
import { HiDownload } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const handMotion = {
    rest: { opacity: 1, ease: "easeIn", duration: 0.2, type: "tween" },
    hover: {
      rotate: 90,
      repeat: 3, 
      animate: {
        transition: {
          repeatType: "reverse", 
          duration: 0.6
        }
      }
    }
  };

  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[30rem]'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}>
            <Image src={"/slpicture.png"} alt='A portrait of Shauna Lachelier' width='192' height='192' quality='95' priority={true} className='h-24 w-24 rounded-full object-cover shadow-xl'/>
          </motion.div>
        </div>
      </div>


      <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <span className='font-bold'>Hello, I'm Shauna.</span> I am a <span className='font-bold'>front-end developer</span> with <span className='font-bold'>three years</span> of experience developing projects. <br/>I specialize in <span className='font-bold'>React (Next.js).</span>
      </motion.h1>

    <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Container initial="rest" whileHover="hover" animate="rest">
        <Link href='#contact' className='bg-[#382F74] text-[#FEFEFE] px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-[#C36CAC] active:scale-105 transition' onClick={ () => { setActiveSection('Contact'); setTimeOfLastClick(Date.now());}}>
          Contact me here 
          <HandContainer variants={handMotion}>
            <motion.div className='inline-block opacity-80'>
              👋
            </motion.div>
          </HandContainer>
        </Link>
      </Container>
      <a className='group bg-[#DFE0F1] text-[#382F74] px-7 py-3 flex items-center gap-2 rounded-full hover:scale-110 hover:bg-[#FEFEFE] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-gray-800 dark:text-[#ffffff] dark:border-white/10' href="/CV.pdf" download>
        Download My Resume <HiDownload className='opacity-80 group-hover:translate-y-0.5 transition'/>
      </a>
      <a className='bg-[#DFE0F1] text-[#555398] p-4 flex items-center gap-2 rounded-full hover:scale-[1.15] hover:bg-[#FEFEFE] active:scale-105 transition hover:text-[#382F74] dark:bg-gray-800 dark:text-[#8b85d3] dark:hover:text-[#ffffff]'
      href='https://linkedin.com/in/slachelier' target='_blank'>
        <BsLinkedin/>
      </a>
      <a className='bg-[#DFE0F1] text-[#555398] p-4 flex items-center gap-2 rounded-full text-[1.35rem] hover:scale-[1.15] hover:bg-[#FEFEFE] active:scale-105 transition hover:text-[#382F74] dark:text-[#8b85d3] dark:bg-gray-800 dark:hover:text-[#ffffff]'
      href='https://github.com/SLachelier/' target='_blank'>
        <FaGithubSquare/>
      </a>

    </motion.div>

    </section>
  )
}

const Container = styled(motion.div)`
  position: relative;
`;

const HandContainer = styled(motion.div)`
//container for animated hand here
  `;