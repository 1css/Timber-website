
const Footer = () => {
    return(
        <div className="footer pt-5 pb-2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 p-3 mb-3">
                        <img src="./TimberLogo-removebg.png" className="mb-3" height={150}/>
                        <h6> Contact Us : </h6>
                        <h6> Email : support@forestfactree.com </h6>
                        <h6> Contact Number: +91-xxxxxxxxx </h6>
                    </div>

                    <div className="col-lg-4 p-4 mb-3 d-flex align-items-start">
                        <p className="fw-medium"> Mailing Address: ABCD Office, ABCD Building, ABCD Area, ABCD City, ABCD District, ABCD State, India - 000000 </p>
                    </div>

                    <div className="col-lg-5 p-4 mb-3">
                        <img src="./iipm-preview.png" height={100} width={250} className="me-5 mb-3" />
                        <img src="./msme-logo.png" height={100} />

                        <p className="mt-5 text-success">
                            <i className="fa-brands fa-facebook fa-2x me-4"></i>
                            <i className="fa-brands fa-instagram fa-2x me-4"></i>
                            <i className="fa-brands fa-linkedin fa-2x me-4"></i>
                            <i className="fa-brands fa-whatsapp fa-2x me-4"></i>
                        </p>
                    </div>

                    

                    
                </div>
            </div>
        </div>
    )
}

export default Footer;