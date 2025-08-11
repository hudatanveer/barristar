"use client";

import React from "react";
import { motion } from "framer-motion";
import aboutpracimg from "@/assets/aboutpracimg.jpg";
import PeopleIcon from "@mui/icons-material/People";
import PersonalInjuryIcon from '@mui/icons-material/PersonalInjury';
import FaceIcon from '@mui/icons-material/Face';
import SchoolIcon from '@mui/icons-material/School';
import HouseIcon from '@mui/icons-material/House';

const cardsData = [
  {
    title: "Family Law",
    description: "There are many variations of passages of Lorem",
    icon: PeopleIcon,
  },
  {
    title: "Personal Injury",
    description: "There are many variations of passages of Lorem",
    icon: PersonalInjuryIcon,
  },
  {
    title: "Business Law",
    description: "There are many variations of passages of Lorem",
    icon: FaceIcon,
  },
  {
    title: "Education Law",
    description: "There are many variations of passages of Lorem",
    icon: SchoolIcon,
  },
  {
    title: "Real Estate",
    description: "There are many variations of passages of Lorem",
    icon: HouseIcon,
  },
  {
    title: "More Services",
    description: "There are many variations of passages of Lorem",
    icon: PersonalInjuryIcon,
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Abouthowcanwehelp = () => {
  return (
    <div
  className="relative w-full bg-cover bg-center px-6 py-10 flex flex-col items-center min-h-[60vh] lg:min-h-[70vh] 2xl:min-h-[50vh] mt-16"
  style={{
    backgroundImage: `url(${aboutpracimg.src})`,
  }}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#151a307c] z-0" />

      {/* Header */}
      <div className="openSans text-center relative z-10 mb-10">
        <p className="text-[#ada282]">Area of Practice</p>
        <h1 className="playfairDisplay text-white text-[28px] sm:text-[32px] md:text-[36px] mb-4 leading-snug">
          How Can We Help You
        </h1>
        <div className="mx-auto h-[3px] w-14 bg-[#c0b596]"></div>
      </div>

      {/* Cards Grid */}
      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {cardsData.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={index}
              className="bg-[#c0b5964d] p-6 flex items-center gap-4"
              variants={cardVariants}
              custom={index}
              whileHover={{ scale: 1.03 }}
            >
              {/* Icon */}
              <div className="min-w-[50px] flex items-center justify-center">
                <Icon style={{ fontSize: 48, color: "#ada282" }} />
              </div>

              <div className="h-16 border-r border-[#ada282]"></div>

              {/* Text */}
              <div>
                <h3 className="playfairDisplay text-2xl text-white mb-2">
                  {card.title}
                </h3>
                <p className="openSans text-sm text-[#dddddd]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Abouthowcanwehelp;
