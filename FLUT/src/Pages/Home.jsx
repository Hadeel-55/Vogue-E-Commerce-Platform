import ProductList from "../component/ProductList";
import Hero from "../component/Hero";
import Deal from "../component/Deal";
import { Container } from "react-bootstrap";
const products = [
  {
    id: 1,
    name: "boys autumn winter",
    price: 120,
    image: "/productsImg/pro-1.jpg",
  },
  {
    id: 2,
    name: "boys autumn winter",
    price: 220,
    image: "/productsImg/pro-2.webp",
  },
  {
    id: 3,
    name: "boys autumn winter",
    price: 320,
    image: "/productsImg/pro-3.webp",
  },
  {
    id: 4,
    name: "boys autumn winter",
    price: 120,
    image: "/productsImg/pro-4.jpg",
  },
  {
    id: 5,
    name: "boys autumn winter",
    price: 100,
    image: "/productsImg/pro-5.jpg",
  },
  {
    id: 6,
    name: "boys autumn winter",
    price: 180,
    image: "/productsImg/pro-6.webp",
  },
  {
    id: 7,
    name: "boys autumn winter",
    price: 120,
    image: "/productsImg/pro-7.jpg",
  },
  {
    id: 8,
    name: "boys autumn winter",
    price: 220,
    image: "/productsImg/pro-8.jpg",
  },
  {
    id: 9,
    name: "boys autumn winter",
    price: 120,
    image: "/productsImg/pro-9.jpg",
  },
  {
    id: 10,
    name: "boys autumn winter",
    price: 150,
    image: "/productsImg/pro-10.jpg",
  },
  {
    id: 11,
    name: "boys autumn winter",
    price: 130,
    image: "/productsImg/pro-11.jpg",
  },
  {
    id: 12,
    name: "boys autumn winter",
    price: 120,
    image: "/productsImg/pro-12.jpg",
  },
  {
    id: 13,
    name: "boys autumn winter",
    price: 220,
    image: "/productsImg/pro-13.jpg",
  },
  {
    id: 14,
    name: "boys autumn winter",
    price: 220,
    image: "/productsImg/pro-14.jpg",
  },
  {
    id: 15,
    name: "boys autumn winter",
    price: 190,
    image: "/productsImg/pro-15.jpg",
  },
  {
    id: 16,
    name: "boys autumn winter",
    price: 120,
    image: "/productsImg/pro-16.jpg",
  },
  {
    id: 17,
    name: "boys autumn winter",
    price: 130,
    image: "/productsImg/pro-17.webp",
  },
  {
    id: 18,
    name: "boys autumn winter",
    price: 200,
    image: "/productsImg/pro-18.jpeg",
  },
  {
    id: 19,
    name: "boys autumn winter",
    price: 120,
    image: "/productsImg/pro-19.jpg",
  },
  {
    id: 20,
    name: "boys autumn winter",
    price: 240,
    image: "/productsImg/pro-20.jpeg",
  },
  {
    id: 21,
    name: "boys autumn winter",
    price: 199,
    image: "/productsImg/pro-21.jpg",
  },
];

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
