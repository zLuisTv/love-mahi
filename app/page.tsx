'use client'

import './globals.css'
import { Averia_Sans_Libre } from 'next/font/google'
import Chronometer from '../components/Home/Time'
import Galery from '../components/Home/Galery'
import Navigation from '../components/Home/Navigation'
import Link from 'next/link'
import React, { useState } from 'react'


const font_o = Averia_Sans_Libre({
  subsets: ["latin"],
  weight: '400'
})

const Home: React.FC = () => {


  const [dark, setDark] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDark(!dark);
  }


  return (
    <main className={` ${dark ? 'dark' : ''} `}>

      <Navigation dark={dark} toggleDark={toggleDarkMode}/> 

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

        </section>

        <section className='flex flex-col mt-14 bg-white items-center dark:bg-neutral-800'>

          <div className='flex text-center bg-gradient-to-b to-sky-100 via-slate-500 from-blue-300 p-4 rounded-xl shadow-md shadow-black dark:shadow-white'>
            <p className={`${font_o.className} text-2xl `}>Every Photo, an Emotion</p>
          </div>

          <div className='w-full pt-10 text-center'>

            <Galery />

          </div>

          <div className='my-10 bg-[url("../public/bg-player.jpg")] rounded-xl shadow-md shadow-blue-300 hover:shadow-black hover:cursor-pointer dark:shadow-white'>
            <Link
              href={"/music"}
            >
              <div className='py-3 px-12 my-2 mx-2 text-center rounded-xl backdrop-blur-sm'>
                <span className='text-2xl font-light'>Reproductor de Música</span>
              </div>
            </Link>
          </div>

        </section>

      </section>
    </main>)
}

export default Home;