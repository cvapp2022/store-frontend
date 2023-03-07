import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/widgets/layoutNavbar';
import Footer from '../components/widgets/footer';
import TopAlert from '../components/widgets/topAlert';
import AuthModal from '../components/widgets/authModal';
import Head from "next/head";
import { useRouter } from 'next/router'
import { wrapper } from "../store/store";
import { Provider } from 'react-redux';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import AuthLoader from '../components/widgets/authLoader';
import SideBar from '../components/widgets/sideBar';
import ClientLoader from '../components/widgets/clientLoader';
config.autoAddCss = false

function MyApp({ Component, pageProps, ...rest }: AppProps) {

  const { store } = wrapper.useWrappedStore(rest);
  const router = useRouter();


  const hideOn = ['/register', '/login'].includes(router.pathname)
  const pageProp = pageProps as any;
  const payload = pageProp.initialState
  if (payload !== undefined) {
    store.dispatch({ type: 'LOAD_SSR', payload })
  }




  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Provider store={store} >
        <SideBar></SideBar>
        {!hideOn ? <NavBar></NavBar> : <></>}
        <Component {...pageProps} />
        <ClientLoader></ClientLoader>
        <AuthModal></AuthModal>
        <Footer></Footer>
        <AuthLoader></AuthLoader>
        {/* <TopAlert></TopAlert> */}

      </Provider>
    </>
  )
}

export default MyApp;


