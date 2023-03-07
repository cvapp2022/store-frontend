import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectApplicationState, setDisplayRouteLoader } from "../../store/appSlice";
import { setCartState } from "../../store/cartSlice";
import { selectUserState, setUserState } from "../../store/userSlice";
import { getCookie, removeCookie } from "../../utils/cookie";
import { getOldCart, fetchUser } from "../../utils/requests";

export default function ClientLoader() {

    var user = useSelector(selectUserState)
    var application = useSelector(selectApplicationState);
    const router = useRouter();
    const dispatch = useDispatch()
    const clientRoutes = ['/checkout', '/cart','/orders','/user'].includes(router.pathname);

    useEffect(() => {
        if (clientRoutes) {
            var cart = getCookie('cart', { headers: { cookie: '' } });
            var token = getCookie('user', { headers: { cookie: '' } });

            if (token) {
                axios.defaults.headers.common = { 'Authorization': 'Bearer ' + token }
                var fuser = async () => { return await fetchUser() };
                fuser().then((fuser) => {
                    if (fuser.success) {
                        dispatch(setUserState({ user: fuser.payload.user,orders:fuser.payload.orders, token: token }))
                    }
                    else {
                        //remove token cookie
                        removeCookie('user')
                    }
                })
            }

            if (cart) {
                var oldCart = async (cart: string) => { return await getOldCart(cart) };
                oldCart(cart).then((oldCart) => {
                    if (oldCart.success) {
                        dispatch(setCartState(oldCart.payload))
                    }
                    else {
                        //remove cart cookie
                        removeCookie('cart')
                    }
                })
            }
            dispatch(setDisplayRouteLoader(false))
        }
    }, [clientRoutes, dispatch])


    if (clientRoutes && application.display_route_loader) {
        return (<Container fluid className='bg-primary' style={{ zIndex: 999999999, position: 'absolute', height: '100%', width: '100%', top: '0' }} ></Container>)
    }
    else {
        return (
            <></>
        )
    }


}