import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Button, ListGroup, Form, Col, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
const CartItem = ({ item }) => {
const { removeFromCart, updateQuantity } =
    useContext(CartContext);
  if (!item) return null;

  return (
    <Container>
      <ListGroup className="mb-3 py-3 ">
        <Row className="align-items-center   ">
          <Col xs={4} md={5} className="d-flex align-items-center ">
            <img
              className="img-fluid"
              style={{
                maxWidth: "100px",
                height: "120px",
                objectFit: "cover",
              }}
              src={item.image}
              alt={item.name}
            />

            <div className="text-muted ms-3">{item.name} </div>
          </Col>

          <Col xs={2} md={2}>
            <div className="fw-bold">$ {item.price ? item.price.toFixed(2) : "0.00"}</div>
          </Col>
          <Col xs={2} md={2}>
            <Form.Control
              className=" shadow-sm fw-semibold"
              style={{ maxWidth: "70px",  }}
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value))
              }
            />
          </Col>

          <Col xs={2} md={2}>
            <div className="fw-bold">
              $ {(item.price * item.quantity).toFixed(2)}
            </div>
          </Col>

          <Col xs={2} md={1} >
            <Button
              variant="outline-danger"
              onClick={() => removeFromCart(item.id)}
            >
              <FaTrash />
            </Button>
          </Col>
        </Row>
       
  
        <hr className="text-muted" />
      </ListGroup>
    </Container>
  );
};
export default CartItem;
