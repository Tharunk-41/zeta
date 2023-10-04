import React, { useState, useRef } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import imag from "../../assets/operator.png";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { VscPassFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Operator = () => {
    const [image, setImage] = useState(null);
    const [buttonText, setButtonText] = useState("Save and Next"); // Button text state
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState({
        registeredName: "",
        email: "",
        phone: "",
        location: ""
    });
    const [showButton, setShowButton] = useState(false); // Button visibility state
    const [disabled, setDisabled] = useState(false); // Input field disable state
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };
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
    const handleSaveAndNext = () => {
        // Handle save and next logic here
        setDisabled(true);
        setShowButton(true);
        setButtonText("Save");
    };
    const handleS = () => {
        // Handle save and next logic here
        setDisabled(false);
        setShowButton(false);
        setButtonText("Save and Next");
    };
    return (
        <div className="profile">
            <div class="row">
                <div class="column1" style={{ backgroundColor: "#002A5C" }}>
                    <div className="line">
                        <ol style={{ listStyle: "none", color: "#F5F5F5", paddingTop: "160px" }}>
                            <li
                                style={{ paddingTop: "40px" }}
                            >
                                <VscPassFilled color=" #FF6F00" /> About Business
                            </li>
                            <li className="active"
                                style={{ color: "#FFFFFF", paddingTop: "200px" }}>
                                <VscPassFilled color=" #FF6F00" padding="2px" /> About Operator
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="column2" style={{ backgroundColor: "#F5F5F5" }}>
                    <MDBRow className="align-items-center">
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
                    <MDBRow style={{ backgroundColor: "#F5F5F5", paddingLeft: "20px" }}>
                        <MDBCol md="10" className="mb-4">
                            <form>
                                <h1>Full name</h1>
                                <MDBInput
                                    label="First     Middle   Last  "
                                    className="mb-4"
                                    size="lg"
                                    type="text"
                                    name="registeredName" // Add the name attribute
                                    value={formData.registeredName}
                                    onChange={handleInputChange}
                                    disabled={disabled} // Disable input field based on the `disabled` state
                                    style={{ backgroundColor: "#D9D9D9" }}
                                />
                                <h1>Email Address</h1>
                                <MDBInput
                                    label="Email"
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
                                    label="Phone"
                                    type="text"
                                    name="phone"
                                    className="mb-4"
                                    value={formData.phone}
                                    disabled={disabled} // Disable input field based on the `disabled` state
                                    onChange={handleInputChange}
                                    style={{ backgroundColor: "#D9D9D9" }}
                                />
                                <h1>Designation</h1>
                                <MDBInput
                                    label=""
                                    type="text"
                                    name="location"
                                    className="mb-4"
                                    value={formData.location}
                                    disabled={disabled} // Disable input field based on the `disabled` state
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
                        }}
                    >
                        <Link to="/details">
                            <MDBBtn size="lg" style={{ backgroundColor: "#FF6F00", justifySelf: "center" }} onClick={handleSaveAndNext}>
                                {buttonText}
                            </MDBBtn>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Operator;
