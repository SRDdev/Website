import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';

const Contact = () => {
  return (
    <div id='contact' className='w-full h-full' style={{backgroundColor:"#ffffff"}}>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#ff9100]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Shreyas Dixit</h2>
                <p>Student Developer</p>
                <p className='py-4'>
                  I am available for Research Intern position or full-time positions.<br/>
                  Contact me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between max-w-[430px] m-auto py-4'>
                <a
                  href='https://www.linkedin.com/in/srddev/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/SRDdev'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="https://twitter.com/Shreyas__Dixit">
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-110 ease-in duration-300'>
                    <BsTwitter />
                  </div>
                </Link>
              </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='w-[600px]'>
                <h2 className='py-2'>Productivity Pro </h2>
                <br></br>
                <b><p>Weekly News Letter</p></b>
                <br></br>
                <p>Are you tired of feeling overwhelmed and struggling to get things done? Do you find yourself constantly running out of time, no matter how hard you try to stay organized? At Productivity Pro, we understand how frustrating it can be to feel like you're constantly falling behind. That's why we're here to help you take control of your time and boost your productivity.

                  Our team of experts has developed a range of tools and strategies to help you get more done in less time. From time management techniques to task prioritization strategies, we have the tools you need to get your work done efficiently and effectively.

                  But we don't just offer resources and advice - we also provide one-on-one coaching and support to help you stay on track and achieve your productivity goals. Whether you're a busy professional looking to streamline your workflow or a student trying to juggle multiple deadlines, we have the expertise and guidance you need to succeed.

                  So why wait? Take control of your time and boost your productivity with Productivity Pro today!</p>
                  <br></br>
                <p className='py-4'>
                  <a style={{display: "flex",flexDirection:"column",justify:"center",padding:"7px",textAlign:"center",outline:"none",textDecoration:"none",
                color:"#FFFFFF",width:"200px",borderRadius:"16px",backgroundColor: "#0A66C2",}} 
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7015550296219119616" target="_blank">Subscribe on LinkedIn
              </a>
                </p>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#000000]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
