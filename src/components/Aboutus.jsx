"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import aboutusimg from "@/assets/aboutusimg.jpg";
import signature from "@/assets/signature.png";

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2 + 0.4,
      ease: "easeOut"
    }
  })
};

const Aboutus = () => {
  return (
    <div className='py-16 lg:py-24 xl:py-32 2xl:py-40 px-6 md:px-8 lg:px-20 xl:px-32 2xl:px-80 overflow-x-hidden'>
      <div className='lg:flex lg:gap-12 xl:gap-20 2xl:gap-32 items-center'>

        {/* Image Section with animation */}
        <motion.div
          className='relative w-full md:w-[80%] lg:w-[45%] aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] xl:aspect-[5/6] mx-auto md:mx-0'
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className='absolute inset-0 bg-[#c0b596]'>
            <div className='relative w-full h-full mt-4 ml-4 md:mt-5 md:ml-5 lg:mt-5 lg:ml-5 xl:mt-6 xl:ml-6 2xl:mt-8 2xl:ml-8'>
              <Image
                src={aboutusimg}
                alt='About us'
                fill
                className='object-cover object-center'
                quality={100}
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 45vw, 40vw"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className='mt-16 lg:mt-0 lg:w-[55%]'
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className='playfairDisplay text-[33px] md:text-4xl lg:text-[42px] xl:text-[52px] 2xl:text-[72px] text-[#282e3f]'>
            About Us
          </h1>

          <p className='openSans mt-5 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12 text-[#666] text-[15px] md:text-[16px] lg:text-[17px] xl:text-xl 2xl:text-[28px] leading-relaxed 2xl:leading-loose'>
            Country to people Hotel. Learn teams in extremely modern use. Seek
            them in a part of classical urban towns from the E.C., making it run on 2009
            year old. Shared McKinsey, a Latin professor #1.
            <br /><br />
            and ping through the class of the world in classical libraries, discovered the
            unfabulable teams. Learn them across three sections: 1, 10,12 and 1, 10,33
            of the Private Resources solutions.
          </p>

          {/* Button with fade-up */}
          <motion.button
            className='openSans font-medium text-[15px] md:text-[16px] lg:text-[17px] xl:text-xl 2xl:text-[24px] bg-[#c0b596] hover:bg-[#b3a785] text-white mt-5 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12 py-3 px-6 md:py-3.5 md:px-7 lg:py-4 lg:px-8 xl:py-5 xl:px-10 2xl:py-6 2xl:px-12 transition-colors duration-300'
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            More About Us...
          </motion.button>

          {/* Signature with fade-up */}
          <motion.div
            className='mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-20'
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <Image
              src={signature}
              alt='Signature'
              width={200}
              height={80}
              className='w-auto h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-28'
              priority
            />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Aboutus;
