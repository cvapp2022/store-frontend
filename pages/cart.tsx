
import type { NextPage } from 'next'
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CartItem from '../components/items/cartItem';
import { selectCartState } from '../store/cartSlice';
import { cartItem } from '../types/cartItem';
import { getServerSideProps } from '../utils/serverProp';

const Cart: NextPage = (props: any) => {

    const cart=useSelector(selectCartState);
    
    return (
        <>
            <Head>
                <title>Store-App Cart</title>
                <meta name="description" content="Cart " />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>

                {cart.items.length > 0 ? cart.items.map((item:cartItem,key:any)=>{ return <CartItem item={item} key={key}  ></CartItem>}) : <></> }
                {/* <CartItem></CartItem>
                <CartItem></CartItem> */}
            </Container>

        </>
    )
}

export { getServerSideProps };

export default Cart;
