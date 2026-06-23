import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { users as initialUsers } from '../constants/data';

interface UserState {
    users: any[];
    toggleUsers: (id: number) => void;
    reset: () => void;
}

export const loadUserStore = create<UserState>()(
    persist(
        (set) => ({
            users: initialUsers,
            toggleUsers: (id) => set((state) => ({
                users: state.users.map((user) =>
                    user.id === id ? { ...user, status: !user.status } : user
                )
            })),
            reset: () => set({ users: initialUsers }),
        }),
        {
            name: '@App:users',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);