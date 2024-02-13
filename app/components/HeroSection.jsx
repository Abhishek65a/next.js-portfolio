"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-600">
              Hello, Im {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Abhishek T",
                1000,
                "Web Developer.",
                1000,
                "MERN Stack Developer.",
                1000,
                "React Developer.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a Certified MERN stack developer with a passion for building
            robust and scalable web applications. Committed to delivering
            efficient solutions by leveraging my skills in front-end and
            back-end development. Seeking a challenging position to contribute
            my technical skills and passion for creating innovative web
            experiences.
          </p>
          <div>
            <button  className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-600 via-purple-600 to-secondary-600 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit  rounded-full bg-gradient-to-br from-primary-500 via-purple-500 to-secondary-500 hover:bg-slate-800 text-white  mt-3 ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full  px-5 py-2">
                Download CV
              </span>
            </button> 
          </div> 
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className=" col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]  relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="rounded-full w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
