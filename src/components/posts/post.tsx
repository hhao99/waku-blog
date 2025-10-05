'use client'
import { Link } from 'waku'
//import Markdown from 'react-markdown';
import MarkdownPreview from '@uiw/react-markdown-preview';
import type { Post } from '@/data/schemas/posts';
export default function Post({post}: {post: Post}) {
    return (
        <div className='flex flex-col w-full border-b-1 border-gray-200 rounded-lg shadow-lg'>
            <div className='flex justify-between mr-4'>
                <h1>{post.title}</h1>
                <div className='text-sm text-gray-400'> 
                    <div>created at: {new Date(post.createdAt).toLocaleString()}</div>
                    <div>updated at: {new Date(post.updatedAt).toLocaleString()}</div>
                </div>
            </div>
            
            <div className='w-full prose'>
                <MarkdownPreview source={post.content? post.content: "no content"}/>
            </div>   
            <div className='flex w-full mr-4 justify-end space-x-4'>
                <Link to={`/admin/edit/${post.id}`}>Edit</Link>
            </div>
        </div>
    )
}