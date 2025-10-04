import { Link } from 'waku';
import { PageProps } from 'waku/router';
import Markdown from 'react-markdown';

import { getPostById } from '@/lib/actions/posts.db';

export default async function PostPage({ id, }: PageProps<'/posts/[id]'>) {
  const { post } = await getData(id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex flex-col items-start min-h-screen w-full bg-gray-100 p-6">
      <h1 className="text-4xl font-bold tracking-tight border-b border-gray-300">{post.title}</h1>
      <div>
        <Markdown>{post.content}</Markdown>
      </div>
      <Link to="/" className="mt-4 inline-block underline">
        Return home
      </Link>
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
