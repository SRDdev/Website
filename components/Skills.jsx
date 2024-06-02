import Image from 'next/image';
import React from 'react';
import dpai from '../public/assets/skills/dpai.png';
import google from '../public/assets/skills/google.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full h-full mb-[100px]' style={{backgroundColor:"#ffff"}}>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <h2 className='py-4'>Certificates & Experience</h2>
        <p className='text-xl tracking-widest uppercase text-[#ff9100] p-4'>
          Experience
        </p>
        <div className='grid grid-cols-2 gap-8'style={{marginBottom:"50px"}}>

        {/* Research Fellow AISC*/}
        {/* <div className='grid grid-cols-1 gap-8' >
        <div className="p-0 hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1.5rem",visibility: "visible", opacity: 1, backgroundColor: "#f1f3f4",boxShadow: "0 0 25px rgba(0, 0, 0, 0.1)"}}>
          <div className="p-4 rounded-xl" style={{borderRadius:"1.5rem"}}>
            <h3 className="pl-4" style={{fontSize:"25px"}}>Undergraduate Research Fellow</h3>
            <h5 className="p-4">Artificial Intelligence Institute of South Carolina<br />May 2024 - Current</h5>
            <p className='p-4'>
           <br></br></p>
          </div>
        </div>
        </div> */}

        {/* Dassult Systems*/}
        <div className='grid grid-cols-1 gap-8' >
        <div className="p-0 hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1.5rem",visibility: "visible", opacity: 1, backgroundColor: "#f1f3f4",boxShadow: "0 0 25px rgba(0, 0, 0, 0.1)"}}>
          <div className="p-4 rounded-xl" style={{borderRadius:"1.5rem"}}>
            <h3 className="pl-4" style={{fontSize:"25px"}}>Deep Learning Engineer</h3>
            <h5 className="p-4">Dassult Systems & VIIT<br />Nov 2023 - May 2024</h5>
            <p className='p-4'>
            Worked on Stutter Detection using Deep Learning. Project Included data gathering from schools, colleges, and universities. Data preprocessing, Exploratory data analysis, etc.<br></br>Developed a system for stutter detection, which includes distinguishing the time of stuttering and calculating the percentage of 
stuttering. This work utilized modern deep learning architectures such as Wav2Vec2 and Agnostic BERT. <br></br></p>
          </div>
        </div>
        </div>

      {/* Freelance MLE */}
        <div className='grid grid-cols-1 gap-8' >
        <div className="p-0 hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1.5rem",visibility: "visible", opacity: 1, backgroundColor: "#f1f3f4",boxShadow: "0 0 25px rgba(0, 0, 0, 0.1)"}}>
          <div className="p-4 rounded-xl" style={{borderRadius:"1.5rem"}}>
            <h3 className="pl-4" style={{fontSize:"25px"}}>Machine Learning Engineer</h3>
            <h5 className="p-4">Freelance<br />Jan 2024 - Mar 2024</h5>
            <p className='p-4'>
            Contributed to the development of "Real-time Accent Conversion System: Indian to US Accent".</p>
          </div>
        </div>
        </div>

      {/* BVIRAL */}
        <div className='grid grid-cols-1 gap-8' >
        <div className="p-0 hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1.5rem",visibility: "visible", opacity: 1, backgroundColor: "#f1f3f4",boxShadow: "0 0 25px rgba(0, 0, 0, 0.1)"}}>
          <div className="p-4 rounded-xl" style={{borderRadius:"1.5rem"}}>
            <h3 className="pl-4" style={{fontSize:"25px"}}>Machine Learning Intern</h3>
            <h5 className="p-4">BVIRAL<br />June 2023 - Sept 2023</h5>
            <p className='p-4'>
During my time at BVIRAL, I will be actively involved in building a deep learning pipeline for their content company. This exciting project entails developing a comprehensive system that generates relevant titles and categorizes millions of short-form videos on Instagram. As a Deep Learning Engineering Intern, my responsibilities will include designing and implementing algorithms, optimizing model performance, and collaborating with a talented team to ensure the success and effectiveness of the pipeline. I am thrilled to contribute my skills and knowledge to this project and make a significant impact in the field of content generation and categorization.</p>
          </div>
        </div>
        </div>
      
      {/* MLSC */}
      <div className='grid grid-cols-1 gap-8' >
        <div className="p-0 hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1.5rem",visibility: "visible", opacity: 1, backgroundColor: "#f1f3f4",boxShadow: "0 0 25px rgba(0, 0, 0, 0.1)"}}>
          <div className="p-4 rounded-xl" style={{borderRadius:"1.5rem"}}>
            <h3 className="pl-4" style={{fontSize:"25px"}}>Microsoft Learn Student Ambassdor</h3>
            <h5 className="p-4">MLSC VIIT<br />June 2023 - Current</h5>
            <p className='p-4'>Leading the Microsoft Club at Vishwakarma Institute of Information Technology Pune.</p>
          </div>
        </div>
        </div>
        
      {/* WebDev */}
        <div className='grid grid-cols-1 gap-8' >
        <div className="p-0 hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1.5rem",visibility: "visible", opacity: 1, backgroundColor: "#f1f3f4",boxShadow: "0 0 25px rgba(0, 0, 0, 0.1)"}}>
          <div className="p-4 rounded-xl" style={{borderRadius:"1.5rem"}}>
            <h3 className="pl-4" style={{fontSize:"25px"}}>Website Developer</h3>
            <h5 className="p-4">Epsitek Technologies<br />APR 2022 - MAY 2022</h5>
            <p className='p-4'>During my internship, I developed a multiple page website for a holiday home or villa. The project involved working in an Agile team system, following an iterative and collaborative approach to project management. We analyzed the client&apos;s requirements, developed a project plan, and used HTML, CSS, JavaScript to develop the website. We incorporated features such as an attractive landing page, image gallery, and contact form. Through collaborative teamwork and regular meetings, we successfully delivered a website that met the client&apos;s expectations.</p>
          </div>
        </div>
        </div>



        </div>
        <p className='text-xl tracking-widest uppercase text-[#ff9100] p-4'>
          Certificates
        </p>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>

        <div className="p-0 shadow-xl hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1.5rem",visibility: "visible", opacity: 1}}>
        <div className="p-4" style={{borderTopRightRadius:"1.5rem",borderTopLeftRadius:"1.5rem",background: " #f2f2f2"}}>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-left" style={{fontSize:"22px"}}>TensorFlow Developer Certificate</h3>
          </div>
        </div>
        <div className="p-4 shadow-xl rounded-xl"style={{borderRadius:"1.5rem"}}>
                <h5 className="experience-text-role">
                <Image className='m-auto' src={dpai} width='16px' height='16px' alt='/' /> DeepLearning AI<br />OCT 2021 - NOV 2021</h5>
                <h4 className="text p-1" style={{textAlign: "center",width:"fit-content"}}><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/Z52RQJG8GLHZ" target="_blank" rel="noreferrer">Specialization Certificate 🔗</a></h4>
          </div>
        </div>

        <div className="p-0 shadow-xl hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1.5rem",visibility: "visible", opacity: 1}}>
        <div className="p-4" style={{borderTopRightRadius:"1.5rem",borderTopLeftRadius:"1.5rem",background: " #f2f2f2"}}>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-left" style={{fontSize:"22px"}}>Custom Models, Layers Loss Functions with TensorFlow</h3>
          </div>
        </div>
        <div className="p-4 shadow-xl rounded-xl"style={{borderRadius:"1.5rem"}}>
                <h5 className="experience-text-role">
                <Image className='m-auto' src={dpai} width='16px' height='16px' alt='/' /> DeepLearning AI<br />OCT 2022</h5>
                <h4 className="text p-1" style={{textAlign: "center",width:"fit-content"}}><a href="\" target="_blank" rel="noreferrer">Certificate 🔗</a></h4>
          </div>
        </div>

        <div className="p-0 shadow-xl hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1.5rem",visibility: "visible", opacity: 1}}>
        <div className="p-4" style={{borderTopRightRadius:"1.5rem",borderTopLeftRadius:"1.5rem",background: " #f2f2f2"}}>
          <div className="flex flex-col justify-center"style={{height:"65px"}}>
            <h3 className="text" style={{fontSize:"22px"}}>Sequence Models</h3>
          </div>
        </div>
        <div className="p-4 shadow-xl rounded-xl"style={{borderRadius:"1.5rem"}}>
                <h5 className="experience-text-role">
                <Image className='m-auto' src={dpai} width='16px' height='16px' alt='/' /> DeepLearning AI<br />May 2022 - Aug 2022</h5>
                <h4 className="text p-1" style={{textAlign: "center",width:"fit-content"}}><a href="" target="_blank" rel="noreferrer">Certificate 🔗</a></h4>
          </div>
        </div>

        <div className="p-0 shadow-xl hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1.5rem",visibility: "visible", opacity: 1}}>
        <div className="p-4" style={{borderTopRightRadius:"1.5rem",borderTopLeftRadius:"1.5rem",background: " #f2f2f2"}}>
          <div className="flex flex-col items-center justify-center"style={{height:"65px"}}>
            <h3 className="text" style={{fontSize:"22px"}}>Neural Networks & Deep Learning</h3>
          </div>
        </div>
        <div className="p-4 shadow-xl rounded-xl"style={{borderRadius:"1.5rem"}}>
                <h5 className="experience-text-role">
                <Image className='m-auto' src={dpai} width='16px' height='16px' alt='/' /> DeepLearning AI<br />Nov 2021 - Jan 2022</h5>
                <h4 className="text p-1" style={{textAlign: "center",width:"fit-content"}}><a href="" target="_blank" rel="noreferrer">Certificate 🔗</a></h4>
          </div>
        </div>

        <div className="p-0 shadow-xl hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1.5rem",visibility: "visible", opacity: 1}}>
        <div className="p-4" style={{borderTopRightRadius:"1.5rem",borderTopLeftRadius:"1.5rem",background: " #f2f2f2"}}>
          <div className="flex flex-col items-center justify-center"style={{height:"65px"}}>
            <h3 className="text" style={{fontSize:"22px"}}>Improving Deep Neural Networks</h3>
          </div>
        </div>
        <div className="p-4 shadow-xl rounded-xl"style={{borderRadius:"1.5rem"}}>
                <h5 className="experience-text-role">
                <Image className='m-auto' src={dpai} width='16px' height='16px' alt='/' /> DeepLearning AI<br />Apr 2022 - May 2022</h5>
                <h4 className="text p-1" style={{textAlign: "center",width:"fit-content"}}><a href="" target="_blank" rel="noreferrer">Certificate 🔗</a></h4>
          </div>
        </div>

        <div className="p-0 shadow-xl hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1.5rem",visibility: "visible", opacity: 1}}>
        <div className="p-4" style={{borderTopRightRadius:"1.5rem",borderTopLeftRadius:"1.5rem",background: "#f2f2f2"}}>
          <div className="flex flex-col justify-center"style={{height:"65px"}}>
            <h3 className="text" style={{fontSize:"22px"}}>Google Project Management</h3>
          </div>
        </div>
        <div className="p-4 shadow-xl rounded-xl"style={{borderRadius:"1.5rem"}}>
                <h5 className="experience-text-role">
                <Image className='m-auto' src={google} width='16px' height='16px' alt='/' /> Google <br />Aug 2021 - OCT 2021</h5>
                <h4 className="text p-1" style={{textAlign: "center",width:"fit-content"}}><a href="https://google.com" target="_blank" rel="noreferrer">Professional Certification🔗</a></h4>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
