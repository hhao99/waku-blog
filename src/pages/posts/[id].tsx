import { Link } from 'waku';
import { PageProps } from 'waku/router';
import Post from '@/components/posts/post'

import { getPostById } from '@/lib/actions/posts.db';

export default async function PostPage({ id, }: PageProps<'/posts/[id]'>) {
  const { post } = await getData(id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex flex-col items-start min-h-screen w-full bg-gray-100 p-6">
      <Post post={post} />
    </div>
  );
}

const getData = async (id: number) => {
    const post = await getPostById(id);
  const data = {
    post: post[0] || null,
  };
  return data;
};

export const getConfig = async () => {
  return {
    render: 'dynamic',
  } as const;
};
