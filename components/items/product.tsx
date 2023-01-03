import { Image, Row, Col, Button, Card} from 'react-bootstrap';
import axios from 'axios';
import { useRouter } from 'next/router';
import { selectUserState } from '../../store/userSlice';
import { useSelector  } from "react-redux";
import { baseUrl } from '../../utils/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faUser } from '@fortawesome/free-solid-svg-icons'

function product({product } : any) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const userState = useSelector(selectUserState);

    return(
        <>
        <Card className=' pb-3 my-2 product'>
            <Image src='https://cdn.salla.sa/Kdwnd/1EOPtaMhTqNcPTNfZ0MuRFh8454JZPTqZG0EcSeh.png' fluid alt='Blaxk'></Image>
            <div className="mx-3">
                <div className="">اشتراك كوبرا ا 12 شهر</div>
                <div className="my-1 fw-bold price">150 ر.س</div>
                <Button variant="primary" className='btn-block w-100 fw-light add_to_card_btn btn-sm-lg' >
                    <FontAwesomeIcon className='add_to_card_btn_cart' icon={faCartShopping} />    
                    اضافة الى السلة
                </Button>
            </div>

        </Card>
        </>
    );

    function buyProduct(productId: number) {

        if(!userState.authenticated){
            router.push('/register')
        }
        else{
            axios.get(baseUrl+'/seller/product/'+productId+'/buy',{responseType:'blob'}).then((resp)=>{
                
                let blob = new Blob([resp.data], { type: 'application/txt' })
                let link = document.createElement('a')
                link.href = window.URL.createObjectURL(blob)
                link.download = productId+'.txt'
                link.click()
                
                router.reload()
                // location.reload()
            })
        }
    }


}

export default product;
