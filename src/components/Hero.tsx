import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

function Hero() {
  return (
    <div
      className="mt-20 flex flex-col items-center h-screen bg-black bg-[radial-gradient(#A221DC_0.2px,transparent_1px)] 
  bg-size-[16px_16px]"
    >
      <motion.h1
        className="text-[10rem] mt-10 bg-[linear-gradient(90deg,#AB1CD9,#7C3AED,#2563EB,#AB1CD9)]
    bg-[length:300%_300%]
    bg-clip-text text-transparent
    animate-[gradient-move_8s_ease-in-out_infinite] font-bold font-audiowide [@media(max-width:766px)_and_(min-width:545px)]:text-[7rem] [@media(max-width:545px)]:text-[5rem]"
        variants={heroHeading}
        initial="hidden"
        animate="show"
      >
        WEBWIZ
      </motion.h1>
      <motion.h2
        className="text-[2rem] font-bold text-gray-100 font-audiowide [@media(max-width:1020px)]:text-[1.5rem] px-3 text-center leading-[3rem]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.3,
        }}
      >
        A community focused on building &nbsp;
        <LayoutTextFlip
          words={["Efficient", "Reliable", "Scalable"]}
          text={""}
          duration={1000}
        />
        &nbsp;Web Apps
      </motion.h2>
      <h3 className="mt-15 text-neutral300 text-[1.3rem] font-audiowide font-bold mx-3 px-2 text-center [@media(max-width:1020px)]:text-[1rem] bg-white text-black rounded-tr-2xl rounded-bl-2xl">
        The Official Web Development club of NIT Rourkela
      </h3>
      <Link to="/projects">
        <motion.button
          className="text-white bg-linear-to-bl from-violet-500 to-fuchsia-500 mt-20 text-[1.3rem] px-6 font-semibold py-2 rounded-3xl hover:cursor-pointer hover:opacity-85 duration-300"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeIn",
            delay: 0.4,
          }}
        >
          Browse our Projects
        </motion.button>
      </Link>
    </div>
  );
}

export default Hero;
