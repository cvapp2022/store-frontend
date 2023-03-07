
import axios from 'axios';
import type { NextPage } from 'next'
import Head from 'next/head';
import { Container,Row,Col,Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/items/cartItem';
import { setDispalyAuthModal } from '../store/appSlice';
import { selectCartState } from '../store/cartSlice';
import { selectUserState } from '../store/userSlice';
import  cartItem  from '../types/cartItem';
import { useRouter } from 'next/router';

const Cart: NextPage = (props: any) => {

    const cart=useSelector(selectCartState);
    const user=useSelector(selectUserState);
    const dispatch=useDispatch();
    const router =useRouter();


    function handleCheckout(){
        if(!user.authenticated){
            console.log('display auth modal')
            dispatch(setDispalyAuthModal(true))
        }
        else{
            //redirect to checkout page
            router.push({ pathname: '/checkout' })
        }
    }


    return (
        <>
            <Head>
                <title>Store-App Cart</title>
                <meta name="description" content="Cart " />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container className="my-4">
                <Row>
                    <Col sm={12} >
                        {cart.items.length > 0 ? cart.items.map((item:cartItem,key:any)=>{ return <CartItem item={item} key={key}  ></CartItem>}) : <></> }
                    </Col>
                </Row>
                <Row >
                    <Col sm={12} className="d-flex justify-content-end">
                        <Button onClick={()=> handleCheckout() } >اتمام الطلب </Button>
                    </Col>
                </Row>
            </Container>

        </>
    )
}



// export { getServerSideProps };

export default Cart;
