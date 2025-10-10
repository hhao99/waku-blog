'use client';
import { Link } from 'waku';
import { useStore } from 'zustand';
import { useUserStore } from '@/store/users';
export const Header = () => {
  const { isLoggedIn,user } = useUserStore( (state) => state )
  return (
    <header className="flex w-full justify-between gap-4 m-2 ">
      <h1 className="text-xl font-bold tracking-tight">
        <Link to="/">Waku Blog</Link>
      </h1>
      <div>
        {isLoggedIn? `welcome ${user.name}`: ''}
      </div>
      <nav className='mx-8 space-x-4'>
        { isLoggedIn? 
        (<Link to="/admin/new" className="underline">
          Admin
        </Link>) :
        (<Link to='/auth/login'>Login</Link>) }
        <Link to="/about" className="underline">
          About
        </Link>
      </nav>
    </header>
  );
};
