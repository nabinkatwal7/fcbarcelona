import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="top">
        <div className='logo-div'>
          <a href="#">
            <img
              className="logo-img"
              src="https://pngimg.com/uploads/fcb_logo/fcb_logo_PNG25.png"
              alt="logo"
            />
            <h4>FC BARCELONA</h4>
          </a>
        </div>
        <a href="#">Follow</a>
        <a href="#">Twitter</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Youtube</a>
        <a href="#">Tiktok</a>
        <a href="#">Twitch</a>
        <a href="#">Login</a>
        <a href="#">Register as Culer</a>
        <a href="#">EN</a>
        <a href="#">All Barca Sites</a>
      </div>
      <div className="button">
        <a href="#">FIRST TEAM</a>
        <a href="#">TICKETS AND MUSEUM</a>
        <a href="#">SHOP</a>
        <a href="#">CULERS</a>
        <a href="#">BARCA TEAMS</a>
        <a href="#">SEARCH</a>
      </div>
    </div>
  );
}

export default Navbar;
