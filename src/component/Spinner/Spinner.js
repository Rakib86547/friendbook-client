import React from 'react';

const Spinner = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="w-4 h-4  border-2 border-dashed rounded-full animate-spin border-white mt-2"></div>
        </div>
    );
};

export default Spinner;