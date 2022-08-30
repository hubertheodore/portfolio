import React from "react";
import "./Intro.css";
import { motion } from "framer-motion";
function Intro() {
  return (
    <div className="Intro" id="home">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="Intro-Container"
      >
        <span className="Intro-I">Hi! My name is</span>
        <h1 className="Intro-Name">Hubert Theodore</h1>
        <h2>I create beautiful UI.</h2>
        <p className="Intro-A">
          I'm a front-end developer with experience in JavaScript, HTML, and CSS
          to build responsive and beautiful UI for websites and interactive
          features specializing in ReactJS.
        </p>
      </motion.div>
    </div>
  );
}

export default Intro;
