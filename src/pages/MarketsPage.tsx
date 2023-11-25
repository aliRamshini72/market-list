import useMarkets from "../hooks/useMarkets";
import {Market} from "../http/market/market-request";
import MarketItem from "../components/Market";
import Pagination from "../components/Pagination";

const PER_PAGE = 12
export default function MarketsPage() {
    const {loading, markets, page, total, onChangePage} = useMarkets(PER_PAGE)
    if (loading) return <p className={'text-center py-8'}> منتظر بمانید </p>
    return (
        <>
            <h1 className={'p-4 font-bold '}> بازار بیت پین</h1>
            <div className={'p-4 grid md:grid-cols-4 sm:grid-cols-2 gap-4'}>
                {markets.map((market: Market) =>
                    <MarketItem market={market} key={market.id}/>
                )}
            </div>
            <Pagination current={page} pageSize={PER_PAGE} total={total} onChange={onChangePage} />
        </>

    )
}