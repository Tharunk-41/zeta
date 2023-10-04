import React, { useState, useRef } from "react";
import imag from "../../assets/Ellipse 38.png";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { BsCircleFill } from "react-icons/bs";
import { VscPassFilled } from "react-icons/vsc";
import { IoIosArrowBack } from 'react-icons/io';
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const [image, setImage] = useState(null);
  const [form, setForm] = useState("profile");
  const [buttonText, setButtonText] = useState("Save and Next"); // Button text state
  const [buttonText1, setButtonText1] = useState("Save and Next"); // Button text state
  const fileInputRef = useRef(null);
  const [checked, setChecked] = useState(false);
  const [showButton, setShowButton] = useState(false); // Button visibility state
  const [disabled, setDisabled] = useState(false); // Input field disable state
  const [showButton1, setShowButton1] = useState(false); // Button visibility state
  const [disabled1, setDisabled1] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [completed1, setCompleted1] = useState(false);

  const [formData, setFormData] = useState({
    registeredName: "",
    email: "",
    phone: "",
    location: "",
    registeredName1: "",
    email1: "",
    phone1: "",
    designation: ""
  });

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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSaveAndNext = (event) => {
    if (form === "profile") {
      if (
        formData.registeredName.trim() === "" ||
        formData.email.trim() === "" ||
        formData.phone.trim() === "" ||
        formData.location.trim() === ""
      ) {
        setCompleted(false);
        alert("Please fill in all fields");
        return; // Stop execution if any field is empty
      }
      else {
        setDisabled(true);
        setShowButton(true);
        setButtonText("Save");
        setCompleted(true);
      }
    }
    else if (form === "operator") {
      if (
        formData.registeredName1.trim() === "" ||
        formData.email1.trim() === "" ||
        formData.phone1.trim() === "" ||
        formData.designation.trim() === "" ||
        checked === false
      ) {
        setCompleted1(false);
        alert("Please fill in all fields");
        return; // Stop execution if any field is empty
      }
      else {
        event.preventDefault();
        setDisabled1(true);
        setShowButton1(true);
        setButtonText1("Save");
        setForm("operator");
        setCompleted1(true);
      }
    }
  };
  const handleS = () => {
    if (form === "profile") {
      setDisabled(false);
      setShowButton(false);
      setButtonText("Save and Next");
    }
    else if (form === "operator") {
      setDisabled1(false);
      setShowButton1(false);
      setButtonText1("Save and Next");
    }
  };
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  const side = (event, button) => {
    event.preventDefault();
    setForm(button);
  };
  const handleBack = () => {
    setForm("profile");
  }
  const handleNext = (event) => {
    event.preventDefault();
    setForm("operator");
  }
  const compl = () => {
    if (!showButton || !showButton1) { alert("Please Save All The Details"); return }
  }
  return (
    <div className="profile">
      <div class="row">
        <div class="column1" style={{ backgroundColor: "#002A5C" }}>
          <div style={{ display: "flex", width: "100%" }} className="px-4">
            {form === "operator" ? (<IoIosArrowBack size={30} color="white" onClick={handleBack} />) : (<Link to="/b/details"><IoIosArrowBack size={30} color="white" /></Link>)}
            <ol style={{ listStyle: "none", color: "#F5F5F5", paddingTop: "160px", paddingLeft: "3rem" }}>
              <li
                className={form === "profile" ? "active" : ""}
                style={{ color: "#FFFFFF", paddingTop: "40px" }}
                onClick={(event) => side(event, "profile")}
              >
                {completed ? <VscPassFilled color="#FF6F00" /> : <BsCircleFill color="#FF6F00" />}
                Business
              </li>
              <li style={{ paddingTop: "200px" }} className={form === "operator" ? "active" : ""} onClick={(event) => side(event, "operator")}>
                {completed1 ? <VscPassFilled color="#FF6F00" padding="2px" /> : <BsCircleFill color="#FF6F00" padding="2px" />}
                Operator
              </li>
            </ol>
          </div>
        </div>
        {form === "profile" && (
          <div class="column2" style={{ backgroundColor: "#F5F5F5" }}>
            <MDBRow style={{ height: "5%", alignItems: "center", width: "100%" }}>
              <MDBCol>
                <h1 style={{ color: "red", display: "inline-flex", alignItems: "center" }}>
                  *
                  <span style={{ fontSize: "10px", marginLeft: "5px" }}>Add Photo</span>
                </h1>
              </MDBCol>
              <MDBCol className="text-end">
                {showButton && (
                  <MDBBtn style={{ backgroundColor: "#FF6F00", marginRight: "5px" }} onClick={handleS}>edit</MDBBtn>)}
              </MDBCol>
            </MDBRow>
            <div style={{ height: "30%", alignItems: "center" }}>
              <div className="image-container">
                <div className="circle" onClick={openFileExplorer}>
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
                    style={{ display: 'none' }}
                  />
                </div>
                <h1 style={{ fontSize: "30px", paddingBottom: "1rem" }}>+</h1>
              </div>
            </div>
            <MDBRow style={{ backgroundColor: "#F5F5F5", paddingLeft: "20px", height: "50%", width: "100%" }}>
              <MDBCol md="10" className="mb-4">
                <form>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <h1>Legal Registered name</h1>
                      <div className="d-flex align-items-center justify-content-center">
                        <MDBInput
                          label={<MDBIcon icon="user"> Enter registered name here </MDBIcon>}
                          type="text"
                          required
                          name="registeredName" // Add the name attribute
                          value={formData.registeredName}
                          onChange={handleInputChange}
                          icon={<MDBIcon icon="user" />}
                          disabled={disabled} // Disable input field based on the `disabled` state
                          style={{ backgroundColor: "#D9D9D9" }}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <h1>Email Address</h1>
                  <MDBInput
                    label={<MDBIcon fas icon="envelope" />}
                    placeholder="Email"
                    required
                    type="text"
                    name="email"
                    className="mb-4"
                    size="lg"
                    value={formData.email}
                    disabled={disabled} // Disable input field based on the `disabled` state
                    onChange={handleInputChange}
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                  <h1>Phone no.</h1>
                  <MDBInput
                    required
                    label={<MDBIcon fas icon="mobile-alt">  Phone</MDBIcon>}
                    type="number"
                    name="phone"
                    className="mb-4"
                    value={formData.phone}
                    disabled={disabled} // Disable input field based on the `disabled` state
                    onChange={handleInputChange}
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                  <h1>Location</h1>
                  <MDBInput
                    required
                    label={<MDBIcon fas icon="home">  Country-State</MDBIcon>}
                    type="text"
                    name="location"
                    className="mb-4"
                    value={formData.location}
                    disabled={disabled} // Disable input field based on the `disabled` state
                    onChange={handleInputChange}
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                </form>
              </MDBCol>
            </MDBRow>
            <div
              className="text-center"
              style={{
                paddingBottom: "20px",
                backgroundColor: "#F5F5F5",
                marginRight: "10px",
              }}
            >
              {buttonText === "Save" ? (
                <MDBBtn size="lg" style={{ backgroundColor: "#FF6F00", justifySelf: "center" }} onClick={handleNext}>
                  {buttonText}
                </MDBBtn>
              ) : (
                <MDBBtn
                  size="lg"
                  style={{ backgroundColor: "#FF6F00", justifySelf: "center" }}
                  onClick={(event) => handleSaveAndNext(event)}>
                  {buttonText}
                </MDBBtn>
              )}
            </div>
          </div>)}
        {form === "operator" && (
          <div class="column2" style={{ backgroundColor: "#F5F5F5" }}>
            <MDBRow className="align-items-center" style={{ height: "5%", width: "100%" }}>
              <MDBCol>
                <h1 style={{ color: "red", display: "inline-flex", alignItems: "center" }}>
                  *
                  <span style={{ fontSize: "10px", marginLeft: "5px" }}>Add Photo</span>
                </h1>
              </MDBCol>
              <MDBCol className="text-end">
                {showButton1 && (
                  <MDBBtn style={{ backgroundColor: "#FF6F00", marginRight: "5px" }} onClick={handleS}>edit</MDBBtn>)}
              </MDBCol>
            </MDBRow>
            <div>
              <div className="image-container">
                <div className="circle" onClick={openFileExplorer}>
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
                    style={{ display: 'none' }}
                  />
                </div>
                <span>+</span>
              </div>
            </div>
            <MDBRow style={{ backgroundColor: "#F5F5F5", paddingLeft: "20px", height: "60%", width: "100%" }}>
              <MDBCol md="10" className="mb-4">
                <form>
                  <h1>Full name</h1>
                  <MDBInput
                    label={<MDBIcon icon="user"> First Middle Last </MDBIcon>}
                    className="mb-4"
                    size="lg"
                    type="text"
                    name="registeredName1" // Add the name attribute
                    value={formData.registeredName1}
                    onChange={handleInputChange}
                    disabled={disabled1} // Disable input field based on the `disabled` state
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                  <h1>Email Address</h1>
                  <MDBInput
                    label={<MDBIcon fas icon="envelope" />}
                    placeholder="Email"
                    type="text"
                    name="email1"
                    className="mb-4"
                    size="lg"
                    value={formData.email1}
                    disabled={disabled1} // Disable input field based on the `disabled` state
                    onChange={handleInputChange}
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                  <h1>Phone no.</h1>
                  <MDBInput
                    label={<MDBIcon fas icon="mobile-alt">  Phone</MDBIcon>}
                    placeholder="+country code - number "
                    type="number"
                    name="phone1"
                    className="mb-4"
                    value={formData.phone1}
                    disabled={disabled1} // Disable input field based on the `disabled` state
                    onChange={handleInputChange}
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                  <h1>Designation</h1>
                  <MDBInput
                    label={<MDBIcon fas icon="id-badge" />}
                    type="text"
                    name="designation"
                    className="mb-4"
                    value={formData.designation}
                    disabled={disabled1} // Disable input field based on the `disabled` state
                    onChange={handleInputChange}
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                  <div className="container">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={checked}
                        onChange={handleCheckboxChange}
                      />
                      <label className="form-check-label">I agree to all the terms and conditions.</label>
                    </div>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
            <div
              className="text-center"
              style={{
                paddingBottom: "20px",
                backgroundColor: "#F5F5F5",
                marginRight: "10px",
              }}>
              {buttonText1 === "Save" ? (
                <Link to={showButton && showButton1 && "/details"}>
                  <MDBBtn size="lg" style={{ backgroundColor: "#FF6F00", justifySelf: "center" }} onClick={compl}>
                    {buttonText1}
                  </MDBBtn>
                </Link>
              ) : (
                <MDBBtn
                  size="lg"
                  style={{ backgroundColor: "#FF6F00", justifySelf: "center" }}
                  onClick={(event) => handleSaveAndNext(event)}>
                  {buttonText1}
                </MDBBtn>
              )}
            </div>
          </div>)}
      </div>
    </div>
  );
};
export default Profile;