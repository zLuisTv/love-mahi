'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface NavigationProps {
    dark: boolean;
    toggleDark: () => void;
}


export default function Navigation({ dark, toggleDark }: NavigationProps) {

    const boxVariants = {
        checked: { rotateY: 360 },
    };


    return (
        <nav className={`fixed flex gap-2 z-50 w-full bg-white text-black bg-opacity-40 items-center justify-between dark:bg-gray-800 dark:bg-opacity-70 dark:text-white`}>

            <div
                onClick={toggleDark}
                className='borderGeradiant ml-2 flex h-14 w-14 items-center justify-center rounded-full bg-white bg-opacity-50 backdrop-blur-sm hover:cursor-pointer'
            >
                <motion.svg
                    initial={false}
                    animate={dark ? "checked" : "unchecked"}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill='none'
                    xmlns="http://www.w3.org/2000/svg"
                    className='focus:outline-none'
                >
                    {!dark ? (
                        <motion.path
                            transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
                            d="M12 24C8.66667 24 5.83333 22.8333 3.5 20.5C1.16667 18.1667 0 15.3333 0 12C0 8.66667 1.16667 5.83333 3.5 3.5C5.83333 1.16667 8.66667 0 12 0C12.3111 0 12.6169 0.0111112 12.9173 0.0333335C13.2178 0.0555557 13.512 0.0888888 13.8 0.133333C12.8889 0.777778 12.1609 1.61689 11.616 2.65067C11.0711 3.68444 10.7991 4.80089 10.8 6C10.8 8 11.5 9.7 12.9 11.1C14.3 12.5 16 13.2 18 13.2C19.2222 13.2 20.3444 12.9276 21.3667 12.3827C22.3889 11.8378 23.2222 11.1102 23.8667 10.2C23.9111 10.4889 23.9444 10.7831 23.9667 11.0827C23.9889 11.3822 24 11.688 24 12C24 15.3333 22.8333 18.1667 20.5 20.5C18.1667 22.8333 15.3333 24 12 24Z"
                            fill="#424040"
                            variants={boxVariants}
                        />
                    ) : (
                        <motion.path
                            transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
                            d="M12 24C8.66667 24 5.83333 22.8333 3.5 20.5C1.16667 18.1667 0 15.3333 0 12C0 8.66667 1.16667 5.83333 3.5 3.5C5.83333 1.16667 8.66667 0 12 0C12.3111 0 12.6169 0.0111112 12.9173 0.0333335C13.2178 0.0555557 13.512 0.0888888 13.8 0.133333C12.8889 0.777778 12.1609 1.61689 11.616 2.65067C11.0711 3.68444 10.7991 4.80089 10.8 6C10.8 8 11.5 9.7 12.9 11.1C14.3 12.5 16 13.2 18 13.2C19.2222 13.2 20.3444 12.9276 21.3667 12.3827C22.3889 11.8378 23.2222 11.1102 23.8667 10.2C23.9111 10.4889 23.9444 10.7831 23.9667 11.0827C23.9889 11.3822 24 11.688 24 12C24 15.3333 22.8333 18.1667 20.5 20.5C18.1667 22.8333 15.3333 24 12 24ZM12 21.3333C13.9556 21.3333 15.7111 20.7942 17.2667 19.716C18.8222 18.6378 19.9556 17.2324 20.6667 15.5C20.2222 15.6111 19.7778 15.7 19.3333 15.7667C18.8889 15.8333 18.4444 15.8667 18 15.8667C15.2667 15.8667 12.9387 14.9053 11.016 12.9827C9.09333 11.06 8.13245 8.73244 8.13333 6C8.13333 5.55556 8.16667 5.11111 8.23333 4.66667C8.3 4.22222 8.38889 3.77778 8.5 3.33333C6.76667 4.04444 5.36089 5.17778 4.28267 6.73333C3.20444 8.28889 2.66578 10.0444 2.66667 12C2.66667 14.5778 3.57778 16.7778 5.4 18.6C7.22222 20.4222 9.42222 21.3333 12 21.3333Z"
                            fill="#DADADA"
                            variants={boxVariants}
                        />
                    )}
                </motion.svg>
            </div>

            <div className='flex py-3 text-center font-light'>

                <span>
                    You light up my life every day with your love.
                </span>

            </div>

            <div
                className='borderGeradiant mr-2 flex h-14 w-14 items-center justify-center rounded-full bg-white bg-opacity-50 backdrop-blur-sm hover:cursor-pointer'>
                <svg
                    width="33px"
                    height="33px"
                    viewBox="0 0 24 24"
                    fill="#424040"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#424040"
                    />
                </svg>
            </div>

        </nav>
    );
}