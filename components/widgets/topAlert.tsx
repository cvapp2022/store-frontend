import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import { useState } from "react";

export default function topAlert(){ 
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [display, setDisplay] = useState(true);
    return (
        
        <div className="store-notify justify-content-center align-items-center px-5 py-3" style={{ display: display ? "flex" : "none" }}>
            <FontAwesomeIcon icon={faBell}  /> 
            <div className='mx-2'>العروض مستمرة حتى نهاية الاسبوع ، ونحيطكم علمًا بأن هذا الموقع هو الموقع الوحيد الخاص بالاشتراكات الرسمية</div>
            <Button onClick={() => setDisplay((prevDisplay) => !prevDisplay)}  variant="warning">x</Button>
        </div>

    );


}






{/* <a href="https://cobra6.com/advertisement/QzKjG/close" class="ajax btn notify-close" data-nonconfirm="true" data-type="GET" data-show-loading="false" id="notify-close">
<i class="sicon-cancel"></i>
</a>
<p>
<a href="https://cobra6.com/p/العروض-والتخفيضات">
العروض مستمرة حتى نهاية الاسبوع ، ونحيطكم علمًا بأن هذا الموقع هو الموقع الوحيد الخاص بالاشتراكات الرسمية
</a>
</p>
</div> */}