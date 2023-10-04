import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/logo.png';
import Detailsv from './components/Influencer/Details_v'
import Operatorv from './components/Influencer/Operator_v';
import Prof from './components/Influencer/prof_v';
import Profilev from './components/Influencer/track_Profile';
import Profile from './components/Business/Profile'
import Details from './components/Business/Details'
import Payment from './components/Business/payment';
import History from './components/Business/OrderHistory';
import Faq from './components/Business/faq';
import Track from './components/Business/track';
import Track1 from './components/Business/track1';
import Contact from './components/Business/contact';
import Post from './components/Business/post';
import Reviews from './components/Business/reviews';
import Details1 from './components/Vendor/Details_v'
import Role from './components/Role';
import Landingpage from './components/Landingpage';
import { MDBBadge, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [blogParameter, setBlogParameter] = useState(false);
  const [dynamicPrefix, setDynamicPrefix] = useState(''); // State to hold the dynamic prefix
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const checkUrl = () => {
      const currentPath = window.location.pathname;
      let newDynamicPrefix = "";
      if (currentPath.includes('/i/')) {
        newDynamicPrefix = 'i'; // Set to 'i' if '/i/' is in the URL
      }
      else if (currentPath.includes('/b/')) {
        newDynamicPrefix = 'b'; // Set to 'i' if '/b/' is in the URL
      }
      else if (currentPath.includes('/v/')) {
        newDynamicPrefix = 'v'; // Set to 'i' if '/v/' is in the URL
      }
      setDynamicPrefix(newDynamicPrefix);
    };

    const intervalId = setInterval(checkUrl, 1000); // Check every second

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const menter = () => {
    hover ? (setHover(false)) : (setHover(true));
  }

  const toggle = () => {
    setBlogParameter(!blogParameter);
  };
  const notifications = [
    { id: 1, title: '2 applicants applied to this post.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut .', dateTime: new Date().toLocaleString() },
    { id: 2, title: '3 applicants applied to this post.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut .', dateTime: new Date().toLocaleString() },
    { id: 2, title: '1 applicants applied to this post.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut .', dateTime: new Date().toLocaleString() },
    // Add more notifications as needed
  ];
  const notify = (notifications) => {
    const content = (
      <div style={{ borderRadius: "20px" }}>
        {notifications.map((notification) => (
          <MDBCard key={notification.id} style={{ borderRadius: "0px", border: "1px solid #FF6F00" }}>
            <div style={{ position: 'absolute', top: '5px', right: '10px' }}>
              <span>{notification.dateTime}</span>
            </div>
            <MDBCardTitle style={{ borderBottom: '1px solid' }}>
              <strong>{notification.title}</strong>
            </MDBCardTitle>
            <MDBCardBody>{notification.body}</MDBCardBody>
          </MDBCard>
        ))}
      </div>
    );

    toast.success(content, {
      position: 'top-right',
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <MDBDropdown>
                <MDBDropdownToggle style={{ color: hover ? "white" : "#002a5c", backgroundColor: hover ? "#ff6f00" : "transparent", border: "none", textTransform: "none", fontFamily: "Inria Serif", boxShadow: "none", fontSize: "20px", paddingTop: "0px", paddingRight: "10px", paddingBottom: "5px", paddingLeft: "10px" }} onMouseEnter={menter} onMouseLeave={menter}>
                  About
                </MDBDropdownToggle>
                <MDBDropdownMenu style={{ border: "2px solid black", width: "30vw", fontFamily: "Inria Serif", fontSize: "20px" }}>
                  <MDBDropdownItem href="#" style={{ borderBottom: "1px solid black", marginTop: "3rem" }}>About Zetalyst</MDBDropdownItem>
                  <MDBDropdownItem href="#" style={{ borderBottom: "1px solid black", marginTop: "3rem" }}>Key Features </MDBDropdownItem>
                  <MDBDropdownItem href="#" style={{ borderBottom: "1px solid black", marginTop: "3rem" }}>Platform</MDBDropdownItem>
                  <MDBDropdownItem href="#" style={{ borderBottom: "1px solid black", marginTop: "3rem" }}>Testimonials</MDBDropdownItem>
                  <MDBDropdownItem href="#" style={{ borderBottom: "1px solid black", marginTop: "3rem" }}>Guidelines</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </li>
            <li>
              <Link to={dynamicPrefix !== "" ? `${dynamicPrefix}/details` : "/"}>Feature</Link>
            </li>
            <li>
              <Link to={dynamicPrefix !== "" ? `${dynamicPrefix}/details/${blogParameter ? '' : 'blogID'}` : "/"} onClick={toggle}>FAQ</Link>
            </li>
            <li>
              <Link to="/b/contact">Contact</Link>
            </li>
            <li>
              <a href='#!' onClick={() => { notify(notifications); setPopupOpen(true); }}>
                <MDBIcon fas icon='bell' size='lg' />
                <MDBBadge color='danger' dot /></a>
            </li>
          </ul>
        </nav>
        {/* Page content */}
        <Routes>
          <Route path="/b/profile" element={<Profile />} />
          <Route path="/b/payment" element={<Payment />} />
          <Route path="/b/details/:parameter" element={<Details />} />
          <Route path="/b/details" element={<Details />} />
          <Route path="/b/history" element={<History />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/b/track" element={<Track />} />
          <Route path="/b/track" element={<Track1 />} />
          <Route path="/b/contact" element={<Contact />} />
          <Route path="/b/post" element={<Post />} />
          <Route path="/b/reviews" element={<Reviews />} />
          <Route path="/i/profile" element={< Profilev />} />
          <Route path="/i/operator" element={<Operatorv />} />
          <Route path="/i/details" element={<Detailsv />} />
          <Route path="/i/details/:parameter" element={<Detailsv />} />
          <Route path="/v/details" element={<Details1 />} />
          <Route path="/v/details/:parameter" element={<Details1 />} />
          <Route path="/i/prof" element={<Prof />} />
          <Route path="/role" element={<Role />} />
          <Route path="/" element={<Landingpage />} />
        </Routes>
        {popupOpen && (
          <ToastContainer position="top-right" style={{ width: "40vw" }} />
        )}
      </div>
    </Router>
  );
}

export default App;

