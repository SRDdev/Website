import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import translationimg from '../public/assets/projects/translation.png'
import imagecaption from '../public/assets/projects/image_captioning.jpeg'
import colorextraction from '../public/assets/projects/material_you.png'
import waves from '../public/assets/projects/waves.png'
import plants from '../public/assets/projects/plants.png'
import tweet from '../public/assets/projects/twitter.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full h-full' style={{backgroundColor:"#ffffff"}}>
      <div className='max-w-[1240px] mx-auto px-2 py-16 mb-[32px]'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-4 p-0'>
          <ProjectItem
            title='Hinglish Translation'
            backgroundImg={translationimg}
            projectUrl='https://github.com/SRDdev/Neurohack'
            description='A Translation model which is built using TensorFlow in 24hr.The model follows the Transformer Architecture and is built from scratch to translate English sentences to Hinglish, model provides an accuracy of 94%.'
            />
          <ProjectItem
            title='Image Captioning'
            backgroundImg={imagecaption}
            projectUrl='/property'
            description='A Multimodality model for Image Captioning. The model is built from scratch using the a Vision & Language Transoformer.The dataset used to train is Conceptual Captions by Google.'
            />
            <ProjectItem
            title='Material You'
            backgroundImg={colorextraction}
            projectUrl='https://github.com/SRDdev/MaterialYou'
            description='This Project is an attempt to understand and recreate Googles latest update in Color-Extraction called as Material You. It will provide you with color-palette to use on your website , brand as per the main image on the website or brand.'
            />

            <ProjectItem
            title='Plant Disease Detection'
            backgroundImg={plants}
            projectUrl='https://github.com/SRDdev/Potato-Plant-Disease-Classification'
            description='The Project aims to detect Potato Plant Disease🌱 from the uploaded images of the leaves of the before the plant gets the disease. The main aim of the repo was to learn CNNs with tensorflow.'
            />

            <ProjectItem
            title='Wave Height Forecasting'
            backgroundImg={waves}
            projectUrl='https://github.com/SRDdev/Wave-Height-Forecasting'
            description='The Project Aims to find solution to the problem of accuracy and time-lag in wave height prediction using Multivariate Timeseries Modelling 🌊'
            />

            <ProjectItem
            title='Twitter-Sentiment-Analysis'
            backgroundImg={tweet}
            projectUrl='https://github.com/SRDdev/Twitter-Sentiment-Analysis'
            description='This Repository consists of Twitter Tweet Sentiment Analysis code which we wrote in a Workshop related to Natural Language Processing. This code represents various stages of NLP Project'
            />

        </div>
      </div>
    </div>
  );
};

export default Projects;
