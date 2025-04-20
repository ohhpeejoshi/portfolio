"use client"
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { saveAs } from "file-saver";

const HeroSection = () => {
    const saveFile = () => {
        saveAs(
            "/Arpit_Resume.pdf", "Arpit_Resume"
        );
    };

    return (
        <section id="About">
            <div className={'grid grid-cols-1 sm:grid-cols-12 mx-auto'}>
                <div className={'col-span-7 place-self-center text-center order-2 sm:order-1'}>

                    <h1 className={'text-white mt-4 mb-4 text-2xl sm:text-3xl lg:text-6xl font-extrabold'}>
                        Hello, I&apos;m <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            <TypeAnimation
                                sequence={[
                                    'Arpit Joshi',
                                    1000,
                                    'A Student',
                                    1000,
                                    'A Developer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '1em', display: 'inline' }}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    <p className={'text-[#ADB7BE] text-md mb-6 sm:text-lg lg:text-md mx-auto mt-10'}>
                        <span className='font-bold'>Welcome to my portfolio website!</span>
                        <br /> With a strong foundation in Computer Science, I am passionate about turning theory into practical solutions for real challenges. I stay current with industry trends while delivering high-quality, impactful work. I value technical excellence and collaborative leadership, approaching each project as an opportunity to innovate. My goal is to advance our field through purposeful application of technology while supporting the growth of those around me.
                    </p>
                    <div>
                        <button className={'mr-1 px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'}>
                            <Link className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2' href={'#contact'}>
                                Let&apos;s Connect
                            </Link>
                        </button>
                        <button className={'ml-1 px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'} onClick={saveFile}>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                                Download CV
                            </span>
                        </button>
                    </div>
                </div>

                <div className={'col-span-5 place-self-center lg:mt-0 order-1 sm:order-2'}>
                    <div className={'mx-auto lg:ml-20 rounded-full bg-[#313131] w-[220px] h-[220px] lg:w-[350px] lg:h-[350px] relative'}>
                        <Image
                            src={'/images/arpit_new.jpg'}
                            alt={'image'}
                            className={'absolute w-[220px] h-[220px] lg:w-[350px] lg:h-[350px] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'}
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;