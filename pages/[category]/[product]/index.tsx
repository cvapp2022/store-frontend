
import type { NextPage } from 'next'
import { Col, Container, Row } from 'react-bootstrap';
import { getServerSideProps } from '../../../utils/serverProp';
import ProdCarousel from '../../../components/widgets/prodOne/prodCarousel'
import { useSelector } from 'react-redux';
import { selectProdOneLayoutState } from '../../../store/layoutSlice';
import Head from 'next/head';
import ProdList from '../../../components/lists/prodList';
import React from 'react';
import { layoutItem } from '../../../types/layoutItem';
import LayoutCarousel from '../../../components/widgets/layoutCarousel';


const ProductOne: NextPage = (props:any) => { 

    var productOne=useSelector(selectProdOneLayoutState);


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

                    </Col>
                </Row>
            </Container>
            {productOne.layout.items.map((item:layoutItem,key:any)=>{
                return <Container  key={key} fluid className={item.item_type==='slider' ? 'px-0' : ''} >
                {item.item_type==='slider' ? <LayoutCarousel></LayoutCarousel> : <></>  } 
                {(item.item_type==='list') ? <ProdList list={item.attachment.products} ></ProdList> :<></>}
                </Container>
            })}
        </>
    );


}


export { getServerSideProps };


export default ProductOne;
