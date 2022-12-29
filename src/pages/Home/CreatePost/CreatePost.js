import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { setBooking } from '../../../component/API/Booking/Booking';
// import setBooking from '../../../component/API/Booking/Booking';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const CreatePost = () => {
    const [text, setText] = useState('');
    const {user} = useContext(AuthContext);
    const email = user?.email;
    
    const handlePost = (even) => {
        even.preventDefault();
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
            if(data.success === true) {
                const image = data.data.url;
                const booking = {text, image, email}
                setBooking(booking)
                toast.success('Posted')
               form.reset()
            }
        })

    }
    return (
        <div className=''>
            <h1>Create Post</h1>
            <form onSubmit={handlePost} className='w-[400px]'>
            <textarea onChange={(e) => setText(e.target.value)} className="textarea textarea-bordered w-full" placeholder="what`s your mind?"></textarea> <br />
            <input type="file" name='image' placeholder="Type here" className="input w-full" /> <br />
            <button className='bg-gradient-to-r from-primary to-secondary text-white mt-2 px-[25px] py-[6px] rounded-md'>Post</button>
            </form>
        </div>
    );
};

export default CreatePost;