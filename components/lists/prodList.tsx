import { Key } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from '../items/product';

interface ProductListProps {
    list: any;
}
function prodList({list} : ProductListProps){

    return (
        <div className="mb-4">
            <Row className='my-1 py-1'>
                <Col sm="12">
                    <div className="h6 mb-0">{list.title}</div>
                </Col>
            </Row>
            <Row>
            {/* my-2 py-3 card row flex-column align-items-center */}
                {list.map((item: any,key: any)=> <Col key={key} xs="6" sm="3" ><Product  product={item} category={list.category}></Product></Col>)}
            </Row>
        </div>
    )
}

export default prodList;