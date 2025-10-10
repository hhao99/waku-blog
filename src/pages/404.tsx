import { Link } from 'waku';

export default async function AboutPage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Link to="/" className="mt-4 inline-block underline">
        Return home
      </Link>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: '404 Not Found',
    headline: '404 Not Found',
    body: 'oops! Page not found',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
