import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./Role.css"
const Role = () => {
  return (
    <>
      <div className="body role" style={{ backgroundColor: "#002A5C", minHeight: "95vh" }}>
        <div className="container" style={{ padding: "30px", height: "100%" }}>
          <h2>Pick your role</h2>
          <div className="row">
            <div className="col-lg ">
              <Link to="/i/details">
                <MDBCard
                  style={{ width: "20rem", height: "20rem", textAlign: "center" }}
                >
                  <MDBCardImage
                    src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                    position="top"
                    alt="..."
                  />
                  <MDBCardBody className="cardbody">
                    <MDBCardTitle>Influencer Profile </MDBCardTitle>
                    <MDBBtn className="btn btn-dark" href="/"></MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </Link>
            </div>
            <div className="col-lg">
              <Link to="/b/details">
                <MDBCard
                  style={{ width: "20rem", height: "20rem", textAlign: "center" }}
                >
                  <MDBCardImage
                    src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                    position="top"
                    alt="..."
                  />
                  <MDBCardBody className="cardbody">
                    <MDBCardTitle>Business Profile </MDBCardTitle>
                    <MDBBtn className="btn btn-dark"></MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </Link>
            </div>
            <div className="col-lg">
              <Link to="/v/details">
                <MDBCard
                  style={{ width: "20rem", height: "20rem", textAlign: "center" }}
                >
                  <MDBCardImage
                    src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                    position="top"
                    alt="..."
                  />
                  <MDBCardBody className="cardbody">
                    <MDBCardTitle>Vendor Profile </MDBCardTitle>
                    <MDBBtn className="btn btn-dark"></MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Role;
