'use client';
import { useActionState } from 'react'
import { createUser } from '@/lib/actions/users'
export default function LoginPage({id}: {id: number}) {
    const [state,formAction,isPending] = useActionState(createUser,null)
    const handleLogout = ()=> {
        localStorage.clear()
    }
    return (
        <div className='w-full m-2 border-b-1 border-gray-200 rounded-lg shadow-lg'>
            <form action={formAction}>
                <button 
                    onClick={handleLogout}
                    className="bg-blue-600 text-white mx-4 px-4 text-center rounded-lg shadow-sm" 
                    type='submit'>Logout</button>
            </form>
               
        </div>
    )
}