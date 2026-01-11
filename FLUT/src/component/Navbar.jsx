import {
  Navbar as BootstrapNavbar,
  Badge,
  Container,
  Nav,
  NavDropdown,
  Dropdown,
  Button,
  Stack,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch, FaHeart } from "react-icons/fa";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" className="shadow fixed-top bg-white ">
      <Container>
        <BootstrapNavbar.Brand as={NavLink} to="/">
          <img src={logo} alt="fashiop" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle
          className="text-primary"
          aria-controls="basic-navbar-nav"
        />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav
            className=" fw-semibold  mx-auto gap-3 
          "
            style={{ fontSize: "12px" }}
          >
            <Nav.Link as={NavLink} to="/" className=" text-primary ">
              HOME
            </Nav.Link>

            <NavDropdown title="SHOP" className="no-caret  ">
              <NavDropdown.Item
                as={NavLink}
                to="/ShopCategory"
                className="fw-semibold"
              >
                SHOP CATEGORY
              </NavDropdown.Item>

              <NavDropdown.Item
                as={NavLink}
                to="/ProductDetails"
                className="fw-semibold"
              >
                PRODUCT DETAILS
              </NavDropdown.Item>

              <NavDropdown.Item
                as={NavLink}
                to="/ProductCheckout"
                className="fw-semibold"
              >
                PRODUCT CHECKOUT
              </NavDropdown.Item>

              <NavDropdown.Item
                as={NavLink}
                to="/ShoppingCart"
                className="fw-semibold"
              >
                SHOPPING CART
              </NavDropdown.Item>

              <NavDropdown.Item
                as={NavLink}
                to="/Confirmation"
                className="fw-semibold"
              >
                CONFIRMATION
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="BLOG" className="no-caret">
              <Dropdown.Item as={NavLink} to="/Blog" className="fw-semibold">
                BLOG
              </Dropdown.Item>

              <Dropdown.Item
                as={NavLink}
                to="/BlogDetails"
                className="fw-semibold"
              >
                BLOG DETAILS
              </Dropdown.Item>
            </NavDropdown>

            <NavDropdown title="PAGES" className="no-caret">
              <Dropdown.Item as={NavLink} to="Login" className="fw-semibold">
                LOGIN
              </Dropdown.Item>

              <Dropdown.Item as={NavLink} to="Teacking" className="fw-semibold">
                TEACKING
              </Dropdown.Item>

              <Dropdown.Item as={NavLink} to="Elements" className="fw-semibold">
                ELEMENTS
              </Dropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/" className="">
              CONTACT
            </Nav.Link>
          </Nav>

          <div className=" d-flex gap-2 align-items-center mt-3 mt-lg-0 ">
            <div className=" navDiv">
              <Nav.Link
                as={Link}
                to="/search"
                className=" border-lg-start border-lg-end "
              >
                <FaSearch />
              </Nav.Link>
            </div>

            <div className=" navDiv">
              <Nav.Link
                as={Link}
                to="/profile"
                className=" border-lg-start border-lg-end "
              >
                <FaUser />
              </Nav.Link>
            </div>

            <div className=" navDiv">
              <Nav.Link
                as={Link}
                to="/wonder"
                className=" border-lg-start border-lg-end "
              >
                <FaHeart />
              </Nav.Link>
            </div>

            <div className=" navDiv">
              <Nav.Link
                as={Link}
                to="/cart"
                className=" border-lg-start border-lg-end "
              >
                <FaShoppingCart />
              </Nav.Link>
            </div>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};
export default Navbar;
