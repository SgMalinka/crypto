'use client';

import React, { useEffect } from 'react';
import { CryptoChart } from './components/CryptoChart';
import { Coin } from '@/core/types';
import { useFavorites, useCryptoChart } from '@/store/index';
import Image from 'next/image';

import s from './index.module.scss';

interface ModalWindowProps {
    coin: Coin;
    onClose: () => void;
}

export const ModalWindow: React.FC<ModalWindowProps> = ({ coin, onClose }) => {
    const { chartData, fetchChartData } = useCryptoChart();
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();
    const favorite = isFavorite(coin.id);

    const toggleFavorite = () => {
        if (favorite) {
            removeFavorite(coin.id);
        } else {
            addFavorite(coin);
        }
    };

    useEffect(() => {
        fetchChartData(coin.id);
    }, [fetchChartData, coin.id]);

    return (
        <div className={s.modal} onClick={onClose}>
            <div className={s.modal__backdrop} onClick={e => e.stopPropagation()}>
                <div className={s.modal__header}>
                    <button onClick={onClose} className={s.modal__favorite}>
                        <Image
                            src={'/close-md-svgrepo-com.svg'}
                            alt="close icon"
                            width={18}
                            height={18}
                        />
                    </button>
                </div>
                <h2>{coin.name}</h2>
                <CryptoChart prices={chartData?.prices ?? []} />
                <button onClick={toggleFavorite} className={s.modal__favorite}>
                    <p className={s.modal__text}>
                        {favorite ? 'Remove from favorite' : 'Add to favorite'}
                    </p>
                    <Image
                        src={favorite ? '/heart.png' : '/default-heart.png'}
                        alt="favorite icon"
                        height={18}
                        width={18}
                    />
                </button>
                <div className={s.modal__info}>
                    <p className={s.modal__infoItem}>
                        <span>Market Cap:</span> ${coin.market_cap.toLocaleString()}
                    </p>
                    <p className={s.modal__infoItem}>
                        <span>Fully Diluted Valuation:</span> $
                        {coin.fully_diluted_valuation?.toLocaleString()}
                    </p>
                    <p className={s.modal__infoItem}>
                        <span>24 Hour Trading Vol:</span> ${coin.total_volume.toLocaleString()}
                    </p>
                    <p className={s.modal__infoItem}>
                        <span>Circulating Supply:</span> {coin.circulating_supply.toLocaleString()}
                    </p>
                    <p className={s.modal__infoItem}>
                        <span>Total Supply:</span> {coin.total_supply?.toLocaleString() ?? 'N/A'}
                    </p>
                    <p className={s.modal__infoItem}>
                        <span>Max Supply:</span> {coin.max_supply?.toLocaleString() ?? 'N/A'}
                    </p>
                </div>
            </div>
        </div>
    );
};
