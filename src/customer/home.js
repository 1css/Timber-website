import { allcategories } from "./data";
import { Link } from "react-router-dom";
import { products } from "./data";
import { useEffect } from "react";

const Home = () => {

  const getRandomProducts = (categoryName) => {
    // Filter products by category and pick 4 random ones
    const categoryProducts = products.filter(product => product.category === categoryName);
    return categoryProducts.sort(() => 0.5 - Math.random()).slice(0, 4);
  };

  useEffect(()=>{
    getRandomProducts();
  },[]);

    return(
        <>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">

            <div className="carousel-item active h-25">
              <img
                src="/carousel1.jpg"
                alt="Los Angeles"
                className="d-block w-100 carousel-img"
              />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h1> Best Quality Wood </h1>
                <h4> We provide timber of the highest quality. </h4>
              </div>
            </div>

            <div class="carousel-item">
              <img
                src="/carousel2.jpg"
                alt="Chicago"
                className="d-block w-100 carousel-img"
              />
              <div className="carousel-caption">
                <h1> Best Quality Plants </h1>
                <h4> Plants that are highly taken care of. </h4>
              </div>
            </div>

            <div class="carousel-item">
              <img
                src="/carousel3.jpg"
                alt="New York"
                className="d-block w-100 carousel-img"
              />
              <div className="carousel-caption">
                <h1> Best Quality Seeds </h1>
                <h4> Seeds that give you the best plants and crops. </h4>
              </div>
            </div>
          </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>



      <div className="category-block home-bg pb-1">

      <section className="container-fluid pt-5">

            {/* <div className="container-fluid p-4 mb-5 rounded shadow bg-white">
              <h3 className="mb-3 text-center"> Shop From Our List Of Categories  </h3>
              <div className="row">
                {allcategories.categories.map((category, index) => {
                  return (
                    <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3">
                      <div className="p-2">
                        <h5 className="text-center">{category.name}</h5>
                        <div className="img-container prod-img">
                          <Link to="/allproducts"><img src={category.cimage} alt={category.name} className="img-fluid rounded" /></Link>
                        </div>
                        <Link className="btn w-100 fw-medium seeallbtn" to="/allproducts"> See All Products </Link>
                      </div>
                    </div>
                  );
                })}

                
              </div>
            </div> */}


            <div className="container-fluid p-4 mb-5 rounded shadow bg-white">
              <h3 className="mb-3"> Crafting Sustainability, One Category at a Time  </h3>
              <h6 className="mb-3"> Find inspiration in our diverse collection – Wood for craft, Plants for life, Seeds for growth, and Biochar for sustainability. </h6>
              <div className="row">
                {allcategories.categories.map((category, index) => {
                  return (
                    <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3">
                      <div className="p-2">
                        <div className="img-container cat-img">
                          <Link to="/allproducts"><img src={category.cimage} alt={category.name} className="img-fluid"/></Link>
                          <Link to="/allproducts" className="btn explore-button"> Explore </Link>
                        </div>
                        <h5 className="text-center mt-2">{category.name}</h5>
                      </div>
                    </div>
                  );
                })}


              </div>
            </div>




        {
          
          allcategories.categories.map((category, catIndex) => (
            <div key={catIndex} className="container-fluid p-4 mb-5 rounded shadow bg-white">
              <h4 className="mb-2">{category.name} <Link className="btn btn-outline-custom fw-medium ms-2" to='/allproducts'> View All </Link></h4>
              <h6 className="mb-3"> {category.cdescp}  </h6>
              <div className="row">
                {getRandomProducts(category.name).map((product, prodIndex) => (

                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4" key={prodIndex}>
                    <div className="p-3 border">
                      <div className="img-container prod-img mb-2">
                        <Link to="/allproducts">
                          <img
                            src={product.image} // Dynamic image source
                            alt={product.name}   // Dynamic alt text
                            className="img-fluid"
                          />
                        </Link>
                        <Link to="/allproducts" className="btn explore-button"> View All </Link>
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
          ))
        }
        
      </section>

      </div></>
        
    )
}

export default Home;