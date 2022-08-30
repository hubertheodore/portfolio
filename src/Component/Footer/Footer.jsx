import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
function Footer() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="Footer"
      >
        Built by Hubert Theodore
        <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer">
          Inspired by Brittany Chiang
        </a>
      </motion.div>
    </div>
  );
}

export default Footer;
