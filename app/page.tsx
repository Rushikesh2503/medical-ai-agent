"use client";
import { motion } from "motion/react";
import InfiniteMovingCardsDemo from "./_components/InfiniteMovingCardsDemo";
import BentoGridThirdDemo from "./_components/BentoGridThirdDemo";

export default function HeroSectionOne() {

  return (
    <div className="relative flex flex-col items-center justify-center w-full px-2 sm:px-4">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-teal-200/80 dark:bg-teal-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-teal-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-teal-200/80 dark:bg-teal-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-teal-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-teal-200/80 dark:bg-teal-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
      </div>
      <div className="px-2 sm:px-4 py-8 md:py-20 w-full">
        <h1 className="relative z-10 mx-auto max-w-2xl sm:max-w-4xl text-center text-xl sm:text-2xl font-bold text-teal-800 md:text-4xl lg:text-6xl dark:text-teal-200">
          {"🩺 Revolutionize Patient Care with AI Voice Agents"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-md sm:max-w-xl py-4 text-center text-base sm:text-lg font-normal text-teal-700 dark:text-teal-300"
        >
          AI Voice Agents are transforming patient care by providing 24/7
          accessibility, reducing wait times, and improving accessibility for
          patients with disabilities.
        </motion.p>
        <div className="w-full">
          <BentoGridThirdDemo />
        </div>
        <div className="w-full">
          <InfiniteMovingCardsDemo />
        </div>
      </div>
    </div>
  );
}













