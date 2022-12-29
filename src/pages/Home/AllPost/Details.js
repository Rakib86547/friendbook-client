import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();
    const {image, text} = details;
    return (
        <div className='w-full'>            
            <div className="card shadow mb-4">
                <div className="card-body">
                    <p>{text}</p>
                </div>
                <figure><img src={image} alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default Details;