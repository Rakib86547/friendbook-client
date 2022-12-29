import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MediaDetails from './MediaDetails';

const Media = () => {
    const {user} = useContext(AuthContext);
    const {data: myPost = []} = useQuery({
        queryKey: ['myPost'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_KEY}/my-post?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
    
    return (
        <div className='w-full'>
            <div>
                {
                    myPost.map(post => <MediaDetails key={post._id} post={post} />)
                }
            </div>
        </div>
    );
};

export default Media;