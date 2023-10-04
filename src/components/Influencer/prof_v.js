import React, { useState } from "react";
import { MDBBtn, MDBCol, MDBIcon, MDBCard, MDBCardTitle, MDBCardText, MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { FaStar } from 'react-icons/fa';
import { BiSort } from 'react-icons/bi';
import { Link } from "react-router-dom";
const Prof = () => {
    const [button, setButton] = useState('portfolio');
    const [sortAsc, setSortAsc] = useState(true);
    const [expandedCards, setExpandedCards] = useState({});
    const [activeButton, setActiveButton] = useState('current');
    const handleButtonClick = (button) => {
        setActiveButton(button);
    }
    const bar = (i, n, activeButton) => {
        if (activeButton === "previous" || activeButton === "current") {
            return (
                <div style={{ fontSize: "25px", alignItems: "center", display: "flex" }}>
                    <strong>{i}</strong>
                    <strong>{n}</strong>
                </div>
            );
        }
        else {
            return (
                <div style={{ fontSize: "25px", alignItems: "center", display: "flex" }}>
                    <MDBIcon fab icon={i} size="2x" style={{ borderRight: "2px solid black", paddingRight: "2rem", marginRight: "2rem" }} />
                    <strong>{n}</strong>
                </div>
            );
        }
    };
    const bar1 = (i, n, activeButton, button) => {
        if (button === "achieve") {
            return (
                <MDBAccordionItem collapseId={1} headerTitle={bar(i, n, activeButton)} style={{ backgroundColor: "#002A5C", color: "white", marginBottom: "1rem" }} >
                    <div>
                        <div style={{ display: "flex", justifyContent: "flex-start" }}>
                            <MDBBtn size="md" style={{ backgroundColor: "#FF6F00", alignItems: "center", color: "white", borderRadius: "30px", maxWidth: "fit-content" }}>
                                Work Description
                            </MDBBtn>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqu
                                a. Ut enim ad minim veniam, quis nostrud e
                                xercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolo.
                            </p>
                        </div>
                    </div>
                </MDBAccordionItem>);
        }
        else {
            return (
                <MDBAccordionItem collapseId={1} headerTitle={bar(i, n, activeButton)} style={{ backgroundColor: "#002A5C", color: "white", marginBottom: "1rem" }} >
                    <div>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqu
                                a. Ut enim ad minim veniam, quis nostrud e
                                xercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolo.
                            </p>
                        </div>
                    </div>
                </MDBAccordionItem>);
        }
    }
    const bar2 = (i, n, activeButton) => {
        return (
            <MDBAccordionItem collapseId={1} headerTitle={bar(i, n, activeButton)} style={{ backgroundColor: "#002A5C", color: "white", marginBottom: "1rem" }} >
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p>Makeup</p>
                        <p>Skincare</p>
                        <p>Haircare</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <MDBBtn size="md" style={{ backgroundColor: "#FF6F00", alignItems: "center", color: "white", borderRadius: "30px", maxWidth: "fit-content" }}>
                            View Account
                        </MDBBtn>
                    </div>
                </div>
            </MDBAccordionItem>);
    }

    const handleClick = (event, index) => {
        event.preventDefault();
        setExpandedCards((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };
    const renderLimitedText = (text, index) => {
        if (!expandedCards[index]) {
            return text.split(' ').slice(0, 10).join(' ');
        }
        return text;
    };

    const handleSortClick = () => {
        setSortAsc(!sortAsc);
    };

    const titles = ['Work Description', 'Work Description', 'Work Description'];
    const descriptions = ['1st-Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2nd-Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '3rd-Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'];
    const users = [
        {
            id: 1,
            name: "John Doe",
            age: 35,
            role: "Marketing Manager",
            location: "San Francisco",
            languagesKnown: ["English", "German"],
            starRating: 5,
            avatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
        },
        {
            id: 2,
            name: "Jane Smith",
            age: 28,
            role: "Product Designer",
            location: "London",
            languagesKnown: ["English", "Spanish", "French"],
            starRating: 4,
            avatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
        },
        {
            id: 3,
            name: "Michael Johnson",
            age: 42,
            role: "Sales Executive",
            location: "New York",
            languagesKnown: ["English"],
            starRating: 3,
            avatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp",
        },
    ];
    const totalStar = users.reduce((sum, user) => sum + user.starRating, 0);
    const averageStar = totalStar / users.length;
    const stars = Array.from({ length: 5 }, (_, index) => (
        <MDBIcon
            key={index}
            icon={index < averageStar ? 'star' : 'star-o'} // 'star' for filled, 'star-o' for empty
            size="2x"
        />
    ));

    const sortedUsers = users.slice().sort((a, b) => {
        if (sortAsc) {
            return a.starRating - b.starRating; // Ascending order
        } else {
            return b.starRating - a.starRating; // Descending order
        }
    });

    const handleNavbarButton = (event, buttonName) => {
        event.preventDefault();
        setButton(buttonName);
    };
    return (<>
        <div className="container py-3" style={{ height: "100%" }}>
            <div className="card" style={{ borderRadius: "15px", height: "100%", width: "100%", display: "flex", flexDirection: "row" }}>
                <MDBCol style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap", overflowX: "auto" }}>
                    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                        <div style={{ backgroundColor: "white", border: "1px solid #ff6f00", borderRadius: "20px", margin: "1rem", padding: "1rem", height: "30%", overflowX: "auto" }}>
                            <span style={{ height: "100%", display: "flex", overflowX: "scroll" }}>
                                <MDBCol className="d-flex align-items-center justify-content-center">
                                    <div className="d-flex flex-column align-items-center">
                                        <img
                                            src={users[0].avatar}
                                            alt="avatar"
                                            className="d-flex align-self-center me-3"
                                            width="100rem"
                                            height="150rem"
                                        />
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <div>
                                        <h3 style={{ display: "flex", width: "20vw" }}>
                                            {users[0].name}</h3>
                                        <p>{users[0].role}<br />
                                            <MDBIcon far icon="calendar-alt" style={{ marginRight: "10px" }} />{users[0].age}<br />
                                            <MDBIcon fas icon="map-marker-alt" style={{ marginRight: "10px" }} />{users[0].location}</p>
                                        <p style={{ marginTop: "3rem" }}><MDBIcon fas icon="language" style={{ marginRight: "10px" }} />{users[0].languagesKnown.join(",")}</p>
                                    </div>
                                </MDBCol>
                                <MDBCol style={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
                                    <span style={{ fontSize: "25px" }}>
                                        <FaStar style={{ marginRight: "1rem", borderRight: "1px solid black", color: "#FF6F00" }} />
                                        <strong>{users[0].starRating}</strong>
                                    </span>
                                    <Link to="/i/profile" style={{ color: "#FFFFFF", textDecoration: "none", justifySelf: "center", marginTop: "auto", width: "7rem"  }}>
                                        <MDBBtn size="lg" style={{ backgroundColor: "#FF6F00", justifySelf: "center", marginTop: "auto", width: "7rem" }} className="px-3">
                                            Edit
                                        </MDBBtn></Link>
                                </MDBCol>
                            </span>
                        </div>
                        <div style={{ display: "flex", width: "100%", justifyContent: "space-between", height: "10%", flexWrap: "wrap" }} className="p-3">
                            <MDBBtn size="md" style={{ backgroundColor: button === "portfolio" ? "#002A5C" : "white", color: button === "portfolio" ? "white" : "#002A5C", justifySelf: "center", marginTop: "auto", borderRadius: "50px" }} onClick={(event) => handleNavbarButton(event, "portfolio")}>
                                <MDBIcon fas icon="briefcase" style={{ marginRight: "10px" }} />Portfolio
                            </MDBBtn>
                            <MDBBtn size="md" style={{ backgroundColor: button === "category" ? "#002A5C" : "white", color: button === "category" ? "white" : "#002A5C", justifySelf: "center", marginTop: "auto", borderRadius: "50px" }} onClick={(event) => handleNavbarButton(event, "category")}>
                                <MDBIcon fas icon="th-large" style={{ marginRight: "10px" }} />Category
                            </MDBBtn>
                            <MDBBtn size="md" style={{ backgroundColor: button === "collab" ? "#002A5C" : "white", color: button === "collab" ? "white" : "#002A5C", justifySelf: "center", marginTop: "auto", borderRadius: "50px" }} onClick={(event) => handleNavbarButton(event, "collab")}>
                                <MDBIcon fas icon="shopping-cart" style={{ marginRight: "10px" }} />Collabrations
                            </MDBBtn>
                            <MDBBtn size="md" style={{ backgroundColor: button === "acheive" ? "#002A5C" : "white", color: button === "acheive" ? "white" : "#002A5C", justifySelf: "center", marginTop: "auto", borderRadius: "50px" }} onClick={(event) => handleNavbarButton(event, "acheive")}>
                                <MDBIcon fas icon="medal" style={{ marginRight: "10px" }} />Achievements
                            </MDBBtn>
                            <MDBBtn size="md" style={{ backgroundColor: button === "review" ? "#002A5C" : "white", color: button === "review" ? "white" : "#002A5C", justifySelf: "center", marginTop: "auto", borderRadius: "50px" }} onClick={(event) => handleNavbarButton(event, "review")}>
                                <MDBIcon fas icon="comment-alt" style={{ marginRight: "10px" }} /> Reviews
                            </MDBBtn>
                        </div>
                        {button === "collab" && (
                            <div style={{ width: "100%" }}>


                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", marginBottom: '1rem' }}>
                                    <MDBBtn size="lg" style={{

                                        backgroundColor: "#FF6F00", justifySelf: "center", marginRight: "5rem", width: "20rem", opacity: activeButton === 'current' ? 1 : 0.5,

                                    }} onClick={() => handleButtonClick('current')}

                                    >
                                        Current Collaborations
                                    </MDBBtn>
                                    <MDBBtn size="lg" style={{

                                        backgroundColor: "#FF6F00", justifySelf: "center", width: "20rem", opacity: activeButton === 'current' ? 0.5 : 1,
                                    }} onClick={() => handleButtonClick('previous')}>

                                        Previous Collaborations
                                    </MDBBtn>
                                </div>


                            </div>)}
                        <div style={{ display: "flex", flexWrap: "wrap", margin: "1rem", border: "1px solid #ff6f00", borderRadius: '10px', flexDirection: "column", height: "60%" }} className="px-4">
                            {button === "review" && (
                                <div style={{ height: "100%" }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-evenly', color: "#002A5C", width: "100%", margin: "0px", height: "10%" }}>
                                        <h4 style={{ marginTop: "2rem", justifySelf: "center", borderRight: "2px solid #002A5C", paddingRight: "2rem" }}>Average Rating</h4>
                                        <div style={{ borderRight: "2px solid #002A5C", paddingRight: "3rem", marginTop: "2rem" }}>{stars}</div>
                                        <div style={{ paddingRight: "3rem", marginTop: "2rem", display: "flex" }}>
                                            <BiSort size="2rem" onClick={handleSortClick} />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', overflowY: "scroll", justifyContent: 'flex-start', flexDirection: "column", margin: "2rem", marginBottom: "0px", height: "80%" }}>
                                        {sortedUsers.map((user) => (
                                            <MDBCard
                                                key={user.id}
                                                className="p-2 border-bottom"
                                                style={{ backgroundColor: "#002A5C", color: "white", display: "flex", flexWrap: "wrap" }}
                                            >
                                                <div className="d-flex flex-row">
                                                    <div>
                                                        <img
                                                            src={user.avatar}
                                                            alt="avatar"
                                                            className="d-flex align-self-center me-3"
                                                            width="60rem"
                                                        />
                                                    </div>
                                                    <div className="pt-1" style={{ width: "70%" }}>
                                                        <p className="fw-bold mb-0" style={{ fontSize: "20px" }}>
                                                            {user.name}
                                                        </p>
                                                        <p className="fw-bold mb-0" style={{ fontSize: "10px" }}>
                                                            {user.role}
                                                        </p>
                                                    </div>
                                                    <div style={{ alignSelf: "start", justifySelf: "end" }}>
                                                        <span className="badge bg-info rounded-pill float-end" style={{ fontSize: "10px" }}>
                                                            <MDBIcon
                                                                icon={'star'}
                                                                size="1x"
                                                            />
                                                            {user.starRating}
                                                        </span>
                                                    </div>
                                                </div>
                                                <p className="small" style={{ fontSize: "10px", color: "wheat" }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <div className="pt-1" style={{ paddingLeft: "1rem", display: "flex" }}>
                                                    <MDBBtn size="md" style={{ backgroundColor: "white", justifySelf: "center", color: "#002A5C", borderRadius: "30px" }}>
                                                        Helpful
                                                    </MDBBtn>
                                                    <p className="small text-muted mb-1" style={{ fontSize: "10px", alignSelf: "center", marginLeft: "3rem" }}>
                                                        {user.timestamp}
                                                    </p>
                                                </div>
                                            </MDBCard>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {/*
                             {
                                
                                    <div style={{ overflowY: 'scroll', width: "100%", padding: "2rem" }}>
                                        <MDBAccordion alwaysOpen initialActive={0}>

                                            {bar2("LOREAL PARIS", "Beauty and Lifestyle","current")}
                                            {bar2("youtube", "Beauty and Lifestyle","current")}
                                            {bar2("instagram", "Health And Wellness","current")}
                                        </MDBAccordion>
                                    </div>
                                

                                }
                                {
                                
                                    <div style={{ overflowY: 'scroll', width: "100%", padding: "2rem" }}>
                                        <MDBAccordion alwaysOpen initialActive={0}>

                                            {bar2("LOREAL PARIS", "Beauty and Lifestyle","previous")}
                                            {bar2("youtube", "Beauty and Lifestyle","previous")}
                                            {bar2("instagram", "Health And Wellness","previous")}
                                        </MDBAccordion>
                                    </div>
                                

                                }
                            */}

                            {button === "portfolio" && (
                                <div style={{ overflowY: 'scroll', width: "100%" }}>
                                    {titles.map((title, index) => (
                                        <MDBCard
                                            key={index}
                                            style={{
                                                margin: '2vw',
                                                maxHeight: 'fit-content',
                                                backgroundColor: '#002A5C',
                                                borderRadius: "10px",
                                                overflowY: "scroll"
                                            }}>
                                            <MDBCardTitle style={{ borderBottom: "1px solid #FF6F00", color: "white", fontSize: "20px" }}>{title}</MDBCardTitle>
                                            <div style={{ width: "100%", height: "90%", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                                <MDBCardText style={{ color: "white", margin: "1rem" }}>
                                                    {expandedCards[index] ? descriptions[index] : renderLimitedText(descriptions[index])}
                                                    <br />
                                                    {descriptions[index].split(' ').length > 10 && (
                                                        <span onClick={(event) => handleClick(event, index)} style={{ cursor: 'pointer', color: 'grey' }}>
                                                            {expandedCards[index] ? 'See Less' : 'See More'}
                                                        </span>
                                                    )}
                                                </MDBCardText>
                                                <div style={{ display: "flex", justifyContent: "flex-end", width: "100%", paddingRight: "3rem", paddingBottom: "1rem" }}>
                                                    <MDBBtn size="md" style={{ backgroundColor: "#FF6F00", alignItems: "center", color: "white", borderRadius: "10px", maxWidth: "fit-content" }}>
                                                        View Work
                                                    </MDBBtn>
                                                </div>
                                            </div>
                                        </MDBCard>
                                    ))}
                                </div>)}
                            {button === "category" && (
                                <div style={{ overflowY: 'scroll', width: "100%", padding: "2rem" }}>
                                    <MDBAccordion alwaysOpen initialActive={0}>
                                        {bar2("youtube", "Beauty and Lifestyle", "")}
                                        {bar2("youtube", "Beauty and Lifestyle", "")}
                                        {bar2("instagram", "Health And Wellness", "")}
                                    </MDBAccordion>
                                </div>
                            )}

                            {button === "acheive" && (
                                <div style={{ overflowY: 'scroll', width: "100%", padding: "2rem" }}>
                                    <MDBAccordion alwaysOpen initialActive={0}>
                                        {bar1("youtube", "Youtube", "", button)}
                                        {bar1("instagram", "Instagram", "", button)}
                                        {bar1("facebook", "Facebook", "", button)}
                                    </MDBAccordion>
                                </div>
                            )}

                            {activeButton === "current" && button === "collab" && (
                                <div style={{ overflowY: 'scroll', width: "100%", padding: "2rem" }}>
                                    <MDBAccordion alwaysOpen initialActive={0}>
                                        {bar1("LOREAL PARIS |", "Beauty and Lifestyle", activeButton, button)}
                                        {bar1("LOREAL PARIS |", "Beauty and Lifestyle", activeButton, button)}
                                        {bar1("Swiss Beauty |", "Beauty and Lifestyle", activeButton, button)}
                                    </MDBAccordion>
                                </div>
                            )}
                            {activeButton === "previous" && button === "collab" && (
                                <div style={{ overflowY: 'scroll', width: "100%", padding: "2rem" }}>
                                    <MDBAccordion alwaysOpen initialActive={0}>
                                        {bar1("LOREAL PARIS-- | ", " Beauty and Lifestyle", activeButton, button)}
                                        {bar1("LOREAL PARIS--| ", "Beauty and Lifestyle", activeButton, button)}
                                        {bar1("Swiss Beauty--|", "Beauty and Lifestyle", activeButton, button)}
                                    </MDBAccordion>
                                </div>
                            )}
                        </div>
                    </div>
                </MDBCol>
            </div >
        </div >
    </>
    );
};
export default Prof;