import React from "react";
import "./Landingpage.css";
import { Link } from "react-router-dom"; // Import Link from React Router
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/image1.png";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

const Landingpage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div className="body lp" style={{ backgroundColor: "#002A5C" }}>
      <Slider {...settings} className="slide">
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
      </Slider>
      <MDBContainer
        fluid
        className="p-4"
        style={{ backgroundColor: "#002A5C", padding: "" }}
      >
        <MDBRow>
          <MDBCol
            md="7"
            className="text-center text-md-start  flex-column justify-content-center"
          >
            <h1
              className="my-3  mx-5 display-5 px-9"
              style={{
                color: "#FFF",
                fontSize: "48px",
                fontFamily: "Inria Serif",
              }}
            >
              Bridging The Gap Between Your Business And The Influencers
            </h1>

            <p
              className="px-4 mx-4"
              style={{
                color: "#FFF",
                fontSize: "20px",
                fontFamily: "Inria Serif",
              }}
            >
              We at Zetalyst , are here to help you grow. Here the businessess
              find their required influencers and influencers find the work! one
              stop for all!
            </p>
            <div className="text-center my-5">
              <p
                style={{
                  color: "#FFF",
                  fontSize: "24px",
                  fontFamily: "Inria Serif",
                }}
              >
                No Account yet? Sign-up with Google
              </p>
              <MDBBtn
                className="mb-2  "
                size="lg"
                style={{ backgroundColor: "#FF6F00", textAlign: "center" }}
              >
                <MDBIcon fab icon="google" className="mx-2" />
                Sign up
              </MDBBtn>
            </div>
          </MDBCol>

          <MDBCol md="5">
            <div className="d-flex flex-row align-items-center justify-content-center my-5">
              <p
                className="lead fw-normal mb-0 me-3"
                style={{
                  color: "#FFF",
                  fontSize: "28px",
                  fontFamily: "Inria Serif",
                }}
              >
                Already registered? Login
              </p>
            </div>

            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
              style={{ backgroundColor: "#FFF" }}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
              style={{ backgroundColor: "#FFF" }}
            />
            <div className="text-center">
              <Link to="/role">
                <MDBBtn
                  className="mb-2  "
                  size="lg"
                  style={{ backgroundColor: "#FF6F00", textAlign: "center" }}
                >
                  Login
                </MDBBtn></Link>
              <hr style={{ color: "#FFF" }} />
              <p
                className="lead fw-normal mb-0 me-3"
                style={{
                  color: "#FFF",
                  fontSize: "28px",
                  fontFamily: "Inria Serif",
                }}
              >
                Login with Google
              </p>
              <MDBBtn
                className="mb-2  "
                size="lg"
                style={{ backgroundColor: "#FF6F00", textAlign: "center" }}
              >
                <MDBIcon fab icon="google" className="mx-2" />
                Login
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Landingpage;
