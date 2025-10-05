
import PostForm from '@/components/posts/form';
import { getPostById } from '@/lib/actions/posts.db';
export default async function NewPostPage() {

  return (
    <div className="h-screen w-full flex flex-col items-start bg-gray-100 p-6">
      <PostForm post={null} />
    </div>
  );
}

