import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then((result) => {
                navigate('/')
            })
            .catch(error => { console.log(error) })
    }
    return (
        <div className=''>
            <nav className='flex text-black parent bg-white mx-auto items-center sm:px-2 lg:px-0 md:px-3 justify-between h-16'>
                <Link to='/' className='w-1/2 flex items-center'>
                    <h1 className='text-2xl font-bold text-primary'>Friendbook</h1>
                </Link>
                <div className='flex justify-end md:w-full'>
                    <ul className={`md:flex menu-item w-full md:h-0 sm:h-[100vh] lg:h-0  text-center justify-end duration-300 md:static items-center absolute ${open ? 'top-12 bg-slate-300 h-screen' : '-top-[100%]'}`}>
                        <li><Link className='mx-5' to='/home'>Home</Link></li>
                        <li><Link className='mx-5' to='/media'>Media</Link></li>
                        <li><Link className='mx-5' to='/message'>Message</Link></li>
                        <li><Link className='mx-5' to='/about'>About</Link></li>
                        
                        {
                            user?.uid &&  <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                              <div className="w-10 rounded-full">
                                <img src={user?.photoURL} alt='' />
                              </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">                                                           
                              <li onClick={handleLogOut}><Link>Logout</Link></li>
                            </ul>
                          </div>
                        }                       
                    </ul>
                    <div onClick={() => setOpen(!open)} className='w-6 h-6 cursor-pointer md:hidden'>
                        {
                            open ? <XMarkIcon /> : <Bars3Icon />

                        }
                    </div>
                </div>
            </nav>
      </div>
    );
};

export default Navbar;