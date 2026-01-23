import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { HiOutlineHome, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import Hero from "../component/Hero";
const Contact = () => {
  return (
    <div>
      <Hero
        height={"400px"}
        title={"Contact Us"}
        subtitle={
          <div className="d-flex justify-content-center gap-2">
            <a href="/" className="text-decoration-none pageCart">
              Home →
            </a>
            <a href="/Contact" className="text-decoration-none pageCart">
              Contact Us
            </a>
          </div>
        }
      />
      <Container>
        <Row className="mt-5">
          <Col className="mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2668702.6391841904!2d-93.14694460913687!3d49.21658897574233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d1fcc237cc37749%3A0x29ad344ab16d673b!2sThunder%20Bay%2C%20Unorganized%2C%20Ontario%2C%20Kanada!5e0!3m2!1str!2sus!4v1769018473825!5m2!1str!2sus"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>

        <Row className="mt-5 ">
          <Col lg={4} xs={12}>
            <div className="d-flex flex-column gap-1">
              <div className="d-flex gap-3">
                <div>
                  <HiOutlineHome className="text-primary fs-4" />
                </div>
                <div className="">
                  <p className="fw-bold mb-0">California, United States</p>
                  <span className="text-muted" style={{ fontSize: "14px" }}>
                    Santa monica bullevard
                  </span>
                </div>
              </div>

              <div className="d-flex gap-3 mt-2">
                <div>
                  <HiOutlinePhone className="text-primary fs-4" />
                </div>
                <div className="">
                  <a
                    href=""
                    className="fw-bold mb-0 text-decoration-none text-dark"
                  >
                    00 (440) 9865 562
                  </a>
                  <p className="text-muted" style={{ fontSize: "14px" }}>
                    Mon to Fri 9am to 6 pm
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3 ">
                <div>
                  <HiOutlineMail className="text-primary fs-4" />
                </div>
                <div className="">
                  <a
                    href=""
                    className="fw-bold mb-0 text-decoration-none text-dark"
                  >
                    support@colorlib.com
                  </a>
                  <p className="text-muted" style={{ fontSize: "14px" }}>
                    Send us your query anytime!
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} xs={12}>
            <Form className=" d-flex flex-column gap-2">
              <input
                type="text"
                placeholder="Enter your name"
                className="p-2 w-100 rounded-1"
                style={{ border: "1px solid #d4d4d4" }}
              />
                <input
                type="email"
                placeholder="Enter email address"
                className="p-2 w-100 rounded-1"
                style={{ border: "1px solid #d4d4d4" }}
              />

                <input
                type="text"
                placeholder="Enter Subject"
                className="p-2 w-100 rounded-1"
                style={{ border: "1px solid #d4d4d4" }}
              />
            </Form>
          </Col>
          <Col lg={4} xs={12} className="text-end ">
          
            <textarea
            rows={5}
                placeholder="Enter Message.."
                className="p-2 w-100 rounded-1"
                style={{ border: "1px solid #d4d4d4" }}
              />
          <Button 
          type="submit"
          className="textHover fw-semibold rounded-0 mt-2 ">
            Send Message
          </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contact;
