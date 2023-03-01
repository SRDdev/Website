import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16' style={{backgroundColor:"#ffff"}}>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#ff9100]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-700'style={{fontSize:"20px"}}>
          I am a Sophomore from India. I am Python & Machine Learning Developer. Currently Learning Deep Neural Networks and TensorFlow Advance! I’m passionate about software development and Management.
          I like to Collaborate with people and learn and solve new problems together. I like to guide upcoming student developers. I believe in the power of community and find creating value for people through community delightful. When I’m not learning or working I love to watch and play cricket.
          Feel free to reach me here , always happy to help !
          <br></br>
          Actively Looking For Internship 👨‍💻
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-0 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
