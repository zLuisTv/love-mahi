'use client'

import { Averia_Sans_Libre } from 'next/font/google'
import { Chronometer } from '../components/time'
import { Galery } from '../components/galery'

const font_o = Averia_Sans_Libre({
  subsets: ["latin"],
  weight: '400'
})

export default function Home() {
  return (
    <main className='absolute w-full bg-fixed bg-cover'>

      <section className='flex flex-col mt-5 w-auto h-[775px] items-center text-center text-black bg-[url("../public/Flores-amarillas.jpg")] bg-fixed bg-cover mobile-s:h-[615px]'>

        <div className="mt-24 text-center">
          <h1 className="text-7xl uppercase text-white">I Love this day</h1>
          <h2 className="text-2xl text-white">25th of each month</h2>
        </div>

        <div className="flex items-center justify-center w-auto px-8 h-[150px] from-orange-400 to-yellow-300 bg-gradient-radial  rounded-xl shadow-neutral-600 shadow-lg mobile-s:max-w-[295px] mobile-s:max-h-[110px] mobile-l:max-w-[345px] mobile-l:max-h-[90px]">

          <div className="flex text-center">
            <Chronometer />
          </div>

        </div>

      </section>

      <section className='flex flex-col h-[1600px] mt-[42px] px-24 bg-white items-center mobile-s:mt-5 mobile-s:h-[5250px] mobile-l:h-[5250px] '>

        <div className='flex bg-gradient-to-bl to-red-300 via-yellow-200 from-orange-500 w-max p-4 rounded-xl'>
          <p className={`${font_o.className} text-black text-[60px] uppercase mobile-s:text-[20px] mobile-l:text-[25px]`}>Every Photo, an Emotion</p>
        </div>

        <div className='w-[100%] pt-10 text-center mobile-s:pt-1 mobile-l:pt-1'>

          <Galery />

        </div>

      </section>

    </main >
  )
}
