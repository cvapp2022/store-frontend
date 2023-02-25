import { baseUrl } from "./config";

export const fetchMainLayout =async ()=>{
    const response = await fetch(
        `${baseUrl}/en/layout/desktop/main-page`
    )
    const { success, payload } = await response.json();
    return {success,payload};
} 


export const initCart=async ()=>{
    const response = await fetch(
        `${baseUrl}/cart/init/`
    )
    const { success, payload } = await response.json();
    return {success,payload};
} 


export const getOldCart=async(cartId : string)=>{
    const response = await fetch(
        `${baseUrl}/cart/get/${cartId}`
    )
    const { success, payload } = await response.json();
    return {success,payload};
}

export const addToCart=async (cartId : any, prodId: Number)=>{


    const response = await fetch(
        `${baseUrl}/cart/add/${cartId}`,
        {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({productIdI:prodId}),
        }
    )
    const { success, payload } = await response.json();
    return {success,payload};

}


export const removeFromCart=async (cartId : any, prodId: Number)=>{


    const response = await fetch(
        `${baseUrl}/cart/remove/${cartId}`,
        {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({productIdI:prodId}),
        }
    )
    const { success, payload } = await response.json();
    return {success,payload};

}


export const increaseItemQty=async (cartId : any, prodId: Number)=>{


    const response = await fetch(
        `${baseUrl}/cart/increase/${cartId}`,
        {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({productIdI:prodId}),
        }
    )
    const { success, payload } = await response.json();
    return {success,payload};

}

export const reduceItemQty=async (cartId : any, prodId: Number)=>{


    const response = await fetch(
        `${baseUrl}/cart/reduce/${cartId}`,
        {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({productIdI:prodId}),
        }
    )
    const { success, payload } = await response.json();
    return {success,payload};

}