import { render, screen, fireEvent } from '@testing-library/react';
import { CryptoItem } from './index';

describe('CryptoItem', () => {
    const props = {
        name: 'Bitcoin',
        currentPrice: 50000,
        capPercentage: 2.5,
        logo: '/bitcoin.png',
        onClick: jest.fn(),
    };

    beforeEach(() => {
        render(<CryptoItem {...props} />);
    });

    it('renders coin name', () => {
        expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    });

    it('renders current price', () => {
        expect(screen.getByText('$ 50000.00')).toBeInTheDocument();
    });

    it('renders market cap percentage', () => {
        expect(screen.getByText('2.50%')).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        fireEvent.click(screen.getByText('Bitcoin'));
        expect(props.onClick).toHaveBeenCalled();
    });
});
