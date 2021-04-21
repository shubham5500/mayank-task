import {BASE_URL, TOKEN} from "./variable";

export async function fetchUtil (url, config){
    const response =  await fetch(`${BASE_URL}${url}`,{
        headers: {
            'Authorization': `Basic ${btoa(`${TOKEN}`)}`
        },
        ...config
    });
    return response.json();
}