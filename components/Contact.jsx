import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';

const Contact = () => {
  return (
    <div id='contact' className='w-full h-full' style={{ backgroundColor: "#ffffff" }}>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#ff9100]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='flex flex-col lg:flex-row'>
          {/* left */}
          <div className='lg:w-1/2'>
            <div className='w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
              <div className='lg:p-4 h-full'>
                <div>
                  <Image
                    className='rounded-xl hover:scale-105 ease-in duration-300'
                    src={ContactImg}
                    alt='/'
                  />
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className='lg:w-1/2 lg:pl-8 mt-6 lg:mt-0'>
            <div className='w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
              <div className='lg:p-4 h-full'>
                <h2 className='py-2'>Shreyas Dixit</h2>
                <p>Student Developer</p>
                <p className='py-4'>
                  I am available for a Research Intern position or full-time positions.<br />
                  Contact me and let's talk.
                </p>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/SRDdev'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn size={24} />
                    </div>
                  </a>
                  <a
                    href='https://github.com/SRDdev'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub size={24} />
                    </div>
                  </a>
                  <a
                    href='https://gmail.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail size={24} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
