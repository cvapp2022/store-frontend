import { Image, Row, Col, Button, Card} from 'react-bootstrap';
import axios from 'axios';
import { useRouter } from 'next/router';
import { selectUserState } from '../../store/userSlice';
import { baseUrl } from '../../utils/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { setDisplayAddedToCartModal } from '../../store/appSlice'


function product({product} : any) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();

    return(
        <>
        <Card className=' pb-3 my-2 product' data-id={product.id}>
            <Image src='https://cdn.salla.sa/Kdwnd/1EOPtaMhTqNcPTNfZ0MuRFh8454JZPTqZG0EcSeh.png' fluid alt='Blaxk'></Image>
            <div className="mx-3">
                <div className="">اشتراك كوبرا ا 12 شهر</div>
                <div className="my-1 fw-bold price">150 ر.س</div>
                <Button variant="primary" className='btn-block w-100 fw-light add_to_card_btn btn-sm-lg' onClick={()=>handleAddToCart(product.id)} >
                    <FontAwesomeIcon className='add_to_card_btn_cart' icon={faCartShopping} />    
                    اضافة الى السلة
                </Button>
            </div>

        </Card>
        </>
    );
    
    function handleAddToCart(prodId: number){
        console.log('item clicked',)
        var parent =document.querySelector<HTMLElement>('.product[data-id="'+prodId+'"]');
        var shopping_cart=document.getElementsByClassName('shopping_cart')[0];
        if(parent){
            parent.style.zIndex = "100";
            var img=parent.getElementsByTagName('img')[0]
            var flying_img = img.cloneNode() as HTMLElement;
            flying_img.classList.add('flying-img');
            parent.appendChild(flying_img);
    
            const flying_img_pos = flying_img.getBoundingClientRect();
            const shopping_cart_pos = shopping_cart.getBoundingClientRect();
            let data = {
                left: shopping_cart_pos.left - (shopping_cart_pos.width / 2 + flying_img_pos.left + flying_img_pos.width / 2),
                top: shopping_cart_pos.bottom - flying_img_pos.bottom + 30
            }
            flying_img.style.cssText = `
                --left : ${data.left.toFixed(2)}px;
                --top : ${data.top.toFixed(2)}px;
            `;
    
            setTimeout(() => {
                if(parent){
                    parent.style.zIndex = "";
                    parent.removeChild(flying_img);
                    dispatch(setDisplayAddedToCartModal(true))
                    // shopping_cart.classList.remove('active');
                    
                }
            }, 1000);
        }
        
    }
}

export default product;


