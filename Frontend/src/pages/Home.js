import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Scrap Yard</h1><br /> 
        <p > WISE PEOPELE DO RECYCLING</p>
        <Link to="/about">
          <button> Explore Here </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
