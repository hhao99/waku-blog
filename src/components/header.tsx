'use client';
import { useEffect } from 'react';
import { Link } from 'waku';
import { useStore } from 'zustand';
import { useUserStore } from '@/store/users';
export const Header = () => {
  const { isLoggedIn,loginStatus, initializeLoginStatus} = useUserStore( (state) => state )

  useEffect(()=> {
    initializeLoginStatus();
  },[])
  return (
    <header className="flex w-full justify-between gap-4 m-2 ">
      <h1 className="text-xl font-bold tracking-tight">
        <Link to="/">Waku Blog</Link>
      </h1>
      <div>
        {isLoggedIn? `welcome ${loginStatus.user.name}`: ''}
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
