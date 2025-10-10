import { Link } from 'waku';
import { use, Suspense } from 'react';
import { getAllPosts } from '../lib/services/db/posts';
import PostList from '@/components/posts/list'
export default async function HomePage() {
  const posts  = await getAllPosts()

  return (
    <div className="flex flex-col items-start min-h-screen w-full bg-gray-100 p-6">
      <Suspense fallback={<div>Loading...</div>}>
        <PostList posts={posts} />
      </Suspense>
    </div>
  );
}



export const getConfig = async () => {
  return {
    render: 'dynamic',
  } as const;
};
