import React, { useState } from "react";

import "./Footer.scss";

import { client } from "../../client";
import { appWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmited(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffe & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:ashik.swfu@outlook.com" className="p-text">
            ashik.swfu@outlook.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +86 1555 963 2606" className="p-text">
            +86 1555 963 2606
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              value={message}
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default appWrap(
  MotionWrap(Footer, "app__testimonial"),
  "contact",
  "app__whitebg"
);
