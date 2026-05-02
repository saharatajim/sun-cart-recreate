import React from 'react';

const loading = () => {
    return (
        <div className='flex justify-center  bg-neutral p-12 container mx-auto'>
            <span className="loading loading-spinner text-warning"></span>
        </div>
    );
};

export default loading;