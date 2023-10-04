import React, { useState, useRef } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import imag from "../../assets/Ellipse 38.png";
import { MDBRow, MDBIcon, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { BsCircleFill } from "react-icons/bs";
import { VscPassFilled } from "react-icons/vsc";
import { FiMail } from 'react-icons/fi';
import { MdPhone } from 'react-icons/md';
import { IoIosCalendar } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { FaLanguage } from 'react-icons/fa';
import "./Profile_v.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const [image, setImage] = useState(null);
  const [form, setForm] = useState("about");
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    registeredName: "",
    email: "",
    phone: "",
    location: "",
    date: "",
    language: "",
    category: "",
    subCategory: "",
    platform: "",
    platformIdLink: "",
    collabCategory: "",
    brandName: "",
    socialMediaPlatform: "",
    achievementDescription: "",
    workDescription_collab: "",
    workDescription_portfolio: "",
    workLink: "",
    agreeToTerms: false, // Initialize the checkbox state as false
  });

  const socialMediaPlatformOptions = [
    "Facebook",
    "Instagram",
    "Twitter",
    "YouTube",
    "LinkedIn",
    "TikTok",
    // Add more social media platform options as needed
  ];

  const categoryOptions = ["Category 1", "Category 2", "Category 3"];
  const collabCategoryOptions = ["Category 1", "Category 2", "Category 3"];
  const subCategoryOptions = ["Sub-Category 1", "Sub-Category 2", "Sub-Category 3"];
  const platformOptions = ["Platform 1", "Platform 2", "Platform 3"];
  const [completed, setCompleted] = useState(false);
  const [completed1, setCompleted1] = useState(false);
  const [completed2, setCompleted2] = useState(false);
  const [completed3, setCompleted3] = useState(false);
  const [completed4, setCompleted4] = useState(false);
  const [showButton, setShowButton] = useState(false); // Button visibility state
  const [disabled, setDisabled] = useState(false); // Input field disable state
  const [showButton1, setShowButton1] = useState(false); // Button visibility state
  const [disabled1, setDisabled1] = useState(false);
  const [showButton2, setShowButton2] = useState(false); // Button visibility state
  const [disabled2, setDisabled2] = useState(false);
  const [showButton3, setShowButton3] = useState(false); // Button visibility state
  const [disabled3, setDisabled3] = useState(false);
  const [showButton4, setShowButton4] = useState(false); // Button visibility state
  const [disabled4, setDisabled4] = useState(false);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImage(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const openFileExplorer = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  // Handle adding a new set of category details
  const handleAddMore = () => {
    setFormData([...formData, { category: "", subCategory: "", platform: "", platformIdLink: "" }]);
  };



  const handleSaveAndNext = (event) => {
    if (form === "about") {

      if (
        formData.registeredName.trim() === "" ||
        formData.email.trim() === "" ||
        formData.phone.trim() === "" ||
        formData.location.trim() === "" ||
        formData.date.trim() === "" ||
        formData.language.trim() === ""
      ) {
        setCompleted(false);
        alert("Please fill in all fields");
        return; // Stop execution if any field is empty
      }
      else {
        event.preventDefault();
        setDisabled(true);
        setShowButton(true);
        setForm("category");
        setCompleted(true);
      }

    }

    else if (form === "category") {
      if (
        formData.category.trim() === "" ||
        formData.subCategory.trim() === "" ||
        formData.platform.trim() === "" ||
        formData.platformIdLink.trim() === ""
      ) {
        setCompleted1(false);
        alert("Please fill in all fields");
        return; // Stop execution if any field is empty
      }
      else {
        event.preventDefault();
        setDisabled1(true);
        setShowButton1(true);
        setForm("collab");
        setCompleted1(true);
      }
    }

    else if (form === "collab") {
      if (
        formData.collabCategory.trim() === "" ||
        formData.brandName.trim() === "" ||
        formData.workDescription_collab.trim() === ""

      ) {
        setCompleted2(false);
        alert("Please fill in all fields");
        return; // Stop execution if any field is empty
      }
      else {
        event.preventDefault();
        setDisabled2(true);
        setShowButton2(true);
        setForm("achieve");
        setCompleted2(true);
      }
    }
    else if (form === "achieve") {

      if (
        formData.socialMediaPlatform.trim() === "" ||
        formData.achievementDescription.trim() === ""

      ) {
        setCompleted3(false);
        alert("Please fill in all fields");
        return; // Stop execution if any field is empty
      }
      else {
        event.preventDefault();
        setDisabled3(true);
        setShowButton3(true);
        setForm("portfolio");
        setCompleted3(true);
      }

    }
    else if (form === "portfolio") {
      if (
        formData.workDescription_portfolio.trim() === "" ||
        formData.workLink.trim() === "" ||
        formData.agreeToTerms === false
      ) {
        setCompleted4(false);
        alert("Please fill in all fields");
        return; // Stop execution if any field is empty
      }
      else {
        event.preventDefault();
        setDisabled4(true);
        setShowButton4(true);
        setForm("portfolio");
        setCompleted4(true);
      }
    }

  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });

  };
  const side = (event, button) => {
    event.preventDefault();
    setForm(button);
  };

  return (
    <div className="profile1">
      <div className="row">
        <div className="column1" style={{ backgroundColor: "#002A5C" }}>
            <ol style={{ listStyle: "none", color: "#F5F5F5"}}>
              <li
                className={form === "about" ? "active" : ""}
                onClick={(event) => side(event, "about")}
              >
                {completed ? <VscPassFilled color="#FF6F00" /> : <BsCircleFill color="#FF6F00" />}
                About Yourself
              </li>
              <li style={{ paddingTop: "80px" }} className={form === "category" ? "active" : ""} onClick={(event) => side(event, "category")}>
                {completed1 ? <VscPassFilled color="#FF6F00" padding="2px" /> : <BsCircleFill color="#FF6F00" padding="2px" />}
                Category Details
              </li>
              <li style={{ paddingTop: "80px" }} className={form === "collab" ? "active" : ""} onClick={(event) => side(event, "collab")}>
                {completed2 ? <VscPassFilled color="#FF6F00" padding="2px" /> : <BsCircleFill color="#FF6F00" padding="2px" />}
                Collaborations
              </li>
              <li style={{ paddingTop: "80px" }} className={form === "achieve" ? "active" : ""} onClick={(event) => side(event, "achieve")}>
                {completed3 ? <VscPassFilled color="#FF6F00" padding="2px" /> : <BsCircleFill color="#FF6F00" padding="2px" />}
                Achievements
              </li>
              <li style={{ paddingTop: "80px" }} className={form === "portfolio" ? "active" : ""} onClick={(event) => side(event, "portfolio")}>
                {completed4 ? <VscPassFilled color="#FF6F00" padding="2px" /> : <BsCircleFill color="#FF6F00" padding="2px" />}
                Portfolio
              </li>
            </ol>
        </div>
        {form === "about" && (
          <div className="column2" style={{ backgroundColor: "#F5F5F5" }}>
            <MDBRow style={{ height: "5%", alignItems: "center", width: "100%" }}>
              <MDBCol>
                <h1 style={{ color: "red", display: "inline-flex", alignItems: "center" }}>
                  *
                  <span style={{ fontSize: "10px", marginLeft: "5px" }}>Add Photo</span>
                </h1>
              </MDBCol>
            </MDBRow>
            <div>
              <div className="image-container">
                <div className="circle d-flex" onClick={openFileExplorer}>
                  {image ? (
                    <img src={image} alt="Uploaded" className="preview-image" />
                  ) : (
                    <img src={imag} alt="Default" className="preview-image" />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    id="upload-input"
                    style={{ display: "none" }}
                  />
                  <span>+</span>
                </div>
              </div>
            </div>
            <MDBRow style={{ backgroundColor: "#F5F5F5", paddingLeft: "20px" }}>
              <MDBCol md="10" className="mb-4">
                <form>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <h1>Full Name</h1>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <MDBIcon icon="user" />
                        <MDBInput
                          label="First Middle Last"
                          type="text"
                          name="registeredName" // Add the name attribute
                          value={formData.registeredName}
                          onChange={handleInputChange}
                          icon={<MDBIcon icon="user" />}
                          style={{ backgroundColor: "#D9D9D9" }}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="mb-4">
                    <MDBCol>
                      <h1>Email Address</h1>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <FiMail />
                        <MDBInput
                          label="Email"
                          type="text"
                          name="email"
                          value={formData.email}
                          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                          onChange={handleInputChange}
                          style={{ backgroundColor: "#D9D9D9" }}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="mb-4">
                    <MDBCol>
                      <h1>Phone no.</h1>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <MdPhone />
                        <MDBInput
                          label="Phone"
                          type="number"
                          name="phone"
                          pattern="[0-9]{10}"
                          value={formData.phone}
                          onChange={handleInputChange}
                          style={{ backgroundColor: "#D9D9D9" }}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="mb-4">
                    <MDBCol>
                      <h1>Date</h1>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <IoIosCalendar />
                        <MDBInput
                          label="DD/MM/YYYY"
                          type="text"
                          name="date"
                          pattern="\d{2}-\d{2}-\d{4}"
                          //className="mb-4"
                          value={formData.date}
                          onChange={handleInputChange}
                          style={{ backgroundColor: "#D9D9D9" }}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="mb-4">
                    <MDBCol>
                      <h1>Location</h1>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <FaHome />
                        <MDBInput
                          label="Country"
                          type="text"
                          name="location"
                          //className="mb-4"
                          value={formData.location}
                          onChange={handleInputChange}
                          style={{ backgroundColor: "#D9D9D9" }}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="mb-4">
                    <MDBCol>
                      <h1>Language</h1>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <FaLanguage />
                        <MDBInput
                          label="Language"
                          type="text"
                          name="language"
                          //className="mb-4"
                          value={formData.language}
                          onChange={handleInputChange}
                          style={{ backgroundColor: "#D9D9D9" }}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>

                </form>
              </MDBCol>
            </MDBRow>
            <div
              className="text-center"
              style={{
                paddingBottom: "20px",
                backgroundColor: "#F5F5F5",
                marginRight: "10px"
              }}
            >
              <MDBBtn
                size="lg"
                onClick={handleSaveAndNext}
                style={{ backgroundColor: "#FF6F00", justifySelf: "center" }}
              >
                Save and Next              </MDBBtn>
            </div>
          </div>
        )}
        {form === "category" && (
          <div className="column2" style={{ backgroundColor: "#F5F5F5", }}>
            <div style={{ padding: "2rem" }}>
              <div className="card" style={{ backgroundColor: "#A8A3A3", padding: "20px", width: "100%", borderRadius: "10px" }}>
                {/*<h1>Category Details</h1>*/}
                <div>
                  <div className="mb-4">
                    <h2 style={{ color: "#002a5c", fontFamily: "Inria Serif", fontStyle: "normal", fontSize: "25px", fontWeight: "900" }}>Category</h2>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      style={{
                        backgroundColor: "white",
                        width: "80%", // Set the width as needed
                        height: "80px", // Set the height as needed
                        color: "#002a5c",
                        fontWeight: "500",
                        fontSize: "20px",
                        borderRadius: "12px",
                        marginLeft: "2rem"
                      }}
                    >
                      <option value="" >Select Category</option>
                      {categoryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <h2 style={{ color: "#002a5c", fontFamily: "Inria Serif", fontStyle: "normal", fontSize: "25px", fontWeight: "900" }}>Sub-Category</h2>
                    <select
                      name="subCategory"
                      value={formData.subCategory}
                      onChange={handleInputChange}
                      style={{
                        backgroundColor: "white",
                        width: "80%", // Set the width as needed
                        height: "80px", // Set the height as needed
                        color: "#002a5c",
                        fontWeight: "500",
                        fontSize: "20px",
                        borderRadius: "12px",
                        marginLeft: "2rem"
                      }}
                    >
                      <option value="">Select Sub-Category</option>
                      {subCategoryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <h2 style={{ color: "#002a5c", fontFamily: "Inria Serif", fontStyle: "normal", fontSize: "25px", fontWeight: "900" }}>Platform</h2>
                    <select
                      name="platform"
                      value={formData.platform}
                      onChange={handleInputChange}
                      style={{
                        backgroundColor: "white",
                        width: "80%", // Set the width as needed
                        height: "80px", // Set the height as needed
                        color: "#002a5c",
                        fontWeight: "500",
                        fontSize: "20px",
                        borderRadius: "12px",
                        marginLeft: "2rem"
                      }}
                    >
                      <option value="">Select Platform</option>
                      {platformOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <h2 style={{ color: "#002a5c", fontFamily: "Inria Serif", fontStyle: "normal", fontSize: "25px", fontWeight: "900" }}>Platform ID Link</h2>
                    <input
                      type="text"
                      name="platformIdLink"
                      value={formData.platformIdLink}
                      onChange={handleInputChange}
                      placeholder="Add your Platform ID link here"

                      style={{
                        backgroundColor: "white",
                        width: "80%", // Set the width as needed
                        height: "80px", // Set the height as needed
                        color: "#002a5c",
                        fontWeight: "500",
                        fontSize: "20px",
                        borderRadius: "12px",
                        marginLeft: "2rem"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center" style={{ paddingBottom: "20px", display: "flex", flexDirection: "column", width: "100%", alignItems: "center"}}>
            <button className="btn btn-secondary mt-3" style={{background:"#002a5c", margin:"2rem",width:"30%"}}onClick={handleAddMore}>
                Add More
              </button>
              <MDBBtn
                size="lg"
                onClick={handleSaveAndNext}
                style={{ backgroundColor: "#FF6F00", justifySelf: "center",width:"40%" }}
              >
                Save and Next
              </MDBBtn>
              
            </div>
          </div>
        )}
        {form === "collab" && (
          <div className="column2" style={{ backgroundColor: "#F5F5F5" }}>
            <div style={{ padding: "20px" }}>
              <div className="card" style={{ backgroundColor: "rgba(181, 165, 165, 0.5)", padding: "20px" }}>
                {/*<h1>Collaborations</h1>*/}
                <div className="mb-4">
                  <h2 style={{ color: "#002a5c", fontFamily: "Inria Serif", fontStyle: "normal", fontSize: "25px", fontWeight: "900" }}>Category</h2>
                  <select
                    name="collabCategory"
                    value={formData.collabCategory}
                    onChange={handleInputChange}
                    style={{
                      backgroundColor: "white",
                      width: "80%", // Set the width as needed
                      height: "80px", // Set the height as needed
                      color: "#002a5c",
                      fontWeight: "500",
                      fontSize: "20px",
                      borderRadius: "12px",
                      marginLeft: "2rem"
                    }}
                  >
                    <option value="">Select Category</option>
                    {collabCategoryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <h2 style={{ color: "#002a5c", fontFamily: "Inria Serif", fontStyle: "normal", fontSize: "25px", fontWeight: "900" }}>Brand Name</h2>
                  <input
                    type="text"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleInputChange}
                    placeholder="Enter Brand Name"
                    style={{
                      backgroundColor: "white",
                      width: "80%", // Set the width as needed
                      height: "80px", // Set the height as needed
                      color: "#002a5c",
                      fontWeight: "500",
                      fontSize: "20px",
                      borderRadius: "12px",
                      marginLeft: "2rem"
                    }}
                  />
                </div>
                <div className="mb-4">
                  <h2 style={{ color: "#002a5c", fontFamily: "Inria Serif", fontStyle: "normal", fontSize: "25px", fontWeight: "900" }}> Your Work Description</h2>
                  <textarea
                    name="workDescription_collab"
                    value={formData.workDescription_collab}
                    onChange={handleInputChange}
                    placeholder="Add your work description here"
                    style={{
                      backgroundColor: "white",
                      width: "80%", // Set the width as needed
                      height: "80px", // Set the height as needed
                      color: "#002a5c",
                      fontWeight: "500",
                      fontSize: "20px",
                      borderRadius: "12px",
                      marginLeft: "2rem"
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="text-center" style={{ paddingBottom: "20px", display: "flex", flexDirection: "column", width: "100%",alignItems: "center"}}>
            <button className="btn btn-secondary mt-3" style={{background:"#002a5c", margin:"2rem",width:"30%"}}onClick={handleAddMore}>
                Add More
              </button>
              <MDBBtn
                size="lg"
                onClick={handleSaveAndNext}
                style={{ backgroundColor: "#FF6F00", justifySelf: "center" ,width:"40%"}}
              >
                Save and Next
              </MDBBtn>
              
            </div>
          </div>
        )}

        {form === "achieve" && (
          <div className="column2" style={{ backgroundColor: "#F5F5F5" }}>
            <div style={{ padding: "20px" }}>
              <div className="card" style={{ backgroundColor: "rgba(181, 165, 165, 0.5)", padding: "20px" }}>
                {/*<h1>Social Media Achievements</h1>*/}
                <div className="mb-4">
                  <h2 style={{ color: "#002a5c", fontFamily: "Inria Serif", fontStyle: "normal", fontSize: "25px", fontWeight: "900" }}>Platform</h2>
                  <select
                    name="socialMediaPlatform"
                    value={formData.socialMediaPlatform}
                    onChange={handleInputChange}
                    style={{
                      backgroundColor: "white",
                      width: "80%", // Set the width as needed
                      height: "80px", // Set the height as needed
                      color: "#002a5c",
                      fontWeight: "500",
                      fontSize: "20px",
                      borderRadius: "12px",
                      marginLeft: "2rem"
                    }}
                  >
                    <option value="">Select Platform</option>
                    {socialMediaPlatformOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <h2 style={{ color: "#002a5c", fontFamily: "Inria Serif", fontStyle: "normal", fontSize: "25px", fontWeight: "900" }}>Achievement Description</h2>
                  <textarea
                    name="achievementDescription"
                    value={formData.achievementDescription}
                    onChange={handleInputChange}
                    placeholder="Add your achievement description here"
                    style={{
                      backgroundColor: "white",
                      width: "80%", // Set the width as needed
                      height: "80px", // Set the height as needed
                      color: "#002a5c",
                      fontWeight: "500",
                      fontSize: "20px",
                      borderRadius: "12px",
                      marginLeft: "2rem"
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="text-center" style={{ paddingBottom: "20px", display: "flex", flexDirection: "column", width: "100%", alignItems: "center"}}>
            <button className="btn btn-secondary mt-3" style={{background:"#002a5c", margin:"2rem",width:"30%"}}onClick={handleAddMore}>
                Add More
              </button>
              <MDBBtn
                size="lg"
                onClick={handleSaveAndNext}
                style={{ backgroundColor: "#FF6F00", justifySelf: "center" ,width:"40%"}}
              >
                Save and Next
              </MDBBtn>
              
            </div>
          </div>
        )}
        {form === "portfolio" && (
          <div className="column2" style={{ backgroundColor: "#F5F5F5" }}>
            <div style={{ padding: "20px" }}>
              <div className="card" style={{ backgroundColor: "rgba(181, 165, 165, 0.5)", padding: "20px" }}>
                {/*<h1>Portfolio</h1>*/}
                <div className="mb-4">
                  <h2 style={{ color: "#002a5c", fontFamily: "Inria Serif", fontStyle: "normal", fontSize: "25px", fontWeight: "900" }}>Work Description</h2>
                  <textarea
                    name="workDescription_portfolio"
                    value={formData.workDescription_portfolio}
                    onChange={handleInputChange}
                    placeholder="Add work description here"
                    style={{
                      backgroundColor: "white",
                      width: "80%", // Set the width as needed
                      height: "80px", // Set the height as needed
                      color: "#002a5c",
                      fontWeight: "500",
                      fontSize: "20px",
                      borderRadius: "12px",
                      marginLeft: "2rem"
                    }}
                  />
                </div>
                <div className="mb-4">
                  <h2 style={{ color: "#002a5c", fontFamily: "Inria Serif", fontStyle: "normal", fontSize: "25px", fontWeight: "900" }}> Work Link</h2>
                  <textarea
                    name="workLink"
                    value={formData.workLink}
                    onChange={handleInputChange}
                    placeholder="Add work link here"
                    style={{
                      backgroundColor: "white",
                      width: "80%", // Set the width as needed
                      height: "80px", // Set the height as needed
                      color: "#002a5c",
                      fontWeight: "500",
                      fontSize: "20px",
                      borderRadius: "12px",
                      marginLeft: "2rem"
                    }}
                  />
                </div>
                
              </div>
            </div>
            <div className="text-center" style={{ paddingBottom: "20px", display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
            <button className="btn btn-secondary mt-3" style={{background:"#002a5c", margin:"2rem",width:"30%"}}onClick={handleAddMore}>
                Add More
              </button>
              <div>
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  id="agreeToTerms" // Add this line
                  checked={formData.agreeToTerms}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="agreeToTerms">Agree to the Terms and Conditions</label>
                </div>
              <MDBBtn
                size="lg"
                onClick={handleSaveAndNext}
                style={{ backgroundColor: "#FF6F00", justifySelf: "center",marginTop:"2rem" ,width:"40%"}}
              >

                <Link to="/i/details" style={{color:"white",textDecorationLine:"none"}}>Save and Next</Link>

              </MDBBtn>
              
            </div>
          </div>
        )}



      </div>
    </div>
  );
};

export default Profile;
