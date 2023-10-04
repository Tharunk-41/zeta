import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { IoIosArrowBack, IoMdCalendar } from 'react-icons/io';
import { MDBCol, MDBCardTitle, MDBCardText, MDBIcon } from "mdb-react-ui-kit";

const OrderHistory = ({ handleBack, id }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const orderHistoryData = [
        {
            orderId: 1,
            date: "2023-07-15",
            total: "1000",
            status: "Completed",
            paymentMode: "Credit Card",
            paymentGateway: "Stripe",
            invoiceLink: "https://example.com/invoice/1",
            creditPurchaseType: "Post Credit"
        },
        {
            orderId: 2,
            date: "2023-07-16",
            total: "1500",
            status: "Processing",
            paymentMode: "PayPal",
            paymentGateway: "PayPal",
            invoiceLink: "https://example.com/invoice/2",
            creditPurchaseType: "Shortlist Credit"
        },
        {
            orderId: 3,
            date: "2023-07-17",
            total: "800",
            status: "Completed",
            paymentMode: "Credit Card",
            paymentGateway: "Stripe",
            invoiceLink: "https://example.com/invoice/3",
            creditPurchaseType: "Post Credit"
        },
        {
            orderId: 4,
            date: "2023-07-18",
            total: "2000",
            status: "Completed",
            paymentMode: "Credit Card",
            paymentGateway: "Stripe",
            invoiceLink: "https://example.com/invoice/4",
            creditPurchaseType: "Shortlist Credit"
        },
        {
            orderId: 5,
            date: "2023-07-19",
            total: "1200",
            status: "Completed",
            paymentMode: "PayPal",
            paymentGateway: "PayPal",
            invoiceLink: "https://example.com/invoice/5",
            creditPurchaseType: "Post Credit"
        },
    ];
    const resultArray = [
        {
            creditPurchaseType: "Post Credit",
            quantity: 1, // Replace this with the actual quantity field from your data
            status: "credited", // Assuming paymentMode "Credit Card" means "credited"
            dateTime: "2023-07-15 12:00 PM" // Combine date and time into a single field
        },
        {
            creditPurchaseType: "ShortList Credit",
            quantity: 2, // Replace this with the actual quantity field from your data
            status: "credited", // Assuming paymentMode "Credit Card" means "credited"
            dateTime: "2023-07-17 12:00 PM" // Combine date and time into a single field
        },
        {
            creditPurchaseType: "Post Credit",
            quantity: 3, // Replace this with the actual quantity field from your data
            status: "credited", // Assuming paymentMode "Credit Card" means "credited"
            dateTime: "2023-07-19 12:00 PM" // Combine date and time into a single field
        },
    ];

    const handleDownloadClick = (order) => {
        const fileUrl = order.invoiceLink;
        fetch(fileUrl)
            .then((response) => response.blob())
            .then((blob) => {
                const fileObjectUrl = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = fileObjectUrl;
                link.download = 'your_file_name.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(fileObjectUrl);
            })
            .catch((error) => {
                console.error('Error downloading the file:', error);
            });
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div style={{ width: "100%", overflowY: "scroll", backgroundColor: "#002A5C", borderRadius: "10px", height: "100%", paddingTop: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                <IoIosArrowBack size={30} color="white" onClick={handleBack} />
                <h2 style={{ color: "white", marginLeft: "auto", marginRight: "auto" }}>{id} History</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", color: "white", marginRight: "3rem" }}>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd-MM-yyyy"
                    maxDate={new Date()}
                    customInput={<div>
                        <IoMdCalendar size={24} color="white" style={{ marginRight: "0.5rem", cursor: "pointer" }} />
                        <label style={{ color: "white" }}>{selectedDate ? selectedDate.toLocaleDateString() : "Select a date"}</label>
                    </div>}
                />
            </div>
            {id === "Order" && (<div>
                {orderHistoryData.map((order) => (
                    <div key={order.orderId} style={{ backgroundColor: "black", color: "white", border: "1px solid #ff6f00", borderRadius: "20px", margin: "1rem", padding: "1rem" }}>
                        <MDBCardTitle style={{ borderBottom: "1px solid white", color: "white", fontSize: "24px" }}> Transaction Id: {order.orderId}</MDBCardTitle>
                        <span style={{ width: "100%", height: "90%", display: "flex", flexWrap: "wrap" }}>
                            <MDBCol className="d-flex align-items-center justify-content-center">
                                <div className="d-flex flex-column align-items-center">
                                    <MDBIcon fas icon={order.creditPurchaseType === "Post Credit" ? "address-card" : "users"} size={order.creditPurchaseType === "Post Credit" ? "7x" : "5x"} />
                                    <MDBCardText style={{ color: "white" }}>{order.creditPurchaseType}</MDBCardText>
                                </div>
                            </MDBCol>
                            <MDBCol>
                                <div style={{ height: "2.5rem" }}>
                                    <p style={{ display: "flex", width: "20vw" }}>
                                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "7rem" }}>
                                            <MDBIcon fas icon="tachometer-alt" />
                                            <p style={{ height: '1rem', fontSize: "10px" }}> Status </p>
                                        </div>
                                        {order.status}
                                    </p>
                                </div>
                                <div style={{ height: "2.5rem" }}>
                                    <p style={{ display: "flex" }}>
                                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "7rem" }}>
                                            <MDBIcon fas icon="credit-card" />
                                            <p style={{ height: '1rem', fontSize: "10px" }}>Payment Mode</p>
                                        </div>
                                        {order.paymentMode}
                                    </p>
                                </div>
                                <div style={{ height: "2.5rem" }}>
                                    <p style={{ display: "flex" }}>
                                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "7rem" }}>
                                            <MDBIcon fas icon="money-bill-wave" />
                                            <p style={{ height: '1rem', fontSize: "10px" }}> Payment Amount</p>
                                        </div>
                                        {order.total}
                                    </p>
                                </div>
                            </MDBCol>
                            <MDBCol>
                                <div style={{ height: "2.5rem" }}>
                                    <p style={{ display: "flex", width: "20vw" }}>
                                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "7rem" }}>
                                            <MDBIcon fab icon="cc-paypal" />
                                            <p style={{ height: '1rem', fontSize: "10px" }}> Payment Gateway</p>
                                        </div>
                                        {order.paymentGateway} </p>
                                </div>
                                <div style={{ height: "2.5rem" }}>
                                    <p style={{ display: "flex", width: "20vw" }}>
                                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "7rem" }}>
                                            <MDBIcon fas icon="cloud-download-alt" />
                                            <p style={{ height: '1rem', fontSize: "10px" }}> Invoice</p>
                                        </div>
                                        <a href={order.invoiceLink} download="your_file_name.pdf" onClick={() => handleDownloadClick(order)}>
                                            Download File
                                        </a>
                                    </p>
                                </div>
                            </MDBCol>
                            <MDBCol>
                                <p style={{ display: "flex", alignItems: "center" }}>
                                    <MDBIcon fas icon="clock" />
                                    Date & Time
                                </p>
                                <p>{order.date}</p>
                            </MDBCol>
                        </span>
                    </div>
                ))}
            </div>)}
            {id === "Credit" && (
                <div>
                    {resultArray.map((order) => (
                        <div key={order.orderId} style={{ backgroundColor: "black", color: "white", border: "1px solid #ff6f00", borderRadius: "20px", margin: "1rem", padding: "1rem" }}>
                            <MDBCardTitle style={{ borderBottom: "1px solid white", color: "white", fontSize: "24px" }}> Transaction Id: {order.orderId}</MDBCardTitle>
                            <span style={{ width: "100%", height: "90%", display: "flex", flexWrap: "wrap" }}>
                                <MDBCol className="d-flex align-items-center justify-content-center">
                                    <div className="d-flex flex-column align-items-center">
                                        <MDBIcon fas icon={order.creditPurchaseType === "Post Credit" ? "address-card" : "users"} size={order.creditPurchaseType === "Post Credit" ? "7x" : "5x"} />
                                        <MDBCardText style={{ color: "white" }}>{order.creditPurchaseType}</MDBCardText>
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <div style={{ height: "2.5rem" }}>
                                        <p style={{ display: "flex", width: "20vw", fontSize: "20px" }}>
                                            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "7rem" }}>
                                                <MDBIcon fas icon="tachometer-alt" />
                                                <p style={{ height: '1rem', fontSize: "10px" }}> Status </p>
                                            </div>
                                            {order.status}
                                        </p>
                                    </div>
                                    <div style={{ height: "2.5rem" }}>
                                        <p style={{ display: "flex", fontSize: "20px", width: "20vw" }}>
                                            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "7rem" }}>
                                                <MDBIcon fas icon="shopping-cart" />
                                                <p style={{ height: '1rem', fontSize: "10px" }}> Quantity</p>
                                            </div>
                                            {order.quantity}
                                        </p>
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <p style={{ display: "flex", alignItems: "center" }}>
                                        <MDBIcon fas icon="clock" />
                                        Date & Time
                                    </p>
                                    <p>{order.dateTime}</p>
                                </MDBCol>
                            </span>
                        </div>))}
                </div>)
            }
        </div>
    );
};

export default OrderHistory;