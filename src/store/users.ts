import { create } from 'zustand';
import type { User } from '@/data/schemas/posts';
export interface AuthState{
    isLoggedIn: boolean,
    user: User| null,
    token: string | null,
    login: (user: User, token: string) => void,
    logout: () => void,
    initializeAuth: ()=> void
}

const TOKEN_KEY = "LOGIN_TOKEN"
export const useUserStore = create<AuthState>( (set,get)=> ({
    isLoggedIn: false,
    user: null,
    token: null,
    // login logic, invoke db user service and sync login state into localstorage
    login: async (user: User, token: string) => {
        // check user info
        // set localstore
        localStorage.setItem(TOKEN_KEY,token)
        set({isLoggedIn: true, user, token})
        console.log(`user ${user.name} with ${token} loggedIn`)
    },
    logout: ()=> {
        localStorage.removeItem(TOKEN_KEY)
        set({isLoggedIn: false, user: null, token: null})
        console.log("user loggedOut!")
    },
    initializeAuth: ()=> {
        const storedToken = localStorage.get(TOKEN_KEY)
        if(storeToken && !get().isLoggedIn)
        {
            set({
                isLoggedIn: true,
                user: null,
                toke: storedToken
            })
        }
    }
}))