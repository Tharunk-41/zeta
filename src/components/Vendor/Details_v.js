import React, { useState, useEffect } from "react";
import { MDBBtn, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon, MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { useParams, useNavigate } from "react-router-dom";
import "./Details_v.css";
import amazon_icon from "../../assets/amazon_icon.png";
import frequency from "../../assets/frequency.png";
import { mdiWeb, mdiAccountMultiple } from '@mdi/js';
import { Icon } from '@mdi/react';
import { MdSearch, MdSave, MdFilter, MdSort } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { FaHourglass } from 'react-icons/fa';
import { IoIosCash } from 'react-icons/io';
import { BiSort } from 'react-icons/bi';
import { BsFillFilterSquareFill } from 'react-icons/bs';
import Faq from '../Business/faq'
import Opp from './opp';
import Cat from './cat';

const Details = () => {
  const { parameter } = useParams();
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("oppurtunity");
  const titles = ['Promoting Vegan Skincare Products', 'Promoting Vegan Skincare Products'];
  const descriptions = ['Amazon Inc', 'Amazon Inc'];
  const images = [amazon_icon, amazon_icon];
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [rating, setRating] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [buttonText, setButtonText] = useState('Applied');
  const [activeButton, setActiveButton] = useState('applied');
  const [selectedStars, setSelectedStars] = useState(null);
  const [filterActive, setFilterActive] = useState(false);
  const [sortAsc, setSortAsc] = useState(true);
  const categories = [['Electronics', 'Clothing', 'Home Appliances'], ['Books', 'Stationery'], ['Furniture', 'Decor', 'Kitchenware']]

  const handleSortClick = () => {
    setSortAsc(!sortAsc);
  };
  const handleFilterClick = () => {
    setFilterActive(!filterActive);
  };


  const users = [
    {
      id: 1,
      name: "Marie Horwitz",
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp",
      lastMessage: "Hello, Are you there?",
      timestamp: "Just now",
      unreadCount: 3,
    },
    {
      id: 2,
      name: "Alexa Chung",
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp",
      lastMessage: "Lorem ipsum dolor sit.",
      timestamp: "5 mins ago",
      unreadCount: 2,
    },
    {
      id: 3,
      name: "Danny McChain",
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
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
  useEffect(() => {
    if (parameter === 'blogID') {
      setSelectedButton('');
    }
  }, [parameter]);

  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const handleEmojiClick = (emoji) => {
    const updatedMessage = newMessage + emoji;
    setNewMessage(updatedMessage);
    setSelectedEmoji(emoji);
  };
  const [showEmojis, setShowEmojis] = useState(false);
  const emojis = [
    '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
    '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
    '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔',
    '🤐', '🤨', '😐', '😑', '😶', '😶‍🌫️', '😏', '😒', '🙄', '😬',
    '🤥', '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢',
    '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😎',
    '🤓', '🧐', '😕', '😟', '🙁', '☹️', '😮', '😯', '😲', '😳',
    '🥺', '😦', '😧', '😨', '😰', '😥', '😢', '😭', '😱', '😖',
    '😣', '😞', '😓', '😩', '😫', '😤', '😡', '😠', '🤬', '😈',
    '👿', '💀', '☠️', '💩', '🤡', '👹', '👺', '👻', '👽', '👾',
    '🤖', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾',
    '👶', '👧', '🧒', '👦', '👩', '🧑', '👨', '👵', '🧓', '👴',
    '👲', '👳', '👮', '👷', '💂', '🕵️‍♂️', '🕵️‍♀️', '👩‍⚕️', '👨‍⚕️', '👩‍🎓',
    '👨‍🎓', '👩‍🏫', '👨‍🏫', '👩‍⚖️', '👨‍⚖️', '👩‍🌾', '👨‍🌾', '👩‍🍳', '👨‍🍳', '👩‍🔧',
    '👨‍🔧', '👩‍🏭', '👨‍🏭', '👩‍💼', '👨‍💼', '👩‍🔬', '👨‍🔬', '👩‍💻', '👨‍💻', '👩‍🎤',
    '👨‍🎤', '👩‍🎨', '👨‍🎨', '👩‍✈️', '👨‍✈️', '👩‍🚀', '👨‍🚀', '👩‍🚒', '👨‍🚒', '👩‍⚖️',
    '👨‍⚖️', '👰', '🤵', '👸', '🤴', '🤶', '🎅', '🧙‍♀️', '🧙‍♂️', '🧝‍♀️',
    '🧝‍♂️', '🧛‍♀️', '🧛‍♂️', '🧟‍♀️', '🧟‍♂️', '🧞‍♀️', '🧞‍♂️', '🧜‍♀️', '🧜‍♂️', '🧚‍♀️',
    '🧚‍♂️', '👼', '🤰', '🤱', '🙇‍♀️', '🙇‍♂️', '💁‍♀️', '💁‍♂️', '🙅‍♀️', '🙅‍♂️',
    '🙆‍♀️', '🙆‍♂️', '🙋‍♀️', '🙋‍♂️', '🤦‍♀️', '🤦‍♂️', '🤷‍♀️', '🤷‍♂️', '🙎‍♀️', '🙎‍♂️']

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleClick = () => {
    setShowEmojis(!showEmojis);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);

    if (buttonText === 'Applied' && button === "Shortlisted") {
      setButtonText('Message');
    }
    if (buttonText === 'Message' && button === "applied") {
      setButtonText('Applied');
    }

  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTitles = titles.filter((title) =>
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
    setSelectedStars(starIndex);

  };
  const handleFileUpload = (files) => {
    console.log("Selected files:", files);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const updatedMessages = { ...messages };
      updatedMessages[selectedUser] = [
        ...(updatedMessages[selectedUser] || []),
        { content: newMessage, sender: "me" },
      ];
      setMessages(updatedMessages);
      setNewMessage("");
    }
  };
  const chatMessages = messages[selectedUser] || [];
  const handleSidebarButton = (buttonName) => {
    setSelectedButton(buttonName);
    navigate('/v/details', { state: { parameter: null } });
  };
  return (
    <div className="details1">
      <div className="row">
        <div className="column1" style={{ backgroundColor: "#002A5C" }}>
          <ol
            style={{
              listStyle: "none",
              color: "#F5F5F5",
              paddingTop: "5rem",
            }}
          >
            <li
              className={selectedButton === "oppurtunity" ? "active" : ""}
              style={{ color: "#FFFFFF" }} onClick={() => handleSidebarButton("oppurtunity")}
            >
              Oppurtunity
            </li>
            <li
              className={selectedButton === "tracking" ? "active" : ""}
              style={{ color: "#FFFFFF" }} onClick={() => handleSidebarButton("tracking")}
            >
              Track application
            </li>
            <li className={selectedButton === "profile" ? "active" : ""}
              style={{ color: "#FFFFFF" }} onClick={() => handleSidebarButton("profile")}>
              Catalog
            </li>
            <li className={selectedButton === "message" || selectedButton === "mes" ? "active" : ""}
              style={{ color: "#FFFFFF" }} onClick={() => handleSidebarButton("message")}>
              Message
            </li>

            <li className={selectedButton === "reviews" ? "active" : ""}
              style={{ color: "#FFFFFF" }} onClick={() => handleSidebarButton("reviews")}>
              Orders
            </li>
            <li>
              <MDBBtn size="lg" style={{ backgroundColor: "#FF6F00", justifySelf: "center" }}>
                Log Out
              </MDBBtn>
            </li>
          </ol>
        </div>
        <div className="column2">
          {selectedButton === "oppurtunity" && (
            <Opp/>)}
          {selectedButton === "profile" && (
            <Cat />
          )}


          {selectedButton === "tracking" && (
            <div style={{ width: "100%", overflowY: 'scroll', display: "contents" }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", marginBottom: '1rem' }}>
                <MDBBtn size="lg" style={{
                  backgroundColor: "#FF6F00", justifySelf: "center", marginRight: "5rem", width: "15rem", opacity: activeButton === 'applied' ? 1 : 0.5,
                  //pointerEvents: activeButton === 'applied' ? 'auto' : 'none'
                }} onClick={() => handleButtonClick('applied')}
                //disabled={activeButton === 'shortlisted'}>
                >
                  Applied
                </MDBBtn>
                <MDBBtn size="lg" style={{
                  backgroundColor: "#FF6F00", justifySelf: "center", width: "15rem", opacity: activeButton === 'applied' ? 0.5 : 1,
                  //pointerEvents: activeButton === 'shortlisted' ? 'auto' : 'none'
                }} onClick={() => handleButtonClick('Shortlisted')}>

                  Shortlisted
                </MDBBtn>
              </div>
              {titles.map((title, index) => (
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
                          <MDBBtn style={{ backgroundColor: "#FF6F00", height: "2rem", width: "15vw", borderRadius: "50px" }} onClick={buttonText === "Message" ? () => handleSidebarButton("mes") : () => handleSidebarButton("tracking")}>
                            {buttonText}
                          </MDBBtn>
                        </div>
                      </MDBCardBody>
                    </MDBCol>
                  </span>
                </MDBCard>
              ))}
            </div>)}
          {selectedButton === "message" && (
            <div style={{ width: "100%", overflowY: 'scroll', display: "contents" }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
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
              {filteredTitles.map((title, index) => (
                <React.Fragment key={index}>
                  <MDBCard
                    style={{
                      display: 'flex',
                      width: '60vw',
                      margin: '1vh',
                      height: '17rem',
                      backgroundColor: '#002A5C',
                      borderBottomLeftRadius: '40px',
                      borderTopRightRadius: '40px',
                      borderTopLeftRadius: '0px',
                      borderBottomRightRadius: '0px',
                    }}>
                    <MDBCardTitle style={{ borderBottom: "1px solid #FF6F00", color: "white", fontSize: "30px" }}>{title}</MDBCardTitle>
                    <span style={{ width: "100%", height: "90%", display: "flex" }}>
                      <MDBCol style={{ paddingLeft: "2rem" }}>
                        <img
                          src={images[index]}
                          alt="Card"
                          style={{ width: '10rem', height: '10rem', objectFit: 'cover', borderRadius: "30px" }}
                        />
                        <MDBCardText style={{ color: "white", marginLeft: "2rem" }}>{descriptions[index]}</MDBCardText>
                      </MDBCol>
                      <MDBCol>
                        <MDBCardBody style={{ color: 'white' }}>
                          <div style={{ display: 'flex' }}>
                            <div style={{ width: "20vw" }}>
                              <div style={{ height: "2.5rem" }}>
                                <p style={{ display: "flex" }}>
                                  <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "3vw", width: "7vw" }}>
                                    <Icon path={mdiWeb} size={1} />
                                    <p style={{ height: '1rem', fontSize: "10px" }}> Platform </p>
                                  </div>
                                  Instagram
                                </p>

                              </div>
                              <div style={{ height: "2.5rem" }}>
                                <p style={{ display: "flex" }}>
                                  <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "3vw", width: "7vw" }}>
                                    <Icon path={mdiAccountMultiple} size={1} />
                                    <p style={{ height: '1rem', fontSize: "10px" }}> Minimum Followers</p>
                                  </div>
                                  2 K
                                </p>

                              </div>
                              <div style={{ height: "2.5rem" }}>
                                <p style={{ display: "flex" }}>
                                  <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "3vw", width: "7vw" }}>
                                    <FaHourglass />
                                    <p style={{ height: '1rem', fontSize: "10px" }}> Durations</p>
                                  </div>
                                  2 Month
                                </p>

                              </div>
                              <div style={{ height: "2.5rem" }}>
                                <p style={{ display: "flex", width: "26vw" }}>
                                  <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "3vw", width: "7vw" }}>
                                    <img
                                      src={frequency}
                                      alt="Frequency"
                                      style={{ width: '1.5rem', height: '1.5rem', borderRadius: "15px", marginRight: "0.5rem" }}
                                    />
                                    <p style={{ height: '1rem', fontSize: "10px" }}> Frequency</p>
                                  </div>
                                  10 Post Per Month </p>

                              </div>
                              <div style={{ height: "2.5rem" }}>
                                <p style={{ display: "flex", width: "26vw" }}>
                                  <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "3vw", width: "7vw" }}>
                                    <IoIosCash style={{ height: "1rem" }} />
                                    <p style={{ height: '1rem', fontSize: "10px" }}> Amount</p>
                                  </div>
                                  28000/-
                                </p>
                              </div>

                            </div>
                            <div style={{ display: "flex", justifyItems: "right", alignItems: "end" }}>
                              <MDBBtn style={{ backgroundColor: "#FF6F00", height: "2rem", width: "15vw", borderRadius: "50px" }} onClick={() => handleSidebarButton("mes")}>
                                Message
                              </MDBBtn>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCol>
                    </span>
                  </MDBCard>
                </React.Fragment>
              ))}
            </div>)}
          {selectedButton === "mes" && (
            <div className="container py-5">
              <div className="row">
                <div className="col-md-12">
                  <div className="card" style={{ borderRadius: "15px" }}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 col-lg-12 col-xl-12" style={{}}>
                          <div className="d-flex justify-content-left align-items-center mb-3" style={{ backgroundColor: "#002a5c", height: "3rem" }}>
                            <MDBBtn size="md" style={{ backgroundColor: "transparent", justifySelf: "center", color: "white", fontSize: "30px", border: "none" }} onClick={() => handleSidebarButton("message")}>
                              {'<'}
                            </MDBBtn>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                              alt="avatar 3"
                              style={{ width: "40px", height: "100%" }}
                              className="d-flex align-self-center me-3"
                              width="40rem"
                            />
                            <h5 style={{ color: "white" }}>Syed M</h5>

                          </div>
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
                                className={`d-flex flex-row justify-content-${message.sender === "me" ? "end" : "start"}`}
                              >
                                <div>
                                  <p
                                    className={`small p-2 ${message.sender === "me"
                                      ? "me-3 text-white bg-primary"
                                      : "ms-3 rounded-3"
                                      }`}
                                  >
                                    {message.content}
                                  </p>
                                  <p
                                    className={`small ${message.sender === "me" ? "me-3" : "ms-3"
                                      } mb-3 rounded-3 text-muted`}
                                  >
                                    {message.timestamp}
                                  </p>
                                </div>
                                <img
                                  src={
                                    message.sender === "me"
                                      ? "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                      : ""
                                  }
                                  alt="avatar"
                                  className="d-flex align-self-center me-3"
                                  width="45"
                                  style={{ height: "100%" }}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
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
                              onKeyDown={handleKeyDown}
                            />
                            <a className="ms-1 text-muted" href="#!">
                              <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
                                <MDBIcon icon="share" />
                              </label>
                              <input
                                type="file"
                                id="fileInput"
                                style={{ display: "none" }}
                                onChange={(e) => handleFileUpload(e.target.files)}
                              />
                            </a>
                            <a className="ms-3 text-muted" href="#!" onClick={handleClick}>


                              <div>
                                {showEmojis && (
                                  <div>
                                    {emojis.map((emoji, index) => (
                                      <span
                                        key={index}
                                        onClick={() => handleEmojiClick(emoji)}
                                        //style={{ cursor: 'pointer' }}
                                        className={selectedEmoji === emoji ? 'selected' : ''}
                                      >
                                        {emoji}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>

                              <i className="fas fa-smile"></i>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedButton === "reviews" && (
            <div
              style={{
                width: '100%',
                borderRadius: '10px',
                height: '100%',
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'center',
                alignContent: "flex-start",
                alignItems: 'center',
              }}
            >
              <h2 style={{ display: 'flex', justifyContent: 'center' }}>Reviews</h2>
              <div
                style={{
                  width: '80%',
                  overflowY: 'scroll',
                  backgroundColor: '#002A5C',
                  borderRadius: '10px',
                  height: '80%',
                  marginTop: '3rem',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-evenly', color: "white", width: "100%", margin: "0px" }}>
                  <h4 style={{ marginTop: "2rem", justifySelf: "center", borderRight: "2px solid white", paddingRight: "2rem" }}>Average Rating</h4>
                  <div style={{ borderRight: "2px solid white", paddingRight: "3rem", marginTop: "2rem", }}>
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
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: "column", margin: "3rem" }}>
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
            </div>)}
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