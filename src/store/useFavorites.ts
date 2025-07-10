import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Coin } from '@/core/types';

interface FavoritesStore {
    favorites: Coin[];
    addFavorite: (coin: Coin) => void;
    removeFavorite: (coinId: string) => void;
    isFavorite: (coinId: string) => boolean;
}

export const useFavorites = create<FavoritesStore>()(
    persist(
        (set, get) => ({
            favorites: [],
            addFavorite: coin =>
                set(state => {
                    if (state.favorites.find(item => item.id === coin.id)) {
                        return state;
                    }
                    return { favorites: [...state.favorites, coin] };
                }),
            removeFavorite: coinId =>
                set(state => ({
                    favorites: state.favorites.filter(c => c.id !== coinId),
                })),
            isFavorite: coinId => !!get().favorites.find(c => c.id === coinId),
        }),
        {
            name: 'crypto-favorites-storage',
        },
    ),
);
