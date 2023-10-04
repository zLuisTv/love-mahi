'use client'

import './globals.css'
import { Averia_Sans_Libre } from 'next/font/google'
import Chronometer from '../components/Home/Time'
import Galery from '../components/Home/Galery'
import Navigation from '../components/Home/Navigation'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { getDarkModeFromLocalStorage, setDarkModeToLocalStorage } from '../components/Theme/ThemeUtil';


const font_o = Averia_Sans_Libre({
  subsets: ["latin"],
  weight: '400'
})

const Home: React.FC = () => {


  const [dark, setDark] = useState<boolean>(getDarkModeFromLocalStorage());

  const toggleDarkMode = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    setDarkModeToLocalStorage(newDarkMode);
  }

  useEffect(() => {
    // Actualiza el estado del tema oscuro cuando cambies de página.
    const storedDarkMode = getDarkModeFromLocalStorage();
    if (dark !== storedDarkMode) {
      setDark(storedDarkMode);
    }
  }, []);


  return (
    <main className={` ${dark ? 'dark' : ''} `}>

      <Navigation dark={dark} toggleDark={toggleDarkMode} />

      <section className='absolute w-full dark:bg-neutral-800 text-white dark:text-black'>

        <section className='flex flex-col w-full pb-[410px] pt-10 items-center text-center bg-[url("../public/background.jpg")] bg-fixed bg-cover'>

          <div className="mt-[135px] text-center">
            <h1 className="text-7xl uppercase">I Love this day</h1>
            <h2 className="text-2xl">25th of each month</h2>
          </div>

          <div className="flex backdrop-blur-sm scale-110 rounded-xl shadow-white shadow-lg dark:shadow-black">

            <div className="flex text-center p-4">
              <Chronometer />
            </div>

          </div>

          <div className='mt-36 bg-[url("../public/background.jpg")] rounded-xl shadow-md shadow-white hover:shadow-black hover:cursor-pointer dark:shadow-slate-950 dark:hover:shadow-slate-600'>
            <Link
              href={"/music"}
            >
              <div className='p-4 text-center rounded-xl backdrop-blur-sm'>
                <svg 
                width="50px" 
                height="50px" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 12V7V2" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                  <circle cx="9" cy="18" r="4" stroke="#1C274C" stroke-width="1.5" />
                  <path d="M19 8C15.6863 8 13 5.31371 13 2" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </div>
            </Link>
          </div>

        </section>

        <section className='flex flex-col mt-14 bg-white items-center dark:bg-neutral-800'>

          <div className='flex text-center text-black bg-slate-200 p-4 rounded-xl shadow-lg shadow-black dark:shadow-white dark:bg-neutral-800 dark:text-white'>
            <p className={`${font_o.className} text-2xl `}>Every Photo, an Emotion</p>
          </div>

          <div className='w-full pt-10 text-center'>

            <Galery />

          </div>


        </section>

      </section>
    </main>)
}

export default Home;