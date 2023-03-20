import Link from "next/link";
import { useSelector } from "react-redux";
import { selectApplicationState } from "../../store/appSlice";

export function SubNav() {

    var categories=useSelector(selectApplicationState).categories;
    return (
       <div className="bg-dark py-2 d-none d-sm-flex  justify-content-center">
            {categories.map((category :any,key:any)=>{ return ( <Link href={category.category_permalink+'/'}  key={key} passHref><div className="category-item btn mx-1 fw-bold" >{category.strings['category_name']}</div></Link> ) })}
       </div>
    );
}