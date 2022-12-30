import { HeartIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaShareAlt, FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { postComment } from '../../../component/API/Booking/Booking';
// import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import './PostDetails.css';

const PostDetails = ({ post, commment }) => {
    // const {user} = useContext(AuthContext);
    const { text, image, _id } = post;
    const [comment, setComment] = useState('');
    const [like, setLike] = useState(0);
    const [isLike, setIsLike] = useState(false);

    const handleLike = () => {
        setLike(isLike ? like - 1 : like + 1);
        setIsLike(!isLike)
    };

    const handleComment = (even) => {
        even.preventDefault();
        postComment(comment);
        even.target.reset();
        toast.success('comment added')
    }
    // console.log(commment)
    return (
        <div>
            <div className="card shadow mb-4 p-4">
                <div className="card-body">
                    <p>{text}</p>
                </div>
                <figure><img className='rounded-md w-full' src={image} alt="Shoes" /></figure>
                <div className='flex justify-between py-2 px-2'>
                    <div className='flex items-center'>
                        <div className='flex items-center'>
                            <FaThumbsUp onClick={handleLike} className={`${isLike ? 'text-primary' : 'text-secondary'} cursor-pointer mr-1 w-5 h-5`} />
                            <HeartIcon onClick={handleLike} className='w-6 h-6 text-red-500 cursor-pointer' />
                        </div>
                        <span className='ml-3 like'>{like} people like it</span>
                    </div>
                    <p className='flex items-center'><FaShareAlt className='mr-1' /> Share</p>
                </div>
                {/* <p><strong>{user?.displayName}</strong> {commment}</p> */}

                <form onSubmit={handleComment} className='my-3 ml-3'>
                    <textarea onChange={(e) => setComment(e.target.value)} className="textarea textarea-bordered w-full" placeholder="write your comment"></textarea>
                    <button className='bg-gradient-to-r from-primary to-secondary text-white mt-2 px-[25px] py-[6px] rounded-md'>Submit</button>

                </form>
                <div className='m-2'><Link to={`/details/${_id}`}>
                    <button className='bg-secondary text-white mt-2 px-[25px] py-[6px] rounded-md'>See Details</button>
                </Link></div>
            </div>
        </div>
    );
};

export default PostDetails;