import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

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

function Team() {
  return (
    <div>
      <Navbar />

      <div
        className="mt-20 flex flex-col items-center min-h-screen bg-black bg-[radial-gradient(#A221DC_0.2px,transparent_1px)] 
  bg-size-[16px_16px]"
      >
        <motion.h1
          className="text-[2rem] mt-10 bg-[linear-gradient(90deg,#AB1CD9,#7C3AED,#2563EB,#AB1CD9)]
    bg-[length:300%_300%]
    bg-clip-text text-transparent
        animate-[gradient-move_8s_ease-in-out_infinite] font-bold font-audiowide border-b-3 border-[#942BE3] text-center mx-10 pb-3"
          variants={heroHeading}
          initial="hidden"
          animate="show"
        >
          Our Team Members
        </motion.h1>

        <div className="flex gap-5 flex-wrap mt-10 items-center justify-center mx-5">
          <div className="flex flex-col items-center border-2 border-[#b640de] rounded-2xl p-5 bg-[#0A0A0A] hover:shadow-[0_0_15px_#A023DD] duration-300">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQG7dHg0Iai5Aw/profile-displayphoto-scale_400_400/B56ZjWUNO9G0Ak-/0/1755942320893?e=1768435200&v=beta&t=2koA45_gOWjp-_LBBuAQRXbkdts0rPk9qMTbBiq0fhE"
              alt="president"
              className="w-[14.5rem] rounded-t-2xl"
            />
            <h1 className="text-white text-[1.4rem] font-bold mt-4">
              Debajyoti Chatterjee
            </h1>
            <h2 className="text-neutral-300 text-[1rem] font-semibold mt-2">
              President
            </h2>
            <div className="flex items-center justify-center mt-3">
              <a href="https://www.linkedin.com/in/debajyoti-chatterjee-96ba0623b/" target="_blank">
                <Linkedin className="stroke-neutral-400 hover:stroke-white duration-300" size={20} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center border-2 border-[#b640de] rounded-2xl p-5 bg-[#0A0A0A] hover:shadow-[0_0_15px_#A023DD] duration-300">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQG839ki1PIrBA/profile-displayphoto-shrink_400_400/B4EZWzDGxDGYAk-/0/1742465692394?e=1768435200&v=beta&t=512TfitRjf1kdSinptn3y7uo9CiEgROP9ixlQSZOQ64"
              alt="president"
              className="w-[14.5rem] rounded-t-2xl"
            />
            <h1 className="text-white text-[1.4rem] font-bold mt-4">
              Tiyas Mandal
            </h1>
            <h2 className="text-neutral-300 text-[1rem] font-semibold mt-2">
              Web Developer
            </h2>
            <div className="flex items-center justify-center mt-3">
              <a href="https://www.linkedin.com/in/tiyas-mandal-a2a014343/" target="_blank">
                <Linkedin className="stroke-neutral-400 hover:stroke-white duration-300" size={20} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center border-2 border-[#b640de] rounded-2xl p-5 bg-[#0A0A0A] hover:shadow-[0_0_15px_#A023DD] duration-300">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E35AQHJ3fQ-8AX7IA/profile-framedphoto-shrink_400_400/B4EZogshPsIUAc-/0/1761485133048?e=1767186000&v=beta&t=PNp_YHX1LSOWWr4EMMKXglyiKj43YcpuU2UAQFLDRbY"
              alt="president"
              className="w-[14.5rem] rounded-t-2xl"
            />
            <h1 className="text-white text-[1.4rem] font-bold mt-4">
              Shalom Mendonca
            </h1>
            <h2 className="text-neutral-300 text-[1rem] font-semibold mt-2">
              Web Developer
            </h2>
            <div className="flex items-center justify-center mt-3">
              <a href="https://www.linkedin.com/in/shalom-mendonca-399a7030a/" target="_blank">
                <Linkedin className="stroke-neutral-400 hover:stroke-white duration-300" size={20} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center border-2 border-[#b640de] rounded-2xl p-5 bg-[#0A0A0A] hover:shadow-[0_0_15px_#A023DD] duration-300">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQGRzsWLd-ZSGQ/profile-displayphoto-shrink_400_400/B4EZYrcBGpHcAs-/0/1744485488855?e=1768435200&v=beta&t=FQktiH6jR7Hxzzqe5TUlJt4H55z49ZROu2Rj5wP7kwU"
              alt="president"
              className="w-[14.5rem] rounded-t-2xl"
            />
            <h1 className="text-white text-[1.4rem] font-bold mt-4">
              Swastik Sahu
            </h1>
            <h2 className="text-neutral-300 text-[1rem] font-semibold mt-2">
              Web Developer
            </h2>
            <div className="flex items-center justify-center mt-3">
              <a href="https://www.linkedin.com/in/swastik-sahu-48a834319/" target="_blank">
                <Linkedin className="stroke-neutral-400 hover:stroke-white duration-300" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-neutral-400">
            and many more...
        </div>

      </div>
    </div>
  );
}

export default Team;
