import { CameraIcon, PhotoIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { setBooking } from '../../../component/API/Booking/Booking';
import Spinner from '../../../component/Spinner/Spinner';
// import setBooking from '../../../component/API/Booking/Booking';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import './CreatePost.css';

const CreatePost = () => {
    const [text, setText] = useState('');
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [loading, setLoading] = useState(false)

    const handlePost = (even) => {
        even.preventDefault();
        setLoading(true)
        const form = even.target;
        const image = form.image.files[0];
        console.log(image)
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_KEY}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {
                    const image = data.data.url;
                    const booking = { text, image, email }
                    setBooking(booking)
                    toast.success('Posted')
                    form.reset()
                    setLoading(false)
                }
            })
            .catch(error => {
                console.log(error);
                setLoading(false)
            })

    }
    return (
        <div className=''>
            <h1>Create Post</h1>
            <form onSubmit={handlePost} className='w-full h-[200px] shadow mb-5 rounded-md p-3'>
                <textarea onChange={(e) => setText(e.target.value)} className="textarea textarea-bordered w-full" placeholder="what`s your mind?"></textarea>
                <div className='flex items-center justify-between'>
                    <label htmlFor="" className='flex video cursor-pointer'><VideoCameraIcon className='mr-1 w-5 h-5 text-red-500' /> live video</label>
                    {/* <br /> */}
                    <input type="file" name='image' id='file' accept='image/*' placeholder="upload your photo" className="input w-full" />
                    <label htmlFor="file" className='flex photo cursor-pointer'><PhotoIcon className='icon mr-1 text-primary w-5 h-5' /> photo/video</label>
                    {/* <br /> */}
                    <label htmlFor="" className='filling flex cursor-pointer'><CameraIcon className='mr-1 w-5 h-5 text-yellow-300' /> Filling/Activity</label>
                </div>
                <button className='bg-gradient-to-r from-primary to-secondary text-white mt-8 px-[50px] py-[6px] rounded-md'>{loading ? <Spinner /> : 'Post'}</button>
            </form>
        </div>
    );
};

export default CreatePost;