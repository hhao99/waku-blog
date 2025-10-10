import { create } from 'zustand';
import type { User } from '@/data/schemas/posts';
export interface AuthState{
    isLoggedIn: boolean,
    user: User| null,
    token: string | null,
    login: (user: User, token: string) => void,
    logout: () => void,
    initializeLoginStatus: ()=> void
}

const LOGIN_STATUS = "LOGIN_STATUS"
export const useUserStore = create<AuthState>( (set,get)=> ({
    isLoggedIn: false,
    user: null,
    token: null,
    // login logic, invoke db user service and sync login state into localstorage
    login: async (user: User, token: string) => {
        // check user info
        // set localstore
        const loginStatus = {
            user: user,
            token: token
        }
        localStorage.setItem(LOGIN_STATUS,JSON.stringify(loginStatus))
        set({isLoggedIn: true, user, token})
        console.log(`user ${user.name} with ${token} loggedIn`)
    },
    logout: ()=> {
        localStorage.removeItem(LOGIN_STATUS)
        set({isLoggedIn: false, user: null, token: null})
        console.log("user loggedOut!")
    },
    initializeLoginStatus: ()=> {
        const loginStatus = JSON.parse(localStorage.getItem(LOGIN_STATUS))
        if(loginStatus && !get().isLoggedIn)
        {
            set({
                isLoggedIn: true,
                user: loginStatus.user,
                token: loginStatus.token
            })
        }
    }
}))

// useUserStore().initializeLoginStatus();