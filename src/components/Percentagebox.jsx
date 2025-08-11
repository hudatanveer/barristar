"use client";

import React from "react";
import { motion } from "framer-motion";
import prcntageboxbg from "@/assets/prcntageboxbg.jpg";

const stats = [
  { value: "95%", label: "Cases Won" },
  { value: "863", label: "Trusted Client" },
  { value: "126+", label: "Dedicated Lawyer" },
  { value: "25%", label: "Case Dismissed" },
];

// Variants for container and children
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Percentagebox = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center px-6 py-16 flex items-center justify-center min-h-[65vh] lg:min-h-[70vh] xl:min-h-[72vh] 2xl:min-h-[60vh]"
      style={{
        backgroundImage: `url(${prcntageboxbg.src})`,
      }}
    >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-[2px] w-fit 2xl:scale-[1.15] 2xl:-translate-x-80 transition-all duration-300"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#c0b59637] px-10 sm:px-14 pt-6 pb-10 text-center w-[90vw] sm:w-auto max-w-[320px]"
            variants={itemVariants}
          >
            <h1 className="playfairDisplay text-white text-[2.8rem] sm:text-[3.5rem] leading-none">
              {item.value}
            </h1>
            <p className="openSans text-[#c0b596] text-base mt-2">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Percentagebox;
