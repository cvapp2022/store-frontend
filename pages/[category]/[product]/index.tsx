
import type { NextPage } from 'next'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { getServerSideProps } from '../../../utils/serverProp';
import ProdCarousel from '../../../components/widgets/prodOne/prodCarousel'
import { useDispatch, useSelector } from 'react-redux';
import { selectProdOneLayoutState } from '../../../store/layoutSlice';
import Head from 'next/head';
import ProdList from '../../../components/lists/prodList';
import { layoutItem } from '../../../types/layoutItem';
import LayoutCarousel from '../../../components/widgets/layoutCarousel';
import { initCartState, setCartState } from '../../../store/cartSlice';
import { getCookie, setCookie } from '../../../utils/cookie';
import { initCart, addToCart } from '../../../utils/requests';



const ProductOne: NextPage = (props: any) => {

    var productOne = useSelector(selectProdOneLayoutState);
    const dispatch=useDispatch()

    const selectedProps: Array<any>=[];
    function handleSetProp(propId: any, propValue: any,propKey:any) {
        if(!selectedProps.find(item=>item.id===propId)){
            selectedProps.push({id:propId,value:propValue,sort:propKey})
            selectedProps.sort((a,b)=>{
                return a.sort - b.sort;
            })
        }
    }

    async function handleAddToCart() {
        let cartId;
        let prodId;
        
        if(!getCookie('cart',{headers:{cookie:''}})){
            await initCart().then((payload)=>{

                //set cookie cart 
                setCookie('cart',payload.payload.cart_identifier)
                dispatch(initCartState(payload.payload))
            })
        }
        cartId=getCookie('cart',{headers:{cookie:''}});



        if(productOne.product.product_type==='simple'){
            prodId=productOne.product.id;
        }
        else if(productOne.product.product_type==='variable' && selectedProps.length === productOne.product.properties.length ){
            let variationPermalink: any;
            variationPermalink=productOne.product.product_permalink+'(';
            selectedProps.forEach((element,key)=>{
                variationPermalink+=element.value;
                if(key!==selectedProps.length-1){
                    variationPermalink+=',';
                }
            })
            variationPermalink+=')'
            var variation=productOne.product.variations.find((item: { product_permalink: any; })=>item.product_permalink===variationPermalink)
            prodId=variation.id;
        }

        if(prodId){
            await addToCart(cartId,prodId).then((data)=>{
                if(data.success){
                    dispatch(setCartState(data.payload))
    
                    //flying product animation
                    // var parent =document.querySelector<HTMLElement>('.product[data-id="'+prodId+'"]');
                    // var shopping_cart=document.getElementsByClassName('shopping_cart')[0];
                    // if(parent){
                    //     parent.style.zIndex = "100";
                    //     var img=parent.getElementsByTagName('img')[0]
                    //     console.log('item clicked',img)
                    // }
                }
                else{
                    console.log('unable to add to cart')
                }
            })
            console.log('add to cart')
        }



    }



    return (
        <>
            <Head>
                <title>{productOne.product.strings?.product_name}</title>
                <meta name="description" content={productOne.product.strings?.product_short_desc} />
            </Head>

            <Container>
                <Row className=' my-4 '>
                    <Col xs={12} sm={6} >
                        <ProdCarousel></ProdCarousel>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex flex-column">
                        <h4>{productOne.product.strings?.product_name}</h4>
                        <div className="">{productOne.product.price}</div>
                        <div className="">{productOne.product.strings?.product_short_desc}</div>
                        {
                           productOne.product.product_type==='variable' ? 
                           <>
                            <Row>
                                { productOne.product.properties.length > 0 ? productOne.product.properties.map((item: any, propKey: any) =>
                                    <Col sm={12} className="d-flex my-2" key={propKey}>
                                        {item.property_value === 'color' ? <>{item.childs.map((child: any, key: any) => <div onClick={() => handleSetProp(item.id, child.property_value,propKey)} className="property-color-item mx-1" style={{ backgroundColor: child.property_value }} key={key}></div>)}</> : <></>}
                                        {item.property_value === 'mstorage' ? <>{item.childs.map((child: any, key: any) => <div onClick={() => handleSetProp(item.id, child.property_value,propKey)} className="property-mstorage-item mx-1" key={key}>{child.strings.property_name}</div>)}</> : <></>}
                                    </Col>) : <></>}
                            </Row>
                           </>
                           :<></> 
                        }
                        <Row>
                            <Col sm={12}>
                                <Button variant="primary" onClick={()=>handleAddToCart()}  >Add to cart </Button>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Container>
            {productOne.layout.items.map((item: layoutItem, key: any) => {
                return <Container key={key} fluid className={item.item_type === 'slider' ? 'px-0' : ''} >
                    {item.item_type === 'slider' ? <LayoutCarousel></LayoutCarousel> : <></>}
                    {(item.item_type === 'list') ? <ProdList list={item.attachment.products} ></ProdList> : <></>}
                </Container>
            })}
        </>
    );


}


export { getServerSideProps };


export default ProductOne;
