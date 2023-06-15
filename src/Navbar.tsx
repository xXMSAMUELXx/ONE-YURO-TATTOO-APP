import { useState } from "react";
//import { useEffect } from "react";
import "./styles/nav-styles.css";
import { useMediaQuery } from "usehooks-ts";

export default function Navbar() {
  const greaterThan800 = useMediaQuery("(min-width: 800px)");
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav>
      {(toggleMenu || greaterThan800) && (
        <div className="nav-container">
          <div className="logo">
            <a href="/">
              <img src="/logo.png" width={220} height={95} alt={"1eruo"} />
            </a>
          </div>

          <ul className="list">
            <li>
              <a href="/" className="active">
                HOME
              </a>
              <a href="#about-section" className="active">
                ABOUT
              </a>
              <a href="#flash-section" className="active">
                FLASH
              </a>
              <a href="#book-apt" className="active">
                BOOK APPOINTMENT
              </a>
            </li>
          </ul>
        </div>
      )}
      <button onClick={toggleNav} className="btn-toggle">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>
    </nav>
  );
}
