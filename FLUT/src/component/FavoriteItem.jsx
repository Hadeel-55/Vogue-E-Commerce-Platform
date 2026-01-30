import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const FavorieItem = ({ favori }) => {
  const { addToCart} = useContext(CartContext);
  return (
    <Card className="">
      <Card.Img
        className="img-fliud"
        src={favori.image}
        style={{ height: "240px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{favori.name}</Card.Title>
        <Card.Text>{favori.description}</Card.Text>
            <div className="fw-bold">$ {favori.price.toFixed(2)}</div>
        <Button onClick={() => addToCart(favori)}> <FaShoppingCart/> Add to cart</Button>
      </Card.Body>
    </Card>
  );
};
export default FavorieItem;
