import { Link } from 'waku';
import { PageProps } from 'waku/router';
import { getPostById } from '@/lib/actions/posts.db';
import PostForm from '@/components/posts/form';

export default async function EditPage({ id, }: PageProps<'/posts/[id]'>) {
  const { post } = await getData(parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex flex-col items-start min-h-screen w-full bg-gray-100 p-6">
      <PostForm post={post} />
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
