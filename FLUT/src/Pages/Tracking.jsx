import Hero from "../component/Hero";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Tracking = () => {
  return (
    <div>
      <Hero
        height={"400px"}
        title={"Order Tracking"}
        subtitle={
          <div className="d-flex justify-content-center gap-2">
            <a className="text-decoration-none pageCart" href="/">
              Home →
            </a>
            <a className="text-decoration-none pageCart" href="/ShoppingCart">
              Order Tracking
            </a>
          </div>
        }
      />
      <Container className="mt-5 pt-3">
        <Row className="mt-5">
          <Col lg={8}>
            <p className="text-start" style={{fontSize:'14.5px',}}>
              To track your order please enter your Order ID in the box below
              and press the "Track" button. This was given to you on your
              receipt and in the confirmation email you should have received.
            </p>
          </Col>
        </Row>
        <Row>
            <Col lg={7 }>
            <Form className="mt-3 ">
                <Form.Group>
                  <Form.Control 
                  placeholder="Order ID"
                   className="shadow-none rounded-0 " style={{border:'1px solid #dbd3d3f6'}}

                  />
                </Form.Group>
                <Form.Group >
                    <Form.Control
                    placeholder='Billing Email Address'
                    className="mt-3 shadow-none rounded-0 " style={{border:'1px solid #dbd3d3f6'}}
                    />
                </Form.Group>
                <Button 
                type="submit" className="mt-3 rounded-0 fw-semibold textHover">
                    TRAK ORDER
                </Button>
            </Form>
            </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Tracking;
