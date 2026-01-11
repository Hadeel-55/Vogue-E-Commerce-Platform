import HeroImg from "../assets/hero.jpeg";
import { Button } from "react-bootstrap";
const Hero = () => {
  const heroSection = {
 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImg})`,
    backgroundSize: "cover",
    width: "100%",
    minHeight: "900px",
    backgroundPosition: "center",
    position: "relative",

  };

  return (
    <div style={heroSection}>
      <div className="
     position-absolute top-50 start-50 translate-middle
      "> 
        <h1 
        className="text-white text-center fw-semibold"
        style={{fontSize: 'calc(1.2rem + 3vw)', 
    fontWeight: 'inherit'}}
        >Fashion for <br /> Upcoming Winter</h1>
        <p className="text-center text-white  mt-3 mx-auto px-4" 
        style={{maxWidth:'700px',lineHeight: '1.6'}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <Button variant="light" className="heroBtn border-0 p-3 d-block mx-auto fw-semibold mt-4" >
          View Collection
        </Button>
      </div>
    </div>
  );
};
export default Hero;
