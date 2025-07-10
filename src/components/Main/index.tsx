'use client';

import React from 'react';
import { Coin } from '@/core/types';
import { CryptoItem, ModalWindow } from './components';
import { useModalCoin } from '@/hooks';
import { MAGIC_NUMBERS } from '@/core/constants';

import s from './index.module.scss';

interface MainProps {
    rates: Coin[];
}

export const Main = ({ rates }: MainProps) => {
    const { isOpen, selectedCoin, openModalWithCoin, closeModal } = useModalCoin();

    return (
        <div className={s.main}>
            {rates.slice(MAGIC_NUMBERS.zero, MAGIC_NUMBERS.ten).map(item => (
                <CryptoItem
                    key={item.id}
                    name={item.name}
                    currentPrice={item.current_price}
                    capPercentage={item.market_cap_change_percentage_24h}
                    onClick={() => openModalWithCoin(item)}
                    logo={item.image}
                />
            ))}
            {isOpen && selectedCoin && <ModalWindow coin={selectedCoin} onClose={closeModal} />}
        </div>
    );
};
