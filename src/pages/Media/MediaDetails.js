import React, { useState } from 'react';
import { FaShareAlt, FaThumbsUp } from "react-icons/fa";

const MediaDetails = ({ post }) => {
    const { text, image } = post;
    const [like, setLike] = useState(0);
    const [isLike, setIsLike] = useState(false);
    const handleLike = () => {
        setLike(isLike ? like-1 : like+1);
        setIsLike(!isLike)
    }
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <p>{text}</p>
                </div>
                <figure><img src={image} alt="Shoes" /></figure>
                <div className='flex justify-between py-2 px-2'>
                   <div className='flex items-center'>
                   <FaThumbsUp onClick={handleLike} className={`${isLike ? 'text-primary' : 'text-secondary'} cursor-pointer`} />
                   <span className='ml-3'>{like}people like it</span>
                   </div>
                    <FaShareAlt />
                </div>
            </div>
        </div>
    );
};

export default MediaDetails;