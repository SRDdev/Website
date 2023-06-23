import React from 'react';
import Image from 'next/image';
import script from '../public/assets/VisualAudioAI.png';
import modelimage from '../public/assets/PATENT.png';

const Patents = () => {
  return (
    <div id='Patents' className='w-full h-full mb-[150px]' style={{ backgroundColor: "#ffff" }}>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <h2 className='py-4'><Image src={modelimage} height="30px" width="30px" alt="/" /> Patents</h2>
        <p>Yes, I am a Patent Holder! Here's a showcase of my patented solutions.</p>
        <div className='grid grid-cols-1 lg:grid-cols-1 gap-10 pt-4'>
          {/* Audio Script */}
          <div className='grid grid-cols-1 gap-8'>
            <div className="p-0 hover:scale-105 ease-in duration-300" data-sr-id="17" style={{ borderRadius: "1.5rem", visibility: "visible", opacity: 1, backgroundColor: "#f1f3f4", boxShadow: "0 0 35px rgba(0, 0, 0, 0.1)" }}>
              <div className="p-4 rounded-full" style={{ borderRadius: "1rem" }}>
                <div className="flex flex-col">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 className="p-1 text-xl">Assistance Platform for Visually Impaired Person using Image Captioning</h3>
                    <Image src={script} height="50px" width="50px" alt="/" />
                  </div>
                  <p>Indian Patent | Published 2023</p>
                  <p>Our solution can help visually impaired people access and experience the world around them by providing them with information and descriptions of the images.</p>
                  <br />
                  <p><b>Authors:</b> Mr. Shreyas Dixit, Dr. Parikshit Mahalle, Dr. Pradnya Dixit, Mr. Yashwant Ingle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patents;
