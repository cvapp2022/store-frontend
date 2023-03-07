import  cartItem  from "./cartItem"

export  interface order { 
    id:number,
    order_status:number,
    order_identifier:string,
    cart:{
        items:Array<cartItem>
    },
    payment:{
        payment_method:string,
        payment_amount:string
        payment_token:string
    }
}