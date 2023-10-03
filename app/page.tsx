'use client'
import './globals.css'
import { Averia_Sans_Libre } from 'next/font/google'
import { Chronometer } from '../components/time'
import { Galery } from '../components/galery'

import Link from 'next/link'


const font_o = Averia_Sans_Libre({
  subsets: ["latin"],
  weight: '400'
})

export default function Home() {


  return (<>
    <nav className='fixed flex z-50 w-full bg-gray-800 bg-opacity-70 items-center justify-around'>

      <div className='flex p-5 gap-5 text-center font-light'>

        <span>
          I love you
        </span>

        <span>
          You are my sunshine
        </span>

        <span>
          You complete me
        </span>

        <span className='mobile-s:hidden mobile-m:hidden mobile-l:hidden'>
          You are my everything
        </span>

        <span className='mobile-s:hidden mobile-m:hidden max-sm:hidden'>
          I'm grateful for you
        </span>

      </div>

    </nav>

    <main className='absolute w-full'>

      <section className='flex flex-col w-full pb-[410px] pt-10 items-center text-center text-black bg-[url("../public/background.jpg")] bg-fixed bg-cover'>

        <div className="mt-[135px] text-center">
          <h1 className="text-7xl uppercase text-white">I Love this day</h1>
          <h2 className="text-2xl text-white">25th of each month</h2>
        </div>

        <div className="flex backdrop-blur-sm scale-110 rounded-xl shadow-neutral-600 shadow-lg">

          <div className="flex text-center p-4">
            <Chronometer />
          </div>

        </div>

      </section>

      <section className='flex flex-col mt-14 bg-white items-center'>

        <div className='flex text-center bg-gradient-to-b to-sky-100 via-slate-500 from-blue-300 p-4 rounded-xl'>
          <p className={`${font_o.className} text-black text-2xl `}>Every Photo, an Emotion</p>
        </div>

        <div className='w-full pt-10 text-center'>

          <Galery />

        </div>

        <div className='my-10 bg-[url("../public/bg-player.jpg")] rounded-xl shadow-md shadow-blue-300'>
          <Link
            href={"/music"}
          >
            <div className='py-5 px-14 my-2 mx-2 text-center rounded-xl backdrop-blur-sm'>
              <span className='text-xl font-light'>Reproductor de Música</span>
            </div>
          </Link>
        </div>

      </section>

    </main >
  </>)
}
