import { getAllProducts } from '@/lib/get-data';
import React from 'react';
import ProductCard from './ProductCard';

const PopularProducts = async() => {
   const Products =await getAllProducts()
   const SelectedProducts=Products.slice(0,3)
   // console.log(SelectedProducts)
    return (
         <div className='container mx-auto bg-neutral text-white space-y-2 p-4 '>
       <div className='flex justify-center'>
       
       </div>
        <h1 className='text-center text-2xl font-bold'>Popular products</h1>
     
       <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-50'>
        {
           SelectedProducts.map(product=>
            <ProductCard key={product.id} product={product}/>
           ) 
        }
       </div>
          
     </div>
    );
};

export default PopularProducts;