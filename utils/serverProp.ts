import axios from "axios";
import { setDisplayRouteLoader } from "../store/appSlice";
import { setCartState } from "../store/cartSlice";
import { setMainLayout, setProdOneLayout } from "../store/layoutSlice";
import { wrapper } from "../store/store";
import { setUserState } from "../store/userSlice";
import { getCookie } from "./cookie";
import { getOldCart, fetchMainLayout, fetchProdOneLayout, fetchUser } from "./requests";




export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async ({ req, query, resolvedUrl, }) => {

        let url = resolvedUrl.split('?')?.[0];
        const queries = Object.entries(query);
        url = queries.reduce((acc, [key, val]) => acc.replace(val as any, `[${key}]`), url)

        var cart = getCookie('cart', { headers: { cookie: req.headers.cookie } });
        var token = getCookie('user', { headers: { cookie: req.headers.cookie } });
        store.dispatch(setDisplayRouteLoader(false))
        if (cart) {
            var oldCart = await getOldCart(cart)
            store.dispatch(setCartState(oldCart.payload))
        }

        if (token) {
            axios.defaults.headers.common={ 'Authorization': 'Bearer '+token}
            var fuser=await fetchUser();
            if(fuser.success){
                store.dispatch(setUserState({user:fuser.payload.user,orders:fuser.payload.orders,token:token}))
            }
        }

        if (url === '/') {
            var mainLayout = await fetchMainLayout();
            if (mainLayout.success) {
                store.dispatch(setMainLayout(mainLayout.payload))
            }
        }
        if (url === '/[category]') {

            console.log('getServer in categoryOne page')
        }

        if (url === '/[category]/[product]') {
            var prodOneLayout = await fetchProdOneLayout(query.product)
            if (prodOneLayout.success) {
                store.dispatch(setProdOneLayout(prodOneLayout.payload))
            }
        }

        return {
            props: {},
        };
    })