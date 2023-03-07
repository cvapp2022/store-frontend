import { NextPage } from "next";
import Head from 'next/head';
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCartState } from "../store/cartSlice";
import { removeCookie } from "../utils/cookie";
import { saveOrder } from "../utils/requests";


const Checkout: NextPage = () => {


    const cart = useSelector(selectCartState);


    function setPaymentMethod(e: any,method : string){

        // mx-1 btn btn--round btn--payment-option
        const allMethods= document.querySelectorAll('.mx-1.btn.btn--round.btn--payment-option')
        allMethods.forEach((item)=>{
            item.classList.remove('active')
        })
        console.log(e.target)
    }

    async function saveOrderCashOnDelevery() {
        
        // cartIdentifierI
        // paymentMethodI
        // amountI
        if(cart){
            var cartIdentifierI=cart.identifier;
            var amountI=cart.totalAmount;
            var data={
                cartIdentifierI,
                paymentMethodI:'cashOnDelevery',
                amountI
            }
            var order=await saveOrder(data);
            if(order.success){
                
                //remove cart 
                removeCookie('cart')

                console.log('order saved')
                // dispatch()
            }
        }
    }



        return (
            <>
                <Head>
                    <title>Store-App Checkout</title>
                    <meta name="description" content="Cart " />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container className="my-4">
                    <Row>
                        <Col sm={8} >
                            <Card>
                                <Card.Body>
                                    <Row >
                                        <Col>
                                            <button type="button" className="mx-1 btn btn--round btn--payment-option" onClick={(e)=>setPaymentMethod(e,'mada')}>
                                                <Image src="/pay-option-mada.svg" alt="Mada" width={60} fluid></Image>
                                            </button>
                                        </Col>
                                        <Col>
                                            <button type="button" className="mx-1 btn btn--round btn--payment-option" onClick={(e)=>setPaymentMethod(e,'cc')}>
                                                <Image src="/pay-option-credit.svg" alt="Credit card" width={60} fluid></Image>
                                            </button>
                                        </Col>
                                        <Col>
                                            <button type="button" className="mx-1 btn btn--round btn--payment-option" onClick={(e)=>setPaymentMethod(e,'applepay')}>
                                                <Image src="/applepay.svg" alt="Apple" width={60} fluid></Image>
                                            </button>
                                        </Col>
    
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            <Button variant="primary" onClick={()=>saveOrderCashOnDelevery()} >checkout with cashOnDelevery</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card>
                                <Card.Body>
    
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )

}

export default Checkout;
