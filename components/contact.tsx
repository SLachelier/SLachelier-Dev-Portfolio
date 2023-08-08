import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id='contact' className='mb-20 sm:mb-28 w-[min(100%, 38rem)]'>
      <SectionHeading>Contact Me</SectionHeading>

      <p className='text-[#382F74]'>Please contact me directly at <a className='underline' href='mailto:slachelier@gmail.com'>slachelier@gmail.com</a> or through this form.</p>

      <form className='mt-10 flex flex-col'>
        <input className='h-14 rounded-lg border borderBlack outline-none focus:bg-[#F4F6F9] px-4' type='email' placeholder='Your email address'/>
        <textarea className='h-52 my-3 rounded-lg borderBlack p-4 outline-none focus:bg-[#F4F6F9]' placeholder='Your message'/>
        <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#7FC0BC] text-[#FEFEFE] rounded-full outline-none transition-all hover:scale-110 hover:bg-[#6EB1C7] active:scale-105'>
          Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>
        </button>
      </form>
    </section>
  )
}
