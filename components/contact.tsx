"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from "@/server_actions/sendEmail";
import toast from 'react-hot-toast';
import SubmitBtn from './contact-submit-btn';


export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section ref={ref} id='contact' className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 1,
    }}
    viewport={{
      once: true,
    }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className='text-[#382F74] -mt-5 dark:text-white/60'>Please contact me directly at <a className='underline' href='mailto:slachelier@gmail.com'>slachelier@gmail.com</a> or through this form.</p>

      <form className='mt-10 flex flex-col' action={async (formData) => {
        const { data, error } = await sendEmail(formData);

        if(error) {
          toast.error(error);
          return;
        }

        toast.success('Email successfully sent.')
      }}>
        <input className='h-14 rounded-lg border borderBlack outline-none focus:bg-[#F4F6F9] px-4 dark:bg-white/10 dark:focus:bg-white/5' maxLength={400} name='senderEmail' type='email' required={true} placeholder='Your email address'/>
        <textarea className='h-52 my-3 rounded-lg borderBlack p-4 outline-none focus:bg-[#F4F6F9] dark:bg-white/10 dark:focus:bg-white/5' required={true} maxLength={2500} name='message' placeholder='Your message'/>
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
