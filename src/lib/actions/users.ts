'use server';
import db from '@/lib/db'
import { eq} from 'drizzle-orm';
import { unstable_notFound, unstable_redirect } from 'waku/router/server';
import { users, User, NewUser} from '@/data/schemas/posts'
export async function createUser(preState, formData:FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    try {
        const [user] = await db.insert(users).values({name,email}).returning();
        console.log(user)
    }
    catch(err)
    {
        console.log(err)
    }
    unstable_redirect('/')
}

export async function getUserByEmail(email: string): Promise<User|null> {
    try {
        const [ user ] = await db.select().from(users).where(eq(users.email, email)).limit(1);
        return user;
    }
    catch(err) {
        console.log(err)
    }
    return null
}