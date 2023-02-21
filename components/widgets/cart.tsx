import { useState } from "react";
import { Button, ListGroup, Modal, Image } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayAddedToCartModal, selectApplicationState } from '../../store/appSlice'

function cart() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const applicationState = useSelector(selectApplicationState);
    

    return(
        <>
            <Modal 
                onHide={handleClose}
                backdrop="static"
                
                
            >
                <Modal.Header>
                    <div className="header__title">
                        <span>اشتر EVD لمدة 12 شهر واحصل على اشتراكين IPTV SMARTERS PRO لمدة 12 شهر مجانا</span>
                        <p>اشتر EVD لمدة 12 شهر واحصل على اشتراكين IPTV SMARTERS PRO لمدة 12 شهر مجانا</p>
                    </div>
                    <span className="header__icon">🎉</span>
                </Modal.Header>
                <Modal.Body className="text-cente d-flex flex-column align-items-center">
                    <Button variant="default" className="btn-rounded btn--add-product offer-activated w-75" >                        
                        تهانينا، العرض أصبح متاح، تم إضافة القطعة للسلة.    
                    </Button>
                    <ListGroup className="my-3 w-100">
                        <ListGroup.Item className="d-flex ">
                            <Image src="https://cdn.salla.sa/Kdwnd/1EOPtaMhTqNcPTNfZ0MuRFh8454JZPTqZG0EcSeh.png" alt="اشتراك IPTV SMARTERS ا 12 شهر" fluid width={40}></Image>
                            <div className="mx-2">
                                <div className="fw-light">اشتراك IPTV SMARTERS ا 12 شهر</div>
                                <div className="fw-bold mx-3"> 75 ر.س</div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className="cont_shopping" onClick={handleClose} >
                        متابعة التسوق
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

    function handleClose(){
        dispatch(setDisplayAddedToCartModal(false))
    }

}
export default cart;




{/* <div class="modal-content">
<div class="modal-header">
<div class="header__title">
<span>اشتر EVD لمدة 12 شهر واحصل على اشتراكين IPTV SMARTERS PRO لمدة 12 شهر مجانا</span>
<p>اشتر EVD لمدة 12 شهر واحصل على اشتراكين IPTV SMARTERS PRO لمدة 12 شهر مجانا</p>
</div>
<span class="header__icon">🎉</span>
</div>
<div class="modal-body text-center">
<button id="offer_toggle" class="btn btn-default btn-rounded btn--add-product offer-activated">
تهانينا، العرض أصبح متاح، تم إضافة القطعة للسلة.
</button>
<div class="offer-products-wrapper no-slider">
<div class="owl-carousel slider slider--light owl-rtl owl-loaded owl-drag" id="offer_product_items" data-loop="false" data-offer-qty="2" data-items-count="1">

<div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 528px;"><div class="owl-item active" style="width: 528px;"><div class="product product--light">
<a href="https://cobra6.com/اشتراك-iptv-smarters-ا-12-شهر/p634986397" class="product--light__thumb ">
<img src="https://cdn.salla.sa/Kdwnd/1EOPtaMhTqNcPTNfZ0MuRFh8454JZPTqZG0EcSeh.png" alt="اشتراك IPTV SMARTERS ا 12 شهر">
</a>
<div class="product--light__meta">
<a href="https://cobra6.com/اشتراك-iptv-smarters-ا-12-شهر/p634986397">اشتراك IPTV SMARTERS ا 12 شهر</a>
<div>
<p><span class="product-price" dir="ltr"> 75 ر.س</span></p>
</div>
</div>
</div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev disabled"></button><button type="button" role="presentation" class="owl-next disabled"></button></div><div class="owl-dots disabled"><button role="button" class="owl-dot active"><span></span></button></div></div>
</div>
</div>
<div class="modal-footer">
<button type="btn" class="btn btn-primary" data-dismiss="modal" aria-label="Close">
متابعة التسوق
</button>
</div>
</div> */}


