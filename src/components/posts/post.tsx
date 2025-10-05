import { Link } from 'waku'
import Markdown from 'react-markdown';
import type { Post } from '@/data/schemas/posts';
export default function Post({post}: {post: Post}) {
    return (
        <div className='flex flex-col w-full border-b-1 border-gray-200 rounded-lg shadow-lg'>
            <div className='flex justify-between mr-4'>
                <h1>{post.title}</h1>
                <div className='text-sm text-gray-400'> created at: {new Date(post.createdAt).toLocaleString()}</div>
            </div>
            
            <div className='prose'>
                <Markdown>{post.content? post.content: "no content"}</Markdown>
            </div>   
            <div className='flex w-full justify-end space-x-4'>
                <Link to={`/admin/edit/${post.id}`}>Edit</Link>
            </div>
        </div>
    )
}