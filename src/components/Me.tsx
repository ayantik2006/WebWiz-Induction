import { motion } from "framer-motion";
import Navbar from "./Navbar";

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

function Me() {
  return (
    <div className="">
      <Navbar />
      <div
        className="mt-20 flex flex-col items-center min-h-screen bg-black bg-[radial-gradient(#A221DC_0.2px,transparent_1px)] 
  bg-size-[16px_16px]"
      >
        <motion.h1
          className="text-[1.5rem] mt-60 bg-[linear-gradient(90deg,#AB1CD9,#7C3AED,#2563EB,#AB1CD9)]
    bg-[length:300%_300%]
    bg-clip-text text-transparent
        animate-[gradient-move_8s_ease-in-out_infinite] font-bold font-audiowide text-center mx-10"
          variants={heroHeading}
          initial="hidden"
          animate="show"
        >
          {" "}
          Hi, I am Ayantik. Click below to know more about me
        </motion.h1>
        <a href="https://ayantik.onrender.com" target="_blank">
          <button className="bg-[#5610AD] px-5 py-2 mt-10 rounded-2xl font-semibold text-neutral-300 animate-bounce cursor-pointer font-audiowide">
            Click me!!
          </button>
        </a>
      </div>
    </div>
  );
}

export default Me;
