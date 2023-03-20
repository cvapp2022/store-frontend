
import type { NextPage } from 'next'
import Head from 'next/head';
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Product from '../../components/items/product';
import ProdList from '../../components/lists/prodList';
import LayoutCarousel from '../../components/widgets/layoutCarousel';
import { selectCategoryOneLayoutState } from '../../store/layoutSlice';
import { layoutItem } from '../../types/layoutItem';
import { getServerSideProps } from '../../utils/serverProp';


const CategoryOne: NextPage = (props:any) => { 

    const categoryOne=useSelector(selectCategoryOneLayoutState)

    return (
        <>
            <Head>
                <title>{categoryOne.category.strings?.category_name}</title>
                <meta name="description" content={categoryOne.category.strings?.category_desc} />
            </Head>
            <Container>
                <Row>
                    <Col sm={3}>

                    </Col>
                    <Col sm={9}>
                        <Row>
                            {categoryOne.catOneLoaded ? categoryOne.category.products.data.map((item: any,key: any)=> <Col key={key} xs="6" sm="4" ><Product  product={item} category={categoryOne.category}></Product></Col>) : <></>}
                        </Row>
                    </Col>
                </Row>
            </Container>
            {categoryOne.layout.items.map((item: layoutItem, key: any) => {
                return <Container key={key} fluid className={item.item_type === 'slider' ? 'px-0' : ''} >
                    {item.item_type === 'slider' ? <LayoutCarousel></LayoutCarousel> : <></>}
                    {(item.item_type === 'list') ? <ProdList list={item.attachment.products} ></ProdList> : <></>}
                </Container>
            })}
        </>
    );


}


export { getServerSideProps };


export default CategoryOne;
