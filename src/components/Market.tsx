import {Market} from "../http/market/market-request";


export default function MarketItem({market} : {market : Market}){
    return (<div className={'border border-solid border-slate-400 rounded p-3 shadow-md'}>
        <div className={'text-right b border-b border-solid border-slate-400 leading-10 mb-1'}>
            {market.title_fa}
        </div>
        <div>
            <span>قیمت : </span>
            <span>{market.price_info?.price}</span>
        </div>
        <div>
            <span>بیشترین قیمت : </span>
            <span>{market.price_info?.max}</span>
        </div>
        <div>
            <span>کمترین قیمت : </span>
            <span>{market.price_info?.min}</span>
        </div>

    </div>)
}