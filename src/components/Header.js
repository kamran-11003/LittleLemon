import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/restauranfood.jpg";

const Header = () => {
  return (
    <header className="header">
      <section className="header-content">
        <div className="banner">
          <h1>Welcome to Little Lemon</h1>
          <h2>Discover the Flavors of Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, dedicated to
            serving traditional recipes with a modern twist.
          </p>
          <Link to="/booking">
            <button aria-label="Reserve a Table">Reserve Table</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="Delicious Restaurant Food" />
        </div>
      </section>
    </header>
  );
};

export default Header;
