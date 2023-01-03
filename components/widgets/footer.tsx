import { Col, Container, Row, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function footer() {

    return (
        <>
            <div className="footer-main">
                <Container>
                    <Row>
                        <Col sm="4">
                            <h2 className="footer-title">
                                <span>من نحن</span>
                            </h2>
                            <p>المنصة الرسمية للاشتراكات في السعودية والخليج العربي</p>
                            <div className="store-contact social mb-2">
                                <a className="me-1" href="https://cobra6.com/whatsapp/send" rel="nofollow noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faWhatsapp} className="ms-1"></FontAwesomeIcon>
                                     واتساب
                                </a>&nbsp;
                                <a className="me-1" href="tel:+966504514408">
                                    <FontAwesomeIcon icon={faMobileAlt} className="ms-1"></FontAwesomeIcon>
                                     جوال
                                </a>&nbsp;
                                <a className="me-1" href="mailto:info@cobra6.com">
                                    <FontAwesomeIcon icon={faEnvelope} className="ms-1"></FontAwesomeIcon>
                                        ايميل
                                     
                                </a>&nbsp;
                            </div>
                            <div className="store-contact">
                                <a href="">
                                    <Image src="https://cdn.assets.salla.network/stores/themes/default/assets/images/appstore.png?v=v1.5.424" width={100} alt="appstore"></Image>
                                </a>
                                <a href="">
                                    <Image src="https://cdn.assets.salla.network/stores/themes/default/assets/images/googleplay.png?v=v1.5.424" width={100} alt="googleplay"></Image>
                                </a>
                            </div>
                        </Col>
                        <Col sm="4" className=" mb-3 mb-md-0">
                            <h2 className="footer-title"><span>روابط مهمة</span></h2>
                            <ul className="footer-links px-0">
                                <li><a href="https://cobra6.com/ماهي-الخدمة-التي-نقدمها/page-1013308870">ماهي الخدمة التي نقدمها</a></li>
                                <li><a href="https://cobra6.com/اسالة-شائعة-عن-خدمة-iptv/page-239271111">اسالة شائعة عن خدمة IPTV</a></li>
                                <li><a href="https://cobra6.com/الدعم-الفني-والتقني-لخدمة-iptv/page-1479482304">الدعم الفني والتقني لخدمة IPTV</a></li>
                                <li><a href="https://cobra6.com/ماهي-سرعة-الانترنت-المطلوبة-لتشغيل-خدمة-iptv/page-905198273">ماهي سرعة الانترنت المطلوبة لتشغيل خدمة IPTV</a></li>
                                <li><a href="https://cobra6.com/العروض-والتخفيضات/page-131160514">العروض والتخفيضات</a></li>
                            </ul>
                        </Col>
                        <Col sm="4">
                            <h2 className="footer-title">
                                <span>تواصل معنا</span>
                            </h2>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-sub py-3">
                <Container>
                    <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="fs-rights">
                            <p className="mb-4 mb-md-0">
                                الحقوق محفوظة  2023 | <a href="https://cobra6.com" target="_blank" rel="noreferrer">كـوبـرا</a>
                            </p>
                        </div>
                        <div className="fs-payment">
                            <div className="icons">
                                <Image src="https://cdn.assets.salla.network/stores/themes/default/assets/images/mada.png?v=v1.5.424" alt=" "></Image>
                                <Image src="https://cdn.assets.salla.network/stores/themes/default/assets/images/cc.png?v=v1.5.424" alt=" "></Image>
                                <Image src="https://cdn.assets.salla.network/stores/themes/default/assets/images/applepay.svg?v=v1.5.424" alt=""></Image>
                            </div>
                        </div>
                    </div>
                </Container>
                                    {/* <Container>
                            </div>
                        </div>
                        
                        </div>
                    </Container> */}
            </div>
        </>
    )


}