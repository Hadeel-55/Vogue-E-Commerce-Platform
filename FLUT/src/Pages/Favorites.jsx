import Favorite from "../component/favorite";
import Hero from "../component/Hero";
import { Container, Row, Col } from "react-bootstrap";
import FavoriteCart from "../component/FavoriteCart";
const Favorites = () => {
  return (
    <div>
      <Hero
        height={"400px"}
        title="Favorites"
        subtitle={
          <div className="d-flex justify-content-center gap-2">
            <a href="/" className="text-decoration-none pageCart">
              Home →
            </a>
            <a href="/favorite" className="text-decoration-none pageCart">
              Favorite
            </a>
          </div>
        }
      />
      <Container className="mt-5">
        <div style={{ overflowX: "auto", width: "100%" }}>
          <div style={{ minWidth: "700px" }}>
            <Row className="fw-bold pb-3 mb-3 mx-0 ">
              <h1 className="text-center mb-5 " style={{textShadow:'1px 1px 10px #cccf17' , color:'#000000'}}>My Favorite </h1>
              <Col>
                <FavoriteCart />
                <Favorite />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Favorites;
