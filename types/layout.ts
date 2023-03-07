import { layoutItem } from "./layoutItem";

export interface layout {
    layout_name:string,
    layout_permalink:string,
    items:Array<layoutItem>
}