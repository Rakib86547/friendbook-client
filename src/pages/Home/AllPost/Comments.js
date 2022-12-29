import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import PostDetails from './PostDetails';

const Comments = () => {
    // const {data: comments = []} = useQuery({
    //     queryKey: ['comments'],
    //     queryFn: async () => {
    //         const res = await fetch(`${process.env.REACT_APP_API_KEY}/comment`)
    //         const data = await res.json()
    //         return data
    //     }
    // });
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_KEY}/comment`)
        .then(res => res.json())
        .then(data => {
            console.log('comment: ', data)
        })
    }, [])
    // console.log(comments)
    return (
        <div>
            {/* {
                comments.map(comment => <PostDetails key={comment._id} commment={comment} />)
            } */}
        </div>
    );
};

export default Comments;