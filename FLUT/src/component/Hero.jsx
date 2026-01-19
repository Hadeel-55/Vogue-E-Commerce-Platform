import HeroImg from "../assets/hero.jpeg";
import { Button } from "react-bootstrap";
const Hero = ({ title, subtitle, showButton, height }) => {
  const heroSection = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImg})`,
    backgroundSize: "cover",
    width: "100%",
    minHeight: height || "900px",
    display: "flex",
    backgroundPosition: "center",
    position: "relative",
  };

  return (
    <div style={heroSection}>
      <div
        className="
     position-absolute top-50 start-50 translate-middle
      ">
        <h1
          className="text-white text-center fw-semibold"
          style={{ fontSize: "calc(1rem + 3vw)", fontWeight: "inherit" }}
        >
          {title}
        </h1>
        <div
          className="text-center text-white  mt-3 mx-auto px-4"
          style={{ maxWidth: "700px", lineHeight: "1.6" }}
        >
          {subtitle}
        </div>

        {showButton && (
          <Button
            variant="light"
            className="heroBtn border-0 p-3 d-block mx-auto fw-semibold mt-4"
          >
            View Collection
          </Button>
        )}
      </div>
    </div>
  );
};
export default Hero;
