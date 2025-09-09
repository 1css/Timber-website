import { Link } from "react-router-dom";
import { useState } from "react";
import { products } from "./data";

const ProductPage = () => {

    const images = ["/seed1.jpg", "/seed2.jpg", "/seed3.jpg", "/seed4.jpg"];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const getRandomProducts = (products) => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 4);
    };

    const randomProducts = getRandomProducts(products);


    return (
        <div className="product-page home-bg pt-4 pb-5">
            <section className="container-fluid">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item"><Link to="/allproducts">All Products</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Product Page</li>
                    </ol>
                </nav>
                <div className="row mb-3">
                    <div className="col-lg-6 mb-4">
                        <div className="p-4 bg-white shadow rounded">
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <img src={selectedImage} className="img-fluid rounded upper-image" alt="Selected" />
                                </div>
                                <div className="row ps-4">
                                    {images.map((image, index) => (
                                        <div key={index} className="col-3">
                                            <img
                                                src={image}
                                                className={`img-fluid lower-image rounded ${selectedImage === image ? "border border-success" : ""
                                                    }`}
                                                alt={`Thumbnail ${index + 1}`}
                                                style={{
                                                    cursor: "pointer",
                                                    borderWidth: selectedImage === image ? "2px" : "1px",
                                                    backgroundColor: selectedImage === image ? "rgba(0, 255, 0, 0.1)" : "transparent", // Green background for selected image
                                                }}
                                                onClick={() => handleImageClick(image)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="p-4 bg-white shadow rounded web-sticky">
                            <h4 className="mb-4"> Teak Wood Product </h4>
                            <p>
                                <b>Description:</b> This product is directly sourced from one of the most nutrient rich, fertile land in India. The wood that is obtained is of the finest quality and can be used in all kinds of furniture. The wood is all-weather resistant.
                            </p>
                            <hr />
                            <div className="text-center">
                                <Link to="/buyerenquiry" className="btn btn-lg custom-btn me-4 mb-3"> Enquire Now </Link>
                                <button className="btn custom-btn me-4 mb-3 fs-5"> <img src="/whatsappicon.png" height={35}/> Enquire via Whatsapp </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="container-fluid p-4 rounded shadow bg-white">
                    <h4 className="mb-2"> Related Products Curated For You </h4>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                            <div className="p-3 border">
                                <div className="img-container prod-img mb-2">
                                    <Link to="/allproducts">
                                        <img
                                            src="/tree1.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <Link to="/productpage" className="btn explore-button"> View Product </Link>
                                </div>
                                <h5 className="mb-2"> Product Name </h5>
                                <h6 className="mb-3"> A-Grade, Best Product </h6>
                                <Link to="/buyerenquiry" className="btn fw-medium w-100 seeallbtn">
                                    Enquire Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="container-fluid p-4 rounded shadow bg-white">
                    <h4 className="mb-2"> Related Products You Might Like </h4>
                    <h6 className="mb-3"> Explore more products curated just for you based on your selection </h6>
                    <div className="row">
                        {randomProducts.map((product, index) => (
                            <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                                <div className="p-3 border">
                                    <div className="img-container prod-img mb-2">
                                        <Link to="/allproducts">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="img-fluid"
                                            />
                                        </Link>
                                        <Link to="/productpage" className="btn explore-button"> View Product </Link>
                                    </div>
                                    <h5 className="mb-2"> {product.name} </h5>
                                    <h6 className="mb-3"> A-Grade, Best Product </h6>
                                    <Link to="/buyerenquiry" className="btn fw-medium w-100 seeallbtn">
                                        Enquire Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </section>

        </div>
    )
}

export default ProductPage;