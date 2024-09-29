import { create } from "zustand";

type DataTokenStore = {
    token: string;
    getToken: (newToken: string) => void;
    // name: string;
    // getName: (newName: string) => void;
    // avatar: string;
    // getAvatar: (newAvatar: string) => void;
};

export const useDataTokenStore = create<DataTokenStore>((set) => ({
    token: "",
    getToken: (newToken) => set((state) => ({token: newToken})),
    // name: "",
    // getName: (newName) => set((state) => ({name: newName})),
    // avatar: "",
    // getAvatar: (newAvatar) => set((state) => ({avatar: newAvatar})),
}))