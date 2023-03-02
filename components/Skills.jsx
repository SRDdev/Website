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
        <div className='grid grid-cols-1 gap-8'>
          <div className="p-0 shadow-xl hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1.5rem",visibility: "visible", opacity: 1,backgroundColor:"#f2f2f2"}}>
          <div className="p-4 shadow-xl rounded-xl"style={{borderRadius:"1.5rem"}}>
                  <h5 className="p-4">Epsitek Technologies<br />APR 2022 - MAY 2022</h5>
                  <p className='p-4'>During my internship, I developed a multiple page website for a holiday home or villa. The project involved working in an Agile team system, following an iterative and collaborative approach to project management. We analyzed the client&apos;s requirements, developed a project plan, and used HTML, CSS, JavaScript to develop the website. We incorporated features such as a Attractive landing page , image gallery, and contact form. Through collaborative teamwork and regular meetings, we successfully delivered a website that met the client&apos;s expectations.</p>
            </div>
          </div>
        </div>
        <br></br><br></br>
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
