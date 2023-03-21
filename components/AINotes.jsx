import React from 'react';
import Image from 'next/image'
import ML from '../public/assets/ML.png'
const AINotes = () => {
    return(
        <>
        <div id='AINotes' className='w-full h-full' style={{backgroundColor:"#ffffff"}}>
            <div className='max-w-[1240px] mx-auto px-2 py-10'>
                <p className='text-xl tracking-widest uppercase text-[#ff9100]'>ML & DL Foundations</p>
                <h2 className='py-4 pb-0 mb-0'>AI Notes</h2>
            </div>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full pb-20 md:grid grid-cols-1 gap-8'>
                <div className="max-w-[250px] p-5 shadow-xl bg-[#F5F5F5] hover:bg-gradient-to-l from-[#F5F5F5] to-[#DCDCDC] hover:scale-105 ease-in duration-300" style={{borderRadius:"1rem",visibility: "visible", opacity: 1}}>
                    <h3>🛠️Foundations</h3>
                    <li><a href="https://srddev.notion.site/Introduction-to-Machine-Learning-17ddafc2348444068dae1330e42fa202">Numpy</a></li>
                    <li><a href="https://srddev.notion.site/Pandas-14673b0327584d628fb2f25068635a5c">Pandas</a></li>
                    <li><a href="https://srddev.notion.site/Matplotlib-905bdb099aa94bb09e9f043509329358">Matplotlib</a></li>
                </div>
                <p>More comming soon...</p>
            </div>
        </div>
        </>
    )
}

export default AINotes