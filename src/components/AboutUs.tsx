import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const heroHeading = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function AboutUs() {
  return (
    <div>
      <Navbar />

      <div
        className="mt-20 flex flex-col items-center min-h-screen bg-black bg-[radial-gradient(#A221DC_0.2px,transparent_1px)] 
  bg-size-[16px_16px]"
      >
        <motion.h1
          className="text-[2rem] mt-20 bg-[linear-gradient(90deg,#AB1CD9,#7C3AED,#2563EB,#AB1CD9)]
    bg-[length:300%_300%]
    bg-clip-text text-transparent
        animate-[gradient-move_8s_ease-in-out_infinite] font-bold font-audiowide border-b-3 border-[#942BE3] text-center mx-10 pb-3"
          variants={heroHeading}
          initial="hidden"
          animate="show"
        >
          Not just any other technical club
        </motion.h1>

        <div className="flex flex-wrap items-center gap-4 text-white mt-15 px-10 items-center justify-center pb-7">
          <div className="flex flex-col gap-5 items-center max-w-[28rem] border-2 border-[#b640de] px-8 py-6 bg-neutral-950 rounded-2xl hover:shadow-[0_0_15px_#A023DD] duration-300">
            <h1 className="text-[1.4rem] font-bold cursor-default">
              Made for students
            </h1>
            <p className="text-center text-neutral-300 text-[1.1rem] cursor-default">
              If you are crazy about development we are crazy about you. Any
              other barrier that you think exists, DOESN'T.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center max-w-[28rem] border-2 border-[#b640de] px-8 py-6 bg-neutral-950 rounded-2xl min-h-[11.4rem] hover:shadow-[0_0_15px_#A023DD] duration-300">
            <h1 className="text-[1.4rem] font-bold cursor-default">
              Development
            </h1>
            <p className="text-center text-neutral-300 text-[1.1rem] cursor-default">
              We focus on Design as much as developing. At last the eye sees it
              first.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center max-w-[28rem] border-2 border-[#b640de] px-8 py-6 bg-neutral-950 rounded-2xl min-h-[11.4rem] hover:shadow-[0_0_15px_#A023DD] duration-300">
            <h1 className="text-[1.4rem] font-bold cursor-default">
              Practical Guide
            </h1>
            <p className="text-center text-neutral-300 text-[1.1rem] cursor-default">
              We guide you everytime you need us. Literally anywhere you want to
              go we have a guide for that.
            </p>
          </div>
        </div>
        <div className="text-neutral-400">
            #WorkHardPartyHarder
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
