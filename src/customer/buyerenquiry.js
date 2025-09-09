import swal from "sweetalert";

const BuyerEnquiry = () => {
    return(
        // <section className="buyerform pt-5 pb-5 home-bg">
        //     <div className="container">
        //         <div className="row">

        //             <div className="col-lg-3"></div>

        //             <div className="col-lg-6">
        //                 <div className="card shadow">
        //                     <div className="card-header text-center">
        //                         <h3> Buyer Enquiry </h3>
        //                     </div>
        //                     <div className="card-body">
        //                         <div className="mb-3">
        //                             <input className="form-control mb-3" placeholder="Enter your mobile number"/>
        //                             <button className="btn custom-btn"> Generate OTP </button>
        //                         </div>
        //                         <hr/>
        //                         <div className="mb-3">
        //                             <input className="form-control-sm mb-3" placeholder="Enter OTP"/>
        //                             <h6><button className="btn custom-btn"> Submit </button></h6>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="col-lg-3"></div>

        //         </div>
        //     </div>
        // </section>

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
              <h3>Buyer Enquiry</h3>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <input className="form-control mb-3" placeholder="Enter your mobile number"/>
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
              <h3>Enter your details</h3>
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
                <input type="email" className="form-control" placeholder="Enter your mobile number" />
              </div>
              <div className="mb-3">
                {/* <label className="form-label">Email Address</label> */}
                <input type="number" className="form-control" placeholder="Enter alternate mobile number" />
              </div>
              <div className="mb-3">
                {/* <label className="form-label">Mill Address</label> */}
                <input type="text" className="form-control" placeholder="Enter mill address" />
              </div>
              <div className="mb-3">
                {/* <label className="form-label">Buyer Type</label> */}
                <select className="form-select">
                  <option value="" selected>
                    Select buyer type
                  </option>
                  <option value="individual">Individual</option>
                  <option value="company">Company</option>
                </select>
              </div>
              <div className="mb-3">
                {/* <label className="form-label">Description of Enquiry</label> */}
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Provide details about your enquiry"
                ></textarea>
              </div>
              <button type="submit" className="btn custom-btn" onClick={() => {
                      swal("Request Sent", "Your request has been sent successfully. We will get back to you with an update", "success")
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

export default BuyerEnquiry;