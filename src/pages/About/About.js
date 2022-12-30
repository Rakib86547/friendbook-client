import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import AboutModal from './AboutModal';
// REACT_APP_API_KEY=https://friendbook-server.vercel.app
// REACT_APP_API_KEY=http://localhost:5000
console.log(process.env.REACT_APP_API_KEY)
const About = () => {
    const {user} = useContext(AuthContext);
    const [edit, setEdit] = useState({});
    const {data: users  } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_KEY}/users?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
    
    console.log(edit)
    console.log(users)
    return (
        <div className='w-full'>
           <div className='flex justify-end'>
           <label htmlFor="about-modal" className="cursor-pointer bg-secondary text-white mt-2 px-[25px] py-[6px] rounded-md">Edit Profile</label>
           </div>
            <div className="flex flex-col items-center p-8 rounded-xl">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={user?.photoURL} alt="" />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
              
                    {users?.name}
                    
                    </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{users?.email} {edit?.email}</p>

                <div className="flex flex-col mt-3 -mx-2">
                    <p><strong>University:</strong> <span>
                        {users?.university}
                         {edit?.university}
                        </span></p>
                    <p><strong>Address:</strong> <span>
                        {users?.address}
                        {edit?.address}
                        </span></p>
                </div>
                
            </div>
            { users &&
                <AboutModal 
                users={users}
                edit={edit}
                setEdit={setEdit}
                />
            }
        </div>
    );
};

export default About;