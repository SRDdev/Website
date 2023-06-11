import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import translationimg from '../public/assets/projects/translation.png'
import imagecaption from '../public/assets/projects/image_captioning.jpeg'
import colorextraction from '../public/assets/projects/material_you.png'
import text from '../public/assets/projects/TEXT.png'
import plants from '../public/assets/projects/plants.png'
import tweet from '../public/assets/projects/twitter.png'
import ProjectItem from './ProjectItem';
import script from '../public/assets/projects/Script.jpg';
import EchoSense from '../public/assets/projects/pic2audio.jpg';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Projects = () => {
  return (
    <div id='projects' className='w-full h-full' style={{backgroundColor:"#ffffff"}}>
      <div className='max-w-[1240px] mx-auto px-2 py-16 mb-[32px]'>
        <p className='text-xl tracking-widest uppercase text-[#ff9100]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-4 p-0'>
        <ProjectItem
            title='EchoSense'
            backgroundImg={EchoSense}
            projectUrl='https://huggingface.co/spaces/SRDdev/EchoSense'
            description="EchoSense is Implementation of our Patent Asstive platform for Visually Impared Person.EchoSense is a multimodality model that aims to generates Audio descriptions by looking at any given Image."
            click="Try Now !"
            icon={<FaGithub />}
            />
        <ProjectItem
            title='Scriptify'
            backgroundImg={script}
            projectUrl='https://huggingface.co/spaces/SRDdev/Scriptify'
            description="Scriptify is a Language model demo which I have built on top ScriptForge models, It allows users to generate youtube scripts."
            click="Try Now !"
            icon={<FaGithub />}
            />
          <ProjectItem
            title='Hinglish Translation'
            backgroundImg={translationimg}
            projectUrl='https://github.com/SRDdev/Neurohack'
            description='A Translation model which is built using TensorFlow in 24hr.The model follows the Transformer Architecture and is built from scratch to translate English sentences to Hinglish, model provides an accuracy of 94%.'
            click=" GitHub "
            icon={<FaGithub />}
            />
          <ProjectItem
            title='Image Captioning'
            backgroundImg={imagecaption}
            projectUrl='https://huggingface.co/spaces/SRDdev/Image-Caption'
            description='A Multimodality model for Image Captioning. The model is built from scratch using the a Vision & Language Transoformer.The dataset used to train is Conceptual Captions by Google.'
            click=" Try Now ! "
            />
            <ProjectItem
            title='Material You'
            backgroundImg={colorextraction}
            projectUrl='https://huggingface.co/spaces/SRDdev/MaterialYou'
            description='This Project is an attempt to understand and recreate Googles latest update in Color-Extraction called as Material You. It will provide you with color-palette to use on your website , brand as per the main image on the website or brand.'
            click=" Try Now ! "
            />

            <ProjectItem
            title='Plant Disease Detection'
            backgroundImg={plants}
            projectUrl='https://github.com/SRDdev/Potato-Plant-Disease-Classification'
            description='The Project aims to detect Potato Plant Disease🌱 from the uploaded images of the leaves of the before the plant gets the disease. The main aim of the repo was to learn CNNs with tensorflow.'
            click=" GitHub "
            />

            <ProjectItem
            title='Text Summarizer'
            backgroundImg={text}
            projectUrl='https://huggingface.co/spaces/SRDdev/Summarize'
            description='This Project provides you with a brief summary of the given Text. The Project allows you to paste or Upload PDF file to summarize it , It also allows you to customize the summarization % of the Final summary!'
            click=" Try Now ! "
            />

            <ProjectItem
            title='Twitter Sentiment Analysis'
            backgroundImg={tweet}
            projectUrl='https://github.com/SRDdev/Twitter-Sentiment-Analysis'
            description='This Repository consists of Twitter Tweet Sentiment Analysis code which we wrote in a Workshop related to Natural Language Processing. This code represents various stages of NLP Project'
            click=" GitHub "
            />

        </div>
      </div>
    </div>
  );
};

export default Projects;
