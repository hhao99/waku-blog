'use client';
import { Link } from 'waku'
import { useActionState } from 'react'
import type { Post } from '@/data/schemas/posts'
import DeleteItemButton from './delete';
export default function PostItem({post}: {post: Post}) {
    return (
        <div className='w-full mb-2 border-b-1 border-gray-200 rounded-lg shadow-lg'>
            <h3 className='text-xl text-indigo-400 text-center'>
                <Link to={`/posts/${post.id}`}>{post.title}</Link></h3>
            <div className='flex justify-between'>
                <div className='text-md text-gray-600 p-2'>{post.description}</div>
                <div><DeleteItemButton id={post.id} /></div>
            </div>
            <div className='text-right'>
                <span className='text-sm text-gray-500 p-2'>created at: {new Date(post.createdAt).toLocaleString('en-US')}</span>
            </div>  
        </div>
    )
}