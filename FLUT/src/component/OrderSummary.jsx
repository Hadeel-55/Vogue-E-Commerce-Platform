import { ListGroup, Row, Col, Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import orderImg from "../assets/card.jpg";
const OrderSummary = () => {
  const { totalPrice ,cart } = useContext(CartContext);
  return (
    <div className="p-4" style={{ backgroundColor: "#f9f9f9", width: "100%" }}>
      <h4 className="mb-4">Your Order</h4>

      <ListGroup variant="flush">
        <ListGroup.Item className="bg-transparent px-0 border-bottom">
          <Row className="fw-bold text-secondary">
            <Col>Product</Col>
            <Col className="text-end">Total</Col>
          </Row>
        </ListGroup.Item>

        {cart?.map((item) => (
          <ListGroup.Item
            key={item.id}
            className="bg-transparent px-0 border-bottom-0 py-3"
            style={{ cursor: "pointer" }}
          >
            <Row>
              <Col className="text-secondary">{item.name}</Col>
              <Col className="text-center fw-bold">x {item.quantity}</Col>
              <Col className="text-end text-secondary">${item.price}</Col>
            </Row>
          </ListGroup.Item>
        ))}

        <ListGroup.Item className="bg-transparent px-0 border-top mt-2">
          <Row className="fw-bold">
            <Col>SUBTOTAL</Col>
            <Col className="text-end "> ${totalPrice.toFixed(2)}</Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item className="bg-transparent px-0 border-bottom-0">
          <Row>
            <Col className="fw-bold">SHIPPING</Col>
            <Col className="text-end text-secondary">Flat Rate: $50.00</Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item className="bg-transparent px-0 border-top mt-2 py-3">
          <Row className="fw-bold ">
            <Col>TOTAL</Col>
            <Col className="text-end">${(totalPrice + 50).toFixed(2)}</Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item className="bg-transparent px-0 border-0 mt-1">
          <Row>
            <Col>
              <input type="radio" style={{ cursor: "pointer" }} />
              <label
                htmlFor=""
                className="ms-2 fw-semibold "
                style={{ cursor: "pointer" , fontSize:'16px'}}
              >
                Check payments
              </label>
            </Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item
          className=" mt-2 border-0"
          style={{ cursor: "pointer" }}
        >
          <Row>
            <Col>
              <p className="text-secondary"  style={{fontSize:'14px'}}>
                Please send a check to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </p>
            </Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item className="bg-transparent px-0 mt-2 border-0">
          <Row>
            <Col className="">
              <input type="radio" style={{ cursor: "pointer" }} />
              <label
                htmlFor=""
                className="ms-2  fw-semibold "
                style={{ cursor: "pointer" ,fontSize:'16px'}}
              >
                Paypal
              </label>
            </Col>
            <Col className="py-0 text-end">
              <div className="">
                <img src={orderImg} alt="" />
              </div>
            </Col>
          </Row>
        </ListGroup.Item>
            <ListGroup.Item
          className=" mt-2 border-0"
          style={{ cursor: "pointer" }}
        >
          <Row>
            <Col>
              <p className="text-primary"  style={{fontSize:'14px'}}>
                Please send a check to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </p>
            </Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item className="border-0 px-0 bg-transparent" style={{fontSize:'13px'}}>
<Row className="mt-2">
    <Col>
    <input type="checkbox" />
    <label htmlFor="" className="text-muted ms-2">I’ve read and accept the 
        <a href="" className="text-decoration-none"> terms & conditions*</a>
    </label>
    </Col>
</Row>
        </ListGroup.Item>
        <Button className="mt-4 textHover fw-semibold" >
             PROCEED TO PAYPAL
        </Button>
      </ListGroup>
    </div>
  );
};
export default OrderSummary;
