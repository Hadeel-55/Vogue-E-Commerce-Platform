import { ListGroup, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const OrderSummary = ({show}) => {
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

{show}

      </ListGroup>
    </div>
  );
};
export default OrderSummary;
