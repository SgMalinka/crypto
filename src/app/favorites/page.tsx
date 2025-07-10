'use client';

import { useFavorites } from '@/store/useFavorites';
import { CryptoItem } from '@/components/Main/components/CryptoItem/index';
import { useModalCoin } from '@/hooks';
import { ModalWindow } from '@/components/Main/components';

import s from './page.module.scss';

export default function FavoritesPage() {
    const { favorites } = useFavorites();
    const { isOpen, selectedCoin, openModalWithCoin, closeModal } = useModalCoin();

    if (!favorites.length) {
        return (
            <div className={s.favorites}>
                <p>You have not added any cryptocurrency to your favorites yet.</p>
            </div>
        );
    }

    return (
        <div className={s.favorites}>
            {favorites.map(coin => (
                <CryptoItem
                    key={coin.id}
                    name={coin.name}
                    currentPrice={coin.current_price}
                    capPercentage={coin.market_cap_change_percentage_24h}
                    logo={coin.image}
                    onClick={() => openModalWithCoin(coin)}
                />
            ))}
            {isOpen && selectedCoin && <ModalWindow coin={selectedCoin} onClose={closeModal} />}
        </div>
    );
}
