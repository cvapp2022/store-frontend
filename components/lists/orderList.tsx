import { Row, Col } from "react-bootstrap";
import { order } from "../../types/order";
import Order from "../items/order";


interface OrderListProps {
    list: Array<order>;
}

function OrderList({list} : OrderListProps) {

    return (
        <Row>
            {/* my-2 py-3 card row flex-column align-items-center */}
            { list.map((item: order, key: any) => <Col key={key}  sm="12" ><Order order={item} ></Order></Col> ) }
        </Row>

    )
}

export default OrderList;