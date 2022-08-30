import React from "react";
import "./About.css";
import Me from "../Image/me.webp";
import { motion } from "framer-motion";
function About() {
  return (
    <div className="About" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="About-container"
      >
        <div className="About-head">
          <div className="Navbar-Num">01. </div> <h2>About Me</h2>{" "}
          <div className="About-line"></div>
        </div>
        <div className="About-main">
          <div>
            <img src={Me} alt="" />
          </div>
          <div>
            <p>
              Hello! My name is Hubert, and I like to build UIs that are
              beautiful and pixel-perfect. I became interested in web
              development when I was at University because the websites that I
              use daily are not good and buggy. As a Computer Science student, I
              became curious about web development. <br />
              <br />I just graduated from Tamkang University in 2022. I've done
              some projects to increase my understanding of designing and
              building websites. I also had{" "}
              <a
                href="https://www.agritunasmakmur.com/"
                target="_blank"
                rel="noreferrer"
              >
                a company
              </a>{" "}
              that hired me to make their company profile website from scratch,
              which was my first work done. <br />
              <br />
              Here are a few technologies I've been working with recently:
            </p>
            <ul>
              <li>JavaScript (ES7+)</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS / SCSS</li>
              <li>Google Cloud (GCP)</li>
              <li>Adobe</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
