import { create } from 'zustand';
import type { User } from '@/data/schemas/posts';
export interface AuthState{
    loginStatus: {
        isLoggedIn: boolean,
        user: User| null,
        token: string | null,
        loggedInAt: string| null,
    },
    login: (user: User, token: string) => void,
    logout: () => void,
    initializeLoginStatus: ()=> void
}

const LOGIN_STATUS = "LOGIN_STATUS"
export const useUserStore = create<AuthState>( (set,get)=> ({
    loginStatus: {
        isLoggedIn: false,
        user: null,
        token: null,
        loggedInAt: null
    },
    // login logic, invoke db user service and sync login state into localstorage
    login: async (user: User, token: string) => {
        // check user info
        // set localstore
        const loginStatus = {
            user: user,
            token: token,
            isLoggedIn: true,
            loggedInAt: Date.now().toLocaleString(),
        }
        localStorage.setItem(LOGIN_STATUS,JSON.stringify(loginStatus))
        set({ loginStatus})
        console.log(`user ${user.name} with ${token} loggedIn`)
    },
    logout: ()=> {
        localStorage.removeItem(LOGIN_STATUS)
        set( { loginStatus:{isLoggedIn: false, user: null, token: null, loggedInAt: null} })
        console.log("Logged Out...")
    },
    initializeLoginStatus: ()=> {
        const loginStatus = JSON.parse(localStorage.getItem(LOGIN_STATUS))
        if(loginStatus && !get().loginStatus.isLoggedIn)
        {
            set({
               ...loginStatus
            })
        }
    }
}))

// useUserStore().initializeLoginStatus();