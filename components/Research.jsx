import React from 'react'

const Research = () => {
    return(
        <>
        <div id='research' className='w-full h-full' style={{backgroundColor:"#ffffff"}}>
            <div className='max-w-[1240px] mx-auto px-2 py-10'>
                <p className='text-xl tracking-widest uppercase text-[#ff9100]'>Conference ,Talks & Other</p>
                <h2 className='py-4 pb-0 mb-0'>Research Papers</h2>
            </div>
            <div className='grid md:grid-cols-1 p-0'>
                <h3 className='ml-[150px] justify-left text-xl'>Automatic Irrigation System using Internet of Things</h3>
                <p className='ml-[150px] mr-[150px] justify-left mb-10'><br/>AutoSprout is an Automatic Irrigation System which enables users to login to an web or app and monitor their plants as well as agricultural lands.<br /></p>
            </div>
            <div className='grid md:grid-cols-1 p-0'>
                <h3 className='ml-[150px] justify-left text-xl'>Multiclass Classification of Aerial Farm Field Images using CNN</h3>
                <p className='ml-[150px] mr-[150px] justify-left mb-10'><br/>This research explores the use of convolutional neural networks (CNNs) to accurately classify aerial images of crop fields. By creating an annotated dataset and training the CNN model, the study achieved over 90% accuracy in differentiating various crop types and road areas. The successful classification of crops using aerial imagery has significant implications for precision agriculture, enabling targeted interventions and optimized resource allocation to enhance crop yields.<br /></p>
            </div>
            <div className='grid md:grid-cols-1 p-0'>
                <h3 className='ml-[150px] justify-left text-xl'>Rethinking Data Integrity in Federated Learning</h3>
                <p className='ml-[150px] mr-[150px] justify-left mb-10'>IEEE | December 22<br/>Federated Learning is a new approach to machine learning which allows users to train models on their data without the data leaving the edge device. However, this is vulnerable to data manipulation by attackers. This paper explores the data integrity of Federated Learning, and models different types of cyberattacks. Conclusions are presented along with the characteristics and behaviors of the attacks.<br /><a href="https://ieeexplore.ieee.org/document/10150535" className='text-blue-500 hover:text-blue-700 text-bold'>Link</a></p>
            </div>
            
            <div className='grid md:grid-cols-1 p-0'>
                <h3 className='ml-[150px] justify-left text-xl'>Python Bootcamp</h3>
                <p className='ml-[150px] mr-[150px] justify-left mb-10'>Talks<br/>I had the opportunity to teach at Symbiosis Institute of Technology Pune, teaching more than 100 students for over a month on various topics such as numpy, pandas, matplotlib, and other data analysis tools with my fellow members. It has been a fulfilling experience to share my knowledge and see my students develop new skills.</p>
            </div>

        </div>
        </>
    )
}

export default Research