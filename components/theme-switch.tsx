'use client';

import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '@/context/theme_context';


export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className='fixed right-5 bottom-5 bg-white w-[2.5rem] h-[2.5rem] bg-opacity-65 border-opacity-40 shadow-2xl backdrop-blur-[0.5rem] border border-white rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
      onClick={toggleTheme}>
      {theme === 'light' ? (<BsSun/>) : (<BsMoon/>)}
    </button>
  );
}
