import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center' style={{backgroundColor:"#ffffff"}}>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            BUILDING ML AS PASSION 
          </p><br></br><br></br>
          <h1 className='py-1 text-[#425066]' style={{ fontFamily: 'SF Pro Display, sans-serif' }}>Shreyas Dixit</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto' >
          Student Researcher | Deep Learning | Joint Technical Head @SEC VIIT | ML Developer @MLSC VIIT 
          </p>
          <div className='flex items-center justify-between max-w-[430px] m-auto py-4'>
            
            <a
              href='https://www.linkedin.com/in/srddev/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/SRDdev'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a
              href='https://huggingface.co/SRDdev'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FontAwesomeIcon icon="fa-duotone fa-face-smiling-hands" />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;