'use client'

import React from 'react';
import { motion } from 'framer-motion';
import PeopleIcon from '@mui/icons-material/People';
import PersonalInjuryIcon from '@mui/icons-material/PersonalInjury';
import FaceIcon from '@mui/icons-material/Face';
import SchoolIcon from '@mui/icons-material/School';
import HouseIcon from '@mui/icons-material/House';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const Howcanwehelp = () => {
  const items = [
    { icon: <PeopleIcon sx={{ fontSize: 40, color: '#ada282' }} />, title: "Family Law" },
    { icon: <PersonalInjuryIcon sx={{ fontSize: 40, color: '#ada282' }} />, title: "Personal Injury" },
    { icon: <FaceIcon sx={{ fontSize: 40, color: '#ada282' }} />, title: "Business Law" },
    { icon: <PersonalInjuryIcon sx={{ fontSize: 40, color: '#ada282' }} />, title: "Criminal Law" },
    { icon: <SchoolIcon sx={{ fontSize: 40, color: '#ada282' }} />, title: "Education Law" },
    { icon: <HouseIcon sx={{ fontSize: 40, color: '#ada282' }} />, title: "Real Estate Law" }
  ];

  return (
    <div className='bg-[#f5f5f5] px-6 py-16'>
      <div className='text-center mb-16'>

        {/* Top to bottom for <p> */}
        <motion.p
          className='openSans text-[#ada282] text-[16px]'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Area of Practice
        </motion.p>

        {/* Left to right for <h1> */}
        <motion.h1
          className='playfairDisplay text-[#333] text-[28px] sm:text-[32px] md:text-[36px] mb-4 leading-snug'
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          How Can We Help You
        </motion.h1>

        <div className='mx-auto h-[3px] w-14 bg-[#c0b596]'></div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {items.map((item, index) => (
          <motion.div
            key={index}
            className='flex gap-4 mb-12 md:mb-0'
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={index}
          >
            <div className='w-18 h-18 border border-[#d8ceb8] rounded-full flex items-center justify-center'>
              {item.icon}
            </div>

            <div className='w-[70%]'>
              <h1 className='playfairDisplay text-[24px] mb-1'>{item.title}</h1>
              <div className='h-[2.2px] w-[2.5rem] bg-[#c0b596] mb-2.5'></div>
              <p className='openSans text-[14px] text-[#777]'>
                It is a long established fact that a reader will be distracted by the readable content of 
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Howcanwehelp;
