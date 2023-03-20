import { Card, Row, Col, Button,Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { order } from '../../types/order';
import Link from 'next/link';

interface OrderItemProps {
    order: order;
}

function Order({ order }: OrderItemProps) {
    return (
        <>
            <Card className='my-3'>
                <Card.Body>
                    <Row className='justify-content-center reorder-xs' >
                        <Col sm={9}>
                            <h2 style={{ color: 'unset', cursor: 'pointer' }}>رقم الطلب: <span>{order.order_identifier}</span></h2>
                        </Col>
                        <Col sm={3} className="d-flex justify-content-end align-items-center">
                            {order.payment.payment_method != 'cashOnDelevery' && order.payment.payment_status == 0 ? <Button variant='primary'>ادفع الان</Button> : <></>}
                            <Dropdown className='mx-2'>
                                <Dropdown.Toggle variant="info">
                                    <FontAwesomeIcon icon={faThumbsUp} ></FontAwesomeIcon>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item> <Link href={'/orders/'+order.order_identifier} passHref>عرض المزيد</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default Order;


