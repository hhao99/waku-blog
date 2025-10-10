'use client'
import { Link } from 'waku'
import Markdown from 'react-markdown';
import type { Post } from '@/data/schemas/posts';



export default function Post({post}: {post: Post}) {
    return (
        <div className='flex flex-col w-full border-b-1 border-gray-200 rounded-lg shadow-lg'>
            <div className='flex justify-between mr-4'>
                <h1>{post.title}</h1>
                <div className='text-sm text-gray-400'> 
                    <div>created at: {new Date(post.created_at).toLocaleString()}</div>
                    <div>updated at: {new Date(post.updated_at).toLocaleString()}</div>
                </div>
            </div>
            
            <div className='w-full prose'>
                <Markdown>{post.text? post.text: "no content"}</Markdown>
            </div>
            <div className='flex w-full mr-4 justify-end space-x-4'>
                <Link to={`/admin/edit/${post.id}`}>Edit</Link>
            </div>
        </div>
    )
}