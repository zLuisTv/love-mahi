'use client'
import '../app/globals.css';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faAngleLeft, faBackward, faForward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'


export function MusicPlayer() {

    const onLoadedMetadata = () => {
        
    }

    

    const [isPlaying, setIsPlaying] = useState(false);

    

    return (
        <div className='flex w-full h-screen bg-[#333] items-center justify-center flex-wrap'>

            <div className='bg-[#FFE0E5] w-[400px] py-[25px] px-[35px] text-center'>

                <nav className='flex justify-between mb-[30px]'>

                    <div className='rounded-[50%] w-10 h-10 leading-10 bg-[#FFF] text-[#F53192] shadow-[0_5px_10px_rgba(255,26,26,0.22)]'>

                        <FontAwesomeIcon
                            icon={faAngleLeft}
                        />

                    </div>

                    <div className='rounded-[50%] w-10 h-10 leading-10 bg-[#FFF] text-[#F53192] shadow-[0_5px_10px_rgba(255,26,26,0.22)]'>

                        <FontAwesomeIcon
                            icon={faBars}
                        />

                    </div>
                </nav>

                <div className='flex flex-col justify-center items-center'>

                    <Image
                        className='flex w-56 h-56 rounded-[50%] border-[8px] border-[#FFF] shadow-[0_10px_60px_rgba(255,26,26,0.22)] text-center'
                        src={'/sunshine/music-bg.jpg'}
                        width={220}
                        height={220}
                        alt=''
                    />

                    <h1 className='text-xl font-normal text-[#333] mt-5'>We fell in love in october</h1>
                    <p className='text-sm text-[#333]'>Girl in red</p>

                    <audio controls id='song' onLoadedMetadata={onLoadedMetadata}>
                        <source src='/audio/music.mp3' type='audio/mpeg' />
                    </audio>

                    <input id='bar-progress' className='appearance-none  w-full h-[6px] bg-[#F53192] rounded cursor-pointer my-10 mx-0' type="range" value={0} />

                    <div className='flex justify-center items-center'>

                        <div className='w-[60px] h-[60px] m-5 bg-[#fff] inline-flex items-center justify-center rounded-[50%] text-[#F53192] shadow-[0_10px_20px_rgba(255,26,26,0.22)] cursor-pointer'>
                            <FontAwesomeIcon icon={faBackward} />
                        </div>

                        <div className='w-[60px] h-[60px] m-5 bg-[#F53192] inline-flex items-center justify-center rounded-[50%] text-[#FFF] shadow-[0_10px_20px_rgba(255,26,26,0.22)] cursor-pointer scale-150' >
                            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} id='ctrlIcon' />
                        </div>

                        <div className='w-[60px] h-[60px] m-5 bg-[#fff] inline-flex items-center justify-center rounded-[50%] text-[#F53192] shadow-[0_10px_20px_rgba(255,26,26,0.22)] cursor-pointer'>
                            <FontAwesomeIcon icon={faForward} />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}