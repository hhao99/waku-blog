
'use client'
import { useEffect } from 'react';

import { useRouter } from 'waku';
import { useUserStore } from '@/store/users';
import PostForm from '@/components/posts/form';

export default function NewPostPage() {
  const { loginStatus, initializeLoginStatus } = useUserStore( state=> state)
  const router = useRouter();

  console.log(loginStatus)
  useEffect( ()=> {
    initializeLoginStatus();
    if(!loginStatus.isLoggedIn) {
      console.log('Not Login')
      router.push('/auth/login');
    }
  },[])

  

  return (
    <div className="h-screen w-full flex flex-col items-start bg-gray-100 p-6">
      <PostForm post={null} mode={'new'} />
    </div>
  );
}

