import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shauna Lachelier | Portfolio',
  description: 'Shauna Lachelier is a full-stack developer with 3 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-slate-200 text-[#4E4674] relative pt-28 sm:pt-36`}>
        <div className='bg-[#c863be] absolute top-[-4rem] right-[4rem] -z-10 h-[50rem] w-[31.25rem] blur-[10rem] sm:w-[69.75rem] animate-[pulse_6s_ease-in-out_infinite]'></div>
        <div className='bg-[#57AEC9] absolute top-[0rem] left-[-20rem] -z-10 h-[50rem] w-[31.25rem] blur-[10rem] sm:w-[69.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] animate-[pulse_6s_ease-in-out_infinite]'></div>
        <div className='bg-[#82C2BA] absolute top-[-2rem] right-[20rem] -z-10 h-[50rem] w-[14.25rem] blur-[10rem] sm:w-[69.75rem] animate-[pulse_8s_ease-in-out_infinite]'></div>
        
        <ActiveSectionContextProvider>
          <Header/>
          {children}
        </ActiveSectionContextProvider>
        </body>
    </html>
  )
}
