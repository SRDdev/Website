import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const ProjectItem = ({title, backgroundImg, projectUrl,description}) => {

  const handleClick = () => {
    window.open(projectUrl, '_blank');
  };

  return (
    <div onClick={handleClick} className='grid grid-rows-2 h-[300px] w-full rounded-xl overflow-hidden group hover:bg-gradient-to-r from-[#000000] to-[#000000]'>
      <div className='relative py-0'>
        <Image className='h-full w-full object-cover rounded-t-xl group-hover:opacity-5' src={backgroundImg} alt={title}  />
        <div className='absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity h-[300px]'></div>
        <h1 className='group-hover:opacity-0 pb-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/10 text-white font-bold text-center z-10'>{title}</h1>
      </div>
      <div className='my-[-100px] hidden group-hover:block'>
          <h3 className='text-center text-white'>{title}</h3>
          <p className='p-4 text-center text-white'>{description}</p>
        </div>
      </div>
  )
}

export default ProjectItem