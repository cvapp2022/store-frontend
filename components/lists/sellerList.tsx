import Seller from '../items/seller';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function sellerList(){

    return (
        <div className='my-2'>
            <Row className='bg-dark my-1 px-3 py-1 text-white rounded'>
                <Col sm="9">
                    <div className="h6 mb-0">Best Sellers</div>
                </Col>
            </Row>
            <Row>
                <Col xs="6" sm="3" className="px-3" >
                    <Seller></Seller>
                </Col>
                <Col xs="6" sm="3" className="px-3" >
                    <Seller></Seller>
                </Col>
                <Col xs="6" sm="3" className="px-3">
                    <Seller></Seller>
                </Col>
                <Col xs="6" sm="3" className="px-3">
                    <Seller></Seller>
                </Col>
            </Row>

        </div>
    )
}

export default sellerList;