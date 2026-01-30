import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  Navbar as BootstrapNavbar,
  Badge,
  Container,
  Nav,
  NavDropdown,
  Dropdown,
  Form,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUser, FaSearch, FaTimes } from "react-icons/fa";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const [searchTrem, setSearchTrem] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handlesearch = (e) => {
    e.preventDefault();

    if (searchTrem.trim()) {
      navigate(`/?search=${searchTrem}`);
      setIsSearchOpen(false);
    }
  };

  const { totalItem } = useContext(CartContext);
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
                to="/Product/1"
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

            <NavDropdown title="PAGES" className="no-caret">
              <Dropdown.Item as={NavLink} to="Login" className="fw-semibold">
                LOGIN
              </Dropdown.Item>

              <Dropdown.Item as={NavLink} to="Teacking" className="fw-semibold">
                TEACKING
              </Dropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/Contact" className="">
              CONTACT
            </Nav.Link>
          </Nav>

          <div className=" d-flex gap-2 align-items-center mt-3 mt-lg-0 ">
            <div className=" navDiv" style={{ position: "relative" }}>
              <Nav.Link
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className=" border-lg-start border-lg-end "
              >
                {isSearchOpen ? <FaTimes /> : <FaSearch />}
              </Nav.Link>

              {isSearchOpen && (
                <div className="search-dropdown-card">
                  <h6 className="mb-3">Enter your search</h6>
                  <Form onSubmit={handlesearch}>
                    <Form.Control
                      type="text"
                      autoFocus
                      placeholder="Search for products..."
                      className="search-input "
                      style={{ minWidth: "250px" }}
                      value={searchTrem}
                      onChange={(e) => setSearchTrem(e.target.value)}
                    />
                  </Form>
                </div>
              )}
            </div>
            <div className=" navDiv">
              <Nav.Link
             
                className=" border-lg-start border-lg-end "
              >
                <FaUser />
              </Nav.Link>
            </div>

            <div className=" navDiv">
              <Nav.Link
                as={Link}
                to="/favorites"
                className=" border-lg-start border-lg-end "
              >
                <FiHeart />
              </Nav.Link>
            </div>

            <div className=" navDiv">
              <Nav.Link
                as={Link}
                to="/ShoppingCart"
                className=" border-lg-start border-lg-end position-relative"
              >
                <FiShoppingCart />

                {totalItem > 0 && (
                  <Badge
                    pill
                    bg="danger"
                    className="position-absolute top-0 start-100 translate-middle dage rounded-pill"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {totalItem}
                  </Badge>
                )}
              </Nav.Link>
            </div>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};
export default Navbar;
