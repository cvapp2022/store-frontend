import { NextPage } from "next";
import { Image, Form, Button, InputGroup, Dropdown } from 'react-bootstrap';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { Container, Col, Row, Card } from "react-bootstrap";
import { faLock, faPhone } from "@fortawesome/free-solid-svg-icons";

const User: NextPage = () => {
    return (
        <>
            <Head>
                <title>Store-App orders</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <Container className="my-4">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Row className="justify-content-center" >
                                    <Image width="26" height="26" className="img-fluid rounded-circle mb-3" style={{ border: ' 2px solid #fff', borderRadius: ' 50%', width: '140px' }} src="https://cdn.assets.salla.network/stores/themes/default/assets/images/avatar_male.png" alt=""></Image>
                                </Row>
                                <Form className="row" onSubmit={(e) => console.log('ttt')}  >
                                    <Col sm={12} >
                                        <Form.Group>
                                            <Form.Label > الصورة الشخصية</Form.Label>
                                            <Form.Control type="file" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6} >
                                        <Form.Group>
                                            <Form.Label > الاسم الكامل </Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><FontAwesomeIcon icon={faUser} ></FontAwesomeIcon></InputGroup.Text>
                                                <Form.Control placeholder="الاسم الكامل" type="text" />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6} >
                                        <Form.Group>
                                            <Form.Label >  الايميل </Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon></InputGroup.Text>
                                                <Form.Control placeholder="الايميل" type="text" />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6} >
                                        <Form.Group>
                                            <Form.Label >  رقم الموبايل </Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><FontAwesomeIcon icon={faPhone} ></FontAwesomeIcon></InputGroup.Text>
                                                <Form.Control placeholder="رقم الموبايل " type="text" />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6} >
                                        <Form.Group>
                                            <Form.Label >  كلمة السر </Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text><FontAwesomeIcon icon={faLock} ></FontAwesomeIcon></InputGroup.Text>
                                                <Form.Control placeholder=" كلمة السر" type="password" />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12} className="row" >
                                        <Col sm={10} > <Button variant="primary" className="w-100" > حفظ </Button> </Col>
                                        <Col sm={2} className="px-0" >
                                            <Dropdown className="w-100">
                                                <Dropdown.Toggle variant="info" className="w-100">
                                                    خيارات الحساب
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item>تعطيل الحساب</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Col>
                                    </Col>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default User;