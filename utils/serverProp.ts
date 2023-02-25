import { setCartState } from "../store/cartSlice";
import { setMainLayout } from "../store/layoutSlice";
import { wrapper } from "../store/store";
import { getCookie } from "./cookie";
import { getOldCart, fetchMainLayout } from "./requests";




export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async ({ req,resolvedUrl }) => {

        var cart = getCookie('cart', { headers: { cookie: req.headers.cookie } });
        if (cart) {
            var oldCart = await getOldCart(cart)
            store.dispatch(setCartState(oldCart.payload))
        }

        if(resolvedUrl ==='/'){
            var mainLayout = await fetchMainLayout();
            store.dispatch(setMainLayout(mainLayout.payload))

        }



        return {
            props: {},
        };
    })