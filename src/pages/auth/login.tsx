'use client';
import { useActionState } from 'react'
import { loginUser } from '@/lib/actions/auth'
import { useUserStore } from '@/store/users';
import { useRouter } from 'waku';


export default function LoginPage({id}: {id: number}) {
    const { login } = useUserStore( (state)=> state)
    const router = useRouter()

    const handleLoginAction = async (preState,formData: FormData) => {
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const user = await loginUser({name, email})
        console.log(`user ${user.name} is validated`)
        if(user) {
            login(user,user.token);
        }
    }
    const [state,formAction,isPending] = useActionState(handleLoginAction,null)    
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
                    type='submit'>Login</button>
            </form>
               
        </div>
    )
}