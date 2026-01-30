import Hero from "../component/Hero";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import loginImg from "../assets/login.jpg";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();

  if (email !== "" && password !== "") {
     localStorage.setItem("isLoggedIn", "true");
    const origin = location.state?.from?.pathname || "/";
    navigate(origin);
  } else {
    alert("Please enter your account.");
  } 
  };

  return (
    <div >
      <Hero
        height={"400px"}
        title={"Login/Register"}
        subtitle={
          <div className="d-flex justify-content-center gap-2">
            <a href="/" className="text-decoration-none pageCart">
              Home →
            </a>
            <a href="/Contact" className="text-decoration-none pageCart">
              Register
            </a>
          </div>
        }
      />

      <Container  data-aos="fade-up"
     data-aos-duration="3000">
        <Row className="justify-content-center mt-5">
          <Col lg={10} xs={12}>
            <Card className="mt-5 border-0 ">
              <Row className="g-0">
                <Col
                  lg={6}
                  className="d-flex position-relative d-fex align-items-center text-white justify-content-center text-center p-5"
                  style={{
                    background: `linear-gradient(rgba(0,0,0,0.1) , rgba(0,0,0,0.1)), url(${loginImg})`,
                    minHeight: "550px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div>
                    <h3>New to our website?</h3>
                    <p className="mt-3 ">
                      There are advances being made in science and technology
                      everyday, and a good example of this is the
                    </p>
                    <Button
                      className="rounded-0 p-2 fw-semibold mt-3"
                      onClick={toggleForm}
                    >
                      CREATE AN ACCOUNT
                    </Button>
                  </div>
                </Col>
                {isLogin ? (
                  <Col lg={6} className="shadow-sm">
                    <h4 className="text-uppercase dw-bold text-center mt-5">
                      Log in to enter
                    </h4>
                    <Form className="p-5">
                      <Form.Group>
                        <Form.Control
                         onChange={(e)=> setEmail(e.target.value)}
                          type="text"
                          placeholder="Username"
                          className="border-0 border-bottom rounded-0 pt-4 shadow-none"
                        />
                      </Form.Group>

                      <Form.Group className="" />

                      <Form.Control
                      onChange={(e)=> setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="border-0 border-bottom rounded-0 pt-4 shadow-none "
                      ></Form.Control>

                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                          type="checkbox"
                          label="Keep me logged in"
                          className="small text-secondary shadow-none pt-4 ms-2"
                        />
                      </Form.Group>
                      <Button
                      onClick={handleLogin}
                        type="submit"
                        className="w-100 mt-4 rounded-0 textHover fw-semibold"
                      >
                        LOG IN
                      </Button>

                      <div className=" text-center mt-3 small">
                        <a href="" className="text-decoration-none text-muted ">
                          Forgot Password?
                        </a>
                      </div>
                    </Form>
                  </Col>
                ) : (
                  <Col lg={6} className="shadow-sm login">
                    <h4 className="text-uppercase dw-bold text-center mt-5">
                      Create an Account
                    </h4>
                    <Form className="p-5">
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="Name"
                          className="border-0  border-bottom rounded-0 pt-4 shadow-none"
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Control
                          type="text"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email Address"
                          className="border-0  border-bottom rounded-0 pt-4 shadow-none"
                        />
                      </Form.Group>

                      <Form.Group className="" />

                      <Form.Control
                       onChange={(e)=> setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="border-0 border-bottom rounded-0 pt-4 shadow-none "
                      ></Form.Control>

                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="Confirm password"
                          className="border-0  border-bottom rounded-0 pt-4 shadow-none"
                        />
                      </Form.Group>

                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                          type="checkbox"
                          label="Keep me logged in"
                          className="small text-secondary shadow-none pt-4 ms-2"
                        />
                      </Form.Group>
                      <Button
                      onClick={handleLogin}
                        type="submit"
                        className="w-100 mt-4 rounded-0 textHover fw-semibold"
                      >
                        REGISTER
                      </Button>
                    </Form>
                  </Col>
                )}
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Login;
