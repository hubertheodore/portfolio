import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Logo from "../Image/logo.webp";
import "./Navigation.css";
import "./Navigation.scss";
import Resume from "../Resume.pdf";
import { motion } from "framer-motion";
function Navigation() {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(true);
  const [YCoor, setYCoor] = useState(window.scrollY);
  function clickHandler() {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const controlNavbar = () => {
    if (window.scrollY > YCoor) {
      setShow(false);
      setYCoor(window.scrollY);
      setMenu(false);
    } else {
      setShow(true);
      setYCoor(window.scrollY);
      setMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [YCoor, controlNavbar]);
  return (
    <div className="Navigation">
      <div
        className={`Navbar ${!show && "Nav-hidden"} ${
          YCoor === 0 ? 0 : "Nav-Show"
        } ${menu && "active"}`}
      >
        <div className="Navbar-C1">
          <a href="#home">
            <img
              src={Logo}
              className="d-inline-block align-top"
              alt="Hubert Theodore"
            />
          </a>
        </div>
        <div className="Navbar-C2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#about">
              <div className="Navbar-Num">01. </div>About
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <a href="#contact">
              <div className="Navbar-Num">02. </div> Contact
            </a>
          </motion.div>
          <a href={Resume} download>
            <Button variant="outline-light">Resume</Button>
          </a>
        </div>
        <div onClick={clickHandler} className={`Navbar-M ${menu && "active"}`}>
          <div className="Navbar-Line"></div>
          <div className="Navbar-Line"></div>
          <div className="Navbar-Line"></div>
        </div>
      </div>
      <div
        onClick={clickHandler}
        className={`Navbar-Menu-Backdrop ${menu && "active"}`}
      ></div>
      <div className={`Navbar-Menu ${menu && "active"}`}>
        <div className="Navbar-Menu-Container">
          <ul>
            <li>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.3 }}
              >
                <a href="#home" onClick={clickHandler}>
                  <div className="Navbar-Num">01. </div>
                  Home
                </a>
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
              >
                <a href="#about" onClick={clickHandler}>
                  <div className="Navbar-Num">02. </div>
                  About
                </a>
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7 }}
              >
                <a href="#contact" onClick={clickHandler}>
                  <div className="Navbar-Num">03. </div>
                  Contact
                </a>
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.9 }}
              >
                <a href={Resume} onClick={clickHandler} download>
                  <Button variant="outline-light">Resume</Button>
                </a>
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
