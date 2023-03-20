import { NextPage } from "next";
import Head from 'next/head';
import { useRouter } from "next/router";
import { Row, Col, Card, Container, Badge } from "react-bootstrap";
import { fetchOrder } from "../../utils/requests";
import { useState, useEffect } from 'react'

const Order: NextPage = () => {

    const router = useRouter()
    const [order, setOrder] = useState<any>({})
    const [orderLoaded,setOrderLoaded]=useState(false);

    useEffect(() => {

        if(router.isReady){
            console.log('router is ready')
            // get order
            var orderReq = async () => { return await fetchOrder({ id: router.query.order }) };
            orderReq().then((resp) => {
                if (resp.success) {
                    console.log(resp.payload)
                    setOrder(resp.payload)
                    setOrderLoaded(true);
                }
            })
        }
    }, [router.isReady, router.query.order])



    return (
        <>
            <Head>
                <title>Store-App order</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <Container>
                <Row className="my-3">
                    <Col>
                        {
                            orderLoaded ? 
                            <>
                                <Card>
                                    <Card.Header>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="">حالة الطلب : <Badge  > {order.order_status ==0 ? 'بانتظار الدفع' : 'مكتمل'}  </Badge> <span className="badge badge-primary">Pending</span></div>
                                            <div className="">حالة الدفع : <Badge  > {order.payment.payment_status ==0 ? 'لم يتم الدفع' : 'تم الدفع'} </Badge></div>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col sm={3}>
                                                <Card>
                                                    <Card.Body>
                                                        <div className="text-muted">رقم الطلب</div>
                                                        <div className="">{order.order_identifier}</div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col sm={3}>
                                                <Card>
                                                    <Card.Body>
                                                        <div className="text-muted"> بتاريخ</div>
                                                        <div className="">{order.created_at}</div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col sm={3}>
                                                <Card>
                                                    <Card.Body>
                                                        <div className="text-muted"> الاجمالي</div>
                                                        <div className="">{order.payment.payment_amount}</div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col sm={3}>
                                                <Card>
                                                    <Card.Body>
                                                        <div className="text-muted"> وسيلة الدفع</div>
                                                        <div className="">{order.payment.payment_method}</div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <Row className="my-3">
                                            <Col sm={6}>
                                                <div className="fw-bold my-2">معلومات الطلب</div>
                                                <div className="text-muted">اجمالي العناصر: <span className="text-black">{order.cart.items.length} عنصر</span></div>
                                                <div className="text-muted">الكلفة : <span className="text-black">{order.payment.payment_amount}</span></div>
                                                <div className="text-muted">خصم : <span className="text-black">0$</span></div>
                                                <div className="text-muted">اجمالي الكلفة : <span className="text-black">{order.payment.payment_amount}</span></div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="fw-bold my-2">حالة الطلب</div>
                                                <div className="">الطلب بالانتظار <span></span></div>
                                                <div className="">الطلب مكتمل <span></span></div>
                                            </Col>
                                        </Row>
                                        <Row>

                                        </Row>
                                    </Card.Body>
                                </Card>
                            </>

                            :
                            <></>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
}



export default Order;