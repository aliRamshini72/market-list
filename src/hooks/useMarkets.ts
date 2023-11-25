import {useQuery, useQueryClient} from "@tanstack/react-query";
import {QueryKeys, StaleTime} from "../utils/ReactQueyConstants";
import {getMarkets, Market, MarketResponse} from "../http/market/market-request";
import {useEffect, useMemo, useState} from "react";
import {initializeSocket, SocketEvent} from "../socket/webSocketHelper";

export default function useMarkets(perPage: number) {
    const queryClient = useQueryClient();
    const [page, onChangePage] = useState(1);
    const {isPending, data} = useQuery({
        queryKey: [QueryKeys.MARKETS],
        queryFn: getMarkets,
        staleTime: StaleTime.MARKETS
    });

    const markets: Market[] = useMemo(() => {
        if (!isPending && data && data.results && data.results.length > 0) {
            return data.results.slice((page - 1) * perPage, page * perPage)
        } else {
            return []
        }
    }, [page, isPending, data , perPage])

    useEffect(() => {
        const ws = initializeSocket();
        ws.onmessage = function (event) {
            if (event.data){
                const json = JSON.parse(event.data);
                if (json.event === SocketEvent){
                    queryClient.setQueryData([QueryKeys.MARKETS], (old : MarketResponse) => {
                        const newData = old.results.map((market : Market) => {
                            return {...market , price_info : json[market.id]}
                        })
                        return {...old , results : newData}
                    })
                }
            }
        };
        return () => {
            ws.close();
        }
    } , [])

    return {loading: isPending, markets, page, onChangePage, total: data?.count ? data?.count : 0 }
}