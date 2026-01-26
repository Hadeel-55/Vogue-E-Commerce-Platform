import { Form, Button, Row, Col, Container,ListGroup } from "react-bootstrap";
import Hero from "../component/Hero";
import OrderSummary from "../component/OrderSummary";
import orderImg from "../assets/card.jpg";
const ProductCheckout = () => {
  return (
    <div>
      <Hero
        height={"400px"}
        title={"Product Checkout"}
        subtitle={
          <div className="d-flex justify-content-center gap-2">
            <a href="/" className="text-decoration-none pageCart">
              Home →
            </a>
            <a
              href="/productCheckout"
              className="text-decoration-none pageCart"
            >
              Checkout
            </a>
          </div>
        }
      />
      <Container>
        <Row className="mt-5">
          <Col lg={12} xs={12}>
            <div
              className="d-flex gap-1 p-2 align-items-center mb-3"
              style={{ backgroundColor: "#cad7e734" }}
            >
              <p className="m-0 text-muted ">Returning Customer ? </p>
              <a href="/Login">Click here to login</a>
            </div>
            <small className="text-secondary ">
              If you have shopped with us before, please enter your details in
              the boxes below. If you are a new customer, please proceed to the
              Billing & Shipping section.
            </small>
          </Col>
        </Row>
        <Form>
          <Row className="gap-2 mt-4">
            <Col lg={3} xs={12}>
              <input
                type="email"
                className="p-2 w-100 rounded-1 border-1 border-light "
                placeholder="Username or Email"
              />
            </Col>
            <Col lg={3} xs={12}>
              <input
                type="text"
                className="p-2 w-100 rounded-1 border-1 border-light "
                placeholder="Password"
              />
            </Col>
          </Row>
          <Row className="mt-4 align-items-center">
            <Col lg={2} xs={4}>
              <Button type="submit" className="rounded-0 ps-3 pe-3">
                Send Message
              </Button>
            </Col>
            <Col lg={2} xs={4}>
              <input type="checkbox" />
              <label htmlFor="" className="ms-2 text-muted">
                Remember me
              </label>
            </Col>
            <a href="" className="text-secondary mt-3 text-decoration-none">
              Lost Your Password?
            </a>
          </Row>

          <Row className="mt-4">
            <Col lg={12} xs={12}>
              <div
                className="d-flex gap-1 p-2 align-items-center mb-3"
                style={{ backgroundColor: "#cad7e734" }}
              >
                <p className="m-0 text-muted ">Have a coupon ? </p>
                <a href="">Click here to enter your code</a>
              </div>
              <input
                type="text"
                placeholder="Enter coupon code"
                className="p-2 w-100 rounded-1 border-1 border-light"
              />
              <Button
                type="submit"
                className="mt-3 rounded-0 checkoutBtn btn-light border-0 "
              >
                APPLY COUPON
              </Button>
            </Col>
          </Row>
        </Form>
        <Row className="mt-5 ">
          <Col lg={8} xs={12}>
            <h4>Billing Details</h4>
            <hr />
            <Form className="row gy-3 mt-3 ">
              <Col lg={6} md={6} xs={12}>
                <input
                  type="text"
                  placeholder="First name.."
                  className="form-control"
                />
              </Col>
              <Col lg={6} md={6} xs={12}>
                <input
                  type="text"
                  placeholder="Last name.."
                  className="form-control"
                />
              </Col>

              <Col lg={12} xs={12}>
                <input
                  type="text"
                  placeholder="Companye name.."
                  className="form-control"
                />
              </Col>

              <Col lg={6} md={6} xs={12}>
                <input
                  type="text"
                  placeholder="Phone number.."
                  className="form-control"
                />
              </Col>
              <Col lg={6} md={6} xs={12}>
                <input
                  type="text"
                  placeholder="Email Address.."
                  className="form-control"
                />
              </Col>

              <Col lg={12} xs={12}>
                <select className="form-control">
                  <option value="" disabled selected hidden className="text-muted">
                    Conutry
                  </option>
                  <option value="Syria">Syria</option>
                  <option value="India">India</option>
                  <option value="Palistan">Palistan</option>
                </select>
              </Col>
              <Col lg={12} xs={12}>
                <input
                  type="text"
                  placeholder="Address line 01.."
                  className="form-control"
                />
              </Col>
              <Col lg={12} xs={12}>
                <input
                  type="text"
                  placeholder="Address line 02.."
                  className="form-control"
                />
              </Col>
              <Col lg={12} xs={12}>
                <input
                  type="text"
                  placeholder="Town/City"
                  className="form-control"
                />
              </Col>
              <Col lg={12} xs={12}>
                <select name="" className="form-control" id="">
                  <option value="" disabled selected hidden>
                    District
                  </option>
                  <option value="District">District</option>
                  <option value="District">District</option>
                  <option value="District">District</option>
                </select>
              </Col>
              <Col lg={12} xs={12}>
                <input
                  type="text"
                  placeholder="Postcode/ZIP"
                  className="form-control"
                />
              </Col>
              <Col>
                <input type="checkbox" />
                <label htmlFor="" className="text-muted ms-2">
                  Create an account?
                </label>
              </Col>
            </Form>
            <Row>
              <Col lg={12} xs={12}>
                <h4 className="mt-5">Shipping Details</h4>
                <hr />
                <input type="checkbox" />
                <label htmlFor="" className="ms-2 text-muted">
                  Ship to a different address?
                </label>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={12} xs={12}>
                <textarea
                  name=""
                  rows={9}
                  spellCheck="false"
                  autoCapitalize="words"
                  id="orderNotes"
                  placeholder="Order Notes..."
                  className="w-100 p-3 rounded-1 "
                  style={{ border: "1px solid #f3f2f2 " }}
                ></textarea>
              </Col>
            </Row>
          </Col>
          <Col className="mt-5 " lg={4} xs={12}>
            <OrderSummary 
            show={
<div>
          <ListGroup.Item className="bg-transparent px-0 border-0 mt-1">
          <Row>
            <Col>
              <input type="radio" style={{ cursor: "pointer" }} />
              <label
                htmlFor=""
                className="ms-2 fw-semibold "
                style={{ cursor: "pointer" , fontSize:'16px'}}
              >
                Check payments
              </label>
            </Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item
          className=" mt-2 border-0"
          style={{ cursor: "pointer" }}
        >
          <Row>
            <Col>
              <p className="text-secondary"  style={{fontSize:'14px'}}>
                Please send a check to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </p>
            </Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item className="bg-transparent px-0 mt-2 border-0">
          <Row>
            <Col className="">
              <input type="radio" style={{ cursor: "pointer" }} />
              <label
                htmlFor=""
                className="ms-2  fw-semibold "
                style={{ cursor: "pointer" ,fontSize:'16px'}}
              >
                Paypal
              </label>
            </Col>
            <Col className="py-0 text-end">
              <div className="">
                <img src={orderImg} alt="" />
              </div>
            </Col>
          </Row>
        </ListGroup.Item>
            <ListGroup.Item
          className=" mt-2 border-0"
          style={{ cursor: "pointer" }}
        >
          <Row>
            <Col>
              <p className="text-primary"  style={{fontSize:'14px'}}>
                Please send a check to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </p>
            </Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item className="border-0 px-0 bg-transparent" style={{fontSize:'13px'}}>
<Row className="mt-2">
    <Col>
    <input type="checkbox" />
    <label htmlFor="" className="text-muted ms-2">I’ve read and accept the 
        <a href="" className="text-decoration-none"> terms & conditions*</a>
    </label>
    </Col>
</Row>
        </ListGroup.Item>
        <Button className="mt-4 textHover fw-semibold" >
             PROCEED TO PAYPAL
        </Button>
</div>
              
            } />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ProductCheckout;
