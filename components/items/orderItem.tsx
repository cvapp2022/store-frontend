import {  Card, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import cartItem from '../../types/cartItem';


interface OrderItemProps {
    item: cartItem;
}

function OrderItem({ item }: OrderItemProps) {


    const dispatch = useDispatch();

    return (
        <Card className='my-3' >
            <Card.Body className='d-flex flex-column'>
                <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex">
                        <Image src='http://127.0.0.1:8000/assets/temp/products/1.jpeg' width={90} alt='test' fluid></Image>
                        <div className="mx-2">
                            <div className="">{item.product.strings.product_name}</div>
                            <div className="fw-bold">{item.product.price} </div>
                            <div className="">الاجمالي <span>{item.product.price * item.quantity}</span></div>
                        </div>
                    </div>
                </div>

            </Card.Body>
        </Card>
    )
}




export default OrderItem;