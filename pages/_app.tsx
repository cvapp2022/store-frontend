import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/widgets/navbar';
import Cart from '../components/widgets/cart';
import Footer from '../components/widgets/footer';
import TopAlert from '../components/widgets/topAlert';
import Head from "next/head";
import { useRouter } from 'next/router'
import { wrapper } from "../store/store";
import { Provider } from 'react-redux'; 
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps, ...rest }: AppProps) {

  const { store } = wrapper.useWrappedStore(rest);
  const router = useRouter();
  const hideOn = ['/register', '/login'].includes(router.pathname)
  const pageProp=pageProps as any;
  const payload=pageProp.initialState
  if(payload !== undefined && !store.getState().layout.mainLoaded){
    store.dispatch({type: 'LOAD_SSR',payload})
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Provider store={store} >
        <TopAlert></TopAlert>
        {!hideOn ? <NavBar></NavBar> : <></>}
        <Component {...pageProps} />
        <Cart></Cart>
        <Footer></Footer>

      </Provider>
    </>
  )
}

export default MyApp;


