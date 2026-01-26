import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Card } from "react-bootstrap";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
    const navigate = useNavigate();

  const iconButtonStyle = {
    backgroundColor: "white",
    border: "none",
    width: "35px",
    height: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
    cursor: "pointer",
  };
  if (!product) return null;
  const { addToCart, favoriItems, favorites } = useContext(CartContext);

  const isFavorite = favorites.some((item) => item.id === product.id);

  console.log("Current product:", product);
  return (
    <Card
      className="border-0 position-relative shadow-sm   product-card-container"
      style={{ width: "15rem", height: "330px", margin: "20px auto" }}
    >

       
      <div className="position-relative overflow-hidden ">
         <div onClick={()=>navigate(`/Product/${product.id}`) } style={{ cursor: 'pointer' }}>
        <Card.Img
          variant="top"
          className="img-fluid 
"
          src={product.image}
          alt={product.name}
          style={{ height: "240px", objectFit: "cover" }}
        />
        </div>

        <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 mb-3 shows ">
          <button style={iconButtonStyle} onClick={() => favoriItems(product)}>
            <FiHeart
              fill={isFavorite ? "red" : "none"}
              color={isFavorite ? "red" : "currentColor"}
              style={{ transition: "all 0.9s ease" }}
            />
          </button>
          <button style={iconButtonStyle} onClick={() => addToCart(product)}>
            <FiShoppingCart />
          </button>
        </div>
      </div>

      <Card.Body className="text-center ">
        <div>
          <Card.Title
            className="fw-bold  "
            style={{ fontSize: "17px", textTransform: "capitalize" }}
          >
            {product.name}
          </Card.Title>

          <div className="fw-semibold text-secondary fs-5">
            ${parseFloat(product.price).toFixed(2)}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;


