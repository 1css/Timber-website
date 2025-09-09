import { Link } from "react-router-dom";

const ContactUs = () => {
    return(
        <section className="contactus home-bg pt-4 pb-5">
            <div className="container-fluid">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb ps-4">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="p-4 pt-3">
                            <div className="card shadow">
                                <div className="card-header text-center form-card-header">
                                    <h4> Contact Us </h4>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3 mt-3">
                                        <input type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="number" className="form-control" placeholder="Mobile"/>
                                    </div>
                                    <div className="mb-3">
                                        <select className="form-select">
                                            <option selected> Select User Type </option>
                                            <option> Buyer </option>
                                            <option> Seller </option>
                                            <option> Other </option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control" placeholder="Enter Your Enquiry Here"/>
                                    </div>
                                    <div className="mb-3 text-center">
                                        <button className="btn btn-lg custom-btn"> Submit </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                

                    <div className="col-12 col-lg-6">
                        <div className="p-4 pt-3 h-100">
                            <div className="bg-overlay p-4 rounded shadow d-flex flex-column justify-content-center align-items-start h-100">
                                <h3 className="mb-4 text-white">Reach out to us</h3>
                                <h6 className="mb-3 text-white">Email: support@forestfactree.com</h6>
                                <h6 className="mb-3 text-white">Contact Number: +91-xxxxxxxxx</h6>
                                <h6 className="mb-3 text-white">Contact Number 2: +91-xxxxxxxxxx</h6>
                                <h6 className="mb-3 text-white">
                                    Mailing Address: ABCD Office, ABCD Building, ABCD Area, ABCD City,
                                    ABCD District, ABCD State, India - 000000
                                </h6>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default ContactUs;