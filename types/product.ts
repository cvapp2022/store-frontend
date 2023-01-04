import {Category} from './category'

export  interface Product {
    id: number,
    title: string;
    in_stock: number;
    price: number;
    // category:Category,
  }