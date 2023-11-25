
const baseUrl: string = process.env.REACT_APP_SOCKET_URL ? process.env.REACT_APP_SOCKET_URL : 'wss://ws.bitpin.org';

export const initializeSocket = () => {
    const ws = new WebSocket(baseUrl);
    const apiCall = {
        method: SocketMethod
    };
    ws.onopen = (event) => {
        ws.send(JSON.stringify(apiCall));
    };
    return ws
};

export const SocketMethod  = 'sub_to_price_info' ;
export const SocketEvent = 'currency_price_info_update'


