import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/pngegg.png"
const Navbar = () => {
  return (
    <div className="navContainer">
      <div>
        <img
          src={logo}
          width="80px"
          alt=""
          height="60px"
        />
      </div>
      
      <div className="navRightcontainer">
      <div>
          <Link style={{textDecoration:"none", color:"white"}} to="/">Home</Link>
        </div>
        <div>
          <Link style={{textDecoration:"none", color:"white"}} to="/signup">Signup</Link>
        </div>
        <div>
          <Link style={{textDecoration:"none", color:"white"}} to="/createPost">Create</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
