import React from 'react';
import AllPost from '../AllPost/AllPost';
import CreatePost from '../CreatePost/CreatePost';

const Home = () => {
    return (
        <div className='w-full'>
            <CreatePost />
            <AllPost className='mt-3' />
        </div>
    );
};

export default Home;