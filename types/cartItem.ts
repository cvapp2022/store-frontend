import { product } from "./product";

export  interface cartItem {
    id: number;
    product_id: number;
    cart_id: number;
    created_at:string,
    product: product
}