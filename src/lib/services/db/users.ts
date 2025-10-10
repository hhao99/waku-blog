import  db from '@/lib/db'
import { eq } from 'drizzle-orm';
import type { User, NewUser} from '@/data/schemas/posts'
import { users, logins } from '@/data/schemas/posts';

export async function createUser(user: NewUser): Promise<User| null> {
    try {
        const [ insertedUser ] = await db.insert(users).values(user).returning();
        return insertedUser;
    }
    catch(err) {
        console.debug(err)
        return null;

    }
}


export async function getUserByEmail(email: string): Promise<User|null> {
    try {
        const [ user ] = await db.select().from(users).where(eq(users.email, email)).limit(1);
        console.log(`query user with email: ${email} and got ${user.id}`)
        return user;
    }
    catch(err) {
        console.log(err)
    }
    return null
}

export async function createLogin({user,token}: {user: User, token:string}) {
    try {
        console.log(`get user info: ${user}`)
        const [ login ] = await db.insert(logins).values({ 
            user_id: user.id,
            token
        }).returning();
        return login;
    } catch(err) {
        console.log(err);

    return null;
    }
}

export async function getLoginByToken(token: string): Promise<Login| null> {
    try {
        const [ login ] = await  db.select().from(logins).where(eq(logins.token, token)).limit(1);
        return login;
    } catch(err) {
        console.log(err)
        return null;
    }
}