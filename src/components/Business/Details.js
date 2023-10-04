import React, { useState, useEffect } from "react";
import { MDBBtn, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBListGroup, MDBListGroupItem, MDBInput, MDBIcon } from "mdb-react-ui-kit";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./Details.css";
import Payment from './payment';
import History from './OrderHistory';
import Tracking from './tracking';
import Reviews from './reviews';
import Faq from './faq';
import Post from './post'
import EmojiPicker from 'emoji-picker-react';

const Details = () => {
  const { parameter } = useParams();
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("post");
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPop, setShowPop] = useState(false);
  const [showPop1, setShowPop1] = useState(false);
  const [setSelectedStars] = useState(null);
  const [popupId, setPopupID] = useState("Post Credit");
  const [history, setHistory] = useState(false);
  const [popId, setPopID] = useState("");
  const [rating, setRating] = useState(0);
  const [msg, setMsg] = useState(false);
  const [emg, setEmg] = useState(false);

  useEffect(() => {
    // This will be called when 'parameter' changes
    if (parameter === 'blogID') {
      setSelectedButton('');
    }
  }, [parameter]);
  const handleEmg = (event) => {
    event.preventDefault();
    setEmg(!emg);
  }
  const handleHistory = (event, id) => {
    event.preventDefault();
    setHistory(!history);
    setPopID(id);
  }

  const handleSub1 = (event, id) => {
    event.preventDefault();
    setShowPop1(true);
    setPopupID(id);
  };

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
    setSelectedStars(starIndex);
  };
  const handleSub = (event) => {
    event.preventDefault();
    setShowPop(true);
  };
  const handlePop1Button = () => {
    setShowPop1(false);
  };
  const handlePopButton = () => {
    setShowPop(false);
  };
  const handleFileUpload = async (files) => {
    setNewMessage((prevMessage) => prevMessage + files[0].name);
    const formData = new FormData();
    formData.append("file", files[0]);

    try {
      // Replace this URL with your server-side endpoint for handling file uploads
      const response = await fetch("https://localhost:3000/details/uploads/", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        alert("File upload is  successfully");
      } else {
        alert("Failed to upload the file due to errors");
      }
    } catch (error) {
      console.error("Error while uploading the file:", error);
      alert("Error occurred while uploading the file");
    }
  };
  const handleEmojiSelect = (emojiData, event) => {
    setNewMessage((prevMessage) => prevMessage + emojiData.emoji);
    setEmg(false);
  };

  const chatMessages = messages[selectedUser] || [];

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Michael Johnson",
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp",
      lastMessage: "Hello, Are you there?",
      timestamp: "Just now",
      unreadCount: 3,
      pinned: [],
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
      lastMessage: "Lorem ipsum dolor sit.",
      timestamp: "5 mins ago",
      unreadCount: 2,
      pinned: [],
    },
    {
      id: 3,
      name: "John Doe",
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
      lastMessage: "Lorem ipsum dolor sit.",
      timestamp: "Yesterday",
      unreadCount: 1,
      pinned: [],
    },
  ]);
  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const currentTime = new Date();
      const messageTimestamp = currentTime.getTime();
      const updatedMessages = { ...messages };
      updatedMessages[selectedUser] = [
        ...(updatedMessages[selectedUser] || []),
        { content: newMessage, sender: "me", timestamp: messageTimestamp },
      ];
      setMessages(updatedMessages);
      setUsers(prevUsers => {
        const updatedUsers = prevUsers.map(user => {
          if (user.id === selectedUser) {
            const timeDifference = currentTime - messageTimestamp;
            let formattedTimestamp;
            if (timeDifference < 60000) { // Less than a minute
              formattedTimestamp = "Just now";
            } else if (timeDifference < 3600000) { // Less than an hour
              formattedTimestamp = `${Math.floor(timeDifference / 60000)} mins ago`;
            } else if (timeDifference < 86400000) { // Less than a day
              formattedTimestamp = `${Math.floor(timeDifference / 3600000)} hrs ago`;
            } else if (timeDifference < 172800000) { // Less than 2 days
              formattedTimestamp = "Yesterday";
            } else {
              formattedTimestamp = "More than 2 days ago";
            }
            return {
              ...user,
              lastMessage: newMessage,
              timestamp: formattedTimestamp,
            };
          }
          return user;
        });
        return updatedUsers;
      });
      setNewMessage("");
    }
  };
  const handlePinToggle = (messageIndex) => {
    const message = chatMessages[messageIndex];
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.id === selectedUser) {
          const updatedPinned = user.pinned.slice(); // Create a shallow copy
          const existingIndex = updatedPinned.findIndex((m) => m === message);
          if (existingIndex !== -1) {
            // Unpin the message
            updatedPinned.splice(existingIndex, 1);
          } else {
            // Pin the message
            updatedPinned.push(message);
          }
          return {
            ...user,
            pinned: updatedPinned,
          };
        }
        return user;
      });
    });
  };

  const messageIsPinned = (message) => {
    const user = users.find((u) => u.id === selectedUser);
    return user && user.pinned.includes(message);
  };

  const handleTrack1 = (text) => {
    const user = users.find((user) => user.name === text);
    setSelectedUser(user.id);
    setSelectedButton("message");
    setMsg(false);
  }
  const handleMsg = (m) => {
    if (m === 1) {
      setSelectedButton("message");
      setMsg(true);
    }
    else if (m === 2) {
      setSelectedButton("message1");
    }
  }
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePost = () => {
    setSelectedButton("tracking");
  };

  const handleSidebarButton = (buttonName) => {
    setSelectedButton(buttonName);
    navigate('/b/details', { state: { parameter: null } });
    if (buttonName === "message") { setMsg(true) };
  };

  return (
    <div className="details">
      <div className="row">
        <div className="column1" style={{ backgroundColor: "#002A5C" }}>
          <ol
            style={{
              listStyle: "none",
              color: "#F5F5F5",
              paddingTop: "5rem",
            }}
          >
            <li>
              <Link to="/b/profile" style={{ color: "#FFFFFF", textDecoration: "none" }}>Profile</Link>
            </li>
            <li
              className={selectedButton === "post" ? "active" : ""}
              style={{ color: "#FFFFFF" }} onClick={() => handleSidebarButton("post")}
            >
              Post tab
            </li>
            <li className={selectedButton === "tracking" ? "active" : ""}
              style={{ color: "#FFFFFF" }} onClick={() => handleSidebarButton("tracking")}>
              Tracking Application
            </li>
            <li className={selectedButton === "mes" || selectedButton === "message" || selectedButton === "message1" ? "active" : ""}
              style={{ color: "#FFFFFF" }} onClick={() => handleSidebarButton("mes")}>
              Message
            </li>
            <li className={selectedButton === "wallet" ? "active" : ""}
              style={{ color: "#FFFFFF" }} onClick={() => handleSidebarButton("wallet")}>
              Wallet
            </li>
            <li className={selectedButton === "reviews" ? "active" : ""}
              style={{ color: "#FFFFFF" }} onClick={() => handleSidebarButton("reviews")}>
              Reviews
            </li>
            <li>
              <MDBBtn size="lg" style={{ backgroundColor: "#FF6F00", justifySelf: "center" }}>
                Log Out
              </MDBBtn>
            </li>
          </ol>
        </div>
        <div className="column2">
          {selectedButton === "post" && (<Post onClose={handlePost} />)}
          {selectedButton === "tracking" && (<Tracking onClose={handleTrack1} m={0} />)}
          {selectedButton === "reviews" && (<Reviews />)}
          {selectedButton === "mes" && (<Tracking onClose={handleMsg} m={1} />)}
          {selectedButton === "message" && (
            <div className="container py-5">
              <div className="row">
                <div className="col-md-12">
                  <div className="card" style={{ borderRadius: "15px" }}>
                    <div className="card-body">
                      <div className="row">
                        {msg && (
                          <div className={selectedUser ? "col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0" : "col-md-12 col-lg12 col-xl-12 mb-4 mb-md-0"} style={{ backgroundColor: "#bfc4cf" }}>
                            <div className="p-3">
                              <div className="d-flex align-items-center justify-content-center">
                                <MDBInput
                                  type="search"
                                  label={<MDBIcon fas icon="search" />}
                                  className="form-control rounded"
                                  placeholder="Search"
                                  aria-label="Search"
                                  aria-describedby="search-addon"
                                  style={{ width: "100%", backgroundColor: "white", dispaly: "flex" }}
                                  value={searchQuery}
                                  onChange={(e) => setSearchQuery(e.target.value)}
                                /></div>
                              <div
                                data-mdb-perfect-scrollbar="true"
                                style={{
                                  position: "relative",
                                  height: "400px",
                                  overflowY: "auto",
                                }}
                              >
                                <MDBListGroup className="list-unstyled mb-0" style={{ marginTop: "3rem" }}>
                                  {filteredUsers.map((user) => (
                                    <MDBListGroupItem
                                      key={user.id}
                                      className="p-2 border-bottom"
                                    >
                                      <a
                                        href="#!"
                                        className="d-flex justify-content-between"
                                        onClick={() => setSelectedUser(user.id)}
                                      >
                                        <div className="d-flex flex-row">
                                          <div>
                                            <img
                                              src={user.avatar}
                                              alt="avatar"
                                              className="d-flex align-self-center me-3"
                                              width="60"
                                            />
                                            <span className="badge bg-success badge-dot"></span>
                                          </div>
                                          <div className="pt-1">
                                            <p className="fw-bold mb-0" style={{ fontSize: "20px" }}>
                                              {user.name}
                                            </p>
                                            <p className="small text-muted" style={{ fontSize: "10px" }}>
                                              {user.lastMessage}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="pt-1" style={{ paddingLeft: "1rem" }}>
                                          <p className="small text-muted mb-1" style={{ fontSize: "10px" }}>
                                            {user.timestamp}
                                          </p>
                                          {user.unreadCount > 0 && (
                                            <span className="badge bg-danger rounded-pill float-end" style={{ fontSize: "10px" }}>
                                              {user.unreadCount}
                                            </span>
                                          )}
                                        </div>
                                      </a>
                                    </MDBListGroupItem>
                                  ))}
                                </MDBListGroup>
                              </div>
                            </div>
                          </div>)}
                        {selectedUser && (
                          <div className={msg ? "col-md-6 col-lg-7 col-xl-8" : "col-md-12 col-lg-12 col-xl-12"}>
                            <div style={{ display: "flex", width: "100%" }}>
                              <MDBIcon fas icon="chevron-left" size="2x" onClick={(event) => { event.preventDefault(); handleMsg(2) }} />
                              <div className="d-flex justify-content-between align-items-center mb-3" style={{ backgroundColor: "#002a5c", display: "flex", flexWrap: "wrap", width: "98%" }}>
                                <img
                                  src={users.find((user) => user.id === selectedUser)?.avatar}
                                  alt="avatar"
                                  className="d-flex align-self-center me-3"
                                  width="40rem"
                                />
                                <h5 style={{ color: "white" }}>{users.find((user) => user.id === selectedUser)?.name}</h5>
                                <MDBBtn onClick={handleSub} style={{ backgroundColor: "#FF6F00", height: "2rem", borderRadius: "10px", alignSelf: "center" }}>
                                  Completed
                                </MDBBtn>
                              </div></div>
                            <div
                              className="pt-3 pe-3"
                              data-mdb-perfect-scrollbar="true"
                              style={{
                                position: "relative",
                                height: "400px",
                                overflowY: "auto",
                              }}
                            >
                              {chatMessages.map((message, index) => (
                                <div
                                  key={index}
                                  onDoubleClick={() => handlePinToggle(index)}
                                  className={`d-flex flex-row justify-content-${message.sender === "me" ? "end" : "start"}`}
                                >
                                  <div>
                                    <p
                                      className={`small p-2 ${message.sender === "me"
                                        ? "me-3 text-white "
                                        : "ms-3 rounded-3"
                                        }`}
                                      style={{ backgroundColor: messageIsPinned(message) ? "orange" : "#002a5c" }}
                                    >
                                      {message.content}
                                    </p>
                                  </div>
                                  <img
                                    src={
                                      message.sender === "me"
                                        ? "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                        : users.find((user) => user.id === selectedUser)?.avatar
                                    }
                                    alt="avatar"
                                    className="d-flex align-self-center me-3"
                                    width="45"
                                    style={{ height: "100%" }}
                                  />
                                </div>
                              ))}
                              {emg && <EmojiPicker width={"30rem"} onEmojiClick={handleEmojiSelect} style={{ position: "absolute", bottom: "80px", right: "30px" }} />}
                            </div>
                            <div className="text-muted d-flex justify-content-start align-items-center ">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                alt="avatar 3"
                                style={{ width: "40px", height: "100%" }}
                              />
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                id="exampleFormControlInput2"
                                placeholder="Type message"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                              />
                              <a className="ms-1 text-muted" href="#!">
                                <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
                                  <i className="fas fa-paperclip"></i>
                                </label>
                                <input
                                  type="file"
                                  id="fileInput"
                                  style={{ display: "none" }}
                                  onChange={(e) => handleFileUpload(e.target.files)}
                                />
                              </a>
                              <a className="ms-3 text-muted" href="#!">
                                <i className="fas fa-smile" onClick={handleEmg} />
                              </a>
                              <a
                                className="ms-3"
                                href="#!"
                                onClick={handleSendMessage}
                              >
                                <i className="fas fa-paper-plane"></i>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedButton === "message1" && (
            <div style={{ width: "100%", overflow: 'scroll', backgroundColor: "#D9D9D9", borderRadius: "10px", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", width: "60%", margin: "3rem" }}>
                <MDBInput
                  type="search"
                  label={<MDBIcon fas icon="search" />}
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  style={{ width: "100%", backgroundColor: "white", display: "flex" }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                /></div>
              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <MDBIcon fas icon="thumbtack" size="2x" />
                  <h2>Pinned Messages</h2>
                </div>
                {filteredUsers.map((user) => (<>
                  {user.pinned.length > 0 && (
                    <MDBListGroupItem
                      key={user.id}
                      className="p-2 border-bottom">
                      <a
                        href="#!"
                        style={{ width: "100%", color: "black", textDecoration: "none" }}
                        className="d-flex justify-content-between"
                        onClick={(event) => {
                          event.preventDefault(); setSelectedUser(user.id);
                          setSelectedButton("message");
                          setMsg(false);
                        }}>
                        <div className="d-flex flex-row">
                          <div>
                            <img
                              src={user.avatar}
                              alt="avatar"
                              className="d-flex align-self-center me-3"
                              width="60"
                            />
                            <span className="badge bg-success badge-dot"></span>
                          </div>
                          <div className="pt-1">
                            <p className="fw-bold mb-0" style={{ fontSize: "20px" }}>
                              {user.name} ({user.pinned.length})
                            </p>
                            <p className="small text-muted" style={{ fontSize: "10px" }}>
                              {user.pinned[user.pinned.length - 1].content}
                            </p>
                          </div>
                        </div>
                        <div className="pt-1" style={{ paddingLeft: "1rem" }}>
                          <p className="small text-muted mb-1" style={{ fontSize: "10px" }}>
                            {user.timestamp}
                          </p>
                        </div>
                      </a>
                    </MDBListGroupItem>)}</>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <MDBIcon fas icon="comments" size="2x" />
                <h2>All Messages</h2>
              </div>
              <div>
                {filteredUsers.map((user) => (
                  <MDBListGroupItem
                    key={user.id}
                    className="p-2 border-bottom">
                    <a
                      href="#!"
                      style={{ width: "100%", color: "black", textDecoration: "none" }}
                      className="d-flex justify-content-between"
                      onClick={(event) => {
                        event.preventDefault(); setSelectedUser(user.id);
                        setSelectedButton("message");
                        setMsg(false);
                      }}>
                      <div className="d-flex flex-row">
                        <div>
                          <img
                            src={user.avatar}
                            alt="avatar"
                            className="d-flex align-self-center me-3"
                            width="60"
                          />
                          <span className="badge bg-success badge-dot"></span>
                        </div>
                        <div className="pt-1">
                          <p className="fw-bold mb-0" style={{ fontSize: "20px" }}>
                            {user.name}
                          </p>
                          <p className="small text-muted" style={{ fontSize: "10px" }}>
                            {user.lastMessage}
                          </p>
                        </div>
                      </div>
                      <div className="pt-1" style={{ paddingLeft: "1rem" }}>
                        <p className="small text-muted mb-1" style={{ fontSize: "10px" }}>
                          {user.timestamp}
                        </p>
                      </div>
                    </a>
                  </MDBListGroupItem>
                ))}
              </div>
            </div>
          )}
          {showPop && (
            <div className="popup">
              <div className="popup-content">
                <div style={{ display: "flex" }}>
                  <img
                    src={users.find((user) => user.id === selectedUser)?.avatar}
                    alt="avatar"
                    className="d-flex align-self-center me-3"
                    width="60rem"
                  />
                  <h2>{users.find((user) => user.id === selectedUser)?.name}</h2>
                </div>
                <p>Infleuncer</p>
                <p>Rate Your Experience</p>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}>
                  {[...Array(5)].map((_, index) => (
                    <MDBIcon
                      key={index}
                      icon={index < rating ? 'star' : 'star far'}
                      size="2x"
                      onClick={() => handleStarClick(index)}
                    />
                  ))}
                </div>
                <input type="text" style={{ width: "30vw", height: "10rem", boxSizing: "border-box", marginBottom: "2rem" }} />
                <MDBBtn size="lg" style={{ backgroundColor: "#FF6F00", justifySelf: "center" }} onClick={handlePopButton}>
                  Submit
                </MDBBtn>
              </div>
            </div>
          )}
          {selectedButton === "wallet" && !history && (
            <div style={{ width: "100%", overflowY: 'scroll', backgroundColor: "#002A5C", borderRadius: "10px", height: "100%", paddingTop: "3rem" }}>
              <div className="row" style={{ display: "flex", flexWrap: "wrap", height: "10%", width: "100%" }}>
                <div className="col-md-3" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <h4 style={{ color: "white", textAlign: "center" }}>Post Credit</h4>
                  <MDBBtn style={{ backgroundColor: "#FF6F00", width: "5rem", borderRadius: "30px" }} onClick={(event) => handleSub1(event, "Post Credit")}>+ Add</MDBBtn>
                </div>
                <div className="col-md-3" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <h4 style={{ color: "white", textAlign: "center" }}>Shortlist Credit</h4>
                  <MDBBtn style={{ backgroundColor: "#FF6F00", width: "5rem", borderRadius: "30px" }} onClick={(event) => handleSub1(event, "Shortlist Credit")}>+ Add</MDBBtn>
                </div>
                <div className="col-md-3" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <h4 style={{ color: "white", textAlign: "center" }}>Credit history</h4>
                  <MDBBtn style={{ backgroundColor: "#FF6F00", width: "6rem" }} onClick={(event) => handleHistory(event, "Credit")}>View</MDBBtn>
                </div>
                <div className="col-md-3" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <h4 style={{ color: "white", textAlign: "center" }}>Order</h4>
                  <MDBBtn style={{ backgroundColor: "#FF6F00", width: "6rem" }} onClick={(event) => handleHistory(event, "Order")}>View</MDBBtn>
                </div>
              </div>
              <div className="row" style={{ display: "flex", justifyContent: "space-evenly", margin: "3rem", flexWrap: "wrap", height: "10%", overflowX: "auto" }}>
                <MDBCard style={{ display: "flex", width: "20rem", backgroundColor: "#FF6F00", marginLeft: "3rem" }}>
                  <MDBCardBody>
                    <MDBRow style={{ display: "flex", alignItems: "center" }}>
                      <MDBCol style={{ borderRight: "1px solid black", color: "white", fontSize: "25px", flex: "60%" }}>
                        Post Credit
                      </MDBCol>
                      <MDBCol style={{ color: "white", display: "flex", justifyContent: "center", fontSize: "25px", alignItems: "center" }}>
                        007
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
                <MDBCard style={{ display: "flex", width: "20rem", backgroundColor: "#FF6F00" }}>
                  <MDBCardBody>
                    <MDBRow style={{ display: "flex", alignItems: "center" }}>
                      <MDBCol style={{ borderRight: "1px solid black", color: "white", display: "flex", fontSize: "25px", flex: "60%" }}>
                        Shortlist Credit
                      </MDBCol>
                      <MDBCol style={{ color: "white", display: "flex", justifyContent: "center", fontSize: "25px", alignContent: "center" }}>
                        007
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className="row" style={{ display: "flex", justifyContent: "center", margin: "3rem", height: "40%" }}>
                <h2 style={{ color: "white" }}>Pricing</h2>
                <table style={{ border: "2px solid white", borderRadius: "30px", height: "15rem" }}>
                  <tr style={{ borderBottom: "1px solid wheat" }}>
                    <td style={{ color: "white", fontSize: "20px", paddingLeft: "5vw", borderRight: "1px solid wheat", width: "50%" }}>Post Credit </td>
                    <td style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <MDBIcon icon="inr" style={{ backgroundColor: "#002A5C", color: "white" }} />
                      <h4 style={{ backgroundColor: "#002A5C", color: "white" }}>487 + GST</h4>
                      <MDBBtn style={{ backgroundColor: "#FF6F00", borderRadius: "30px", width: "7vw", marginLeft: "3vw" }} onClick={(event) => handleSub1(event, "Post Credit")}>Buy</MDBBtn>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "white", fontSize: "20px", paddingLeft: "5vw", borderRight: "1px solid wheat", width: "50%" }}>Shortlist Credit</td>
                    <td style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <MDBIcon icon="inr" style={{ backgroundColor: "#002A5C", color: "white" }} />
                      <h4 style={{ backgroundColor: "#002A5C", color: "white" }}>487 + GST</h4>
                      <MDBBtn style={{ backgroundColor: "#FF6F00", borderRadius: "30px", width: "7vw", marginLeft: "3vw" }} onClick={(event) => handleSub1(event, "Shortlist Credit")}>Buy</MDBBtn>
                    </td>
                  </tr>
                </table>
              </div>
            </div>)
          }
          {selectedButton === "wallet" && history && (
            <History handleBack={(event) => handleHistory(event, "")} id={popId} />
          )}
          {showPop1 && (
            <Payment id={popupId} onClose={handlePop1Button} />
          )}
          {parameter === 'blogID' && (
            <div style={{
              width: '100%',
              borderRadius: '10px',
              height: '100%',
              display: 'flex',
              flexDirection: "column",
              alignContent: "start",
              alignItems: 'center',
              backgroundColor: "#002A5C",
              color: "white"
            }}>
              <h2>Frequently Asked Questions</h2>
              <Faq /></div>
          )}
        </div>
      </div>
    </div >
  );
};
export default Details;