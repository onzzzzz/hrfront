import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthStore {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
    // token: any;
}

let userLocalStorage 


const useAuthStore = create(
    persist<AuthStore>(
        (set) => ({
            // token: localStorage.getItem('access_token') || "" ,
            isLoggedIn: false,
            login: () => {
                userLocalStorage = localStorage.getItem('access_token');
                if (userLocalStorage) {
                    set({ isLoggedIn: true });
                }
            },
            logout: () => {
                set({ isLoggedIn: false });
                localStorage.clear();
            },
        }),
        {
            name: 'userLoginStatus',
        }
    )
);


export { useAuthStore, userLocalStorage } ;