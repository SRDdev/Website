import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/assets/about.jpg';
import back from '../public/back3.png'
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16' style={{backgroundColor:"#ffff"}}>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#ff9100]'>
          Who I Am
          </p>
          <h2 className='py-4'>About Me</h2>
          <p className='py-2 text-gray-700 pr-[130px] text-justify' style={{fontSize:"18px"}}>
          I am an Undergraduate student majoring in Electronics & Telecommunications at VIIT Pune. I have a keen interest in the field of <b>Deep Learning</b>, particularly at the intersection of Language and Vision modalities. With a dedication to exploring and <b>implementing research ideas</b>, I am passionate about communicating my work through articles and teaching others via courses and talks.
          <br/><br/>
          I take pride in writing highly readable and self-contained code, with Python being my primary programming language. I am an <b>intermediate learner in TensorFlow and PyTorch.</b>
          <br/><br/>
          Notably, I am a <b>dual patent holder</b>, a testament to my significant contributions to innovative solutions in the field of Deep Learning. My current focus is on <b>developing inclusive solutions for specially-abled individuals</b>
          <br/><br/>
          Outside of academia, I find joy in watching movies and TV shows, with "Suits" being a personal favorite. Should you have any questions or need assistance, please feel free to reach out to me—I am always eager to help!
          <br/><br/>
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
