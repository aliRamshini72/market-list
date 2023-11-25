import axios, {ResponseType} from 'axios';

const baseUrl: string = process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL : 'https://api.bitpin.org';

export enum REQUEST_METHOD {
    GET = 'get' ,
    POST = 'post' ,
    PUT = 'put' ,
    DELETE = 'delete'
}


// todo add interceptor for handle error
async function fetch<Response,RequestBody>(url: string, method: REQUEST_METHOD, data?: RequestBody) {
    let headers = {
        'Content-Type': 'application/json',
    };
    try {
        let response;
        response = await axios({url: baseUrl + url, data: data ? {...data} : null  , method, headers});
        return response.data as Response;
    } catch (e: any) {
        console.error("fetch error" , e.message)
    }
}


export default fetch
