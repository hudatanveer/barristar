'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import casestudy1 from "@/assets/casestudy1.jpg";
import casestudy2 from "@/assets/casestudy2.jpg";
import casestudy3 from "@/assets/casestudy3.jpg";
import casestudy4 from "@/assets/casestudy4.jpg";
import casestudy5 from "@/assets/casestudy5.jpg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // delay between each card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const Casestudies = () => {
  const caseImages = [casestudy1, casestudy2, casestudy3, casestudy4, casestudy5];

  return (
    <div className='py-16 container mx-auto'>
      <div className='px-6 text-center mb-16'>
        <p className='openSans text-[#ada282] text-[16px]'>Here Our Best Work</p>
        <h1 className='playfairDisplay text-[#333] text-[28px] sm:text-[32px] md:text-[36px] mb-4 leading-snug'>
          Our Recent Case Studies
        </h1>
        <div className='mx-auto h-[3px] w-14 bg-[#c0b596]'></div>
      </div>

      {/* Animated Grid */}
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-6'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {caseImages.map((img, index) => (
          <motion.div
            key={index}
            className='relative aspect-square overflow-hidden group shadow-md rounded-md'
            variants={cardVariants}
          >
            <Image
              src={img}
              alt={`casestudy${index + 1}`}
              fill
              className='object-cover transition-transform duration-500 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300'></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Casestudies;
