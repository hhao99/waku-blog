'use client';
import { useActionState } from 'react'
import { deleteComments } from '@/lib/actions/posts'
export default function DeleteItemButton({id}: {id: number}) {
    const [state,formAction,isPending] = useActionState(deletePostAction,null)
    return (
        <div className='w-full m-2 border-b-1 border-gray-200 rounded-lg shadow-lg'>
                <form action={formAction}>
                    <input hidden readOnly name='id' value={id} />
                    <button type='submit'>remove : {id}</button>
                </form>
               
        </div>
    )
}