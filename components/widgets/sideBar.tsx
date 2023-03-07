import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectApplicationState, setDispalyAuthModal, setDisplaySidebar } from '../../store/appSlice';
import { selectUserState } from '../../store/userSlice';
export default function SideBar() {


    var user=useSelector(selectUserState);
    var app=useSelector(selectApplicationState);
    const dispatch=useDispatch()

    return (
        <>
            <nav id="sidebar" className={ app.dispaly_sidebar ? 'active' : '' } >
                <div id="dismiss" onClick={()=> { dispatch(setDisplaySidebar()) }}>
                    <i className="fas fa-times"></i>
                </div>

                <div className="sidebar-header d-flex flex-column justify-content-center align-items-center bg-dark py-5">
                    <Image width="94" height="94" className="img-fluid rounded-circle mb-3" style={{ border: ' 2px solid #fff', borderRadius: ' 50%' }} src="https://cdn.assets.salla.network/stores/themes/default/assets/images/avatar_male.png" alt=""></Image>
                    { (user.authenticated ? 
                        <>
                            <div className="text-center text-white">blaxk</div>
                            <div className="d-flex">
                                <a className="sidebar-login-btn mx-1" href="{{ route('user-profile') }}">الملف الشخصي</a>
                                <a href="{{ route('user-logout') }}" className="sidebar-login-btn  mx-1" style={{ background: '#f55157;color:#fff' }}>تسجيل الخروج</a>
                            </div>
                        </> :
                        <>
                            <button className="sidebar-login-btn" onClick={()=> { dispatch(setDispalyAuthModal(true)) }}  >تسجيل الدخول</button>
                        </>
                        ) }
                </div>
                <ul className="list-unstyled components py-2">
                    <li >
                        <a href="{{ route('user-orders') }}" className="text-muted">
                            <i className="sicon-cart"></i>الطلبات
                        </a>
                    </li>
                </ul>
                <ul className="list-unstyled components py-2">
                    <li style={{ borderBottom: 'unset', padding: '5px 15px!important' }}>
                        <div className="text-muted"><i className="sicon-tag"></i> فئات المنتجات</div>
                    </li>
                    <li >
                        <a href="{{ route('front.all') }}">جميع المنتجات</a>
                    </li>
                    <li >
                        <a href="{{ route('front.all') }}"> elecetronics</a>
                    </li>
                    {/* @foreach ($categories as $category)
                    <li>
                        <a href="{{ route('front.category', $category->slug) }}">{{ $category-> name}}</a>
                    </li>
                    @endforeach */}
                    <li>
                        <a href="https://api.whatsapp.com/send/?phone=966504514408&text&type=phone_number&app_absent=0">الدعم الفني</a>
                    </li>
                </ul>
            </nav>
            <div className={`overlay ` + (app.dispaly_sidebar ? 'active' : '') }  onClick={()=> { dispatch(setDisplaySidebar()) }} ></div>
        </>
    );

}