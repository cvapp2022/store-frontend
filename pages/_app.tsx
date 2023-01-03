import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import type { GetServerSideProps, } from 'next'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import axios from 'axios';
import SSRProvider from 'react-bootstrap/SSRProvider';
import NavBar from '../components/widgets/navbar';
import Footer from '../components/widgets/footer';
import TopAlert from '../components/widgets/topAlert';
import Head from "next/head";
import { useRouter } from 'next/router'
import { wrapper } from "../store/store";
import { Provider } from 'react-redux';
import {setApplicationState} from '../store/appSlice'
import { baseUrl } from '../utils/config'
import { getCookie } from '../utils/cookie'
import { setUserState } from '../store/userSlice';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps,  ...rest }: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);
  const router =useRouter();

  const guestRoutes=['/login','/register'];
  const protectedRoutes=['/seller/product/add'];
  let initLoaded = false;
  useEffect(() =>
  {        
      document.body.classList.add("bg-light");
      document.body.classList.add("bg-gradient");
      
      //load init data 
      // if(!initLoaded){
      //   axios.get(baseUrl+'/init').then((resp)=>{
      //   if(resp.data.success){
      //     store.dispatch(setApplicationState(resp.data.payload))
      //     console.log('init data has been loadded')
      //   }
      //     // dispatch(setApplicationState(resp.data.payload))
      //   });
      // }

      //check if has cookie
      if(typeof localStorage !=='undefined'){
        const authToken=getCookie('auth',{headers:{cookie:''}});
        if(authToken){
          axios.get(baseUrl+'/user',{headers:{Authorization:'Bearer '+authToken}}).then((resp)=>{
            if(resp.data.success){
              
              //set token
              axios.defaults.headers.common={ 'Authorization': 'Bearer '+authToken}
              store.dispatch(setUserState({token:authToken,user:resp.data.payload}))
            }
          })
        }
      }

      router.events.on('routeChangeStart',function(url){
        if(!store.getState().user.authenticated && protectedRoutes.includes(url)){
          router.push('/login')
        }
        if(store.getState().user.authenticated && guestRoutes.includes(url)){
          router.push('/')
        }
      })

      // eslint-disable-next-line react-hooks/exhaustive-deps
      initLoaded=true;

    },[]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    
    const hideOn=['/register','/login'].includes(router.pathname)
    // axios.defaults.baseURL='http://127.0.0.1:8000/api/';
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

        <Provider store={store} >
          <TopAlert></TopAlert>
          { !hideOn ? <NavBar></NavBar> : <></>}
          <Component {...pageProps} />
          <Footer></Footer>
          
        </Provider>
    </>
  )
}

export default MyApp;
