import { Link } from 'waku';
import { PageProps } from 'waku/router';
import { getPostBySlug } from '../../lib/actions/posts.db';
export default async function PostPage({ slug, }: PageProps<'/posts/[slug]'>) {
  const { post } = await getData(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex flex-col items-start min-h-screen w-full bg-gray-100 p-6">
      <h1 className="text-4xl font-bold tracking-tight border-b border-gray-300">{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/" className="mt-4 inline-block underline">
        Return home
      </Link>
    </div>
  );
}

const getData = async (slug: string) => {
    const post = await getPostBySlug(slug);
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
