'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Clock9, Search, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; // ✅ Import Link
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='openSans bg-[#272C3F] lg:h-[12rem] py-6'>
      {/* Top section */}
      <div className='flex flex-col md:flex-wrap lg:flex-nowrap gap-4 md:gap-y-2 md:gap-x-6 lg:gap-4 md:flex-row justify-between items-start md:items-center px-6 md:px-8 lg:px-20 text-[13px] lg:text-[14px]'>
        <div className='flex gap-x-2 items-center'>
          <MapPin className='text-[#CBBC99] h-[1.2rem]' />
          <p className='text-[#E0E0E0]'>121 King Street, Melbourne , Australia</p>
        </div>
        <div className='flex items-center flex-wrap gap-4 md:gap-8'>
          <div className='flex gap-x-2 border-r border-[#363B4D] pr-4'>
            <Phone className='text-[#CBBC99] h-[1.2rem]' />
            <p className='text-[#E0E0E0]'>3164-5456854</p>
          </div>
          <div className='flex gap-x-2'>
            <Clock9 className='text-[#CBBC99] h-[1.2rem]' />
            <p className='text-[#E0E0E0]'>9AM - 11PM</p>
          </div>
          <button className='text-white font-bold border-2 border-[#C0B596] rounded-full px-4 py-2'>
            Free Consultation
          </button>
        </div>
      </div>

      <hr className='border-[#363B4D] my-4 lg:my-6 mx-4 md:mx-6 lg:mx-20 4k:mx-40' />

      {/* Bottom section */}
      <div className='flex justify-between items-center px-6 md:px-8 lg:px-20 4k:px-40'>
        <Link href="/">
          <Image src={logo} alt='logo' className='cursor-pointer w-[10rem] lg:w-[17rem] 4k:w-[22rem]' />
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden lg:flex text-white gap-6 lg:gap-10 4k:gap-16 text-[14px] lg:text-[16px] 4k:text-[18px]'>
          <li className='hover:text-[#C0B596] cursor-pointer'>
            <Link href="/">HOME</Link>
          </li>
          <li className='hover:text-[#C0B596] cursor-pointer'>
            <Link href="/Aboutpage">ABOUT</Link>
          </li>
          <li className='hover:text-[#C0B596] cursor-pointer'>
            <Link href="/Casespage">CASES</Link>
          </li>
          <li className='hover:text-[#C0B596] cursor-pointer'>
            <Link href="/Attorneypage">ATTORNEYS</Link>
          </li>
          <li className='hover:text-[#C0B596] cursor-pointer'>
            <Link href="/Contactpage">CONTACT</Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className='lg:hidden flex items-center gap-4'>
          <Search className='text-white h-5 cursor-pointer' />
          <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
            {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      {isOpen && (
        <div className='lg:hidden mt-4 px-4'>
          <ul className='flex flex-col gap-4 text-white text-[15px]'>
            <li className='hover:text-[#C0B596] cursor-pointer'>
              <Link href="/">HOME</Link>
            </li>
            <li className='hover:text-[#C0B596] cursor-pointer'>
              <Link href="/Aboutpage">ABOUT</Link>
            </li>
            <li className='hover:text-[#C0B596] cursor-pointer'>
              <Link href="/Casespage">CASES</Link>
            </li>
            <li className='hover:text-[#C0B596] cursor-pointer'>
              <Link href="/Attorneypage">ATTORNEYS</Link>
            </li>
            <li className='hover:text-[#C0B596] cursor-pointer'>
              <Link href="/Contactpage">CONTACT</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
