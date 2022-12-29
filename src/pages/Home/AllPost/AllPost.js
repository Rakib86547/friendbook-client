import { useQuery } from '@tanstack/react-query';
import PostDetails from './PostDetails';

const AllPost = () => {
    const {data: allPost = []} = useQuery({
        queryKey: ['allPost'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_KEY}/all-post`)
            const data = await res.json()
            return data
        }
    });
    
    return (
        <div>
            
            <div>
                {
                    allPost.map(post => <PostDetails key={post._id} post={post}  />)
                }
            </div>
        </div>
    );
};

export default AllPost;