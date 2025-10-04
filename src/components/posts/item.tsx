import type { Post } from '@/data/schemas/posts'
export default function PostItem({post}: {post: Post}) {
    return (
        <div className='flex flex-col w-full border-b-1 border-gray-200 rounded-lg shadow-lg'>
            <div><a href={`/posts/${post.id}`}>{post.title}</a></div>
            <div>
                <span className='text-lg text-gray-600 p-2'>{post.description}</span>
                <span className='text-sm text-gray-500 p-2'>created at: {new Date(post.createdAt).toLocaleString('en-US')}</span>
            </div>     
        </div>
    )
}