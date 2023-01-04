import {Navbar,Nav,Container,Image, Form, Button, Col, Row} from 'react-bootstrap';
import { useRouter } from 'next/router'
import Link from 'next/link'
import {selectUserState } from '../../store/userSlice';
import {useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faUser,faCircle } from '@fortawesome/free-solid-svg-icons'
// import { faFaceRelieved } from '@fortawesome/pro-solid-svg-icons'
export default function navbar(){
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router =useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const userState = useSelector(selectUserState);
    
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="sm" sticky="top" className='py-2'>
                <Container>
                    <Navbar.Brand onClick={()=>{router.push({pathname:'/'})}} className="d-flex w-sm-100 align-items-center justify-content-between" >
                        <Navbar.Toggle className="d-sm-none" aria-controls="navbarScroll" />
                        <Image src="https://cdn.salla.sa/Kdwnd/HTetqIXIzbmycQ6Hw2ptVa1yGEMokfsHjmA7Utpd.png" height={40} alt="cobra" />
                        <Link href="/login" className='d-sm-none px-3' passHref>
                            <Nav.Link className="d-sm-none me-5">
                            <span className="fa-layers fa-fw my-4">
                                <FontAwesomeIcon icon={faCircle} size="2x" color="white" /> 
                                <FontAwesomeIcon icon={faCartShopping} size="1x" className='px-2' color="black" /> 
                            </span>
                            </Nav.Link>
                        </Link>
                    </Navbar.Brand>
                    <Row className='w-100 align-items-center'>
                        <Col sm="8">
                            <Form className="d-flex">
                                <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                />
                            </Form>
                        </Col>
                        <Col sm="4">
                            <Nav className="ms-auto d-none align-items-center justify-content-end d-sm-flex">
                                {userState.authenticated ? 
                                    <Link href="/account" passHref>
                                        <Nav.Link>Account</Nav.Link>
                                    </Link>
                                    :
                                    <>
                                        <Link href="/login" passHref>
                                            <Nav.Link className="d-flex align-items-center shopping_cart">
                                                <div className="mx-2">
                                                    <FontAwesomeIcon icon={faCartShopping} />    
                                                </div>
                                                <div>
                                                    <div className="">
                                                      سلة المشتريات
                                                    </div>
                                                    <div className="ms-2">
                                                        1  منتج -
                                                        70 SAR
                                                    </div>
                                                </div>
                                            </Nav.Link>
                                        </Link>
                                        <Link href="/login" passHref>
                                            <Nav.Link>
                                                <FontAwesomeIcon icon={faUser} /> 
                                            </Nav.Link>
                                        </Link>
                                        {/* <Link href="/register" passHref>
                                            <Nav.Link>Register</Nav.Link>
                                        </Link> */}
                                    </>
                                }
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    );
}

// export default navbar;