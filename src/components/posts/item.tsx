import type { Post } from '@/data/schemas/posts'
export default function PostItem({post}: {post: Post}) {
    return (
        <div>
            <div><a href={`/posts/${post.id}`}>{post.title}</a></div>
            <div>created at: {post.createdAt}</div>     
        </div>
    )
}