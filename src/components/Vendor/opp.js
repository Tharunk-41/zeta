import React, { useState } from "react";
import { MDBBtn, MDBCardBody, MDBCol, MDBIcon, MDBCard, MDBCardTitle, MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { IconContext } from 'react-icons';
import { MdSearch, MdSave, MdFilter, MdSort } from 'react-icons/md';
import { mdiWeb, mdiAccountMultiple } from '@mdi/js';
import { Icon } from '@mdi/react';


const Opp = () => {
    const titles = ['Promoting Vegan Skincare Products', 'Promoting Vegan Skincare Products'];
    const categories = [['Electronics', 'Clothing', 'Home Appliances'], ['Books', 'Stationery'], ['Furniture', 'Decor', 'Kitchenware']]
    const [searchTerm, setSearchTerm] = useState('');
    const [app, setApp] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handlePopupButton = (event, a) => {
        event.preventDefault();
        setShowPopup(a);
    };
    const stapp = (event, a) => {
        event.preventDefault();
        setApp(a);
    };
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredTitles = titles.filter((title) =>
        title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (<>
        {!app && (
            <div style={{ width: "100%", overflowY: 'scroll' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', justifyContent: "center" }}>
                    <IconContext.Provider value={{ size: '1.5rem' }}>
                        <MdSearch />
                    </IconContext.Provider>
                    <input
                        type="text"
                        placeholder="Search Oppurtunity"
                        value={searchTerm}
                        onChange={handleSearch}
                        style={{ marginLeft: '0.5rem' }}
                    />
                    <div style={{ marginLeft: '0.5rem' }}>
                        <IconContext.Provider value={{ size: '1.5rem' }}>
                            <MdSave />
                        </IconContext.Provider>
                    </div>
                    <div style={{ marginLeft: '0.5rem' }}>
                        <IconContext.Provider value={{ size: '1.5rem' }}>
                            <MdFilter />
                        </IconContext.Provider>
                    </div>
                    <div style={{ marginLeft: '0.5rem' }}>
                        <IconContext.Provider value={{ size: '1.5rem' }}>
                            <MdSort />
                        </IconContext.Provider>
                    </div>
                </div>
                <span style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', justifyContent: "center", flexDirection: "column" }}>
                    {filteredTitles.map((title, index) => (
                        <React.Fragment key={index}>
                            <MDBCard
                                key={index}
                                style={{
                                    display: 'flex',
                                    width: '80%',
                                    marginTop: "1rem",
                                    height: '40%',
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
                                                                        <div style={{ display: "flex", flexWrap: "wrap" }}>
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
                                                                <MDBIcon fas icon="tag" />
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
                                                <MDBBtn style={{ backgroundColor: "#FF6F00", height: "2rem", width: "15vw", borderRadius: "50px" }} onClick={(event) => stapp(event, true)}>
                                                    Apply
                                                </MDBBtn>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCol>
                                </span>
                            </MDBCard>
                            {index !== filteredTitles.length - 1 && (
                                <MDBCard
                                    style={{
                                        display: 'flex',
                                        width: '80%',
                                        marginTop: "1rem",
                                        minHeight: "30vh",
                                        backgroundColor: '#002A5C',
                                        borderBottomLeftRadius: '40px',
                                        borderTopRightRadius: '40px',
                                        borderTopLeftRadius: '0px',
                                        borderBottomRightRadius: '0px',
                                        overflowY: "scroll"
                                    }}>
                                    <MDBCardTitle style={{ borderBottom: "1px solid #FF6F00", color: "white", fontSize: "30px", justifyContent: "center" }}>ADS</MDBCardTitle>
                                    {/* Add styling for empty card content */}
                                </MDBCard>
                            )}
                        </React.Fragment>
                    ))}</span>
            </div>)}
        {app && (<>
            <div style={{ display: "flex", backgroundColor: "#002A5C", height: "10vh", borderRadius: "10px", width: "90%", color: "white", alignItems: "center", justifyContent: "space-evenly" }}>
                <MDBBtn size="md" style={{ backgroundColor: "transparent", justifySelf: "center", color: "white", fontSize: "30px", border: "none" }} onClick={(event) => stapp(event, false)}>
                    {'<'}
                </MDBBtn>
                <h2 style={{ minWidth: "90%", display: "flex", justifyContent: "center" }}><MDBIcon fas icon="tag" />Pricing Details</h2>
            </div>
            <div style={{ width: "75%" }}>
                <h1>Price Time</h1>
                <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", borderRadius: "15px", height: "6vh" }}>
                    <MDBIcon fas icon="tag" />
                    One Time
                </span>
            </div>
            <div style={{ width: "75%" }}>
                <h1> Price</h1>
                <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                    <MDBIcon fas icon="rupee-sign" />
                    <input type="Number" style={{ display: "flex", width: "80%", marginLeft: "1rem", marginRight: "1rem" }} disabled placeholder="2800/-"></input></span></div>
            <div style={{ width: "75%" }}>
                <h1> Completion Time</h1>
                <span style={{ display: "flex", backgroundColor: "#D9D9D9", alignItems: "center", justifyContent: "space-evenly", borderRadius: "15px" }}>
                    <MDBIcon fas icon="hourglass" />
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
            <div style={{ width: "55vw", display: "flex", justifyContent: "center", padding: "2rem" }}>
                <MDBBtn size="lg" t style={{ backgroundColor: "#FF6F00", justifySelf: "center", width: "10rem" }} onClick={(event) => { handlePopupButton(event, true); stapp(event, false) }}>
                    Submit
                </MDBBtn>
            </div>
        </>)
        }
        {showPopup && (
            <div className="popup">
                <div className="popup-content">
                    <h2>Applied</h2>
                    <p>You have successfully applied to this oppourtunity.</p>
                    <MDBBtn size="lg" style={{ backgroundColor: "#FF6F00", justifySelf: "center" }} onClick={(event) => handlePopupButton(event, false)}>
                        Home
                    </MDBBtn>
                </div>
            </div>
        )}
    </>
    );
};
export default Opp;
