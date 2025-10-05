import PostItem from '@/components/posts/item';
import type { Post } from '@/data/schemas/posts';

export default function PostList({posts}: {posts: Post[]}) {
    const postList = posts.map( (post,index)=> (
        <PostItem post={post} key={`post ${index}`} />));   
    return (
        <div className='flex flex-col w-full m-4'>
            <ul>
                {!posts? <h3>no post yet!</h3>: postList}  
            </ul> 
        </div>
    )
}