import { Button, Col, Form } from "react-bootstrap";
const Newslatter = () => {
  return (
    <div
      className=" mt-5 mb-5 d-flex justify-content-center  text-center
        "
      style={{
        backgroundColor: "#cad7e734",
        width: "100%",
        height: "400px",
      }}
    >
      <div>
        <h2 className="mt-5 pt-5">Subscribe for Our Newsletter</h2>
        <span className="">We won’t send any kind of spam</span>
<Col xs={11}>
        <div className="position-relative">
          <Form className="">
            <Form.Control
              type="email"
              placeholder="Email address..."
              className="form-control rounded-5 mt-5 p-3"
            />
            <Button
              variant="primary "
            type="submit"
              className="position-absolute top-50 start-100 translate-middle rounded-5 btn-sm  p-sm-2 "
              style={{maxWidth:'100px', width:'100%'}}
            >
              Get Started
            </Button>
          </Form>
        </div>
        </Col>
      </div>
    </div>
  );
};
export default Newslatter;
