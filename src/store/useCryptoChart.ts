import { COINGECKO_BASE_URL } from '@/core/constants';
import { create } from 'zustand';

interface CryptoState {
    chartData: {
        prices: [number, number][];
    } | null;
    fetchChartData: (id: string) => Promise<void>;
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const useCryptoChart = create<CryptoState>(set => ({
    chartData: {
        prices: [],
    },
    fetchChartData: async (id: string) => {
        try {
            const headers: HeadersInit = {
                accept: 'application/json',
            };

            if (API_KEY) {
                headers['x-cg-demo-api-key'] = API_KEY;
            }

            const res = await fetch(
                `${COINGECKO_BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=1`,
                {
                    method: 'GET',
                    headers,
                },
            );
            const resData = await res.json();
            set({ chartData: resData });
        } catch (error) {
            console.error('Fetch error:', error);
        }
    },
}));
