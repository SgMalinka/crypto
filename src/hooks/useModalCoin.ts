'use client';

import { useState } from 'react';
import { Coin } from '@/core/types';

export function useModalCoin() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);

    const openModalWithCoin = (coin: Coin) => {
        setSelectedCoin(coin);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedCoin(null);
    };

    return {
        isOpen,
        selectedCoin,
        openModalWithCoin,
        closeModal,
    };
}
