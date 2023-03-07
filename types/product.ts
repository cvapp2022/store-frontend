import {Category} from './category'

export  interface product {
    id: number,
    product_permalink: string;
    strings:{
      product_name?:string
    };
    price:number;
    quantity:number;
    // category:Category,
  }