import { Button, Card, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setCartState } from '../../store/cartSlice';
import  cartItem  from '../../types/cartItem';
import { getCookie } from '../../utils/cookie';
import { increaseItemQty, reduceItemQty, removeFromCart } from '../../utils/requests';

function CartItem({ item }: any) {


    const dispatch = useDispatch();

    return (
        <Card className='my-3' >
            <Card.Body className='d-flex flex-column'>
                <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex">
                        <Image src='http://127.0.0.1:8000/assets/temp/products/1.jpeg' width={90} alt='test' fluid></Image>
                        <div className="mx-2">
                            <div className="">{item.product.strings.product_name } { item.product.product_type==='variation' ? item.product.product_permalink : '' }</div>
                            <div className="fw-bold">{item.product.price} </div>
                            <div className="">الاجمالي <span>{item.product.price * item.quantity}</span></div>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <Button variant='danger' onClick={() => handleRemoveFromCart(item.product.id)}  >X</Button>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="">الكمية</div>
                    <Card>
                        <Card.Body className='d-flex align-items-center p-0'>
                            <Button variant='light' onClick={() => handleIncreseItem(item.product.id)} >+</Button>
                            <input className='text-center border-top-0 border-bottom-0' type="text" name="" value={item.quantity} readOnly />
                            <Button variant='light' onClick={() => handleReduceItem(item.product.id)} >-</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Card.Body>
        </Card>
    )


    async function handleRemoveFromCart(prodId: any) {

        var cartId = getCookie('cart', { headers: { cookie: '' } });
        await removeFromCart(cartId, prodId).then((data) => {
            if (data.success) {
                dispatch(setCartState(data.payload))
            }
        })
    }


    async function handleIncreseItem(prodId: any) {

        var cartId = getCookie('cart', { headers: { cookie: '' } });
        await increaseItemQty(cartId, prodId).then((data) => {
            if (data.success) {
                dispatch(setCartState(data.payload))
            }
        })

    }

    async function handleReduceItem(prodId: any) {

        var cartId = getCookie('cart', { headers: { cookie: '' } });
        await reduceItemQty(cartId, prodId).then((data) => {
            if (data.success) {
                dispatch(setCartState(data.payload))
            }
        })

    }




}













export default CartItem;