import { COINGECKO_BASE_URL } from '../constants';
import { Coin } from '../types';

let cache: Coin[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 2 * 60 * 1000;

export const getCryptoRates = async (): Promise<Coin[]> => {
    const now = Date.now();

    if (cache && now - lastFetchTime < CACHE_DURATION) {
        return cache;
    }

    const res = await fetch(`${COINGECKO_BASE_URL}/coins/markets?vs_currency=usd`, {
        cache: 'no-store',
        method: 'GET',
        headers: { accept: 'application/json' },
    });

    if (!res.ok) {
        const text = await res.text();
        console.error('API response text:', text);
        throw new Error(`Failed to fetch rates, status: ${res.status}`);
    }

    const json = (await res.json()) as Coin[];

    cache = json;
    lastFetchTime = now;

    return json;
};
