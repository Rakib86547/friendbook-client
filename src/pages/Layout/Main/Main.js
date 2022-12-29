import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import RightSideBar from '../../../component/Sidebar/RightSideBar';
import Sidebar from '../../../component/Sidebar/Sidebar';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Footer from '../../Share/Footer/Footer';
import Navbar from '../../Share/Navbar/Navbar';

const Main = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div>
                {user?.uid && <Navbar />}
            </div>
            <div className='md:flex gap-3 grid-cols-3'>
                {user?.uid && <div className='hidden lg:block'><Sidebar /></div>}
                <div className='w-full'><Outlet /></div>
                {user?.uid && <div className='hidden lg:block'><RightSideBar /></div>}
            </div>
            
            <div>
                {user?.uid && <Footer />}
            </div>
        </div>
    );
};

export default Main;