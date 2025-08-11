'use client'

import React from 'react'
import Image from 'next/image';
import logo from "@/assets/logo.png";
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='mt-4 '>
      {/* newsletter sec start */}
      <div className='bg-[#272C3F] lg:py-[4.5rem] py-[5rem]'>
        <div className='playfairDisplay lg:mb-[2rem] mb-[2rem]'>
          <h1 className='text-[#C0B596] flex justify-center lg:text-[1.8rem] text-[1.9rem]'>
            Subscribe Newsletter
          </h1>
        </div>

        <div className='flex items-center justify-center'>
          <form className='flex border border-[#c4b998] rounded'>
            <input
              type="email"
              placeholder="Enter Your Email Address..."
              className="lg:px-8 lg:py-3 px-8 py-3 bg-[#262a40] text-[#ffffff] focus:outline-none placeholder:text-[#888] lg:w-[20rem] md:w-[20rem]"
            />

            <button
              type="submit"
              className="openSans bg-[#C0B596] text-white lg:px-6 lg:py-3 font-medium hover:opacity-90 transition cursor-pointer px-6"
            >
              subscribe
            </button>
          </form>
        </div>
      </div>
      {/* newsletter sec end */}


      {/* footer sec start */}

      <div className='bg-[#151A30] lg:px-20 md:px-8 px-6'> 
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm lg:py-[5.5rem] md:py-16 py-20'>
          <div className=''>
            <Image src={logo} alt='logo' className='lg:w-[12rem] md:w-[10rem] w-[10rem] mb-4 lg:mb-6 md:mb-4 cursor-pointer'/>
            <p className='openSans text-[#ddd] lg:text-[16px] lg:leading-7 md:leading-6 leading-6'>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
            </p>
          </div>


          <div>
            <h1 className='text-white playfairDisplay lg:text-[26px] md:text-[26px] text-[26px] lg:mb-6 md:mb-4 mb-4'>
              Quick Link
            </h1>
            <ul>
              <li className='openSans text-[#ddd] lg:text-[16px] lg:mb-3 md:mb-3 mb-3 hover:text-[#C0B596] cursor-pointer'><Link href="/">Home</Link></li>
              <li className='openSans text-[#ddd] lg:text-[16px] lg:mb-3 md:mb-3 mb-3 hover:text-[#C0B596] cursor-pointer'><Link href="/">About</Link></li>
              <li className='openSans text-[#ddd] lg:text-[16px] lg:mb-3 md:mb-3 mb-3 hover:text-[#C0B596] cursor-pointer'><Link href="/">Cases</Link></li>
              <li className='openSans text-[#ddd] lg:text-[16px] lg:mb-3 md:mb-3 mb-3 hover:text-[#C0B596] cursor-pointer'><Link href="/">Attorneys</Link></li>
              <li className='openSans text-[#ddd] lg:text-[16px] hover:text-[#C0B596] cursor-pointer'><Link href="/">Contact</Link></li>
            </ul>
          </div>


          <div>
            <h1 className='text-white playfairDisplay lg:text-[26px] md:text-[26px] text-[26px] lg:mb-6 md:mb-4 mb-4'>
              Practice Area
            </h1>
            <ul>
              <li className='openSans text-[#ddd] lg:text-[16px] lg:mb-3 md:mb-3 mb-3 hover:text-[#C0B596] cursor-pointer'>Family Law</li>
              <li className='openSans text-[#ddd] lg:text-[16px] lg:mb-3 md:mb-3 mb-3 hover:text-[#C0B596] cursor-pointer'>Criminal Law</li>
              <li className='openSans text-[#ddd] lg:text-[16px] lg:mb-3 md:mb-3 mb-3 hover:text-[#C0B596] cursor-pointer'>Parsonal Injury</li>
              <li className='openSans text-[#ddd] lg:text-[16px] lg:mb-3 md:mb-3 mb-3 hover:text-[#C0B596] cursor-pointer'>Real Estate Law</li>
              <li className='openSans text-[#ddd] lg:text-[16px] hover:text-[#C0B596] cursor-pointer'>Business Law</li>
            </ul>
          </div>


          <div>
            <h1 className='text-white playfairDisplay lg:text-[26px] md:text-[26px] text-[26px] lg:mb-6 md:mb-4 mb-4'>
              Contact Us
            </h1>
            <ul>
              <li className='openSans text-[#ddd] lg:text-[16px] lg:mb-3 md:mb-3 mb-3'>Head Office Address</li>
              <li className='openSans text-[#ddd] lg:text-[16px] lg:mb-3 md:mb-3 mb-3'>121 King Street, Melbourne West,</li>
              <li className='openSans text-[#ddd] lg:text-[16px] lg:mb-3 md:mb-3 mb-3'>Pakistan</li>
              <li className='openSans text-[#ddd] lg:text-[16px] lg:mb-3 md:mb-3 mb-3'>Phone:00000000000</li>
              <li className='openSans text-[#ddd] lg:text-[16px]'>Email: info@example.com</li>
            </ul>
          </div>
        </div>

        <hr className='border-[#363B4D] my-4 lg:my-6 mx-0 md:mx-0 lg:mx-0 lg:mt-20 lg:mb-[2rem]' />

        <div className='flex flex-col md:flex-row justify-between md:pb-6 gap-4 pb-6'>
          <div>
            <p className='text-[#ddd] playfairDisplay text-[13px] lg:text-[16px] md:text-[16px]'>
              Privacy Policy | © 2018 Barristar. All rights reserved
            </p>
          </div>

          <div className='flex gap-3'>
            <FaFacebookF className='text-[#ddd] hover:text-[#C0B596] cursor-pointer w-[11px] md:w-[15px] lg:w-[]15px]'/>
            <FaTwitter className='text-[#ddd] hover:text-[#C0B596] cursor-pointer w-[11px] md:w-[15px] lg:w-[]15px]'/>
            <FaLinkedinIn className='text-[#ddd] hover:text-[#C0B596] cursor-pointer w-[11px] md:w-[15px] lg:w-[]15px]'/>
          </div>
        </div>


      </div>

      {/* footer sec end */}
    </div>
  )
}

export default Footer
