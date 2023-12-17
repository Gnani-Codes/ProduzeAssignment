import { CiCloudSun } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import "./index.css";

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <CiCloudSun id="logo" />
      <h1 className="header-logo">ProduzeWeather</h1>
    </div>

    <div className="search-container">
      <input type="text" placeholder="Search City" className="input" />
      <FaSearch id="searchIcon" />
    </div>

    <div className="menu-icons-container">
      <FaGlobeAmericas className="icons" />
      <CgProfile className="icons" />
      <IoMdMenu className="icons" />
    </div>
  </div>
);

export default Header;
