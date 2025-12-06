import { setCookie, deleteCookie } from "cookies-next/client";
import { create } from "zustand";

type Store = {
    token: string | null;
    open: boolean;
    setToken: (newToken: string | null) => void;
    setOpen: (open: boolean) => void;
}

export const useAuth = create<Store>()(set => ({
    token: null,
    open: false,
    setOpen: (open) => set(state => ({ ...state, open })),
    setToken: (newToken) => set(state => {
        if(newToken) {
            setCookie('token', newToken);
        }else{
            deleteCookie('token');
        }

        return { ...state, token: newToken }
    })
}))