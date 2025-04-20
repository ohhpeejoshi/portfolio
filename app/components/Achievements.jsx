import React from "react";
import Image from "next/image";

const Achievements = () => {
    return (
        <section
            className="mt-[50px] bg-[#313131] rounded-xl md:py-10 py-7 md:w-3/4 w-full mx-auto"
            id="achievements"
        >
            <div className="text-center text-[#ADB7BE]">
                <span className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Achievements
                </span>

                <div className="md:mt-9 w-5/6 mx-auto px-0 py-5 ">
                    <div className="md:flex justify-between">
                        <div className="text-left">
                            <h4 className="md:text-lg font-bold italic text-md">
                                Winners - Hack The Waste Hackathon, 2023
                            </h4>
                            <h6 className="text-sm mt-1 text-[#5f69cc] font-bold">
                                <a href="https://environment.rajasthan.gov.in/content/environment/en/rajasthan-state-pollution-control-board/information/Archive/WorldEnvironmentDay2023/Hackathon.html" target="_blank" rel="noopener noreferrer">
                                    Rajasthan State Pollution Control Board, India
                                </a>
                            </h6>
                        </div>
                        <div className="flex flex-col text-right">
                            <div className="flex">
                                <div>
                                    <Image
                                        src="/images/schedule.png"
                                        height={20}
                                        width={20}
                                        className="mx-1"
                                    ></Image>
                                </div>
                                <div className="italic text-sm">May 2023 - June 2023</div>
                            </div>

                            <div className="flex my-2 items-center md:justify-end">
                                <div>
                                    <Image
                                        src="/images/placeholder.png"
                                        height={20}
                                        width={20}
                                        className="mx-1"
                                    ></Image>
                                </div>
                                <div className="text-sm">Jaipur</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 text-left text-md">
                        <p>

                            Worked in a team of 5 members to provide solution to problem statement - &quot;Sustainable solution to divert e-waste from informal to formal sector with responsible disposal, resource recovery and awareness while addressing infrastructure, behavior, and social impact challenges.&quot;
                        </p>

                    </div>
                    <div className="text-left">
                        <button className="group">
                            <a
                                href="/certificate.pdf"
                                target="_blank"
                                className="flex px-2 py-1 rounded hover:bg-[#313131] text-sm items-center mt-3 text-white w-25"
                            >
                                <span className="text-[#ADB7BE] group-hover:underline text-md">View certificate</span>
                                <Image
                                    src="/images/maximize.png"
                                    width={15}
                                    height={15}
                                    className="ml-2"
                                ></Image>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
