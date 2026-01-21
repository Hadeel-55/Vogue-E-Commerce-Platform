import ProductList from "../component/ProductList";
import Hero from "../component/Hero";
import Deal from "../component/Deal";
import { Container } from "react-bootstrap";
import products from '../data/allProducts';

const Home = () => {
  return (
    <div>
      <Hero
        title="Fashion for
                Upcoming Winter"
        subtitle="  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation."
        showButton={true}
      />
      <Container className="mt-5">
        <Deal />
        <ProductList Products={products} />
      </Container>
    </div>
  );
};
export default Home;
