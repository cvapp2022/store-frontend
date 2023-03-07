import { product } from "./product";

export default  interface cartItem {
    id: number;
    product_id: number;
    cart_id: number;
    created_at:string,
    quantity:number,
    product: product
}