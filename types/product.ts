import {Category} from './category'

export  interface product {
    id: number,
    product_permalink: string;
    strings:object;
    price:Number;
    // category:Category,
  }