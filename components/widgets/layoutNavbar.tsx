import { Navbar, Nav, Container, Image, Form, Button, Col, Row, NavDropdown } from 'react-bootstrap';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { selectUserState, setUserState, unSetUserState } from '../../store/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faCircle } from '@fortawesome/free-solid-svg-icons'
import { setDispalyAuthModal, setDisplayRouteLoader, setDisplaySidebar } from '../../store/appSlice';
import { removeCookie } from '../../utils/cookie';
import axios from 'axios';
export default function LayoutNavbar() {

    const router = useRouter();
    const dispatch = useDispatch()
    const user = useSelector(selectUserState)


    function handleUserClick() {

        if (!user.authenticated) {
            dispatch(setDispalyAuthModal(true))
        }
        else {

        }
    }


    function handleLogoutClick() {
        
        //remove token cookie
        removeCookie('user')
        
        //remove state
        dispatch(unSetUserState())

        axios.defaults.headers.common={ 'Authorization': ''}

        //redirect to home
        dispatch(setDisplayRouteLoader(true))    
        router.push('/').then(()=> {
            dispatch(setDisplayRouteLoader(false)) 
          })
        
    }








    const userDropdown = <>
        <NavDropdown
            id="navUserDropdown"
            title={<FontAwesomeIcon scale={12} color="white" icon={faUser} />}
            align='start'
            as='div'
        >
            <Link href={'/user'} passHref>
                <NavDropdown.Item>حسابي</NavDropdown.Item>
            </Link>
            <Link href={'/orders'} passHref>
                <NavDropdown.Item>الطلبات</NavDropdown.Item>
            </Link>
            <NavDropdown.Item  onClick={()=>{handleLogoutClick()}} >تسجيل الخروج</NavDropdown.Item>
        </NavDropdown>
    </>


    return (
        <>
            <Navbar bg="dark" variant="dark" expand="sm" sticky="top" className='py-2'>
                <Container>
                    <Navbar.Brand className="d-flex w-sm-100 align-items-center justify-content-between" >
                        <Navbar.Toggle className="d-sm-none" onClick={() => { dispatch(setDisplaySidebar()) }} />
                        <Link href="/" >
                            <Image src="http://127.0.0.1:8000/assets/temp/logo.jpeg" height={40} alt="cobra" />
                        </Link>
                        <Link href="/cart" className='d-sm-none px-3' passHref>
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
                        <Col sm="4" className='d-none d-sm-flex justify-content-end'>
                            {!user.authenticated ? <Nav.Item className='mx-1' style={{ cursor: 'pointer' }} onClick={() => handleUserClick()} ><FontAwesomeIcon scale={12} color="white" icon={faUser} /></Nav.Item> : <></>}
                            {user.authenticated ? userDropdown : <></>}
                            <Link href="/cart" passHref>
                                <Nav.Link className='mx-1'><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    );
}

// export default navbar;