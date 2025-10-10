'use client';
import { useActionState } from 'react'
import { createUser } from '@/lib/actions/users'
export default function RegisterPage({id}: {id: number}) {
    const [state,formAction,isPending] = useActionState(createUser,null)
    return (
        <div className='w-full m-2 border-b-1 border-gray-200 rounded-lg shadow-lg'>
            <form action={formAction}>
                <div>
                    <label>Your Name:
                        <input
                            className="border-b-1 border-gray-200 mx-2" 
                            defaultValue='eric'
                            type='text'  name='name' placeholder='your name' />
                    </label>
                </div>
                <div>
                    <label>Your Email:
                        <input 
                            className="border-b-1 border-gray-200 mx-2" 
                            defaultValue='hh@gg.com'
                            type='email'  name='email' placeholder='your email' />
                    </label>
                </div>
                
                <button 
                    className="bg-blue-600 text-white mx-4 px-4 text-center rounded-lg shadow-sm" 
                    type='submit'>Register</button>
            </form>
               
        </div>
    )
}