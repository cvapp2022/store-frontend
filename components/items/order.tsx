import {  Card, Row, Col } from 'react-bootstrap';
import { order } from '../../types/order';
import cartItem from '../../types/cartItem';
import OrderItem from './orderItem';

interface OrderItemProps {
    order: order;
}

function Order({ order }: OrderItemProps) {
    return (
        <>
            <Card className='my-3'>
                <Card.Body>
                    <Row className='justify-content-center reorder-xs' >
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="text-center btn btn-outline-primary">
                                <h2 style={{ color: 'unset', cursor: 'pointer' }}>رقم الطلب: <span>{order.order_identifier}</span></h2>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="text-center">المنتجات</div>
                        {order.cart.items.length > 0 ? order.cart.items.map((item:cartItem,key:any)=>{ return <Col key={key} sm={12}> <OrderItem item={item}   ></OrderItem></Col>}) : <></> }                        
                        {order.payment.payment_amount}
                        <br />
                        {order.payment.payment_method}
                        <br />
                        {order.payment.payment_token}
                        
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default Order;


