import React from "react";
import Image from "next/image";

const Experience = () => {
  return (
    <section
      className="mt-[50px] bg-[#313131] rounded-xl md:py-10 py-7 md:w-3/4 w-full mx-auto"
      id="experience"
    >
      <div className="text-center text-[#ADB7BE]">
        <span className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Experience
        </span>
        {/* bg-[#484747] */}

        <div className="md:mt-9 w-5/6 mx-auto px-0 py-5 ">
          <div className="md:flex justify-between">
            <div className="text-left">
              <h4 className="md:text-lg font-bold text-md">
                Teaching Assistant - Object Oriented Programming Lab
              </h4>
              <h6 className="text-sm mt-1 text-[#5f69cc] font-bold">
                <a href="https://www.sih.gov.in/sih2024PS" target="_blank" rel="noopener noreferrer">
                  OOPs Lab Course, LNMIIT
                </a>
              </h6>
            </div>
            <div className="flex flex-col text-right">
              <div className="flex">
                <div className="italic text-sm">August 2024 - December 2024</div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-left text-md">
            <p>
            Guided students in mastering core Object-Oriented Programming concepts during lab sessions while supporting their practical implementations. Provided individual assistance with debugging and explaining key principles such as inheritance, polymorphism, encapsulation, and abstraction.
            </p>
          </div>
          <div className="text-left">
            <button className="group">
              <a
                href="/SIH Certificate.pdf"
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
        <div className="md:mt-9 w-5/6 mx-auto px-0 py-5 ">
          <div className="md:flex justify-between">
            <div className="text-left">
              <h4 className="md:text-lg font-bold text-md">
                Teaching Assistant - Data Structures and Algorithm Lab
              </h4>
              <h6 className="text-sm mt-1 text-[#5f69cc] font-bold">
                <a href="https://www.sih.gov.in/sih2024PS" target="_blank" rel="noopener noreferrer">
                  DSA Lab Course, LNMIIT
                </a>
              </h6>
            </div>
            <div className="flex flex-col text-right">
              <div className="flex">
                <div className="italic text-sm">January 2024 - May 2024</div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-left text-md">
            <p>
            Mentored students in essential Data Structures and Algorithms during lab sessions while guiding practical implementations. Offered support with debugging code and clarifying principles including time complexity, recursion, sorting techniques, and implementation of data structures like arrays, linked lists, trees, and hash tables.
            </p>
          </div>
          <div className="text-left">
            <button className="group">
              <a
                href="/SIH Certificate.pdf"
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
        <div className="md:mt-9 w-5/6 mx-auto px-0 py-5 ">
          <div className="md:flex justify-between">
            <div className="text-left">
              <h4 className="md:text-lg font-bold text-md">
                Teaching Assistant - Digital Systems Lab
              </h4>
              <h6 className="text-sm mt-1 text-[#5f69cc] font-bold">
                <a href="https://www.sih.gov.in/sih2024PS" target="_blank" rel="noopener noreferrer">
                  DSY Lab Course, LNMIIT
                </a>
              </h6>
            </div>
            <div className="flex flex-col text-right">
              <div className="flex">
                <div className="italic text-sm">January 2024 - May 2024</div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-left text-md">
            <p>
            Supported students in mastering fundamental Digital Systems concepts during laboratory sessions while facilitating hands-on circuit implementations. Provided guidance with troubleshooting designs and explaining key principles including combinational logic, sequential circuits, state machines, and digital system architecture.
            </p>
          </div>
          <div className="text-left">
            <button className="group">
              <a
                href="/DBMS.pdf"
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

export default Experience;