import React from 'react';
import Morelink from './Morelink';

const More = () => {
    return (
        <section className='mt-[10px] rounded-xl md:py-10 py-7 md:w-3/4 w-full mx-auto flex-col flex gap-5 lg:flex-cols-2' id="journey">
            <div className='bg-[#313131] w-full p-6 rounded-xl items-center text-center'>
            <span className='text-xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Coding Journey</span>
                <p className='mt-7 px-5 text-md text-[#ADB7BE]'>
                My programming path has been a thrilling evolution of development and discovery. Starting with C/C++ fundamentals in my freshman year, I established core coding principles. Sophomore year saw me progress to data structures and algorithms, sharpening my analytical abilities. Junior year, I expanded into web and application development, creating engaging and original solutions. I also ventured into UI/UX design, incorporating artistic elements into my technical repertoire. This journey has molded me into an enthusiastic and inquisitive developer, constantly seeking new knowledge and innovations.
                </p>
                <div className='flex w-3/4 mx-auto mt-2 justify-center'>
                    <Morelink href='https://github.com/ohhpeejoshi' path='/images/github-mark-white.png' />
                    <Morelink href='https://leetcode.com/u/ohhpeejoshi/' path='/images/leeetcode.png' />
                    {/* <Morelink href='https://www.geeksforgeeks.org/user/chilliawaz/' path='/images/gg.jpg' /> */}
                </div>

            </div>
        </section>
    )
}

export default More;