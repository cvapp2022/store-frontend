import { baseUrl } from "./config";
import axios from 'axios';

export const fetchMainLayout = async () => {

    const response = await axios.get(`${baseUrl}/en/layout/desktop/main-page`)

    // const response = await fetch(
    //     `${baseUrl}/en/layout/desktop/main-page`
    // )
    const { success, payload } = response.data;
    return { success, payload };
}

export const fetchProdOneLayout = async (productPermalink: any) => {
    const response = await axios.get(
        `${baseUrl}/en/layout/desktop/productOne/${productPermalink}`
    )
    const { success, payload } = response.data;
    return { success, payload };
}


export const initCart = async () => {
    const response = await axios.get(
        `${baseUrl}/cart/init/`
    )
    const { success, payload } = response.data;
    return { success, payload };
}


export const getOldCart = async (cartId: string) => {
    const response = await axios.get(
        `${baseUrl}/cart/get/${cartId}`
    )
    const { success, payload } = response.data;
    return { success, payload };
}

export const addToCart = async (cartId: any, prodId: Number) => {

    var data = { productIdI: prodId }
    const response = await axios.post(
        `${baseUrl}/cart/add/${cartId}`,
        data
    )
    const { success, payload } = response.data;
    return { success, payload };

}


export const removeFromCart = async (cartId: any, prodId: Number) => {

    var data = { productIdI: prodId };
    const response = await axios.post(
        `${baseUrl}/cart/remove/${cartId}`,
        data
    )
    const { success, payload } = response.data;
    return { success, payload };

}


export const increaseItemQty = async (cartId: any, prodId: Number) => {

    var data = { productIdI: prodId };

    const response = await axios.post(
        `${baseUrl}/cart/increase/${cartId}`,
        data
    )
    const { success, payload } = response.data;
    return { success, payload };

}

export const reduceItemQty = async (cartId: any, prodId: Number) => {

    var data = { productIdI: prodId };
    const response = await axios.post(
        `${baseUrl}/cart/reduce/${cartId}`,
        data
    )
    const { success, payload } = response.data;
    return { success, payload };

}




export const checkMobile = async (data: Object) => {

    const response = await axios.post(
        `${baseUrl}/user/mobile/check`,
        data,
    )

    const { success, message, payload } = response.data;
    return { success, message, payload };
}



export const loginMobile = async (data: Object) => {

    const response = await axios.post(
        `${baseUrl}/user/mobile/login`,
        data,
    )
    const { success, message, payload } = response.data;
    return { success, message, payload };
}

export const checkEmail = async (data: Object) => {

    const response = await axios.post(
        `${baseUrl}/user/email/check`,
        data,
    )

    const { success, message, payload } = response.data;
    return { success, message, payload };
}

export const loginEmail = async (data: Object) => {

    const response = await axios.post(
        `${baseUrl}/user/email/login`,
        data,
    )
    const { success, message, payload } = response.data;
    return { success, message, payload };
}



export const fetchUser = async () => {

    const response = await axios.get(`${baseUrl}/user`)
    const { success, message, payload } = response.data;
    return { success, message, payload };
}


export const registerUser = async (data: Object) => {

    const response = await axios.post(
        `${baseUrl}/user/register`,
        data,
    )
    const { success, message, payload } = response.data;
    return { success, message, payload };
}


export const saveOrder = async (data: any) => {

    const response = await axios.post(
        `${baseUrl}/order/${data.paymentMethodI}/request`,
        data,
    )
    const { success, message, payload } = response.data;
    return { success, message, payload };
}