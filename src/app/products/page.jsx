import ProductCard from '@/components/ProductCard';
import { getAllProducts } from '@/lib/get-data';
import React from 'react';

const AllProducts =async () => {
    const Products =await getAllProducts()
    console.log(Products)
    return (
         <div className='container mx-auto bg-neutral text-white space-y-2 p-4 '>
       <div className='flex justify-center'>
       
       </div>
        <h1 className='text-center text-2xl font-bold'>All products</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-50'>
        {
           Products.map(product=>
            <ProductCard key={product.id} product={product}/>
           ) 
        }
       </div>
          
     </div>
    );
};

export default AllProducts;