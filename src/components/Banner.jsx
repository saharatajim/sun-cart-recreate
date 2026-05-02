import Image from 'next/image';
import React from 'react';
import 'animate.css';
import { GoDotFill } from 'react-icons/go';
import { FaArrowRight } from 'react-icons/fa';
const Banner = () => {
    return (
      <div>
          <div className='bg-neutral container mx-auto text-white px-5 py-10 flex flex-col md:flex-row justify-center gap-20 items-center '>
           
           <div className='space-y-3'>
            {/* badge */}
            <div className="badge   badge-outline badge-warning">
  <GoDotFill className=''/>
  Summer 2025 Is Here
</div>
            
            {/* heading */}
            <div className='text-3xl animate__animated animate__rubberBand  font-bold'>Live Your <br /><span className='text-warning'>Best Summer
Ever</span>
</div>
            {/* paragraph */}
            <div>Vibrant. Bold. Tropical. Everything you need for the perfect sunny adventure.</div>
            {/* buttons */}
            <div className='space-x-4'>
                <button className='btn btn-outline' >Explore Now <FaArrowRight /></button>
                <button className='btn btn-w'>See details</button>
            </div>
           </div>

           <div >
            <Image className=' animate-pulse h-auto shadow-lg shadow-gray-500/30 rounded-2xl' loading="eager" src={'/4902528.jpg'} width={500} height={500} alt='banner'/>
           </div>
           
        </div>
        
      </div>

    );
};

export default Banner;