import swal from "sweetalert";

const SellerEnquiry = () => {
    return (
        <section className="buyerform pt-5 pb-5 home-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>

                    {/* Card Container */}
                    <div className="col-lg-6">
                        <div id="cardContainer">
                            {/* Initial Buyer Enquiry Card */}
                            <div id="initialCard" className="card shadow">
                                <div className="card-header text-center form-card-header">
                                    <h3>Seller Enquiry</h3>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <input className="form-control mb-3" placeholder="Enter your mobile number" />
                                        <button className="btn custom-btn">Generate OTP</button>
                                    </div>
                                    <hr />
                                    <div className="mb-3">
                                        <input className="form-control-sm mb-3" placeholder="Enter OTP" />
                                        <h6>
                                            <button
                                                className="btn custom-btn"
                                                onClick={() => {
                                                    document.getElementById("initialCard").classList.add("d-none");
                                                    document.getElementById("newFormCard").classList.remove("d-none");
                                                }}
                                            >
                                                Submit OTP
                                            </button>
                                        </h6>
                                    </div>
                                </div>
                            </div>

                            {/* New Card with Additional Form */}
                            <div id="newFormCard" className="card shadow d-none">
                                <div className="card-header text-center form-card-header">
                                    <h3> Enter Your Details Here </h3>
                                </div>
                                <div className="card-body text-center">
                                    <div className="mb-3">
                                        {/* <label className="form-label">Name</label> */}
                                        <input type="text" className="form-control" placeholder="Enter your name" />
                                    </div>
                                    <div className="mb-3">
                                        {/* <label className="form-label">Email Address</label> */}
                                        <input type="email" className="form-control" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        {/* <label className="form-label">Email Address</label> */}
                                        <input type="number" className="form-control" placeholder="Enter your mobile number" />
                                    </div>
                                    <div className="mb-3">
                                        {/* <label className="form-label">Email Address</label> */}
                                        <input type="number" className="form-control" placeholder="Enter alternate mobile number" />
                                    </div>
                                    <div className="mb-3">
                                        {/* <label className="form-label">Mill Address</label> */}
                                        <input type="text" className="form-control" placeholder="Enter farm address" />
                                    </div>
                                    <div className="mb-3">
                                        {/* <label className="form-label">Email Address</label> */}
                                        <input type="text" className="form-control" placeholder="Enter your product name" />
                                    </div>
                                    <div className="mb-3">
                                        {/* <label className="form-label">Email Address</label> */}
                                        <input type="number" className="form-control" placeholder="Enter approximate weight in tons" />
                                    </div>
                                    <div className="mb-3">
                                        {/* <label className="form-label">Email Address</label> */}
                                        <input type="number" className="form-control" placeholder="Enter selling price per ton" />
                                    </div>
                                    {/* <div className="mb-3">
                                        <label className="form-label">Buyer Type</label>
                                        <select className="form-select">
                                            <option value="" disabled selected>
                                                Select buyer type
                                            </option>
                                            <option value="individual">Individual</option>
                                            <option value="company">Company</option>
                                        </select>
                                    </div> */}
                                    <div className="mb-3">
                                        {/* <label className="form-label">Description of Enquiry</label> */}
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            placeholder="Enter Additional Details About You Or The Product If Needed"
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn custom-btn" onClick={() => {
                                        swal("Completed", "Product details sent successfully. Our team will contact you shortly", "success")
                                            .then(() => {
                                                // Redirect to "/home" after SweetAlert closes
                                                window.location.href = "/home"; // This will redirect to the /home route
                                            });

                                    }}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                </div>
            </div>
        </section>
    )
}

export default SellerEnquiry;