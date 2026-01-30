import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import { CartContext } from "../context/CartContext";
import { Container, Button, ListGroup, Col, Row } from "react-bootstrap";
import { FaTrash , FaShoppingCart } from "react-icons/fa";
const FavoriteCart = ({ favoriteItem }) => {
  const { removeFromFavorite } =
    useContext(FavoriteContext);
    const {addToCart} =useContext(CartContext);

  if (!favoriteItem) return null;

  return (
    <Container>
      <ListGroup className="mb-3 py-3 ">
        <Row className="align-items-center   ">
          <Col xs={5} md={5} className="d-flex align-items-center ">
            <img
              className="img-fluid"
              style={{
                maxWidth: "100px",
                height: "120px",
                objectFit: "cover",
              }}
              src={favoriteItem.image}
              alt={favoriteItem.name}
            />

            <div className="text-muted ms-3">{favoriteItem.name} </div>
          </Col>

          <Col xs={2} md={2}>
            <div className="fw-bold">$ {favoriteItem.price ? favoriteItem.price.toFixed(2) : "0.00"}</div>
          </Col>

          <Col xs={3} md={3} >
            <Button
              variant="outline-primary"
              onClick={() => addToCart(favoriteItem.id)}
            >
              <FaShoppingCart/> Add to cart
            </Button>
          </Col>
                <Col xs={2} md={1} >
            <Button
              variant="outline-danger"
              onClick={() => removeFromFavorite(favoriteItem.id)}
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
export default FavoriteCart;
