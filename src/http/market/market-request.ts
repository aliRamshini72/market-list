import fetch, {REQUEST_METHOD} from "../axiosHelper";

export interface MarketResponse {
    count : number ,
    results : Market[] ,
}
export interface Market {
    id : number ,
    currency1 : Currency
    currency2 : Currency
    market_cap : string ,
    title : string ,
    title_fa : string ,
    price_info? : PriceInfo ,
    volume_24h : string ,
}

interface Currency {
    image : string
}

interface PriceInfo {
    change:number ,
    max: string
    min : string ,
    price : string
}



export async function getMarkets() {
    return await fetch<MarketResponse , null>(`/v1/mkt/markets/`, REQUEST_METHOD.GET);
}
