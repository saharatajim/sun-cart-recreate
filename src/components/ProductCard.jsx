import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStarHalfStroke } from 'react-icons/fa6';

const ProductCard = ({product}) => {
   
    return (
        <div className='bg-white p-2 scale-70 hover:animate-pulse md:scale-80 lg:scale-90  rounded-2xl shadow-2xl'>
           <div className='text-black  space-y-3'>
           <div className='flex justify-center'>
             <Image src={product?.image} width={600} height={500} alt='card photo' className='w-full h-60 object-cover rounded-2xl'/>
           </div>
            <div className='badge badge-warning badge-outline flex flex-row items-center gap-1'>
             <h1> Rating:{product?.rating}</h1>
             <FaStarHalfStroke/>
            </div>
            <h1 className='font-bold text-xl'>{product?.name}</h1>
           
          
            <h1 className='font-bold text-sm'>Price:{product?.price}$</h1>
            
            <h1>Quantity:{product?.stock}pc</h1>
            <Link href={`/product-details/${product?.id}`}><button className='btn btn-warning w-full'>View Details</button></Link>
           </div>
        </div>
    );
};

export default ProductCard;
