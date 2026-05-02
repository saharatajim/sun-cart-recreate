import React from 'react';

const TopBrands = () => {
    return (
        <div className='container mx-auto bg-neutral text-white text-center py-10 space-y-4' >
            <p className='text-warning'> Trusted By Thousands</p>
            <p className='text-2xl font-bold'>Top Brands</p>
            <div className='grid md:grid-cols-3 justify-center px-50 gap-5'>
                <div className='border rounded p-5 text-warning font-bold text-xl'>Nike</div>
                <div className='font-bold text-xl border rounded p-5 text-warning'>AxisY</div>
                <div className='font-bold text-xl border rounded p-5 text-warning'>Iunik</div>
            </div>
        </div>
    );
};

export default TopBrands;