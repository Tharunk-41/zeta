import React, { useState, useEffect } from "react";
import { MDBBtn, MDBListGroup, MDBListGroupItem, MDBCol, MDBIcon, MDBCard, MDBCardTitle, MDBCardText, MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { FaStar } from 'react-icons/fa';
import { BiSort } from 'react-icons/bi';
import { BsFillFilterSquareFill } from 'react-icons/bs';

const Tracking = ({ onClose }) => {
    const [showPopup, setShowPopup] = useState(true);
    const [showPop, setShowPop] = useState(false);
    const [credit, setCredit] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null);
    const [button, setButton] = useState('');
    const [sortAsc, setSortAsc] = useState(true);
    const [filterActive, setFilterActive] = useState(false);
    const [selectedStars] = useState("2");
    const [shortlistedUsers, setShortlistedUsers] = useState([]);
    const [expandedCards, setExpandedCards] = useState({});
    const bar = (i, n) => {
        return <div style={{ fontSize: "25px", alignItems: "center", display: "flex" }}><MDBIcon fab icon={i} size="2x" style={{ borderRight: "2px solid black", paddingRight: "2rem", marginRight: "2rem" }} /><strong>{n}</strong></div>;
    };
    const bar1 = (i, n) => {
        return (
            <MDBAccordionItem collapseId={1} headerTitle={bar(i, n)} style={{ backgroundColor: "#002A5C", color: "white", marginBottom: "1rem" }} >
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
    const bar2 = (i, n) => {
        return (
            <MDBAccordionItem collapseId={1} headerTitle={bar(i, n)} style={{ backgroundColor: "#002A5C", color: "white", marginBottom: "1rem" }} >
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

    const handleClose = (event, n) => {
        event.preventDefault();
        onClose(n);
    };
    const handleShortlist = (user) => {
        setShortlistedUsers([...shortlistedUsers, user]);
        const updatedUsers = users.filter((u) => u.id !== user.id);
        setUsers(updatedUsers);
        const sortedUsersDesc = updatedUsers.slice().sort((a, b) => b.starRating - a.starRating);
        setSelectedUser(sortedUsersDesc[0]?.id);
        setShowPop(true);
    };
    const handleSortClick = () => {
        setSortAsc(!sortAsc);
    };
    const handleFilterClick = () => {
        setFilterActive(!filterActive);
    };
    const titles = ['Work Description', 'Work Description', 'Work Description'];
    const descriptions = ['1st-Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2nd-Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '3rd-Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'];
    const [users, setUsers] = useState([
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
    ]);
    const totalStar = users.reduce((sum, user) => sum + user.starRating, 0);
    const averageStar = totalStar / users.length;
    const stars = Array.from({ length: 5 }, (_, index) => (
        <MDBIcon
            key={index}
            icon={index < averageStar ? 'star' : 'star-o'} // 'star' for filled, 'star-o' for empty
            size="2x"
        />
    ));
    useEffect(() => {
        const sortedUsersDesc = users.slice().sort((a, b) => b.starRating - a.starRating);
        setSelectedUser(sortedUsersDesc[0]?.id);
    }, [users]);
    const filteredUser = filterActive
        ? users.filter((user) => user.starRating > selectedStars) // Adjust your filtering condition based on your requirements
        : users;

    const sortedUsers = filteredUser.slice().sort((a, b) => {
        if (sortAsc) {
            return a.starRating - b.starRating; // Ascending order
        } else {
            return b.starRating - a.starRating; // Descending order
        }
    });

    const handlePopupButton = () => {
        setCredit(!credit);
    };
    const handlePopup1Button = () => {
        setShowPopup(false);
    };
    const handlePopButton = () => {
        setShowPop(false);
    };
    const handleNavbarButton = (event, buttonName) => {
        event.preventDefault();
        setButton(buttonName);
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
        </div>
        )}
        {!showPopup && (
            <div className="container py-3" style={{ height: "100%" }}>
                <div className="card" style={{ borderRadius: "15px", height: "100%", width: "100%", display: "flex", flexDirection: "row" }}>
                    <MDBCol style={{ height: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap", overflowX: "auto" }}>
                        <div style={{ display: "flex", justifyContent: "start", marginLeft: "3rem", marginTop: "1rem", flexWrap: "wrap", height: "5%" }}>
                            <MDBBtn size="lg" style={{ backgroundColor: "#FF6F00", justifySelf: "center", marginRight: "3rem" }}>
                                10 Applicants
                            </MDBBtn>
                            <MDBBtn size="lg" style={{ backgroundColor: "grey", opacity: "0.5", justifySelf: "center" }}>
                                {shortlistedUsers.length} shortlisted
                            </MDBBtn>
                        </div>
                        {selectedUser && (
                            <div style={{ height: "93%", display: "flex", flexDirection: "column" }}>
                                <div style={{ backgroundColor: "white", border: "1px solid #ff6f00", borderRadius: "20px", margin: "1rem", padding: "1rem", height: "30%", overflowX: "auto" }}>
                                    <span style={{ height: "100%", display: "flex", overflowX: "scroll" }}>
                                        <MDBCol className="d-flex align-items-center justify-content-center">
                                            <div className="d-flex flex-column align-items-center">
                                                <img
                                                    src={users.find((user) => user.id === selectedUser)?.avatar}
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
                                                    {users.find((user) => user.id === selectedUser)?.name}</h3>
                                                <p>{users.find((user) => user.id === selectedUser)?.role}<br />
                                                    <MDBIcon far icon="calendar-alt" />{users.find((user) => user.id === selectedUser)?.age}<br />
                                                    <MDBIcon fas icon="map-marker-alt" />{users.find((user) => user.id === selectedUser)?.location}</p>
                                                <p style={{ marginTop: "3rem" }}><MDBIcon fas icon="language" />{users.find((user) => user.id === selectedUser)?.languagesKnown.join(", ")}</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol style={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
                                            <span style={{ fontSize: "25px" }}>
                                                <FaStar style={{ marginRight: "1rem", borderRight: "1px solid black", color: "#FF6F00" }} />
                                                <strong>{users.find((user) => user.id === selectedUser)?.starRating}</strong>
                                            </span>
                                            <MDBBtn size="lg" style={{ backgroundColor: "#FF6F00", justifySelf: "center", marginTop: "auto" }} onClick={() => handleShortlist(users.find((user) => user.id === selectedUser))}>
                                                Shortlist
                                            </MDBBtn>
                                        </MDBCol>
                                    </span>
                                </div>
                                <div style={{ display: "flex", width: "100%", justifyContent: "space-between", height: "5%", overflowX: "auto" }} className="px-1">
                                    <MDBBtn size="md" style={{ backgroundColor: button === "portfolio" ? "#002A5C" : "white", color: button === "portfolio" ? "white" : "#002A5C", justifySelf: "center", marginTop: "auto", borderRadius: "50px" }} onClick={(event) => handleNavbarButton(event, "portfolio")}>
                                        <MDBIcon fas icon="briefcase" />Portfolio
                                    </MDBBtn>
                                    <MDBBtn size="md" style={{ backgroundColor: button === "category" ? "#002A5C" : "white", color: button === "category" ? "white" : "#002A5C", justifySelf: "center", marginTop: "auto", borderRadius: "50px" }} onClick={(event) => handleNavbarButton(event, "category")}>
                                        Category
                                    </MDBBtn>
                                    <MDBBtn size="md" style={{ backgroundColor: button === "collab" ? "#002A5C" : "white", color: button === "collab" ? "white" : "#002A5C", justifySelf: "center", marginTop: "auto", borderRadius: "50px" }} onClick={(event) => handleNavbarButton(event, "collab")}>
                                        <MDBIcon fas icon="shopping-cart" />Collabrations
                                    </MDBBtn>
                                    <MDBBtn size="md" style={{ backgroundColor: button === "acheive" ? "#002A5C" : "white", color: button === "acheive" ? "white" : "#002A5C", justifySelf: "center", marginTop: "auto", borderRadius: "50px" }} onClick={(event) => handleNavbarButton(event, "acheive")}>
                                        <MDBIcon fas icon="medal" />Achievements
                                    </MDBBtn>
                                    <MDBBtn size="md" style={{ backgroundColor: button === "review" ? "#002A5C" : "white", color: button === "review" ? "white" : "#002A5C", justifySelf: "center", marginTop: "auto", borderRadius: "50px" }} onClick={(event) => handleNavbarButton(event, "review")}>
                                        <MDBIcon fas icon="comment-alt" /> Reviews
                                    </MDBBtn>
                                </div>
                                <div style={{ display: "flex", flexWrap: "wrap", margin: "1rem", border: "1px solid #ff6f00", borderRadius: '10px', flexDirection: "column", height: "60%" }}>
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
                                                    <span style={{ width: "100%", height: "90%", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
                                                        <MDBCardText style={{ color: "white", margin: "1rem" }}>
                                                            {expandedCards[index] ? descriptions[index] : renderLimitedText(descriptions[index])}
                                                            <br />
                                                            {descriptions[index].split(' ').length > 10 && (
                                                                <span onClick={(event) => handleClick(event, index)} style={{ cursor: 'pointer', color: 'grey' }}>
                                                                    {expandedCards[index] ? 'See Less' : 'See More'}
                                                                </span>
                                                            )}
                                                        </MDBCardText>
                                                        <MDBBtn size="md" style={{ backgroundColor: "#FF6F00", alignItems: "center", color: "white", borderRadius: "10px", maxWidth: "fit-content" }}>
                                                            View Work
                                                        </MDBBtn>
                                                    </span>

                                                </MDBCard>
                                            ))}
                                        </div>)}
                                    {button === "category" && (
                                        <div style={{ overflowY: 'scroll', width: "100%", padding: "2rem" }}>
                                            <MDBAccordion alwaysOpen initialActive={0}>
                                                {bar2("youtube", "Beauty and Lifestyle")}
                                                {bar2("youtube", "Beauty and Lifestyle")}
                                                {bar2("instagram", "Health And Wellness")}
                                            </MDBAccordion>
                                        </div>
                                    )}
                                    {button === "acheive" && (
                                        <div style={{ overflowY: 'scroll', width: "100%", padding: "2rem" }}>
                                            <MDBAccordion alwaysOpen initialActive={0}>
                                                {bar1("youtube", "Youtube")}
                                                {bar1("instagram", "Instagram")}
                                                {bar1("facebook", "Facebook")}
                                            </MDBAccordion>
                                        </div>
                                    )}
                                    {shortlistedUsers.map((user) => (
                                        <div key={user.id}>
                                            <h5>{user.name} - Shortlisted</h5>
                                            {/* Add additional user details here as needed */}
                                        </div>
                                    ))}
                                </div>
                            </div>)}
                    </MDBCol>
                    <MDBCol className="col-md-5 col-lg-5 col-xl-4" style={{ backgroundColor: "#bfc4cf", height: "100%" }}>
                        <div className="p-3">
                            <div style={{ paddingRight: "3rem", paddingLeft: "3rem", marginTop: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#002A5C", borderRadius: "10px", height: "3rem", color: "white" }}>
                                <BiSort size="2rem" onClick={handleSortClick} />
                                <BsFillFilterSquareFill size="2rem" onClick={handleFilterClick} style={{ opacity: filterActive ? 1 : 0.5, marginLeft: "1vw" }} />
                            </div>
                            <div
                                data-mdb-perfect-scrollbar="true"
                                style={{
                                    position: "relative",
                                    height: "100%",
                                    overflowY: "auto",
                                }}
                            >
                                <MDBListGroup className="list-unstyled mb-0" style={{ marginTop: "3rem" }}>
                                    {sortedUsers.map((user) => (
                                        <MDBListGroupItem
                                            key={user.id}
                                            style={{ marginTop: "1rem", borderRadius: "20px", color: "black", padding: "0px", overflowX: "auto" }}
                                        >
                                            <div className="d-flex flex-row" onClick={() => setSelectedUser(user.id)} style={{ width: "100%", height: "100%", padding: "0px" }}>
                                                <MDBCol className="d-flex align-items-center justify-content-center">
                                                    <div className="d-flex flex-column align-items-center" style={{ width: "6rem" }}>
                                                        <img
                                                            src={user.avatar}
                                                            alt="avatar"
                                                            className="d-flex align-self-center "
                                                            width="70rem"
                                                            height="100rem"
                                                        />
                                                    </div>
                                                </MDBCol>
                                                <MDBCol>
                                                    <div style={{ width: "10rem" }}>
                                                        <h5 style={{ display: "flex" }}>
                                                            {user.name}</h5>
                                                        <p style={{ fontSize: "10px" }}>{user.role}|{user.age}<br />
                                                            <MDBIcon fas icon="map-marker-alt" />{user.location}</p>
                                                        <p style={{ marginTop: "3rem", fontSize: "10px" }}><MDBIcon fas icon="language" />{user.languagesKnown.join(", ")}</p>
                                                    </div>
                                                </MDBCol>
                                                <MDBCol style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                                                    <span >
                                                        <FaStar style={{ borderRight: "1px solid black", color: "#FF6F00" }} />
                                                        {user.starRating}
                                                    </span>
                                                </MDBCol>
                                            </div>
                                        </MDBListGroupItem>
                                    ))}
                                </MDBListGroup>
                            </div>
                        </div>
                    </MDBCol>
                </div >
                {showPop && (<div>
                    <div className="popup">
                        <div className="popup-content">
                            <MDBIcon fas icon="check" />
                            <h3>You have shortlisted 1 participant!</h3>
                            <MDBBtn size="lg" style={{ backgroundColor: "#FF6F00", justifySelf: "center", marginTop: "2rem" }} onClick={(event) => handleClose(event, shortlistedUsers[shortlistedUsers.length - 1].name)}>
                                Message
                            </MDBBtn>
                            <MDBBtn size="md" style={{ backgroundColor: "grey", justifySelf: "center", marginTop: "1rem" }} onClick={handlePopButton}>
                                Home
                            </MDBBtn>
                        </div>
                    </div>
                </div>
                )
                }
            </div >
        )}
    </>
    );
};
export default Tracking;
