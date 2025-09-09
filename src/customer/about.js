import { Link } from "react-router-dom";

const About = () =>{
    return(
        <div className="about pt-5 pb-5 home-bg">
            {/* <div className="container-fluid">
                <h5> Who we are ?</h5>
                <h1 className="mb-4"> OUR COMMITMENT TO FOREST MANAGEMENT </h1>
                <div className="row">
                    <div className="col-12 col-lg-6 mb-4">
                        <img src="/forest1.jpg" className="img-fluid rounded about-img"/>
                    </div>
                    <div className="col-12 col-lg-6 mb-4">
                        <img src="/forest2.jpg" className="img-fluid rounded about-img"/>
                    </div>
                </div>
                <div className="row p-1">
                    <div className="col-lg-3 mb-4">
                        <div className="bg-white p-4 rounded shadow about-div">
                            <i className="fa-solid fa-tree fa-3x mb-2 text-success"></i>
                            <h5> Timber Harvesting </h5>
                            <p>
                                Involves planning harvest and reforestation; cutting trees and moving them to a landing.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-4">
                        <div className="bg-white p-4 rounded shadow about-div">
                            <i className="fa-solid fa-tractor fa-3x mb-2 text-success"></i>
                            <h5> Forest Management </h5>
                            <p>
                            Helps us identify the resources and opportunities available in terms of financial gain and long-term sustainability.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-4">
                        <div className="bg-white p-4 rounded shadow about-div">
                            <i className="fa-solid fa-truck fa-3x mb-2 text-success"></i>
                            <h5> Log And Timber Sales </h5>
                            <p>
                            Helps us identify the resources and opportunities available in terms of financial gain and long-term sustainability.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-4">
                        <div className="bg-white p-4 rounded shadow about-div">
                            <i className="fa-solid fa-truck-fast fa-3x mb-2 text-success"></i>
                            <h5> Timber Cruising & Appraisal </h5>
                            <p>
                            The process of measuring the volume and quality of standing and down timber before it has been harvested.
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="container-fluid aboutusblock">
                <h2> Empowering Farmers, Enriching Lives, Delivering Quality </h2>
                <h6> At ForestFactree, we believe in building sustainable relationships with the backbone of our nation—our farmers. Our mission is to bridge the gap between nature's finest produce and our valued customers by sourcing high-quality wood, plants, seeds, and biochar directly from the heart of the land.
                </h6>
                <h6>We work hand-in-hand with farmers, harvesting their land with care and ensuring they receive the best possible prices for their hard-earned produce. This not only supports their livelihood but also fosters a sense of trust and empowerment within the farming community.</h6>
                <h6>Every product we offer tells a story—of dedication, sustainability, and quality. From premium teak wood to nutrient-rich seeds, vibrant plants, and eco-friendly biochar, we ensure that our customers receive only the finest products that meet their diverse needs.</h6>
                <h6>At ForestFactree, we are committed to creating a positive impact—supporting farmers, preserving the environment, and delivering excellence to our customers. Together, we are growing a greener future, one harvest at a time.</h6>
            </div> */}
            <div className="ps-5 pe-5">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </nav>
                <div className="container-fluid aboutusblock text-white text-start p-5">
                    <h2 className="mb-5"> Empowering Farmers, Enriching Lives, Delivering Quality </h2>
                    <h5 className="mb-3"> At ForestFactree, we believe in building sustainable relationships with the backbone of our nation—our farmers. Our mission is to bridge the gap between nature's finest produce and our valued customers by sourcing high-quality wood, plants, seeds, and biochar directly from the heart of the land.
                    </h5>
                    <h5 className="mb-3">We work hand-in-hand with farmers, harvesting their land with care and ensuring they receive the best possible prices for their hard-earned produce. This not only supports their livelihood but also fosters a sense of trust and empowerment within the farming community.</h5>
                    <h5 className="mb-3">Every product we offer tells a story—of dedication, sustainability, and quality. From premium teak wood to nutrient-rich seeds, vibrant plants, and eco-friendly biochar, we ensure that our customers receive only the finest products that meet their diverse needs.</h5>
                    <h5 className="mb-3">At ForestFactree, we are committed to creating a positive impact—supporting farmers, preserving the environment, and delivering excellence to our customers. Together, we are growing a greener future, one harvest at a time.</h5>
                </div>
            </div>
        </div>
    )
}

export default About;