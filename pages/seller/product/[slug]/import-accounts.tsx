import type { NextPage } from 'next'
import Head from 'next/head';
import { Button, Form, Col, Row, Container, Card } from 'react-bootstrap';
import { FormEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import {baseUrl} from '../../../../utils/config'

const ImportAccounts: NextPage = () => {
    
    const router =useRouter();


    function submitImport(event: FormEvent<HTMLFormElement>) {

        event.preventDefault();

        var fileinput = (event.currentTarget.elements[0] as HTMLInputElement);
        if (fileinput.files && fileinput.files[0]) {
            const data = new FormData();
            const productId=router.query.slug as string
            data.append("file",fileinput.files[0]);
            data.append("productIdI",productId);

            // axios.post('http://127.0.0.1:8000/api/seller/product/import-accounts')
            axios({
                method: "post",
                url: baseUrl+"/seller/product/import-accounts",
                data: data,
                headers: { "Content-Type": "multipart/form-data" },
              })
                .then(function (response) {
                  //handle success
                  console.log(response.data.message);

                  router.push({ pathname: '/' })

                })
                .catch(function (response) {
                  //handle error
                  console.log(response);
                });

        }


    }


    return (
        <>
            <Head>
                <title>Import accounts to product</title>
            </Head>
            <Container>
                <Row className='my-4'>
                    <Col sm={12} xs={12}>
                        <Card className='my-5 py-2 px-4'>
                            <h5>import accounts form excel sheet</h5>
                            <Form onSubmit={submitImport} encType="multipart/form-data" >
                                <Form.Group>
                                    <Form.Control type="file" />
                                </Form.Group>
                                <Form.Group className='my-4'>
                                    <Button variant='primary' type="submit">Import accounts</Button>
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )

}



export default ImportAccounts