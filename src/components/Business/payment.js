import React, { useState } from "react";
import { MDBBtn, MDBCard, MDBCardHeader, MDBTypography, MDBCardBody } from "mdb-react-ui-kit";
import "./payment.css";
import { BiSolidOffer } from 'react-icons/bi';

const Payment = ({ id, onClose }) => {
    const handlePopButton = () => {
        onClose();
    };
    const [activeButton, setActiveButton] = useState(id); // Initially set to "post" as default
    const [quantity, setQuantity] = useState(1);

    const individualPrice = 499;
    const calculateTax = (quantity) => {
        return (20 * individualPrice * quantity) / 100;
    };
    const [selectedCoupon, setSelectedCoupon] = useState(null);
    const [tax, setTax] = useState(calculateTax(quantity));

    const handleQuantityChange = (event) => {
        const newQuantity = Number(event.target.value);
        setQuantity(newQuantity);
        const newTax = calculateTax(newQuantity);
        setTax(newTax);
    };
    const totalPrice = quantity * individualPrice;
    const discount = selectedCoupon ? (selectedCoupon.discount * totalPrice) / 100 : 0;
    const finalPrice = totalPrice - discount + tax;

    const [showCouponCodes, setShowCouponCodes] = useState(false);

    const couponCodes = [
        { code: "CODE1", discount: 10 },
        { code: "CODE2", discount: 20 },
        { code: "CODE3", discount: 30 },
    ];

    const handleCouponCodeClick = (coupon) => {
        setSelectedCoupon(coupon);
        setShowCouponCodes(false); // Hide coupon codes section
    };

    const renderCouponCodes = () => {
        return (
            <div>
                {couponCodes.map((coupon) => (
                    <MDBCard
                        key={coupon.code}
                        style={{
                            backgroundColor: "#D9D9D9",
                            margin: "1rem",
                            cursor: "pointer",
                            alignItems: "center",
                            overflowY: "scroll",
                        }}
                        onClick={() => handleCouponCodeClick(coupon)}>
                        <MDBCardBody className="ticket-container">
                            <MDBTypography tag="h6" className="mb-0">
                                <BiSolidOffer size={"25px"} />Code: {coupon.code}
                            </MDBTypography>
                            <MDBTypography tag="p" className="mb-0">
                                Discount: {coupon.discount}%
                            </MDBTypography>
                        </MDBCardBody>
                    </MDBCard>
                ))}
            </div>
        );
    };
    return (
        <div className="ppopup">
            <div className="ppopup-content">
                <MDBCard style={{ height: "100%", width: "100%", backgroundColor: "black" }}>
                    {!showCouponCodes ? (
                        <MDBCardHeader
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                            <MDBTypography
                                tag="h5"
                                className="mb-0"
                                style={{
                                    fontSize: "1.5rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    width: "100%",
                                    borderBottom: "1px solid white",
                                    paddingBottom: "1rem",
                                }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        color: "white",
                                    }}>
                                    <h3 style={{ backgroundColor: "#FF6F00", marginRight: "2vw" }}>
                                        {id}
                                    </h3>
                                    <h3 style={{ marginRight: "2vw" }}>X</h3>
                                    <input
                                        type="number"
                                        min="1"
                                        style={{
                                            width: "5vw",
                                            backgroundColor: "#FF6F00",
                                            height: "2.5rem",
                                        }}
                                        value={quantity}
                                        onChange={handleQuantityChange} />
                                </div>
                                <MDBBtn
                                    onClick={() => setShowCouponCodes(true)}
                                    style={{
                                        backgroundColor: "white",
                                        color: "#FF6F00",
                                        marginTop: "1rem",
                                        width: "20vw",
                                    }}>
                                    Coupon Code
                                </MDBBtn>
                            </MDBTypography>
                        </MDBCardHeader>) : (<MDBCardHeader
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                            <h3 style={{ color: "#FF6F00" }}>Coupon Code</h3>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    alignContent: "space-evenly",
                                    justifyContent: "space-between", // Added justify-content property
                                    color: "white",
                                    fontSize: "10px"
                                }}>
                                <MDBBtn
                                    style={{
                                        backgroundColor: activeButton === "Post Credit" ? "#FF6F00" : "white",
                                        color: activeButton === "Post Credit" ? "white" : "#FF6F00",
                                        marginTop: "1rem",
                                        width: "45%",

                                    }}
                                    onClick={() => setActiveButton("Post Credit")}>
                                    Post credit coupons
                                </MDBBtn>
                                <MDBBtn
                                    style={{
                                        backgroundColor: activeButton === "Shortlist Credit" ? "#FF6F00" : "white",
                                        color: activeButton === "Shortlist Credit" ? "white" : "#FF6F00",
                                        marginTop: "1rem",
                                        width: "45%",
                                    }}
                                    onClick={() => setActiveButton("Shortlist Credit")}>
                                    Shortlist credit coupons
                                </MDBBtn>
                            </div>
                        </MDBCardHeader>)}
                    {!showCouponCodes ? (
                        <MDBCardBody
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                color: "white",
                            }}>
                            <div style={{ fontSize: "25px" }}>
                                <p>Price: {individualPrice}</p>
                                <p>GST: {tax}</p>
                                {discount ? (<p>Discount  :{discount}</p>) : (<p></p>)}
                                <p style={{ borderTop: "1px solid white", paddingTop: "1rem" }}>
                                    Total: ${finalPrice}
                                </p>
                            </div>
                            <MDBBtn
                                onClick={handlePopButton}
                                style={{ backgroundColor: "#FF6F00", marginTop: "1rem" }}>
                                Pay Now
                            </MDBBtn>
                        </MDBCardBody>)
                        : renderCouponCodes()}
                </MDBCard>
            </div>
        </div>
    );
};

export default Payment;
