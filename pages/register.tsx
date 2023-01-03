import type { NextPage } from 'next'
import Head from 'next/head'
import {Button,Form,Col,Row,Container,Card} from 'react-bootstrap';
import { FormEvent } from 'react';
import { useRouter } from 'next/router'
import { setUserState } from '../store/userSlice';
import { useDispatch  } from "react-redux";
import axios from "axios";
import {baseUrl} from '../utils/config';
import { setCookie } from '../utils/cookie';

const Register: NextPage = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router =useRouter();

    const dispatch = useDispatch();

    return (
        <>
            <Head>
                <title>User register</title>
            </Head>
            <Container>
                <Row>
                    <Col sm={7} className="d-none d-sm-block">
                    </Col>
                    <Col sm={5} xs={12}>
                        <Card className='my-5 py-2 px-4'>
                            <Form onSubmit={registerSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Full name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Full name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Repeat Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="I Accept on terms and conditions" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Register
                                </Button>
                                <a className='mx-2 btn btn-outline-secondary' onClick={()=>{router.back()}} >
                                    Back
                                </a>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );

    function registerSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        var url=baseUrl+'/user';
        var data={
            emailI: (event.currentTarget.elements[0] as HTMLInputElement).value,
            nameI:(event.currentTarget.elements[1] as HTMLInputElement).value,
            passwordI: (event.currentTarget.elements[2] as HTMLInputElement).value,
        }
        axios.post(url,data).then(async (resp)=>{
            if(resp.data.success){
                dispatch(setUserState(resp.data.payload))
                //set token
                axios.defaults.headers.common={ 'Authorization': 'Bearer '+resp.data.payload.token}

                //set cookies
                setCookie('auth',resp.data.payload.token)

                //redirect to main page
                router.push({ pathname: '/' })
            }
            else{
                console.log('unable to log in')
            }
        }).catch((err)=>{
            console.log('unable to log-in',err)
        })
    }


}


export default Register