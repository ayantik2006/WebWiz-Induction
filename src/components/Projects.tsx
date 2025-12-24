import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

function Projects() {
  return (
    <div>
      <Navbar />

      <div
        className="mt-10 flex flex-col items-center min-h-screen bg-black bg-[radial-gradient(#A221DC_0.2px,transparent_1px)] 
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
          Our Previous Projects
        </motion.h1>

        <div className="flex items-center justify-center gap-8 mt-10 mx-3">
          <a href="https://webwiz.notion.site/Road-map-to-became-Web-Beast-Webwiz-7b0334c890c7482a9738687b757a92da" target="_blank">
            <div className="flex flex-col items-center border-2 border-[#b640de] rounded-2xl p-3 bg-[#0A0A0A] hover:shadow-[0_0_15px_#A023DD] duration-300">
              <img
                src="https://res.cloudinary.com/webwiznitr/image/upload/v1637354760/webwiz-portfolio/others/568063047a31792325f9052f28df1b97_p2uzyt"
                alt="president"
                className="w-[14.5rem] rounded-t-2xl"
              />
              <h1 className="text-white text-[1.4rem] font-bold mt-4">
                Web Dev Roadmap
              </h1>
              <h2 className="text-neutral-400 text-[0.9rem] mt-2">
                Roadmap to become WebBeast
              </h2>
            </div>
          </a>

          <a href="https://project-ebony.netlify.app/" target="_blank">
            <div className="flex flex-col items-center border-2 border-[#b640de] rounded-2xl p-3 bg-[#0A0A0A] hover:shadow-[0_0_15px_#A023DD] duration-300 max-w-[14.5rem]">
              <img
                src="https://res.cloudinary.com/webwiznitr/image/upload/v1637772715/webwiz-portfolio/others/3d42d8c71ceb91a03a53de5631c4b576_mxxenv"
                alt="president"
                className="w-[14.5rem] rounded-t-2xl"
              />
              <h1 className="text-white text-[1.4rem] font-bold mt-4">
                Ebony
              </h1>
              <h2 className="text-neutral-400 text-[0.9rem] mt-2 text-center">
                A collection of wonderful effects to enhance your website.
              </h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
