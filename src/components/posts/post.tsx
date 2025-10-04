import { Link } from 'waku'
import Markdown from 'react-markdown';
import type { Post } from '@/data/schemas/posts';
export default function Post({post}: {post: Post}) {
    return (
        <div className='flex flex-col w-full border-b-1 border-gray-200 rounded-lg shadow-lg'>
            <div>{post.title}</div>
            <div className='prose'>
                <Markdown>{post.content}</Markdown>
            </div>   
            
            <Link to={`/`}>Return to home</Link>
        </div>
    )
}