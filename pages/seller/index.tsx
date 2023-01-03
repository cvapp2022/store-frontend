import type { NextPage } from 'next'
import Head from 'next/head';
import {Button,Form,Col,Row,Container,Card} from 'react-bootstrap';
import Link from 'next/link'
const Seller: NextPage = () => {
    return (
        <>
            <Head>
                <title>Seller index</title>
            </Head>
            <Container>
                <Row>
                    <Col sm={9}>
                        <h4>Seller index</h4>
                    </Col>
                    <Col sm={3}>
                        <Link href="/seller/product/add"><Button variant="primary">Add product</Button></Link>
                    </Col>
                </Row>
            </Container>
        </>
    )

 }

 export default Seller