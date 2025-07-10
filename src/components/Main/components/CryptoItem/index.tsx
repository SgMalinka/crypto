import React from 'react';
import { Colors } from '@/core/enum';
import Image from 'next/image';

import s from './index.module.scss';

export interface Coins {
    currentPrice: number;
    capPercentage: number;
    name: string;
    logo: string;
    onClick: () => void;
}

export const CryptoItem = ({ name, currentPrice, capPercentage, onClick, logo }: Coins) => {
    return (
        <div className={s.crypto} onClick={onClick}>
            <div className={s.crypto__logo}>
                <Image src={logo} alt={name} width={32} height={32} />
            </div>
            <p className={s.crypto__name}>{name}</p>
            <p className={s.crypto__price}>$ {currentPrice.toFixed(2)}</p>
            <p
                className={s.crypto__cap}
                style={{
                    color: capPercentage >= 0 ? Colors.Green : Colors.Red,
                }}
            >
                {capPercentage.toFixed(2)}%
            </p>
        </div>
    );
};
