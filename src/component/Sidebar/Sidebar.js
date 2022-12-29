import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='h-max'>
            <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700">
        <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
            <Link className="flex items-center px-4 py-2 text-gray-700  rounded-lg dark:bg-gray-800 dark:text-gray-200" href="#">
               

                <span className="mx-4 font-medium">News Feed</span>
            </Link>

            <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
               

                <span className="mx-4 font-medium">Group</span>
            </Link>

            <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400  dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
               
                <span className="mx-4 font-medium">Market Place</span>
            </Link>

            <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400  dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
               

                <span className="mx-4 font-medium">Videos</span>
            </Link>
        </nav>
    </div>
</div>
        </div>
    );
};

export default Sidebar;