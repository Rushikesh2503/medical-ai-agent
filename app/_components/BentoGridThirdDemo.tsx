"use client";
import { cn } from "../../lib/utils";
import React from "react";
import {
  IconStethoscope,
  IconBrain,
  IconMicroscope,
  IconHeart,
  IconPill,
  IconActivity,
  IconReportMedical,
  IconUserCheck,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";

export default function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem] mt-10">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 flex-col space-y-2 p-4 rounded-lg"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-teal-200 dark:border-teal-800 p-2 items-center space-x-2 bg-white/80 dark:bg-teal-950/50 backdrop-blur-sm"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 shrink-0" />
        <div className="w-full bg-teal-100 h-4 rounded-full dark:bg-teal-900/50" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-teal-200 dark:border-teal-800 p-2 items-center space-x-2 w-3/4 ml-auto bg-white/80 dark:bg-teal-950/50 backdrop-blur-sm"
      >
        <div className="w-full bg-teal-100 h-4 rounded-full dark:bg-teal-900/50" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-teal-200 dark:border-teal-800 p-2 items-center space-x-2 bg-white/80 dark:bg-teal-950/50 backdrop-blur-sm"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 shrink-0" />
        <div className="w-full bg-teal-100 h-4 rounded-full dark:bg-teal-900/50" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  // Use deterministic widths based on index to avoid hydration mismatch
  const widths = [85, 72, 65, 90, 78, 82];
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 flex-col space-y-2 p-4 rounded-lg"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skeleton-two" + i}
          variants={variants}
          style={{
            maxWidth: `${widths[i]}%`,
          }}
          className="flex flex-row rounded-full border border-teal-200 dark:border-teal-800 p-2 items-center space-x-2 bg-white/80 dark:bg-teal-950/50 backdrop-blur-sm w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"]
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg flex-col space-y-2 p-4"
      style={{
        background:
          "linear-gradient(-45deg, #0d9488, #14b8a6, #06b6d4, #0891b2)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-2xl mb-2">🧠</div>
          <div className="text-sm font-medium">AI Analysis</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 flex-row space-x-2 p-4 rounded-lg"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white/80 p-4 dark:bg-teal-950/50 dark:border-teal-800 border border-teal-200 flex flex-col items-center justify-center backdrop-blur-sm"
      >
        <div className="text-2xl mb-2">💊</div>
        <p className="sm:text-sm text-xs text-center font-semibold text-teal-700 dark:text-teal-300 mt-2">
          Medication Review
        </p>
        <p className="border border-teal-500 bg-teal-100 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 text-xs rounded-full px-2 py-0.5 mt-2">
          Safe
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white/80 p-4 dark:bg-teal-950/50 dark:border-teal-800 border border-teal-200 flex flex-col items-center justify-center backdrop-blur-sm">
        <div className="text-2xl mb-2">❤️</div>
        <p className="sm:text-sm text-xs text-center font-semibold text-teal-700 dark:text-teal-300 mt-2">
          Heart Rate Normal
        </p>
        <p className="border border-teal-500 bg-teal-100 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 text-xs rounded-full px-2 py-0.5 mt-2">
          Stable
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white/80 p-4 dark:bg-teal-950/50 dark:border-teal-800 border border-teal-200 flex flex-col items-center justify-center backdrop-blur-sm"
      >
        <div className="text-2xl mb-2">🔬</div>
        <p className="sm:text-sm text-xs text-center font-semibold text-teal-700 dark:text-teal-300 mt-2">
          Lab Results
        </p>
        <p className="border border-teal-500 bg-teal-100 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 text-xs rounded-full px-2 py-0.5 mt-2">
          Normal
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 flex-col space-y-2 p-4 rounded-lg"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-teal-200 dark:border-teal-800 p-2 items-start space-x-2 bg-white/80 dark:bg-teal-950/50 backdrop-blur-sm"
      >
        <div className="text-xl">👨‍⚕️</div>
        <p className="text-xs text-teal-700 dark:text-teal-300">
          AI detected potential symptoms matching common conditions. 
          Recommend consultation with healthcare provider for proper diagnosis.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-teal-200 dark:border-teal-800 p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white/80 dark:bg-teal-950/50 backdrop-blur-sm"
      >
        <p className="text-xs text-teal-700 dark:text-teal-300">Schedule follow-up</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Basic Info & Symptoms",
    description: (
      <span className="text-sm">
        Enter your demographic details and describe your current symptoms to begin personalized assessment.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconStethoscope className="h-4 w-4 text-teal-500" />,
  },
  {
    title: "Additional Details",
    description: (
      <span className="text-sm">
        Provide more context such as duration, severity, and related factors.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconReportMedical className="h-4 w-4 text-teal-500" />,
  },
  {
    title: "Specialist Suggestion",
    description: (
      <span className="text-sm">
        Get AI recommendations for the most relevant medical specialist.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-1",
    icon: <IconBrain className="h-4 w-4 text-teal-500" />,
  },
  {
    title: "Choose Specialist",
    description: (
      <span className="text-sm">
        Select a doctor or specialist from AI suggestions to proceed.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconHeart className="h-4 w-4 text-teal-500" />,
  },
  {
    title: "Voice Conversation",
    description: (
      <span className="text-sm">
        Start a voice-based conversation with the AI medical agent for real-time assistance.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconActivity className="h-4 w-4 text-teal-500" />,
  },
  {
    title: "Two-Way Conversation",
    description: (
      <span className="text-sm">
        Engage in a real-time, interactive conversation with the AI agent for personalized care.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconMicroscope className="h-4 w-4 text-teal-500" />,
  },
];
