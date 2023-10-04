import React, { useState } from "react";
import { MDBBtn, MDBCard, MDBIcon } from "mdb-react-ui-kit";
import { BiSort } from 'react-icons/bi';
import { BsFillFilterSquareFill } from 'react-icons/bs';
import "./Profile.css";

const Contact = () => {
    const [selectedStars, setSelectedStars] = useState(null);
    const [filterActive, setFilterActive] = useState(false);
    const [sortAsc, setSortAsc] = useState(true);
    const [rating, setRating] = useState(0);

    const users = [
        {
            id: 1,
            name: "Marie Horwitz",
            avatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
            lastMessage: "Hello, Are you there?",
            timestamp: "Just now",
            unreadCount: 3,
        },
        {
            id: 2,
            name: "Jane Smith",
            avatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
            lastMessage: "Lorem ipsum dolor sit.",
            timestamp: "5 mins ago",
            unreadCount: 2,
        },
        {
            id: 3,
            name: "John Doe",
            avatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp",
            lastMessage: "Lorem ipsum dolor sit.",
            timestamp: "Yesterday",
            unreadCount: 1,
        },
    ];
    const totalUnreadCount = users.reduce((sum, user) => sum + user.unreadCount, 0);
    const averageUnreadCount = totalUnreadCount / users.length;
    const filteredUser = filterActive
        ? users.filter((user) => user.unreadCount > selectedStars) // Adjust your filtering condition based on your requirements
        : users;

    const sortedUsers = filteredUser.slice().sort((a, b) => {
        if (sortAsc) {
            return a.unreadCount - b.unreadCount; // Ascending order
        } else {
            return b.unreadCount - a.unreadCount; // Descending order
        }
    });
    const handleSortClick = () => {
        setSortAsc(!sortAsc);
    };
    const handleFilterClick = () => {
        setFilterActive(!filterActive);
    };
    const handleStarClick = (starIndex) => {
        setRating(starIndex + 1);
        setSelectedStars(starIndex);
    };
    return (
        <div
            style={{
                width: '100%',
                borderRadius: '10px',
                height: '100%',
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'start',
                alignContent: "flex-start",
                alignItems: 'center',
            }}
        >
            <h2 style={{ display: 'flex', justifyContent: 'center' }}>Reviews</h2>
            <div
                style={{
                    width: '80%',
                    backgroundColor: '#002A5C',
                    borderRadius: '10px',
                    height: '90%',
                    marginTop: '2rem',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-evenly', color: "white", width: "100%", margin: "0px" }}>
                    <h4 style={{ marginTop: "2rem", justifySelf: "center", borderRight: "2px solid white", paddingRight: "2rem" }}>Average Rating</h4>
                    <div style={{ borderRight: "2px solid white", paddingRight: "3rem", marginTop: "2rem" }}>
                        {[...Array(5)].map((_, index) => (
                            <MDBIcon
                                key={index}
                                icon={index < rating ? 'star' : 'star far'}
                                size="2x"
                                onClick={() => handleStarClick(index)}
                            />
                        ))}</div>
                    <div style={{ paddingRight: "3rem", marginTop: "2rem", display: "flex" }}>
                        <h3>{averageUnreadCount}</h3>
                        <BiSort size="2rem" onClick={handleSortClick} />
                        <BsFillFilterSquareFill size="2rem" onClick={handleFilterClick} style={{ opacity: filterActive ? 1 : 0.5, marginLeft: "1vw" }} />
                    </div>
                </div>
                <div style={{ display: 'flex', overflowY: "scroll", justifyContent: 'flex-start', flexDirection: "column", margin: "3rem" }}>
                    {sortedUsers.map((user) => (
                        <MDBCard
                            key={user.id}
                            className="p-2 border-bottom"
                            style={{ width: "100%" }}
                        >
                            <div className="d-flex flex-row">
                                <div>
                                    <img
                                        src={user.avatar}
                                        alt="avatar"
                                        className="d-flex align-self-center me-3"
                                        width="60"
                                    />
                                </div>
                                <div className="pt-1" style={{ width: "40vw" }}>
                                    <p className="fw-bold mb-0" style={{ fontSize: "30px" }}>
                                        {user.name}
                                    </p>
                                    <p className="small text-muted" style={{ fontSize: "20px" }}>
                                        {user.lastMessage}
                                    </p>
                                </div>
                                <div style={{ alignSelf: "center" }}>
                                    <span className="badge bg-info rounded-pill float-end" style={{ fontSize: "20px" }}>
                                        <MDBIcon
                                            icon={'star'}
                                            size="1x"
                                        />
                                        {user.unreadCount}
                                    </span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className="pt-1" style={{ paddingLeft: "1rem", display: "flex" }}>
                                <MDBBtn size="md" style={{ backgroundColor: "black", justifySelf: "center", color: "white", borderRadius: "30px" }}>
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
        </div>
    );
};
export default Contact;