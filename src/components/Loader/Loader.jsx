import React from "react";
import "./loader.css";

const Loader = ({ name }) => {
  const main = () => {
    return (
      <>
        <div className="L-body container">
          <div className="L-main">
            <div className="L-filter">
              <button className="filter-btn"></button>
            </div>
            <div className="L-search">
              <input type="text" />
              <button></button>
            </div>
          </div>

          <div className="L-res_container">
            <div className="L-restro_card">
              <img alt="" />
              <span className="h3"></span>
              <span className="h3"></span>
              <span className="h4"></span>
            </div>
            <div className="L-restro_card">
              <img alt="" />
              <span className="h3"></span>
              <span className="h3"></span>
              <span className="h4"></span>
            </div>
            <div className="L-restro_card">
              <img alt="" />
              <span className="h3"></span>
              <span className="h3"></span>
              <span className="h4"></span>
            </div>
            <div className="L-restro_card">
              <img alt="" />
              <span className="h3"></span>
              <span className="h3"></span>
              <span className="h4"></span>
            </div>
            <div className="L-restro_card">
              <img alt="" />
              <span className="h3"></span>
              <span className="h3"></span>
              <span className="h4"></span>
            </div>
            <div className="L-restro_card">
              <img alt="" />
              <span className="h3"></span>
              <span className="h3"></span>
              <span className="h4"></span>
            </div>{" "}
            <div className="L-restro_card">
              <img alt="" />
              <span className="h3"></span>
              <span className="h3"></span>
              <span className="h4"></span>
            </div>
            <div className="L-restro_card">
              <img alt="" />
              <span className="h3"></span>
              <span className="h3"></span>
              <span className="h4"></span>
            </div>
            <div className="L-restro_card">
              <img alt="" />
              <span className="h3"></span>
              <span className="h3"></span>
              <span className="h4"></span>
            </div>
            <div className="L-restro_card">
              <img alt="" />
              <span className="h3"></span>
              <span className="h3"></span>
              <span className="h4"></span>
            </div>
            <div className="L-restro_card">
              <img alt="" />
              <span className="h3"></span>
              <span className="h3"></span>
              <span className="h4"></span>
            </div>
          </div>
        </div>
      </>
    );
  };

  const lazyLod = () => {
    return (
      <>
        <div className="L-body container">
          <div className="L-res_container">
            <div className="L-restro_card">
              <img alt="" />
              <span className="h3"></span>
              <span className="h3"></span>
              <span className="h4"></span>
            </div>
            <div className="L-restro_card">
              <img alt="" />
              <span className="h3"></span>
              <span className="h3"></span>
              <span className="h4"></span>
            </div>
            <div className="L-restro_card">
              <img alt="" />
              <span className="h3"></span>
              <span className="h3"></span>
              <span className="h4"></span>
            </div>
          </div>
        </div>
      </>
    );
  };

  if (name === "main") {
    return main();
  } else {
    return lazyLod();
  }
};

export default Loader;
