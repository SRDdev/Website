import React from 'react';
import dpai from '../public/assets/skills/dpai.png';
import google from '../public/assets/skills/google.png'
import Image from 'next/image';

const Models = () => {
    return(
        <>
        <div id='Models' className='w-full h-full' style={{backgroundColor:"#ffff"}}>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <h2 className='py-4'>Open Source Models</h2>
            <p>I am generally interested in the area of Deep learning.More specifically in language and vision modalities.I enjoy implementing research ideas, sometimes incorporating them into practical applications, and communicating my implementation details through open source models.</p>
            <p>More models comming soon...</p>
            <br/><br/>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
            {/*Script GPT*/}
            <div className="p-0 shadow-xl bg-white hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1rem",visibility: "visible", opacity: 1}}>
            <div className="p-4 rounded-full" style={{borderRadius:"1rem"}}>
            <div className="flex flex-col">
                <h3 className="p-1 text-gray-700 text-xl">ScriptGPT</h3>
                <p className="p-1 text-gray-700 text-sm">ScriptGPT is a GPT model built to generate Youtube Scripts. The current version is a smaller version based on few videos.</p>
                <h4 className="p-1 text-gray-700" style={{textAlign: "center",width:"fit-content"}}><a href="https://huggingface.co/SRDdev/Script_GPT" target="_blank">Try Model</a></h4>
            </div>
            </div>
            </div>
            {/* QABERT*/}
            <div className="p-0 shadow-xl  bg-white hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1rem",visibility: "visible", opacity: 1}}>
            <div className="p-4 rounded-full" style={{borderRadius:"1rem"}}>
            <div className="flex flex-col">
                <h3 className="p-1 text-gray-700 text-xl">QABERT-small</h3>
                <p className="p-1 text-gray-700 text-sm">QA-BERT is a Question Answering Model. This model is a lighter version of any of the question-answering models out there</p>
                <h4 className="p-1 text-gray-700" style={{textAlign: "center",width:"fit-content"}}><a href="https://huggingface.co/SRDdev/QABERT-small" target="_blank">Try Model</a></h4>
            </div>
            </div>
            </div>
            {/* HingMaskedLM */}
            <div className="p-0 shadow-xl  bg-white hover:bg-gradient-to-r from-[#ff9100] to-[#ffb24d] hover:scale-105 ease-in duration-300" data-sr-id="17" style={{borderRadius:"1rem",visibility: "visible", opacity: 1}}>
            <div className="p-4 rounded-full" style={{borderRadius:"1rem"}}>
            <div className="flex flex-col">
                <h3 className="p-1 text-gray-700 text-xl">HingMaskedLM</h3>
                <p className="p-1 text-gray-700 text-sm">Hinglish MaskedLM is a Masked Language Model.This model is custom trained on Hinglish Data. Hinglish is a combination of Hindi & English</p>
                <h4 className="p-1 text-gray-700" style={{textAlign: "center",width:"fit-content"}}><a href="https://huggingface.co/SRDdev/HingMaskedLM" target="_blank">Try Model</a></h4>
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