import type { NextPage } from 'next'
import Head from 'next/head'
import {Button,Form,Col,Row,Container,Card} from 'react-bootstrap';
import { FormEvent } from 'react';
import { useRouter } from 'next/router'
import { setUserState,selectUserState } from '../store/userSlice';
import { useDispatch,useSelector  } from "react-redux";
import { getCookie,setCookie } from '../utils/cookie';
import axios from "axios";
import { baseUrl} from '../utils/config';

const Login: NextPage = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router =useRouter();
    const userState = useSelector(selectUserState);
    const dispatch = useDispatch();

    return (
        <>
        <Head>
            <title>User login</title>
        </Head>
            <Container>
                <Row>
                    <Col sm={7} className="d-none d-sm-block">
                    </Col>
                    <Col sm={5} xs={12}>
                        <Card className='my-5 py-2 px-4'>
                            <Form onSubmit={loginSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" defaultValue='blaxk@blaxk.cc' placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" defaultValue='123456789' placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Login
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

    function loginSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        var url=baseUrl+'/user/login';
        var data={
            emailI: (event.currentTarget.elements[0] as HTMLInputElement).value,
            passwordI: (event.currentTarget.elements[1] as HTMLInputElement).value,
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

export default Login