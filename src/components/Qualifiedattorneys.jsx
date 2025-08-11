'use client';

import React from 'react';
import Image from 'next/image';
import userimg from "@/assets/userimg.jpg";
import userimg2 from "@/assets/userimg2.jpg";
import userimg3 from "@/assets/userimg3.jpg";
import userimg4 from "@/assets/userimg4.jpg";
import userimg5 from "@/assets/userimg5.jpg";
import userimg6 from "@/assets/userimg6.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const attorneys = [
  {
    name: 'Willam Stephen',
    role: 'Criminal Lawyer',
    image: userimg,
  },
  {
    name: 'Samantha Grey',
    role: 'Family Lawyer',
    image: userimg2,
  },
  {
    name: 'David Miller',
    role: 'Corporate Lawyer',
    image: userimg3,
  },
  {
    name: 'Linda Johnson',
    role: 'Immigration Lawyer',
    image: userimg4,
  },
  {
    name: 'Darcy Alec',
    role: 'Criminal Lawyer',
    image: userimg5,
  },
  {
    name: 'Eshan Golly',
    role: 'Business Lawyer',
    image: userimg6,
  },
];

const Qualifiedattorneys = () => {
  return (
    <div className='py-16 px-4'>
      <div className="max-w-[1600px] mx-auto">
        {/* Heading */}
        <div className="text-center md:text-center mb-10">
          <p className="openSans text-[#ada282] text-[16px]">Meet Our Experts</p>
          <h1 className="playfairDisplay text-[#333] text-[28px] sm:text-[32px] md:text-[36px] mb-4 leading-snug">
            Qualified Attorneys
          </h1>
          <div className="h-[1px] w-14 bg-[#c0b596] mx-auto"></div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={false}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
            1920: { slidesPerView: 5 },
          }}
        >
          {attorneys.map((attorney, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col h-full">
                <div className="relative w-full h-[350px]">
                  <Image
                    src={attorney.image}
                    alt={attorney.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="text-center py-6 flex-1">
                  <h3 className="text-2xl font-semibold text-[#1a2a52]">{attorney.name}</h3>
                  <p className="text-[#a88e5c] mt-1">{attorney.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Qualifiedattorneys;
