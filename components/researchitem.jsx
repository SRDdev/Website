import Link from 'next/link';
import React from 'react';

const researchitem = ({title, date,description,publication}) => {
    return(
        <div className='grid md:grid-cols-1 p-0'>
            <h3 className='ml-[150px] justify-left text-xl'>{title}</h3>
            <p className='ml-[150px] mr-[150px] justify-left mb-10'>{publication} | {date}<br/>{description}</p>
        </div>
    )
}

export default researchitem