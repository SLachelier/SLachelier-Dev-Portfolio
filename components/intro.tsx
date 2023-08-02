import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <section>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <Image src='/pfp.png' alt='A portrait of Shauna Lachelier' width='192' height='192' quality='95' priority={true} className='h-24 w-24 rounded-full object-cover shadow-xl'/>
          
        </div>
      </div>
    </section>
  )
}
