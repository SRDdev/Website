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
          I am an Undergraduate student majoring in Electronics & Telecommunications at VIIT Pune. I have a keen interest in the field of <b>Deep Learning</b>, with a specific focus on the intersection of Language and Vision modalities. I enjoy exploring and <b>implementing research ideas</b>, and have a passion for communicating my work through articles and teaching others through courses and talks.
          <br/><br/>
          I like to write highly readable and self-contained code, with Python being my primary programming language. I am an <b>intermediate learner in TensorFlow and PyTorch.</b> 
          <br/><br/>
          I am currently working on <b>building Open Source models on HuggingFace 🤗</b> and learning about Machine Learning in Production. I enjoy writing technical articles and giving talks about Deep Learning.
          <br></br><br></br>
          Off the work, I enjoy watching movies and TV shows like Suits & a regular cricket player. If you have any questions or need assistance, feel free to reach out to me. I am always happy to help!
          <br></br>
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