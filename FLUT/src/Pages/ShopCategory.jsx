import ProductList from "../component/ProductList";
import Hero from "../component/Hero";
import {Container, Row , Col } from 'react-bootstrap';
import products from '../data/allProducts';
import { useState } from "react";
import ProductFilters from "../component/ProductFilters";
const ShopCategory =()=>{
const [displayProducts, setDisplayProducts] = useState(products);
    return(

<div>
<Hero
height={'400px'}
title={'Single Product Page'}
subtitle={
      <div className="d-flex justify-content-center gap-2">
            <a href="/" className="text-decoration-none pageCart">
              Home →
            </a>
            <a
              href="/productCheckout"
              className="text-decoration-none pageCart"
            >
              Checkout →
            </a>
            <a href="/ProductDetails"  className="text-decoration-none pageCart">Product Details</a>
          </div>
}
/>
    <Container>
        <Row className="mt-5">
  <Col lg={3} md={4} className="mt-5 pt-5">
    <ProductFilters onFilterChange={(results) => setDisplayProducts(results)} />
  </Col>
  <Col lg={9} md={7}>
    <ProductList Products={displayProducts} />
  </Col>
</Row>
    </Container>
</div>
    )

};
export default ShopCategory;