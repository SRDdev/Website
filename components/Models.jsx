import React from 'react';
import Image from 'next/image'
import qaimage from '../public/assets/QABERT.png'
import maskimage from '../public/assets/masked.png'
import script from '../public/assets/AI.png'
import try_image from '../public/assets/try.png'
import modelimage from '../public/assets/blocks.png'

const Models = () => {
    return(
        <>
        <div id='Models' className='w-full h-full mb-[150px]' style={{backgroundColor:"#ffff"}}>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-[#ff9100]'></p>
            <h2 className='py-4'><Image src={modelimage} height="30px" width="30px" alt="/" /> Open Source Models </h2>
            <p>I am generally interested in the area of Deep learning.More specifically in language and vision modalities.I enjoy implementing research ideas, sometimes incorporating them into practical applications, and communicating my implementation details through open source models.</p>
            <p>More models comming soon...</p>
            <br/><br/>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
            {/*Script GPT*/}
            <div className="p-0 shadow-xl bg-white hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1rem",visibility: "visible", opacity: 1}}>
            <div className="p-4 rounded-full" style={{borderRadius:"1rem"}}>
            <div className="flex flex-col hover:text-white">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className="p-1 text-xl">ScriptGPT</h3>
            <Image src={script} height="25px" width="25px" alt="/" />
            </div>
                <p className="p-1 text-sm">ScriptGPT is a model series which allows users to generate YouTube , Video scripts. These scripts can be used to create new and exciting content.</p>
                <h4 className="p-1 " style={{textAlign: "center",width:"fit-content"}}><a href="https://huggingface.co/SRDdev/Script_GPT" target="_blank" rel="noreferrer">Try Models <Image src={try_image} height="15px" width="15px" alt="/" /></a></h4>
            </div>
            </div>
            </div>
            {/* QABERT*/}
            <div className="p-0 shadow-xl  bg-white hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1rem",visibility: "visible", opacity: 1}}>
            <div className="p-4 rounded-full" style={{borderRadius:"1rem"}}>
            <div className="flex flex-col hover:text-white">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 className="p-1 text-xl">QABERT small</h3>
                <Image src={qaimage} height="25px" width="25px" alt="/" />
                </div>
                <p className="p-1 text-sm">QA-BERT is a Question Answering Model. This model is a lighter version of any of the question-answering models out there</p>
                <h4 className="p-1 " style={{textAlign: "center",width:"fit-content"}}><a href="https://huggingface.co/SRDdev/QABERT-small" target="_blank" rel="noreferrer">Try Model <Image src={try_image} height="15px" width="15px" alt="/" /></a></h4>
            </div>
            </div>
            </div>
            {/* HingMaskedLM */}
            <div className="p-0 shadow-xl  bg-white hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1rem",visibility: "visible", opacity: 1}}>
            <div className="p-4 rounded-full" style={{borderRadius:"1rem"}}>
            <div className="flex flex-col hover:text-white">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className="p-1 text-xl">HingMaskedLM</h3>
            <Image src={maskimage} height="25px" width="25px" alt="/" />
            </div>
                <p className="p-1 text-sm">Hinglish MaskedLM is a Masked Language Model.This model is custom trained on Hinglish Data. Hinglish is a combination of Hindi & English</p>
                <h4 className="p-1 " style={{textAlign: "center",width:"fit-content"}}><a href="https://huggingface.co/SRDdev/HingMaskedLM" target="_blank" rel="noreferrer">Try Model <Image src={try_image} height="15px" width="15px" alt="/"/></a></h4>
            </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Models;