
import PostForm from '@/components/posts/form';
import { getPostById } from '@/lib/actions/posts.db';
export default async function NewPostPage() {

  return (
    <div className="h-screen w-fullflex flex-col items-start min-h-screen w-full bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Create New Post</h1>
      <PostForm post={null} />
    </div>
  );
}

