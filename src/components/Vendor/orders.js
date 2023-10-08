import React, { useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBIcon, MDBCardText, MDBCardTitle, MDBRow, MDBCol } from 'mdb-react-ui-kit'; // Import MDB components
const Order = () => {
    const [activeButton, setActiveButton] = useState(null);
    const [activeButton1, setActiveButton1] = useState('Add_new');
    const [activeButton2, setActiveButton2] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };
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
    const numbersArray = [40, 13, 25, 112];
    const orderHistoryData = [
        {
            orderId: 1,
            date: "2023-07-15",
            total: "1000",
            status: "Completed",
            paymentMode: "Credit Card",
            paymentGateway: "Stripe",
            invoiceLink: "https://example.com/invoice/1",
            creditPurchaseType: "Vendor Service"
        },
        {
            orderId: 2,
            date: "2023-07-16",
            total: "1500",
            status: "Processing",
            paymentMode: "PayPal",
            paymentGateway: "PayPal",
            invoiceLink: "https://example.com/invoice/2",
            creditPurchaseType: "Vendor Service"
        },
        {
            orderId: 3,
            date: "2023-07-17",
            total: "800",
            status: "Completed",
            paymentMode: "Credit Card",
            paymentGateway: "Stripe",
            invoiceLink: "https://example.com/invoice/3",
            creditPurchaseType: "Vendor Service"
        },
        {
            orderId: 4,
            date: "2023-07-18",
            total: "2000",
            status: "Completed",
            paymentMode: "Credit Card",
            paymentGateway: "Stripe",
            invoiceLink: "https://example.com/invoice/4",
            creditPurchaseType: "Vendor Service"
        },
        {
            orderId: 5,
            date: "2023-07-19",
            total: "1200",
            status: "Completed",
            paymentMode: "PayPal",
            paymentGateway: "PayPal",
            invoiceLink: "https://example.com/invoice/5",
            creditPurchaseType: "Vendor Service"
        },
    ];
    const filteredOrders = orderHistoryData.filter((order) =>
        order.orderId.toString().includes(searchQuery.toLowerCase())
    );
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    const handleButtonClick1 = (buttonName) => {
        setActiveButton1(buttonName);
    };
    const handleButtonClick2 = (buttonName) => {
        setActiveButton2(buttonName);
    };
    function getColor(index) {
        const colors = ['violet', 'green', 'purple', '#FF6F00'];
        return colors[index];
    }

    return (
        <div>
            <div
                style={{
                    border: '1px solid #ff6f00',
                    padding: '10px',
                    display: 'flex',
                    borderRadius: '10px',
                    justifyContent: "space-evenly"
                }}
            >
                <MDBBtn
                    color="transparent"
                    style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: activeButton === 'Orders' ? '#002a5c' : 'grey',
                        fontWeight: '500'
                    }}
                    onClick={() => handleButtonClick('Orders')}
                >
                    Transactions
                </MDBBtn>
                <MDBBtn
                    color="transparent"
                    style={{

                        backgroundColor: 'transparent',
                        border: 'none',
                        color: activeButton === 'Order' ? '#002a5c' : 'grey',
                        fontWeight: '500'
                    }}
                    onClick={() => handleButtonClick('Order')}
                >
                    Orders
                </MDBBtn>
                <MDBBtn
                    color="transparent"
                    style={{

                        backgroundColor: 'transparent',
                        border: 'none',
                        color: activeButton === 'Withdrawal' ? '#002a5c' : 'grey',
                        fontWeight: '500'
                    }}
                    onClick={() => handleButtonClick('Withdrawal')}
                >
                    Withdrawal
                </MDBBtn>
                <MDBBtn
                    color="transparent"
                    style={{

                        backgroundColor: 'transparent',
                        border: 'none',
                        color: activeButton === 'MoneyCollected' ? '#002a5c' : 'grey',
                        fontWeight: '500'
                    }}
                    onClick={() => handleButtonClick('MoneyCollected')}
                >
                    Money collected
                </MDBBtn>
            </div>


            {activeButton === 'Withdrawal' && (
                <div>
                    <MDBCard style={{ width: '100%', height: '15rem', marginTop: '2rem', backgroundColor: "#002a5c", marginBottom: '4rem' }}>
                        <MDBCardBody>
                            <MDBCardTitle style={{ color: 'white', fontSize: '40px' }}>Total Net INR Value</MDBCardTitle>
                            <MDBCardText style={{ color: 'white', paddingLeft: '10rem', fontSize: '40px', font: 'bold' }}> ₹ 1,19,876/-</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <MDBBtn
                            style={{
                                backgroundColor: activeButton1 === 'Add_new' ? '#ff6f00' : 'grey',
                                border: 'none',
                                color: 'white',
                                width: '40%',
                                height: '4rem'
                            }}
                            onClick={() => handleButtonClick1('Add_new')}
                        >
                            Add new bank account
                        </MDBBtn>
                        <MDBBtn

                            style={{
                                backgroundColor: activeButton1 === 'withdraw' ? '#ff6f00' : 'grey',
                                border: 'none',
                                color: 'white',
                                width: '40%',
                                height: '4rem'
                            }}
                            onClick={() => handleButtonClick1('withdraw')}
                        >
                            Withdraw
                        </MDBBtn></div>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <MDBBtn
                            style={{
                                backgroundColor: '#ff6f00',
                                border: 'none',
                                color: 'white',
                                width: '20rem',
                                height: '4rem',
                                marginTop: '5rem',

                            }}
                            onClick={() => handleButtonClick1('home')}
                        >
                            Home
                        </MDBBtn>
                    </div>
                </div>
            )}
            {activeButton === 'MoneyCollected' && (
                <div>
                    <MDBCard style={{ marginTop: '2rem', width: '100%', color: 'white', backgroundColor: '#002a5c' }}>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol >
                                    <MDBIcon fas icon="money-bill" size='2x' />
                                    <MDBCardText style={{ fontWeight: '500' }}>Total collections</MDBCardText>
                                </MDBCol>
                                <MDBCol >
                                    <MDBCardText style={{ fontWeight: '500', fontSize: '25px' }}>₹ 1,89,067/-</MDBCardText>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard style={{ width: '100%', color: 'white', backgroundColor: '#002a5c', }}>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol>
                                    <MDBIcon icon="desktop" size="2x" />
                                    <MDBCardText style={{ fontWeight: '500' }}>Platform</MDBCardText>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCardText style={{ fontWeight: '500', fontSize: '25px' }}>PayTM Account</MDBCardText>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard style={{ width: '100%', color: 'white', backgroundColor: '#002a5c' }}>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol>
                                    <MDBIcon icon="calendar-alt" size="2x" />
                                    <MDBCardText style={{ fontWeight: '500' }}>Collection Date</MDBCardText>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCardText style={{ fontWeight: '500', fontSize: '25px' }}>11-05-23 to 15-07-23 </MDBCardText>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard style={{ width: '100%', color: 'white', backgroundColor: '#002a5c' }}>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol>
                                    <MDBIcon fas icon="hand-holding-usd" size="2x" />
                                    <MDBCardText style={{ fontWeight: '500' }}>Cashback</MDBCardText>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCardText style={{ fontWeight: '500', fontSize: '25px' }}>₹ 1003/-</MDBCardText>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <MDBBtn
                            style={{
                                backgroundColor: '#ff6f00',
                                border: 'none',
                                color: 'white',
                                width: '20rem',
                                height: '4rem',
                                marginTop: "5rem"
                            }}
                            onClick={() => handleButtonClick1('home')}
                        >
                            Home
                        </MDBBtn>
                    </div>
                </div>
            )}
            {activeButton === 'Order' && (
                <div>
                    <div
                        style={{
                            padding: '10px',
                            display: 'flex',
                            borderRadius: '10px',
                            marginTop: '2rem',
                            justifyContent: "space-evenly"
                        }}
                    >
                        {['All', 'New', 'Pending', 'Delivered'].map((buttonName, index) => (
                            <div key={buttonName}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <MDBBtn
                                        color="transparent"
                                        style={{
                                            backgroundColor: 'transparent',
                                            border: 'none',
                                            color: 'black',
                                            fontWeight: '500',
                                            display: "flex",
                                            textDecoration:
                                                activeButton2 === buttonName.toLowerCase()
                                                    ? `underline ${getColor(index)} 20%`
                                                    : 'none',
                                        }}
                                        onClick={() => handleButtonClick2(buttonName.toLowerCase())}
                                    >
                                        {buttonName}
                                        {numbersArray[index] > 0 && (
                                            <div
                                                style={{
                                                    backgroundColor: getColor(index),
                                                    color: 'white',
                                                    borderRadius: '50%',
                                                    width: '26px',
                                                    height: '24px',
                                                    textAlign: 'center',
                                                    lineHeight: '24px',
                                                    marginLeft: '8px',
                                                }}
                                            >
                                                {numbersArray[index]}
                                            </div>
                                        )}
                                    </MDBBtn>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem', width: "100%", justifyContent: "space-evenly" }}>
                        <div style={{ display: 'flex', alignItems: 'center', width: '30%' }}>
                            <MDBIcon icon="search" />
                            <input type="text" placeholder="Search" style={{ marginLeft: '0.5rem' }} onChange={handleSearchInputChange} value={searchQuery} />
                        </div>
                        <div style={{ marginLeft: '1rem', display: 'flex', alignItems: 'center', width: "30%" }}>
                            <MDBIcon icon="filter" />
                            <input type="text" placeholder="Filter" style={{ marginLeft: '0.5rem' }} disabled/>
                        </div>
                    </div>
                    <div style={{ overflowY: "scroll", height: "30rem", marginTop: "2rem" }}>
                        {filteredOrders.map((order) => (
                            <div key={order.orderId} style={{ backgroundColor: "black", color: "white", border: "1px solid #ff6f00", borderRadius: "20px", margin: "1rem", padding: "1rem" }}>
                                <MDBCardTitle style={{ borderBottom: "1px solid white", color: "white", fontSize: "24px", display: "flex" }}> Order Id: {order.orderId} <div
                                    style={{
                                        backgroundColor: "#2AED31CC",
                                        color: 'white',
                                        borderRadius: '50px',
                                        height: '24px',
                                        width: "10%",
                                        textAlign: 'center',
                                        lineHeight: '24px',
                                        marginLeft: '3rem',
                                    }}
                                >
                                    Paid
                                </div>
                                </MDBCardTitle>
                                <span style={{ width: "100%", height: "90%", display: "flex", flexWrap: "wrap" }}>
                                    <MDBCol className="d-flex align-items-center justify-content-center">
                                        <div className="d-flex flex-column align-items-center">
                                            <MDBIcon fas icon="wrench" size="2x" />
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
                                </span>
                            </div>
                        ))}</div>
                </div>
            )}
        </div>
    );
};

export default Order;
