import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../../component/Spinner/Spinner';
import setAuthToken from '../../component/UseToken/UseToken';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInWithEmail } = useContext(AuthContext);
    const [signInError, setSignInError] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const from = location.from?.state?.pathname || '/home'
    const handleLogin = (data) => {
        setSignInError('');
        setLoading(true);
        // data.preventDefault();
        const email = data.email;
        const password = data.password;
        signInWithEmail(email, password)
            .then((result) => {
                const user = result.user;                
                setAuthToken(user)                
                navigate(from, {replace: true})                
                setLoading(false);
            })
            .catch(error => {
                console.log(error)
                setSignInError(error.message);
                setLoading(false)
            })
    }
    return (
        <div className="hero h-[100vh] max-w-[1000px] mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left md:w-[60%]">
                    <h1 className="text-2xl font-bold">Welcome to Friendbook</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut <br /> assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <form onSubmit={handleSubmit(handleLogin)} className="card flex-shrink-0 md:w-[40%] bg-base-100">
                    <div className="card-body">
                    <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered" />
                                {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    {...register("password", { required: true })}
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered" />
                                {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <p>
                                {
                                    signInError && <span className='text-red-500'>{signInError}</span>
                                }
                            </p>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">
                                {
                                    loading ? <Spinner /> : 'Login'
                                }
                                </button>
                        </div>
                        <p className='text-center'>Don`t have an account <Link  to='/signup' className='text-primary'>Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;