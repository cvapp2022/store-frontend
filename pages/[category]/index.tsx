
import type { NextPage } from 'next'
import { getServerSideProps } from '../../utils/serverProp';


const CategoryOne: NextPage = (props:any) => { 


    return (
        <>
            <h4>Category One page</h4>
        </>
    );


}


export { getServerSideProps };


export default CategoryOne;
