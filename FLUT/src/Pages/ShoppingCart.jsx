import Hero from "../component/Hero";
import Cart from "../component/Cart";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';

const ShoppingCart = () => {

const navigate = useNavigate();
const location = useLocation();

    const handleCheckout = () => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (isLoggedIn === 'true') {
            navigate('/ProductCheckout');
        } else {
            Swal.fire({
                title: 'Alert',
                text: 'Please log in first to complete your purchase.',
                icon: 'warning',
                confirmButtonText: 'Log in now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/Login', { state: { from:location } });
                }
            });
        }
    };

  const { totalPrice } = useContext(CartContext);
  return (
    <div>
      <Hero
        height="400px"
        title="Shopping Cart"
        subtitle={
          <div className="d-flex justify-content-center gap-2">
            <a className="text-decoration-none pageCart" href="/">
              Home →
            </a>
            <a className="text-decoration-none pageCart" href="/ShoppingCart">
              Cart
            </a>
          </div>
        }
      />

      <Container className="mt-5">
        <div style={{ overflowX: "auto", width: "100%" }}>
          <div style={{ minWidth: "800px" }}>
            <Row className="fw-bold border-bottom pb-3 mb-3 mx-0 text-muted">
              <Col xs={4} md={5} className="">
                Product
              </Col>
              <Col xs={2} md={2}>
                Price
              </Col>
              <Col xs={2} md={2}>
                Quantity
              </Col>
              <Col xs={2} md={2}>
                Total
              </Col>
              <Col xs={2} md={1}></Col>
            </Row>

            <Cart />
            <Form>
              <Row className="mx-0  border-bottom pb-5">
                <Col lg={7} xs={6}>
                  <Button>UPDATE CART</Button>
                </Col>

                <Col lg={5} xs={6}>
                  <div className="position-relative">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      className="text-muted bg-muted  bg-light rounded-2 bg-light" style={{border:'1px solid #d4d4d4', padding:'6px'  }}
                    />
                    <div className="position-absolute top-0 end-0 ">
                      <Button type="submit" className="rounded-0 ps-4 pe-4">
                        APPLY
                      </Button>
                      <Button className="rounded-start-0 btn btn-light">
                        CLOSE COUPON
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Form>
            <Row className="mx-0 justify-content-end border-bottom pt-4 pb-4">
              <Col xs={3} lg={3}>
                <div className="d-flex gap-2 ">
                  <strong className="fs-5 ">Subtotal :</strong>

                  <div className="fw-semibold d-flex align-items-center">
                    {" "}
                    $ {totalPrice.toFixed(2)}
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="mx-0 justify-content-end">
              <Col lg={10} xs={9} className="mt-4 d-flex justify-content-end">
                <p className="fw-semibold">Shopping</p>
              </Col>
              <Col lg={4}  className="mt-4 mb-4">
                <div className="text-end text-muted d-flex flex-column gap-2 ">
                  <div>
                    <label htmlFor="" className="me-2">
                      Flat Rate: $50.00
                    </label>
                    <input type="radio" />
                  </div>

                  <div>
                    <label htmlFor="" className="me-2">
                      Free Shipping
                    </label>
                    <input type="radio" />
                  </div>
                  <div>
                    <label htmlFor="" className="me-2">
                      Flat Rate: $10.00
                    </label>
                    <input type="radio" />
                  </div>
                  <div>
                    <label htmlFor="" className="me-2">
                      Local Delivery: $2.00
                    </label>
                    <input type="radio" />
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="mx-0 justify-content-end pb-2">
              <Col lg={3} xs={5} className="d-flex flex-column gap-2">
                <p className="dw-semibold">Calculate Shipping</p>

                <select
                  id="contuntry"
                  className="p-2 text-muted bg-muted  bg-light rounded-2  bg-light form-select "
                >
                  <option value="" disabled selected hidden>
                    Contuntry
                  </option>
                  <option value="Syria">Syria</option>
                  <option value="India">India</option>
                  <option value="Palistan">Palistan</option>
                </select>

                <select
                  id="city"
                  className="p-2 text-muted bg-muted bg-light rounded-2 form-select "
                >
                  <option value="" disabled selected hidden>
                    {" "}
                    City
                  </option>
                  <option value="Aleppo">Aleppo</option>
                  <option value="Damascus">Damascus</option>
                  <option value="Darra">Darra</option>
                </select>
                <input
                  type="text"
                  placeholder=" Postcode/Zipcode"
                  className="p-2 text-muted bg-muted bg-light rounded-2  " style={{border:'1px solid #d4d4d4',  }}
                />
                <Button type="button" className="mt-3">
                  UPDATE DETAILS
                </Button>
              </Col>
            </Row>
            <hr />

            <Row className="mx-0 justify-content-end pt-4 mb-5">
              <Col lg={6} xs={7}>
                <div className="d-flex gap-1 justify-content-end ">
                  <a href="/">
                    <Button variant="light" className="fw-medium">
                      CONTINUE SHOPPING
                    </Button>
                  </a>
         
                    <Button variant="outline-primary" className="fw-semibold" onClick={handleCheckout}>
                      PROCEED TO CHECKOUT
                    </Button>
              
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ShoppingCart;
