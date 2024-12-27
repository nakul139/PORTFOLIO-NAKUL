import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/NAKUL_JAIN.png";
import { motion } from "motion/react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div id="home" className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-6xl font-thin tracking-tight lg:mt-16"
            >
              NAKUL JAIN
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-tight tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              href="https://drive.google.com/file/d/1ckvGc_Jg4Z0wtCN3jeNknRillLYAQGli/view?usp=drive_link" // Replace with your actual resume link
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600 transition"
            >
              View Resume
            </motion.a>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-auto lg:w-1/2 lg:p-8">
          <div className="flex justify-center h-96">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Nakul Jain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
