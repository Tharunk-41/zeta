import React, { useState } from "react";
import { MDBBtn, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { FaHourglass } from 'react-icons/fa';
import v from "../../assets/Vector.png";

const Cat = () => {
    const [activeButton, setActiveButton] = useState('applied');
    const [postTitle, setPostTitle] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [priceType, setPriceType] = useState('');
    const [price, setPrice] = useState('');
    const [durationValue, setDurationValue] = useState('1');
    const [durationUnit, setDurationUnit] = useState('Month');
    const [supportMaintenance, setSupportMaintenance] = useState('');
    const [serviceCustomization, setServiceCustomization] = useState('');
    const [cb1, setCb1] = useState(false);
    const [cb2, setCb2] = useState(false);

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const handlePostButtonClick = () => {
        setActiveButton('Shortlisted')
    };
    const resetAllToNull = () => {
        setPostTitle(null);
        setCategory(null);
        setSubCategory(null);
        setServiceDescription(null);
        setPriceType(null);
        setPrice(null);
        setDurationValue(null);
        setDurationUnit(null);
        setSupportMaintenance(null);
        setServiceCustomization(null);
        setCb1(false);
        setCb2(false);
    };

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", marginBottom: '1rem' }}>
                <MDBBtn size="lg" style={{
                    backgroundColor: activeButton === 'applied' ? "#FF6F00" : "#D9D9D9", color: activeButton !== "applied" ? "black" : "white", justifySelf: "center", width: "30vw",
                }} onClick={() => handleButtonClick('applied')}
                >
                    Add Catalog
                </MDBBtn>
                <MDBBtn size="lg" style={{
                    backgroundColor: activeButton === 'Shortlisted' ? "#FF6F00" : "#D9D9D9", color: activeButton !== "Shortlisted" ? "black" : "white", justifySelf: "center", width: "30vw",
                }} onClick={() => handleButtonClick('Shortlisted')}>
                    View Catalog
                </MDBBtn>
            </div>
            {activeButton === "applied" && (
                <div style={{ width: "100%", overflowY: "scroll", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>
                    <div style={{ width: "75%" }}>
                        <h1>Post title</h1>
                        <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                            <MDBIcon far icon="address-card" size="2x" />
                            <input type="text" style={{ width: "80%" }} value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
                        </span>
                    </div>
                    <div style={{ width: "75%" }}>
                        <h1>Category</h1>
                        <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                            <MDBIcon fas icon="th-large" size="2x" />
                            <input type="text" style={{ width: "80%" }} value={category} onChange={(e) => setCategory(e.target.value)} />
                        </span>
                    </div>
                    <div style={{ width: "75%" }}>
                        <h1>Sub Category</h1>
                        <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                            <img src={v} alt="" />
                            <div><select style={{ width: "45vw" }} value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                            </select></div></span>
                    </div>
                    <div style={{ width: "75%" }}>
                        <h1>Service Description</h1>
                        <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                            <input type="text" style={{ width: "100%" }} value={serviceDescription} onChange={(e) => setServiceDescription(e.target.value)} />
                        </span>
                    </div>
                    <div style={{ width: "75%" }}>
                        <h1>Price Type</h1>
                        <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                            <MDBIcon fas icon="tag" size="2x" />
                            <input type="text" style={{ width: "80%" }} value={priceType} onChange={(e) => setPriceType(e.target.value)} />
                        </span>
                    </div>
                    <div style={{ width: "75%" }}>
                        <h1> Price</h1>
                        <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                            <MDBIcon fas icon="money-bill" size="2x" />
                            <select style={{ width: "10%" }}>
                                <option value="">Ru</option>
                                <option value="USD">Option 1</option>
                                <option value="EUR">Option 2</option>
                                <option value="GBP">Option 3</option>
                            </select>
                            <input type="Number" style={{ width: "20vw", marginLeft: "1rem", marginRight: "1rem" }} value={price} onChange={(e) => setPrice(e.target.value)} />
                        </span>
                    </div>
                    <div style={{ width: "75%" }}>
                        <h1> Duration</h1>
                        <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                            <FaHourglass size={"25px"} />
                            <select type="Number" style={{ width: "20vw", marginLeft: "1rem", marginRight: "1rem" }} value={durationValue} onChange={(e) => setDurationValue(e.target.value)}>
                                <option value="1">01</option>
                                <option value="2">02</option>
                                <option value="3">03</option>
                                <option value="4">04</option>
                            </select>
                            <select style={{ width: "25vw" }} value={durationUnit} onChange={(e) => setDurationUnit(e.target.value)} placeholder="Day">
                                <option value="1">Day</option>
                                <option value="2">Month</option>
                                <option value="3">Year</option>
                            </select>
                        </span>
                    </div>
                    <div style={{ width: "75%" }}>
                        <h1 style={{ display: "flex", alignItems: "center" }}>Support & Maintaniance<input type="checkbox" style={{ width: "20px", marginLeft: "5vw" }} checked={cb1} onChange={() => setCb1(!cb1)} /></h1>
                        <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                            <input type="text" style={{ width: "80%", opacity: cb1 ? 1 : 0 }} value={supportMaintenance} onChange={(e) => setSupportMaintenance(e.target.value)} disabled={!cb1} />
                        </span>
                    </div>
                    <div style={{ width: "75%" }}>
                        <h1 style={{ display: "flex", alignItems: "center" }}>Service Customization<input type="checkbox" style={{ width: "20px", marginLeft: "5vw" }} checked={cb2} onChange={() => setCb2(!cb2)} /></h1>
                        <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                            <input type="text" style={{ width: "80%", opacity: cb2 ? 1 : 0 }} value={serviceCustomization} onChange={(e) => setServiceCustomization(e.target.value)} disabled={!cb2} />
                        </span>
                    </div>
                    <div style={{ width: "55vw", display: "flex", justifyContent: "center", padding: "2rem" }}>
                        <MDBBtn size="lg" type="submit" style={{ backgroundColor: "#FF6F00", justifySelf: "center", width: "10rem" }} onClick={handlePostButtonClick}>
                            Post
                        </MDBBtn>
                    </div>
                </div>
            )}
            {activeButton === "Shortlisted" && (
                <MDBCard
                    style={{
                        display: 'flex',
                        width: '80%',
                        marginTop: "1rem",
                        height: '85%',
                        backgroundColor: '#002A5C',
                        borderBottomLeftRadius: '40px',
                        borderTopRightRadius: '40px',
                        borderTopLeftRadius: '0px',
                        borderBottomRightRadius: '0px',
                        overflowY: "scroll"
                    }}>
                    <MDBCardTitle style={{ borderBottom: "1px solid #FF6F00", color: "white", fontSize: "30px", justifyContent: "space-between", display: "flex", padding: "0px 5vw" }}>{postTitle || "NA"}<MDBIcon fas icon="file" /></MDBCardTitle>
                    <span style={{ width: "100%", height: "90%", display: "flex", flexWrap: "wrap" }}>
                        <MDBCol style={{ width: "100%" }}>
                            <MDBCardBody style={{ color: 'white', width: "100%" }}>
                                <div style={{ display: 'flex', flexDirection: "column", minHeight: "90%" }}>
                                    <div style={{ width: "100%", height: "100%" }}>
                                        <div style={{ height: "2.5rem" }}>
                                            <p style={{ display: "flex" }}>
                                                <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "3vw", width: "7rem" }}>
                                                    <MDBIcon fas icon="th-large" />
                                                    <p style={{ height: '1rem', fontSize: "10px" }}> Category </p>
                                                </div>
                                                {category || "NA"}
                                            </p>
                                        </div>
                                        <div style={{ height: "" }}>
                                            <div style={{ display: "flex", height: "100%" }}>
                                                <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "3vw", width: "7rem", height: "130%" }}>
                                                    <MDBIcon fas icon="folder-open" />
                                                    <p style={{ height: '1rem', fontSize: "10px" }}> Sub-Category</p>
                                                </div>
                                                <div style={{ backgroundColor: "white", display: "flex", width: "60%", height: "80%", color: "black" }}>
                                                    {subCategory || "NA"}
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ height: "2.5rem", display: "flex", justifyContent: "space-between" }}>
                                            <div style={{ display: "flex" }}>
                                                <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "1vw", width: "7rem" }}>
                                                    <MDBIcon fas icon="tag" />
                                                    <p style={{ height: '1rem', fontSize: "10px" }}> Price Type</p>
                                                </div>
                                                {priceType || "NA"}
                                            </div>
                                            <div style={{ display: "flex", marginRight: "7vw" }}>
                                                <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "1vw", width: "7rem" }}>
                                                    <MDBIcon fas icon="money-bill" />
                                                    <p style={{ height: '1rem', fontSize: "10px" }}> Price</p>
                                                </div>
                                                {price || "NA"}
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", width: "100%" }}>
                                            <MDBAccordion alwaysOpen initialActive={0} style={{ width: "100%" }}>
                                                <MDBAccordionItem collapseId={1} headerTitle="Service Description">
                                                    {serviceDescription || "NA"}
                                                </MDBAccordionItem>
                                            </MDBAccordion>
                                        </div>
                                        <div style={{ height: "2.5rem", marginTop: "2vw" }}>
                                            <div style={{ display: "flex" }}>
                                                <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "3vw", width: "7rem" }}>
                                                    <MDBIcon fas icon="hourglass" />
                                                    <p style={{ height: '1rem', fontSize: "10px" }}> Duration </p>
                                                </div>
                                                {durationValue && durationUnit ? `${durationValue} ${durationUnit}` : "NA"}
                                            </div>
                                        </div>
                                        <div style={{ marginTop: "2vw" }}>
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "3vw", width: "10rem" }}>
                                                    <MDBIcon fas icon="headset" />
                                                    <p style={{ height: '1rem', fontSize: "10px" }}> Support & maintainence </p>
                                                </div>
                                                <input type="checkbox" style={{ width: "20px", marginLeft: "5vw" }} checked={cb1} disabled />
                                                <MDBAccordion alwaysOpen initialActive={0} style={{ width: "40%" }}>
                                                    <MDBAccordionItem collapseId={1} headerTitle="Description">
                                                        {supportMaintenance || "NA"}
                                                    </MDBAccordionItem>
                                                </MDBAccordion>
                                            </div>
                                        </div>
                                        <div style={{ height: "2.5rem", marginTop: "2vw" }}>
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "3vw", width: "10rem" }}>
                                                    <MDBIcon fas icon="tools" />
                                                    <p style={{ height: '1rem', fontSize: "10px" }}> Support & maintainence </p>
                                                </div>
                                                <input type="checkbox" style={{ width: "20px", marginLeft: "5vw" }} checked={cb2} disabled />
                                                <MDBAccordion alwaysOpen initialActive={0} style={{ width: "40%" }}>
                                                    <MDBAccordionItem collapseId={1} headerTitle="Description">
                                                        {serviceCustomization || "NA"}
                                                    </MDBAccordionItem>
                                                </MDBAccordion>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCol>
                    </span>
                    <div style={{ display: "flex", justifyContent: "space-evenly", margin: "2rem 0px" }}>
                        <MDBBtn style={{ backgroundColor: "#FF6F00", height: "3rem", width: "15vw", borderRadius: "50px" }} onClick={() => handleButtonClick('applied')}>
                            Edit
                        </MDBBtn>
                        <MDBBtn style={{ backgroundColor: "#FF6F00", height: "3rem", width: "15vw", borderRadius: "50px" }} onClick={resetAllToNull}>
                            Delete
                        </MDBBtn>
                    </div>
                </MDBCard>
            )}
        </>
    );
};

export default Cat;