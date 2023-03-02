import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';
import News from '../public/assets/projects/news.png'

const Contact = () => {
  return (
    <div id='contact' className='w-full h-full' style={{backgroundColor:"#ffffff"}}>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
          <div className='text-black'>
            <h2>News Letter</h2>
          </div>
        <div className='grid lg:grid-cols-2 gap-8 mb-[150px]'>
          <div className='text-justify mt-5 text-grey-700'>
            <p>Welcome to the Productivity Pro newsletter!

As a subscriber, you'll receive regular updates and insights on the latest productivity strategies and tools. Our team of experts is constantly researching and testing new techniques to help you get more done in less time, and we can't wait to share them with you.

In each newsletter, you'll find:

Productivity tips and tricks: From time management techniques to task prioritization strategies, we'll share practical advice you can use to boost your productivity.
Resource round-ups: Looking for the best productivity apps or tools? We'll highlight the ones we've found most helpful and share our insights on how to use them effectively.
Productivity success stories: Hear from real people who have used our strategies and tools to transform their workflows and achieve their goals.
Exclusive offers and discounts: As a subscriber, you'll get access to special deals and discounts on our products and services.
So if you're ready to take control of your time and boost your productivity, sign up for the Productivity Pro newsletter today!

Join 150+ Members who are getting Productive
<br/>
<div className='grid grid-cols-2 gap-0'>
  <div>
  <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7015550296219119616"><h3 className='text-white text-center p-2 m-auto mt-5 w-fit'style={{backgroundColor:"blue",borderRadius:"1.25rem"}}>Subscribe on LinkedIn</h3></a>
  </div>
  <div>
  <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7015550296219119616"><h3 className='text-white text-center p-2 m-auto mt-5 w-fit'style={{backgroundColor:"gray",borderRadius:"1.25rem"}}>Checkout ProductivityPro</h3></a>
  </div>
</div>
<br />
</p>
          </div>
          <div className='m-auto'>
            <Image src={News} height="300px" width="300px"/>
          </div>
        </div>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
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
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/clint-briley-50056920a/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/fireclint'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>

                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  <Link href='/resume'>
                    <a>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
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
