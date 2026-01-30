import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Tabs,
  Tab,
  ListGroup,
} from "react-bootstrap";
import Hero from "../component/Hero";
import { useParams } from "react-router-dom";
import products from "../data/allProducts";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import review1 from "../assets/review-1.png";
import review2 from "../assets/review-2.png";
import review3 from "../assets/review-3.png";
import { HiStar } from "react-icons/hi";
import { useState } from "react";
const ProductDetails = () => {
  const Rating = ({ stars }) => {
    return (
      <div style={{ display: "inline-flex" }}>
        {[...Array(stars)].map((_, index) => (
          <span
            key={index}
            className="text-warning"
            style={{ letterSpacing: "-3px" }}
          >
            <HiStar />{" "}
          </span>
        ))}
      </div>
    );
  };

  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return <div>Product Not Found!</div>;
const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <Hero
        height={"400px"}
        title={"Single Product Pag"}
        subtitle={
          <div className="d-flex justify-content-center gap-2">
            <a href="/" className="text-decoration-none pageCart">
              Home →
            </a>
            <a
              href="/productCheckout"
              className="text-decoration-none pageCart"
            >
              Category →
            </a>
            <a
              href="/productCheckout"
              className="text-decoration-none pageCart"
            >
              Product Details
            </a>
          </div>
        }
      />

      <Container>
        <Row className="mt-5 justify-content-center">
          <Col lg={6}>
            <img src={product.image} alt="" className="img-fluid" />
          </Col>

          <Col lg={6} className="mt-5 p-5">
            <h5>{product.name}</h5>
            <div className="d-flex flex-column gap-2">
              <strong className="text-primary fs-5 fw-bold">
                ${product.price.toFixed(2)}
              </strong>

              <span className="fw-bold" >
                Availibility : <span style={{color: product.inStock ? '#20ad0dd7' : '#ce0a0a'}}>
                   {product.inStock ? "In stok" : "out to stok"}
                  </span>
              </span>
            </div>

            <hr />

            <p className="text-muted" style={{ fontSize: "15px" }}>
              {product.description}
            </p>

            <Form>
              <div className="d-flex gap-3 align-items-center">
                <span className="text-muted">Quantity :</span>
                <Form.Control
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  style={{ width: "4rem" }}
                  className="shadow-none"
                  
                />
              </div>
              {product.quantity}
            </Form>

            <Button
              className="rounded-0 mt-4 textHover fw-semibold"
              onClick={() => addToCart({ ...product, quantity })}
            >
              ADD TO CART
            </Button>
          </Col>
        </Row>

        <Row className="mt-5 justify-content-center">
          <Col lg={10} xs={11}>
            <Tabs defaultActiveKey={"description"} className="bg-light ">
              <Tab eventKey={"description"} title="Description">
                <p className="text-primary mt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Earum aspernatur fugit, laborum quibusdam incidunt id debitis
                  tenetur praesentium perspiciatis est facere aliquam ratione
                  cum. Quo ipsam expedita nostrum quisquam delectus!
                </p>
              </Tab>

              <Tab
                eventKey="specification"
                title="Specification"
                className="text-start "
              >
                <div className="pt-3">
                  <ListGroup className="flush ">
                    <ListGroup.Item
                      className=" text-muted border-0 border-bottom"
                      style={{ fontSize: "14px" }}
                    >
                      <div className="d-flex  ">
                        <span style={{ minWidth: "50%" }}>Width</span>
                        <span className="text-start">128mm</span>
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item
                      className="text-muted border-0 border-bottom"
                      style={{ fontSize: "14px" }}
                    >
                      <div className="d-flex ">
                        <span style={{ minWidth: "50%" }}>Height</span>
                        <span>508mm</span>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                      className="text-muted border-0 border-bottom"
                      style={{ fontSize: "14px" }}
                    >
                      <div className="d-flex ">
                        <span style={{ minWidth: "50%" }}>Depth</span>
                        <span>85mm</span>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                      className="text-muted border-0 border-bottom"
                      style={{ fontSize: "14px" }}
                    >
                      <div className="d-flex ">
                        <span style={{ minWidth: "50%" }}>Weight</span>
                        <span>52gm</span>
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item
                      className="text-muted border-0 border-bottom"
                      style={{ fontSize: "14px" }}
                    >
                      <div className="d-flex ">
                        <span style={{ minWidth: "50%" }}>
                          Quality checking
                        </span>
                        <span>yes</span>
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item
                      className="text-muted border-0 border-bottom"
                      style={{ fontSize: "14px" }}
                    >
                      <div className="d-flex ">
                        <span
                          className="text-start"
                          style={{ minWidth: "50%" }}
                        >
                          Freshness Duration
                        </span>
                        <span className="text-start">03days</span>
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item
                      className="text-muted border-0 border-bottom"
                      style={{ fontSize: "14px" }}
                    >
                      <div className="d-flex ">
                        <span
                          className="text-start"
                          style={{ minWidth: "50%" }}
                        >
                          When packeting
                        </span>
                        <span className="text-start">
                          Without touch of hand
                        </span>
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item
                      className="text-muted border-0 border-bottom rounded-0"
                      style={{ fontSize: "14px" }}
                    >
                      <div className="d-flex ">
                        <span style={{ minWidth: "50%" }}>
                          Each Box contains
                        </span>
                        <span>60pcs</span>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Tab>

              <Tab eventKey={"comments"} title="Comments">
                <Row>
                  <Col lg={6}>
                    <div>
                      <div className="d-flex justify-content-between mt-5">
                        <div className="d-flex gap-2 align-items-center ">
                          <img src={review1} alt="" className="img-fluid" />
                          <div>
                            <p className="fw-semibold mb-0">Elake Ruiz</p>
                            <span
                              className="text-muted"
                              style={{ fontSize: "13px" }}
                            >
                              12th Feb, 2017 at 05:56 pm
                            </span>
                          </div>
                        </div>

                        <div>
                          <Button className="rounded-5 textHover">Reply</Button>
                        </div>
                      </div>
                      <p
                        style={{ fontSize: "14px" }}
                        className="mt-2 text-primary fw-semibold"
                      >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Totam repudiandae reprehenderit, sed eveniet
                        dicta, aliquid dolor voluptatem commodi hic doloremque
                        amet.
                      </p>

                      <div className="d-flex justify-content-between mt-5">
                        <div className="d-flex gap-2 align-items-center ">
                          <img src={review2} alt="" className="img-fluid" />
                          <div>
                            <p className="fw-semibold mb-0">Elake Ruiz</p>
                            <span
                              className="text-muted"
                              style={{ fontSize: "13px" }}
                            >
                              12th Feb, 2017 at 05:56 pm
                            </span>
                          </div>
                        </div>

                        <div>
                          <Button className="rounded-5 textHover">Reply</Button>
                        </div>
                      </div>
                      <p
                        style={{ fontSize: "14px" }}
                        className="mt-2 text-primary fw-semibold"
                      >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Totam repudiandae reprehenderit, sed eveniet
                        dicta, aliquid dolor voluptatem commodi hic doloremque
                        amet.
                      </p>

                      <div className="d-flex justify-content-between mt-5">
                        <div className="d-flex gap-2 align-items-center ">
                          <img src={review3} alt="" className="img-fluid" />
                          <div>
                            <p className="fw-semibold mb-0">Elake Ruiz</p>
                            <span
                              className="text-muted"
                              style={{ fontSize: "13px" }}
                            >
                              12th Feb, 2017 at 05:56 pm
                            </span>
                          </div>
                        </div>

                        <div>
                          <Button className="rounded-5 textHover">Reply</Button>
                        </div>
                      </div>
                      <p
                        style={{ fontSize: "14px" }}
                        className="mt-2 text-primary fw-semibold"
                      >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Totam repudiandae reprehenderit, sed eveniet
                        dicta, aliquid dolor voluptatem commodi hic doloremque
                        amet.
                      </p>
                    </div>
                  </Col>
                  <Col lg={6} className="mt-4 ">
                    <h4 className="mb-4">Post a comment</h4>
                    <Form className="d-flex flex-column gap-2">
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="Your Full Name"
                          className="shadow-none rounded-0"
                          style={{ border: "1px solid #e4e0e0d5" }}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          type="email"
                          placeholder="Email Address"
                          className="shadow-none rounded-0"
                          style={{ border: "1px solid #e4e0e0d5" }}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          type="phone"
                          placeholder="Phone Number"
                          className="shadow-none rounded-0"
                          style={{ border: "1px solid #e4e0e0d5" }}
                        />
                      </Form.Group>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Message"
                        className="shadow-none"
                        style={{ border: "1px solid #e4e0e0d5" }}
                      />
                    </Form>
                    <div className="text-end">
                      <Button className="rounded-0 textHover fw-semibold mt-3  ">
                        Submit Now
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey={"reviews"} title="Reviews">
                <Row>
                  <Col lg={6}>
                    <div>
                      <Row className="mt-4 ">
                        <Col lg={5} xs={5}>
                          <div
                            className="d-flex flex-column justify-content-center align-items-center p-4"
                            style={{ backgroundColor: "#e0f0ff46" }}
                          >
                            <h5 className="fs-3 fw-semibold">Overall</h5>
                            <p className="fs-1 fw-bold text-primary mb-0">
                              4.0
                            </p>
                            <span className="text-secondary">(03 Reviews)</span>
                          </div>
                        </Col>
                        <Col lg={7} xs={7}>
                          <h5 className="fw-bold">Based on 3 Reviews</h5>

                          <div
                            className="text-muted mb-0"
                            style={{ fontSize: "14px" }}
                          >
                            5 Start{" "}
                            <span className="fs-5">
                              <Rating stars={5} />
                            </span>{" "}
                            01
                          </div>

                          <div
                            className="text-muted mb-0 "
                            style={{ fontSize: "14px" }}
                          >
                            4 Start{" "}
                            <span className="fs-5">
                              <Rating stars={4} />
                            </span>{" "}
                            01
                          </div>

                          <div
                            className="text-muted mb-0"
                            style={{ fontSize: "14px" }}
                          >
                            3 Start{" "}
                            <span className="fs-5">
                              <Rating stars={3} />
                            </span>{" "}
                            01
                          </div>

                          <div
                            className="text-muted mb-0"
                            style={{ fontSize: "14px" }}
                          >
                            2 Start{" "}
                            <span className="fs-5">
                              <Rating stars={2} />
                            </span>{" "}
                            01
                          </div>

                          <div
                            className="text-muted mb-0"
                            style={{ fontSize: "14px" }}
                          >
                            1 Start{" "}
                            <span className="fs-5">
                              <Rating stars={1} />
                            </span>{" "}
                            01
                          </div>
                        </Col>
                      </Row>

                      <div className="d-flex justify-content-between mt-5">
                        <div className="d-flex gap-2 align-items-center ">
                          <img src={review1} alt="" className="img-fluid" />
                          <div>
                            <p className="fw-semibold mb-0">Elake Ruiz</p>
                            <span>
                              <Rating stars={5} />
                            </span>
                          </div>
                        </div>

                        <div>
                          <Button className="rounded-5 textHover">Reply</Button>
                        </div>
                      </div>
                      <p
                        style={{ fontSize: "14px" }}
                        className="mt-2 text-primary fw-semibold"
                      >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Totam repudiandae reprehenderit, sed eveniet
                        dicta, aliquid dolor voluptatem commodi hic doloremque
                        amet.
                      </p>

                      <div className="d-flex justify-content-between mt-5">
                        <div className="d-flex gap-2 align-items-center ">
                          <img src={review2} alt="" className="img-fluid" />
                          <div>
                            <p className="fw-semibold mb-0">Elake Ruiz</p>
                          <span>
                              <Rating stars={5} />
                            </span>
                          </div>
                        </div>

                        <div>
                          <Button className="rounded-5 textHover">Reply</Button>
                        </div>
                      </div>
                      <p
                        style={{ fontSize: "14px" }}
                        className="mt-2 text-primary fw-semibold"
                      >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Totam repudiandae reprehenderit, sed eveniet
                        dicta, aliquid dolor voluptatem commodi hic doloremque
                        amet.
                      </p>

                      <div className="d-flex justify-content-between mt-5">
                        <div className="d-flex gap-2 align-items-center ">
                          <img src={review3} alt="" className="img-fluid" />
                          <div>
                            <p className="fw-semibold mb-0">Elake Ruiz</p>
                   <span>
                              <Rating stars={5} />
                            </span>
                          </div>
                        </div>

                        <div>
                          <Button className="rounded-5 textHover">Reply</Button>
                        </div>
                      </div>
                      <p
                        style={{ fontSize: "14px" }}
                        className="mt-2 text-primary fw-semibold"
                      >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Totam repudiandae reprehenderit, sed eveniet
                        dicta, aliquid dolor voluptatem commodi hic doloremque
                        amet.
                      </p>
                    </div>
                  </Col>
                  <Col lg={6} className="mt-4 ">
                    <h4 className="mb-4">Add a Review</h4>
                    <div className="text-primary">Your Rating: <span><Rating stars={5}/></span> Outstanding</div>
                    <Form className="d-flex flex-column gap-2">
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="Your Full Name"
                          className="shadow-none rounded-0"
                          style={{ border: "1px solid #e4e0e0d5" }}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          type="email"
                          placeholder="Email Address"
                          className="shadow-none rounded-0"
                          style={{ border: "1px solid #e4e0e0d5" }}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          type="phone"
                          placeholder="Phone Number"
                          className="shadow-none rounded-0"
                          style={{ border: "1px solid #e4e0e0d5" }}
                        />
                      </Form.Group>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Message"
                        className="shadow-none"
                        style={{ border: "1px solid #e4e0e0d5" }}
                      />
                    </Form>
                    <div className="text-end">
                      <Button className="rounded-0 textHover fw-semibold mt-3  ">
                        Submit Now
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ProductDetails;
