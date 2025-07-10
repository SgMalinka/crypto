import { render, screen } from '@testing-library/react';
import { Main } from './index';
import { Coin } from '@/core/types';

describe('Main', () => {
    const rates: Coin[] = [
        {
            id: 'bitcoin',
            name: 'Bitcoin',
            symbol: 'btc',
            image: '/bitcoin.png',
            current_price: 50000,
            market_cap_change_percentage_24h: 2.5,
            market_cap: 1000000000,
            fully_diluted_valuation: 1200000000,
            circulating_supply: 18000000,
            total_supply: 21000000,
            total_volume: 50000000,
            max_supply: 21000000,
        },
    ];

    beforeEach(() => {
        render(<Main rates={rates} />);
    });

    it('renders coin name', () => {
        expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    });

    it('renders coin price', () => {
        expect(screen.getByText('$ 50000.00')).toBeInTheDocument();
    });
});
