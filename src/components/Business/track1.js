import React, { useState } from "react";
import "./Details.css";
import { MDBBtn, MDBCol, MDBIcon, MDBCard, MDBCardText, MDBCardBody, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu } from "mdb-react-ui-kit";
import amazon_icon from "../../assets/amazon_icon.png";
import { FaHourglass } from 'react-icons/fa';
import { BiSort } from 'react-icons/bi';
import MultiRangeSlider from "multi-range-slider-react";

const Tracking = ({ onClose }) => {
    const [showPopup, setShowPopup] = useState(true);
    const [showPopup1, setShowPopup1] = useState(false);
    const [credit, setCredit] = useState(true);
    const [activeButton, setActiveButton] = useState(2);
    const [shortlistedVendor, setShortlistedVendor] = useState(null);
    const [sortingOption, setSortingOption] = useState("price");
    const [ratingSliderValue, setRatingSliderValue] = useState([0, 5]); // Add this line
    const [priceSliderValue, setPriceSliderValue] = useState([0, 25000]);   // Add this line
    const [completionSliderValue, setCompletionSliderValue] = useState([0, 100]); // Add this line

    const sortingOptions = [
        { value: "price", label: "Price" },
        { value: "completionTimeInDays", label: "Completion Time" },
        { value: "starRating", label: "Star Rating" },
    ];

    const [vendorData, setVendorData] = useState([
        {
            id: 1,
            vendorName: "T.T info Tech",
            priceType: "Project Basis",
            price: 5000,
            completionTimeInDays: 15,
            starRating: 5,
            imageUrl: amazon_icon,
            shortlist: 0
        },
        {
            id: 2,
            vendorName: "J.G Solutions",
            priceType: "Hourly Rate",
            price: 50,
            completionTimeInDays: 7,
            starRating: 4,
            imageUrl: amazon_icon,
            shortlist: 0
        },
        {
            id: 3,
            vendorName: "T.T info Tech",
            priceType: "Fixed Price",
            price: 3000,
            completionTimeInDays: 10,
            starRating: 3,
            imageUrl: amazon_icon,
            shortlist: 0
        },
    ]);
    const [filteredVendorData, setFilteredVendorData] = useState(vendorData);

    const handlePopupButton = () => {
        setCredit(!credit);
    };
    const handlePopup1Button = () => {
        setShowPopup(false);
    };
    const handleButtonClick = (buttonNumber) => {
        if (buttonNumber !== activeButton) {
            setActiveButton(buttonNumber);
        }
    };
    const Shortlist = (vendorId) => {
        setShowPopup1(true);
        const selectedVendor = filteredVendorData.find((vendor) => vendor.id === vendorId);
        setShortlistedVendor(selectedVendor);
        const updatedVendorData = filteredVendorData.map((vendor) => {
            if (vendor.id === vendorId) {
                return { ...vendor, shortlist: 1 };
            }
            return vendor;
        });
        setFilteredVendorData(updatedVendorData);
        setVendorData(updatedVendorData);
    };
    const handlePopup = () => {
        setShowPopup1(false);
    }
    const sortVendorData = () => {
        const sortedData = [...filteredVendorData].sort((a, b) => {
            if (a[sortingOption] < b[sortingOption]) return -1;
            if (a[sortingOption] > b[sortingOption]) return 1;
            return 0;
        });
        setFilteredVendorData(sortedData);

    };
    const handleSortChange = (event) => {
        const selectedOption = event.target.value;
        setSortingOption(selectedOption);
    };
    const handleClose = (event, n) => {
        event.preventDefault();
        onClose(n);
    };

    const handleFilterApply = () => {
        const filteredData = vendorData.filter(vendor => {
            const rating = vendor.starRating;
            const price = vendor.price;
            const completion = vendor.completionTimeInDays;
            return (
                rating >= parseInt(ratingSliderValue[0]) &&
                rating <= parseInt(ratingSliderValue[1]) &&
                price >= parseInt(priceSliderValue[0]) &&
                price <= parseInt(priceSliderValue[1]) &&
                completion >= parseInt(completionSliderValue[0]) &&
                completion <= parseInt(completionSliderValue[1])
            );
        });
        setFilteredVendorData(filteredData);
    };

    return (<>
        {showPopup && (<div>
            <div className="popup">
                <div className="popup-content">
                    <h3>{credit ? "Make payment to view details" : "Applicants List Opened, Only 07 Post Credits Remaining"}</h3>
                    <MDBBtn size="lg" style={{ backgroundColor: "#FF6F00", justifySelf: "center" }} onClick={credit ? (handlePopupButton) : (handlePopup1Button)}>
                        {credit ? "Payment Details" : "View Applicants"}
                    </MDBBtn>
                </div>
            </div>
        </div>)}
        {showPopup1 && (<div>
            <div className="popup">
                <div className="popup-content" style={{ width: "50%" }}>
                    <h3>Successfully Used Your 01 Post Credit, 03 remaining</h3>
                    <img src={shortlistedVendor.imageUrl} style={{ borderRadius: "50px", width: "10%" }} alt={shortlistedVendor.vendorName} />
                    <h4>{shortlistedVendor.vendorName}</h4>
                    <h4>Shortlist more with Shortlist Credit</h4>
                    <MDBBtn size="lg" style={{ backgroundColor: "#FF6F00", justifySelf: "center" }} onClick={handlePopup}>
                        Continue
                    </MDBBtn>
                </div>
            </div>
        </div>)}
        {!showPopup && !showPopup1 && (<>
            <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", width: "80%" }}>
                <MDBBtn onClick={() => handleButtonClick(1)} style={{ width: "50%", backgroundColor: activeButton === 1 ? '#FF6F00' : 'transparent', color: activeButton === 1 ? 'white' : 'black' }}>Shortlist</MDBBtn>
                <MDBBtn onClick={() => handleButtonClick(2)} style={{ width: "50%", backgroundColor: activeButton === 2 ? '#FF6F00' : 'transparent', color: activeButton === 2 ? 'white' : 'black' }}><MDBIcon fas icon="unlock" /> Applicants</MDBBtn>
                <MDBDropdown>
                    <MDBDropdownToggle style={{ color: "white", backgroundColor: "transparent", border: "none", textTransform: "none", fontFamily: "Inria Serif", boxShadow: "none", fontSize: "20px", paddingTop: "0px", paddingRight: "10px", paddingBottom: "5px", paddingLeft: "10px" }}>
                        <BiSort size="2rem" style={{ backgroundColor: "transparent", marginLeft: "1rem", color: "black" }} />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu style={{ border: "2px solid black", width: "20vw", fontFamily: "Inria Serif", fontSize: "10px", display: "flex", flexDirection: "column" }}>
                        {sortingOptions.map(option => (
                            <div key={option.value} style={{ display: 'flex', alignItems: 'center', margin: '0.5rem 0' }}>
                                <input
                                    type="radio"
                                    value={option.value}
                                    checked={sortingOption === option.value}
                                    onChange={handleSortChange}
                                    style={{ width: "15%" }}
                                />
                                <label style={{ fontSize: "25px", marginLeft: "1rem" }}>{option.label}</label>
                            </div>
                        ))}
                        <MDBBtn onClick={sortVendorData} style={{ alignSelf: "center" }}>Apply</MDBBtn>
                    </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown>
                    <MDBDropdownToggle style={{ color: "white", backgroundColor: "transparent", border: "none", textTransform: "none", fontFamily: "Inria Serif", boxShadow: "none", fontSize: "20px", paddingTop: "0px", paddingRight: "10px", paddingBottom: "5px", paddingLeft: "10px" }}>
                        <MDBIcon fas icon="filter" color="black" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu style={{ border: "2px solid black", width: "20vw", fontFamily: "Inria Serif", fontSize: "10px", display: "flex", flexDirection: "column" }}>
                        <div>
                            <h4>Rating</h4>
                            <MultiRangeSlider
                                min={0}
                                max={5}
                                step={1}
                                ruler={false}
                                minValue={ratingSliderValue[0]}
                                maxValue={ratingSliderValue[1]}
                                onChange={(e) => {
                                    setRatingSliderValue([e.minValue, e.maxValue]);
                                }}
                                style={{ boxShadow: "0px 0px 0px", border: "0px" }}
                            />
                        </div>
                        <div>
                            <h4>Price</h4>
                            <MultiRangeSlider
                                min={0}
                                max={25000}
                                step={1000}
                                ruler={false}
                                minValue={priceSliderValue[0]}
                                maxValue={priceSliderValue[1]}
                                onChange={(e) => {
                                    setPriceSliderValue([e.minValue, e.maxValue]);
                                }}
                                style={{ boxShadow: "0px 0px 0px", border: "0px" }}
                            />
                        </div>
                        <div>
                            <h4>Completion Type</h4>
                            <MultiRangeSlider
                                min={0}
                                max={100}
                                step={1}
                                ruler={false}
                                minValue={completionSliderValue[0]}
                                maxValue={completionSliderValue[1]}
                                onChange={(e) => {
                                    setCompletionSliderValue([e.minValue, e.maxValue]);
                                }}
                                style={{ boxShadow: "0px 0px 0px", border: "0px" }}
                            />
                        </div>

                        <MDBBtn onClick={handleFilterApply} style={{ alignSelf: "center" }}>Apply</MDBBtn>
                    </MDBDropdownMenu>
                </MDBDropdown>
            </span>
            {activeButton === 1 && (
                <div style={{ width: "100%", overflowX: "scroll", height: "93%" }}>
                    {filteredVendorData.map((v) => (<>
                        {v.shortlist === 1 && (
                            <MDBCard
                                key={v.id}
                                style={{
                                    display: 'flex',
                                    width: '80%',
                                    marginLeft: '7vw',
                                    marginTop: "1rem",
                                    height: '40%',
                                    backgroundColor: '#002A5C',
                                    borderBottomLeftRadius: '40px',
                                    borderTopRightRadius: '40px',
                                    borderTopLeftRadius: '0px',
                                    borderBottomRightRadius: '0px',
                                    overflowY: "scroll",
                                }}>
                                <div style={{ width: "100%", height: "90%", display: "flex", flexWrap: "wrap", borderBottom: "1px solid #FF6F00" }}>
                                    <MDBCol style={{ paddingLeft: "2rem" }}>
                                        <img
                                            src={v.imageUrl}
                                            alt="Card"
                                            style={{ height: '10rem', objectFit: 'cover', borderRadius: "30px" }}
                                        />
                                        <MDBCardText style={{ color: "white", marginLeft: "2rem" }}>{v.vendorName}</MDBCardText>
                                    </MDBCol>
                                    <MDBCol style={{ width: "80rem" }}>
                                        <MDBCardBody style={{ color: 'white', width: "100%" }}>
                                            <div style={{ display: 'flex' }}>
                                                <div style={{ width: "35vw" }}>
                                                    <div style={{ height: "30%" }}>
                                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                                            <div style={{ display: "flex", alignItems: "center", flexDirection: "row", marginRight: "3vw", width: "100%" }}>
                                                                <p style={{ height: '1rem', fontSize: "20px" }}> Price Type </p>
                                                            </div>
                                                            <span style={{ backgroundColor: "#f5f5f5b2", borderRadius: "5px", color: "black", width: "75%", paddingLeft: "1rem" }}><MDBIcon fas icon="tag" /> {v.priceType}</span>
                                                        </div>
                                                    </div>
                                                    <div style={{ height: "30%", marginBottom: "10px" }}>
                                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                                            <div style={{ display: "flex", alignItems: "center", flexDirection: "row", marginRight: "3vw", width: "100%" }}>
                                                                <p style={{ height: '1rem', fontSize: "20px" }}> Price</p>
                                                            </div>
                                                            <span style={{ backgroundColor: "#f5f5f5b2", borderRadius: "5px", color: "black", width: "75%", paddingLeft: "1rem" }}><MDBIcon fas icon="rupee-sign" /> {v.price}</span>
                                                        </div>
                                                    </div>
                                                    <div style={{ height: "30%", marginBottom: "10px" }}>
                                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                                            <div style={{ display: "flex", alignItems: "center", flexDirection: "row", marginRight: "3vw", width: "100%" }}>
                                                                <p style={{ height: '1rem', fontSize: "20px" }}> Completion Time</p>
                                                            </div>
                                                            <span style={{ backgroundColor: "#f5f5f5b2", borderRadius: "5px", color: "black", width: "75%", paddingLeft: "1rem" }}><FaHourglass /> {v.completionTimeInDays} days</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ display: "flex", justifyItems: "right", alignItems: "start" }}>
                                                    <div style={{ backgroundColor: "white", height: "2rem", width: "4rem", borderRadius: "50px", display: "flex", color: "black", alignItems: "center", justifyContent: "center" }}>
                                                        <MDBIcon fas icon="star" />
                                                        {v.starRating}
                                                    </div>
                                                </div>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCol>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "1rem", marginBottom: "1rem", height: "10%" }}>
                                    <MDBBtn style={{ backgroundColor: "#FF6F00", height: "2rem", width: "20%", borderRadius: "50px", display: "flex" }}>
                                        View Catalogue
                                    </MDBBtn>
                                    <MDBBtn onClick={(event) => handleClose(event, "John Doe")}
                                        style={{ backgroundColor: "#FF6F00", height: "2rem", width: "20%", borderRadius: "50px", display: "flex" }}>
                                        Message
                                    </MDBBtn>
                                </div>
                            </MDBCard>
                        )
                        }</>
                    ))}
                </div>
            )}
            {activeButton === 2 && (
                <div style={{ width: "100%", overflowX: "scroll", height: "93%" }}>
                    {filteredVendorData.map((v) => (
                        <MDBCard
                            key={v.id}
                            style={{
                                display: 'flex',
                                width: '80%',
                                marginLeft: '7vw',
                                marginTop: "1rem",
                                height: '40%',
                                backgroundColor: '#002A5C',
                                borderBottomLeftRadius: '40px',
                                borderTopRightRadius: '40px',
                                borderTopLeftRadius: '0px',
                                borderBottomRightRadius: '0px',
                                overflowY: "scroll"
                            }}>
                            <span style={{ width: "100%", height: "90%", display: "flex", flexWrap: "wrap", borderBottom: "1px solid #FF6F00" }}>
                                <MDBCol style={{ paddingLeft: "2rem" }}>
                                    <img
                                        src={v.imageUrl}
                                        alt="Card"
                                        style={{ height: '10rem', objectFit: 'cover', borderRadius: "30px" }}
                                    />
                                    <MDBCardText style={{ color: "white", marginLeft: "2rem" }}>{v.vendorName}</MDBCardText>
                                </MDBCol>
                                <MDBCol style={{ width: "80rem" }}>
                                    <MDBCardBody style={{ color: 'white', width: "100%" }}>
                                        <div style={{ display: 'flex' }}>
                                            <div style={{ width: "35vw" }}>
                                                <div style={{ height: "30%" }}>
                                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                                        <div style={{ display: "flex", alignItems: "center", flexDirection: "row", marginRight: "3vw", width: "100%" }}>
                                                            <p style={{ height: '1rem', fontSize: "20px" }}> Price Type </p>
                                                        </div>
                                                        <span style={{ backgroundColor: "#f5f5f5b2", borderRadius: "5px", color: "black", width: "75%", paddingLeft: "1rem" }}><MDBIcon fas icon="tag" /> {v.priceType}</span>
                                                    </div>
                                                </div>
                                                <div style={{ height: "30%", marginBottom: "10px" }}>
                                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                                        <div style={{ display: "flex", alignItems: "center", flexDirection: "row", marginRight: "3vw", width: "100%" }}>
                                                            <p style={{ height: '1rem', fontSize: "20px" }}> Price</p>
                                                        </div>
                                                        <span style={{ backgroundColor: "#f5f5f5b2", borderRadius: "5px", color: "black", width: "75%", paddingLeft: "1rem" }}><MDBIcon fas icon="rupee-sign" /> {v.price}</span>
                                                    </div>
                                                </div>
                                                <div style={{ height: "30%", marginBottom: "10px" }}>
                                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                                        <div style={{ display: "flex", alignItems: "center", flexDirection: "row", marginRight: "3vw", width: "100%" }}>
                                                            <p style={{ height: '1rem', fontSize: "20px" }}> Completion Time</p>
                                                        </div>
                                                        <span style={{ backgroundColor: "#f5f5f5b2", borderRadius: "5px", color: "black", width: "75%", paddingLeft: "1rem" }}><FaHourglass /> {v.completionTimeInDays} days</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", justifyItems: "right", alignItems: "start" }}>
                                                <div style={{ backgroundColor: "white", height: "2rem", width: "4rem", borderRadius: "50px", display: "flex", color: "black", alignItems: "center", justifyContent: "center" }}>
                                                    <MDBIcon fas icon="star" />
                                                    {v.starRating}
                                                </div>
                                            </div>
                                        </div>
                                    </MDBCardBody>
                                </MDBCol>
                            </span>
                            <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "1rem", marginBottom: "1rem" }}>
                                <MDBBtn style={{ backgroundColor: "#FF6F00", height: "2rem", width: "20%", borderRadius: "50px", display: "flex" }}>
                                    View Catalogue
                                </MDBBtn>
                                <MDBBtn onClick={() => Shortlist(v.id)}
                                    style={{ backgroundColor: "#FF6F00", height: "2rem", width: "20%", borderRadius: "50px", display: "flex" }} disabled={v.shortlist === 1}>
                                    {v.shortlist === 1 ? "Shortlisted" : "Shortlist"}
                                </MDBBtn>
                            </div>
                        </MDBCard>
                    ))}
                </div>)}
        </>
        )}
    </>
    );


};
export default Tracking;