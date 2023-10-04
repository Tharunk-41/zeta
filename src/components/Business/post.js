import React, { useState } from "react";
import { MDBBtn, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import imag from "../../assets/Ellipse 38.png";
import { FaHourglass } from 'react-icons/fa';
import { IoIosCash } from 'react-icons/io';
import { PiWaveSineFill } from "react-icons/pi";
import "./Details.css";

const Post = ({ onClose }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (buttonNumber) => {
        if (buttonNumber !== activeButton) {
            setActiveButton(buttonNumber);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setShowPopup(true);
    };
    const handlePopupButton = () => {
        setShowPopup(false);
        onClose();
    };
    return (
        <div style={{ overflowY: 'scroll', height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", width: "75%" }}>
                <MDBBtn onClick={() => handleButtonClick(1)} style={{ width: "50%", backgroundColor: activeButton === 1 ? '#FF6F00' : 'transparent', color: activeButton === 1 ? 'white' : 'black' }}>Influencer</MDBBtn>
                <MDBBtn onClick={() => handleButtonClick(2)} style={{ width: "50%", backgroundColor: activeButton === 2 ? '#FF6F00' : 'transparent', color: activeButton === 2 ? 'white' : 'black' }}>Vendor</MDBBtn>
            </span>
            {activeButton === 1 ? (
                <>
                    <MDBRow className="align-items-center" style={{ width: "100%", height: "20%" }}>
                        <MDBCol style={{ borderRight: "1px solid #00000080", justifyContent: "center", display: "flex" }}><img src={imag} alt="img" style={{ height: "10rem" }}></img></MDBCol>
                        <MDBCol style={{ justifyContent: "center", display: "flex" }}><span>Loreal Paris</span></MDBCol>
                    </MDBRow>
                    <form onSubmit={handleSubmit} style={{ height: "70%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ width: "75%" }}>
                            <h1>Post title</h1>
                            <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                                <MDBIcon far icon="address-card" size="2x" />
                                <input type="text" />
                            </span>
                        </div>
                        <div style={{ width: "75%" }}>
                            <h1>Platform</h1>
                            <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                                <MDBIcon fas icon="globe" size="2x" />
                                <div><select style={{ width: "45vw" }}>
                                    <option value="Option 1">Option 1</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                </select></div></span>
                        </div>
                        <div style={{ width: "75%" }}>
                            <h1> Minimum Followers</h1>
                            <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                                <MDBIcon fas icon="users" size="2x" />
                                <input type="Number" style={{ width: "20vw", marginLeft: "1rem", marginRight: "1rem" }} ></input>
                                <select style={{ width: "40%" }}>
                                    <option value="">K</option>
                                    <option value="Option 1">Option 1</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                </select></span>
                        </div>
                        <div style={{ width: "75%" }}>
                            <h1> Duration</h1>
                            <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                                <FaHourglass size={"25px"} />
                                <select type="Number" style={{ width: "20vw", marginLeft: "1rem", marginRight: "1rem" }} >
                                    <option value="1">01</option>
                                    <option value="2">02</option>
                                    <option value="3">03</option>
                                    <option value="4">04</option>
                                </select>
                                <select style={{ width: "25vw" }}>
                                    <option value="">Month</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </span>
                        </div>
                        <div style={{ width: "75%" }}>
                            <h1> Frequency</h1>
                            <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                                <PiWaveSineFill size={"25px"} />
                                <select type="Number" style={{ width: "20vw", marginLeft: "1rem", marginRight: "1rem" }} >
                                    <option value="">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <span style={{ marginRight: "1rem" }}>Posts per</span>
                                <select style={{ width: "20vw" }}>
                                    <option value="">Month</option>
                                    <option value="Option 1">Option 1</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                </select>
                            </span>
                        </div>
                        <div style={{ width: "75%" }}>
                            <h1>Amount</h1>
                            <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "left", borderRadius: "15px" }}>
                                <IoIosCash size={"25px"} className="mx-4" />
                                <input type="Number" placeholder="$" style={{ width: "25vw", marginLeft: "1rem" }}></input>
                            </span>
                        </div>
                        <div style={{ width: "55vw", display: "flex", justifyContent: "center", padding: "2rem" }}>
                            <MDBBtn size="lg" type="submit" style={{ backgroundColor: "#FF6F00", justifySelf: "center", width: "10rem" }}>
                                Post
                            </MDBBtn>
                        </div>
                    </form></>) :
                (<>
                    <div style={{ width: "75%" }}>
                        <h1>Post title</h1>
                        <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                            <MDBIcon far icon="address-card" size="2x" />
                            <input type="text" />
                        </span>
                    </div>
                    <div style={{ width: "75%" }}>
                        <h1>Category</h1>
                        <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                            <MDBIcon fas icon="th-large" size="2x" />
                            <input type="text" />
                        </span>
                    </div>
                    <div style={{ width: "75%" }}>
                        <h1>Sub Category</h1>
                        <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                            <MDBIcon fas icon="swatchbook" size="2x" />
                            <input type="text" />
                        </span>
                    </div>
                    <div style={{ width: "75%" }}>
                        <h1>Price Type</h1>
                        <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                            <MDBIcon fas icon="tag" size="2x" />
                            <input type="text" />
                        </span>
                    </div>
                    <div style={{ width: "75%" }}>
                        <h1>Project Description</h1>
                        <span style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                            <textarea type="text" style={{ width: "100%" }} rows={6} />
                        </span>
                    </div>
                    <div style={{ width: "55vw", display: "flex", justifyContent: "center", padding: "2rem" }}>
                        <MDBBtn size="lg" onClick={handleSubmit} style={{ backgroundColor: "#FF6F00", justifySelf: "center", width: "10rem" }}>
                            Post
                        </MDBBtn>
                    </div>
                </>
                )}
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2><MDBIcon fas icon="thumbs-up" size='2x' />Post Submitted</h2>
                        <h3>Congratulations! You have successfully posted an oppurtunity.</h3>
                        <MDBBtn size="lg" style={{ backgroundColor: "#FF6F00", justifySelf: "center" }} onClick={handlePopupButton}>
                            Track
                        </MDBBtn>
                    </div>
                </div>)}
        </div>

    );
};
export default Post;