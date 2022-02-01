/**
 * Configure types and defaults
 */

export default interface CurrencyType {
    csupply: string
    id: string
    market_cap_usd: string
    msupply: string
    name: string
    nameid: string
    percent_change_1h: string
    percent_change_7d: string
    percent_change_24h: string
    price_btc: string
    price_usd: string
    rank: number
    symbol: string
    tsupply: string
    volume24: string
    volume24_native: string
}

export const defaultCurrency = {
    csupply: "",
    id: "",
    market_cap_usd: "",
    msupply: "",
    name: "",
    nameid: "",
    percent_change_1h: "",
    percent_change_7d: "",
    percent_change_24h: "",
    price_btc: "",
    price_usd: "",
    rank: 0,
    symbol: "",
    tsupply: "",
    volume24: "",
    volume24_native: "",
}