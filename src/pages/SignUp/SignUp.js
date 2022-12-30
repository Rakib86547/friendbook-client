import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../../component/Spinner/Spinner';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import google from '../../assest/google.png';
import setAuthToken from '../../component/UseToken/UseToken';
import './SignUp.css';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState('')
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const from = location.from?.state?.pathname || '/home'
console.log(image)
    const handleSignup = (data) => {
        setSignUpError('')
        setLoading(true);
        // data.preventDefault();
        const email = data.email;
        const password = data.password;
        const name = data.name;
        const university = data.university;
        const address = data.address;
        const image = data.image[0];
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
                    createUser(email, password)
                        .then((result) => {
                            const user = result.user;
                            // setUsers(user)
                            const image = data.data.url;
                            setAuthToken(user, name, image, university, address)
                            updateUser(name, data.data.url)
                                .then(() => {
                                    navigate(from, {replace: true})
                            toast.success('Signup Successfully')
                            setLoading(false)
                        })
                        .catch(error => {
                            setSignUpError(error.message)
                            setLoading(false)
                        })
                })
            .catch(error => {
                console.log(error.message);
                setSignUpError(error.message);
                setLoading(false)
            })
    }
})
    };
const handleGoogleLogin = (Provider) => {
    signInWithGoogle(googleProvider)
        .then(result => {
            const user = result.user;
            const name = user?.displayName;
            const image = user?.photoURL;
            setAuthToken(user, name, image)
            navigate(from, {replace: true});
        })
}
return (
    <div className="hero h-[100vh] max-w-[1000px] mx-auto">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left md:w-[60%]">
                <h1 className="text-2xl font-bold">Welcome to Friendbook</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut <br /> assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <form onSubmit={handleSubmit(handleSignup)} className="card flex-shrink-0 md:w-[40%] bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="name"
                            className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", { required: 'please inter valid email' })}
                            type="email"
                            placeholder="email"
                            className="input input-bordered" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">University</span>
                        </label>
                        <input
                            {...register("university", { required: true })}
                            type="text"
                            placeholder="your university"
                            className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            {...register("address", { required: true })}
                            type="text"
                            placeholder="your address"
                            className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Upload Your Image</span>
                        </label>
                        <input
                            {...register("image", { required: true })}
                            type="file"
                            placeholder="photo"
                            id='file'
                            className="input input-bordered" />
                            <label htmlFor="file" onChange={(e) => setImage(e.target.value)} className='signup-photo bg-gradient-to-r from-primary to-secondary'>Chose Photo</label>
                    </div>

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...register("password", {
                                minLength: { value: 6, message: 'password must be 6 character' }
                            })}
                            type='password'
                            placeholder="password"
                            className="input input-bordered" />

                        <div className="form-control mt-6">
                            {
                                signUpError && <p className='text-red-500'>{signUpError}</p>
                            }
                            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">
                                {
                                    loading ? <Spinner /> : 'Sign Up'
                                }
                            </button>
                        </div>
                        <p className='text-center'>have an account <Link to='/' className='text-primary'>Login</Link></p>
                    </div>
                </div>
                <div>
                    <button onClick={handleGoogleLogin} className='flex items-center border w-[340px] mx-auto py-2 rounded-full px-3'>
                        <img src={google} alt="" className='w-[30px] h-[30px]' />
                        <h3 className='text-center w-full'>Continue With Google</h3>
                    </button>
                </div>
            </form>

        </div>
    </div>
);
};

export default SignUp;