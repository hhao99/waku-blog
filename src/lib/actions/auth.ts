'use server';

import { randomUUID } from 'node:crypto';
import { createUser } from '@/lib/services/db/users'
import type { User, NewUser } from '@/data/schemas/posts';
import { getUserByEmail, createLogin } from '@/lib/services/db/users';
import { getLoginByToken } from '../services/db/users';
export async function createUser(preState, formData:FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    try {
        const user = createUser({name,email})
        console.log(user);
    }
    catch(err)
    {
        console.log(err)
    }
    unstable_redirect('/')
}

export async function loginUser(user: User): Promise<User|null> {
   
    try {
        const result = await getUserByEmail(user.email);
        if(result) {

            console.log(`find user ${user.name} info with id: ${result.id}`);
            const token = randomUUID();
            const login = await createLogin({user: result,token});
            return { ...result, token };
        } else {
            console.log(`could not find user ${user.name} info`);
            return null;
        }
    }
    catch(err)
    {
        console.log(err);
        return null;
    }
}
export async function checkLoginStatus({user,token}: {user: User, token: string}): Promise<boolean> {
    try {
        const result = await getLoginByToken(token);
        if( result ) {
            
            console.log(`get the login info`);
            console.log(`the login user: {result.name}`)
        }
    } catch(err) {
        console.log(err)
    }
}


