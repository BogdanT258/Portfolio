import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/bogdanTrivicProfile.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="flex flex-1 flex-col lg:flex-row justify-between w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="pb-1 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Bogdan Trivic
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Web developer
            </motion.span>
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-lighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <motion.img 
              className="rounded-2xl"
              width={550}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                src={profilePic}
                alt="Bogdan Trivic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
