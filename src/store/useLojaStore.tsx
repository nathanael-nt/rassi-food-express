// src/store/useLojaStore.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { lojas as initialLojas } from '../constants/data';

interface LojaState {
    lojas: any[];
    toggleFavorito: (id: number) => void;
    reset: () => void;
}

export const useLojaStore = create<LojaState>()(
    persist(
        (set) => ({
            lojas: initialLojas,
            toggleFavorito: (id) => set((state) => ({
                lojas: state.lojas.map((loja) =>
                    loja.id === id ? { ...loja, status: !loja.status } : loja
                )
            })),
            reset: () => set({ lojas: initialLojas }),
        }),
        {
            name: '@App:lojas',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);