export interface Coin {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    market_cap_change_percentage_24h: number;
    market_cap: number;
    fully_diluted_valuation: number;
    circulating_supply: number;
    total_supply: number;
    total_volume: number;
    max_supply: number;
}
