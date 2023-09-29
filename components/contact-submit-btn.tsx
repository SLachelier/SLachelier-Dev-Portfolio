import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus } from 'react-dom';

export default function SubmitBtn() {
  const { pending } = experimental_useFormStatus();
  return (
    <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#7FC0BC] text-[#FEFEFE] rounded-full outline-none transition-all hover:scale-110 hover:bg-[#6EB1C7] active:scale-105 disabled:scale-100 disabled:bg-opacity-65' disabled={pending}>
      { pending ? (<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>) : (
      <>

      Submit{' '}
      <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>{' '}</>
      )}

    </button>
  )
}