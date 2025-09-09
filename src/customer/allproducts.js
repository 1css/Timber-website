import { products } from "./data";
import { allcategories } from "./data";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [activeIndices, setActiveIndices] = useState([0]);

  const handleToggle = (index) => {
    // Check if index is already in the activeIndices array
    if (activeIndices.includes(index)) {
      // If it is, remove it (close the category)
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      // Otherwise, add it (open the category)
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="allproduct-block home-bg pb-5">
      <section className="container-fluid pt-4">
        <nav aria-label="breadcrumb" className="mb-4">
          {/* <div className='row'> */}
          {/* <div className='col-6 col-sm-6 col-md-7'> */}
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {" "}
              All Products{" "}
            </li>
          </ol>
          {/* </div> */}

          {/* <div className='col-6 col-sm-6 col-md-5'>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search For Products Here"
                                />
                                <button className="btn btn-success" type="button">
                                    Search
                                </button>
                            </div>
                        </div> */}
          {/* </div> */}
        </nav>

        <div className="row">
          <div className="col-lg-3 mb-4">
            <div className="p-3 rounded shadow bg-white web-sticky">
              <h5 className="mb-3 text-center">Filter by Category</h5>
              <div id="categoryFilters" className="accordion">
                {allcategories.categories.map((category, catIndex) => (
                  <div className="accordion-item" key={catIndex}>
                    <h6 className="accordion-header" id={`heading-${catIndex}`}>
                      <button
                        className={`acc-btn accordion-button ${
                          activeIndices.includes(catIndex) ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => handleToggle(catIndex)}
                      >
                        {category.name}
                      </button>
                    </h6>
                    <div
                      id={`collapse-${catIndex}`}
                      className={`accordion-collapse collapse ${
                        activeIndices.includes(catIndex) ? "show" : ""
                      }`}
                      aria-labelledby={`heading-${catIndex}`}
                    >
                      <div className="accordion-body">
                        {category.subcategories.map((subcat, subIndex) => (
                          <div className="form-check" key={subIndex}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`${category.name}-${subcat.sname}`}
                              value={subcat.sname}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`${category.name}-${subcat.sname}`}
                            >
                              {subcat.sname}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="p-3 rounded shadow bg-white">
              <div className="row">
                <h3 className="text-center mb-4">
                  {" "}
                  Number Of Products : {products.length}{" "}
                </h3>
                {products.map((product, index) => {
                  return (
                    <div
                      className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4"
                      key={index}
                    >
                      <div className="p-3 border">
                        <div className="img-container prod-img mb-2">
                          <Link to="/productpage">
                            <img
                              src={product.image} // Dynamic image source
                              alt={product.name} // Dynamic alt text
                              className="img-fluid"
                            />
                          </Link>
                          <Link
                            to="/productpage"
                            className="btn explore-button"
                          >
                            {" "}
                            View Product{" "}
                          </Link>
                        </div>
                        <h5 className="mb-2">{product.name}</h5>{" "}
                        {/* Dynamic product name */}
                        <h6 className="mb-3"> A-Grade, Best Product </h6>
                        <Link
                          to="/buyerenquiry"
                          className="btn fw-medium w-100 seeallbtn"
                        >
                          Enquire Now
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
