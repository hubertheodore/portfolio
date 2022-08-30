import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FiRepeat } from "react-icons/fi";
import { motion } from "framer-motion";
function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oyb0cvp",
        "template_jukc57t",
        form.current,
        "L5lcmkE28Ci7Jbeuh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  function handleDone() {
    setDone(false);
  }
  return (
    <div className="Contact" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="Contact-container"
      >
        <div className="Contact-up">
          <div className="Contact-line"></div>
          <div className="Navbar-Num">02. </div> <h2>Contact Me</h2>{" "}
          <div className="Contact-line"></div>
        </div>
        <div className="Contact-down">
          <form
            className={done ? "Contact-hide" : ""}
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="Contact-row">
              <label>Name</label>
              <input
                className="Contact-input"
                type="text"
                name="user_name"
                required
              />
            </div>
            <div className="Contact-row">
              <label>Email</label>
              <input
                className="Contact-input"
                type="email"
                name="user_email"
                required
              />
            </div>
            <div className="Contact-row">
              <label>Phone Number</label>
              <input
                className="Contact-input"
                type="tel"
                name="user_phone"
                required
              />
            </div>
            <div className="Contact-row">
              <label>Message</label>
              <textarea className="Contact-input" name="message" required />
            </div>
            <input className="Contact-button" type="submit" value="Send" />
          </form>
          <div className="Contact-done">
            <h1>{done && "Thanks for Contacting Me!"}</h1>
            {done && <FiRepeat onClick={handleDone} />}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
