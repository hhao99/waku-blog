import { Link } from 'waku';

export const Header = () => {
  return (
    <header className="flex w-full justify-between gap-4 p-6 l">
      <h1 className="text-xl font-bold tracking-tight">
        <Link to="/">Waku Blog</Link>
      </h1>
      <nav className='space-x-4'>
        <Link to="/admin/new" className="underline">
          Admin
        </Link>
        <Link to="/about" className="underline">
          About
        </Link>
      </nav>
    </header>
  );
};
