import React, { useState } from "react";
import { MDBRow, MDBCard } from "mdb-react-ui-kit";
import { BsCircleFill } from "react-icons/bs";
import { VscPassFilled } from "react-icons/vsc";
import "./Profile.css";

const Contact = () => {
    const [act, setAct] = useState("business");

    const side = (event, button) => {
        event.preventDefault();
        setAct(button);
    };
    return (
        <div className="profile">
            <div class="row">
                <div class="column1" style={{ backgroundColor: "#002A5C" }}>
                    <div style={{ display: "flex", width: "100%" }} className="px-4">
                        <ol style={{ listStyle: "none", color: "#F5F5F5", paddingTop: "160px", paddingLeft: "3rem" }}>
                            <li
                                className={act === "business" ? "active" : ""}
                                style={{ color: "#FFFFFF", paddingTop: "40px" }}
                                onClick={(event) => side(event, "business")}>
                                {act === "business" ? <VscPassFilled color="#FF6F00" /> : <BsCircleFill color="#FF6F00" />}
                                Business
                            </li>
                            <li style={{ paddingTop: "200px" }} className={act === "operator" ? "active" : ""} onClick={(event) => side(event, "operator")}>
                                {act === "operator" ? <VscPassFilled color="#FF6F00" padding="2px" /> : <BsCircleFill color="#FF6F00" padding="2px" />}
                                Operator
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="column2" style={{ backgroundColor: "#F5F5F5" }}>
                    <MDBCard style={{ backgroundColor: "#002A5C", borderRadius: "20px", height: "40rem", width: "80%", color: "white" }} className="px-3">
                        <MDBRow style={{ height: "30%", borderBottom: "1px solid #FF6F00", alignItems: "end" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }} className="px-3">
                                <h3>Email</h3>
                                <h4>zetalyst@gmail.com</h4>
                            </div>
                        </MDBRow>
                        <MDBRow style={{ height: "30%", borderBottom: "1px solid #FF6F00", alignItems: "end" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }} className="px-3">
                                <h3>Website</h3>
                                <h4>www.zetalyst.com</h4>
                            </div>
                        </MDBRow>
                        <MDBRow style={{ height: "30%", alignItems: "end" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }} className="px-3">
                                <h3>Location</h3>
                                <h4 style={{ width: "40%" }}>K.G road, k.v.k Complex Near K.K Nagar,Delhi-684678,India</h4>
                            </div>
                        </MDBRow>
                    </MDBCard>
                </div>
            </div>
        </div>
    );
};
export default Contact;