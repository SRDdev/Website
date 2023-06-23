import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import hugging from '../public/assets/huggingface.png'
import { AiOutlineMail } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center' style={{backgroundColor:"#ffff"}}>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            DEVELOPING ML AS A PASSION 
          </p><br></br><br></br>
          <h1 className='py-1 ' style={{ fontFamily: 'SF Pro Display, sans-serif' }}>Shreyas Dixit</h1>
          <p className='py-4 text-gray-600 sm:max-w-[78%] m-auto' >
          ML Intern @BVIRAL | Student Researcher | Patent Holder | Joint Technical Head @SEC VIIT  ML Developer @MLSC VIIT 
          </p>
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
            <a
              href='https://huggingface.co/SRDdev'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-110 ease-in duration-300'>
                <Image src={hugging} height="20px" width="20px" alt="/"/>
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
  );
};

export default Main;
