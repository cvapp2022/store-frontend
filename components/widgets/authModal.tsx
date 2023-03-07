
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { selectApplicationState, setDispalyAuthModal } from "../../store/appSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, } from "@fortawesome/free-regular-svg-icons";
import { faAngleLeft, faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FormEvent } from "react";
import { checkEmail, checkMobile,loginEmail,loginMobile,registerUser } from "../../utils/requests";
import { setCookie } from "../../utils/cookie";
import axios from "axios";
import { setUserState } from "../../store/userSlice";

export default function authModal() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const application = useSelector(selectApplicationState)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(setDispalyAuthModal(false))
  }

  function handleAuthMethod(method: string) {
    //hide auth methods and all other forms
    var authMethods = document.getElementById('auth_methods')
    authMethods?.classList.add('d-none')


    if (method === "mobile") {
      //display mobile check form 
      var mobileCheckForm = document.getElementById('mobile_check_form')
      mobileCheckForm?.classList.remove('d-none')
    }
    if(method === 'email'){
      //display email check form 
      var mobileCheckForm = document.getElementById('email_check_form')
      mobileCheckForm?.classList.remove('d-none')

    }

  }

  async function handleMobileCheckSubmit(e: FormEvent<HTMLFormElement>) {

    e.preventDefault()
    var data = {
      phoneI: (e.currentTarget.elements[0] as HTMLInputElement).value,
    }

    var mobileCheckForm = document.getElementById('mobile_check_form')

    var check = await checkMobile(data).then((resp) => {
      mobileCheckForm?.classList.add('d-none')
      return resp;
    });

    if (!check.success) {
      if (check.message === 'Unable To find User') {
        //display register form
        var mobileRegisterForm = document.getElementById('register_form')
        mobileRegisterForm?.classList.remove('d-none')
      }
    }
    else {

      var mobileLoginForm = document.getElementById('mobile_login_form')
      //set mobile input value for mobile login form
      var mobileLoginInput=document.getElementById('mobileLoginInput') as HTMLInputElement;
      mobileLoginInput.value=data.phoneI;

      //display login form
      mobileLoginForm?.classList.remove('d-none')
    }
  }

  async function handleEmailCheckSubmit(e: FormEvent<HTMLFormElement>) {

    e.preventDefault()
    var data = {
      emailI: (e.currentTarget.elements[0] as HTMLInputElement).value,
    }

    var emailCheckForm = document.getElementById('email_check_form')

    var check = await checkEmail(data).then((resp) => {
      emailCheckForm?.classList.add('d-none')
      return resp;
    });

    if (!check.success) {
      if (check.message === 'Unable To find User') {
        //display register form
        var mobileRegisterForm = document.getElementById('register_form')
        mobileRegisterForm?.classList.remove('d-none')
      }
    }
    else {
      var mobileLoginForm = document.getElementById('email_login_form')
      
      //set email login input 
      var emailLoginInput=document.getElementById('emailLoginInput') as HTMLInputElement;
      emailLoginInput.value=data.emailI;
      //display login form
      mobileLoginForm?.classList.remove('d-none')
    }
  }

  async function handleEmailLoginSubmit(e: FormEvent<HTMLFormElement>) {

    e.preventDefault()
    var data = {
      emailI: (e.currentTarget.elements[0] as HTMLInputElement).value,
      passwordI: (e.currentTarget.elements[1] as HTMLInputElement).value,
    }

    var login=await loginEmail(data);
    if(login.success){
      axios.defaults.headers.common={ 'Authorization': 'Bearer '+login.payload.token}
      //set user cookie
      setCookie('user',login.payload.token)
      dispatch(setUserState(login.payload))
      dispatch(setDispalyAuthModal(false))

    }
  }

  



  async function handleMobileLoginSubmit(e: FormEvent<HTMLFormElement>) {

    e.preventDefault()
    var data = {
      phoneI: (e.currentTarget.elements[0] as HTMLInputElement).value,
      passwordI: (e.currentTarget.elements[1] as HTMLInputElement).value,
    }

    var login=await loginMobile(data);
    if(login.success){
      axios.defaults.headers.common={ 'Authorization': 'Bearer '+login.payload.token}
      //set user cookie
      setCookie('user',login.payload.token)
      dispatch(setUserState(login.payload))
      dispatch(setDispalyAuthModal(false))
    }
  }


  async function handleRegisterSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    var data = {
      nameI:(e.currentTarget.elements[0] as HTMLInputElement).value,
      phoneI: (e.currentTarget.elements[1] as HTMLInputElement).value,
      emailI: (e.currentTarget.elements[2] as HTMLInputElement).value,
      passwordI: (e.currentTarget.elements[3] as HTMLInputElement).value,
      passwordI_confirmation: (e.currentTarget.elements[4] as HTMLInputElement).value,
    }
    var register=await registerUser(data);
    if(register.success){
      axios.defaults.headers.common={ 'Authorization': 'Bearer '+register.payload.token}
      //set user cookie
      setCookie('user',register.payload.token)
      dispatch(setUserState(register.payload))
      dispatch(setDispalyAuthModal(false))
    }
  }


  return (
    <Modal
      show={application.display_auth_modal}
      onHide={handleClose}
      backdrop="static"
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center" style={{ textAlign: 'start' }}>
        <div className="u-circle">
          <FontAwesomeIcon icon={faUser} ></FontAwesomeIcon>
          {/* <i class="sicon-user"></i> */}
        </div>
        <div className="my-2">
          تسجيل الدخول
        </div>
        <div className="my-2 login-panel-header w-100">
        </div>
        <div id="auth_methods" className=" d-flex flex-column justify-content-center w-100 my-3 px-3">
          <p className="text-muted text-center d-flex justify-content-center align-items-center ">اختر الوسيلة المناسبة</p>
          <button className="card align-items-center w-100 py-3 my-2 mobile_auth_method secondary_btn " onClick={() => handleAuthMethod('mobile')} >
            <FontAwesomeIcon icon={faMobileAlt} ></FontAwesomeIcon>
            <div className=""> رقم الموبايل </div>
          </button>
          <button className="card align-items-center w-100 py-3 my-2 mobile_auth_method secondary_btn " onClick={() => handleAuthMethod('email')} >
            <FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon>
            <div className="">  الايميل </div>
          </button>
        </div>

        <div id="mobile_check_form" className="d-none my-3 px-3 w-100">
          <Form className="col-sm-12" onSubmit={(e) => handleMobileCheckSubmit(e)}  >
            <Form.Group>
              <Form.Label >رقم الموبايل</Form.Label>
              <Form.Control type="tel" pattern="^[0-9]+$" />
            </Form.Group>
            <Form.Group className="mt-3 d-flex">
              <Button type="submit" variant="primary" className="w-100"   >
                تسجيل
                <FontAwesomeIcon icon={faAngleLeft} ></FontAwesomeIcon>
              </Button>
            </Form.Group>
          </Form>
        </div>
        <div id="mobile_login_form" className="d-none my-3 px-3 w-100">
          <Form className="col-sm-12" onSubmit={(e) => handleMobileLoginSubmit(e)}  >
            <Form.Group>
              <Form.Label >رقم الموبايل</Form.Label>
              <Form.Control id="mobileLoginInput" type="tel" pattern="^[0-9]+$" />
            </Form.Group>
            <Form.Group>
              <Form.Label >كلمة السر  </Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="mt-3 d-flex">
              <Button type="submit" variant="primary" className="w-100"   >
                تسجيل دخول
                <FontAwesomeIcon icon={faAngleLeft} ></FontAwesomeIcon>
              </Button>
            </Form.Group>
          </Form>
        </div>

        <div id="email_check_form" className="d-none my-3 px-3 w-100">
          <Form className="col-sm-12" onSubmit={(e) => handleEmailCheckSubmit(e)}  >
            <Form.Group>
              <Form.Label > الايميل</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mt-3 d-flex">
              <Button type="submit" variant="primary" className="w-100"   >
                تسجيل
                <FontAwesomeIcon icon={faAngleLeft} ></FontAwesomeIcon>
              </Button>
            </Form.Group>
          </Form>
        </div>

        <div id="email_login_form" className="d-none my-3 px-3 w-100">
          <Form className="col-sm-12" onSubmit={(e) => handleEmailLoginSubmit(e)}  >
            <Form.Group>
              <Form.Label > الايميل</Form.Label>
              <Form.Control id="emailLoginInput" type="email" />
            </Form.Group>
            <Form.Group>
              <Form.Label >كلمة السر  </Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="mt-3 d-flex">
              <Button type="submit" variant="primary" className="w-100"   >
                تسجيل
                <FontAwesomeIcon icon={faAngleLeft} ></FontAwesomeIcon>
              </Button>
            </Form.Group>
          </Form>
        </div>


        <div id="register_form" className="d-none my-3 px-3 w-100">
          <Form className="col-sm-12" onSubmit={(e) => handleRegisterSubmit(e)}  >
            <Form.Group>
              <Form.Label >الاسم الكامل</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label >رقم الموبايل</Form.Label>
              <Form.Control type="tel" pattern="^[0-9]+$" />
            </Form.Group>
            <Form.Group>
              <Form.Label >  الايميل </Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group>
              <Form.Label >كلمة السر  </Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group>
              <Form.Label > تكرار كلمة السر </Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="mt-3 d-flex">
              <Button type="submit" variant="primary" className="w-100"   >
                تسجيل حساب جديد
                <FontAwesomeIcon icon={faAngleLeft} ></FontAwesomeIcon>
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );

}