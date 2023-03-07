import { Image, Button, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, initCart } from '../../utils/requests';
import { initCartState, selectCartState, setCartState } from '../../store/cartSlice';
import { getCookie, setCookie } from '../../utils/cookie';
import Link from 'next/link';


function product({product} : any) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var cart=useSelector(selectCartState)

    return(
        <>
            <Card className=' pb-3 my-2 product' data-id={product.id}>
                <Link href={product.category.category_permalink+'/'+product.product_permalink} passHref>
                    <Image src='http://127.0.0.1:8000/assets/temp/products/1.jpeg' fluid alt='Blaxk'></Image>
                </Link>
                <div className="mx-3">
                    <Link href={product.category.category_permalink+'/'+product.product_permalink} passHref>
                        <div className="">{product.strings.product_name}</div>
                    </Link>
                    <div className="my-1 fw-bold price">{product.price}</div>
                    <Button variant="primary" className='btn-block w-100 fw-light add_to_card_btn btn-sm-lg' onClick={()=>handleAddToCart(product.id)} >
                        <FontAwesomeIcon className='add_to_card_btn_cart' icon={faCartShopping} />    
                        اضافة الى السلة
                    </Button>
                </div>
            </Card>
        </>
    );
    
    async function handleAddToCart(prodId: number){

        let cartId;
        if(!getCookie('cart',{headers:{cookie:''}})){
            await initCart().then((payload)=>{

                //set cookie cart 
                setCookie('cart',payload.payload.cart_identifier)
                dispatch(initCartState(payload.payload))
            })
        }
        cartId=getCookie('cart',{headers:{cookie:''}});

        await addToCart(cartId,prodId).then((data)=>{
            if(data.success){
                dispatch(setCartState(data.payload))

                //flying product animation
                var parent =document.querySelector<HTMLElement>('.product[data-id="'+prodId+'"]');
                var shopping_cart=document.getElementsByClassName('shopping_cart')[0];
                if(parent){
                    parent.style.zIndex = "100";
                    var img=parent.getElementsByTagName('img')[0]
                    console.log('item clicked',img)
                }
            }
            else{
                console.log('unable to add to cart')
            }
        })
            //dispatch cart


        

     


        // if(parent){
        //     parent.style.zIndex = "100";
        //     var img=parent.getElementsByTagName('img')[0]
        //     var flying_img = img.cloneNode() as HTMLElement;
        //     flying_img.classList.add('flying-img');
        //     parent.appendChild(flying_img);
    
        //     const flying_img_pos = flying_img.getBoundingClientRect();
        //     const shopping_cart_pos = shopping_cart.getBoundingClientRect();
        //     let data = {
        //         left: shopping_cart_pos.left - (shopping_cart_pos.width / 2 + flying_img_pos.left + flying_img_pos.width / 2),
        //         top: shopping_cart_pos.bottom - flying_img_pos.bottom + 30
        //     }
        //     flying_img.style.cssText = `
        //         --left : ${data.left.toFixed(2)}px;
        //         --top : ${data.top.toFixed(2)}px;
        //     `;
    
        //     setTimeout(() => {
        //         if(parent){
        //             parent.style.zIndex = "";
        //             parent.removeChild(flying_img);
        //             // dispatch(setDisplayAddedToCartModal(true))
        //             // shopping_cart.classList.remove('active');
                    
        //         }
        //     }, 2000);
        // }
        
    }
}

export default product;


