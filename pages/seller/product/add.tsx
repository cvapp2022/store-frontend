import type { NextPage } from 'next'
import Head from 'next/head';
import { Button, Form, Col, Row, Container, Card } from 'react-bootstrap';
import { selectApplicationState } from '../../../store/appSlice' 
import { FormEvent } from 'react';
import axios from 'axios';
import {useSelector} from "react-redux";
import { useRouter } from 'next/router'
import { baseUrl } from '../../../utils/config';

const AddProduct: NextPage = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const applicationState = useSelector(selectApplicationState);

    async function submitProduct(event: FormEvent<HTMLFormElement>) {

        event.preventDefault();
        // Get data from the form.
        var data = {
            category: (event.currentTarget.elements[0] as HTMLInputElement).value,
            desc: (event.currentTarget.elements[1] as HTMLInputElement).value,
            format: (event.currentTarget.elements[2] as HTMLInputElement).value,
            quant: (event.currentTarget.elements[3] as HTMLInputElement).value
        }

        //save product
        await axios.post(baseUrl+'/seller/product', data).then((resp) => {

            if (resp.data.success) {

                console.log(resp.data.message)
                var productId = resp.data.payload.id;
                //redirect user to import accounts page 
                router.push({ pathname: '/seller/product/' + productId + '/import-accounts' })

            }
        }).catch(() => {
            console.log('unable to save product')
        })
    }


    return (
        <>
            <Head>
                <title>Add new product</title>
            </Head>
            <Container>
                <Row className='my-4'>
                    <Col sm={12} xs={12}>
                        <Card className='my-5 py-2 px-4'>
                            <Form onSubmit={submitProduct}>
                                <Row>
                                    <Col sm={2}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Select name='category'>
                                            {applicationState.application.categories.map((category) => (<option key={category.id} value={category.id}>{category.title}</option> ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={4}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control name='desc' type="text" as="textarea" placeholder="Enter product descritption" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={4}>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control name='format' type="text" as="textarea" placeholder="format" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={2}>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control name='quant' type="number" min={0} placeholder="quantity" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Button variant="primary" type="submit">Submit</Button>
                                </Row>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )



}

export default AddProduct