import DealImg from "../assets/deal1.jpg";
import logo1 from "../assets/c-logo-3.png";
import logo2 from "../assets/c-logo-1.png";
import logo3 from "../assets/c-logo-2.png";
import logo4 from "../assets/c-logo-0.png";
import logo5 from "../assets/c-logo-5.png";
const Deal = () => {
  return (
    <div className="container mb-5 mt-5 ">
      <div className="row mt-5 g-4 justify-content-center">
        <div className="col-lg-6 col-12 mt-5">
          <div
            className="text-white text-center d-flex flex-column justify-content-center align-items-center dealImg position-relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${DealImg})`,
              height: "300px ",
              width: "100%",
              cursor: "pointer",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="blue-shadow-overlay"></div>
            <div
              className="position-relative h-100  d-flex flex-column justify-content-center align-items-center"
              style={{ zIndex: 2 }}
            >
              <h4>Hot Deals of this Month</h4>
              <span>shop now</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 mt-5">
          <div
            className="text-white text-center dealImg position-relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${DealImg})`,
              height: "300px ",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              cursor: "pointer",
            }}
          >
            <div className="blue-shadow-overlay"></div>
            <div
              className="position-relative h-100  d-flex flex-column justify-content-center align-items-center"
              style={{ zIndex: 2 }}
            >
              <h4>Hot Deals of this Month</h4>
              <span>shop now</span>
            </div>
          </div>
        </div>
      </div>

   <div className="row align-items-center justify-content-between g-4 mt-5">
        
   
        <div className="col-6 col-md-4 col-lg-2 text-center">
          <img 
            src={logo1} 
            alt="brand" 
            className="img-fluid brand-logo" 
          />
        </div>

        <div className="col-6 col-md-4 col-lg-2 text-center">
          <img src={logo2} alt="brand" className="img-fluid brand-logo" />
        </div>

        <div className=" col-lg-2 col-md-4 text-center d-none d-lg-block d-md-block">
          <img src={logo3} alt="brand" className="img-fluid brand-logo" />
        </div>

        <div className=" col-lg-2 text-center d-none d-lg-block">
          <img src={logo4} alt="brand" className="img-fluid brand-logo" />
        </div>
 
        <div className="col-lg-2 text-center d-none d-lg-block">
          <img src={logo5} alt="brand" className="img-fluid brand-logo" />
        </div>

      </div>
    </div>
  );
};
export default Deal;
