import { Link } from 'waku'
import type { Post } from '@/data/schemas/posts'
export default function PostItem({post}: {post: Post}) {
    return (
        <div className='w-full mb-2 border-b-1 border-gray-200 rounded-lg shadow-lg'>
            <h3 className='text-center'><Link to={`/posts/${post.id}`}>{post.title}</Link></h3>
            <div>
                <div className='text-lg text-gray-600 p-2'>{post.description}</div>
                <div className='text-right'>
                    <span className='text-sm text-gray-500 p-2'>created at: {new Date(post.createdAt).toLocaleString('en-US')}</span>
                </div>
            </div>     
        </div>
    )
}