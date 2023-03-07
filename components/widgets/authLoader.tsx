import { useRouter } from "next/router";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectApplicationState, setDispalyAuthModal, setDisplayRouteLoader } from "../../store/appSlice";
import { selectUserState } from "../../store/userSlice";

export default function AuthLoader() {

    var application=useSelector(selectApplicationState)
    var user =useSelector(selectUserState)
    const router = useRouter();
    const dispatch=useDispatch()
    const protectedRoutes = ['/checkout'].includes(router.pathname);

  useEffect(()=>{


    
    if(protectedRoutes && !user.authenticated){ 
      dispatch(setDisplayRouteLoader(true))    
      router.push('/').then(()=> {
        dispatch(setDispalyAuthModal(true))
        dispatch(setDisplayRouteLoader(false)) 
      })
    }

  },[])


  if(protectedRoutes && !user.authenticated){
    return ( <Container fluid className='bg-dark' style={{zIndex:999999999,position:'absolute',height:'100%',width:'100%',top:'0'}} ></Container> )
  }
  else{
    return (
        <></>
    )
  }


 }