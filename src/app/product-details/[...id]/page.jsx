import { getAllProducts } from '@/lib/get-data';
import Image from 'next/image';
import React from 'react';

const ProductDetail =async ({params}) => {
const paramRes= await params
const Products =await getAllProducts()

const selectedDetails=Products.find(detail=> detail.id==paramRes.id)
const{name,description,brand,price,rating,category,image,stock}=selectedDetails
console.log(name,description,brand,price,rating,category,image,stock)
  return (
        <div className='container mx-auto bg-neutral text-white space-y-2 p-6 '>
           <h1 className='font-bold text-2xl text-center'>Product Details</h1>

       
              <div className='bg-white rounded flex flex-col md:flex-row justify-between p-5 gap-10    text-black '>
            <div>
                <h1 className='font-bold text-xl pb-2'>{name}</h1>
            <div>
                <Image className='rounded-2xl w-100 h-60' src={image} height={500} width={800} alt='detail '/>
            </div>
            </div>

            <div className='flex  flex-col justify-center items-start space-y-5'>
                 
                <p className='text-3xl font-semibold'>{description}</p>
                <div className='flex gap-4'>
                    <p className='badge text-2xl' >Price: {price}$</p>
                 <p className='badge badge-outline badge-warning'>Brand: {brand}</p>
                </div>
               <div className='space-x-5'>
                 <button className='btn btn-warning rounded-2xl'>Buy Now</button>
                <button className='btn btn-primary rounded-2xl'>Add To Cart</button>
               </div>
              
            </div>
           </div>
         </div>
            
      
    );
};

export default ProductDetail;