import { Container, Col, Row, Form, Button } from "react-bootstrap";

import { FaFacebook, FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import Image1 from '../assets/image-01.jpg';
import Image2 from '../assets/image-02.jpg';
import Image3 from '../assets/image-03.jpg';
import Image4 from '../assets/image-04.jpg';
import Image5 from '../assets/image-05.jpg';
import Image6 from '../assets/image-06.jpg';
import Image7 from '../assets/image-07.jpg';
import Image8 from '../assets/image-08.jpg';
const Footer = () => {
  return (
    <Container className="pt-5 pb-5">
      <Row className="d-flex justify-content-center gy-5">
        <Col lg={3} md={6} sm={12}>
          <h5>About Us </h5>
          <p className="text-muted mt-4 " style={{ fontSize: "15px" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore dolore magna aliqua.
          </p>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <h5>Newsletter</h5>
          <p className="text-muted mt-4">Stay updated with our latest trends</p>
          <Form className="position-relative">
            <Form.Control
              type="email"
              placeholder="Email Address"
              className="bg-light rounded-0"
            />

            <Button
              type="submit"
              className="fw-bold position-absolute top-0 end-0 rounded-0"
            >
              →
            </Button>
          </Form>
        </Col>
        <Col lg={3} md={6} sm={12}>
         <h5>Instargram Feed</h5>
         <div className="d-flex flex-wrap gap-3 "
         style={{fontSize:'15px'}}>
            <img src={Image1} alt="" />
            <img src={Image2} alt="" />
            <img src={Image3} alt="" />
            <img src={Image4} alt="" />
            <img src={Image5} alt="" />
            <img src={Image6} alt="" />
            <img src={Image7} alt="" />
            <img src={Image8} alt="" />
         </div>
        </Col>
        <Col lg={2} md={6} sm={12}>
        <h5>Follow Us </h5>
        <p className="text-muted"
        style={{fontSize:'15px'}}> Let us be social</p>
        <div className=" d-flex gap-4 "
        style={{fontSize:'13px'}}>
            <FaFacebook className="FooterIcon"/>
            <FaTwitter className="FooterIcon"/>
            <FaDribbble className="FooterIcon"/>
            <FaBehance className="FooterIcon"/>
        </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
