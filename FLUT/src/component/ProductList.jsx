import { Row, Col, Pagination } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { useState } from "react";

const ProductList = ({ Products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = Products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil((Products?.length || 0) / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div >
      <h1 className="text-center pt-5">Featured Products</h1>
      <p className="text-center mt-3 text-muted">
        Who are in extremely love with eco friendly system.
      </p>

      <Row className="mt-5">
        {currentProducts?.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center mt-5 ">
        <Pagination>
          <Pagination.Prev className="hovrBtn"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item className="hovrBtn"
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}

          <Pagination.Next className="hovrBtn"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </div>
  );
};
export default ProductList;
