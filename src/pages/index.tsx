import { Link } from 'waku';
import { use, Suspense } from 'react';
import { getAllPosts } from '../lib/actions/posts.db';
export default async function HomePage() {
  const { posts }= await getData();
  const postList = posts.map((post) => (
    <div key={post.slug} className="bg-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg w-full mb-4">
        <Link to={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
          {post.title}
        </Link>
        <div className="text-gray-600">
          {post.description}
          <span className="text-gray-600 text-sm">
            Create at: {new Date(post.createdAt).toLocaleDateString()}
          </span>
        </div>
    </div>
  ));

  return (
    <div className="flex flex-col items-start min-h-screen w-full bg-gray-100 p-6">

        
      <Suspense fallback={<div>Loading...</div>}>
        {postList}
      </Suspense>
    </div>
  );
}

const getData = async () => {
  const data = {
    posts: await getAllPosts(),
  };
  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
