import React, { useState } from "react";
import { MDBBtn, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon, MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import amazon_icon from "../../assets/amazon_icon.png";
import Track from './track';
import Track1 from './track1';
import { mdiWeb, mdiAccountMultiple } from '@mdi/js';
import { Icon } from '@mdi/react';
import { FaHourglass } from 'react-icons/fa';
import { IoIosCash } from 'react-icons/io';
import { PiWaveSineFill } from "react-icons/pi";
import "./Details.css";

const Tracking = ({ onClose, m }) => {
    const [tracki, setTracki] = useState(false);
    const [track1, setTrack1] = useState(false);
    const titles = [' Promoting Vegan Skincare Products', ' Promoting Vegan Skincare Products 2', ' Promoting Vegan Skincare Products 3'];
    const descriptions = ['Description 1', 'Description 2', 'Description 3'];
    const categories = [['Electronics', 'Clothing', 'Home Appliances'], ['Books', 'Stationery'], ['Furniture', 'Decor', 'Kitchenware']]
    const images = [amazon_icon, amazon_icon, amazon_icon];
    const [activeButton, setActiveButton] = useState(1);
    const handleButtonClick = (buttonNumber) => {
        if (buttonNumber !== activeButton) {
            setActiveButton(buttonNumber);
        }
    };
    const handleTrack = (event) => {
        event.preventDefault();
        setTracki(!tracki);
    }
    const handleTracka = (event) => {
        event.preventDefault();
        setTrack1(!track1);
    }
    const handleTrack1 = (event, n) => {
        event.preventDefault();
        onClose(n);
    }
    const handleTrack2 = (n) => {
        onClose(n);
    }
    return (
        <div style={{ width: "100%", overflowY: 'scroll', height: "100%" }}>
            {!tracki && !track1 && (<>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", width: "100%" }}>
                    <MDBBtn onClick={() => handleButtonClick(1)} style={{ width: "40%", backgroundColor: activeButton === 1 ? '#FF6F00' : 'transparent', color: activeButton === 1 ? 'white' : 'black' }}>Influencer</MDBBtn>
                    <MDBBtn onClick={() => handleButtonClick(2)} style={{ width: "40%", backgroundColor: activeButton === 2 ? '#FF6F00' : 'transparent', color: activeButton === 2 ? 'white' : 'black' }}>Vendor</MDBBtn>
                </span>
                {activeButton === 1 && (
                    <span style={{ justifyContent: "center" }}>
                        {titles.map((title, index) => (
                            <MDBCard
                                key={index}
                                style={{
                                    display: 'flex',
                                    width: '80%',
                                    marginLeft: '7vw',
                                    marginTop: "1rem",
                                    height: '35%',
                                    backgroundColor: '#002A5C',
                                    borderBottomLeftRadius: '40px',
                                    borderTopRightRadius: '40px',
                                    borderTopLeftRadius: '0px',
                                    borderBottomRightRadius: '0px',
                                    overflowY: "scroll"
                                }}>
                                <MDBCardTitle style={{ borderBottom: "1px solid #FF6F00", color: "white", fontSize: "30px" }}><MDBIcon fas icon="file" />    {title}</MDBCardTitle>
                                <span style={{ width: "100%", height: "90%", display: "flex", flexWrap: "wrap" }}>
                                    <MDBCol style={{ paddingLeft: "2rem",width:"25%" }}>
                                        <img
                                            src={images[index]}
                                            alt="Card"
                                            style={{ height: '10rem', objectFit: 'cover', borderRadius: "30px" }}
                                        />
                                        <MDBCardText style={{ color: "white", marginLeft: "2rem" }}>{descriptions[index]}</MDBCardText>
                                    </MDBCol>
                                    <MDBCol style={{ width: "70%" }}>
                                        <MDBCardBody style={{ color: 'white', width: "100%" }}>
                                            <div style={{ display: 'flex' }}>
                                                <div style={{ width: "30vw" }}>
                                                    <div style={{ height: "2.5rem" }}>
                                                        <p style={{ display: "flex" }}>
                                                            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "3vw", width: "7rem" }}>
                                                                <Icon path={mdiWeb} size={1} />
                                                                <p style={{ height: '1rem', fontSize: "10px" }}> Platform </p>
                                                            </div>
                                                            Instagram
                                                        </p>
                                                    </div>
                                                    <div style={{ height: "2.5rem" }}>
                                                        <p style={{ display: "flex" }}>
                                                            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "3vw", width: "7rem" }}>
                                                                <Icon path={mdiAccountMultiple} size={1} />
                                                                <p style={{ height: '1rem', fontSize: "10px" }}> Minimum Followers</p>
                                                            </div>
                                                            2 K
                                                        </p>
                                                    </div>
                                                    <div style={{ height: "2.5rem" }}>
                                                        <p style={{ display: "flex" }}>
                                                            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "3vw", width: "7rem" }}>
                                                                <FaHourglass />
                                                                <p style={{ height: '1rem', fontSize: "10px" }}> Durations</p>
                                                            </div>
                                                            2 Month
                                                        </p>
                                                    </div>
                                                    <div style={{ height: "2.5rem" }}>
                                                        <p style={{ display: "flex" }}>
                                                            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "3vw", width: "7rem" }}>
                                                                <PiWaveSineFill />
                                                                <p style={{ height: '1rem', fontSize: "10px" }}> Frequency</p>
                                                            </div>
                                                            10 Post Per Month </p>
                                                    </div>
                                                    <div style={{ height: "2.5rem" }}>
                                                        <p style={{ display: "flex" }}>
                                                            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "3vw", width: "7rem" }}>
                                                                <IoIosCash style={{ height: "1rem" }} />
                                                                <p style={{ height: '1rem', fontSize: "10px" }}> Amount</p>
                                                            </div>
                                                            28000/-
                                                        </p>
                                                    </div>
                                                </div>
                                                <div style={{ display: "flex", justifyItems: "right", alignItems: "end" }}>
                                                    <MDBBtn style={{ backgroundColor: "#FF6F00", height: "2rem", width: "100%", borderRadius: "50px", display: "flex" }} onClick={m ? (event) => handleTrack1(event, 1) : handleTrack}>
                                                        <MDBIcon fas icon="lock" size="1x" />
                                                        {m ? "Message" : "Applicants"}
                                                    </MDBBtn>
                                                </div>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCol>
                                </span>
                            </MDBCard>
                        ))}
                    </span>)}
                {activeButton === 2 && (
                    <span style={{ justifyContent: "center" }}>
                        {titles.map((title, index) => (
                            <MDBCard
                                key={index}
                                style={{
                                    display: 'flex',
                                    width: '80%',
                                    marginLeft: '7vw',
                                    marginTop: "1rem",
                                    height: '35%',
                                    backgroundColor: '#002A5C',
                                    borderBottomLeftRadius: '40px',
                                    borderTopRightRadius: '40px',
                                    borderTopLeftRadius: '0px',
                                    borderBottomRightRadius: '0px',
                                    overflowY: "scroll"
                                }}>
                                <MDBCardTitle style={{ borderBottom: "1px solid #FF6F00", color: "white", fontSize: "30px" }}><MDBIcon fas icon="file" />    {title}</MDBCardTitle>
                                <span style={{ width: "100%", height: "90%", display: "flex", flexWrap: "wrap" }}>
                                    <MDBCol style={{ width: "100%" }}>
                                        <MDBCardBody style={{ color: 'white', width: "100%" }}>
                                            <div style={{ display: 'flex', flexDirection: "column" }}>
                                                <div style={{ width: "100%", height: "100%" }}>
                                                    <div style={{ height: "2.5rem" }}>
                                                        <p style={{ display: "flex" }}>
                                                            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "3vw", width: "7rem" }}>
                                                                <Icon path={mdiWeb} size={1} />
                                                                <p style={{ height: '1rem', fontSize: "10px" }}> Category </p>
                                                            </div>
                                                            Social Media Monitoring
                                                        </p>
                                                    </div>
                                                    <div style={{ height: "" }}>
                                                        <p style={{ display: "flex", height: "100%" }}>
                                                            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "3vw", width: "7rem", height: "130%" }}>
                                                                <Icon path={mdiAccountMultiple} size={1} />
                                                                <p style={{ height: '1rem', fontSize: "10px" }}> Sub-Category</p>
                                                            </div>
                                                            <div style={{ backgroundColor: "white", display: "flex", width: "60%", height: "80%" }}>
                                                                <MDBAccordion alwaysOpen initialActive={0} style={{ width: "100%" }} className="track-acc">
                                                                    <MDBAccordionItem collapseId={1} headerTitle={categories[index][0]} style={{ maxHeight: "fit-content" }}>
                                                                        <div style={{ display: "flex",flexWrap:"wrap" }}>
                                                                            {categories[index].slice(1).map((item, itemIndex) => (
                                                                                <div key={itemIndex}>{item},</div>
                                                                            ))}
                                                                        </div>
                                                                    </MDBAccordionItem>
                                                                </MDBAccordion>
                                                            </div>
                                                        </p>
                                                    </div>
                                                    <div style={{ height: "2.5rem" }}>
                                                        <p style={{ display: "flex" }}>
                                                            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "3vw", width: "7rem" }}>
                                                                <FaHourglass />
                                                                <p style={{ height: '1rem', fontSize: "10px" }}> Price Type</p>
                                                            </div>
                                                            Project Basis
                                                        </p>
                                                    </div>
                                                    <div style={{ height: "1.5rem", display: "flex" }}>
                                                        <MDBAccordion alwaysOpen initialActive={0} style={{ width: "60%" }}>
                                                            <MDBAccordionItem collapseId={1} headerTitle="Project Description">
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipiscing elit, sed do eiusmod tempor
                                                                incididunt ut labore et dolore magna aliqu
                                                                a. Ut enim ad minim veniam, quis nostrud e
                                                                xercitation ullamco laboris nisi ut aliquip ex
                                                                ea commodo consequat. Duis aute irure dolo.
                                                            </MDBAccordionItem>
                                                        </MDBAccordion>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                                <MDBBtn style={{ backgroundColor: "#FF6F00", height: "2rem", width: "30%", borderRadius: "50px", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={m ? (event) => handleTrack1(event, 2) : handleTracka}>
                                                    <MDBIcon fas icon="lock" size="1x" />
                                                    {m ? "Message" : "Applicants"}
                                                </MDBBtn>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCol>
                                </span>
                            </MDBCard>
                        ))}
                    </span>)}
            </>)}
            {tracki && (
                <div style={{
                    width: '100%',
                    borderRadius: '10px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: "column",
                    alignContent: "start",
                    alignItems: 'center',
                    color: "white"
                }}>
                    <Track onClose={handleTrack2} /></div>
            )}
            {track1 && (
                <div style={{
                    width: '100%',
                    borderRadius: '10px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: "column",
                    alignContent: "start",
                    alignItems: 'center',
                    color: "white"
                }}>
                    <Track1 onClose={handleTrack2} /></div>
            )}
        </div>);
};

export default Tracking;